# 图像生成：扩散模型

参考资料：

[CVPR 2023 Tutorial: Denoising Diffusion Models: A Generative Learning Big Bang](https://cvpr2023-tutorial-diffusion-models.github.io/)

[CVPR 2024 Tutorial: Diffusion-based Video Generative Models](https://showlab.github.io/cvpr2024-tutorial-video-diffusion-models/)

[【较真系列】讲人话-  Diffusion Model 全解（原理+代码+公式）](https://www.bilibili.com/video/BV19H4y1G73r/?spm_id_from=333.880.my_history.page.click&vd_source=f7612ffc8ec6f523824661106b4c304f)

## Denoising Diffusion Models 在图像中的应用

### Diffusion Model 的结构

- 基于 U-Net 结构：被广泛用于 text-to-image Diffusion Model 中

  1. Imagen
  2. Stable Diffusion
  3. eDiff-I

  ![image-20240801095741534](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20240801095741534.png)

- 基于 Transformer 结构：将图像分割为 patch 后作为 tokens 输入至 Transformer 中

  1. Scalable Diffusion Models with Transformers
  2. One Transformer Fits All Distributions in Multi-Modal Diffusion at Scale
  3. Simple Diffusion: End-to-end Diffusion for High Resolution Images

  ![image-20240801100307093](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20240801100307093.png)

### 使用 Diffusion Model 对图像进行编辑和定制

目前有三种常见的引导（Guidance）方法：

1. RGB Pixel Guidance
2. Text Guidance
3. Reference Image Guidance

#### RGB Pixel Guidance

##### [ICLR 2022, SDEdit: Guided Image Synthesis and Editing with Stochastic Differential Equations](https://arxiv.org/abs/2108.01073)

> Given an input image with user guide in a form of manipulating RGB pixels, SDEdit first adds noise to the input, then subsequently denoises the resulting image through the SDE prior to increase its realism.

通过用户在原图上给出一些引导，比如 RGB 像素的涂鸦（stroke painting），甚至可以不给定原图，直接纯手工绘制一个涂鸦画作为输入，模型首先对输入添加噪声，最后通过随机微分方程的先验增加图片的真实性，最终根据输入的带有引导信息的图像生成对应的结果。

![image-20240801165223736](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20240801165223736.png)

> Synthesizing images from strokes with SDEdit. The blue dots illustrate the editing process of our method. The green and blue contour plots represent the distributions of images and stroke paintings, respectively. Given a stroke painting, we first perturb it with Gaussian noise and progressively remove the noise by simulating the reverse SDE. This process gradually projects an unrealistic stroke painting to the manifold of natural images.

下图中的蓝点代表本文的编辑过程，绿色分布代表真实图像的分布，蓝色分布代表 stroke paintings 的分布。

当模型首先被输入 stroke painting 后，使用高斯噪声进行扰动，然后通过模拟反向随机微分方程逐步移除噪声。这一过程逐步将不真实的 stroke painting 投影到自然、真实图像的分布中。

![image-20240801163307411](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20240801163307411.png)

#### Text Guidance

##### [ICLR 2023, DiffEdit: Diffusion-based semantic image editing with mask guidance](https://arxiv.org/abs/2210.11427)

论文引入一个掩码生成模块，该模块确定图像的哪一部分应该被编辑，然后只对掩码部分执行基于文本的扩散。

首先用户输入参考图像以及两个查询文本和参考文本，查询文本 Query 是参考图像的标题或用于描述图像，参考文本 R 用于描述想要替换的效果。

掩码生成模块首先为输入图像添加噪声，并进行两次去噪，一次通过参考文本 R 进行，一次通过查询文本 Q 进行，并根据去噪结果的差异推导出参考图像中的掩码区域。

![image-20240801163117424](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20240801163117424.png)

##### [CVPR 2023, Imagic: Text-Based Real Image Editing with Diffusion Models](https://arxiv.org/abs/2210.09276)

模型接受真实图像（参考图像）和目标文本提示作为输入。

1. 模型首先对目标文本进行编码，得到初始嵌入表示 $e_{tgt}$，然后优化 $e_{tgt}$ 对原始图像进行重构，得到优化后的目标文本嵌入表示 $e_{opt}$

2. 固定优化后的目标文本嵌入表示 $e_{opt}$​，同时使用 Reconstrcution Loss 对第一步使用的预训练 Diffusion Model 进行微调

3. 使用初始目标文本嵌入表示 $e_{tgt}$ 插值优化后的目标文本表示 $e_{opt}$，最终通过 fine-tuning 后的 Diffusion Model 生成最终的目标图像

![Imagic 原理描述](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesa63ebdaaf7691f50349d43fa374fe69e.png)

##### [InstructPix2Pix: Learning to Follow Image Editing Instructions](https://arxiv.org/pdf/2211.09800)

###### 主要方法

> Our method consists of two parts: generating an image editing dataset, and training a diffusion model on that dataset. (a) We first use a finetuned GPT-3 to generate instructions and edited captions. (b) We then use StableDiffusion [52] in combination with Prompt-to-Prompt [17] to generate pairs of images from pairs of captions. We use this procedure to create a dataset (c) of over 450,000 training examples. (d) Finally, our InstructPix2Pix diffusion model is trained on our generated data to edit images from instructions. At inference time, our model generalizes to edit real images from human-written instructions.

论文使用现有的 LLMs 工具生成训练数据集，再使用上述生成的数据微调 Stable Diffusion Model，最终得到可以根据指令 caption 进行图像编辑的 Diffusion Model。

1. 训练数据生成阶段：

   - 首先使用 Input Caption 描述一张图像，并使用 GPT-3 通过指令 Instruction 生成修改过后的图像描述 Edited Caption，如 Input Caption “一张女孩骑在马上的图片”通过指令 Instruction “让她骑在龙上”得到 Edited Caption “一张女孩骑在龙上的图片”
   - 使用 Stable Diffusion 以及 Prompt2Prompt 通过 Input Caption 以及 Edited Caption 生成一组图像对
   - 最终得到图像对以及指令 Instruction 组成一组训练数据

2. 使用上述训练数据微调 Stable Diffusion：

   首先，对于一张图像 $x$，我们将其通过编码器 $\mathcal{E}$ 转换为对应的潜变量 $z=\mathcal{E}(x)$ 。然后，通过一系列的时间步长 $t \in \mathrm{T}$，我们将噪声逐步加入到潜变量 $z$ 中，得到带有噪声的潜变量 $z_t$ 。这里的噪声水平随着时间步长的增加而增大。

   接下来，我们训练一个网络 $\epsilon_\theta$ ，使其能够在给定图像条件 $c_I$ 和文本指令条件 $c_T$ 的情况下，预测出在当前时间步长 $t$，$z_t$ 所加入的噪声。

   为了达到这一目标，我们需要最小化以下目标函数 Latent Diffusion Objective：
   $$
   \left.L=\mathbb{E}_{\mathcal{E}(x), \mathcal{E}\left(c_I\right), c_T, \varepsilon \sim N(0,1), t}\left[\| \varepsilon-\epsilon_\theta\left(z_t, t, \mathcal{E}\left(c_I\right), c_T\right)\right) \|_2^2\right]
   $$

   $\mathbb{E}$ 代表数学期望，训练网络 $\epsilon_\theta$​​ 使其预测的噪声与真实噪声之间的差距尽可能小，即最小化它们之间的欧几里得距离。

   > To support image conditioning, we add additional input channels to the first convolutional layer, concatenating $z_t$ and $\mathcal{E}(c_I)$.

   为了可以使 Stable Diffusion 支持以图像为条件，作者在第一个卷积层中将 $z_t$ 与 $\mathcal{E}(c_I)$​​​ 进行 concat，同时扩充对应网络的 channel 数。

   在微调之前，预训练扩散模型通过 Stable Diffusion v1.5 checkpoint 进行初始化，额外增加通道数的卷积参数都被初始化为 0。

   ###### 训练设置与参数

   模型在 $256 \times 256$​ 分辨率上的 batch size 为 1024，Stable Diffusion 的扩散步数设置为 10, 000，在 8 张 40 GB 显存的 NVIDIA A100 GPU 上训练了 25.5 小时。

   ###### 推理设置与参数

   虽然训练过程在 $256 \times 256$ 分辨率上进行，但是在推理阶段直接生成 $512 \times 512$ 分辨率的图像效果仍然很好，推理过程扩散步数设置为 100，在 NVIDIA A100 GPU 上推理速度为 9 秒。 

![image-20240801172101515](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20240801172101515.png)

#### Reference Image Guidance

[DreamBooth: Fine Tuning Text-to-Image Diffusion Models for Subject-Driven Generation](https://arxiv.org/pdf/2208.12242)

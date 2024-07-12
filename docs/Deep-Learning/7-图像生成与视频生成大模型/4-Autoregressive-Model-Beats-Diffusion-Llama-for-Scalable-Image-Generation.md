# 自回归模型：LlamaGen

原文链接：https://arxiv.org/pdf/2406.06525

## 摘要

> We introduce LlamaGen, a new family of image generation models that apply original “next-token prediction” paradigm of large language models to visual generation domain. It is an affirmative answer to whether vanilla autoregressive models, e.g., Llama, without inductive biases on visual signals can achieve state-of-the-art image generation performance if scaling properly. We reexamine design spaces of image tokenizers, scalability properties of image generation models, and their training data quality. The outcome of this exploration consists of: (1) An image tokenizer with downsample ratio of 16, reconstruction quality of 0.94 rFID and codebook usage of 97% on ImageNet benchmark. (2) A series of class-conditional image generation models ranging from 111M to 3.1B parameters, achieving 2.18 FID on ImageNet 256×256 benchmarks, outperforming the popular diffusion models such as LDM, DiT. (3) A text-conditional image generation model with 775M parameters, from two-stage training on LAION-COCO and high aesthetics quality images, demonstrating competitive performance of visual quality and text alignment. (4) We verify the effectiveness of LLM serving frameworks in optimizing the inference speed of image generation models and achieve 326% - 414% speedup. We release all models and codes to facilitate open-source community of visual generation and multimodal foundation models.

## Motivation 与主要贡献

文章首先介绍了在 NLP 领域发展迅猛的 Autoregressive 模型，引出了在视觉领域的 Autoregressive 模型的发展。VQVAE、VQGA、DALL-E 和 Parti 等。同时指出了先前视觉 AR 模型存在开源社区发展不足，限制了 AR 方法继续研究的问题。此外，作者还提到了以 MaskGIT 为代表的 Masked-prediction Model 以及 VAR 方法，但是仍然体现出了与语言 LLMs 流行使用的自回归方法的较大差异。

同时还介绍了与 AR 思想不同的 Diffusion Models，作者指出，由于 DMs 与在 NLP 的 LLMs 常用的自回归思想有较大的差异，因此给语言和视觉的统一带来了很大的挑战。

作者同时总结了图像生成模型的三个要点：

1. 优秀的 image compressor，即 AR 模型所使用的 image tokenizer、quantizer
2. scalable image generation models，即模型的可扩展性（指参数量方面）
3. 高质量的训练数据

可以看出，本文作者从**统一语言和视觉两个模态**的想法出发，**强调与语言 LLMs 统一**，**而不是在视觉归纳偏置的引导下改进模型的结构**，引出了本文的工作。

1. 图像重建能力高、Codebook 利用率高达 97% 的 image tokenizer
2. 基于语言模态中的 SOTA 模型 **Llama** 的可扩展的图像生成模型
3. 高质量的训练数据，本文提出的文本条件图像生成模型，首先在 LAION-COCO 的 50 million 子集上进行训练，然后在 10 million 高质量图像上进行微调。展示出了视觉质量和文本对齐的竞争性能。
4. 使用 语言模态中常用的 LLM serving framework **vLLM** 来优化图像生成模型的推理速度。

## 模型结构

### Image Tokenizer

使用了与 VQGAN 相同的 encoder-quantizer-decoder 结构。

作者认为 Codebook 会极大地影响 image tokenization 的表现，因此对 Codebook 做出了以下优化，这种设计极大地增强了图像重建质量和 Codebook 的利用率。

对 Codebook 中的向量施加 $l_2$-normalization，降低 Codebook 中向量的维度 $C$，增加 Codebook 的容量大小 $K$​​。

Codebook 以及 Image Tokenizer 的训练损失函数如下所示。

![image-20240712171807732](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20240712171807732.png)

### Image Generation Autoregressive Model

本文的 Autoregressive Model 的结构主要参考了 Llama 的结构，将语言模态中的 SOTA 模型直接引入至图像生成中，统一语言和视觉模态的操作。同时，这样做的好处是可以让视觉生成模型充分利用语言模态的 LLMs 社区中取得的前沿技术。

1. 使用 RMSNorm 进行归一化，RMSNorm 是对 Layer Normalization 的一种改进。

   - RMSNorm 使用平方根的均值来归一化，而不是像 LayerNorm 那样使用整个样本的均值和方差。
   - RMSNorm 移除了 LayerNorm 中的 re-center 操作（即移除了均值项），可以看作 LayerNorm 在均值为 0 时的一个特例。

   $$
   RMSNorm(x)=\frac x{\sqrt{\frac1n\sum_{i=1}^nx_i^2}}*g
   $$

   其中，$x$ 是输入向量，$n$ 是向量维度，$g$​ 是可缩放的参数。

   RMSNorm 的优势在于其计算简单，尤其是在处理较长序列时，可以更有效地进行归一化。

2. 使用 SwiGLU 激活函数，SwiGLU 结合了 GLU（Gated Linear Unit）和 Swish 函数，引入了门控机制来控制输入信号的传递方式。

   组成部分：

   - GLU 部分：使用 sigmoid 函数作为门控器，对输入信号进行筛选和选择性放大。
   - Swish 部分：非线性函数，类似于 ReLU，但在负值区域有平滑的非线性特性。

   $$
   \mathrm{SwiGLU}(x)=\sigma(xW_1+b_1)\odot(xW_2+b_2)
   $$

   其中，$x$ 是输入向量，$W_{1}, W_{2}$ 是权重矩阵，$b_1, b_2$ 是偏置向量，$\sigma$ 是激活函数，通常为 GELU（高斯误差线性单元），$\odot$ 表示逐元素乘法。

   SwiGLU 引入两个线性变换和一个门控机制来增强模型的表现力，优点在于通过门控机制对输入进行加权，能够更灵活地捕捉复杂的输入模式。

3. 本文提出的LlamaGen 模型的每一层都使用了 2D RoPE。

   RoPE（Rotary Position Embedding）是一种位置编码方法，旨在解决绝对位置编码在处理较长序列时的局限性。RoPE 通过将位置信息引入到输入向量的相位中，增强了模型对相对位置的敏感度。其基本思想是将输入向量按位旋转，旋转角度与位置相关。
   $$
   \operatorname{RoPE}\left(x_i\right)=x_i \cdot \cos \left(\theta_i\right)+x_{i+1} \cdot \sin \left(\theta_i\right)
   $$
   - $x_i$ 是输入向量的第 $i$ 个元素。
   - $\theta_i$ 是位置 $i$ 处的旋转角度，通常由固定的正弦和余弦函数生成。

   RoPE 的优势在于能够更好地捕捉序列中的相对位置关系，提高模型的长距离依赖能力。

4. 为了与语言模态的 LLMs 保持统一，作者**没有使用 AdaLN**。

   AdaLN（Adaptive Layer Normalization）是一种自适应层归一化方法，旨在为不同的样本动态调整归一化参数。与传统的层归一化方法不同，AdaLN 根据输入数据自适应地调整均值和方差，从而更好地适应不同的输入特征。
   $$
   \operatorname{AdaLN}(x)=\frac{x-\mu(x)}{\sigma(x)} \cdot \gamma+\beta
   $$
   - $x$ 是输入向量。
   - $\mu(x)$ 和 $\sigma(x)$ 分别是输入 $x$ 的均值和标准差。
   - $\gamma$ 和 $\beta$ 是可训练的缩放和平移参数。

   在 AdaLN 中，均值 $\mu(x)$ 和标准差 $\sigma(x)$​ 是通过一个子网络（通常是一个简单的前馈网络）从输入数据中动态预测的。这使得归一化过程更加灵活，能够适应更复杂的输入模式。

5. LlamaGen 的训练使用了 CFG（Classifier-free Guidance）策略来提高视觉质量和文本-图像对齐。

   - 训练阶段：

     在训练期间，条件信息被随机丢弃，并用一个空的无条件嵌入进行替换。这种方法有助于减少模型对特定条件的依赖性，从而改善生成结果的一般化能力。

   - 推理阶段：

     对于每个 token，其 logit $\ell_g$  是通过以下方式形成的：
     $$
     \ell_g = \ell_u + s(\ell_c - \ell_u)
     $$
     其中：

     - $\ell_c$ 表示条件logit，即基于输入文本提示的信息生成的logit。
     - $\ell_u$ 表示无条件logit，即不考虑任何条件信息时生成的logit。
     - $s$ 是Classifier-free Guidance的比例因子，用于控制条件logit和无条件logit之间的平衡。

   通过这种方式，模型可以利用无条件logit提供的通用信息，同时保留条件logit中的特定上下文信息。这种混合方法有助于提高生成图像的质量和与输入文本的对齐程度。

   作者在文章的实验部分给出了使用 CFG 的结果，实验表明，CFG 过高会导致 FID 分数的下降，可以看作是多样性和保真度之间的权衡（trade-off），随着 CFG 的提高，准确率的提高和召回率的降低证明了这点。

# CVPR 2022: High-Resolution Image Synthesis with Latent Diffusion Models

:::tip[相关链接]

原文链接：https://arxiv.org/pdf/2112.10752

参考资料：[Stable Diffusion 原理介绍与源码分析（一、总览）](https://mp.weixin.qq.com/s/42GdvjQIvHctvTXcmopL7A)、[Stable Diffusion 原理介绍与源码分析（二、DDPM、DDIM、PLMS算法分析）](https://blog.csdn.net/Eric_1993/article/details/129600524)、[Latent Diffusion Models 论文解读](https://zhuanlan.zhihu.com/p/582693939)

:::

## 摘要

> By decomposing the image formation process into a sequential application of denoising autoencoders, diffusion models (DMs) achieve state-of-the-art synthesis results on image data and beyond. Additionally, their formulation allows for a guiding mechanism to control the image generation process without retraining. However, since these models typically operate directly in pixel space, optimization of powerful DMs often consumes hundreds of GPU days and inference is expensive due to sequential evaluations. To enable DM training on limited computational resources while retaining their quality and flexibility, we apply them in the latent space of powerful pretrained autoencoders. In contrast to previous work, training diffusion models on such a representation allows for the first time to reach a near-optimal point between complexity reduction and detail preservation, greatly boosting visual fidelity. By introducing cross-attention layers into the model architecture, we turn diffusion models into powerful and flexible generators for general conditioning inputs such as text or bounding boxes and high-resolution synthesis becomes possible in a convolutional manner. Our latent diffusion models (LDMs) achieve new state of the art scores for image inpainting and class-conditional image synthesis and highly competitive performance on various tasks, including unconditional image generation, text-to-image synthesis, and super-resolution, while significantly reducing computational requirements compared to pixel-based DMs.

## 研究动机与主要贡献

### 主要问题

1. 基于 GAN 的生成模型可以很好地采样出感知质量（语义质量）很好的高分辨率图像，但优化起来成本很高，而且多样性较差，不能很好地捕捉全面的概率分布
2. VQVAE、VQGAN 等其它似然模型可以实现较好的密度估计，但是采样质量不如 GAN 模型
3. Autoregressive 模型由于序列性质的结构，需要较大的计算量和时间成本，因此只能限制于低分辨率采样
4. 近期，扩散模型在密度估计和采样质量上都取得了 SOTA 效果，但直接在**像素空间**进行扩散过程会导致较低的推理速度以及高昂的训练成本

作者提出，几乎所有基于似然的生成模型都分为**两个阶段**：

1. **感知压缩阶段（Perceptual Compression Stage）**：移除图像中的高频细节，但是仍然学习到少量的语义信息
2. **语义压缩阶段（Semantic Compression Stage）**：生成模型学习图像语义以及数据的组成概念

本篇工作主要从感知压缩阶段出发，试图找到一个具有一定的感知能力，但是计算量更合适的空间，来训练 Diffusion Model，以克服目前的 Diffusion Models 存在的缺点

### 主要贡献

1. 

## 主要方法与模型结构

### 图像压缩模型



### 隐空间的扩散模型

### 条件机制


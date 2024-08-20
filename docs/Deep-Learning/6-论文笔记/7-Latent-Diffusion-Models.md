# CVPR 2022: High-Resolution Image Synthesis with Latent Diffusion Models

:::tip[相关链接]

原文链接：https://arxiv.org/pdf/2112.10752

参考资料：[Stable Diffusion 原理介绍与源码分析（一、总览）](https://mp.weixin.qq.com/s/42GdvjQIvHctvTXcmopL7A)、[Stable Diffusion 原理介绍与源码分析（二、DDPM、DDIM、PLMS算法分析）](https://blog.csdn.net/Eric_1993/article/details/129600524)、[Latent Diffusion Models 论文解读](https://zhuanlan.zhihu.com/p/582693939)

:::

## 摘要

> By decomposing the image formation process into a sequential application of denoising autoencoders, diffusion models (DMs) achieve state-of-the-art synthesis results on image data and beyond. Additionally, their formulation allows for a guiding mechanism to control the image generation process without retraining. However, since these models typically operate directly in pixel space, optimization of powerful DMs often consumes hundreds of GPU days and inference is expensive due to sequential evaluations. To enable DM training on limited computational resources while retaining their quality and flexibility, we apply them in the latent space of powerful pretrained autoencoders. In contrast to previous work, training diffusion models on such a representation allows for the first time to reach a near-optimal point between complexity reduction and detail preservation, greatly boosting visual fidelity. By introducing cross-attention layers into the model architecture, we turn diffusion models into powerful and flexible generators for general conditioning inputs such as text or bounding boxes and high-resolution synthesis becomes possible in a convolutional manner. Our latent diffusion models (LDMs) achieve new state of the art scores for image inpainting and class-conditional image synthesis and highly competitive performance on various tasks, including unconditional image generation, text-to-image synthesis, and super-resolution, while significantly reducing computational requirements compared to pixel-based DMs.

## 主要方法与模型结构




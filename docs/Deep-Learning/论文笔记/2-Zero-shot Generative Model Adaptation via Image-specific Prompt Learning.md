# 2023 CVPR: Zero-shot Generative Model Adaptation via Image-specific Prompt Learning

:::tip

论文链接：[CVPR 2023 open access](https://openaccess.thecvf.com/content/CVPR2023/papers/Guo_Zero-Shot_Generative_Model_Adaptation_via_Image-Specific_Prompt_Learning_CVPR_2023_paper.pdf)

代码链接：[Piscart-AI-Research](https://github.com/Picsart-AI-Research/IPL-Zero-Shot-Generative-Model-Adaptation)

文章的命名风格借鉴了CVPR 2022的文章[Few Shot Generative Model Adaption via Relaxed Spatial Structural Alignment](https://openaccess.thecvf.com/content/CVPR2022/papers/Xiao_Few_Shot_Generative_Model_Adaption_via_Relaxed_Spatial_Structural_Alignment_CVPR_2022_paper.pdf)

:::

## 摘要

本文提出了Image-specific Prompt Learning（IPL）方法来解决**风格迁移任务**中生成模型**从源域到目标域的适应**问题。一个Latent Mapper来从源域图像中学习出**包含图像特征**且**适应目标域**的prompt，从而指导目标域生成器的训练。

> This produces a more precise adaptation direction for every cross-domain image pair, endowing the target-domain generator with greatly enhanced flexibility.

训练资料是源域和目标域的文字标签以及源域的图像，**并不需要目标域的图像**。此外，IPL独立于生成模型，可以自由选择Diffusion Model或GAN等。

## 相关工作

### Generative Model Adaption

Generative Model Adaption的任务是使在大规模源域图片上训练的生成模型适应到数据有限的目标域中，根据目标域训练资料的大小可以分为few-shot和zero-shot。

#### few-shot

对于few-shot任务，一般是通过有限的目标域训练集资料fine-tune预训练模型。

然而，fine-tune通常会导致过拟合。为了解决过拟合问题，通常使用的方法是施加强正则化、使用扰动法、跨域对齐或数据增强。

:::info

相关方法文献：

- 强正则化：Han Zhang, Zizhao Zhang, Augustus Odena, and Honglak Lee. Consistency regularization for generative adversarial networks. In ICLR, 2019.
- 扰动法：Sangwoo Mo, Minsu Cho, and Jinwoo Shin. Freeze the discriminator: a simple baseline for fine-tuning GANs. In CVPR Workshops, 2020.
- 跨域对齐：Utkarsh Ojha, Yijun Li, Jingwan Lu, Alexei A Efros, Yong Jae Lee, Eli Shechtman, and Richard Zhang. Fewshot image generation via cross-domain correspondence. In CVPR, 2021.
- 数据增强：Ngoc-Trung Tran, Viet-Hung Tran, Ngoc-Bao Nguyen, Trung-Kien Nguyen, and Ngai-Man Cheung. On data augmentation for GAN training. TIP, 2021.

:::

#### zero-shot

对于零样本的图像生成模型的适应任务，[NADA](https://arxiv.org/pdf/2108.00946.pdf)率先引入了CLIP模型来获取必须的先验知识。即**在目标域只需要文字标签**而不需要图片，将源域和目标域之间的差距编码为在CLIP空间上文字引导的适应方向。

此后，CVPR 2022发表的[DiffusionCLIP](https://arxiv.org/pdf/2110.02711.pdf)使用了Diffusion模型代替NADA中的StyleGANs来获得更好的特征保存能力。

然而

### Prompt Learning



## 主要方法


# 扩散模型（Diffusion Model）

:::tip

在以前的文章[图像生成模型](./4-Image-Generation-Models.md)中已经大概介绍了目前SOTA的图像生成模型的共同点，并初步了解了Diffusion Model，在这篇文章中将详细讲解扩散模型的数学原理等。

:::

## 基本概念

首先回顾一下扩散模型的基本概念和生成过程，可以大概分为两步：

1. Forward Process：对训练集中的图片不断加入与图片shape相同的、从某随机分布中sample出的噪声，直至图片可以被认为是从该随机分布中sample出的矩阵。

   Forward Process又叫做Diffusion Process，在这一步中产生的噪声-加入噪声的图像对可以用来训练Noise Predictor，即从有噪声的图像中预测出其中的噪声，再从输入中减去噪声得到降噪后的图片。

   :::important

   这一步的目的也同样在之前的文章[图像生成模型](./4-Image-Generation-Models.md)中提到过：由于根据文字prompt期待生成的图像并不是固定的，可以将生成的图片在目标域（Target Domain）的分布符合某种随机分布（如Gaussian Distribution）。因此目前的SOTA模型除了将文字Prompt作为输入，还从该随机分布中sample出图片shape的随机向量（矩阵）作为输入，期待模型根据prompt将源域（Source Domain）输入的随机向量对应到目标域的图片。

   :::

2. Reverse Process：使用Diffusion Process训练的Noise Predictor，根据文字Prompt对从随机分布中sample出的图片大小的噪声图片进行降噪，得到原图。

![image-20231202192659531](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20231202192659531.png)

值得注意的是，变分自编码器（Variational Auto-Encoder, abbr. VAE）与Diffusion Model非常相似：VAE对训练集中的原始图像使用Encoder将其变换为某种Latent Representation，这种Latent Representation的分布也是符合某种随机分布的，VAE再通过Decoder将期待生成的目标域图像还原出来。

![image-20231202222644684](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20231202222644684.png)

在下面的文章中我们也会学习一下VAE的数学原理，从VAE到Diffusion Model的具体数学推导，可以参考胡老师推荐的论文[Understanding Diffusion Models: A Unified Perspective](https://arxiv.org/abs/2208.11970)。

![image-20231202232526449](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20231202232526449.png)

训练过程：

1. 首先从数据集中sample出原始图像$\mathbf{x}_0$

2. $t$是从指定范围中sample出的一个integer

3. $\epsilon$是从Normal Distribution中sample出的与$\mathbf{x}_0$相同大小的噪声

4. 根据如下规则进行梯度下降：
   $$
   \nabla_{\theta}\left\|\boldsymbol{\epsilon}-\boldsymbol{\epsilon}_{\theta}(\sqrt{\bar{\alpha}_{t}}\mathbf{x}_{0}+\sqrt{1-\bar{\alpha}_{t}}\boldsymbol{\epsilon},t)\right\|^{2}\tag{1}
   $$
   首先对$\mathbf{x}_0$和$\epsilon$根据规定好的权重$\bar{\alpha}_1,\bar{\alpha}_2,...\bar{\alpha}_T$做weighted sum产生加入噪声后的图像。通常来说，$\bar{\alpha}_1$至$\bar{\alpha}_T$是递减的，当在第2步中sample到的$t$越大，则原始图像$\mathbf{x}_0$对新图像的贡献越大。

   $\epsilon_{\theta}$是Noise Predictor，其输入是加入噪声的图像以及sample出的$t$，而Nosie Predictor $\epsilon_\theta$的Ground Truth就是第3步中sample出的噪声$\epsilon$。

![image-20231202235322516](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20231202235322516.png)
# Understanding Diffusion Models: A Unified Perspective

:::tip[参考资料]

论文原文：https://arxiv.org/pdf/2208.11970

[论文阅读 - Understanding Diffusion Models: A Unified Perspective](https://blog.csdn.net/zjuPeco/article/details/132297170)

:::

## 简介 Introduction

作者认为，生成模型可以分为三大类：

1. GAN：通过对抗的方式进行学习，本文不会讲这块
2. likelihood-based：学习一个使得当前数据集出现概率最高的模型，包括 autoregressive models，normalizing flows 和 VAEs 等等
3. energy-based：将分布学习为任意灵活的能量函数，然后归一化。score-based 和 energy-based 很相似，学习的是 energy-based model 的 score。

其中，2 和 3 都统称为 likelihood-based models，而将 GAN 方法称为 implicit generative models。

本文重点讨论的 Diffusion Model，既可以用 likelihood-based 的观点来解释，也可以使用 score-based 的观点来解释。

## 背景 Background

地穴寓言（Allegory of the Cave）讲的是一群人一生都被锁在洞穴里，只能看到投射到他们面前墙壁上的二维阴影，这些阴影是由看不见的三维物体在大火前经过而产生的。对这样的人来说，他们所观察到的一切实际上都是由他们永远看不到的高维抽象概念所决定的。

![img](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagese99c31abec0b5f4c9665e46bd44395cb.jpeg)

作者从地穴寓言（Allegory of the Cave）中引出 VAE 和 DM 的直观思想，即观测到的数据 $x$ 是由隐变量 $z$ 生成的，通过观测到的数据来估计隐变量的分布，就可以通过采样隐变量来生成数据。

### 证据下界 Evidence Lower Bound

作者首先从似然模型的角度引出证据下界（ELBO）。

![image-20240927105546283](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20240927105546283.png)

直接最大化似然存在对于如自然图像生成等复杂的自然情况是不现实的，因此引入证据下界：证据在这里即是观测数据的似然，下界代表 ELBO 是似然的下界，即：

![image-20240927110116042](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20240927110116042.png)

其中，$q_{\phi}(z|x)$ 是变分分布（variational distribution），即带有参数的模型，根据观测值来预测隐变量，类似于 VAE 中的编码器 Encoder，通过优化参数来逼近隐变量的真实分布 $p(z|x)$。

作者给出了 ELBO 的两种证明方式，分别为使用 Jensen's Inequlity，以及通过引入 KL 散度。

Jensen's Inequlity：

![image-20240927110429078](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20240927110429078.png)

引入 KL 散度：通过引入 KL 散度，可以更直观的体现证据下界的由来，由于 KL 散度适中大于等于 0，因此

![image-20240927110632994](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20240927110632994.png)

### 变分自编码器 Variational Autoencoders

进一步对 ELBO 的公式进行推导：

![image-20240927111726972](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20240927111726972.png)

引入 VAE 的解码器 Decoder $p_{\theta}(x|z)$，将隐变量映射为数据空间的可观测数据，带有可训练的参数 $\theta$。

变分自编码器可以分为两部分：

1. 变分：引入了变分分布，即 Encoder 项，预测真实的隐变量分布，在上述 ELBO 推导中体现为 prior matching term。
2. 自编码器：VAE 将数据空间的可观测数据映射到隐空间，再从隐空间中恢复出来，在上述 ELBO 推导中可以体现为 reconstruction term。

![image-20240927111513959](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20240927111513959.png)

#### 重参数化技巧

VAE 的 Encoder 通常被设计为对角方差的多元高斯，所谓对角方差，就是没有协方差的意思。
$$
q_\phi(z | x)=N\left(z ; \mu_\phi(x), \sigma_\phi^2(x) I\right)
$$

与其对应的先验 Prior 为标准的多元高斯，
$$
p(z)=N(z ; 0, I)
$$

下界的 KL 散度项即 prior matching term 是可以算出解析解的，而前一项即 reconstruction term 则通过蒙特卡洛估计得到，也就是连续离散，使用有限的数据集来估计期望 $E_{q_\phi(z|x)}\left[\log p_\theta(x|z)\right]$ 。

我们的目标函数可以写成
$$
\begin{gathered}
\arg \max _{\phi, \theta} E_{q_\phi(z | x)}\left[\log p_\theta(x | z)\right]-D_{K L}\left(q_\phi(z | x) \| p(z)\right)= \\
\arg \max _{\phi, \theta} \sum_{l=1}^L \log p_\theta\left(x | z^{(l)}\right)-D_{K L}\left(q_\phi(z | x) \| p(z)\right)
\end{gathered}
$$

其中， $z^{(l)}{ }_{l=1}^L$ 是从 $q_\phi(z | x)$ 中采样得到的，每个 $z^{(l)}$ 都是通过随机高斯分布采样的过程得到的，无法进行求导。

为了解决这个问题，引入重参数化技巧，重参化的精妙之处在于使用标准的随机过程构造任意随机过程， 学习只学习构造的参数， 而随机过程是不参与梯度计算的。

假设随机过程为 $x \sim N\left(x;\mu,\sigma^2\right)$，则可以写作：
$$
x=\mu+\sigma \epsilon, \epsilon \sim N(0, I)
$$

在 VAE 当中， 任意一次从 $q_\phi(z|x)$ 中对 $z$ 的采样可以表示为：
$$
z=\mu_\phi(x)+\sigma_\phi(x) \odot \epsilon, \epsilon \sim N(0,I)
$$

其中， $\odot$ 表示 element-wise 的乘积。

VAE 就是借助与重参化的技巧和蒙特卡洛估计来同时更新 $\phi$ 和 $\theta$ 的。训练完成后，只需要在 $p(z)=N(z;0,I)$ 上进行采样， 输入 decoder 就可以得到预测的结果了，encoder 已经不需要了。

$z$ 的维度通常大大小于 $x$，这样可以迫使模型学习最有用的特征表示。

### 多层变分自编码器 Hierachical Variational Autoencoders

在 VAE 的基础上嵌套多层 VAE，增加更深层的隐变量即得到了多层变分自编码器 HVAE。

![image-20240927113832470](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagestypora_imagesimage-20240927113832470.png)

一般情况下，HVAE 中的每一层隐变量 $z_{t}$ 是由其之前的所有隐变量决定的，不过本文只针对马尔可夫过程的 HVAE，也就是仅由 $ z_{t-1}$ 决定，这也被称为 MHVAE。

![image-20240927114207784](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20240927114207784.png)

## 变分扩散模型 Variational Diffusion Models

一种理解 VDM 最简单的思路，就是将 VDM 看成 MHVAE，同时需要满足三个额外的限制：

1. 隐变量的维度需要和输入图片维度一致
2. Encoder 的每一步 encode 并不是学习得到的，而是实现设计好的高斯分布的融合。换句话说，每一步是以上一步为中心的高斯分布
3. 每一步的高斯分布参数会发生一定的变化，使得最后一步接近标准高斯分布

其中，最重要的假设是第 2 条，去掉了 HVAE 中 Encoder $q_{\phi}(z|x)$ 的参数 $\phi$。

![image-20240927114922788](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20240927114922788.png)

### 引入 Noise Schedule

根据第一点限制，模型不需要再区分隐变量 $z$ 和数据空间的 $x$ 了，统一使用 $x_t$ 来表示任意时刻的数据即可。当 $t=0$ 时，$x_0$ 指的是原始图片。当 $t \in[1, T]$ 时，表示对应步数的数据。
$$
q_\phi\left(x_{1: T} \mid x_0\right)=\prod_{t=1}^T q_\phi\left(x_t \mid x_{t-1}\right)
$$

根据第二点限制，每一步的高斯参数人为设计为 $\mu_t\left(x_t\right)=\sqrt{\alpha_t} x_{t-1}, \Sigma_t\left(x_t\right)=\left(1-\alpha_t\right) I$，其中 $\alpha_t$ 是一个潜在的可学习的参数，这里是个超参数，随着步数的变化而变化，即引入了 Noise Schedule。因此，有
$$
q\left(x_t \mid x_{t-1}\right)=N\left(x_t ; \sqrt{\alpha_t} x_{t-1},\left(1-\alpha_t\right) I\right)
$$

根据第三点限制，最终的分布 $p\left(x_T\right)$ 是一个标准的高斯分布，其本质是真实分布逐渐变为标准高斯分布的过程。
$$
p\left(x_{0: T}\right)=p\left(x_T\right) \prod_{t=1}^T p_\theta\left(x_{t-1} \mid x_t\right)
$$

其中，$p\left(x_T\right)=N\left(x_T ; 0, I\right)$ 。

将三个假设对应的数学表示带入 HVAE 的下界公式中，得到如下的新形式：

![image-20240927124823129](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20240927124823129.png)

1. reconstruction term：在原始 VAE 下界公式中也出现了，通过给定的第一步加噪版本来预测原始图像
2. prior matching term：没有可训练的参数，当 T 步数足够大时，最终的分布是标准高斯分布，该项值为0
3. consistency term：维持加噪与降噪的一致性，训练 VDM 的开销也主要来自该项，因为需要在每个时间步进行优化

但是通过蒙特卡罗方法进行优化并不是最优的选择，因为某些项中具有多个随机变量，通过蒙特卡罗方法计算多个随机变量的数学期望会导致方差过大，因此通过贝叶斯法则进行优化可以得到：

![image-20240927130002879](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20240927130002879.png)

![image-20240927130033625](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20240927130033625.png)

优化后 ELBO 的前两项没有发生本质的变化，着重解释第三项 denoising matching term。

1. reconstruction term：在原始 VAE 下界公式中也出现了，通过给定的第一步加噪版本来预测原始图像
2. prior matching term：没有可训练的参数，当 T 步数足够大时，最终的分布是标准高斯分布，该项值为0
3. denoising matching term：其中，$p_{\theta}(x_{t-1}|x_t)$ 可以看作是待学习的降噪模型，而 $q(x_{t-1}|x_t,x_0)$ 可以看作是真实的降噪过程的标签，最大化 ELBO 即最小化 denosing matching term

### 确定的扩散过程

结合贝叶斯法则和重参数化技巧：

![image-20240927131803215](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20240927131803215.png)

![image-20240927131812605](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20240927131812605.png)

可以得到如下推导：

![image-20240927131843689](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20240927131843689.png)

在这里，通过原始图像 $x_0$ 和时间步的参数 $t$，我们可以直接获得任意时间步对应的原始图像加噪版本，换句话说，DM 的扩散过程是确定的，不需要根据时间步一步一步迭代得到相应的结果。

## 基于分数的生成模型 Score-based Generative Models



## 引导 Guidance

### Classifier Guidance

### Classifier-Free Guidance

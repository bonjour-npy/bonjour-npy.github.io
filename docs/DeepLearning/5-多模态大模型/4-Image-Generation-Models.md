# 图像生成模型

## 回顾文字生成

### 自回归方法（AR）

Transformer-based的文字生成模型有很多，如GPT模型，大多使用自回归（Autoregressive, abbr. AR）的方法逐token生成。

![image-20231125212727371](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20231125212727371.png)

若把文字生成的AR方法对应到图像生成中，即一个一个像素生成，会导致速度非常缓慢。

### 非自回归方法（NAR）

若使用NAR即一次生成所有像素的方法，则各像素在生成时无法考虑之间的语义信息，生成的图像质量普遍非常低。

![image-20231127103421435](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20231127103421435.png)

### 目前图像生成模型的共同点

VAE、GAN以及Diffusion Model等生成模型，都不只是单独使用文字作为输入来生成图像，而是使用了**从已知的随机分布（e.g. Normal Disrtibution etc.）中sampl出向量作为模型额外输入**的方法。

大致的思想如下图所示，由于期待生成的图像并不是固定的，可以将预期输出看作是一个分布，即$P(x|y)$，而图像生成模型需要完成的任务就是将输入的从某一随机分布中sampl出的向量对应到图像预期输出分布中的某一个图像。

![image-20231127104041455](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20231127104041455.png)

## 常用图像生成模型速览

### 变分自编码器（VAE）

变分自编码器（Variational Auto-Encoder, abbr. VAE）的训练策略是使用Encoder将输入图像对应（嵌入）到一个符合某随机分布的向量，再将该向量作为Decoder的输入，加上文字prompt后，期待模型产生合适的图像。

![image-20231127104842038](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20231127104842038.png)

:::tip

VAE在训练过程中，期待Ecoder输入多张图片后，输出的向量在一起符合某个随机分布（e.g. Normal Distribution），并不是Encoder直接输出一个Distrubution。

:::

### 基于流的生成模型（Flow-Based Generative Model）

基于流的生成模型采用特殊的网络结构的设计，将Encoder设计为可逆的（invertible），在训练阶段喂入多张图片，期待模型的向量符合某个随机分布。而在预测阶段，由于Encoder是可逆的，输入从该随机分布中sample出来的向量，期待输出对应的图像。

注意，由于Encoder是可逆的，在训练阶段其输入的图片矩阵的形状应该等于输出的随机分布向量的形状，在推理阶段亦然。

![image-20231127111749208](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20231127111749208.png)

### 扩散模型（Diffusion Model）

扩散模型对输入的图片不断加入噪声直至图片成为符合某一随机分布的向量集合；在生成图片时，输入从该随机分布中sample出的向量，不断地denoise从而期待获得生成的图片。

![image-20231127112447752](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20231127112447752.png)

### 生成对抗网络（GAN）

![image-20231127113242641](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20231127113242641.png)

![image-20231127113617851](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20231127113617851.png)


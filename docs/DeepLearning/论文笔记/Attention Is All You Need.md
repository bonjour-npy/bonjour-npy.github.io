# Attention Is All You Need

:::tip

参考资料：

[Transformer模型详解（图解最完整版）](https://zhuanlan.zhihu.com/p/338817680)

[【機器學習2021】Transformer (下)](https://www.youtube.com/watch?v=N6aRv06iv2g&list=PLJV_el3uVTsMhtt7_Y6sgTHGHp1Vb2P2J&index=13)
:::

Transformer是Sequence-to-Sequence (Seq2Seq) 模型，模型的输入是向量序列，输出同样是向量序列，且输出的长度由模型经过学习决定。

## 整体结构

Transformer由Encoder和Decoder组成，编码器和解码器都包含6个Block，整体结构如下图所示。

![image-20231115164324713](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20231115163430121.png)

## Encoder

Transformer Encoder结构如下图所示。其中，Add指的是残差连接Residual Connection，Norm指的是Layer Normalization。

![image-20231115164324713](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20231115165100210.png)


Encoder的具体结构如下图。

![image-20231115164324713](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20231115164324713.png)

输入向量由Word Embedding和Positional Embedding相加得到。输入序列经过Mutil-Head Self-Attention之后，通过Residual Connection加上自身的输入向量，再经过Layer Normalization，之后送入FCN并进行Residual Connection加上送入FCN的输入自身，最终再进行Layer Normalization，以上构成了一个Encoder Block。每一个Block输出的向量序列长度等于输入的向量序列长度。

## Decoder


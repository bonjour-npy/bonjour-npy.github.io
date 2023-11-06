# Self-Attention

:::important

参考链接：

[Illustrated: Self-Attention](https://towardsdatascience.com/illustrated-self-attention-2d627e33b20a#570c)

[动图轻松理解Self-Attention(自注意力机制)](https://zhuanlan.zhihu.com/p/619154409)

:::

## CNN的局限性

### 输入与输出的局限性

CNN模型的输入向量的形状是固定的，其输出向量的形状也是固定的或可以根据不同的下游任务而唯一确定，即输入形状与下游任务共同确定了一个CNN模型的架构，具有较强的固定性。

:::important

在视觉中，输入大多为数字图像，其形状可以大致分为由尺寸和通道数来决定。

从输入图像的尺寸看，当CNN中没有全连接层时，本质上可以接受任意尺寸的输入，但这是狭隘的。若考虑其下游任务以及输出，如FCN（Fully Convolution Network），FCN通过最后通过反卷积将tensor还原到原始图像尺寸，即在CNN中，输入与输出（下游任务的要求）都影响着CNN网络的结构。

从通道数看，CNN本质上可以接受任意通道数的图像输入，但是其模型效果将会受到极大的影响。以一个使用通道数为3的数据集进行训练的CNN模型，但在测试阶段分别使用通道数为 1 和 6 的数据进行推理的情形为例，进行分析：

1. 通道数为1的测试集：

- 情况： 如果使用通道数为 1 的数据进行推理，即灰度图像，而模型在训练时是使用 RGB 数据集训练的，模型可能会受到一些影响。
- 解释： 模型可能在训练时学到了关于颜色的特定信息，而在测试时，如果输入是灰度图像，那些颜色信息将不可用。
- 建议： 在这种情况下，模型可能会失去对颜色信息的敏感性，可能需要进行进一步的调整或微调，以适应灰度图像的特性。

2. 通道数为6的测试集：

- 情况： 如果使用通道数为 6 的数据进行推理，模型可能会面临额外的挑战，因为它在训练时只见过 3 个通道的数据。
- 解释： 模型在训练时学到的权重是基于 3 个通道的数据的，对于额外的通道，模型可能无法有效利用这些信息。
- 建议： 对于通道数不匹配的情况，可以考虑进行通道的适当组合或调整。这可能包括降低通道数（例如，只使用前 3 个通道），或者通过某种方式将 6 个通道映射到 3 个通道，例如通过某种特定的数据预处理。

:::

<img src="https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagestypora_images202310301052535.png"  />

当模型的输入更复杂（sophisticated），是`长度不定`的向量序列（sequence）时，CNN不能很好地处理，且不能解决输出由输入和模型自行决定的下游任务，如生成类任务。

### 关联上下文信息的局限性

CNN中存在局部连接和权值共享的归纳偏置：

- **局部连接：**CNN使用卷积层通过滑动卷积核在输入上进行局部感受野的操作。每个神经元只与输入的一小部分区域相连，这意味着每个神经元只能接触到局部的上下文信息。
- **权值共享：** 权值共享的主要思想是，对于输入图像的不同位置使用相同的权重参数进行卷积操作。这意味着，无论卷积操作发生在图像的左上角、右下角，或者其他任何位置，都使用相同的卷积核进行权值计算。CNN的权值共享使得模型能够学习到图像中的局部特征，这也是一种对于上下文的假设。相邻位置上的权重共享使得模型能够对局部结构进行建模，这种权重共享使得CNN具有更强的归纳偏置。

:::tip

**在多通道卷积中，卷积核不同通道之间的权重参数是独立的**。这使得网络能够学习不同通道之间的特征组合。这种设计有效地捕捉了输入数据中的多通道信息，提高了网络的表达能力。

:::

CNN的设计理念认为：在图像任务中，局部结构通常更为重要，局部连接和权值共享使得CNN更适用于图像处理等任务。但也正是这种设计理念，使得CNN在面临**长输入序列**时不能很好地综合**上下文信息**、提取**位置信息**，因此Self-Attention应运而生，**允许每个位置关注到序列中地所有其他位置**。这种全局关联性质使得Transformer能够捕捉序列中的长距离依赖关系。

## Self-Attention的原理

### 什么是Self-Attention

> A self-attention module takes in $n$ inputs and returns $n$ outputs. What happens in this module? In layman’s terms, the self-attention mechanism allows the inputs to interact with each other (“self”) and find out who they should pay more attention to (“attention”). The outputs are aggregates of these interactions and attention scores.

Self-Attention接受**任意向量数量**的向量序列的输入，输出**每一个向量所有向量（包括自身）的注意力分数**。这使得Self-Attention在捕捉**长距离依赖**和处理序列中的**全局关系**时非常有效。

### Self-Attention的核心思想

自注意力机制的核心思想是为序列中的每个向量分配一个权重（即注意力分数），该权重表示该元素与其他元素的关联强度。这个权重是通过计算输入序列中所有元素与当前元素之间的关系来确定的。通常，这个计算过程使用一个可学习的权重矩阵来完成，即用来生成Key，Query以及Value的权重矩阵。
$$
Attention(Q,K,V)=\textit{softmax}(\frac{QK^T}{\sqrt{d_k}})V \tag{1}
$$

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

Decoder的任务是生成输出，可以根据是否一次性生成输出分为Autoregressive（自回归，abbr. AT）以及Non-Autoregressive（非自回归，abbr. NAT）两种模式。

自回归类型的Decoder需要逐步生成输出，并将自身输出作为下一次的输入，通常每次生成一个词或一个符号。这种方式的缺点是需要保存和更新词表中的所有可能选项，因此在大词汇表上可能会变得非常慢。然而，它的优点是能够利用上下文信息来生成输出，这有助于提高翻译的质量。

非自回归类型的Decoder试图在一次操作中生成整个输出序列。这通常通过使用诸如注意力机制等策略来实现，这些策略允许解码器关注输入序列的不同部分，同时生成输出序列的不同部分。NAT的优点在于其高效性，因为它不需要保存和更新大量的可能选项。然而，由于它不能利用上下文信息来生成输出，因此其生成的输出质量普遍会低于AT。

### Autoregressive Decoder（AT）

#### 整体结构

![image-20231119102540689](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20231119102540689.png)

#### Begin符号

解码器（Decoder）在每个时间步（或每个解码步骤）的输入都来自于前一个时间步自身的输出以及编码器（Encoder）的输出。特别地，首个时间步的输入是Begin符号以及编码器（Encoder）的输出，在每个后续的时间步，解码器的输入会是前一个时间步自身的输出以及编码器（Encoder）的输出，直到生成序列的结束。

:::tip

Begin符号是在Lexicon中添加的特殊符号，用来表示Decoder生成的开始。Begin符号通常被嵌入到一个低维的连续向量空间中，这个向量空间是通过嵌入层（Embedding Layer）学习得到的，在嵌入层中，离散的符号被映射到一个实数向量。

:::

#### 词汇表（Vocabulary）

词汇表（Vocabulary）是一个包含了在特定语言或任务中**所有可能出现**的**所有单词或标记**的集合。在自然语言处理（NLP）中，词汇表是**训练模型时所使用的唯一单词的集合**，由具体的生成任务而确定。

Decoder每一步的输出是一个经过Soft Max的Probability Distribution（概率分布），代表着词汇表中每一个词汇当前生成的概率，取最大概率值的词汇便是模型当前时间步输出的词汇。

![image-20231119094748152](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20231119094748152.png)

#### Masked Multi-Head Self-Attention

观察Decoder的整体结构，掩码多头自注意力的输入是添加位置编码之后的Decoder当前时间步之前的所有输出。

掩码多头自注意力机制用于确保在生成序列的过程中，每个位置只能关注到该位置及其之前的位置。这是通过在Self-Attention的计算中应用一个掩码（mask）来实现的。这确保了在生成序列时，每个位置只能查看到它之前的信息，而不能查看到未来的信息，从而实现了自回归性质。

具体来说，添加掩码后的自注意力机制在生成注意力分数时不再考虑输入序列的所有向量。如在输入向量$a^i$在计算注意力分数时，只将$a^i$的query向量与$a^1$至$a^{i}$的$i$个key向量做dot product，而不考虑$a^i$之后的输入的key。

:::important

对于第$s$个时间步，Masked Mutil-Head Self-Attention的输入是时间步$s$之前Decoder生成的所有输出单词的嵌入表示。

:::

![image-20231119095632569](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20231119095632569.png)

#### 添加断符号

在Decoder的生成中，每一个时间步的输出是词汇表中每一个单词经过Soft Max之后的概率分布。为了保证生成任务可以通过模型自己停止而不是一直重复，我们向Decoder的输出中加入End符号的生成，即每一次输出除了词汇表的所有词汇外还有End符号的概率，当End符号是在所有词汇中概率最大的词汇时，生成停止。

![image-20231119102220262](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20231119102220262.png)

![image-20231119102159884](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20231119102159884.png)

#### Cross-Attention

交叉注意力是连接Encoder和Decoder的桥梁，也是Decoder输入的重要组成部分。

![image-20231119103201335](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20231119103201335.png)

### Non-Autoregressive Decoder（NAT）

![image-20231119103112168](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20231119103112168.png)
# NeurIPS 2020: Denoising Diffusion Probabilistic Models

:::tip相关链接

论文：[arXiv](https://arxiv.org/pdf/2006.11239.pdf)

代码：[GitHub](https://github.com/hojonathanho/diffusion)

参考资料：[54、Probabilistic Diffusion Model概率扩散模型理论与完整PyTorch代码详细解读](https://www.bilibili.com/video/BV1b541197HX/?spm_id_from=333.337.search-card.all.click&vd_source=f7612ffc8ec6f523824661106b4c304f)、[【论文精读】Diffusion Model 开山之作DDPM](https://www.bilibili.com/video/BV1WD4y157u3/?spm_id_from=333.337.search-card.all.click&vd_source=f7612ffc8ec6f523824661106b4c304f)

:::

## 数学原理（Mathematical Preliminary）

### 先验概率与后验概率

#### 条件概率的定义

条件概率是指在给定另一个事件发生的条件下，某一事件发生的概率。条件概率通常用符号$P(A\mid B)$表示，读作“在 B 发生的条件下 A 发生的概率”。

条件概率的计算公式为：
$$
P(A\mid B)=\frac{P(A,B)}{P(B)}
$$
其中：

- $P(A,B)$是事件$A$、$B$同时发生的概率，也叫**联合概率**
- $P(B)$是事件$B$独立发生的概率

#### 全概率公式

对于事件$A$而言，假设有一组**互斥且穷尽**的条件事件$B_{1},B_{2},\ldots B_{n}$构成一个完备事件组，则事件$A$的概率等于事件$A$在每个条件事件$B_i$下发生的概率与该条件事件发生概率的乘积和。
$$
P(A)=\sum_{i=1}^nP(A\mid B_i)\cdot P(B_i)
$$
可以看出，全概率公式是由“因”（条件事件$B_i$）推“果”（结果事件$A$）的过程，即当知道某结果事件的原因后，推断由该原因导致这件事发生的概率是多少。

#### 贝叶斯公式

贝叶斯公式在观测到结果事件$A$发生后，计算其条件事件$B_i$在事件$A$已经发生的条件下而发生的后验概率。

继续沿用上述全概率公式的符号定义，则有：
$$
P(B_i\mid A)=\frac{P(A\mid B_i)\cdot P(B_i)}{P(A)}
$$
其中：

- $P(B_i)$以及$P(A)$称为先验概率
- $P(B_i\mid A)$称为后验概率
- $P(A\mid B_i)$称为似然

### 条件概率与高斯分布的KL散度

#### 条件概率的一般形式

$$
P(A,B,C)=P(C\mid A,B)\cdot P(A,B)=P(C\mid A,B)\cdot P(B\mid A)\cdot P(A)
$$

$$
P(B,C\mid A)=P(B\mid A)\cdot P(C\mid A,B)
$$

其中，第二行公式的推导如下：
$$
\begin{align*}
P(B,C \mid A) &= \frac{P(A,B,C)}{P(A)} \\
&= \frac{P(A,B,C)}{\frac{P(A,B,C)}{P(C \mid A,B) \cdot P(B \mid A)}} \\
&= P(B \mid A) \cdot P(C \mid A,B)
\end{align*}
$$

#### 高斯分布的KL散度

对于两个单一变量的高斯分布$p\sim \mathcal{N}(\mu_1,\sigma_1^2)$和$q\sim \mathcal{N}(\mu_2,\sigma_2^2)$而言，它们的KL散度定义为：
$$
D_{KL}(p,q)=\log\frac{\sigma_2}{\sigma_1}+\frac{\sigma_1^2+(\mu_1-\mu_2)^2}{2\sigma_2^2}-\frac12
$$

### 马尔科夫链条件概率形式

马尔科夫链指当前状态的概率只与上一时刻有关，例如若满足马尔科夫关系$A\to B\to C$，则有：
$$
P(A,B,C) =P(C\mid A,B)\cdot P(A,B)=P(C\mid B)\cdot P(B\mid A)\cdot P(A)
$$

$$
P(B,C\mid A)=P(B\mid A)\cdot P(C\mid B)
$$

### 参数重整化技巧

从任意高斯分布$\mathcal{N}(\mu,\sigma^2)$采样$x$时，可以先从标准高斯分布$\mathcal{N}(0,1)$中sample出$z$，再令
$$
x=\sigma * z + \mu
$$
优势：

1. 由于线性变化，采样过程中对其他参数都有**明确的导数**，可以进行反向传播
2. 可以通过**线性变换**来**控制参数化的采样**
3. 标准正态分布具有**易采样**的性质
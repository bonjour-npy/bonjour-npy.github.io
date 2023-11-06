# 激活函数与Loss的梯度


## 一、激活函数

### 1. Sigmoid函数 / Logistic函数

$$
\sigma(x) = \frac{1}{1 + e^{-x}}
   \tag{1}
$$

$$
\frac{{\rm d}\sigma}{{\rm d}x} = \sigma \space (1 - \sigma)
   \tag{2}
$$


   优点：可以将数据压缩至[0, 1)区间内，有较大实用意义

   致命问题：在输入值较小或较大时，Sigmoid函数的梯度趋近于零，会导致网络参数长时间得不到更新，即梯度弥散问题

   ```python
   from torch.nn import functional as F
   import torch
   
   x = torch.linspace(-100, 100, 10)
   F.sigmoid(x)  # 当x为100时，sigmoid(x)就接近于0了
   ```

### 2. 线性整流单元（Rectified Linear Unit, ReLU）

$$
   f(x) = 
   \begin{cases}
   0 & x < 0\\
   x & x \geq 0\\
   \end{cases}
   \tag{3}
$$
$$
   \frac {{\text d}f(x)}{{\text d}x} = 
   \begin{cases}
   0 & x < 0\\
   1 & x \geq 0\\
   \end{cases}
   \tag{4}
$$

   ```python
   from torch.nn import functional as F
   import torch
   
   x = torch.linspace(-100, 100, 10)
   F.relu(x)
   ```

------

## 二、损失函数

### 1. Mean Squared Error 均方误差

- L2范数是对元素求平方和后再开根号，需要.pow(2)后才可作为损失函数
- 微小的误差可能对网络性能带来极大的影响
  $$
  Loss_{MSE} = \sum{[{y - f(x)]^2}}
  \tag{5}
  $$

  $$
  \Vert y - f(x) \Vert_2 = \sqrt[2]{\sum{[y - f(x)]^2}}
  \tag{6}
  $$

### 2. Cross Entropy Loss 交叉熵损失

#### 信息熵

Cross Entropy中的Entropy指的是信息熵，可以理解为不确定性。衡量一个概率分布本身的不确定程度。

It's a measure of surprise, higher entrpoy means less information and higher uncertainty.

假设一个离散型随机变量$X$的可能取值为$X=x_1,x_2,...,x_n$，而取值事件$x_i$发生的概率为$P_i$，则其信息熵的定义为
$$
\begin{align}
H(P) &= -\sum_i^n{P_i}\space{log_2(P_i)} \\
&= \sum_i^n{P_i}\space{log_2({\frac{1}{P_i}}}) \tag{7}
\end{align}
$$
#### KL散度

在概率论或信息论中，KL散度( Kullback–Leibler Divergence)，又称相对熵（relative entropy)，是描述两个概率分布P和Q差异的一种方法。

存在两个概率分布P和Q，其离散型随机变量$X$的可能取值为$X=x_1,x_2,...,x_n$，而取值事件$x_i$发生的概率分别为$P_i,Q_i$.

KL散度是**非对称的**，即

$$
D_{KL}(P \space || \space Q) \neq D_{KL}(Q \space || \space P)\tag{8}
$$

$$
D_{KL}(P \space || \space Q) = \sum{P_i\space [log_2(P_i)-log_2(Q_i)]}\tag{9}
$$

特别的，$D_{KL}(P_{Label} \space | \space Q_{Pred})$表示当用概率分布Q来拟合真实分布P时，产生的信息损耗，其中**P表示真实分布，Q表示P的拟合分布**。

#### 交叉熵

衡量两个概率分布P和Q之间的不确定性程度。交叉熵的数学表达为
$$
\begin{align}
H(P, \space Q) &= H(P) + D_{KL}(P\space || \space Q) \\
&= - \sum{P_i}\space{log_2({Q_i})} \tag{10}
\end{align}
$$

#### PyTorch中的CrossEntropyLoss

torch.nn.CrossEntropyLoss相当于torch.softmax + torch.log + torch.nn.nllloss.

```python
import torch.nn as nn

# 使用NLLLoss实现
nllloss = nn.NLLLoss()
predict = torch.Tensor([[2, 3, 1], [3, 7, 9]])
predict = torch.log(torch.softmax(predict, dim=-1))
label = torch.tensor([1, 2])
nllloss(predict, label)
# output: tensor(0.2684)

# 使用CrossEntropyLoss实现
cross_loss = nn.CrossEntropyLoss()
predict = torch.Tensor([[2, 3, 1], [3, 7, 9]])
label = torch.tensor([1, 2])
cross_loss(predict, label)
# output: tensor(0.2684)
```

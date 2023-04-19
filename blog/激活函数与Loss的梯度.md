# 激活函数与Loss的梯度

------

## 一、激活函数

1. Sigmoid函数 / Logistic函数

   $$
   \sigma(x) = \frac{1}{1 + e^{-x}}
   \tag{1}
   $$

   $$
   \frac{{\rm d}\sigma}{{\rm d}x} = \sigma{(1 - \sigma)}
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

2. 线性整流单元（Rectified Linear Unit, ReLU）
   $$
   f(x) = 
   \begin{cases}
   0 & x < 0\\
   x & x \geq 0\\
   \end{cases}
   \tag{1}
   $$
   $$
   \frac {{\text d}f(x)}{{\text d}x} = 
   \begin{cases}
   0 & x < 0\\
   1 & x \geq 0\\
   \end{cases}
   \tag{2}
   $$

   ```python
   from torch.nn import functional as F
   import torch
   x = torch.linspace(-100, 100, 10)
   F.relu(x)
   ```

3. Softmax函数

   常用于多分类任务，网络的输出经过Softmax函数后，成为和为1的概率
   $$
   S(y_i) = \frac{e^{y_i}}{\sum_{j}^{n}{e^{y^j}}} \tag{1}
   $$
   

    

------

## 二、损失函数

1. Mean Squared Error 均方误差

   - L2范数是对元素求平方和后再开根号，需要.pow(2)后才可作为损失函数
   - 微小的误差可能对网络性能带来极大的影响
     $$
     Loss_{MSE} = \sum{[{y - f(x)]^2}}
     \tag{1}
     $$

     $$
     \Vert y - f(x) \Vert_2 = \sqrt[2]{\sum{[y - f(x)]^2}}
     \tag{2}
     $$
   
2. Cross Entropy Loss 交叉熵损失

   - binary 二分类问题
   - multi-class 多分类问题
   - 经常与softmax激活函数搭配使用


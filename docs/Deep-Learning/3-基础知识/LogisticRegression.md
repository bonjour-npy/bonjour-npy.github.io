# 关于Logistic Regression


## 一、什么是Logistic Regression

Logistic Regression直译为逻辑回归，是一种用来解决二分类问题的机器学习方法，用于估计某种事物的可能性。

逻辑回归经过sigmoid函数输出的结果可将其视为probability，而后根据设定的置信度阈值来判断该特征向量对应的标签是1还是0，用以解决二分类问题。

---

## 二、逻辑回归（Logistic Regression）和线性回归（Linear Regression）

- 线性回归要求因变量是连续性数值变量，而逻辑回归要求因变量是离散的变量。
- 逻辑回归以线性回归为理论支持，通过Sigmoid函数引入了非线性因素。
- 线性回归常用MSE函数作为损失函数，而逻辑回归作为分类任务的解决方案通常搭配交叉熵损失函数进行训练。

---

## 三、逻辑回归到底是回归任务（Regression）还是分类任务（Classification）？

从历史角度方面看，逻辑回归在诞生时使用MSE作为损失函数，其目标是让输出的概率更接近于1，与回归任务的目标相似。

---

## 四、为什么逻辑回归或其他分类任务不使用分类准确率作为损失函数？

逻辑回归以及其他分类任务在测试角度上的目标让提高分类准确率acc，但并不会将maximize accuracy作为数学上的训练方法，即在训练过程中不使用与acc有关的损失函数。

逻辑回归中的训练目标（评估函数）与预测目标（评估函数）并不相同，但方向一致。
$$
acc = \frac{\sum{I(pred_i==y_i)}}{len(Y)} \tag{1}
$$


如果在训练过程中以最大化acc为目标，当参数在训练过程中向标签方向更新使得逻辑回归输出的正确类的概率增大时，考虑以下两种情况：

1. **gradient = 0** if accuracy unchanged but weights changed:

   xxxxxxxxxx19 1a = torch.tensor([1, 2, 3])2b = torch.tensor([4, 5, 6])3c = zip(a, b)4for i in c:5    print(i)6'''7(tensor(1), tensor(4))8(tensor(2), tensor(5))9(tensor(3), tensor(6))10'''11a = torch.tensor([[1, 2, 3], [3, 2, 1]])12b = torch.tensor([[4, 5, 6], [6, 5, 4]])13c = zip(a, b)14for i in c:15    print(i)16'''17(tensor([1, 2, 3]), tensor([4, 5, 6]))18(tensor([3, 2, 1]), tensor([6, 5, 4]))19'''python

2. **gradient not continuous** since the number of correct is not continunous:

   当上一轮迭代的输出概率很接近阈值时，下一次迭代的概率提升了很少一点但是仍超过了阈值，且一个batch中有大量样本均存在这种情况，此时acc有显著提升而网络的权重的更新极小，此时，与acc有关的Loss函数对权重求导得到的梯度会出现梯度爆炸或者说**不连续**的情况。


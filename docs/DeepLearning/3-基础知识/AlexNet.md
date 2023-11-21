# AlexNet

## 背景

AlexNet是指2012年由Alex Krizhevsky、Ilya Sutskever和Geoffrey Hinton提出的一种卷积神经网络模型，它主要应用于图像分类任务。在当时，AlexNet的表现远远超过了其他参赛的网络模型，并且在ImageNet比赛中获得了第一名。

标志着新的一轮神经网络热潮的开始

![image](https://github.com/bonjour-npy/Image-Hosting-Service/blob/main/typora_images/1.png?raw=true)

## 新的概念和技术

- ReLU激活函数
- Dropout正则化、丢弃法
- 最大池化MaxPooling

## 与LeNet比较

1. 由于输入的图片更大，设置了更大的卷积核尺寸和步长
2. 更大的池化窗口，使用最大池化
3. 在卷积层中设置了更大的输出通道，提取更深层的特征、识别更多的模式
4. 激活函数从Sigmoid改成了ReLU，减缓梯度消失
5. 在卷积层和输出层之间仍使用两个全连接隐藏层，但在输出层之前增加了Dropout层做正则化
6. 使用了数据增强data augmentation

# LeNet

## 背景

LeNet是由Yann LeCun等人于1998年提出的卷积神经网络结构，该结构由卷积层、池化层和全连接层组成，可以高效地处理手写数字图像，并在MNIST数据集上取得了很好的性能。

LeNet-5的成功标志着卷积神经网络在计算机视觉领域中的崛起，并促进了深度学习的快速发展。

---

## 代码实现

`````python
import torch
import numpy as np
from torch import nn as nn
from torch.nn import functional as F
from d2l import torch as d2l
from matplotlib import pyplot as plt
import os

os.environ['http_proxy'] = 'http://127.0.0.1:7890'
os.environ['https_proxy'] = 'https://127.0.0.1:7890'


class LeNetReshape(nn.Module):
    def __init__(self):
        super(LeNetReshape, self).__init__()

    def forward(self, x):
        return x.reshape(-1, 1, 28, 28)


class LeNet5(nn.Module):
    def __init__(self):
        super(LeNet5, self).__init__()
        self.net = torch.nn.Sequential(
            LeNetReshape(),
            # 激活函数应为Sigmoid
            nn.Conv2d(1, 6, kernel_size=5, padding=2), nn.LeakyReLU(), nn.AvgPool2d(kernel_size=2, stride=2),
            nn.Conv2d(6, 16, kernel_size=5), nn.LeakyReLU(), nn.AvgPool2d(kernel_size=2, stride=2),
            nn.Flatten(),
            nn.Linear(16 * 5 * 5, 120), nn.LeakyReLU(),
            nn.Linear(120, 84), nn.Sigmoid(),
            nn.Linear(84, 10))

    def forward(self, x):
        return self.net(x)


def evaluate_accuracy_gpu(net, data_iter, device=None):
    if isinstance(net, torch.nn.Module):
        net.eval()
        if not device:
            device = next(iter(net.parameters())).device
    metric = d2l.Accumulator(2)
    for X, y in data_iter:
        if isinstance(X, list):
            X = [x.to(device) for x in X]
        else:
            X = X.to(device)
        y = y.to(device)
        metric.add(d2l.accuracy(net(X), y), y.numel())  # 此处accuracy是统计
    return metric[0] / metric[1]


def accuracy(y_hat, y):
    return torch.sum(y_hat.argmax(dim=1) == y)


def train(net, train_iter, test_iter, num_epochs, lr, device):
    def init_weights(m):
        if type(m) == nn.Linear or type(m) == nn.Conv2d:
            nn.init.xavier_uniform_(m.weight)

    net.apply(init_weights)
    net.to(device)
    optimizer = torch.optim.SGD(net.parameters(), lr=lr)
    loss = torch.nn.CrossEntropyLoss()
    loss.to(device)
    animator = d2l.Animator(xlabel='epoch', xlim=[1, num_epochs],
                            legend=['train loss', 'train acc', 'test acc'])
    timer, num_batches = d2l.Timer(), len(train_iter)
    metric = d2l.Accumulator(3)
    net.train()
    for epoch in range(num_epochs):
        for batch, (X, y) in enumerate(train_iter):
            timer.start()
            optimizer.zero_grad()
            X, y = X.to(device), y.to(device)
            y_hat = net(X)
            l = loss(y_hat, y)
            l.backward()
            optimizer.step()
            metric.add(l * X.shape[0], accuracy(y_hat, y), y.numel())
            timer.stop()
            train_l = metric[0] / metric[2]
            train_acc = metric[1] / metric[2]
            if (batch + 1) % (num_batches // 5) == 0 or batch == num_batches - 1:
                animator.add(epoch + (batch + 1) / num_batches, (train_l, train_acc, None))
        test_acc = evaluate_accuracy_gpu(net, test_iter)
        animator.add(epoch + 1, (None, None, test_acc))
    print(f'loss {train_l:.3f}, train acc {train_acc:.3f}, test acc {test_acc:.3f}')
    print(f'{metric[2] * num_epochs / timer.sum():.1f} examples/sec on {str(device)}')
    plt.show()

batch_size = 256
train_iter, test_iter = d2l.load_data_fashion_mnist(batch_size)
lr, num_epochs = 0.9, 10
lenet = LeNet5()
train(lenet, train_iter, test_iter, num_epochs, lr, d2l.try_gpu())

`````

## 问题

在分类模型中，最后两个全连接层之间**不要使用ReLU**激活函数。因为ReLU的范围是[0, +∞)，它会将所有负数都变成0。而最后一层全连接层输出了类别信息，倒数第二层的输出值包含着非常重要的类别信息，此时使用激活函数很可能会导致信息丢失。
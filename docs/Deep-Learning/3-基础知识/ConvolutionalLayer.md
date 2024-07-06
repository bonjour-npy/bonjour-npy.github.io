# 卷积层

## 1x1 卷积

$k_h=k_w=1$的卷积不识别空间模式，丢弃了空间信息，只是融合通道

相当于输入形状为$HW \times c_i$，权重形状为$c_o \times c_i$的全连接层

---

## 二维卷积层

- 输入：$c_i \times H \times W$

- 核：$c_o \times c_i \times k_h \times k_w$

- 偏差：$c_o \times c_i$

- 输出：$c_o \times H' \times W'$

- 输出$H'以及W'$的计算：
  $$
  shape_{output} = \frac{shape_{input}-size_{kernel}+2*padding}{stride}+1 \tag{1}
  $$
  
- 计算复杂度：$O(c_o \times c_i \times H \times W \times H' \times W')$

- 总结：

  1. 输出的通道数是卷积层的超参数
  2. 每个输入通道有独立的二维卷积核，所有通道结果相加得到一个输出结果
  3. 每个输出通道有独立的三维卷积核


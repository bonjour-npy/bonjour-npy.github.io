# PyTorch基础

## 一、常用函数部分

1. concat与stack函数

   stack函数对输入的两个张量在指定的维度进行堆叠，是==创建了新的维度==

   concat函数对输入的张量在指定维度进行拼接，没有创建新的维度

   ```python
   # stack和concat函数
   a = torch.rand(4, 3)  # A班4位同学，每位同学3科成绩
   b = torch.rand(4, 3)  # B班4位同学，每位同学3科成绩
   c = torch.stack((a, b), dim=0)  # 理解：年级所有同学的3科成绩（假设年级只有A班和B班两个班，每个班只有四名同学）
   print(c.shape)  # torch.Size([2, 4, 3])
   d = torch.concat((a, b), dim=1)  # 理解：a是A班4位同学3科成绩，b是这4名同学其他3门课的成绩，拼接后代表这4名同学的6科成绩
   print(d.shape)  # torch.Size([4, 6])
   ```

2. list和tensor乘法不同之处

   list的*乘法是复制元素，改变list的shape

   tensor的*乘法是对tensor中的元素进行点乘计算

   ```python
   a = torch.tensor([[3, 3, 3, 3]])
   b = [3]  # list的*乘是复制元素进行扩展
   print(a * 3)  # tensor([[9, 9, 9, 9]])
   print(b * 3)  # [3, 3, 3]
   ```

3. 最大值 / 最小值索引：argmax / argmin

   需要通过参数dim指定操作的维度，dim的理解

   - 官方解释：The dimension to reduce

   - 以二维张量举例，dim=1即在每一行中选出一个最大值 / 最小值元素的索引，索引的shape应为[dim0, 1]，即reduce了dim=1的维度

   ```python
   # 最大值最小值索引
   a = torch.tensor([[0.1, 0.9, 0.3], [0.9, 0.8, 0.99], [0.1, 0.7, 0.8], [0.88, 0.1, 0.2]])  # [4, 3]
   print("argmax output: ", a.argmax(dim=0), a.argmax(dim=1))  # argmax output:  tensor([1, 0, 1]) tensor([1, 2, 2, 0])
   ```

4. Python zip函数

   zip函数可以理解为压缩，将输入的两个迭代器的==最外层==对应元素压缩为一个新的元素

   ```python
   a = torch.tensor([1, 2, 3])
   b = torch.tensor([4, 5, 6])
   c = zip(a, b)
   for i in c:
       print(i)
   '''
   (tensor(1), tensor(4))
   (tensor(2), tensor(5))
   (tensor(3), tensor(6))
   '''
   a = torch.tensor([[1, 2, 3], [3, 2, 1]])
   b = torch.tensor([[4, 5, 6], [6, 5, 4]])
   c = zip(a, b)
   for i in c:
       print(i)
   '''
   (tensor([1, 2, 3]), tensor([4, 5, 6]))
   (tensor([3, 2, 1]), tensor([6, 5, 4]))
   '''
   ```

   
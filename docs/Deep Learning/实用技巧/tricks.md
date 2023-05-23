# 一些小tricks

1. 类似ReLU效果的简单实现

   ```python
   # 将tensor中小于threshold的元素置0，大于等于threshold的元素保持
   tensor *= tensor.abs() >= threshold
   ```
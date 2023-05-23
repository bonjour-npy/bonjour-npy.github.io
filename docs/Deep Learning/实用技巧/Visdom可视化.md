# Visdom可视化

对于TensorFlow框架，可以使用TensorBoard实现可视化。

对于PyTorch框架，可以使用Visdom或TensorBoardX实现可视化，本篇主要讲述Visdom。

## 一、安装Visdom

```
pip install visdom
```

---

## 二、Visdom的使用

### 0. Visdom的启动

首先要通过终端启动Visdom，使用本机端口运行服务器。

以下二者均可。

```bash
visdom
python -m visdom.server
```

### 1. 单窗口单曲线的可视化

```python
from visdom import Visdom

vis = Visdom()  # 实例化
# 创建一条曲线，前两个参数分别为y轴数据、x轴数据，win参数是窗口的唯一标识，opt可选字典中可以给出窗口的title和legend
vis.line([0.], [0.], win='win_id', opts=dict(title="win_title", legend="curve_name")
         
# 在训练过程中的合适位置向初始化的曲线中喂数据
# viz.line([real_y_data], [global_step], win='win_id', update='append')
# 查看训练loss
vis.line([loss.item()], [epoch], win='win_id', update='append')
# 对于非image数据，在传入visdom时仍需要先转化为numpy类型
```

### 2. 单窗口多曲线的可视化

```python
from visdom import Visdom

vis = Visdom()
vis.line([[0., 0.]], [0.], win='win_id', opts=dic(title="win_title", legend=["curve_name_1", "curve_name_2"]))

# 在训练过程中的合适位置向初始化的曲线中喂数据
viz.line([[y1, y2]], [global_step], win='win_id', update='append')
```




# 数字图像处理复习笔记

:::tip

本笔记使用的教材是陈天华所著、清华大学出版社的《数字图像处理及应用：使用MATLAB分析与实现》。

> Take me to church, I'll worship like a dog at the shrine of your lies.
>
> I'll tell you my sins, and you can sharpen your knife.
>
> Offer me that deathless death, good god, let me give you my life.

:::

## 第2章 数字图像处理基础

### 图像的采样与量化

为了从模拟图像产生数字图像，需要进行采样与量化，即对模拟图像在空间$(x, y)$方向上以及亮度函数$f(x, y)$进行离散化处理。

- 采样：

  模拟图像在空间$(x, y)$上的离散化称为采样。

  若在x和y方向上均进行等间距的采样，则称为均匀采样。

  采样点的多少以及采样的间隔直接影响着图像的质量。

- 量化：

  模拟图像经过采样后，在时间和空间上被离散化为像素，但采样所得的像素点的像素值依然是连续量。量化过程就是以离散的灰度值信息代替连续的模拟量灰度信息的过程，是一对多的过程。

  量化可以分为线性量化以及非先行量化。

灰度级一般以2的整数次幂表示，如大多图像为彩色RGB图像，256个灰度级，位深度为8（$2^8=256$），则对于分辨率为256×256的图像来说，需要256×256×3×8位表示，即每一个像素实际上使用24位表示。

### 距离度量

4邻域$N_4(p)$即该像素上下左右的四个点，8邻域$N_*(p)$，对角邻域$N_D(p)$。

![image-20231204174356477](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20231204174356477.png)

像素之间的距离度量必须满足三种关系：

1. 非负性
2. 对称性
3. 三角不等式

三种距离度量：

1. 欧氏距离：
   $$
   D_e(p,q)=\sqrt{(x-s)^2+(y-t)^2}\tag{1}
   $$
   

2. 城市距离
   $$
   D_4(p,q)=\vert x-s\vert+\vert y-t\vert \tag{2}
   $$
   

3. 棋盘距离
   $$
   D_8(p,q)=max(\vert x-s\vert,\vert y-t\vert)\tag{3}
   $$
   

### 图像质量评价

![image-20231204175437763](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20231204175437763.png)

均方误差MSE公式：
$$
MSE=\frac{1}{MN}\sum_{x=1}^{M}\sum_{y=1}^{N}[f(x,y)-g(x,y)]\tag{4}
$$

### 灰度直方图

![image-20231204182548156](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20231204182548156.png)

## 第3章 图像变换

### 傅里叶变换

可以使用傅里叶变换的函数需要满足狄利克莱条件（Dirichlet Condition）：

1. 具有有限个间断点
2. 具有有限个极值点
3. 绝对可积

#### 连续傅里叶变换

一维连续傅里叶变换
$$
F(u)=\int_{-\infty}^{+\infty}f(x)e^{-j2\pi ux}dx\tag{5}
$$
一维连续傅里叶逆变换
$$
f(x)=\int_{-\infty}^{\infty}F(u)e^{j2\pi ux}du\tag{6}
$$
二维连续傅里叶变换
$$
F(u,v)=\int_{-\infty}^{\infty}\int_{-\infty}^{\infty}f(x,y)e^{-j2\pi (ux+vy)}dxdy\tag{7}
$$
二维连续傅里叶逆变换
$$
f(x,y)=\int_{-\infty}^{\infty}\int_{-\infty}^{\infty}F(u,v)e^{j2\pi (ux+vy)}dudv\tag{8}
$$

#### 离散傅里叶变换

一维离散傅里叶变换
$$
F(u)=\sum_{x=0}^{N-1}f(x)e^{-j\frac{2\pi ux}{N}}\tag{9}
$$
一维离散傅里叶逆变换
$$
f(x)=\frac{1}{N}\sum_{u=0}^{N-1}F(u)e^{j\frac{2\pi ux}{N}}\tag{10}
$$
二维离散傅里叶变换
$$
F(u,v)=\sum_{x=0}^{M-1}\sum_{y=0}^{N-1}f(x,y)e^{-j2\pi (\frac{ux}{M}+\frac{vy}{N})}\tag{11}
$$
二维离散傅里叶逆变换
$$
f(x,y)=\frac{1}{MN}\sum_{u=0}^{M-1}\sum_{v=0}^{N-1}F(u,v)e^{j2\pi (\frac{ux}{M}+\frac{vy}{N})}\tag{12}
$$

## 第4章 图像处理的基本运算

### 比例缩放

使用齐次坐标对图像进行比例缩放。

全比例缩放是指x方向和y方向使用相同的比例系数。

当对图像进行放大时，会产生之前没有的像素，此时需要使用插值来解决。

### 灰度级插值

#### 最近邻法插值

![image-20231204211821512](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20231204211821512.png)

#### 双线性插值（Bilinear）

![img](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_images5aa135de29a5477b339c46f0dc05fd54_720.png)

例题：

![image-20231204214449115](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20231204214449115.png)

## 第5章 图像空域增强

![img](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesc2a028df9a0fcfb571be1dc64a1a14ad_720.png)

### 直接灰度变换

#### 非线性变换

非线性变换中的对数拉伸可以拉伸低亮度区域，压缩高亮度区域。

非线性变换中的指数拉伸可以拉伸高亮度区域，压缩低亮度区域。

注意，上述的**拉伸**是指新的图像在该灰度范围内分布的更均匀，即**出现的灰度级更多**；**压缩**的意义是指新的图像在该灰度范围内分布的更狭窄，即出现的灰度级更少。

例题：

![image-20231204221520210](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20231204221520210.png)

答：该图像存在较亮的问题，灰度直方图分布在较高的区域。从直接灰度变换增强法的角度，我们可以采用指数函数变换，对高灰度区进行扩展。

:::tip

分析：该图像中没有低灰度的像素，全部集中在高灰度部分，因此**使用指数函数变换将原来的集中的高灰度区域进行拉伸，扩展其灰度分布的范围**，从而起到增强效果。

:::

### 直方图灰度变换

#### 直方图均衡化

使用以下公式进行均衡化映射：
$$
S(k)=\mathbf{Ceil}(S_k\times L-1)\tag{13}
$$
其中，$L$是原直方图中灰度级数。

例题：

![image-20231204220310925](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20231204220310925.png)

#### 直方图规定化

方法待定。

### 空域滤波增强


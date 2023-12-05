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

傅里叶变换的特性：

![image-20231205153724162](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20231205153724162.png)

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

空域滤波可以根据作用分为平滑滤波以及锐化滤波。

#### 平滑滤波

##### 线性平滑滤波

1. 邻域平均滤波
2. 加权平均滤波
3. 高斯滤波

##### 非线性平滑滤波

1. 中值滤波
2. 最大值滤波
3. 最小值滤波

#### 锐化滤波

锐化滤波消除或减弱图像的低频分量从而增强图像中物体的边缘轮廓信息，使得除边缘以外的像素点的灰度值趋向于零。

## 第6章 图像频域增强

图像从空域变换到频域后，**低频分量对应图像中灰度值变化缓慢的区域，可能是图像的背景**；**高频分量表示图像中灰度值变化迅速的区域，可能是图像的噪声或物体的边缘**。

在图像频谱（经过中心偏移的）中，**中心代表低频信息，四周代表高频信息**。

### 低通滤波

#### 理想低通滤波器（ILPF）

![image-20231205161518110](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20231205161518110.png)
$$
H(u,v)=\begin{cases}1&D(u,v)\leq D_0\\ 0&D(u,v)>D_0\end{cases}\tag{14}
$$

$$
D(u,v)=\sqrt{u^2+v^2}\tag{15}
$$



在截止频率$D_0$处垂直截止，通过频率和截止频率在$D_0$处具有不连续性，通带和阻带之间没有过渡，会产生无限的振铃效应。

#### 巴特沃斯低通滤波器（BLPF）

通带与阻带之间过度平坦，通过频率和截止频率之间没有明显的不连续性，不会出现振铃效应。
$$
H(u,v)=\frac{1}{1+(\sqrt{2}-1)[\frac{D(u,v)}{D_0}]^{2n}}\tag{16}
$$
其中，取$H(u,v)$下降到最大值的0.707时的$D(u,v)$作为截止频率$D_0$。

即当$D(u,v)$达到截止频率时，$\frac{D(u,v)}{D_0}=1$，此时$H(u,v)=0.707$。

#### 指数低通滤波器（ELPF）

一般情况下，取$H(u,v)$下降到最大值的1/2时的$D(u,v)$作为截止频率。
$$
H(u,v)=e^{-[\frac{D(u,v)}{D_0}]^n}\tag{17}
$$
截止频率和通过频率之间具有更光滑的过渡，没有振铃现象。且指数低通滤波器比巴特沃斯低通滤波器衰减更快，处理后的图像更模糊。

#### 梯形低通滤波器（TLPF）

由于在$D_0$尾部包含高频分量$D_1$，处理后图像的清晰度较理想低通滤波器有所改善，但会出现振铃效应，
$$
H(u,v)=\begin{cases}1&D(u,v)<D_0\\ \\ \frac{D(u,v)-D_1}{D_0-D_1}&D_0\leq D(u,v)\leq D_1\\ \\ 0&D(u,v)>D_1\end{cases}\tag{18}
$$

### 高通滤波

#### 理想高通滤波器

$$
H(u,v)=\begin{cases}1&D(u,v)>D_0\\ 0&D(u,v)\leq D_0\end{cases}\tag{19}
$$

性质与理想低通滤波器一样，垂直截断，具有无限振铃效应。

#### 巴特沃斯高通滤波器

$$
H(u,v)=\frac{1}{1+(\sqrt{2}-1)[\frac{D_0}{D(u,v)}]^{2n}}\tag{20}
$$

通常采取$H(u,v)$下降到最大值的0.707时的$D(u,v)$作为截止频率。

#### 指数高通滤波器

$$
H(u,v)=e^{-[\frac{D_0}{D(u,v)}]^n}\tag{21}
$$



#### 梯形高通滤波器

$$
H(u,v)=\begin{cases}1&D(u,v)>D_0\\ \\ \frac{D(u,v)-D_1}{D_0-D_1}&D_1\leq D(u,v)\leq D_0\\ \\ 0&D(u,v)<D_1\end{cases}\tag{22}
$$



### 带通和带阻滤波

#### 带通滤波

顾名思义，带通滤波就是允许某一特定频率的信号通过，而衰减频率范围之外的信号。

理想带通滤波的传递函数为：
$$
H(u,v)=\begin{cases}0&D(u,v)<D_0-\frac{w}{2}\\1&D_0-\frac{w}{2}\leq D(u,v)\leq D_0+\frac{w}{2}\\0&D(u,v)\geq D_0+\frac{w}{2}\end{cases}\tag{23}
$$
其中，$D_0$是通带中心频率，$w$是通带宽度。

#### 带阻滤波

顾名思义，带阻滤波就是衰减某一特定频率范围的信号，而允许频率范围之外的信号通过。

理想带阻滤波的传递函数为：
$$
H(u,v)=\begin{cases}1&D(u,v)<w_1\\0&w_1\leqslant D(u,v)<w_2\\1&D(u,v)\geqslant w_2\end{cases}\tag{24}
$$

## 第7章 彩色图像处理

### 伪彩色图像的处理

伪彩色图像的增强一般用于B超、石油开采以及安检方面。

### 全彩色图像的处理

## 第8章 图像复原

### 图像退化机理

#### 退化原因

1. 成像系统镜头聚焦不准产生的散焦
2. 相机与景物之间的相对运动
3. 成像系统存在的各种非线性因素以及系统本身的性能
4. 模拟图像在数字化过程中，因数字化的精度和误差而损失图像细节
5. 成像系统中存在的各种随机噪声

#### 复原机理

图像复原的过程一般是沿着图像退化的逆向过程进行的。首先根据先验知识分析退化原因，了解图像变质的原理，在此基础上建立图像的退化模型，然后以图像退化的逆过程对图像进行处理。

#### 图像复原与图像增强的区别和联系

联系：二者从表面上看都是为了提高图像的质量

区别：二者在目的和过程上都有明显的区别。

在目的上，图像增强是为了提高图像的视感质量，增强后的图像可能损失一些信息，并与原始图像有一定的差异；而图像复原是为了使待复原的图像与原始图像尽可能的接近。

在过程上。图像增强一般不考虑图像退化的真实过程，而是使用特定技术来突出和强调图像中所关注的特征；而图像复原是直接针对图像产生退化的原因建立相应的数学模型，并沿着退化的逆向进行复原。

### 图像退化模型

图像$f(x,y)$经过退化系统$H(x,y)$后再与噪声$n(x,y)$叠加，得到最后退化的图像$g(x,y)$。

退化系统的一般特性：

1. 线性特性
2. 空间位置不变性：经过退化系统后的输出只有输入有关，而与输入在图像中的位置无关。

## 第11章 图像分割

### 阈值分割法

#### 最佳阈值法

假设图像由物体和背景两部分组成，且物体像素的分布和背景像素的分布均符合正态分布，物体像素的正态分布概率密度函数的均值为$\mu$，背景像素的正态分布概率密度函数的均值为$\nu$，则最佳阈值法确定的阈值为
$$
t=\frac{\mu +\nu}{2}\tag{25}
$$

#### 判别分析法

通过计算灰度直方图的0阶矩和1阶矩最大化类间方差从而得到最佳阈值。

### 边缘检测的基本原理



### 边缘检测算子


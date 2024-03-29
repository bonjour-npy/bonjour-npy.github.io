# 编译原理笔记

## 第一章：前言

<img src="https://github.com/bonjour-npy/Image-Hosting-Service/blob/main/typora_images/Fq_mAL2_G19wtIZSMHEoKcBe6Y4K.png?raw=true" alt="image"  />

### 1.1 编译程序的逻辑结构
   - 词法分析：分析输入串如何构成句子，得到单词序列
   - 语法分析：分析单词序列如何构成程序，构造语法分析树
   - 语义分析：审查语义错误，为代码生成收集类型信息
   - 中间代码生成
   - 代码优化
   - 目标代码生成
   - 表管理、错误检查和处理贯穿**整个过程**

   ![image](https://github.com/bonjour-npy/Image-Hosting-Service/blob/main/typora_images/FiP05XBQ5gzerE-DFd0vT1QOUrE8.png?raw=true)

### 1.2 前端和后端

   - 前端是指与源语言有关、与目标机无关的部分

     如词法分析、语法分析、语义分析、中间代码生成、代码优化中与机器无关的部分

   - 后端是指与目标机有关的部分

     如代码优化中与机器有关的部分、目标代码的生成

### 1.3 遍的概念

遍是指从头到尾扫描一遍源程序

---

## 第二章：文法和语言

### 2.1 句型

若从文法的开始符号开始存在以下推导，则称$\alpha$为该文法的一个句型，句型中既可以包含终结符，也可以包含非终结符，也可以是空串
$$
   S \Rightarrow^* \alpha,\space \alpha \in (V_T \cup V_N)^* \tag{1}
$$

### 2.2 句子：
$$
S \Rightarrow^* \beta,\space \beta \in V_T^* \tag{2}
$$
则称$\beta$是该文法的句子

### 2.3 文法的分类：

   1. 0型文法，又称无限制文法、短语文法

   2. 1型文法，又称文有关文法

   3. 2型文法，又称上下文无关文法（Context-Free Grammar，CFG）

      可用来构建语法树，语法树是上下文无关文法推导和规约的图形化表示
      $$
      \Alpha \rightarrow \beta,\space \Alpha \in V_N, \space \beta \in (V_T \cup V_N)^* \tag{3}
      $$

   4. 3型文法，又称正规文法（Regular Grammar，RG）

      1. 左线性文法
      2. 右线性文法

      ![image-20230528200840812](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora/imagesimage-20230528200840812.png)

### 2.4 最左/右推导：

如果在推导的任何一步都是对产生式左部中的最左/右非终结符进行替换，则称为最左/右推导，其中最右推导也被成为规范推导

---

## 第三章：词法分析

### 3.1 正规文法转换成正规式

![image-20230528201017013](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora/imagesimage-20230528201017013.png)

### 3.2 有穷自动机（FA）

![image-20230528201040816](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora/imagesimage-20230528201040816.png)

1. 确定的有穷自动机（DFA）

   1. DFA的定义及组成

      ![image-20230528201127539](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora/imagesimage-20230528201127539.png)

   2. 确定的含义：在状态转换的每一步，FA根据当前的状态及扫描的输入字符，便能唯一地知道FA的下一状态。

      :::tip
      在状态转换图中的直观体现就是，在确定行表示的当前状态以及列确定的路径后，得到的目的状态不会是元素个数大于1的集合。
      :::

   3. DFA的可接受以及接受集的定义：从开始状态开始，经过该符号串表示的路径，若能到达终态则称该符号串可被改DFA接受。

      ![image-20230528201159840](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora/imagesimage-20230528201159840.png)

2. 不确定的有穷自动机（NFA）

3. `NFA的确定化`，即将NFA转换为DFA（子集法）

   ![image-20230528201222992](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora/imagesimage-20230528201222992.png)

   步骤：

   1. 画出DFA转换表

      :::tip
      转换表中在状态一列中，状态包含原NFA终态的集合要标*，代表其为等价DFA的终态
      :::

      1. 计算$move(T, a)$
      2. 计算$\epsilon -closure(T)$

   2. 为转换表中的状态重命名

   3. 确定初态和终态

4. `DFA的最小化`（分割法）

   步骤如下：

   ![image-20230528201309296](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora/imagesimage-20230528201309296.png)

   :::tip
   考试时注意过程怎么写，下面使用需要三轮分割的列子演示步骤
   :::

   ![image-20230528201322014](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora/imagesimage-20230528201322014.png)

   ![image-20230528201330964](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora/imagesimage-20230528201330964.png)

   ![image-20230528201338655](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora/imagesimage-20230528201338655.png)

   在分割完成后，对可以化简的集合选出一个状态作为代表，删除其他多余状态，重新画图

   ![image-20230528201346345](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora/imagesimage-20230528201346345.png)

### 3.3 正规式RE与有穷自动机FA的互相转化

![image-20230528201408139](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora/imagesimage-20230528201408139.png)

### 3.4 正规文法RM与有穷自动机FA的互相转化

![image-20230528201418070](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora/imagesimage-20230528201418070.png)

---

## 第四章：自顶向下语法分析方法

描述程序语法结构的规则可以使用`2型文法（上下文无关语法，CFG）`

语法分析方法包含确定的和不确定的分析方法，确定的语法分析方法`根据输入符号，唯一选择产生式`

确定的自顶向下分析方法：根据当前的输入符号`唯一地`确定选用哪个产生式`替换相应的非终结符`以往下推导

![image-20230528201657180](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora/imagesimage-20230528201657180.png)

### 1. FIRST集的定义

![image-20230528201545335](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora/imagesimage-20230528201545335.png)

### 2. Follow集的定义

![image-20230529222731177](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora/imagesimage-20230529222731177.png)

:::tip
FOLLOW集的求法可以按照下图技巧进行
:::

   1. 若要求的非终结符是开始符号，则直接将#插入FOLLOW集中
   2. 在所有产生式的右部中找到要求的非终结符
   3. 看非终结符的右侧是什么元素
      1. `若无元素，则直接将该产生式左部的FOLLOW集加入到该非终结符的FOLLOW集中`
      2. 若为终结符，直接将该终结符加入到FOLLOW集中
      3. 若为非终结符，将FIRST(该非终结符)减去$\epsilon$的所有终结符元素都加入至FOLLOW集中

   ![ppt](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora/imagescover699_20230322101450.jpg)

### 3. SELECT集的定义

:::tip
需要注意的是FIRST集、FOLLOW集是针对于符号串而言的，而SELECT集是针对于产生式而言的
:::

![image-20230529222743763](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora/imagesimage-20230529222743763.png)

### 4. LL(1)文法的定义

![image-20230529222755134](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora/imagesimage-20230529222755134.png)

### 5. LL(1)文法的判别

![image-20230529222804098](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora/imagesimage-20230529222804098.png)

:::tip
考试时注意书写过程，需要画出以下两张表
:::

![image-20230529222639440](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora/imagesimage-20230529222639440.png)

### 6. 预测分析表

预测分析表通过计算SELECT集得到，形如下表

行标为各非终结符，列标为输入符号，若从某一非终结符开始的产生式的SELECT集包含某一输入符号，则对应产生式就是行列确定的元素值。

   ![ppt](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora/imagescover696_20230322101455.jpg)

### 7. 非LL(1)文法到LL(1)文法的等价变换

   1. 消除左公因子（回溯）

      :::caution
      同一非终结符的多个产生式存在共同前缀，会导致回溯现象，需要消除
      :::

      ![ppt](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora/imagescover680_20230322101457.jpg)

   2. 消除左递归

      :::caution
      左递归文法会使递归下降分析器陷入无限循环
      :::

      1. 消除直接左递归

         ![ppt](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora/imagescover1129_20230322101459.jpg)

      2. 消除间接左递归

         通过代入法变成直接左递归再消除

## 第五章：自底向上语法分析方法

### 5.1 概念

从的底部向顶部的方向构造语法分析树，采用最左归约的方式，即最右推导的逆过程

:::tip
注意辨别：自顶向下的语法分析采用最左推导的方式

最右推导是规范推导，最左归约是最右推导的逆过程，又称规范归约
:::

### 5.2 方法

1. 算符优先分析法

   按照算符的优先关系和结合性质进行语法分析

2. LR分析法（重点）

   规范规约：句柄作为可归约串

### 5.3 工作过程

![img](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora/imagescover1137_20230329104315.jpg)

### 5.4 移入-归约分析器的4种动作

1. 移入：将下一个输入符号移到栈顶
2. 归约：被归约的符号串的右端处于栈顶，语法分析器在栈中确定这个串的左端非终结符来替换该串
3. 接受：宣布语法分析过程成功完成
4. 报错：发现一个语法错误，并调用错误恢复子程序

![img](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora/imagescover1125_20230329104316.jpg)

### 5.5 重要题型

1. 前导知识：4种项目状态

   1. 归约项目：·在最后
   2. 接受项目：拓广文法的开始符号的产生式，且·在最后
   3. 移进项目：·后面是终结符$V_T$
   4. 待约项目：·后面是非终结符$V_N$

2. 移入-归约分析

   ![image](https://github.com/bonjour-npy/Image-Hosting-Service/blob/main/typora/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-05-30%20085808.png?raw=true)

3. LR(0)分析表 / 构造其识别活前缀DFA 

   https://www.bilibili.com/video/BV1pL4y1E7RE/?spm_id_from=333.788&vd_source=24d8fcf68bc0e2b0003defe0995cf533

   `在写预测分析表的reduce项时，action的每一列都要写`

4. SLR(1)分析表 / 构造其识别活前缀DFA

   https://www.bilibili.com/video/BV12u411S7Us/?spm_id_from=333.788&vd_source=24d8fcf68bc0e2b0003defe0995cf533

   `在写预测分析表的reduce项时，只写产生式左部的FOLLOW集对应的action列`

5. LR(1)分析表 / 构造其识别活前缀DFA

   https://www.bilibili.com/video/BV1Vm4y1Q7XB/?spm_id_from=333.788&vd_source=24d8fcf68bc0e2b0003defe0995cf533

   `在构造项目集时，要加入前向搜索符；并且，在写预测分析表的reduce项时只写前向搜索符对应的action列`

6. LALR(1)分析表 / 构造其识别活前缀DFA

   `在构造项目集时，要加入前向搜索符，但是要合并同心集，把相同表达式但是不同前向搜索符的前向搜索符合并，并且在写预测分析表的reduce项时只写前向搜索符集对应的action列`

   https://www.bilibili.com/video/BV13r4y1m7sQ/?spm_id_from=333.788&vd_source=24d8fcf68bc0e2b0003defe0995cf533

## 概念总结

### 1 编译程序各阶段功能

`词法分析`：从左到右扫描源程序，识别出各个单词，确定单词类型并形成单词序列，进行词法错误检查，对标识符进行登记，即符号表管理
`语法分析`：从词法分析输出的单词序列识别出各类短语，构造语法分析树，并进行语法错误检查
`语义分析`：审查程序是否具有语义错误，为代码生成阶段收集类型信息，不符合规范时报错（符号表是语义正确性检查的依据）
`中间代码生成`：生成中间代码，如三地址指令、四元式、波兰式、逆波兰式、树形结构等
`代码优化`：对代码进行等价变换以求提高执行效率，提高速度或节省空间
`目标代码生成`：将中间代码转化成`目标机上`的机器指令代码或汇编代码（符号表是对符号分配地址的依据）

### 2 语法分析方法的概念

就产生语法树的方向而言，可大致分为`自顶向下`的语法分析和`自底向上`的语法分析两大类。

自顶向下的语法分析方法：主流方法为`递归下降分析法`。根据当前的输入符号`唯一地`确定选用哪个产生式`替换相应的非终结符`以往下推导。

自底向上的语法分析方法：`将输入串w归约为文法开始符号S的过程`。

:::tip
LR(0), SLR(1), LR(1)

LR(0)文法可能存在移进-归约冲突、归约-归约冲突

SLR(1)文法在构造的过程中不存在归约-归约冲突，但有可能出现移进-归约冲突，可以由FOLLOW集解决的话则是SLR(1)文法
:::tip

### 3 翻译模式

翻译模式是适合`语法制导语义计算`的另一种描述形式，可以体现一种合理调用语义动作的算法。

- S-翻译模式：

  仅涉及综合属性的翻译模式，通常将语义动作集合置于产生式右端末尾。

- L-翻译模式：

  既可以包含综合属性，也可以包含继承属性。

### 4 属性文法

在文法基础上，`为文法符号关联有特定意义的属性`，并`为产生式关联相应的语义动作`，称之为属性文法。

- S-属性文法：

  只包含综合属性的属性文法成为S-属性文法

- L-属性文法：

  可以包含综合属性，也可以包含继承属性，但要求产生式右部的文法符号的继承属性的计算只取决于该符号左边符号的属性

### 5 符号表

符号表是编译程序中用于收集标识符的属性信息的数据结构。

各阶段作用：

- 语义分析阶段：语义合法性检查的依据
- 目标代码生成阶段：对符号名进行地址分配的依据
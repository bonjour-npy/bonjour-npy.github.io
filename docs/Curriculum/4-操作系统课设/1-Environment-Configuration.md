# Linux 系统下 GeekOS 的环境配置

## 必须要知道的原理

### GeekOS:

GeekOS是一个基于x86体系结构的微操作系统内核. 由美国马理兰大学的教师开发, 主要用于操作系统课程设计的教育. 出于教学目的, 这个系统内核设计简单, 却又兼备实用性, 它可以运行在真正的X86 PC硬件平台.

在下载好GeekOS后, 在geekos-version/src/目录下会存在project0-project6这7个文件夹, 分别代表GeekOS设计的7个学习任务.

在环境搭建完成之后, 我们进行的每一个项目的代码编写几乎都在geekos-version/src/projecti/src/geekos/文件夹下, 每一个项目的编译都在geekos-version/src/projecti/build文件夹下进行, 即要在终端中通过``cd``进入该目录, 再执行``make depend``和``make``命令.

### bochs:

bochs是一个x86硬件平台的模拟器. GeekOS运行依托于bochs. 

在安装好Linux操作系统后需要安装bochs以及nasm, 以完成GeekOS环境的搭建.

### **二者之间的关系**

GeekOS的开发环境可分为两部分, 一部分是编译环境, 一部分是运行环境. 

![](https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_images/202304251116967.jpg)

在编译过程中, 使用Linux自带的编译环境以及编译命令对特定的GeekOS project进行编译即可. 首先在终端中通过``cd``命令进入geekos-version/src/projecti/build目录, 再执行make depend和make命令. 编译后生成bochs的镜像文件fd.img, 这是bochs运行所必须的文件,也是GeekOS运行环境的前置配置. 

## 安装与配置

安装其实非常简单, 这里主要花篇幅介绍安装后解决报错的配置.

### 安装

需要下载[GeekOS Files](https://sourceforge.net/projects/geekos/files/), 安装bochs, nasm等.

GeekOS直接下载压缩包, 解压即可.

arch系用户通过以下命令即可完成bochs和nasm的安装.

```bash
yay -S bochs nasm
```

其他发行版的安装方法这里不再赘述, 可选择从群文件里下载源文件并编译安装, 师兄师姐也在群文件里给了一些教程指导.

### 配置

完成安装后, 我们就可以开始对project0中的代码进行完善了, 并在geekos-version/src/project0/build目录下执行``make depend``以及``make``命令, 目的是编译project0的代码, 生成bochs的镜像文件fd.img以构建GeekOS的运行环境.

但很多报错就是在``make``这一步产生的, 因此在安装完成后还需要进行**配置**.

配置分为两部分, 一个是对GeekOS中makefile的修改, 另一部分是对bochs的配置文件的修改.

#### GeekOS中makefile的配置

综合网上很多师兄师姐的博客，这三个错误应该是每个人都会遇到的，所以当你不确定自己能不能运行时，请全部完成这三个步骤.

- 问题: ``warnings being treated as errors``

  解决方案: 

  修改geekos-version/src/projecti/build目录下的makefie文件(由于每个project下都存在一个对应的makefile文件, 所以在每个项目编译前都要修改一次)

  ```makefile
  // 修改第149行：
  CC_GENERAL_OPTS := $(GENERAL_OPTS) -Werror 
  // 修改后：
  CC_GENERAL_OPTS := $(GENERAL_OPTS)
  ```

- 问题: ``X86_64与i386输出不兼容``

  解决方案: 

  修改geekos-version/src/projecti/build目录下的makefie文件

  ```makefile
  # Target C compiler.  gcc 2.95.2 or later should work. 100行
  TARGET_CC := $(TARGET_CC_PREFIX)gcc -m32
  
  # Host C compiler.  This is used to compile programs to execute on
  # the host platform, not the target (x86) platform.  On x86/ELF
  # systems, such as Linux and FreeBSD, it can generally be the same
  # as the target C compiler. 106行
  HOST_CC := gcc -m32
  
  # Target linker.  GNU ld is probably to only one that will work.109行
  TARGET_LD := $(TARGET_CC_PREFIX)ld -m elf_i386
  ```

- 问题: ``undefined reference to '__stack_chk_fail'``

  解决方案: 

  修改geekos-version/src/projecti/build目录下的makefie文件

  ```makefile
  # Flags used for all C source files
  // 修改前：148行
  GENERAL_OPTS := -O -Wall $(EXTRA_C_OPTS)
  // 修改后：
  GENERAL_OPTS := -O -Wall -fno-stack-protector $(EXTRA_C_OPTS)
  ```

#### bochs配置文件的修改

在geekos-version/src/projecti/build目录下创建.bochsrc文件

  ```makefile
  # An example .bochsrc file.
  # You will need to edit these lines to reflect your system.
  vgaromimage: file=/usr/local/share/bochs/VGABIOS-lgpl-latest
  # 请根据自己的实际安装路径更改
  romimage: file=/usr/local/share/bochs/BIOS-bochs-latest
  # 请根据自己的实际安装路径更改
  megs: 8
  boot: a
  floppya: 1_44=fd.img, status=inserted
  #floppya: 1_44=fd_aug.img, status=inserted
  log: ./bochs.out
  # keyboard_serial_delay: 200
  # vga_update_interval: 300000
  mouse: enabled=0
  private_colormap: enabled=0
  # i440fxsupport: enabled=0
  # Uncomment this to write all bochs debugging messages to
  # bochs.out.  This produces a lot of output, but can be very
  # useful for debugging the kernel.
  #debug: action=report
  
  ```

到此为止, 所有的配置工作已经完成, 可以正常的进行下一步的代码完善.

如果需要验证自己是否配置成功, 可以参照下一篇博客[GeekOS project 0的实现](https://bonjour-npy.github.io/docs/%E8%AF%BE%E7%A8%8B%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E8%AF%BE%E8%AE%BE/GeekOS%20project%200), 在本篇博客中会有完整的C语言代码编写以及编译、使用bochs执行的过程.

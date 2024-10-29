# Welcome

:::tip

欢迎来到笔记本的服务器使用部分

:::

## 常用命令

### 用户与用户组

参考该目录下的专题文章[用户与用户组的设置](./4-users-and-groups.md)

### 其他常用命令

1. `/etc/profile` 文件是公共 shell 配置文件，在此处加入的配置被所有用户加载
   注意登录式 shell 可能会因为 shell 配置文件的加载问题导致不加载 `/etc/profile`，每次登录之后用户必须执行一次 `source /etc/profile` 来主动加载配置文件
   建议的解决方法，新建用户时通过 `-s /bin/bash` 指定使用的 bash，并且将公共配置写在 `/etc/bash.bashrc` 中
2. 使用 `w` 命令可以查看所有登录该服务器的用户以及来源

## 支持我！


如果可以帮到你的话就给个免费的 Star 吧！

![](../../static/img/intro.png)

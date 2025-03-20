# 用户与用户组的设置

## 用户组

1. 新建用户组
   
   ```bash
   sudo groupadd {group_name}
   ```

2. 查看目前存在的用户组
   
   ```bash
   cat /etc/group
   ```

3. 查看用户所在的用户组
   
   ```bash
   # 或使用 id {user_name} 查看更多信息
   groups {user_name}
   ```

4. 为整个用户组添加 sudo 权限
   
   编辑 `/etc/sudoers` 文件，在 root 用户下添加指定的 {group_name}
   
   ```bash
   # User privilege specification
   root    ALL=(ALL:ALL) ALL
   # 添加以下内容
   %{group_name}   ALL=(ALL:ALL) ALL
   ```

## 用户

1. 新建用户
   
    其中，-r 表示创建系统用户，-N 表示不为该用户名再创建同名的用户组，-m 表示新建/home/{username} 的目录，-s 表示指定该用户登录的 shell，-g 表示将该用户添加到用户组中

   ```bash
   sudo useradd -r -N -m -s /bin/bash -g {group_name} {user_name}
   ```
2. 为普通用户添加 sudo 权限，可以通过直接将该用户加入具有 sudo 权限的用户组中来实现
   
   ```bash
   sudo usermod {user_name} -G {group_name}
   ```

3. 将指定用户移出用户组
   
   注意，`userdel` 命令是直接删除用户
   
   ```bash
   sudo deluser {user_name} {group_name}
   ```

## 文件与目录的读写权限设置

:::tip[参考文件]

[Linux 的文件访问权限及修改权限命令 chmod](https://zhuanlan.zhihu.com/p/44162944)

:::

如何修改权限？一般有两种方法：

1. 文字法：chmod [who][operator][permission] <file-name>
   
   ```
   [who]：表示要修改的主体
   u：用户（user），即文件所有者：创建文件的人
   g：同组用户（group），即文件所属组：与文件属主有相同组ID的所有用户
   o：其他用户（others），即其它人：与文件无关的人
   a：所有用户（all），它是系统默认值
   
   [operator]：表示进行哪种修改操作
   +：添加某个权限
   -：取消某个权限
   =：赋予给定权限并取消其他所有权限（如果有的话）
   
   [permission]：表示要设置的权限
   r：可读
   w：可写
   x：可执行
   ```

2. 数字法：chmod xxx <file-name>

   ```
   xxx 表示数字属性，格式为 3 个从 0 到 7 的数，其对应的主体顺序是 u (user), g (group), o (others)
   
   4 表示可读权限
   2 表示可写权限
   1 表示可执行权限
   0 表示没有权限
   
   相加后的值表示的意义如下：
   7=4+2+1 表示可读可写可执行
   6=4+2 表示可读可写
   5=4+1 表示可读可执行
   3=2+1 表示可写可执行
   ```

案例：在 /home 目录下创建一个 dataset 目录，用于存放服务器的数据集，使所有人都具有执行和读的权限

```bash
chmod 775 /home/dataset

# 可以使用 ls -l 命令查看当前目录下所有目录和文件的所属用户、所属用户组以及其他信息
```
## 其他设置与操作

1. `/etc/profile` 文件是公共 shell 配置文件，在此处加入的配置被所有用户加载
   注意登录式 shell 可能会因为 shell 配置文件的加载问题导致不加载 `/etc/profile`，每次登录之后用户必须执行一次 `source /etc/profile` 来主动加载配置文件
   建议的解决方法，新建用户时通过 `-s /bin/bash` 指定使用的 bash，并且将公共配置写在 `/etc/bash.bashrc` 中
2. 使用 `w` 命令可以查看所有登录该服务器的用户以及来源
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

## 其他设置与操作

1. `/etc/profile` 文件是公共 shell 配置文件，在此处加入的配置被所有用户加载
   注意登录式 shell 可能会因为 shell 配置文件的加载问题导致不加载 `/etc/profile`，每次登录之后用户必须执行一次 `source /etc/profile` 来主动加载配置文件
   建议的解决方法，新建用户时通过 `-s /bin/bash` 指定使用的 bash，并且将公共配置写在 `/etc/bash.bashrc` 中
2. 使用 `w` 命令可以查看所有登录该服务器的用户以及来源
# 常用命令

## 用户与用户组

参考该目录下的专题文章[用户与用户组的设置](./5-users-and-groups.md)

## 其他常用命令

1. `/etc/profile` 文件是公共 shell 配置文件，在此处加入的配置被所有用户加载
   注意登录式 shell 可能会因为 shell 配置文件的加载问题导致不加载 `/etc/profile`，每次登录之后用户必须执行一次 `source /etc/profile` 来主动加载配置文件
   建议的解决方法，新建用户时通过 `-s /bin/bash` 指定使用的 bash，并且将公共配置写在 `/etc/bash.bashrc` 中
2. 使用 `w` 命令可以查看所有登录该服务器的用户以及来源
3. 在模型需要处理较大且较为经典的数据集时，可以将原始数据集下载到公共目录下，之后各用户创建软链接将公共数据集的目录链接到模型中定义的处理目录下

   
   ```sh
   ln -sf /path/to/original_dataset/{dataset_name} /path/to/user_dataset
   ```

   上述命令会在 `/path/to/user_dataset` 下创建名为 `dataset_name` 的目录，该目录链接至原始数据集目录 

   注意在执行删除操作时，如果进入了 `/path/to/user_dataset/{dataset_name}` 目录下再进行操作时，会映射到原目录中造成影响

   如果只是单纯的删除软链接，需要进入到 `/path/to/user_dataset` 中执行：

   ```sh
   rm -rf ./{dataset_name}
   ```

4. 显卡开启 Persistence Mode：
   
   使用 sudo 权限创建守护进程 daemon：

   ```sh
   sudo vim /etc/systemd/system/nvidia-persistenced.service
   ```

   输入以下内容：

   ```sh
   [Unit] 
   Description=NVIDIA Persistence Daemon
   Wants=syslog.target 

   [Service] 
   Type=exec
   Restart=always
   ExecStart=/usr/bin/nvidia-persistenced --verbose

   [Install] 
   WantedBy=multi-user.target
   ```

   更新守护进程：

   ```sh
   sudo systemctl daemon-reload
   ```

   启用该服务：

   ```sh
   sudo systemctl enable nvidia-persistenced.service
   ```

   开始该服务：

   ```sh
   sudo systemctl start nvidia-persistenced.service
   ```
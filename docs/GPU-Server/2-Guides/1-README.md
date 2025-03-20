# 服务器使用指南

:::tip[Welcome!]

欢迎查看图像视频计算课题组服务器使用指南 🤗

指南将在使用和管理过程中持续更新 😆

祝老师和同学们科研顺利 🎉

:::

:::info[关于 R5300-G5（A100）以及 server-l40s（L40S）服务器磁盘配额的说明]

磁盘配额是指用户在服务器上可以写入的磁盘空间上限。

目前的设想方案是使用 `Quota` 工具，限制所有 `students` 用户组用户在 `/home` 目录下的写入数据量。同时，在 `/home/share` 目录下创建了 `datasets` 目录，供所有用户共享使用，避免数据集的反复上传与存储。

后续将会和老师进一步沟通，确定具体的配额方案。**请同学们合理、规范地使用服务器资源，避免磁盘空间的浪费。**

:::

## 开始使用前的重要须知

1. 本指南不仅仅适用于组内的 GPU 服务器，文中大部分操作和使用须知对其它 Linux 系统同样适用。具体情况请自行查阅相关文档。
   
2. 服务器的访问需要连接校园网，使用无线网络时请选择 `UESTC-WiFi`，以太网连接请使用实验室提供的网线。
   
   校外使用请参考信息中心发布的 [VPN 使用说明](https://info.uestc.edu.cn/info/1031/3874.htm)，使用深信服提供的 VPN 客户端 EasyConnect 连接。
   
3. R5300-G5（A100）以及 server-l40s（L40S）服务器账号命名规则为 `{年级}-{姓名拼音全拼}`，例如 `24-nipeiyang`，初始强密码为随机生成的 12 位字符串，包含大小写字母、阿拉伯数字以及特殊符号。
   
   服务器 IP 地址在校园局域网上可见，为保证安全，各位同学在首次登录后请尽快使用 `passwd` 命令修改默认密码，新密码应为 `12 位以上强密码`，并妥善保管自己的 ssh 私钥。

4. R5300-G5（A100）以及 server-l40s（L40S）服务器学生个人用户均不具备 sudo 权限，所属用户组为 `students`。
   
   - 个人用户家目录默认为 `/home/{user_name}`，该目录下所有文件及目录的权限为 `700`，即用户本人具有完全的读、写以及执行权限，同一用户组的用户以及其他用户不拥有任何权限。
 
   - 各账号在创建时，均已指定默认的 shell 为 `bash`，配置文件在各用户家目录中存放，文件名为 `.bashrc`。
   
5. R5300-G5（A100）服务器已经安装好了 NVIDIA 驱动程序，并在 `/home/share/cuda` 目录下内置了若干常用版本的 CUDA 以及对应的 cuDNN，请各用户在首次登录后，参考[多用户、多版本 CUDA 配置手册](./2-multi-version-cuda.md)进行 CUDA 的初始化配置，或根据不同项目的要求更换 CUDA 版本。
   
   以下附上平行用户多版本 CUDA 配置的简略步骤：
   
   - R5300-G5（A100）内置 CUDA 安装路径为 `/home/share/cuda/{cuda-version}`。

   - 用户向 `~/.bashrc` 文件中添加环境变量。

      ```sh
      export PATH="/home/share/cuda/{cuda-version}/bin:$PATH"
      export LD_LIBRARY_PATH="/home/share/cuda/{cuda-version}/lib64:$LD_LIBRARY_PATH"
      export CUDA_HOME="/home/share/cuda/{cuda-version}"
      ```

   - 更新配置文件。

      ```sh
      source ~/.bashrc
      ```

   - 在后续更换 CUDA 版本时，重复上述步骤，只需更改 CUDA 版本号 `{cuda-version}` 即可。

6. server-l40s（L40S）服务器没有内置 CUDA，但是为用户提供使用工具 `conda` 的、更简洁但是同样执行全面安装的安装方法（请用户先完成 `anaconda` 或 `miniconda` 的安装）：
   
   - 使用该方法安装的 CUDA 版本是和 conda 环境绑定的。
  
   - 当用户确定好该 project 需要的 CUDA 版本后，创建虚拟环境。

      ```bash
      conda create -n {conda_env_name} python={python_version}
      ```

   - 执行以下命令安装期望的 CUDA 版本。

      ```bash
      conda install -c "nvidia/label/cuda-{cuda_version}" cuda-toolkit
      # 安装 11.8 的实例
      conda install -c "nvidia/label/cuda-11.8.0" cuda-toolkit
      ``` 

   - 在激活该 conda 环境时，执行 `nvcc --version` 也可以查看到对应的 CUDA 版本。

   - 执行 `which nvcc` 可以检查 CUDA 版本安装在某个具体 env 中
   
   ```bash
   which nvcc
   # 输出类似 /home/{user_name}/{conda_path}/env/{conda_env_name}/bin/nvcc
   ```

7. R5300-G5（A100）以及 server-l40s（L40S）服务器已提前内置了常用工具，如 `vim`、`git`、`tmux`、`gcc`、`g++`、`nodejs` 等，若有其他需求，请联系管理员全局安装或自行通过源码编译，在用户个人目录下安装。

   无 sudo 权限用户的个人安装可以参考本栏目下的文档：[非 sudo 用户安装软件](https://bonjour-npy.github.io/docs/GPU-Server/package-install-without-sudo)

## 易用性配置

### 开发环境配置 ssh 免密登录

以 Visual Studio Code 为例，配置服务器远程 ssh 免密连接请参考 [SSH 免密登录设置](./3-ssh-login.md)。

:::warning[重要警告]

请妥善保管自己的 ssh 私钥，不要将私钥文件发送给他人或以任何形式上传至互联网，以免造成威胁服务器数据安全的问题。

:::

### 使用终端复用器解决如网络中断等本地原因导致的运行中断

VS Code 等开发环境或其它远程连接的终端在手动关闭，或由于网络中断等原因导致关闭时，当前正在运行的进程会停止且丢失，影响模型训练等工作。

考虑使用终端复用器（如 Tmux 或 GNU Screen），将进程与会话分离，把进程挂在服务器上后台运行，屏蔽本地原因对服务器进程运行的影响，避免上述问题。

以 Tmux 为例，简单的使用方法可以参考[终端复用器 Tmux 使用教程](./4-tmux.md)。


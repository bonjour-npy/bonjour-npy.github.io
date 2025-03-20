# 多用户、多版本 CUDA 配置手册

:::tip[说明]

服务器用户可直接跳转至[多版本 CUDA 的配置](#多版本-cuda-的配置)。

:::

## 多版本 CUDA 以及 cuDNN 的安装

### 安装 CUDA

1. 根据 NVIDIA 驱动程序版本以及期望的 CUDA 版本，从 [NVIDIA 官网](https://developer.nvidia.com/cuda-toolkit-archive)下载对应版本的 CUDA runfile (local) 安装包。
   
   ```sh
   wget -c https://developer.download.nvidia.com/compute/cuda/12.4.1/local_installers/cuda_12.4.1_550.54.15_linux.run
   ```

2. 使用 sudo 权限执行安装脚本。

   ```sh
   sudo ./cuda_12.4.1_550.54.15_linux.run
   ```

3. 在安装程序的 `Options` 选项中分别进入 `Toolkit Options` 以及 `Library Install Path`，将 CUDA 安装路径以及库文件路径设置为目标路径，后续即可正常安装。
   
   注意，为了方便其他平行用户的使用，该路径对于平行用户的权限至少为可读以及可执行，同时不赋予写权限。A100 服务器上 CUDA 的安装路径为 `/home/share/cuda/{cuda-version}`。

4. 用户向 `~/.bashrc` 文件中添加环境变量。

   ```sh
   export PATH="/home/share/cuda/{cuda-version}/bin:$PATH"
   export LD_LIBRARY_PATH="/home/share/cuda/{cuda-version}/lib64:$LD_LIBRARY_PATH"
   export CUDA_HOME="/home/share/cuda/{cuda-version}"
   ```

5. 更新配置文件。

   ```sh
   source ~/.bashrc
   ```

### 安装 cuDNN

:::info[说明]

从 cuDNN v9.0.0 版本开始，cuDNN 安装包已经全面更新为 deb 安装的方式，这里仍采取传统的通过 cp 命令复制文件的方式进行安装。

:::

1. 进入 [cuDNN archive 页面](https://developer.nvidia.com/rdp/cudnn-archive)，根据 CUDA 版本下载对应版本的 cuDNN 安装包。

   服务器为 x86_64 架构的 Ubuntu 22.04，下载 `Local Installer for Linux x86_64 (Tar)`。

2. 使用 tar 命令解压安装包 `cudnn-linux-x86_64-8.9.7.29_cuda12-archive.tar`。

   ```sh
   tar -xvf cudnn-linux-x86_64-8.9.7.29_cuda12-archive.tar
   ```

3. 将 cuDNN 库文件复制到 CUDA 安装路径下。

   ```sh
   sudo cp -P /path/to/cudnn/include/* /home/share/cuda/{cuda-version}/include
   sudo cp -P /path/to/cudnn/lib/* /home/share/cuda/{cuda-version}/lib64
   sudo chmod a+r /home/share/cuda/{cuda-version}/include/* /home/share/cuda/{cuda-version}/lib64/*
   ```

## 多版本 CUDA 的配置

1. A100 服务器共享 CUDA 安装路径为 `/home/share/cuda/{cuda-version}`。

2. 用户向 `~/.bashrc` 文件中添加环境变量。

   ```sh
   export PATH="/home/share/cuda/{cuda-version}/bin:$PATH"
   export LD_LIBRARY_PATH="/home/share/cuda/{cuda-version}/lib64:$LD_LIBRARY_PATH"
   export CUDA_HOME="/home/share/cuda/{cuda-version}"
   ```

3. 更新配置文件。

   ```sh
   source ~/.bashrc
   ```

4. 在后续更换 CUDA 版本时，重复上述步骤，只需更改 CUDA 版本号 `{cuda-version}` 即可。
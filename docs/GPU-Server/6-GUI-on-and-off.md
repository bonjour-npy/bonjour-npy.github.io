# Ubuntu 桌面版 GUI 服务的关闭与启动

为了方便后期抢修和使用，实验室服务器安装的系统基本上还是桌面版的 Ubuntu，但是机器存放在机房一般情况下也不需要使用图形界面，因此可以通过以下命令临时/永久关闭图形界面。

## 无需 reboot 的方法

1. 首先确定系统使用的图形界面服务，如 `gdm` 或 `lightgdm`。
   
2. 执行以下命令关闭图形界面服务：
   
   临时停用图形界面服务，但系统重启后仍然会启动该服务

   ```bash
   sudo systemctl stop gdm
   ```

   直接关闭该服务

   ```bash
   sudo systemctl disable gdm
   ```

3. 停用之后重新启用该服务
   
   对应 stop 命令

   ```bash
   sudo systemctl start gdm
   ```
   
   对应 disable 命令

   ```bash
   sudo systemctl enable gdm
   ```

## 需要 reboot 的方法

1. 关闭图形界面
   
   ```bash
   sudo systemctl set-default multi-user.target
   sudo reboot
   ```

2. 开启图形界面
   
   ```bash
   sudo systemctl set-default graphical.target
   sudo reboot
   ```

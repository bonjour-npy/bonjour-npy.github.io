#  挂载Windows磁盘为只读文件

## 一、发生原因

未知，可能是由Windows休眠模式导致

## 二、解决方案

使用ntfsfix修复ntfs磁盘

1. 安装ntfsfix

   ```bash
   yay -S ntfsfix
   ```

2. 查看问题分区

   ```bash
   df -h
   ```

3. 修复

   ```bash
   sudo ntfsfix /dev/your_partition
   ```

4. 重启

   ```bash
   reboot
   ```

   
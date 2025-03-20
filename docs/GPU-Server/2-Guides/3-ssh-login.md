# SSH 免密登录设置

:::info[说明]
本篇文档主要介绍如何在 IDE （以 VS Code 为例）中设置 SSH 免密登录
:::

## 私钥、公钥对生成

1. 使用 `ssh-keygen` 命令生成密钥对：

   ```sh
   ssh-keygen -t rsa -C "your_email@example.com"
   ```

2. 生成密钥对后，会在当前用户的 home 目录下生成 `.ssh` 目录，其中包含 `id_rsa`（私钥）和 `id_rsa.pub`（公钥）两个文件

## 公钥上传至服务器

执行以下命令，自动将公钥复制到服务器的 `~/.ssh/authorized_keys` 文件中

```sh
ssh-copy-id -i ~/.ssh/id_rsa.pub {服务器用户名}@{服务器 IP 地址}
```

## VS Code 配置私钥

1. 打开 VS Code，点击左侧栏的扩展按钮，搜索 `Remote - SSH`，点击安装

2. 安装完成后，点击左侧栏的扩展按钮，点击 `Remote-SSH: Connect to Host...`，输入服务器 IP 地址，点击连接

3. 连接成功后，点击左侧栏的扩展按钮，点击 `Remote-SSH: Edit Configuration...`，在 `~/.ssh/config` 文件中添加以下内容，指定服务器端公钥对应的私钥地址
   
   私钥地址一般默认为 `~/.ssh/id_rsa`

   ```sh
   Host {服务器 IP 地址}
       HostName {服务器 IP 地址}
       User {服务器用户名}
       IdentityFile {私钥路径}
   ```


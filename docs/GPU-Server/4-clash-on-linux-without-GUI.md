# Linux 服务器代理设置（Without GUI）

:::tip[参考链接]

[在 Linux 下使用 Clash 进行全局上网代理及自动订阅代理和规则](https://robinxb.com/posts/2023/clash-on-linux/)

:::

## 下载 Clash-Premium

1. 使用 wget 命令下载 gzip 安装包

2. 使用 gzip 命令解压安装包

   ```bash
   gizp -d clash clash-linux-amd64-n2023-09-05-gdcc8d87.gz
   ```

3. 赋予可执行权限

   ```bash
   chmod +x clash-linux-amd64-n2023-09-05-gdcc8d87
   ```

4. 将可执行文件放置到合适的位置并重命名，如 `/usr/bin` 或 `/home/{user_name}/bin` 目录下

   ```bash
   sudo mv clash-linux-amd64-n2023-09-05-gdcc8d87 /usr/bin/clash
   ```

   请注意将可执行文件的目录添加到环境变量中，如：

   ```bash
   export PATH="/home/{user_name}/bin:$PATH"
   ```

## Clash 的配置

1. 创建 clash 的配置文件目录

   ```bash
   mkdir ~/.config/clash/
   ```

   clash 会默认从当前目录下读取配置文件

2. 将自己的订阅链接对应的 config.yaml 复制粘贴到 `~/.config/clash/config.yaml` 中

3. 运行 clash 验证

   ```bash
   clash -f /path/to/your/config.yaml
   ```

4. 作为服务项设置开机自启

   注意，这里在设置服务时，为了方便多用户使用自己独立的订阅链接来进行连接时，加入 `User=%i` 来区别服务，不同用户的配置文件需要存放在 `/home/{user_name}/.confg/clash` 目录下

   ```bash
   # 创建服务文件，这里 @ 是为了在后续的服务配置中允许通过命令行加载不同的 clash yaml 文件
   sudo vim /etc/systemd/system/clash@.service
   ```

   在 `clash@.service` 中加入以下内容

   ```
   [Unit]
   Description=Clash Service in Go for %i.
   After=network.target
   
   [Service]
   User=%i
   ExecStart=/usr/bin/clash -f /home/%i/.config/clash/config.yaml
   Restart=on-failure
   
   [Install]
   WantedBy=multi-user.target
   ```

   重新加载 `systemd`

   ```bash
   systemctl daemon-reload
   ```

   启用服务，使 clash 开机自启

   ```bash
   systemctl enable clash@{user_name}
   ```

   立即根据用户名启用对应配置文件的 clash 服务

   ```bash
   systemctl start clash@{user_name}
   ```

   查看用户的 clash 服务

   ```bash
   systemctl status clash@{user_name}
   ```

## Linux 系统代理配置

上面的步骤已经完成了 Clash 的安装以及相应的服务配置，现在需要为 Linux 配置系统代理，使 Linux 中的网络流量通过刚配置的 Clash yaml 进行转发

在终端的配置文件如 `~/.bashrc` 中添加 `proxy_on` 以及 `proxy_off` 函数，便于通过设置 Linux 的系统代理或关闭

```bash
# 用于设置终端代理的函数
function proxy_on() {
    export http_proxy=http://127.0.0.1:7890
    export https_proxy=http://127.0.0.1:7890
    export all_proxy=socks5://127.0.0.1:7891
    echo "Proxy enabled."
}

# 用于取消终端代理的函数
function proxy_off() {
    unset http_proxy
    unset https_proxy
    unset all_proxy
    echo "Proxy disabled."
}
```

注意，更改 `bashrc` 后需要重启当前终端或者使用 `source ~/.bashrc` 来使当前终端更新

当需要 Linux 终端通过 Clash 转发流量时，执行 `proxy_on` 命令，当不需要时可以通过 `proxy_off` 关闭代理

## 代理配置成功与否的验证

使用 `wget` 命令获取 `google.com` 主页

```bash
wget www.google.com
```

若代理配置成功，会在当前目录下下载到 Google 网站的 `index.html` 文件

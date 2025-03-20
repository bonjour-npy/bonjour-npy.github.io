# 终端复用器 Tmux 使用教程

:::info[参考资料]
[Tmux 使用教程](https://www.ruanyifeng.com/blog/2019/10/tmux.html)
:::

## 使用背景

命令行的典型使用方式是，打开一个终端窗口（terminal window，以下简称"窗口"），在里面输入命令。用户与计算机的这种临时的交互，称为一次"会话"（session）。

会话的一个重要特点是，窗口与其中启动的进程是连在一起的。打开窗口，会话开始；关闭窗口，会话结束，会话内部的进程也会随之终止，不管有没有运行完。

一个典型的例子就是，SSH 登录远程计算机，打开一个远程窗口执行命令。这时，网络突然断线，再次登录的时候，是找不回上一次执行的命令的。因为上一次 SSH 会话已经终止了，里面的进程也随之消失了。

为了解决这个问题，会话与窗口可以"解绑"：窗口关闭时，会话并不终止，而是继续运行，等到以后需要的时候，再让会话“绑定”其他窗口。

:::warning[可以解决的问题]
使用 tmux 运行训练等脚本可以实现在服务器上挂载训练进程的效果，本机可以正常退出或关机，避免由于本机网络丢失等其他原因导致训练终端
:::

## 使用方法

1. 新建 tmux session
   
   ```sh
   tmux new-session -s {session_name}
   ```

2. 解绑 detach tmux session
   
   ```sh
   首先键入命令前缀，即同时按住 ctrl 与 b，再按下 d 完成当前会话与当前窗口的 detach
   ```

3. 重新 attach tmux session 
   
   ```sh
   tmux attach -t {session_name_or_id}
   ```

4. 在 tmux session 中进行翻页
   
   通常情况下，直接在 tmux 会话中使用滚轮或其他交互方式无法实现翻页，还会导致 tmux 将其识别为特殊字符，需要进入翻页模式

   ```sh
   首先键入命令前缀，即同时按住 ctrl 与 b，再按下 [，进入翻页模式
   ```

5. 查看当前的 tmux 会话，方便管理以及 attach
   
   ```sh
   tmux ls
   ```

6. 关闭 tmux 会话
   
   ```sh
   # 同时按下 ctrl 与 c 停止当前执行的命令后，输入 exit 正常退出，或执行
   tmux kill-session -t {session_name_or_id}
   ```
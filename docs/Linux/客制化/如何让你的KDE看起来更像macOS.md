# 如何让你的KDE看起来更像macOS

## 一、latte-dock

1. dock显示的图标是全局图标，程序启动器的desktop文件位于/usr/share/applications中，全局主题中图标主题的程序logo位于*~/.local/share/icons/Mkos-Big-Sur-Night/128x128/apps*(**deppending on specific situation**)中。在logo文件夹中挑选想要的logo，在desktop中的icon位置修改即可
2. 应用更新的时候会**同时更新.desktop文件**，因此在更换图标是最好直接更换在主题文件中替换icon，而不是更改desktop的icon路径
3. Finder小组件中application title文字不能垂直居中，可以更换为Window title插件

## 二、Kde Plasmoids

Finder栏中Plasmoids左半部分从左至右依次为：

- kpple menu
- application title/window titile(if the text of application title can't be centered vertically)
- global menu

右半部分从左至右依次为：

- resources monitor  (fork)
- mcOS BS Inline Battery
- 网络
- Control Center(replace the icon with search icon)
- Control Center(replace the icom with menu icon)
- Better Inline Clock

安装方法：

```bash
plasmpkg2 -u xxx.plasmoid
```


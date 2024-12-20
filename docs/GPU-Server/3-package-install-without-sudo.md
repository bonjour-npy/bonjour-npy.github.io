# 非 sudo 用户安装软件

:::tip[参考资料]

[[转载]Linux下非root用户如何安装软件](https://www.cnblogs.com/jiading/p/12055862.html#:~:text=%E5%A4%A7%E9%83%A8%E5%88%86%E8%BD%AF%E4%BB%B6%E9%BB%98%E8%AE%A4%E5%AE%89%E8%A3%85%E8%B7%AF%E5%BE%84%E6%98%AF%20%2Fusr%2Fbin%20%E6%88%96%20%2Fusr%2Flocal%2Fbin%EF%BC%8C%E5%AE%89%E8%A3%85%E6%97%B6%E9%9C%80%E8%A6%81%E5%B0%86%E5%8F%AF%E6%89%A7%E8%A1%8C%E6%96%87%E4%BB%B6%E5%A4%8D%E5%88%B6%E5%88%B0%E8%BF%99%E4%BA%9B%E7%9B%AE%E5%BD%95%E4%B8%8B%E3%80%82%20%E6%99%AE%E9%80%9A%E7%94%A8%E6%88%B7%E6%B2%A1%E6%9C%89%E7%9B%AE%E5%BD%95%E7%9A%84%E5%86%99%E6%9D%83%E9%99%90%EF%BC%8C%E4%BA%8E%E6%98%AF%E6%8F%90%E7%A4%BA%E6%97%A0%E6%9D%83%E9%99%90%E5%AF%BC%E8%87%B4%E5%AE%89%E8%A3%85%E5%A4%B1%E8%B4%A5%E3%80%82%20%E5%88%87%E6%8D%A2%E5%88%B0root%E6%A8%A1%E5%BC%8F%E5%90%8E%EF%BC%8C%E4%B8%80%E5%88%87%E5%8F%88%E9%83%BD%E5%A5%BD%E4%BD%BF%E4%BA%86%E3%80%82%20%E6%A0%B9%E6%8D%AE%E6%99%AE%E9%80%9A%E8%B4%A6%E5%8F%B7%E7%9A%84%E6%9D%83%E9%99%90%EF%BC%8C%E5%8F%AF%E4%BB%A5%E5%BE%97%E5%87%BA%E7%BB%93%E8%AE%BA%EF%BC%9A%E9%9D%9Eroot%E7%94%A8%E6%88%B7%EF%BC%8C%EF%BC%88%E5%87%A0%E4%B9%8E%EF%BC%89%E5%8F%AA%E8%83%BD%E5%AE%89%E8%A3%85%E8%BD%AF%E4%BB%B6%E5%88%B0%E5%AE%B6%E7%9B%AE%E5%BD%95%E4%B8%8B%E3%80%82%20%E4%B8%8B%E9%9D%A2%E6%98%AFLinux%E4%B8%8B%E9%9D%9Eroot%E7%94%A8%E6%88%B7%E5%AE%89%E8%A3%85%E8%BD%AF%E4%BB%B6%E7%9A%84%E4%B8%80%E8%88%AC%E6%B5%81%E7%A8%8B%EF%BC%9A,%E4%B8%8B%E8%BD%BD%EF%BC%8C%E4%B9%9F%E5%8F%AF%E4%BB%A5%E7%94%A8%E7%B1%BB%E4%BC%BC%20apt-get%20source%20%E7%9A%84%E6%96%B9%E5%BC%8F%E8%8E%B7%E5%8F%96%E4%BB%93%E5%BA%93%E4%B8%AD%E8%BD%AF%E4%BB%B6%E6%BA%90%E4%BB%A3%E7%A0%81%EF%BC%9B%20%E8%A7%A3%E5%8E%8B%E6%BA%90%E4%BB%A3%E7%A0%81%E5%AE%89%E8%A3%85%E5%8C%85%EF%BC%9B%E4%BE%8B%E5%A6%82%E5%AF%B9%E4%BA%8Egzip%E6%A0%BC%E5%BC%8F%E7%9A%84tar%E5%8C%85%EF%BC%9A%20tar%20-zxvf%20xxx.tar.gz%EF%BC%9B)

:::

1. 从软件官网或 GitHub 下载 gzip 格式文件源码压缩包（.tar.gz），可使用 `wget` 命令

2. 使用 `tar -xzvf` 命令解压 gzip 压缩包

3. `cd` 进入解压后的文件夹内

4. 执行 `./configure --prefix=/home/user_name/` 完成软件安装前缀的设置

5. `make -h` 并行进行编译

6. `make install` 完成安装，若源码中未提供 `configure` 脚本，可以使用 `make install DESTDIR=/home/nipeiyang/` 来指定安装目录

7. 最后在 shell 的对应配置文件中添加环变量，例如，使用 `echo` 命令将安装软件的 bin 目录追加到 `.bashrc` 中

    ```bash
    echo 'export PATH=/home/nipeiyang/bin:$PATH' >> ~/.bashrc
    ```

8. 完成安装
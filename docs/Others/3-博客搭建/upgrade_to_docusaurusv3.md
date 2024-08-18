# 更新至 Docusaurus V3

按照[官方文档](https://docusaurus.io/zh-CN/docs/next/migration/v3#upgrading-math-packages)将 Docusaurus 从 V2.4.3 升级至 V3.5.2，记录以下主要问题。

## MDX 升级后的大量渲染报错

升级至 V3 版本需要升级 MDX 版本至 V3，升级后在渲染 mardown 文件时出现了大量报错，这是因为在新的 MDX 中默认将将 .md 文件也当作 .mdx 文件进行渲染了，在 `docusaurus.config.js` 中进行如下声明即可。

```js
markdown:{
    format: "detect"
},
```

## 升级后的数学公式渲染问题

> If you use Docusaurus to render [Math Equations](https://docusaurus.io/zh-CN/docs/next/markdown-features/math-equations), you should upgrade the MDX plugins.
>
> Make sure to use `remark-math 6` and `rehype-katex 7` for Docusaurus v3 (using MDX v3). We can't guarantee other versions will work.

Docusaurus 默认使用 `katex` 进行 LaTex 公式渲染，需要同步升级 remark-math 以及 rehype-katex。

## Admonitions 无法正常渲染

> Docusaurus now implements admonitions with [Markdown Directives](https://talk.commonmark.org/t/generic-directives-plugins-syntax/444) (implemented with [remark-directive](https://github.com/remarkjs/remark-directive)).

Docusaurus 在升级后需要额外安装 remark-directive 来实现 Admonitions 的渲染，执行下面的命令安装插件。

```shell
npm install --save remark-directive
```

##  更新方式

按照官方文档的说明修改 `package.json` 文件中的各种依赖包的版本，在升级过程中最好首先删除原项目中的 `node_modules` 文件夹，在修改完所有版本后，直接执行 `npm install` 来避免更新过程中新版本包和其它旧版本包的依赖关系发生冲突。

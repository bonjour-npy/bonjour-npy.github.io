"use strict";(self.webpackChunknpy_notebook=self.webpackChunknpy_notebook||[]).push([[6682],{3560:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"GPU-Server/useful-commands","title":"\u5e38\u7528\u547d\u4ee4","description":"\u7528\u6237\u4e0e\u7528\u6237\u7ec4","source":"@site/docs/GPU-Server/2-useful-commands.md","sourceDirName":"GPU-Server","slug":"/GPU-Server/useful-commands","permalink":"/en/docs/GPU-Server/useful-commands","draft":false,"unlisted":false,"editUrl":"https://github.com/bonjour-npy/bonjour-npy.github.io/tree/master/docs/GPU-Server/2-useful-commands.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{},"sidebar":"gpu_server","previous":{"title":"SSH \u514d\u5bc6\u767b\u5f55\u8bbe\u7f6e","permalink":"/en/docs/GPU-Server/Guides/ssh-login"},"next":{"title":"\u975e sudo \u7528\u6237\u5b89\u88c5\u8f6f\u4ef6","permalink":"/en/docs/GPU-Server/package-install-without-sudo"}}');var t=s(4848),c=s(8453);const o={},d="\u5e38\u7528\u547d\u4ee4",l={},a=[{value:"\u7528\u6237\u4e0e\u7528\u6237\u7ec4",id:"\u7528\u6237\u4e0e\u7528\u6237\u7ec4",level:2},{value:"\u5176\u4ed6\u5e38\u7528\u547d\u4ee4",id:"\u5176\u4ed6\u5e38\u7528\u547d\u4ee4",level:2}];function i(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"\u5e38\u7528\u547d\u4ee4",children:"\u5e38\u7528\u547d\u4ee4"})}),"\n",(0,t.jsx)(n.h2,{id:"\u7528\u6237\u4e0e\u7528\u6237\u7ec4",children:"\u7528\u6237\u4e0e\u7528\u6237\u7ec4"}),"\n",(0,t.jsxs)(n.p,{children:["\u53c2\u8003\u8be5\u76ee\u5f55\u4e0b\u7684\u4e13\u9898\u6587\u7ae0",(0,t.jsx)(n.a,{href:"/en/docs/GPU-Server/users-and-groups",children:"\u7528\u6237\u4e0e\u7528\u6237\u7ec4\u7684\u8bbe\u7f6e"})]}),"\n",(0,t.jsx)(n.h2,{id:"\u5176\u4ed6\u5e38\u7528\u547d\u4ee4",children:"\u5176\u4ed6\u5e38\u7528\u547d\u4ee4"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"/etc/profile"})," \u6587\u4ef6\u662f\u516c\u5171 shell \u914d\u7f6e\u6587\u4ef6\uff0c\u5728\u6b64\u5904\u52a0\u5165\u7684\u914d\u7f6e\u88ab\u6240\u6709\u7528\u6237\u52a0\u8f7d\n\u6ce8\u610f\u767b\u5f55\u5f0f shell \u53ef\u80fd\u4f1a\u56e0\u4e3a shell \u914d\u7f6e\u6587\u4ef6\u7684\u52a0\u8f7d\u95ee\u9898\u5bfc\u81f4\u4e0d\u52a0\u8f7d ",(0,t.jsx)(n.code,{children:"/etc/profile"}),"\uff0c\u6bcf\u6b21\u767b\u5f55\u4e4b\u540e\u7528\u6237\u5fc5\u987b\u6267\u884c\u4e00\u6b21 ",(0,t.jsx)(n.code,{children:"source /etc/profile"})," \u6765\u4e3b\u52a8\u52a0\u8f7d\u914d\u7f6e\u6587\u4ef6\n\u5efa\u8bae\u7684\u89e3\u51b3\u65b9\u6cd5\uff0c\u65b0\u5efa\u7528\u6237\u65f6\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"-s /bin/bash"})," \u6307\u5b9a\u4f7f\u7528\u7684 bash\uff0c\u5e76\u4e14\u5c06\u516c\u5171\u914d\u7f6e\u5199\u5728 ",(0,t.jsx)(n.code,{children:"/etc/bash.bashrc"})," \u4e2d"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"w"})," \u547d\u4ee4\u53ef\u4ee5\u67e5\u770b\u6240\u6709\u767b\u5f55\u8be5\u670d\u52a1\u5668\u7684\u7528\u6237\u4ee5\u53ca\u6765\u6e90"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5728\u6a21\u578b\u9700\u8981\u5904\u7406\u8f83\u5927\u4e14\u8f83\u4e3a\u7ecf\u5178\u7684\u6570\u636e\u96c6\u65f6\uff0c\u53ef\u4ee5\u5c06\u539f\u59cb\u6570\u636e\u96c6\u4e0b\u8f7d\u5230\u516c\u5171\u76ee\u5f55\u4e0b\uff0c\u4e4b\u540e\u5404\u7528\u6237\u521b\u5efa\u8f6f\u94fe\u63a5\u5c06\u516c\u5171\u6570\u636e\u96c6\u7684\u76ee\u5f55\u94fe\u63a5\u5230\u6a21\u578b\u4e2d\u5b9a\u4e49\u7684\u5904\u7406\u76ee\u5f55\u4e0b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"ln -sf /path/to/original_dataset/{dataset_name} /path/to/user_dataset\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u4e0a\u8ff0\u547d\u4ee4\u4f1a\u5728 ",(0,t.jsx)(n.code,{children:"/path/to/user_dataset"})," \u4e0b\u521b\u5efa\u540d\u4e3a ",(0,t.jsx)(n.code,{children:"dataset_name"})," \u7684\u76ee\u5f55\uff0c\u8be5\u76ee\u5f55\u94fe\u63a5\u81f3\u539f\u59cb\u6570\u636e\u96c6\u76ee\u5f55"]}),"\n",(0,t.jsxs)(n.p,{children:["\u6ce8\u610f\u5728\u6267\u884c\u5220\u9664\u64cd\u4f5c\u65f6\uff0c\u5982\u679c\u8fdb\u5165\u4e86 ",(0,t.jsx)(n.code,{children:"/path/to/user_dataset/{dataset_name}"})," \u76ee\u5f55\u4e0b\u518d\u8fdb\u884c\u64cd\u4f5c\u65f6\uff0c\u4f1a\u6620\u5c04\u5230\u539f\u76ee\u5f55\u4e2d\u9020\u6210\u5f71\u54cd"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c\u53ea\u662f\u5355\u7eaf\u7684\u5220\u9664\u8f6f\u94fe\u63a5\uff0c\u9700\u8981\u8fdb\u5165\u5230 ",(0,t.jsx)(n.code,{children:"/path/to/user_dataset"})," \u4e2d\u6267\u884c\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"rm -rf ./{dataset_name}\n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>d});var r=s(6540);const t={},c=r.createContext(t);function o(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);
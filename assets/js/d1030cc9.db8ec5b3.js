"use strict";(self.webpackChunknpy_notebook=self.webpackChunknpy_notebook||[]).push([[5742],{5413:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var i=t(5893),r=t(1151);const l={},o="AlexNet",s={id:"Deep-Learning/\u57fa\u7840\u77e5\u8bc6/AlexNet",title:"AlexNet",description:"\u80cc\u666f",source:"@site/docs/Deep-Learning/3-\u57fa\u7840\u77e5\u8bc6/AlexNet.md",sourceDirName:"Deep-Learning/3-\u57fa\u7840\u77e5\u8bc6",slug:"/Deep-Learning/\u57fa\u7840\u77e5\u8bc6/AlexNet",permalink:"/docs/Deep-Learning/\u57fa\u7840\u77e5\u8bc6/AlexNet",draft:!1,unlisted:!1,editUrl:"https://github.com/bonjour-npy/bonjour-npy.github.io/tree/master/docs/Deep-Learning/3-\u57fa\u7840\u77e5\u8bc6/AlexNet.md",tags:[],version:"current",frontMatter:{},sidebar:"deep_learning",previous:{title:"\u67e5\u6f0f\u8865\u7f3a",permalink:"/docs/Deep-Learning/Fill-The-Gaps"},next:{title:"\u5377\u79ef\u5c42",permalink:"/docs/Deep-Learning/\u57fa\u7840\u77e5\u8bc6/ConvolutionalLayer"}},a={},c=[{value:"\u80cc\u666f",id:"\u80cc\u666f",level:2},{value:"\u65b0\u7684\u6982\u5ff5\u548c\u6280\u672f",id:"\u65b0\u7684\u6982\u5ff5\u548c\u6280\u672f",level:2},{value:"\u4e0eLeNet\u6bd4\u8f83",id:"\u4e0elenet\u6bd4\u8f83",level:2}];function d(e){const n={h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"alexnet",children:"AlexNet"})}),"\n",(0,i.jsx)(n.h2,{id:"\u80cc\u666f",children:"\u80cc\u666f"}),"\n",(0,i.jsx)(n.p,{children:"AlexNet\u662f\u63072012\u5e74\u7531Alex Krizhevsky\u3001Ilya Sutskever\u548cGeoffrey Hinton\u63d0\u51fa\u7684\u4e00\u79cd\u5377\u79ef\u795e\u7ecf\u7f51\u7edc\u6a21\u578b\uff0c\u5b83\u4e3b\u8981\u5e94\u7528\u4e8e\u56fe\u50cf\u5206\u7c7b\u4efb\u52a1\u3002\u5728\u5f53\u65f6\uff0cAlexNet\u7684\u8868\u73b0\u8fdc\u8fdc\u8d85\u8fc7\u4e86\u5176\u4ed6\u53c2\u8d5b\u7684\u7f51\u7edc\u6a21\u578b\uff0c\u5e76\u4e14\u5728ImageNet\u6bd4\u8d5b\u4e2d\u83b7\u5f97\u4e86\u7b2c\u4e00\u540d\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u6807\u5fd7\u7740\u65b0\u7684\u4e00\u8f6e\u795e\u7ecf\u7f51\u7edc\u70ed\u6f6e\u7684\u5f00\u59cb"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/bonjour-npy/Image-Hosting-Service/blob/main/typora_images/1.png?raw=true",alt:"image"})}),"\n",(0,i.jsx)(n.h2,{id:"\u65b0\u7684\u6982\u5ff5\u548c\u6280\u672f",children:"\u65b0\u7684\u6982\u5ff5\u548c\u6280\u672f"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"ReLU\u6fc0\u6d3b\u51fd\u6570"}),"\n",(0,i.jsx)(n.li,{children:"Dropout\u6b63\u5219\u5316\u3001\u4e22\u5f03\u6cd5"}),"\n",(0,i.jsx)(n.li,{children:"\u6700\u5927\u6c60\u5316MaxPooling"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u4e0elenet\u6bd4\u8f83",children:"\u4e0eLeNet\u6bd4\u8f83"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u7531\u4e8e\u8f93\u5165\u7684\u56fe\u7247\u66f4\u5927\uff0c\u8bbe\u7f6e\u4e86\u66f4\u5927\u7684\u5377\u79ef\u6838\u5c3a\u5bf8\u548c\u6b65\u957f"}),"\n",(0,i.jsx)(n.li,{children:"\u66f4\u5927\u7684\u6c60\u5316\u7a97\u53e3\uff0c\u4f7f\u7528\u6700\u5927\u6c60\u5316"}),"\n",(0,i.jsx)(n.li,{children:"\u5728\u5377\u79ef\u5c42\u4e2d\u8bbe\u7f6e\u4e86\u66f4\u5927\u7684\u8f93\u51fa\u901a\u9053\uff0c\u63d0\u53d6\u66f4\u6df1\u5c42\u7684\u7279\u5f81\u3001\u8bc6\u522b\u66f4\u591a\u7684\u6a21\u5f0f"}),"\n",(0,i.jsx)(n.li,{children:"\u6fc0\u6d3b\u51fd\u6570\u4eceSigmoid\u6539\u6210\u4e86ReLU\uff0c\u51cf\u7f13\u68af\u5ea6\u6d88\u5931"}),"\n",(0,i.jsx)(n.li,{children:"\u5728\u5377\u79ef\u5c42\u548c\u8f93\u51fa\u5c42\u4e4b\u95f4\u4ecd\u4f7f\u7528\u4e24\u4e2a\u5168\u8fde\u63a5\u9690\u85cf\u5c42\uff0c\u4f46\u5728\u8f93\u51fa\u5c42\u4e4b\u524d\u589e\u52a0\u4e86Dropout\u5c42\u505a\u6b63\u5219\u5316"}),"\n",(0,i.jsx)(n.li,{children:"\u4f7f\u7528\u4e86\u6570\u636e\u589e\u5f3adata augmentation"}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>o});var i=t(7294);const r={},l=i.createContext(r);function o(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);
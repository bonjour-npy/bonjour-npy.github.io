"use strict";(self.webpackChunknpy_notebook=self.webpackChunknpy_notebook||[]).push([[4574],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),f=o,g=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(g,i(i({ref:t},l),{},{components:r})):n.createElement(g,i({ref:t},l))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4921:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={},i="\u81ea\u56de\u5f52\u6a21\u578b\uff1aMAR",s={unversionedId:"Deep-Learning/\u56fe\u50cf\u751f\u6210\u4e0e\u89c6\u9891\u751f\u6210\u5927\u6a21\u578b/Autoregressive-Image-Generation-without-Vector-Quantization",id:"Deep-Learning/\u56fe\u50cf\u751f\u6210\u4e0e\u89c6\u9891\u751f\u6210\u5927\u6a21\u578b/Autoregressive-Image-Generation-without-Vector-Quantization",title:"\u81ea\u56de\u5f52\u6a21\u578b\uff1aMAR",description:"\u539f\u6587\u94fe\u63a5\uff1ahttps://arxiv.org/pdf/2406.11838",source:"@site/docs/Deep-Learning/7-\u56fe\u50cf\u751f\u6210\u4e0e\u89c6\u9891\u751f\u6210\u5927\u6a21\u578b/5-Autoregressive-Image-Generation-without-Vector-Quantization.md",sourceDirName:"Deep-Learning/7-\u56fe\u50cf\u751f\u6210\u4e0e\u89c6\u9891\u751f\u6210\u5927\u6a21\u578b",slug:"/Deep-Learning/\u56fe\u50cf\u751f\u6210\u4e0e\u89c6\u9891\u751f\u6210\u5927\u6a21\u578b/Autoregressive-Image-Generation-without-Vector-Quantization",permalink:"/en/docs/Deep-Learning/\u56fe\u50cf\u751f\u6210\u4e0e\u89c6\u9891\u751f\u6210\u5927\u6a21\u578b/Autoregressive-Image-Generation-without-Vector-Quantization",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"deep_learning",previous:{title:"\u81ea\u56de\u5f52\u6a21\u578b\uff1aLlamaGen",permalink:"/en/docs/Deep-Learning/\u56fe\u50cf\u751f\u6210\u4e0e\u89c6\u9891\u751f\u6210\u5927\u6a21\u578b/Autoregressive-Model-Beats-Diffusion-Llama-for-Scalable-Image-Generation"},next:{title:"20240705 @ \u56fe\u50cf\u751f\u6210\u4e0e\u89c6\u9891\u751f\u6210\u57fa\u5ea7\u6a21\u578b",permalink:"/en/docs/Deep-Learning/\u7ec4\u4f1a\u8bb0\u5f55/1-20240705"}},c={},u=[{value:"\u6458\u8981",id:"\u6458\u8981",level:2}],l={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u81ea\u56de\u5f52\u6a21\u578bmar"},"\u81ea\u56de\u5f52\u6a21\u578b\uff1aMAR"),(0,o.kt)("p",null,"\u539f\u6587\u94fe\u63a5\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/2406.11838"},"https://arxiv.org/pdf/2406.11838")),(0,o.kt)("p",null,"\u53c2\u8003\u8d44\u6599\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1nz421q7PQ/?vd_source=f7612ffc8ec6f523824661106b4c304f"},"\u4f55\u607a\u660e\uff1aAutoregressive Image Generation without Vector Quantization.")),(0,o.kt)("h2",{id:"\u6458\u8981"},"\u6458\u8981"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Conventional wisdom holds that autoregressive models for image generation are typically accompanied by vector-quantized tokens. We observe that while a discrete-valued space can facilitate representing a categorical distribution, it is not a necessity for autoregressive modeling. In this work, we propose to model the per-token probability distribution using a diffusion procedure, which allows us to apply autoregressive models in a continuous-valued space. Rather than using categorical cross-entropy loss, we define a Diffusion Loss function to model the per-token probability. This approach eliminates the need for discrete-valued tokenizers. We evaluate its effectiveness across a wide range of cases, including standard autoregressive models and generalized masked autoregressive (MAR) variants. By removing vector quantization, our image generator achieves strong results while enjoying the speed advantage of sequence modeling. We hope this work will motivate the use of autoregressive generation in other continuous-valued domains and applications.")),(0,o.kt)("h2",{id:""}))}d.isMDXComponent=!0}}]);
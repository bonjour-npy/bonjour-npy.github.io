"use strict";(self.webpackChunknpy_notebook=self.webpackChunknpy_notebook||[]).push([[5321],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(n),f=o,m=s["".concat(p,".").concat(f)]||s[f]||y[f]||a;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8038:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={},l="\u6c60\u5316\u5c42",i={unversionedId:"Deep-Learning/\u57fa\u7840\u77e5\u8bc6/PoolingLayer",id:"Deep-Learning/\u57fa\u7840\u77e5\u8bc6/PoolingLayer",title:"\u6c60\u5316\u5c42",description:"\u5377\u79ef\u5bf9\u50cf\u7d20\u4f4d\u7f6e\u4fe1\u606f\u662f\u654f\u611f\u7684",source:"@site/docs/Deep-Learning/3-\u57fa\u7840\u77e5\u8bc6/PoolingLayer.md",sourceDirName:"Deep-Learning/3-\u57fa\u7840\u77e5\u8bc6",slug:"/Deep-Learning/\u57fa\u7840\u77e5\u8bc6/PoolingLayer",permalink:"/en/docs/Deep-Learning/\u57fa\u7840\u77e5\u8bc6/PoolingLayer",draft:!1,editUrl:"https://github.com/bonjour-npy/bonjour-npy.github.io/tree/master/docs/Deep-Learning/3-\u57fa\u7840\u77e5\u8bc6/PoolingLayer.md",tags:[],version:"current",frontMatter:{},sidebar:"deep_learning",previous:{title:"Perceptron",permalink:"/en/docs/Deep-Learning/\u57fa\u7840\u77e5\u8bc6/Perceptron"},next:{title:"PyTorch\u57fa\u7840",permalink:"/en/docs/Deep-Learning/\u57fa\u7840\u77e5\u8bc6/PytorchBasics"}},p={},c=[{value:"\u5377\u79ef\u5bf9\u50cf\u7d20\u4f4d\u7f6e\u4fe1\u606f\u662f\u654f\u611f\u7684",id:"\u5377\u79ef\u5bf9\u50cf\u7d20\u4f4d\u7f6e\u4fe1\u606f\u662f\u654f\u611f\u7684",level:2},{value:"\u6c60\u5316\u5c42\u7684\u4f5c\u7528",id:"\u6c60\u5316\u5c42\u7684\u4f5c\u7528",level:2},{value:"\u6c60\u5316\u7684\u5b9e\u73b0",id:"\u6c60\u5316\u7684\u5b9e\u73b0",level:2}],u={toc:c},s="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6c60\u5316\u5c42"},"\u6c60\u5316\u5c42"),(0,o.kt)("h2",{id:"\u5377\u79ef\u5bf9\u50cf\u7d20\u4f4d\u7f6e\u4fe1\u606f\u662f\u654f\u611f\u7684"},"\u5377\u79ef\u5bf9\u50cf\u7d20\u4f4d\u7f6e\u4fe1\u606f\u662f\u654f\u611f\u7684"),(0,o.kt)("p",null,"\u5377\u79ef\u5c42\u4f1a\u5bf9\u8f93\u5165\u7684\u5c40\u90e8\u533a\u57df\u8fdb\u884c\u5377\u79ef\u64cd\u4f5c\uff0c\u56e0\u6b64\u5bf9\u4e8e\u8f93\u5165\u56fe\u50cf\u4e2d\u7684\u6bcf\u4e2a\u4f4d\u7f6e\u90fd\u4f1a\u4ea7\u751f\u4e00\u4e2a\u54cd\u5e94\u3002\u7136\u800c\uff0c\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u5e76\u4e0d\u5173\u5fc3\u8f93\u5165\u56fe\u50cf\u4e2d\u6bcf\u4e2a\u4f4d\u7f6e\u7684\u7ec6\u8282\uff0c\u800c\u53ea\u662f\u60f3\u83b7\u53d6\u8be5\u533a\u57df\u7684\u4e00\u4e9b\u91cd\u8981\u7279\u5f81\u3002"),(0,o.kt)("p",null,"\u5047\u8bbe\u6211\u4eec\u60f3\u5206\u7c7b\u4e00\u5f20\u732b\u7684\u56fe\u7247\uff0c\u90a3\u4e48\u6211\u4eec\u53ef\u80fd\u53ea\u9700\u8981\u63d0\u53d6\u51fa\u5b83\u7684\u773c\u775b\u3001\u9f3b\u5b50\u3001\u5634\u5df4\u548c\u8033\u6735\u7b49\u7279\u5f81\uff0c\u800c\u4e0d\u5fc5\u8003\u8651\u8fd9\u4e9b\u7279\u5f81\u5728\u56fe\u50cf\u4e2d\u7684\u7cbe\u786e\u4f4d\u7f6e\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\u6c60\u5316\u5c42\u7684\u4f5c\u7528"},"\u6c60\u5316\u5c42\u7684\u4f5c\u7528"),(0,o.kt)("p",null,"\u6c60\u5316\u5c42\u901a\u8fc7\u5bf9\u8f93\u5165\u7684\u5c40\u90e8\u533a\u57df\u8fdb\u884c\u964d\u91c7\u6837\u64cd\u4f5c\uff0c\u51cf\u5c11\u4e86\u7279\u5f81\u56fe\u7684\u5927\u5c0f\uff0c\u4ece\u800c",(0,o.kt)("strong",{parentName:"p"},"\u4f7f\u5f97\u6a21\u578b\u5bf9\u4e8e\u8f93\u5165\u4f4d\u7f6e\u7684\u5fae\u5c0f\u53d8\u5316\u66f4\u52a0\u9c81\u68d2"),"\u3002\u4f8b\u5982\uff0c\u5982\u679c\u6211\u4eec\u5c06\u4e00\u4e2a\u5bf9\u8c61\u7a0d\u5fae\u5e73\u79fb\u4e00\u70b9\uff0c\u5b83\u4f9d\u7136\u53ef\u4ee5\u88ab\u6b63\u786e\u5730\u8bc6\u522b\uff0c\u56e0\u4e3a\u6c60\u5316\u5c42\u53ef\u4ee5\u4fdd\u7559\u8f93\u5165\u56fe\u50cf\u7684\u5173\u952e\u7279\u5f81\uff0c\u800c\u5ffd\u7565\u6389\u5fae\u5c0f\u7684\u4f4d\u7f6e\u53d8\u5316\u3002"),(0,o.kt)("p",null,"\u4f46\u662f\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5f53\u6c60\u5316\u7684\u6b65\u5e45\u548c\u6c60\u5316\u533a\u57df\u7684\u5927\u5c0f\u8fc7\u5927\u65f6\uff0c\u4f1a\u5bfc\u81f4\u6a21\u578b\u4e22\u5931\u8f83\u591a\u7684\u7ec6\u8282\u4fe1\u606f\uff0c\u4ece\u800c\u5f71\u54cd\u6a21\u578b\u6027\u80fd\u3002\u56e0\u6b64\uff0c\u5728\u5b9e\u9645\u5e94\u7528\u4e2d\uff0c\u9700\u8981\u6839\u636e\u5177\u4f53\u4efb\u52a1\u6765\u9009\u62e9\u9002\u5f53\u7684\u6c60\u5316\u53c2\u6570\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"\u7f13\u89e3\u5377\u79ef\u5c42\u5bf9\u4f4d\u7f6e\u7684\u654f\u611f\u6027"),"\uff0c\u63d0\u9ad8\u9c81\u68d2\uff1a\u6c60\u5316\u64cd\u4f5c\u901a\u5e38\u7528\u4e8e\u5377\u79ef\u5c42\u4e4b\u540e\uff0c\u4f7f\u6a21\u578b\u5bf9\u4e8e\u8f93\u5165\u4f4d\u7f6e\u7684\u5fae\u5c0f\u53d8\u5316\u66f4\u52a0\u9c81\u68d2\uff0c\u51cf\u5c11\u56fe\u50cf\u4e2d\u7684\u566a\u58f0\u548c\u5197\u4f59\u4fe1\u606f"),(0,o.kt)("li",{parentName:"ol"},"\u51cf\u5c0f\u7279\u5f81\u56fe\u5927\u5c0f\uff1a\u6c60\u5316\u64cd\u4f5c\u4f1a\u901a\u8fc7\u5728\u7279\u5b9a\u4f4d\u7f6e\u4e0a\u5408\u5e76\u7279\u5f81\u503c\u6765\u7f29\u5c0f\u8f93\u5165\u7279\u5f81\u56fe\u7684\u7a7a\u95f4\u5927\u5c0f\uff0c\u964d\u4f4e\u8ba1\u7b97\u5f00\u9500\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u51cf\u5c11\u53c2\u6570\u6570\u91cf\uff1a\u6c60\u5316\u64cd\u4f5c\u51cf\u5c0f\u4e86\u7279\u5f81\u56fe\u7684\u7a7a\u95f4\u5927\u5c0f\uff0c\u4ece\u800c\u4e5f\u51cf\u5c0f\u4e86\u9700\u8981\u8bad\u7ec3\u7684\u6743\u91cd\u53c2\u6570\u6570\u91cf\uff0c\u66f4\u5bb9\u6613\u8bad\u7ec3\u548c\u4f18\u5316\u3002")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\u6c60\u5316\u7684\u5b9e\u73b0"},"\u6c60\u5316\u7684\u5b9e\u73b0"),(0,o.kt)("p",null,"\u6c60\u5316\u5c42\u5c06\u8f93\u5165\u7279\u5f81\u56fe\u5206\u5272\u6210\u82e5\u5e72\u4e2a\u533a\u57df\uff0c\u7136\u540e\u5bf9\u6bcf\u4e2a\u533a\u57df\u8fdb\u884c\u6c47\u805a\u64cd\u4f5c\uff0c\u5c06\u8be5\u533a\u57df\u5185\u7684\u7279\u5f81\u503c\u5408\u5e76\u6210\u4e00\u4e2a\u503c\u3002\u8fd9\u4e2a\u64cd\u4f5c\u53ef\u4ee5\u4f7f\u7528\u4e0d\u540c\u7684\u65b9\u6cd5\u5b9e\u73b0\uff0c\u5982\u6700\u5927\u503c\u6c60\u5316\u3001\u5e73\u5747\u503c\u6c60\u5316\u7b49\u3002"),(0,o.kt)("p",null,"\u6700\u5e38\u89c1\u7684\u662f\u6700\u5927\u503c\u6c60\u5316\uff0c\u5176\u4e2d\u6bcf\u4e2a\u533a\u57df\u7684\u8f93\u51fa\u503c\u662f\u8be5\u533a\u57df\u5185\u7279\u5f81\u503c\u7684\u6700\u5927\u503c\uff0c\u8fd9\u6837\u53ef\u4ee5\u4fdd\u7559\u56fe\u50cf\u4e2d\u6700\u663e\u8457\u7684\u7279\u5f81\uff0c\u540c\u65f6\u51cf\u5c11\u566a\u58f0\u548c\u5197\u4f59\u4fe1\u606f\u7684\u5f71\u54cd\u3002"))}y.isMDXComponent=!0}}]);
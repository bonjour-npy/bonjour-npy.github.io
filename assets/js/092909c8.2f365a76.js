"use strict";(self.webpackChunknpy_notebook=self.webpackChunknpy_notebook||[]).push([[962],{2657:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>o,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var a=e(5893),i=e(1151);const t={},r="\u4e00\u7ef4\u524d\u7f00\u548c\uff08\u5237\u51fa\u4e00\u9053\u5899\uff09",l={id:"Algorithms/\u9898\u89e3/\u4e00\u7ef4\u524d\u7f00\u548c\uff08\u5237\u51fa\u4e00\u9053\u5899\uff09",title:"\u4e00\u7ef4\u524d\u7f00\u548c\uff08\u5237\u51fa\u4e00\u9053\u5899\uff09",description:"\u5728\u4e00\u9762\u5f88\u957f\u7684\u5899\u58c1\u4e0a\uff0c\u5de5\u4eba\u4eec\u7528\u4e0d\u540c\u7684\u6cb9\u6f06\u53bb\u5237\u5899\uff0c\u7136\u800c\u53ef\u80fd\u6709\u4e9b\u5730\u65b9\u5237\u8fc7\u4ee5\u540e\u89c9\u5f97\u4e0d\u597d\u770b\uff0c\u4ed6\u4eec\u4f1a\u91cd\u65b0\u5237\u4e00\u4e0b\u3002\u6709\u4e9b\u90e8\u5206\u56e0\u4e3a\u91cd\u590d\u5237\u4e86\u5f88\u591a\u6b21\u8986\u76d6\u4e86\u5f88\u591a\u5c42\u6cb9\u6f06\uff0c\u5c0f\u8bfa\u5f88\u597d\u5947\u90a3\u4e9b\u5730\u65b9\u88ab\u5237\u8fc7\u591a\u5c11\u79cd\u989c\u8272\u7684\u6cb9\u6f06\u3002",source:"@site/docs/Algorithms/4-\u9898\u89e3/\u4e00\u7ef4\u524d\u7f00\u548c\uff08\u5237\u51fa\u4e00\u9053\u5899\uff09.md",sourceDirName:"Algorithms/4-\u9898\u89e3",slug:"/Algorithms/\u9898\u89e3/\u4e00\u7ef4\u524d\u7f00\u548c\uff08\u5237\u51fa\u4e00\u9053\u5899\uff09",permalink:"/docs/Algorithms/\u9898\u89e3/\u4e00\u7ef4\u524d\u7f00\u548c\uff08\u5237\u51fa\u4e00\u9053\u5899\uff09",draft:!1,unlisted:!1,editUrl:"https://github.com/bonjour-npy/bonjour-npy.github.io/tree/master/docs/Algorithms/4-\u9898\u89e3/\u4e00\u7ef4\u524d\u7f00\u548c\uff08\u5237\u51fa\u4e00\u9053\u5899\uff09.md",tags:[],version:"current",frontMatter:{},sidebar:"algorithms",previous:{title:"Welcome",permalink:"/docs/Algorithms/intro"},next:{title:"\u53cd\u5e8f\u8f93\u51fa",permalink:"/docs/Algorithms/\u9898\u89e3/\u53cd\u5e8f\u8f93\u51fa"}},c={},d=[{value:"\u53c2\u8003\u4ee3\u7801",id:"\u53c2\u8003\u4ee3\u7801",level:2},{value:"\u9898\u89e3",id:"\u9898\u89e3",level:2}];function h(n){const s={admonition:"admonition",annotation:"annotation",code:"code",h1:"h1",h2:"h2",header:"header",math:"math",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",...(0,i.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.header,{children:(0,a.jsx)(s.h1,{id:"\u4e00\u7ef4\u524d\u7f00\u548c\u5237\u51fa\u4e00\u9053\u5899",children:"\u4e00\u7ef4\u524d\u7f00\u548c\uff08\u5237\u51fa\u4e00\u9053\u5899\uff09"})}),"\n",(0,a.jsxs)(s.admonition,{type:"tip",children:[(0,a.jsx)(s.p,{children:"\u5728\u4e00\u9762\u5f88\u957f\u7684\u5899\u58c1\u4e0a\uff0c\u5de5\u4eba\u4eec\u7528\u4e0d\u540c\u7684\u6cb9\u6f06\u53bb\u5237\u5899\uff0c\u7136\u800c\u53ef\u80fd\u6709\u4e9b\u5730\u65b9\u5237\u8fc7\u4ee5\u540e\u89c9\u5f97\u4e0d\u597d\u770b\uff0c\u4ed6\u4eec\u4f1a\u91cd\u65b0\u5237\u4e00\u4e0b\u3002\u6709\u4e9b\u90e8\u5206\u56e0\u4e3a\u91cd\u590d\u5237\u4e86\u5f88\u591a\u6b21\u8986\u76d6\u4e86\u5f88\u591a\u5c42\u6cb9\u6f06\uff0c\u5c0f\u8bfa\u5f88\u597d\u5947\u90a3\u4e9b\u5730\u65b9\u88ab\u5237\u8fc7\u591a\u5c11\u79cd\u989c\u8272\u7684\u6cb9\u6f06\u3002"}),(0,a.jsx)(s.p,{children:"\u8f93\u5165\u63cf\u8ff0\uff1a"}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"\u82e5\u5e72\u884c\u8f93\u5165\uff0c\u6bcf\u884c\u4e24\u4e2a\u6570\u5b57B[i],E[i](0<=B[i]<=E[i]<=200000)\u8868\u793a\u8fd9\u6b21\u5237\u7684\u5899\u58c1\u662f\u54ea\u4e00\u6bb5\n\uff08\u5047\u8bbe\u6bcf\u6b21\u5237\u7684\u65f6\u5019\u6cb9\u6f06\u989c\u8272\u90fd\u548c\u4e4b\u524d\u7684\u4e0d\u540c\uff09\uff0c\u4ee50 0\u7ed3\u675f\n\u53c8\u82e5\u5e72\u884c\u8f93\u5165\uff0c\u6bcf\u884c\u4e24\u4e2a\u6570\u5b57begin[i],end[i]\uff080<=begin[i]<=end[i]<=200000\uff09\u8868\u793a\u5c0f\u8bfa\u8be2\u95ee\u7684\u6bb5\uff0c\n\u4ee50 0\u7ed3\u675f\n"})}),(0,a.jsx)(s.p,{children:"\u8f93\u51fa\u63cf\u8ff0:"}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"\u5bf9\u4e8e\u6bcf\u4e2a\u5c0f\u8bfa\u7684\u8be2\u95ee\u8f93\u51fa(end[i]-begin[i]+1)\u884c,\u8868\u793a\u5bf9\u5e94\u8be2\u95ee\u6bb5\u7684\u6bcf\u4e2a\u70b9\u88ab\u591a\u5c11\u79cd\u989c\u8272\u7684\u6cb9\u6f06\u8986\u76d6\u8fc7\u3002\n"})})]}),"\n",(0,a.jsx)(s.h2,{id:"\u53c2\u8003\u4ee3\u7801",children:"\u53c2\u8003\u4ee3\u7801"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-c++",children:'#include <bits/stdc++.h>\n\nusing namespace std;\n\nint main()\n{\n    vector<int> colors(200001, 0);\n\n    int B, E;\n    while (scanf("%d %d", &B, &E))\n    {\n        if (B == 0 && E == 0)\n        {\n            break;\n        }\n        colors[B]++;      // \u5237\u5899\u8d77\u70b9\u6807\u8bb0\n        colors[E + 1]--;  // \u5237\u5899\u7ec8\u70b9\u6807\u8bb0\n    }\n\n    // \u8ba1\u7b97\u524d\u7f00\u548c\n    for (int i = 1; i < colors.size(); i++)\n    {\n        colors[i] += colors[i - 1];\n    }\n\n    int begin, end;\n    while (scanf("%d %d", &begin, &end))\n    {\n        if (begin == 0 && end == 0)\n        {\n            break;\n        }\n        for (int i = begin; i <= end; i++)\n        {\n            printf("%d\\n", colors[i]);\n        }\n    }\n\n    return 0;\n}\n\n'})}),"\n",(0,a.jsx)(s.h2,{id:"\u9898\u89e3",children:"\u9898\u89e3"}),"\n",(0,a.jsxs)(s.p,{children:["\u4f7f\u7528",(0,a.jsx)(s.strong,{children:"\u524d\u7f00\u548c"}),"\u601d\u60f3\u7b80\u5316\u65f6\u95f4\u590d\u6742\u5ea6\uff0c\u8bbe\u8ba1\u524d\u7f00\u548c\u6570\u7ec4\uff0c\u4f7f\u8f93\u51fa\u7684\u6570\u7ec4\u4e2d\u5143\u7d20\u7684\u503c\u4ee3\u8868\u5176\u5bf9\u5e94\u8282\u70b9\u88ab\u5237\u7684\u6b21\u6570\u3002"]}),"\n",(0,a.jsx)(s.p,{children:"\u9996\u5148\u521d\u59cb\u5316\u524d\u7f00\u548c\u6570\u7ec4\uff0c\u4f7f\u6bcf\u4e00\u4e2a\u5143\u7d20\u7b49\u4e8e\u4e3a0\u3002"}),"\n",(0,a.jsxs)(s.p,{children:["\u8be5\u9898\u7684",(0,a.jsx)(s.strong,{children:"\u5de7\u5999\u4e4b\u5904"}),"\u5c31\u5728\u4e8e\uff1a\u5bf9\u4e8e\u6bcf\u4e00\u4e2a\u8f93\u5165\u7684\u7d22\u5f15B\u4e0eE\uff0cB\u4f5c\u4e3a\u5f00\u59cb\u5237\u7684\u8282\u70b9\u7d22\u5f15\u4ee4\u524d\u7f00\u548c\u6570\u7ec4\u4e2d\u5bf9\u5e94\u5143\u7d20\u7684\u503c",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mo,{children:"+"}),(0,a.jsx)(s.mn,{children:"1"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"+1"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,a.jsx)(s.span,{className:"mord",children:"+"}),(0,a.jsx)(s.span,{className:"mord",children:"1"})]})})]}),"\uff0cE+1\u4f5c\u4e3a\u5237\u5899\u7ed3\u675f\u7684\u4e0b\u4e00\u4e2a\u8282\u70b9\u7684\u7d22\u5f15\u4ee4\u5bf9\u5e94\u7684\u503c",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mo,{children:"\u2212"}),(0,a.jsx)(s.mn,{children:"1"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"-1"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,a.jsx)(s.span,{className:"mord",children:"\u2212"}),(0,a.jsx)(s.span,{className:"mord",children:"1"})]})})]}),"\u3002\u8fd9\u6837\u5728\u6240\u6709\u8f93\u5165\u7ed3\u675f\u540e\u7684\u8ba1\u7b97\u524d\u7f00\u548c\u9636\u6bb5\uff0c\u5728\u6bcf\u4e00\u4e2a\u503c\u4e3a",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mo,{stretchy:"false",children:"["}),(0,a.jsx)(s.mn,{children:"1"}),(0,a.jsx)(s.mo,{separator:"true",children:","}),(0,a.jsx)(s.mo,{children:"\u2212"}),(0,a.jsx)(s.mn,{children:"1"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"[1, -1)"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mopen",children:"["}),(0,a.jsx)(s.span,{className:"mord",children:"1"}),(0,a.jsx)(s.span,{className:"mpunct",children:","}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(s.span,{className:"mord",children:"\u2212"}),(0,a.jsx)(s.span,{className:"mord",children:"1"}),(0,a.jsx)(s.span,{className:"mclose",children:")"})]})})]}),"\u7684\u7d22\u5f15\u533a\u95f4\u4e2d\u7684\u5143\u7d20\u503c\u90fd\u4f1a\u52a01\uff0c\u800c\u5bf9\u4e8e\u67d0\u6b21\u5237\u6f06\u7ec8\u70b9E\u7684\u4e0b\u4e00\u4e2a\u7d22\u5f15\u4e3aE+1\u7684\u5143\u7d20\u503c\u7531\u4e8e",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mo,{children:"\u2212"}),(0,a.jsx)(s.mn,{children:"1"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"-1"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,a.jsx)(s.span,{className:"mord",children:"\u2212"}),(0,a.jsx)(s.span,{className:"mord",children:"1"})]})})]}),"\u800c\u62b5\u6d88\u5f71\u54cd\uff08\u81ea\u8eab\u503c\u4e3a",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mo,{children:"\u2212"}),(0,a.jsx)(s.mn,{children:"1"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"-1"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,a.jsx)(s.span,{className:"mord",children:"\u2212"}),(0,a.jsx)(s.span,{className:"mord",children:"1"})]})})]}),"\u52a0\u4e0a\u4e4b\u524d\u5143\u7d20\u6240\u7d2f\u79ef\u76841\u800c\u5f52\u96f6\uff09\uff0c\u6b64\u65f6\u6570\u7ec4\u4e2d\u5143\u7d20\u7684\u503c\u624d\u4ee3\u8868\u5176\u5bf9\u5e94\u8282\u70b9\u88ab\u5237\u7684\u6b21\u6570\u3002"]}),"\n",(0,a.jsxs)(s.p,{children:["\u5173\u4e8e",(0,a.jsx)(s.strong,{children:"\u8d85\u65f6"}),'\uff0c\u53ef\u4ee5\u5728\u51fd\u6570\u4e2d\u52a0\u5165\u4ee5\u4e0b\u4ee3\u7801\u6d88\u9664\u6d41\u64cd\u4f5c\u7684\u7f13\u51b2\u533a\uff0c\u5e76\u4f7f\u7528"\\n"\u4ee3\u66ffendl\u3002']}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-c++",children:"ios::sync_with_stdio(false);\n"})})]})}function o(n={}){const{wrapper:s}={...(0,i.a)(),...n.components};return s?(0,a.jsx)(s,{...n,children:(0,a.jsx)(h,{...n})}):h(n)}},1151:(n,s,e)=>{e.d(s,{Z:()=>l,a:()=>r});var a=e(7294);const i={},t=a.createContext(i);function r(n){const s=a.useContext(t);return a.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function l(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),a.createElement(t.Provider,{value:s},n.children)}}}]);
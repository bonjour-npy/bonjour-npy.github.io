"use strict";(self.webpackChunknpy_notebook=self.webpackChunknpy_notebook||[]).push([[6280],{784:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>b,frontMatter:()=>d,metadata:()=>c,toc:()=>s});const c=JSON.parse('{"id":"Deep-Learning/\u751f\u6210\u6a21\u578b\u603b\u7ed3/Quick-Notes-about-Main-Techs","title":"\u4e3b\u8981\u6280\u672f\u7b80\u8bb0","description":"Llama 3","source":"@site/docs/Deep-Learning/6-\u751f\u6210\u6a21\u578b\u603b\u7ed3/0-Quick-Notes-about-Main-Techs.md","sourceDirName":"Deep-Learning/6-\u751f\u6210\u6a21\u578b\u603b\u7ed3","slug":"/Deep-Learning/\u751f\u6210\u6a21\u578b\u603b\u7ed3/Quick-Notes-about-Main-Techs","permalink":"/docs/Deep-Learning/\u751f\u6210\u6a21\u578b\u603b\u7ed3/Quick-Notes-about-Main-Techs","draft":false,"unlisted":false,"editUrl":"https://github.com/bonjour-npy/bonjour-npy.github.io/tree/master/docs/Deep-Learning/6-\u751f\u6210\u6a21\u578b\u603b\u7ed3/0-Quick-Notes-about-Main-Techs.md","tags":[],"version":"current","sidebarPosition":0,"frontMatter":{},"sidebar":"deep_learning","previous":{"title":"\u672c\u79d1\u6bd5\u4e1a\u8bba\u6587\uff1a\u57fa\u4e8e Prompt Learning \u7684\u89c6\u89c9-\u8bed\u8a00\u5927\u6a21\u578b\u5728\u56fe\u50cf\u751f\u6210\u4e2d\u7684\u5e94\u7528\u4e0e\u7814\u7a76","permalink":"/docs/Deep-Learning/\u5927\u6a21\u578b\u57fa\u7840/Prompt Learning/Undergraduate-Dissertation"},"next":{"title":"\u56fe\u50cf\u751f\u6210\u548c\u89c6\u9891\u751f\u6210\u57fa\u5ea7\u6a21\u578b","permalink":"/docs/Deep-Learning/\u751f\u6210\u6a21\u578b\u603b\u7ed3/Image-and-Video-Generative-Foundation-Model"}}');var t=i(4848),a=i(8453);const d={},r="\u4e3b\u8981\u6280\u672f\u7b80\u8bb0",o={},s=[{value:"Llama 3",id:"llama-3",level:2},{value:"\u6574\u4f53\u7ed3\u6784",id:"\u6574\u4f53\u7ed3\u6784",level:3},{value:"\u5747\u65b9\u6839\u5c42\u5f52\u4e00\u5316\uff08RMS Layer Normalization\uff09",id:"\u5747\u65b9\u6839\u5c42\u5f52\u4e00\u5316rms-layer-normalization",level:3},{value:"SwiGLU \u6fc0\u6d3b\u51fd\u6570",id:"swiglu-\u6fc0\u6d3b\u51fd\u6570",level:3},{value:"\u65cb\u8f6c\u4f4d\u7f6e\u7f16\u7801\uff08Rotary Positional Embedding\uff09",id:"\u65cb\u8f6c\u4f4d\u7f6e\u7f16\u7801rotary-positional-embedding",level:3},{value:"\u65b0\u7684\u5b57\u8282\u5bf9\u7f16\u7801\uff08Tiktoken BPE\uff09",id:"\u65b0\u7684\u5b57\u8282\u5bf9\u7f16\u7801tiktoken-bpe",level:3}];function l(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"\u4e3b\u8981\u6280\u672f\u7b80\u8bb0",children:"\u4e3b\u8981\u6280\u672f\u7b80\u8bb0"})}),"\n",(0,t.jsx)(n.h2,{id:"llama-3",children:"Llama 3"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://my.oschina.net/IDP/blog/11485091",children:"\u7ed9 \uff62\u5927\u6a21\u578b\u521d\u5b66\u8005\uff63 \u7684 LLaMA 3 \u6838\u5fc3\u6280\u672f\u5256\u6790"})}),"\n",(0,t.jsx)(n.h3,{id:"\u6574\u4f53\u7ed3\u6784",children:"\u6574\u4f53\u7ed3\u6784"}),"\n",(0,t.jsx)(n.p,{children:"\u81ea\u56de\u5f52\u6a21\u578b\uff0c\u4e0e GPT \u76f8\u540c\u9884\u6d4b\u4e0b\u4e00\u4e2a token\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesimage-20241009203523075.png",alt:"image-20241009203523075"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_images1*ZbnVUpK5pw5iJJeeiBa-9w.png",alt:"img"})}),"\n",(0,t.jsx)(n.h3,{id:"\u5747\u65b9\u6839\u5c42\u5f52\u4e00\u5316rms-layer-normalization",children:"\u5747\u65b9\u6839\u5c42\u5f52\u4e00\u5316\uff08RMS Layer Normalization\uff09"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesup-105cec33db3c7e4fee2c788fddc93bb88e0.png",alt:"img"})}),"\n",(0,t.jsx)(n.h3,{id:"swiglu-\u6fc0\u6d3b\u51fd\u6570",children:"SwiGLU \u6fc0\u6d3b\u51fd\u6570"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u751f\u6210\u6587\u672c\u4e4b\u524d\uff0cSwiGLU \u4f1a\u6839\u636e\u6bcf\u4e2a\u5355\u8bcd\uff08word\uff09\u6216\u77ed\u8bed\uff08phrase\uff09\u4e0e\u4e0a\u4e0b\u6587\u7684\u76f8\u5173\u6027\uff08relevance\uff09\u8c03\u6574\u5176\u91cd\u8981\u6027\uff08importance\uff09\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://raw.githubusercontent.com/bonjour-npy/Image-Hosting-Service/main/typora_imagesup-22b88dd8f54715c4276fd92d647ee4e3d31.png",alt:"up-22b88dd8f54715c4276fd92d647ee4e3d31.png"})}),"\n",(0,t.jsx)(n.h3,{id:"\u65cb\u8f6c\u4f4d\u7f6e\u7f16\u7801rotary-positional-embedding",children:"\u65cb\u8f6c\u4f4d\u7f6e\u7f16\u7801\uff08Rotary Positional Embedding\uff09"}),"\n",(0,t.jsx)(n.p,{children:"\u65cb\u8f6c\u7f16\u7801\uff08Rotary Embeddings\uff09\uff0c\u7b80\u79f0 RoPE \uff0c\u662f LLaMA 3 \u4e2d\u91c7\u7528\u7684\u4e00\u79cd\u4f4d\u7f6e\u7f16\u7801\u65b9\u5f0f\uff08position embedding\uff09\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u56e0\u6b64\uff0c\u5728\u5904\u7406\u6587\u672c\u7684\u8fc7\u7a0b\u4e2d\uff0cRoPE \u5e76\u672a\u7b80\u5355\u5730\u5c06\u4f4d\u7f6e\u7f16\u7801\u89c6\u4f5c\u56fa\u5b9a\u3001\u9759\u6001\u7684\uff08fixed and static\uff09\u5143\u7d20\uff0c\u800c\u662f\u5de7\u5999\u5730\u878d\u5165\u4e86\u65cb\u8f6c\uff08rotational\uff09\u8fd9\u4e00\u6982\u5ff5\uff0c\u4f7f\u5f97\u8868\u793a\u65b9\u5f0f\u66f4\u52a0\u7075\u6d3b\u3001\u591a\u6837\u5316\uff0c\u80fd\u591f\u66f4\u7cbe\u51c6\u5730\u628a\u63e1\u6587\u672c\u5e8f\u5217\u5185\u8bcd\u8bed\u95f4\u7684\u53d8\u5316\u5173\u7cfb\u3002\u8fd9\u79cd\u7075\u6d3b\u6027\u8d4b\u4e88\u4e86 ChatGPT \u7b49\u6a21\u578b\u66f4\u5f3a\u7684\u80fd\u529b\uff0c\u4f7f\u5176\u80fd\u66f4\u6df1\u523b\u5730\u7406\u89e3\u548c\u751f\u6210\u81ea\u7136\u6d41\u7545\u3001\u903b\u8f91\u8fde\u8d2f\u7684\u6587\u672c\u5185\u5bb9\uff0c\u5c31\u5982\u540c\u5728\u6559\u5ba4\u4e2d\u91c7\u7528\u52a8\u6001\u5ea7\u4f4d\u5e03\u5c40\uff08dynamic seating arrangement\uff09\u80fd\u591f\u6fc0\u53d1\u66f4\u591a\u4e92\u52a8\u5f0f\u7684\u8ba8\u8bba\u4e00\u6837\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"\u65b0\u7684\u5b57\u8282\u5bf9\u7f16\u7801tiktoken-bpe",children:"\u65b0\u7684\u5b57\u8282\u5bf9\u7f16\u7801\uff08Tiktoken BPE\uff09"}),"\n",(0,t.jsx)(n.p,{children:"LLaMA 3 \u91c7\u7528\u7531 OpenAI \u63a8\u51fa\u7684 tiktoken \u5e93\u4e2d\u7684\u5b57\u8282\u5bf9\u7f16\u7801\uff08Byte Pair Encoding, BPE\uff09\uff0c\u800c LLaMA 2 \u7684 BPE \u5206\u8bcd\u673a\u5236\u57fa\u4e8e sentencepiece \u5e93\u3002\u4e24\u8005\u867d\u6709\u5fae\u5999\u5dee\u5f02\uff0c\u4f46\u76ee\u524d\u7684\u9996\u8981\u4efb\u52a1\u662f\u7406\u89e3 BPE \u7a76\u7adf\u662f\u4ec0\u4e48\u3002"}),"\n",(0,t.jsx)(n.p,{children:'\u5148\u4ece\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\u5f00\u59cb\uff1a\u5047\u8bbe\u6709\u4e00\u4e2a\u6587\u672c\u8bed\u6599\u5e93\uff08text corpus\uff09\uff0c\u5185\u542b "ab", "bc", "bcd", \u548c "cde" \u8fd9\u4e9b\u8bcd\u8bed\u3002\u6211\u4eec\u5c06\u8bed\u6599\u5e93\u4e2d\u6240\u6709\u5355\u8bcd\u62c6\u5206\u4e3a\u5355\u4e2a\u5b57\u7b26\u7eb3\u5165\u8bcd\u6c47\u8868\uff0c\u6b64\u65f6\u7684\u8bcd\u6c47\u8868\u4e3a {"a", "b", "c", "d", "e"}\u3002'}),"\n",(0,t.jsx)(n.p,{children:'\u63a5\u4e0b\u6765\uff0c\u8ba1\u7b97\u5404\u5b57\u7b26\u5728\u6587\u672c\u8bed\u6599\u5e93\u4e2d\u7684\u51fa\u73b0\u6b21\u6570\u3002\u5728\u672c\u4f8b\u4e2d\uff0c\u7edf\u8ba1\u7ed3\u679c\u4e3a {"a": 1, "b": 3, "c": 3, "d": 2, "e": 1}\u3002'}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\u968f\u540e\uff0c\u8fdb\u5165\u6838\u5fc3\u73af\u8282 ------ \u5408\u5e76\u9636\u6bb5\uff08merging process\uff09\u3002\u91cd\u590d\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\u76f4\u81f3\u8bcd\u6c47\u8868\u8fbe\u5230\u9884\u5b9a\u89c4\u6a21\uff1a",(0,t.jsx)(n.strong,{children:"\u7b2c\u4e00\u6b65\uff0c\u627e\u51fa\u9891\u6b21\u6700\u9ad8\u7684\u8fde\u7eed\u5b57\u7b26\u7ec4\u5408\u3002"}),' \u5728\u672c\u4f8b\u4e2d\uff0c\u9891\u6b21\u6700\u9ad8\u7684\u4e00\u5bf9\u5b57\u7b26\u662f "bc"\uff0c\u9891\u6b21\u4e3a 2\u3002',(0,t.jsx)(n.strong,{children:"\u7136\u540e"}),'\uff0c\u6211\u4eec\u5c06\u8fd9\u5bf9\u5b57\u7b26\u5408\u5e76\uff0c\u751f\u6210\u65b0\u7684\u5b50\u8bcd\u5355\u5143\uff08subword unit\uff09"bc"\u3002\u5408\u5e76\u540e\uff0c\u66f4\u65b0\u5b57\u7b26\u9891\u6b21\uff0c\u66f4\u65b0\u540e\u7684\u9891\u6b21\u4e3a {"a": 1, "b": 2, "c": 2, "d": 2, "e": 1, "bc": 2}\u3002\u6211\u4eec\u5c06\u65b0\u7684\u5b50\u8bcd\u5355\u5143 "bc" \u52a0\u5165\u8bcd\u6c47\u8868\uff0c\u4f7f\u4e4b\u6269\u5145\u81f3 {"a", "b", "c", "d", "e", "bc"}\u3002']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u91cd\u590d\u5faa\u73af\u8fd9\u4e00\u8fc7\u7a0b\u3002"}),' \u4e0b\u4e00\u4e2a\u51fa\u73b0\u9891\u6b21\u6700\u9ad8\u7684\u8bcd\u5bf9\u662f "cd"\uff0c\u5c06\u5176\u5408\u5e76\u751f\u6210\u65b0\u7684\u5b50\u8bcd\u5355\u5143 "cd"\uff0c\u5e76\u540c\u6b65\u66f4\u65b0\u9891\u6b21\u3002\u66f4\u65b0\u540e\u4e3a {"a": 1, "b": 2, "c": 1, "d": 1, "e": 1, "bc": 2, "cd": 2}\u3002\u7136\u540e\u6211\u4eec\u5c06 "cd" \u52a0\u5165\u8bcd\u6c47\u8868\uff0c\u5f97\u5230 {"a", "b", "c", "d", "e", "bc", "cd"}\u3002']}),"\n",(0,t.jsx)(n.li,{children:'\u5ef6\u7eed\u6b64\u6d41\u7a0b\uff0c\u4e0b\u4e00\u4e2a\u9891\u7e41\u51fa\u73b0\u7684\u8bcd\u5bf9\u662f "de"\uff0c\u5c06\u5176\u5408\u5e76\u4e3a\u5b50\u8bcd\u5355\u5143 "de"\uff0c\u5e76\u5c06\u9891\u6b21\u66f4\u65b0\u81f3 {"a": 1, "b": 2, "c": 1, "d": 1, "e": 0, "bc": 2, "cd": 1, "de": 1}\u3002\u7136\u540e\u5c06 "de" \u6dfb\u52a0\u5230\u8bcd\u6c47\u8868\u4e2d\uff0c\u4f7f\u5176\u66f4\u65b0\u4e3a {"a", "b", "c", "d", "e", "bc", "cd", "de"}\u3002'}),"\n",(0,t.jsx)(n.li,{children:'\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u53d1\u73b0 "ab" \u662f\u51fa\u73b0\u9891\u6b21\u6700\u9ad8\u7684\u8bcd\u5bf9\uff0c\u5c06\u5176\u5408\u5e76\u4e3a\u5b50\u8bcd\u5355\u5143 "ab"\uff0c\u540c\u6b65\u66f4\u65b0\u9891\u6b21\u4e3a {"a": 0, "b": 1, "c": 1, "d": 1, "e": 0, "bc": 2, "cd": 1, "de": 1, "ab": 1}\u3002\u518d\u5c06 "ab" \u6dfb\u52a0\u81f3\u8bcd\u6c47\u8868\u4e2d\uff0c\u4f7f\u5176\u6269\u5bb9\u81f3 {"a", "b", "c", "d", "e", "bc", "cd", "de", "ab"}\u3002'}),"\n",(0,t.jsx)(n.li,{children:'\u518d\u5f80\u540e\uff0c"bcd" \u6210\u4e3a\u4e86\u4e0b\u4e00\u4e2a\u51fa\u73b0\u9891\u6b21\u6700\u9ad8\u7684\u8bcd\u5bf9\uff0c\u5c06\u5176\u5408\u5e76\u4e3a\u5b50\u8bcd\u5355\u5143 "bcd"\uff0c\u66f4\u65b0\u9891\u6b21\u81f3 {"a": 0, "b": 0, "c": 0, "d": 0, "e": 0, "bc": 1, "cd": 0, "de": 1, "ab": 1, "bcd": 1}\u3002\u5c06 "bcd" \u6dfb\u5165\u8bcd\u6c47\u8868\uff0c\u4f7f\u5176\u5347\u7ea7\u4e3a {"a", "b", "c", "d", "e", "bc", "cd", "de", "ab", "bcd"}\u3002'}),"\n",(0,t.jsx)(n.li,{children:'\u6700\u540e\uff0c\u51fa\u73b0\u9891\u6b21\u6700\u9ad8\u7684\u8bcd\u5bf9\u662f "cde"\uff0c\u5c06\u5176\u5408\u5e76\u4e3a\u5b50\u8bcd\u5355\u5143 "cde"\uff0c\u66f4\u65b0\u9891\u6b21\u81f3 {"a": 0, "b": 0, "c": 0, "d": 0, "e": 0, "bc": 1, "cd": 0, "de": 0, "ab": 1, "bcd": 1, "cde": 1}\u3002\u5c06 "cde" \u6dfb\u52a0\u5165\u8bcd\u6c47\u8868\uff0c\u8fd9\u6837\u8bcd\u6c47\u8868\u5c31\u53d8\u4e3a\u4e86 {"a", "b", "c", "d", "e", "bc", "cd", "de", "ab", "bcd", "cde"}\u3002'}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u6b64\u65b9\u6cd5\u80fd\u591f\u663e\u8457\u63d0\u5347\u5927\u8bed\u8a00\u6a21\u578b\uff08LLMs\uff09\u7684\u6027\u80fd\uff0c\u540c\u65f6\u80fd\u591f\u6709\u6548\u5904\u7406\u751f\u50fb\u8bcd\u53ca\u8bcd\u6c47\u8868\u4e4b\u5916\u7684\u8bcd\u6c47\u3002",(0,t.jsx)(n.strong,{children:"TikToken BPE \u4e0e sentencepiece BPE \u7684\u4e3b\u8981\u533a\u522b\u5728\u4e8e\uff1aTikToken BPE \u4e0d\u4f1a\u76f2\u76ee\u5c06\u5df2\u77e5\u7684\u5b8c\u6574\u8bcd\u6c47\u5206\u5272\u3002"}),' \u6bd4\u5982\uff0c\u82e5 "hugging" \u5df2\u5b58\u5728\u4e8e\u8bcd\u6c47\u8868\u4e2d\uff0c\u5b83\u4f1a\u4fdd\u6301\u539f\u6837\uff0c\u4e0d\u4f1a\u88ab\u62c6\u89e3\u6210 ["hug","ging"]\u3002']})]})}function b(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>r});var c=i(6540);const t={},a=c.createContext(t);function d(e){const n=c.useContext(a);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),c.createElement(a.Provider,{value:n},e.children)}}}]);
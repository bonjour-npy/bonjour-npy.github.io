"use strict";(self.webpackChunknpy_notebook=self.webpackChunknpy_notebook||[]).push([[7829],{6663:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"Deep-Learning/\u8bba\u6587\u7b14\u8bb0/Text2LiDAR-Text-guided-LiDAR-Point-Cloud-Generation-via-Equirectangular-Transformer","title":"Text2LiDAR: Text-guided LiDAR Point Cloud Generation via Equirectangular Transformer","description":"\u8bba\u6587\u539f\u6587\uff1aECCV 2024 Paper","source":"@site/docs/Deep-Learning/7-\u8bba\u6587\u7b14\u8bb0/11-Text2LiDAR-Text-guided-LiDAR-Point-Cloud-Generation-via-Equirectangular-Transformer.md","sourceDirName":"Deep-Learning/7-\u8bba\u6587\u7b14\u8bb0","slug":"/Deep-Learning/\u8bba\u6587\u7b14\u8bb0/Text2LiDAR-Text-guided-LiDAR-Point-Cloud-Generation-via-Equirectangular-Transformer","permalink":"/docs/Deep-Learning/\u8bba\u6587\u7b14\u8bb0/Text2LiDAR-Text-guided-LiDAR-Point-Cloud-Generation-via-Equirectangular-Transformer","draft":false,"unlisted":false,"editUrl":"https://github.com/bonjour-npy/bonjour-npy.github.io/tree/master/docs/Deep-Learning/7-\u8bba\u6587\u7b14\u8bb0/11-Text2LiDAR-Text-guided-LiDAR-Point-Cloud-Generation-via-Equirectangular-Transformer.md","tags":[],"version":"current","sidebarPosition":11,"frontMatter":{},"sidebar":"deep_learning","previous":{"title":"Movie Gen: A Cast of Media Foundation Models","permalink":"/docs/Deep-Learning/\u8bba\u6587\u7b14\u8bb0/Meta-Movie-Gen"},"next":{"title":"LiDAR Data Synthesis with Denoising Diffusion Probabilistic Models","permalink":"/docs/Deep-Learning/\u8bba\u6587\u7b14\u8bb0/LiDAR-Data-Synthesis-with-Denoising-Diffusion-Probabilistic-Models"}}');var s=i(4848),o=i(8453);const a={},r="Text2LiDAR: Text-guided LiDAR Point Cloud Generation via Equirectangular Transformer",d={},l=[{value:"Analysis of Methodology",id:"analysis-of-methodology",level:2},{value:"Analysis nuLiDARtext dataset",id:"analysis-nulidartext-dataset",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"text2lidar-text-guided-lidar-point-cloud-generation-via-equirectangular-transformer",children:"Text2LiDAR: Text-guided LiDAR Point Cloud Generation via Equirectangular Transformer"})}),"\n",(0,s.jsx)(n.admonition,{title:"\u53c2\u8003\u8d44\u6599",type:"tip",children:(0,s.jsxs)(n.p,{children:["\u8bba\u6587\u539f\u6587\uff1a",(0,s.jsx)(n.a,{href:"https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/07328.pdf",children:"ECCV 2024 Paper"})]})}),"\n",(0,s.jsx)(n.h2,{id:"analysis-of-methodology",children:"Analysis of Methodology"}),"\n",(0,s.jsx)(n.admonition,{title:"\u8bf4\u660e",type:"danger",children:(0,s.jsxs)(n.p,{children:["\u70b9\u51fb\u6d4f\u89c8\u7b14\u8bb0 Slides\uff1a",(0,s.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:i(6953).A+"",children:"Text2LiDAR"})]})}),"\n",(0,s.jsx)(n.h2,{id:"analysis-nulidartext-dataset",children:"Analysis nuLiDARtext dataset"}),"\n",(0,s.jsx)(n.admonition,{title:"\u8bf4\u660e",type:"danger",children:(0,s.jsxs)(n.p,{children:["\u70b9\u51fb\u6d4f\u89c8\u7b14\u8bb0 Slides\uff1a",(0,s.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:i(5894).A+"",children:"Dataset Analysis nuLiDARtext"})]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"log.json"}),"\uff1a\u5171\u6709\u4e24\u8f86\u6570\u636e\u91c7\u96c6\u8f66\uff0c\u7f16\u53f7\u5206\u522b\u4e3a ",(0,s.jsx)(n.code,{children:"n008"})," \u548c ",(0,s.jsx)(n.code,{children:"n015"}),"\uff0c\u5728 log.json \u4e2d\u8bb0\u5f55\u4e86\u6bcf\u8f86\u8f66\u8fdb\u884c\u6570\u636e\u91c7\u96c6\u7684\u65e5\u671f\u548c\u5730\u70b9\uff0c\u5171 68 \u4e2a log records\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"map.json"}),"\uff1a\u5b58\u50a8\u56db\u5f20\u5730\u56fe\u7684\u4fe1\u606f\u4ee5\u53ca\u6307\u5411\u6bcf\u5f20\u5730\u56fe\u5bf9\u5e94\u7684\u65e5\u5fd7\u6570\u636e\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"scene.json"}),"\uff1a\u5171\u6709 850 \u4e2a\u573a\u666f\uff08scene\uff09\uff0c\u6bcf\u4e2a\u573a\u666f\u662f\u4e00\u4e2a 20s \u957f\u7684\u5e27\u5e8f\u5217\u3002\u5728 scene.json \u4e2d\u8bb0\u5f55\u4e86\u6bcf\u4e2a\u573a\u666f\u5bf9\u5e94\u7684\u63cf\u8ff0\u3001\u91c7\u96c6\u7684\u6837\u672c\u6570\u4ee5\u53ca\u5bf9\u5e94\u7684 log \u8bb0\u5f55\uff0c\u5e76\u4e14\u4ee5\u5916\u952e\u7684\u5f62\u5f0f\u989d\u5916\u63d0\u4f9b\u4e86\u6bcf\u4e2a\u573a\u666f\u7684\u7b2c\u4e00\u4e2a\u6837\u672c\u7684 token \u4ee5\u53ca\u6700\u540e\u4e00\u4e2a\u6837\u672c\u7684 token\u3002\u4e00\u4e2a scene \u5bf9\u5e94\u4e00\u4e2a log\uff0c\u4e00\u4e2a log \u53ef\u4ee5\u5bf9\u5e94\u591a\u4e2a scene\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"sample.json"}),"\uff1a\u8bb0\u5f55\u6240\u6709\u573a\u666f\u5bf9\u5e94\u7684\u5173\u952e sample \u5e27\uff08LiDAR \u6570\u636e\uff09\uff0c\u5305\u542b\u5f53\u524d\u5173\u952e\u5e27\u7684 token\u3001\u524d\u4e00\u5173\u952e\u5e27\u7684 token \u4ee5\u53ca\u540e\u4e00\u5173\u952e\u5e27\u7684 token\uff0c\u5f62\u6210\u94fe\u8868\u7ed3\u6784\u8868\u793a\u65f6\u95f4\u5e8f\u5217\u3002\u5171\u8ba1 3,4149 \u4e2a LiDAR sample \u5173\u952e\u5e27\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"sample_data.json"}),"\uff1a\u8bb0\u5f55\u91c7\u96c6\u7684\u6240\u6709\u6570\u636e\u5bf9\u5e94\u7684\u771f\u5b9e\u6570\u636e\u6587\u4ef6\u540d\u79f0\uff0c\u5e76\u4ee5\u94fe\u8868\u7684\u5f62\u5f0f\u5f62\u6210\u65f6\u95f4\u5e8f\u5217\u3002\u5305\u62ec Camera data\u3001Radar data \u4ee5\u53ca LiDAR data \u7684\u6240\u6709 sample \u5173\u952e\u5e27\u4ee5\u53ca sweep \u975e\u5173\u952e\u5e27\u3002\u5176\u4e2d\uff0cLiDAR \u6570\u636e\u7684\u5173\u952e\u5e27\u5c31\u662f ",(0,s.jsx)(n.code,{children:"sample.json"})," \u6587\u4ef6\u4e2d\u7684 record\uff08\u65f6\u95f4\u6233\u4e0e ",(0,s.jsx)(n.code,{children:"sample.json"})," \u4e2d\u7684\u65f6\u95f4\u6233\u57fa\u672c\u76f8\u540c\uff09\uff0c\u975e\u5173\u952e\u5e27\u7684\u6240\u6709\u6570\u636e\u4ee5\u53ca\u5173\u952e\u5e27\u7684 LiDAR \u4e4b\u5916\u7684\u5176\u4ed6\u6570\u636e\u56f4\u7ed5\u5173\u952e\u5e27\u7684 LiDAR \u6570\u636e\u5c55\u5f00\u5b58\u50a8\uff08\u65f6\u95f4\u6233\u662f\u5728 LiDAR \u5173\u952e\u5e27\u7684\u524d\u540e\uff09\u3002\u5171\u8ba1 2,631,083 \u4e2a data\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"category.json"}),"\uff1a23 \u4e2a\u7c7b\u522b\uff0c\u5b9a\u4e49\u4e86\u7269\u4f53\u7684\u5206\u7c7b\uff0c\u5982\u4eba\u3001\u52a8\u7269\u3001\u8f7d\u5177\u3001\u53ef\u79fb\u52a8\u7269\u4f53\u6216\u4e0d\u53ef\u79fb\u52a8\u7269\u4f53\u7b49\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"attribute.json"}),"\uff1a8 \u4e2a\u5c5e\u6027\uff0c\u5b9a\u4e49\u4e86\u7269\u4f53\u7684\u72b6\u6001\uff0cattribute \u5728 category \u4e0d\u53d8\u7684\u60c5\u51b5\u4e0b\u6539\u53d8\uff0c\u5982\u8f7d\u5177\u662f\u8fd0\u52a8\u72b6\u6001\u8fd8\u662f\u9759\u6b62\u72b6\u6001\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"visibility.json"}),"\uff1a4 \u4e2a\u7b49\u7ea7\uff0c\u5b9a\u4e49\u4e86 ",(0,s.jsx)(n.code,{children:"sample_annotation.json"})," \u4e2d\u6bcf\u4e2a annotation \u7684\u53ef\u89c1\u5ea6\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"instance.json"}),"\uff1a\u5b58\u50a8\u67d0\u4e00 scene \u4e2d\u6807\u6ce8\u7684\u5b9e\u4f8b\u4fe1\u606f\uff0c\u5982\u8f7d\u5177\u3001\u884c\u4eba\u7b49\uff0c\u6bcf\u4e2a instance \u53ef\u80fd\u5728\u540c\u4e00 scene \u7684\u4e0d\u540c sample \u4e2d\u90fd\u6709\u6807\u6ce8\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"sample_annotation.json"}),"\uff1a\u8bb0\u5f55\u4ece sample \u5173\u952e\u5e27\u4e2d\u6807\u6ce8\u7684 bounding box \u4fe1\u606f\uff0c\u4ee5\u53ca\u5bf9\u5e94\u7684\u5b9e\u4f8b\uff08instance\uff09\u3001\u5c5e\u6027\uff08attribute\uff09\u4ee5\u53ca\u53ef\u89c1\u5ea6\uff08visibility\uff09\u3002\u4e00\u4e2a sample \u5173\u952e\u5e27\u53ef\u4ee5\u62e5\u6709\u591a\u4e2a annotation\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["nuLiDARtext \u548c nuScenes \u7684\u914d\u5bf9\u6587\u672c\u63cf\u8ff0\u4e3b\u8981\u5b58\u50a8\u4e8e ",(0,s.jsx)(n.code,{children:"scene.json"})," \u4e2d\uff0c\u53ef\u4ee5\u4e0e nuScenes \u4e2d\u7684 ",(0,s.jsx)(n.code,{children:"scene.json"})," \u8fdb\u884c\u6bd4\u8f83\uff0c\u67e5\u770b nuLiDARtext \u7684\u4f5c\u8005\u8fdb\u884c\u7684\u9488\u5bf9\u6027\u4fee\u6539\u3002"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},5894:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/files/11-Dataset-Analysis-nuLiDARtext-cef61ebd9e079fcecfbd8290ea77b85f.pdf"},6953:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/files/11-Text2LiDAR-204d744e87c140687b99ceebeb9ce012.pdf"},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var t=i(6540);const s={},o=t.createContext(s);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);
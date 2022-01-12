"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[169],{9613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var l=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=l.createContext({}),c=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return l.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=c(n),k=r,u=s["".concat(o,".").concat(k)]||s[k]||d[k]||a;return n?l.createElement(u,i(i({ref:t},m),{},{components:n})):l.createElement(u,i({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9255:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>o,metadata:()=>c,toc:()=>m,default:()=>s});var l=n(9518),r=n(7344),a=(n(9496),n(9613)),i=["components"],p={id:"filtering",title:"\u8fc7\u6ee4"},o=void 0,c={unversionedId:"filtering",id:"filtering",title:"\u8fc7\u6ee4",description:"\u6dfb\u52a0\u4e8e\uff1av2.13.0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/filtering.md",sourceDirName:".",slug:"/filtering",permalink:"/zh/next/filtering",editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"current",frontMatter:{id:"filtering",title:"\u8fc7\u6ee4"},sidebar:"docs",previous:{title:"\u914d\u7f6e",permalink:"/zh/next/configuring"},next:{title:"\u811a\u672c",permalink:"/zh/next/scripts"}},m=[{value:"\u5339\u914d",id:"\u5339\u914d",children:[{value:"--filter &lt;package_name&gt;",id:"--filter-package_name",children:[],level:3},{value:"--filter &lt;package_name&gt;...",id:"--filter-package_name-1",children:[],level:3},{value:"--filter &lt;package_name&gt;^...",id:"--filter-package_name-2",children:[],level:3},{value:"--filter ...&lt;package_name&gt;",id:"--filter-package_name-3",children:[],level:3},{value:"--filter &quot;...^&lt;package_name&gt;&quot;",id:"--filter-package_name-4",children:[],level:3},{value:"--filter ./&lt;directory&gt;",id:"--filter-directory",children:[],level:3},{value:"--filter {&lt;directory&gt;}",id:"--filter-directory-1",children:[],level:3},{value:"--filter &quot;<since>&quot;",id:"--filter-since",children:[],level:3}],level:2},{value:"\u6392\u9664",id:"\u6392\u9664",children:[],level:2},{value:"\u591a\u91cd\u6027",id:"\u591a\u91cd\u6027",children:[],level:2},{value:"--filter-prod &lt;filtering_pattern&gt;",id:"--filter-prod-filtering_pattern",children:[],level:2},{value:"--test-pattern &lt;glob&gt;",id:"--test-pattern-glob",children:[],level:2},{value:"--changed-files-ignore-pattern &lt;glob&gt;",id:"--changed-files-ignore-pattern-glob",children:[],level:2}],d={toc:m};function s(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av2.13.0"),(0,a.kt)("p",null,"\u8fc7\u6ee4\u5141\u8bb8\u60a8\u5c06\u547d\u4ee4\u9650\u5236\u4e8e\u5305\u7684\u7279\u5b9a\u5b50\u96c6\u3002"),(0,a.kt)("p",null,"pnpm \u652f\u6301\u4e30\u5bcc\u9009\u62e9\u5668\u8bed\u6cd5\uff0c\u53ef\u4ee5\u901a\u8fc7\u540d\u79f0\u6216\u5173\u7cfb\u9009\u62e9\u5305\u3002"),(0,a.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"--filter")," \u6807\u5fd7\u6307\u5b9a\u9009\u62e9\u5668\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm <command> --filter <package_selector>\n")),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("a",{parentName:"p",href:"https://medium.com/pnpm/pnpm-vs-lerna-filtering-in-a-multi-package-repository-1f68bc644d6a"},"\u4e00\u7bc7\u5c06Lerna\u8fc7\u6ee4\u5668\u4e0e pnpm \u8fc7\u6ee4\u5668\u505a\u6bd4\u8f83\u7684\u6587\u7ae0")))),(0,a.kt)("h2",{id:"\u5339\u914d"},"\u5339\u914d"),(0,a.kt)("h3",{id:"--filter-package_name"},"--filter ","<","package_name>"),(0,a.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av2.13.0"),(0,a.kt)("p",null,"\u9009\u62e9\u4e00\u4e2a\u7cbe\u786e\u7684\u5305\uff0c \u53ea\u7528\u6307\u5b9a\u5b83\u7684\u540d\u79f0 (",(0,a.kt)("inlineCode",{parentName:"p"},"@scope/pkg"),") \u6216\u4f7f\u7528 \u901a\u914d\u7b26\u9009\u62e9\u4e00\u7ec4\u5305 (",(0,a.kt)("inlineCode",{parentName:"p"},"@scope/*"),")\u3002"),(0,a.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm test --filter "@babel/core"\npnpm test --filter "@babel/*"\npnpm test --filter "*core"\n')),(0,a.kt)("p",null,"\u4ece v6.19.0 \u5f00\u59cb\uff1a"),(0,a.kt)("p",null,"\u6307\u5b9a\u5305\u7684\u8303\u56f4\u662f\u53ef\u9009\u7684\uff0c\u56e0\u6b64\u5982\u679c\u672a\u627e\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"core"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"--filter=core")," \u5c06\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"p"},"@babel/core"),"\u3002 \u4f46\u662f\uff0c\u5982\u679c\u5de5\u4f5c\u533a\u6709\u591a\u4e2a\u540c\u540d\u7684\u5305\uff08\u4f8b\u5982\uff0c ",(0,a.kt)("inlineCode",{parentName:"p"},"@babel/core")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"@types/core"),"\uff09\uff0c\u5219\u6ca1\u6709\u8303\u56f4\u7684\u8fc7\u6ee4\u5c06\u4e0d\u4f1a\u9009\u62e9\u4efb\u4f55\u5185\u5bb9\u3002"),(0,a.kt)("h3",{id:"--filter-package_name-1"},"--filter ","<","package_name>..."),(0,a.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av2.13.0"),(0,a.kt)("p",null,"\u8981\u9009\u62e9\u4e00\u4e2a\u8f6f\u4ef6\u5305\u53ca\u5176\u4f9d\u8d56\u9879 (\u76f4\u63a5\u548c\u975e\u76f4\u63a5) \u5728\u5305\u540d\u79f0\u540e\u52a0\u4e0a\u7701\u7565\u53f7\uff1a ",(0,a.kt)("inlineCode",{parentName:"p"},"<package_name>..."),"\u3002 \u4f8b\u5982\uff0c\u4e0b\u4e00\u4e2a\u547d\u4ee4\u5c06\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," \u53ca\u5176\u6240\u6709\u4f9d\u8d56\u7684\u6d4b\u8bd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm test --filter foo...\n")),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528\u901a\u914d\u7b26\u6765\u9009\u62e9\u4e00\u7ec4\u6839\u76ee\u5f55\u5305\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm test --filter "@babel/preset-*..."\n')),(0,a.kt)("h3",{id:"--filter-package_name-2"},"--filter ","<","package_name>^..."),(0,a.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av4.4.0"),(0,a.kt)("p",null,"\u8981\u53ea\u9009\u62e9\u4e00\u4e2a\u5305\u7684\u4f9d\u8d56\u9879(\u76f4\u63a5\u548c\u975e\u76f4\u63a5)\uff0c \u5728\u5305\u540d\u524d\u6dfb\u52a0\u4e00\u4e2a\u5c71\u5f62\u7b26\u53f7\u52a0\u4e0a\u4e0a\u9762\u63d0\u5230\u7684\u7701\u7565\u53f7\u3002 \u4f8b\u5982\uff0c\u4e0b\u9762\u7684\u547d\u4ee4\u5c06\u8fd0\u884c\u6240\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"foo"),"\u7684\u4f9d\u8d56\u9879\u7684\u6d4b\u8bd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm test --filter "foo^..."\n')),(0,a.kt)("h3",{id:"--filter-package_name-3"},"--filter ...","<","package_name>"),(0,a.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av2.14.0"),(0,a.kt)("p",null,"\u8981\u9009\u62e9\u4e00\u4e2a\u5305\u53ca\u88ab\u5176\u4f9d\u8d56\u7684\u5305(\u76f4\u63a5\u548c\u975e\u76f4\u63a5)\uff0c\u5728\u5305\u540d\u524d\u6dfb\u52a0\u4e00\u4e2a\u7701\u7565\u53f7: ",(0,a.kt)("inlineCode",{parentName:"p"},"...<package_name>"),"\u3002 \u4f8b\u5982\uff0c\u8fd9\u5c06\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," \u4ee5\u53ca\u4f9d\u8d56\u4e8e\u5b83\u7684\u6240\u6709\u5305\u7684\u6d4b\u8bd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm test --filter ...foo\n")),(0,a.kt)("h3",{id:"--filter-package_name-4"},'--filter "...^',"<",'package_name>"'),(0,a.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av4.4.0"),(0,a.kt)("p",null,"\u8981\u53ea\u9009\u62e9\u4e00\u4e2a\u5305\u7684\u88ab\u4f9d\u8d56\u9879 (\u76f4\u63a5\u548c\u975e\u76f4\u63a5) \uff0c\u5728\u5305\u540d\u524d\u6dfb\u52a0\u4e00\u4e2a\u7701\u7565\u53f7\u4e0e\u5c71\u5f62\u7b26\u53f7\u3002 \u4f8b\u5982\uff0c\u8fd9\u5c06\u8fd0\u884c\u6240\u6709\u4f9d\u8d56\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," \u7684\u5305\u7684\u6d4b\u8bd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'pnpm test --filter "...^foo"\n')),(0,a.kt)("h3",{id:"--filter-directory"},"--filter ./","<","directory>"),(0,a.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av2.15.0"),(0,a.kt)("p",null,"\u8981\u4ec5\u9009\u62e9\u6307\u5b9a\u76ee\u5f55\u4e0b\u7684\u5305\uff0c\u60a8\u53ef\u4ee5\u6307\u5b9a\u4efb\u4f55\u76f8\u5bf9\u8def\u5f84\uff0c\u8def\u5f84\u901a\u5e38\u4e3a POSIX \u683c\u5f0f\u3002"),(0,a.kt)("h3",{id:"--filter-directory-1"},"--filter {","<","directory>}"),(0,a.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av4.7.0"),(0,a.kt)("p",null,"\u5305\u62ec\u6307\u5b9a\u76ee\u5f55\u4e0b\u7684\u6240\u6709\u9879\u76ee\u3002"),(0,a.kt)("p",null,"\u4e5f\u53ef\u4ee5\u4f7f\u7528\u7701\u7565\u53f7\u4e0e\u5c71\u5f62\u7b26\u53f7\u6765\u9009\u62e9\u4f9d\u8d56\u9879\u4e0e\u88ab\u4f9d\u8d56\u9879\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm <cmd> --filter ...{<directory>}\npnpm <cmd> --filter {<directory>}...\npnpm <cmd> --filter ...{<directory>}...\n")),(0,a.kt)("p",null,"\u4e5f\u53ef\u4ee5\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"[<since>]")," \u5408\u5e76\u4f7f\u7528\u3002 \u4f8b\u5982\uff0c\u8981\u5728\u67d0\u4e2a\u76ee\u5f55\u4e2d\u9009\u62e9\u6240\u6709\u5df2\u66f4\u6539\u7684\u9879\u76ee\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm <cmd> --filter "{packages}[origin/master]"\npnpm <cmd> --filter "...{packages}[origin/master]"\npnpm <cmd> --filter "{packages}[origin/master]..."\npnpm <cmd> --filter "...{packages}[origin/master]..."\n')),(0,a.kt)("p",null,"\u6216\u8005\u4f60\u53ef\u4ee5\u4ece\u67d0\u4e2a\u76ee\u5f55\u4e2d\u9009\u62e9\u7b26\u5408\u7ed9\u5b9a\u7684\u901a\u914d\u7b26\u7684\u6240\u6709\u5305\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'pnpm <cmd> --filter "@babel/*{components}"\npnpm <cmd> --filter "@babel/*{components}[origin/master]"\npnpm <cmd> --filter "...@babel/*{components}[origin/master]"\n')),(0,a.kt)("h3",{id:"--filter-since"},'--filter "',"[<","since>]",'"'),(0,a.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av4.6.0"),(0,a.kt)("p",null,"\u9009\u62e9\u81ea\u6307\u5b9a\u7684 commit / branch \u4ee5\u6765\u6709\u66f4\u6539\u7684\u6240\u6709\u5305\u3002 \u53ef\u4ee5\u5728\u524d\u540e\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"...")," \u6765\u5305\u62ec\u4f9d\u8d56\u9879/\u88ab\u4f9d\u8d56\u9879\uff1a"),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c\u4ee5\u4e0b\u547d\u4ee4\u5c06\u8fd0\u884c\u81ea ",(0,a.kt)("inlineCode",{parentName:"p"},"master")," \u4ee5\u6765\u6240\u6709\u53d8\u52a8\u8fc7\u7684\u5305\u4ee5\u53ca\u88ab\u5176\u4f9d\u8d56\u7684\u5305\u7684\u6d4b\u8bd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm test --filter "...[origin/master]"\n')),(0,a.kt)("h2",{id:"\u6392\u9664"},"\u6392\u9664"),(0,a.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av5.8.0"),(0,a.kt)("p",null,'\u4efb\u4f55\u8fc7\u6ee4\u89c4\u5219\u9009\u62e9\u5668\u90fd\u53ef\u4ee5\u4f5c\u4e3a\u6392\u9664\u9879\uff0c\u53ea\u8981\u5728\u5f00\u5934\u6dfb\u52a0\u4e00\u4e2a"!"\u3002 \u5728 zsh (\u53ef\u80fd\u8fd8\u6709\u5176\u4ed6shells) \u4e2d, "!" \u5e94\u8f6c\u4e49: ',(0,a.kt)("inlineCode",{parentName:"p"},"\\!"),"."),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c\u8fd9\u5c06\u5728\u9664 ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," \u4ee5\u5916\u7684\u6240\u6709\u9879\u76ee\u4e2d\u8fd0\u884c\u4e00\u4e2a\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm <cmd> --filter=!foo\n")),(0,a.kt)("p",null,"\u7136\u540e\u8fd9\u5c06\u5728\u6240\u6709\u4e0d\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"lib"),"\u76ee\u5f55\u4e0b\u7684\u9879\u76ee\u4e2d\u8fd0\u884c\u4e00\u4e2a\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm <cmd> --filter=!./lib\n")),(0,a.kt)("h2",{id:"\u591a\u91cd\u6027"},"\u591a\u91cd\u6027"),(0,a.kt)("p",null,"\u5f53\u5305\u88ab\u8fc7\u6ee4\u65f6\uff0c\u6bcf\u4e2a\u90fd\u4f1a\u88ab\u5339\u914d\u5230\u81f3\u5c11\u4e00\u4e2a\u9009\u62e9\u5668\u3002 \u4f60\u53ef\u4ee5\u4f7f\u7528\u65e0\u9650\u6570\u91cf\u7684\u8fc7\u6ee4\u5668\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm test --filter ...foo --filter bar --filter baz...\n")),(0,a.kt)("h2",{id:"--filter-prod-filtering_pattern"},"--filter-prod ","<","filtering_pattern>"),(0,a.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av6.2.0"),(0,a.kt)("p",null,"\u5728\u4ece\u5de5\u4f5c\u533a\u9009\u62e9\u4f9d\u8d56\u9879\u65f6\uff0c\u4f1a\u5ffd\u7565 ",(0,a.kt)("inlineCode",{parentName:"p"},"devDependencies"),"\uff0c\u5176\u4f59\u884c\u4e3a\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"--filter")," \u4e00\u81f4\u3002"),(0,a.kt)("h2",{id:"--test-pattern-glob"},"--test-pattern ","<","glob>"),(0,a.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av5.14.0"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"test-pattern")," \u5141\u8bb8\u68c0\u6d4b\u4fee\u6539\u540e\u7684\u6587\u4ef6\u662f\u5426\u4e0e\u6d4b\u8bd5\u76f8\u5173\u3002 \u5982\u679c\u662f\u8fd9\u6837\uff0c\u7ecf\u8fd9\u79cd\u4fee\u6539\u7684\u5305\u7684\u88ab\u4f9d\u8d56\u5305\u5e76\u4e0d\u5305\u62ec\u5728\u5185\u3002"),(0,a.kt)("p",null,"\u6b64\u9009\u9879\u5bf9\u4e8e \u201cchanged since\u201d \u8fc7\u6ee4\u5668\u975e\u5e38\u6709\u7528\u3002 \u4f8b\u5982\uff0c\u4ee5\u4e0b\u547d\u4ee4\u5c06\u5728\u6240\u6709\u66f4\u6539\u7684\u5305\u4e2d\u8fd0\u884c\u6d4b\u8bd5\uff0c \u5982\u679c\u66f4\u6539\u5728\u5305\u7684\u6e90\u4ee3\u7801\u4e2d\uff0c\u6d4b\u8bd5\u4e5f\u5c06\u5728\u88ab\u4f9d\u8d56\u7684\u5305\u4e2d\u8fd0\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter="...[origin/master]" --test-pattern="test/*" test\n')),(0,a.kt)("h2",{id:"--changed-files-ignore-pattern-glob"},"--changed-files-ignore-pattern ","<","glob>"),(0,a.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av6.16.0"),(0,a.kt)("p",null,"\u5141\u8bb8\u5728\u8fc7\u6ee4\u81ea\u6307\u5b9a\u63d0\u4ea4/\u5206\u652f\u4ee5\u6765\u66f4\u6539\u7684\u9879\u76ee\u65f6\u901a\u8fc7 glob \u6a21\u5f0f\u5ffd\u7565\u66f4\u6539\u7684\u6587\u4ef6\u3002"),(0,a.kt)("p",null,"\u7528\u6cd5\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter="...[origin/master]" --changed-files-ignore-pattern="**/README.md" run build\n')))}s.isMDXComponent=!0}}]);
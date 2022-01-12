"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[454],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),o=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=o(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=o(n),k=l,d=m["".concat(c,".").concat(k)]||m[k]||s[k]||a;return n?r.createElement(d,p(p({ref:t},u),{},{components:n})):r.createElement(d,p({ref:t},u))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,p=new Array(a);p[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,p[1]=i;for(var o=2;o<a;o++)p[o]=n[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1722:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>c,metadata:()=>o,toc:()=>u,default:()=>m});var r=n(9518),l=n(7344),a=(n(9496),n(9613)),p=["components"],i={id:"publish",title:"pnpm publish"},c=void 0,o={unversionedId:"cli/publish",id:"cli/publish",title:"pnpm publish",description:"\u53d1\u5e03\u4e00\u4e2a\u5305\u5230\u6ce8\u518c\u8868\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/cli/publish.md",sourceDirName:"cli",slug:"/cli/publish",permalink:"/zh/next/cli/publish",editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"current",frontMatter:{id:"publish",title:"pnpm publish"},sidebar:"docs",previous:{title:"pnpm env <cmd>",permalink:"/zh/next/cli/env"},next:{title:"pnpm pack",permalink:"/zh/next/cli/pack"}},u=[{value:"\u914d\u7f6e\u9879",id:"\u914d\u7f6e\u9879",children:[{value:"--tag &lt;tag&gt;",id:"--tag-tag",children:[],level:3},{value:"--access &lt;public|restricted&gt;",id:"--access-publicrestricted",children:[],level:3},{value:"git-checks",id:"git-checks",children:[],level:3},{value:"publish-branch",id:"publish-branch",children:[],level:3},{value:"--force",id:"--force",children:[],level:3},{value:"--report-summary",id:"--report-summary",children:[],level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[],level:3}],level:2}],s={toc:u};function m(e){var t=e.components,n=(0,l.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u53d1\u5e03\u4e00\u4e2a\u5305\u5230\u6ce8\u518c\u8868\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm [-r] publish [<tarball|folder>] [--tag <tag>]\n     [--access <public|restricted>]\n")),(0,a.kt)("p",null,"\u5f53\u5728\u4e00\u4e2a",(0,a.kt)("a",{parentName:"p",href:"/zh/next/workspaces"},"\u5de5\u4f5c\u7a7a\u95f4"),"\u5185\u53d1\u5e03\u65f6\uff0c\u5de5\u4f5c\u7a7a\u95f4\u6839\u76ee\u5f55\u7684 LICENSE \u6587\u4ef6\u5c06\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"package")," \u4e00\u8d77\u6253\u5305\u3002\uff08\u9664\u975e",(0,a.kt)("inlineCode",{parentName:"p"},"package"),"\u6709\u4e13\u5c5e\u7684\u8bb8\u53ef\u8bc1\uff09"),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u5728\u53d1\u5e03\u4e4b\u524d\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," ",(0,a.kt)("a",{parentName:"p",href:"/zh/next/package_json#publishconfig"},"publishConfig")," \u5b57\u6bb5\u8986\u76d6\u67d0\u4e9b\u5b57\u6bb5\u3002 \u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"/zh/next/package_json#publishconfigdirectory"},(0,a.kt)("inlineCode",{parentName:"a"},"publishConfig.directory"))," \u81ea\u5b9a\u4e49\u53d1\u5e03\u7684\u5b50\u76ee\u5f55\uff08\u901a\u5e38\u4f7f\u7528\u7b2c\u4e09\u65b9\u6784\u5efa\u5de5\u5177\uff09\u3002"),(0,a.kt)("p",null,"\u9012\u5f52\u8fd0\u884c\u6b64\u547d\u4ee4\u65f6 (",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm -r publish"),")\uff0cpnpm \u5c06\u53d1\u5e03\u6240\u6709\u7248\u672c\u5c1a\u672a\u53d1\u5e03\u5230\u6ce8\u518c\u8868\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"package"),"\u3002"),(0,a.kt)("h2",{id:"\u914d\u7f6e\u9879"},"\u914d\u7f6e\u9879"),(0,a.kt)("h3",{id:"--tag-tag"},"--tag ","<","tag",">"),(0,a.kt)("p",null,"\u4f7f\u7528\u7ed9\u5b9a\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"tag")," \u53d1\u5e03",(0,a.kt)("inlineCode",{parentName:"p"},"package"),"\u3002 \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm publish")," \u4f1a\u66f4\u65b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"latest")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"tag "),"\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"#\u5728 foo \u5305\u76ee\u5f55\npnpm publish --tag next\n# \u5728\u9879\u76ee\u4e2d\uff0c\u4f60\u60f3\u7528 foo \u7684 next \u7248\u672c\npnpm add foo@next\n")),(0,a.kt)("h3",{id:"--access-publicrestricted"},"--access ","<","public|restricted",">"),(0,a.kt)("p",null,"\u901a\u77e5\u6ce8\u518c\u8868\u6240\u53d1\u5e03\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"package"),"\u662f\u516c\u5f00\u7684\u8fd8\u662f\u53d7\u9650\u5236\u7684\u3002"),(0,a.kt)("h3",{id:"git-checks"},"git-checks"),(0,a.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av4.11.0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,a.kt)("strong",{parentName:"li"},"true"),"\uff08\u81ea v5 \u8d77\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,a.kt)("strong",{parentName:"li"},"Boolean"))),(0,a.kt)("p",null,"\u5982\u679c\u4e3a true, ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm publish"),"\u4f1a\u68c0\u67e5\u4f60\u5f53\u524d\u7684\u5206\u652f\u662f\u5426\u662f\u53d1\u5e03\u5206\u652f\uff08\u9ed8\u8ba4\u662f master\uff09\uff0c\u662f\u5426\u662f\u5e72\u51c0\u3001\u6700\u65b0\u7684\u3002"),(0,a.kt)("h3",{id:"publish-branch"},"publish-branch"),(0,a.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av4.11.0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,a.kt)("strong",{parentName:"li"},"master")),(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,a.kt)("strong",{parentName:"li"},"String"))),(0,a.kt)("p",null,"\u7528\u4e8e\u53d1\u5e03\u6700\u65b0\u66f4\u6539\u7684\u4ed3\u5e93\u7684\u4e3b\u5206\u652f\u3002"),(0,a.kt)("h3",{id:"--force"},"--force"),(0,a.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av5.18.0"),(0,a.kt)("p",null,"\u5c1d\u8bd5\u53d1\u5e03",(0,a.kt)("inlineCode",{parentName:"p"},"packages"),"\uff0c\u5373\u4f7f\u5728\u6ce8\u518c\u8868\u4e2d\u7684\u7248\u672c\u5df2\u5b58\u5728\u3002"),(0,a.kt)("h3",{id:"--report-summary"},"--report-summary"),(0,a.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av6.5.0"),(0,a.kt)("p",null,"\u5c06\u5df2\u53d1\u5e03\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"packages"),"\u7684\u5217\u8868\u4fdd\u5b58\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm-publish-summary.json"),"\u3002 \u8fd9\u5728\u4f7f\u7528\u5176\u4ed6\u4e00\u4e9b\u5de5\u5177\u6765\u62a5\u544a\u5df2\u53d1\u5e03",(0,a.kt)("inlineCode",{parentName:"p"},"packages"),"\u7684\u5217\u8868\u65f6\u5f88\u6709\u7528\u3002"),(0,a.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,a.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av4.6.0"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/zh/next/filtering"},"\u9605\u8bfb\u66f4\u591a\u6709\u5173 filter \u7684\u5185\u5bb9\u3002")))}m.isMDXComponent=!0}}]);
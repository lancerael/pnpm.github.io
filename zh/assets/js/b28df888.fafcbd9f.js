"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6864],{9613:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>v});var n=t(9496);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(t),v=o,m=u["".concat(p,".").concat(v)]||u[v]||d[v]||l;return t?n.createElement(m,a(a({ref:r},s),{},{components:t})):n.createElement(m,a({ref:r},s))}));function v(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=u;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1670:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>i,contentTitle:()=>p,metadata:()=>c,toc:()=>s,default:()=>u});var n=t(9518),o=t(7344),l=(t(9496),t(9613)),a=["components"],i={id:"remove",title:"pnpm remove"},p=void 0,c={unversionedId:"cli/remove",id:"version-5.x/cli/remove",title:"pnpm remove",description:"Removes packages from node_modules and from the project's package.json.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-5.x/cli/remove.md",sourceDirName:"cli",slug:"/cli/remove",permalink:"/zh/5.x/cli/remove",editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"5.x",frontMatter:{id:"remove",title:"pnpm remove"},sidebar:"version-5.x/docs",previous:{title:"pnpm update",permalink:"/zh/5.x/cli/update"},next:{title:"pnpm link",permalink:"/zh/5.x/cli/link"}},s=[{value:"\u914d\u7f6e\u9879",id:"\u914d\u7f6e\u9879",children:[{value:"--recursive, -r",id:"--recursive--r",children:[],level:3},{value:"--global",id:"--global",children:[],level:3},{value:"--save-dev, -D",id:"--save-dev--d",children:[],level:3},{value:"--save-optional, -O",id:"--save-optional--o",children:[],level:3},{value:"--save-prod, -P",id:"--save-prod--p",children:[],level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[],level:3}],level:2}],d={toc:s};function u(e){var r=e.components,t=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Removes packages from ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules")," and from the project's ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,l.kt)("p",null,"Aliases: rm, uninstall, un"),(0,l.kt)("h2",{id:"\u914d\u7f6e\u9879"},"\u914d\u7f6e\u9879"),(0,l.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,l.kt)("p",null,"\u5f53\u5728 ",(0,l.kt)("a",{parentName:"p",href:"/zh/5.x/workspaces"},"\u5de5\u4f5c\u533a")," \u4e2d\u4f7f\u7528\u6b64\u547d\u4ee4\u65f6\uff0c\u5c06\u4ece\u6bcf\u4e2a\u5de5\u4f5c\u533a\u7684\u5305\u4e2d\u79fb\u9664\u76f8\u5173\u4f9d\u8d56(\u6216 \u591a\u4e2a\u4f9d\u8d56)\u3002"),(0,l.kt)("p",null,"\u5f53\u4e0d\u5728\u5de5\u4f5c\u533a\u5185\u4f7f\u7528\u65f6\uff0c\u5c06\u5220\u9664\u76f8\u5173\u4f9d\u8d56\u9879 (\u6216\u591a\u4e2a\u4f9d\u8d56), \u4e5f\u5305\u542b\u5b50\u76ee\u5f55\u4e2d\u5bf9\u5e94\u7684\u5305 \u3002"),(0,l.kt)("h3",{id:"--global"},"--global"),(0,l.kt)("p",null,"\u4ece\u5168\u5c40\u5220\u9664\u4e00\u4e2a\u4f9d\u8d56\u5305\u3002"),(0,l.kt)("h3",{id:"--save-dev--d"},"--save-dev, -D"),(0,l.kt)("p",null,"\u4ec5\u5220\u9664\u5f00\u53d1\u73af\u5883 ",(0,l.kt)("inlineCode",{parentName:"p"},"devDependencies")," \u4e2d\u7684\u4f9d\u8d56\u9879\u3002"),(0,l.kt)("h3",{id:"--save-optional--o"},"--save-optional, -O"),(0,l.kt)("p",null,"\u4ec5\u79fb\u9664 ",(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," \u4e2d\u7684\u4f9d\u8d56\u9879\u3002"),(0,l.kt)("h3",{id:"--save-prod--p"},"--save-prod, -P"),(0,l.kt)("p",null,"\u4ec5\u4ece ",(0,l.kt)("inlineCode",{parentName:"p"},"devDependencies")," \u4e2d\u5220\u9664\u76f8\u5173\u4f9d\u8d56\u9879\u3002"),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/zh/5.x/filtering"},"\u9605\u8bfb\u66f4\u591a\u6709\u5173 filter \u7684\u5185\u5bb9\u3002")))}u.isMDXComponent=!0}}]);
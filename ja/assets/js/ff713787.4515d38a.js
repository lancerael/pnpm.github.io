"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6587],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>v});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(r),v=o,m=d["".concat(p,".").concat(v)]||d[v]||u[v]||l;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2924:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>i,contentTitle:()=>p,metadata:()=>c,toc:()=>s,default:()=>d});var n=r(9518),o=r(7344),l=(r(9496),r(9613)),a=["components"],i={id:"remove",title:"pnpm remove"},p=void 0,c={unversionedId:"cli/remove",id:"version-6.x/cli/remove",title:"pnpm remove",description:"Aliases: rm, uninstall, un",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-6.x/cli/remove.md",sourceDirName:"cli",slug:"/cli/remove",permalink:"/ja/cli/remove",editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"6.x",frontMatter:{id:"remove",title:"pnpm remove"},sidebar:"version-6.x/docs",previous:{title:"pnpm update",permalink:"/ja/cli/update"},next:{title:"pnpm link",permalink:"/ja/cli/link"}},s=[{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[],level:3},{value:"--global",id:"--global",children:[],level:3},{value:"--save-dev, -D",id:"--save-dev--d",children:[],level:3},{value:"--save-optional, -O",id:"--save-optional--o",children:[],level:3},{value:"--save-prod, -P",id:"--save-prod--p",children:[],level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[],level:3}],level:2}],u={toc:s};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Aliases: rm, uninstall, un"),(0,l.kt)("p",null,"Removes packages from ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules")," and from the project's ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ja/workspaces"},"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9"),"\u5185\u3067\u5b9f\u884c\u3059\u308b\u3068\u3001\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306b\u542b\u307e\u308c\u308b\u5168\u3066\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u3064\u3044\u3066\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u524a\u9664\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u5916\u3067\u5b9f\u884c\u3059\u308b\u3068\u3001\u30b5\u30d6\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u5185\u306b\u542b\u307e\u308c\u308b\u5168\u3066\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u3064\u3044\u3066\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u524a\u9664\u3057\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"--global"},"--global"),(0,l.kt)("p",null,"\u30b0\u30ed\u30fc\u30d0\u30eb\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u524a\u9664\u3057\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"--save-dev--d"},"--save-dev, -D"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"devDependencies"),"\u306b\u542b\u307e\u308c\u308b\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u307f\u3092\u524a\u9664\u3057\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"--save-optional--o"},"--save-optional, -O"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"\u306b\u542b\u307e\u308c\u308b\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u307f\u3092\u524a\u9664\u3057\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"--save-prod--p"},"--save-prod, -P"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"dependencies"),"\u306b\u542b\u307e\u308c\u308b\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u307f\u3092\u524a\u9664\u3057\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ja/filtering"},"Read more about filtering.")))}d.isMDXComponent=!0}}]);
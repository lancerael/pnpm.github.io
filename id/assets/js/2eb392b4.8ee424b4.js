"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4594],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(n),m=r,k=s["".concat(o,".").concat(m)]||s[m]||u[m]||p;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,i=new Array(p);i[0]=s;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<p;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6081:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>o,metadata:()=>c,toc:()=>d,default:()=>s});var a=n(9518),r=n(7344),p=(n(9496),n(9613)),i=["components"],l={id:"dlx",title:"pnpm dlx"},o=void 0,c={unversionedId:"cli/dlx",id:"version-6.x/cli/dlx",title:"pnpm dlx",description:"Ditambahkan dalam: v6.13.0",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-6.x/cli/dlx.md",sourceDirName:"cli",slug:"/cli/dlx",permalink:"/id/cli/dlx",editUrl:"https://crowdin.com/project/pnpm/id",tags:[],version:"6.x",frontMatter:{id:"dlx",title:"pnpm dlx"},sidebar:"version-6.x/docs",previous:{title:"pnpm exec",permalink:"/id/cli/exec"},next:{title:"pnpm create",permalink:"/id/cli/create"}},d=[{value:"Options",id:"options",children:[{value:"--paket &lt;nama&gt;",id:"--paket-nama",children:[],level:3},{value:"--silent, -s",id:"--silent--s",children:[],level:3}],level:2}],u={toc:d};function s(e){var t=e.components,n=(0,r.Z)(e,i);return(0,p.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Ditambahkan dalam: v6.13.0"),(0,p.kt)("p",null,"Mengambil paket dari registri tanpa menginstalnya sebagai dependensi, meng-hotloadnya, dan menjalankan perintah biner apapun yang dieksposnya."),(0,p.kt)("p",null,"For example, to use ",(0,p.kt)("inlineCode",{parentName:"p"},"create-react-app")," anywhere to bootstrap a react app without needing to install it under another project, you can run:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm dlx create-react-app ./my-app\n")),(0,p.kt)("p",null,"Ini akan mengambil ",(0,p.kt)("inlineCode",{parentName:"p"},"create-react-app")," dari registri dan menjalankannya dengan argumen yang diberikan."),(0,p.kt)("p",null,"Since v6.23.1 you may also specify which exact version of the package you'd like to use:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm dlx create-react-app@next ./my-app\n")),(0,p.kt)("h2",{id:"options"},"Options"),(0,p.kt)("h3",{id:"--paket-nama"},"--paket ","<","nama",">"),(0,p.kt)("p",null,"Paket yang perlu diinstal sebelum menjalankan perintah."),(0,p.kt)("p",null,"Example:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm --package=@pnpm/meta-updater dlx meta-updater --help\npnpm --package=@pnpm/meta-updater@0 dlx meta-updater --help\n")),(0,p.kt)("p",null,"Pada v6.14.5, beberapa paket dapat disediakan untuk instalasi:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm --package=yo --package=generator-webapp dlx yo webapp --skip-install\n")),(0,p.kt)("h3",{id:"--silent--s"},"--silent, -s"),(0,p.kt)("p",null,"Ditambahkan di: v6.17.0"),(0,p.kt)("p",null,"Hanya output dari perintah yang dieksekusi yang dicetak."))}s.isMDXComponent=!0}}]);
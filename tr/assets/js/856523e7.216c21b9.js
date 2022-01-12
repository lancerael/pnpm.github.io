"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8255],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>s});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),s=a,f=m["".concat(o,".").concat(s)]||m[s]||d[s]||l;return n?r.createElement(f,p(p({ref:t},u),{},{components:n})):r.createElement(f,p({ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var c=2;c<l;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3342:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>o,metadata:()=>c,toc:()=>u,default:()=>m});var r=n(9518),a=n(7344),l=(n(9496),n(9613)),p=["components"],i={id:"dlx",title:"pnpm dlx"},o=void 0,c={unversionedId:"cli/dlx",id:"version-6.x/cli/dlx",title:"pnpm dlx",description:"Added in: v6.13.0",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-6.x/cli/dlx.md",sourceDirName:"cli",slug:"/cli/dlx",permalink:"/tr/cli/dlx",editUrl:"https://crowdin.com/project/pnpm/tr",tags:[],version:"6.x",frontMatter:{id:"dlx",title:"pnpm dlx"},sidebar:"version-6.x/docs",previous:{title:"pnpm exec",permalink:"/tr/cli/exec"},next:{title:"pnpm create",permalink:"/tr/cli/create"}},u=[{value:"Parametreler",id:"parametreler",children:[{value:"--package &lt;name&gt;",id:"--package-name",children:[],level:3},{value:"--silent, -s",id:"--silent--s",children:[],level:3}],level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,p);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Added in: v6.13.0"),(0,l.kt)("p",null,"Fetches a package from the registry without installing it as a dependency, hotloads it, and runs whatever default command binary it exposes."),(0,l.kt)("p",null,"\xd6rne\u011fin: ",(0,l.kt)("inlineCode",{parentName:"p"},"create-react-app")," paketini kullanarak her hangi bir dizinde h\u0131zl\u0131ca React projesi olu\u015fturmak i\xe7in \u015fu komutu kullanabilirsin:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm dlx create-react-app ./my-app\n")),(0,l.kt)("p",null,"This will fetch ",(0,l.kt)("inlineCode",{parentName:"p"},"create-react-app")," from the registry and run it with the given arguments."),(0,l.kt)("p",null,"Since v6.23.1 you may also specify which exact version of the package you'd like to use:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm dlx create-react-app@next ./my-app\n")),(0,l.kt)("h2",{id:"parametreler"},"Parametreler"),(0,l.kt)("h3",{id:"--package-name"},"--package ","<","name",">"),(0,l.kt)("p",null,"The package to install before running the command."),(0,l.kt)("p",null,"\xd6rnek kullan\u0131m:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm --package=@pnpm/meta-updater dlx meta-updater --help\npnpm --package=@pnpm/meta-updater@0 dlx meta-updater --help\n")),(0,l.kt)("p",null,"As of v6.14.5, multiple packages can be provided for installation:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm --package=yo --package=generator-webapp dlx yo webapp --skip-install\n")),(0,l.kt)("h3",{id:"--silent--s"},"--silent, -s"),(0,l.kt)("p",null,"Added in: v6.17.0"),(0,l.kt)("p",null,"Only the output of the executed command is printed."))}m.isMDXComponent=!0}}]);
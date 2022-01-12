"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4875],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=d(n),k=r,m=u["".concat(o,".").concat(k)]||u[k]||s[k]||l;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7697:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>o,metadata:()=>d,toc:()=>c,default:()=>u});var a=n(9518),r=n(7344),l=(n(9496),n(9613)),i=["components"],p={id:"update",title:"pnpm update"},o=void 0,d={unversionedId:"cli/update",id:"cli/update",title:"pnpm update",description:"Aliases: up",source:"@site/i18n/hu/docusaurus-plugin-content-docs/current/cli/update.md",sourceDirName:"cli",slug:"/cli/update",permalink:"/hu/next/cli/update",editUrl:"https://crowdin.com/project/pnpm/hu",tags:[],version:"current",frontMatter:{id:"update",title:"pnpm update"},sidebar:"docs",previous:{title:"pnpm install",permalink:"/hu/next/cli/install"},next:{title:"pnpm remove",permalink:"/hu/next/cli/remove"}},c=[{value:"TL;DR",id:"tldr",children:[],level:2},{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[],level:3},{value:"--latest, -L",id:"--latest--l",children:[],level:3},{value:"--global",id:"--global",children:[],level:3},{value:"--workspace",id:"--workspace",children:[],level:3},{value:"--prod, -P",id:"--prod--p",children:[],level:3},{value:"--dev, -D",id:"--dev--d",children:[],level:3},{value:"--no-optional",id:"--no-optional",children:[],level:3},{value:"--interactive, -i",id:"--interactive--i",children:[],level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[],level:3}],level:2}],s={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Aliases: ",(0,l.kt)("inlineCode",{parentName:"p"},"up")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pnpm update")," updates packages to their latest version based on the specified range."),(0,l.kt)("p",null,"When used without arguments, updates all dependencies. You can use patterns to update specific dependencies."),(0,l.kt)("h2",{id:"tldr"},"TL;DR"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm up")),(0,l.kt)("td",{parentName:"tr",align:null},"Updates all dependencies, adhering to ranges specified in ",(0,l.kt)("inlineCode",{parentName:"td"},"package.json"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm up --latest")),(0,l.kt)("td",{parentName:"tr",align:null},"Updates all dependencies, ignoring ranges specified in ",(0,l.kt)("inlineCode",{parentName:"td"},"package.json"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm up foo@2")),(0,l.kt)("td",{parentName:"tr",align:null},"Updates ",(0,l.kt)("inlineCode",{parentName:"td"},"foo")," to the latest version on v2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'pnpm up "@babel/*"')),(0,l.kt)("td",{parentName:"tr",align:null},"Updates all dependencies under the ",(0,l.kt)("inlineCode",{parentName:"td"},"@babel")," scope")))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,l.kt)("p",null,"Concurrently runs update in all subdirectories with a ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," (excluding node_modules)."),(0,l.kt)("p",null,"Usage examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --recursive update\n# updates all packages up to 100 subdirectories in depth\npnpm --recursive update --depth 100\n# update typescript to the latest version in every package\npnpm --recursive update typescript@latest\n")),(0,l.kt)("h3",{id:"--latest--l"},"--latest, -L"),(0,l.kt)("p",null,"Added in: v3.2.0"),(0,l.kt)("p",null,"Ignores the version range specified in ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),". Instead, the version specified by the ",(0,l.kt)("inlineCode",{parentName:"p"},"latest")," tag will be used (potentially upgrading the packages across major versions)."),(0,l.kt)("h3",{id:"--global"},"--global"),(0,l.kt)("p",null,"Update global packages."),(0,l.kt)("h3",{id:"--workspace"},"--workspace"),(0,l.kt)("p",null,"Added in: v4.4.0"),(0,l.kt)("p",null,"Tries to link all packages from the workspace. Versions are updated to match the versions of packages inside the workspace."),(0,l.kt)("p",null,"If specific packages are updated, the command will fail if any of the updated dependencies are not found inside the workspace. For instance, the following command fails if ",(0,l.kt)("inlineCode",{parentName:"p"},"express")," is not a workspace package:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pnpm up -r --workspace express"),"."),(0,l.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,l.kt)("p",null,"Only update packages in ",(0,l.kt)("inlineCode",{parentName:"p"},"dependencies")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,l.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,l.kt)("p",null,"Only update packages in ",(0,l.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,l.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,l.kt)("p",null,"Don't update packages in ",(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,l.kt)("h3",{id:"--interactive--i"},"--interactive, -i"),(0,l.kt)("p",null,"Added in: v4.8.0"),(0,l.kt)("p",null,"Show outdated dependencies and select which ones to update."),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/hu/next/filtering"},"Read more about filtering.")))}u.isMDXComponent=!0}}]);
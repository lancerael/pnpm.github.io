"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7489],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(9496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(r),d=i,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9780:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>p,contentTitle:()=>c,metadata:()=>l,toc:()=>s,default:()=>m});var n=r(9518),i=r(7344),a=(r(9496),r(9613)),o=["components"],p={id:"start",title:"pnpm start"},c=void 0,l={unversionedId:"cli/start",id:"version-6.x/cli/start",title:"pnpm start",description:"Aliases: run start",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-6.x/cli/start.md",sourceDirName:"cli",slug:"/cli/start",permalink:"/id/cli/start",editUrl:"https://crowdin.com/project/pnpm/id",tags:[],version:"6.x",frontMatter:{id:"start",title:"pnpm start"},sidebar:"version-6.x/docs",previous:{title:"pnpm create",permalink:"/id/cli/create"},next:{title:"pnpm env <cmd>",permalink:"/id/cli/env"}},s=[],u={toc:s};function m(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Aliases: ",(0,a.kt)("inlineCode",{parentName:"p"},"run start")),(0,a.kt)("p",null,"Runs an arbitrary command specified in the package's ",(0,a.kt)("inlineCode",{parentName:"p"},"start")," property of its ",(0,a.kt)("inlineCode",{parentName:"p"},"scripts")," object. If no ",(0,a.kt)("inlineCode",{parentName:"p"},"start")," property is specified on the ",(0,a.kt)("inlineCode",{parentName:"p"},"scripts")," object, it will attempt to run ",(0,a.kt)("inlineCode",{parentName:"p"},"node server.js")," as a default, failing if neither are present."),(0,a.kt)("p",null,"The intended usage of the property is to specify a command that starts your program."))}m.isMDXComponent=!0}}]);
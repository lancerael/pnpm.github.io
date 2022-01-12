"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6223],{9613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var i=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,f=u["".concat(p,".").concat(d)]||u[d]||c[d]||o;return n?i.createElement(f,a(a({ref:t},m),{},{components:n})):i.createElement(f,a({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5454:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>s,toc:()=>m,default:()=>u});var i=n(9518),r=n(7344),o=(n(9496),n(9613)),a=["components"],l={id:"limitations",title:"Limitazioni"},p=void 0,s={unversionedId:"limitations",id:"limitations",title:"Limitazioni",description:"1. npm-shrinkwrap.json e package-lock.json vengono ignorati. A differenza di pnpm, npm pu\xf2 installare lo stesso nome@versione pi\xf9 volte e con diversi set di dipendenze. il lockfile di npm \xe8 progettato per riflettere la struttura flat di node_modules, tuttavia, poich\xe9 pnpm crea un layout isolato per impostazione predefinita, non pu\xf2 rispettare il formato del lockfile di npm. Vedi pnpm import se desideri convertire un lockfile nel formato di pnpm.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/limitations.md",sourceDirName:".",slug:"/limitations",permalink:"/it/next/limitations",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"current",frontMatter:{id:"limitations",title:"Limitazioni"},sidebar:"docs",previous:{title:"Loghi",permalink:"/it/next/logos"},next:{title:"Struttura `node_modules` con collegamenti simbolici",permalink:"/it/next/symlinked-node-modules-structure"}},m=[],c={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"npm-shrinkwrap.json")," e ",(0,o.kt)("inlineCode",{parentName:"li"},"package-lock.json")," vengono ignorati. A differenza di pnpm, npm pu\xf2 installare lo stesso ",(0,o.kt)("inlineCode",{parentName:"li"},"nome@versione")," pi\xf9 volte e con diversi set di dipendenze. il lockfile di npm \xe8 progettato per riflettere la struttura flat di ",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules"),", tuttavia, poich\xe9 pnpm crea un layout isolato per impostazione predefinita, non pu\xf2 rispettare il formato del lockfile di npm. Vedi ",(0,o.kt)("a",{parentName:"li",href:"/it/next/cli/import"},"pnpm import")," se desideri convertire un lockfile nel formato di pnpm."),(0,o.kt)("li",{parentName:"ol"},"I file binari (file in ",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules/.bin"),") sono sempre file di shell, non collegamenti simbolici a file JS. I file shell sono creati per aiutare le app CLI collegabili a trovare i loro plug-in nell'insolita struttura di ",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules"),". Questo \xe8 molto raramente un problema e se prevedi che il file sia un file JS, fai invece riferimento direttamente al file originale, come spiegato in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/pnpm/pnpm/issues/736"},"#736"),".")),(0,o.kt)("p",null,"Hai un'idea per risolvere questi problemi? ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/new"},"Condividila.")))}u.isMDXComponent=!0}}]);
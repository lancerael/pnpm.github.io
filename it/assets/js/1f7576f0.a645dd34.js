"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9899],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var i=r(9496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=i.createContext({}),p=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return r?i.createElement(f,o(o({ref:t},s),{},{components:r})):i.createElement(f,o({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9097:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>p,toc:()=>s,default:()=>d});var i=r(9518),n=r(7344),a=(r(9496),r(9613)),o=["components"],l={id:"store",title:"pnpm store"},c=void 0,p={unversionedId:"cli/store",id:"version-5.x/cli/store",title:"pnpm store",description:"Gestione dell'archivio dei pacchetti.",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-5.x/cli/store.md",sourceDirName:"cli",slug:"/cli/store",permalink:"/it/5.x/cli/store",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"5.x",frontMatter:{id:"store",title:"pnpm store"},sidebar:"version-5.x/docs",previous:{title:"pnpm server",permalink:"/it/5.x/cli/server"},next:{title:"package.json",permalink:"/it/5.x/package_json"}},s=[{value:"Comandi",id:"comandi",children:[{value:"status",id:"status",children:[],level:3},{value:"add",id:"add",children:[],level:3},{value:"prune",id:"prune",children:[],level:3}],level:2}],u={toc:s};function d(e){var t=e.components,r=(0,n.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Gestione dell'archivio dei pacchetti."),(0,a.kt)("h2",{id:"comandi"},"Comandi"),(0,a.kt)("h3",{id:"status"},"status"),(0,a.kt)("p",null,"Verifica la presenza di pacchetti modificati nell'archivio."),(0,a.kt)("p",null,"Restituisce il codice di uscita 0 se il contenuto del pacchetto \xe8 lo stesso del momento dello scompattamento."),(0,a.kt)("h3",{id:"add"},"add"),(0,a.kt)("p",null,"Aggiunto nella versione: v2.12.0"),(0,a.kt)("p",null,"Funzionalmente equivalente a ",(0,a.kt)("a",{parentName:"p",href:"/it/5.x/cli/add"},(0,a.kt)("inlineCode",{parentName:"a"},"pnpm add")),", tranne per il fatto che aggiunge nuovi pacchetti all'archivio direttamente senza modificare alcun progetto o file al di fuori dell'archivio."),(0,a.kt)("h3",{id:"prune"},"prune"),(0,a.kt)("p",null,"Rimuove i pacchetti orfani dall'archivio."),(0,a.kt)("p",null,"L'eliminazione dell'archivio far\xe0 risparmiare spazio su disco, tuttavia potrebbe rallentare installazioni future che coinvolgono pacchetti eliminati. In definitiva, si tratta di un'operazione sicura, tuttavia non \xe8 consigliabile se si dispone di pacchetti orfani da un pacchetto che si intende reinstallare."),(0,a.kt)("p",null,"Si prega di leggere ",(0,a.kt)("a",{parentName:"p",href:"/it/5.x/faq#what-does-pnpm-store-prune-do-is-it-harmful"},"la FAQ")," per ulteriori informazioni sui pacchetti senza riferimenti e sulle migliori pratiche."),(0,a.kt)("p",null,"Si noti che questo \xe8 vietato quando \xe8 in esecuzione un ",(0,a.kt)("a",{parentName:"p",href:"/it/5.x/cli/server"},"server di archiviazione"),"."))}d.isMDXComponent=!0}}]);
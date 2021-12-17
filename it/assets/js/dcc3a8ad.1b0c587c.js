"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6300],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(t),u=i,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return t?a.createElement(f,r(r({ref:n},c),{},{components:t})):a.createElement(f,r({ref:n},c))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,r[1]=p;for(var s=2;s<o;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9079:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>p,contentTitle:()=>l,metadata:()=>s,toc:()=>c,default:()=>m});var a=t(5900),i=t(4750),o=(t(9496),t(9613)),r=["components"],p={id:"pnpm-vs-npm",title:"pnpm vs npm"},l=void 0,s={unversionedId:"pnpm-vs-npm",id:"pnpm-vs-npm",isDocsHomePage:!1,title:"pnpm vs npm",description:"Struttura flat di npm",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/pnpm-vs-npm.md",sourceDirName:".",slug:"/pnpm-vs-npm",permalink:"/it/next/pnpm-vs-npm",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"current",frontMatter:{id:"pnpm-vs-npm",title:"pnpm vs npm"},sidebar:"docs",previous:{title:"Disinstallazione di pnpm",permalink:"/it/next/uninstall"}},c=[{value:"Struttura flat di npm",id:"struttura-flat-di-npm",children:[],level:2},{value:"Installazione",id:"installazione",children:[],level:2},{value:"Dipendenze nella cartella",id:"dipendenze-nella-cartella",children:[],level:2}],d={toc:c};function m(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"struttura-flat-di-npm"},"Struttura flat di npm"),(0,o.kt)("p",null,"npm utilizza un ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/npm/npm/issues/6912"},"albero delle dipendenze flat")," partire dalla versione 3. Ci\xf2 porta a un aumento dello spazio su disco, con una ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," confusionaria come effetto collaterale."),(0,o.kt)("p",null,"D'altra parte, pnpm gestisce ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," utilizzando il collegamento fisico e il collegamento simbolico a un archivio globale indirizzabile al contenuto su disco. Questo porta i benefici di utilizzare molto meno spazio su disco, pur mantenendo ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," pulita. C'\xe8 la documentazione sul ",(0,o.kt)("a",{parentName:"p",href:"symlinked-node-modules-structure"},"layout dell'archivio")," se desideri saperne di pi\xf9."),(0,o.kt)("p",null,"La cosa buona della struttura corretta di ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules"),' di pnpm \xe8 che "',(0,o.kt)("a",{parentName:"p",href:"https://www.kochan.io/nodejs/pnpms-strictness-helps-to-avoid-silly-bugs.html"},"aiuta a evitare bug stupidi"),"\" rendendo impossibile l'uso di moduli che non sono specificati nel ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"del progetto."),(0,o.kt)("h2",{id:"installazione"},"Installazione"),(0,o.kt)("p",null,"pnpm non consente l'installazione di pacchetti senza salvarli in ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),". Se nessun parametro viene passato a ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm add"),", i pacchetti vengono salvati come dipendenze regolari. Come con npm, ",(0,o.kt)("inlineCode",{parentName:"p"},"--save-dev")," e ",(0,o.kt)("inlineCode",{parentName:"p"},"--save-optional")," possono essere usati per installare pacchetti come dipendenze di sviluppo o opzionali."),(0,o.kt)("p",null,"Come conseguenza di questa limitazione, i progetti non avranno alcun pacchetto estraneo quando usano pnpm a meno che non rimuovano una dipendenza e la lascino orfana. Ecco il motivo per cui l'implementazione di pnpm del ",(0,o.kt)("a",{parentName:"p",href:"cli/prune"},"comando prune")," non consente di specificare i pacchetti da eliminare - rimuove SEMPRE tutti i pacchetti estranei e orfani."),(0,o.kt)("h2",{id:"dipendenze-nella-cartella"},"Dipendenze nella cartella"),(0,o.kt)("p",null,"Le dipendenze nella cartella iniziano con il prefisso ",(0,o.kt)("inlineCode",{parentName:"p"},"file:")," e puntano a una cartella nel filesystem. Come npm, pnpm collega simbolicamente queste dipendenze. A differenza di npm, pnpm non esegue l'installazione per le dipendenze dei file."),(0,o.kt)("p",null,"Ci\xf2 significa che se hai un pacchetto chiamato ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," (",(0,o.kt)("inlineCode",{parentName:"p"},"<root>/foo"),") che ha ",(0,o.kt)("inlineCode",{parentName:"p"},"bar@file:../bar")," come dipendenza, pnpm non eseguir\xe0 l'installazione per ",(0,o.kt)("inlineCode",{parentName:"p"},"<root>/bar")," quando esegui ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install")," su ",(0,o.kt)("inlineCode",{parentName:"p"},"foo"),"."),(0,o.kt)("p",null,"Se hai bisogno di eseguire installazioni in pi\xf9 pacchetti contemporaneamente, ad nel caso di un monorepo, dovresti guardare la documentazione per ",(0,o.kt)("a",{parentName:"p",href:"cli/recursive"},(0,o.kt)("inlineCode",{parentName:"a"},"pnpm -r")),"."))}m.isMDXComponent=!0}}]);
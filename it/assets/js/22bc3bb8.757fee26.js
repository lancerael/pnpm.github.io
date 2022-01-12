"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6045],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(t),m=i,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return t?a.createElement(g,r(r({ref:n},c),{},{components:t})):a.createElement(g,r({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=u;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,r[1]=p;for(var s=2;s<o;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5625:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>p,contentTitle:()=>l,metadata:()=>s,toc:()=>c,default:()=>u});var a=t(9518),i=t(7344),o=(t(9496),t(9613)),r=["components"],p={id:"package_json",title:"package.json"},l=void 0,s={unversionedId:"package_json",id:"version-5.x/package_json",title:"package.json",description:"Il file manifesto di un pacchetto. Contiene tutti i metadati del pacchetto, comprese le dipendenze, il titolo, l'autore, eccetera. Questo \xe8 uno standard mantenuto in tutti i principali gestori di pacchetti Node.JS, incluso pnpm.",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-5.x/package_json.md",sourceDirName:".",slug:"/package_json",permalink:"/it/5.x/package_json",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"5.x",frontMatter:{id:"package_json",title:"package.json"},sidebar:"version-5.x/docs",previous:{title:"pnpm store",permalink:"/it/5.x/cli/store"},next:{title:".npmrc",permalink:"/it/5.x/npmrc"}},c=[{value:"Campi",id:"campi",children:[{value:"engines",id:"engines",children:[],level:3},{value:"peerDependenciesMeta",id:"peerdependenciesmeta",children:[{value:"peerDependenciesMeta.*.optional",id:"peerdependenciesmetaoptional",children:[],level:4}],level:3},{value:"publishConfig",id:"publishconfig",children:[],level:3},{value:"pnpm.overrides",id:"pnpmoverrides",children:[],level:3},{value:"pnpm.neverBuiltDependencies",id:"pnpmneverbuiltdependencies",children:[],level:3}],level:2}],d={toc:c};function u(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Il file manifesto di un pacchetto. Contiene tutti i metadati del pacchetto, comprese le dipendenze, il titolo, l'autore, eccetera. Questo \xe8 uno standard mantenuto in tutti i principali gestori di pacchetti Node.JS, incluso pnpm."),(0,o.kt)("h2",{id:"campi"},"Campi"),(0,o.kt)("h3",{id:"engines"},"engines"),(0,o.kt)("p",null,"Puoi specificare la versione di Node e pnpm su cui funziona il tuo software:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "engines": {\n        "node": ">=10",\n        "pnpm": ">=3"\n    }\n}\n')),(0,o.kt)("p",null,"Durante lo sviluppo locale, pnpm fallir\xe0 sempre con un messaggio di errore se la sua versione non corrisponde a quella specificata nel campo ",(0,o.kt)("inlineCode",{parentName:"p"},"engine"),"."),(0,o.kt)("p",null,"A meno che l'utente non abbia impostato il flag di configurazione ",(0,o.kt)("inlineCode",{parentName:"p"},"engine-strict")," (vedi ",(0,o.kt)("a",{parentName:"p",href:"/it/5.x/npmrc#engine-strict"},".npmrc"),"), questo campo \xe8 solo consultivo e produrr\xe0 avvisi solo quando il tuo pacchetto \xe8 installato come dipendenza."),(0,o.kt)("h3",{id:"peerdependenciesmeta"},"peerDependenciesMeta"),(0,o.kt)("p",null,"Questo campo elenca alcune informazioni aggiuntive relative alle dipendenze elencate nel campo ",(0,o.kt)("inlineCode",{parentName:"p"},"peerDependencies"),"."),(0,o.kt)("h4",{id:"peerdependenciesmetaoptional"},"peerDependenciesMeta.*.optional"),(0,o.kt)("p",null,"Se questo \xe8 impostato su true, la dipendenza peer selezionata verr\xe0 contrassegnata come opzionale dal gestore pacchetti. Pertanto, il consumatore che lo omette non sar\xe0 pi\xf9 segnalato come errore."),(0,o.kt)("p",null,"Ad esempio:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "peerDependencies": {\n        "foo": "1"\n    },\n    "peerDependenciesMeta": {\n        "foo": {\n            "optional": true\n        },\n        "bar": {\n            "optional": true\n        }\n    }\n}\n')),(0,o.kt)("p",null,"Si noti che anche se ",(0,o.kt)("inlineCode",{parentName:"p"},"bar")," non \xe8 stato specificato in ",(0,o.kt)("inlineCode",{parentName:"p"},"peerDependencies"),", \xe8 contrassegnato come facoltativo. pnpm quindi presumer\xe0 che qualsiasi versione di bar vada bene. Tuttavia, ",(0,o.kt)("inlineCode",{parentName:"p"},"pippo")," \xe8 facoltativo, ma solo per la specifica della versione richiesta."),(0,o.kt)("h3",{id:"publishconfig"},"publishConfig"),(0,o.kt)("p",null,"Aggiunto nella versione: v3.4.0"),(0,o.kt)("p",null,"\xc8 possibile sovrascrivere alcuni campi nel manifesto prima che il pacchetto sia impacchettato. I seguenti campi possono essere sovrascritti: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#bin"},(0,o.kt)("inlineCode",{parentName:"a"},"bin")),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#main"},(0,o.kt)("inlineCode",{parentName:"a"},"main")),", ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/api/esm.html#esm_package_exports"},(0,o.kt)("inlineCode",{parentName:"a"},"exports")),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#types"},(0,o.kt)("inlineCode",{parentName:"a"},"types")," o ",(0,o.kt)("inlineCode",{parentName:"a"},"typingx")),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#module"},(0,o.kt)("inlineCode",{parentName:"a"},"module")),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#browser"},(0,o.kt)("inlineCode",{parentName:"a"},"browser")),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#esnext"},(0,o.kt)("inlineCode",{parentName:"a"},"esnext")),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#es2015"},(0,o.kt)("inlineCode",{parentName:"a"},"es2015")),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#unpkg-1"},(0,o.kt)("inlineCode",{parentName:"a"},"unpkg"))," e ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#microbundle"},(0,o.kt)("inlineCode",{parentName:"a"},"umd:main")),"."),(0,o.kt)("p",null,"Per sovrascrivere un campo, aggiungi la versione pubblica del campo in ",(0,o.kt)("inlineCode",{parentName:"p"},"publishConfig"),"."),(0,o.kt)("p",null,"Ad esempio, il seguente ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "foo",\n    "version": "1.0.0",\n    "main": "src/index.ts",\n    "publishConfig": {\n        "main": "lib/index.js",\n        "typings": "lib/index.d.ts"\n    }\n}\n')),(0,o.kt)("p",null,"Verr\xe0 pubblicato come:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "foo",\n    "version": "1.0.0",\n    "main": "lib/index.js",\n    "typings": "lib/index.d.ts"\n}\n')),(0,o.kt)("h3",{id:"pnpmoverrides"},"pnpm.overrides"),(0,o.kt)("p",null,"Aggiunto nella versione: v5.10.1"),(0,o.kt)("p",null,"Questo campo consente di indicare a pnpm di sovrascrivere qualsiasi dipendenza nel grafico delle dipendenze. Questo \xe8 utile per imporre a tutti i tuoi pacchetti di utilizzare una singola versione di una dipendenza, eseguire il backport di una correzione o sostituire una dipendenza con un fork."),(0,o.kt)("p",null,"Nota che il campo delle sostituzioni pu\xf2 essere impostato solo alla radice del progetto."),(0,o.kt)("p",null,"Un esempio del campo ",(0,o.kt)("inlineCode",{parentName:"p"},'"pnpm"."overrides"'),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "overrides": {\n      "foo": "^1.0.0",\n      "bar@^2.1.0": "3.0.0",\n      "qar@1>zoo": "2"\n    }\n  }\n}\n')),(0,o.kt)("p",null,'Puoi specificare il pacchetto a cui appartiene la dipendenza sovrascritta separando il selettore del pacchetto dal selettore delle dipendenze con un ">", per esempio ',(0,o.kt)("inlineCode",{parentName:"p"},"qar@1>zoo")," sovrascriver\xe0 solo la dipendenza ",(0,o.kt)("inlineCode",{parentName:"p"},"zoo")," di ",(0,o.kt)("inlineCode",{parentName:"p"},"qar@1"),", non per altre dipendenze."),(0,o.kt)("h3",{id:"pnpmneverbuiltdependencies"},"pnpm.neverBuiltDependencies"),(0,o.kt)("p",null,"Aggiunto nella versione: v5.16.0"),(0,o.kt)("p",null,"Questo campo consente di ignorare le build di dipendenze specifiche."),(0,o.kt)("p",null,"Un esempio del campo ",(0,o.kt)("inlineCode",{parentName:"p"},'"pnpm"."neverBuiltDependencies"'),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "neverBuiltDependencies": ["fsevents", "level"]\n  }\n}\n')))}u.isMDXComponent=!0}}]);
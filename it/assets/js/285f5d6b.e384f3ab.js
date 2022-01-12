"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7268],{9613:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>s});var i=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=i.createContext({}),c=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=c(e.components);return i.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=c(t),s=a,f=u["".concat(o,".").concat(s)]||u[s]||d[s]||r;return t?i.createElement(f,l(l({ref:n},m),{},{components:t})):i.createElement(f,l({ref:n},m))}));function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=u;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var c=2;c<r;c++)l[c]=t[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6259:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>p,contentTitle:()=>o,metadata:()=>c,toc:()=>m,default:()=>u});var i=t(9518),a=t(7344),r=(t(9496),t(9613)),l=["components"],p={id:"pnpm-cli",title:"CLI di pnpm"},o=void 0,c={unversionedId:"pnpm-cli",id:"pnpm-cli",title:"CLI di pnpm",description:"Differenze vs npm",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/pnpm-cli.md",sourceDirName:".",slug:"/pnpm-cli",permalink:"/it/next/pnpm-cli",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"current",frontMatter:{id:"pnpm-cli",title:"CLI di pnpm"},sidebar:"docs",previous:{title:"Installazione",permalink:"/it/next/installation"},next:{title:"pnpx CLI",permalink:"/it/next/pnpx-cli"}},m=[{value:"Differenze vs npm",id:"differenze-vs-npm",children:[],level:2},{value:"Opzioni",id:"opzioni",children:[{value:"-C &lt;path&gt;, --dir &lt;path&gt;",id:"-c-path---dir-path",children:[],level:3},{value:"-w, --workspace-root",id:"-w---workspace-root",children:[],level:3}],level:2},{value:"Comandi",id:"comandi",children:[],level:2}],d={toc:m};function u(e){var n=e.components,t=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"differenze-vs-npm"},"Differenze vs npm"),(0,r.kt)("p",null,"A differenza di npm, pnpm convalida tutte le opzioni. Ad esempio, ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm install --target_arch x64")," fallir\xe0 poich\xe9 ",(0,r.kt)("inlineCode",{parentName:"p"},"--target_arch")," non \xe8 un'opzione valida per ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm install"),"."),(0,r.kt)("p",null,"Tuttavia, alcune dipendenze possono utilizzare la variabile d'ambiente ",(0,r.kt)("inlineCode",{parentName:"p"},"npm_config_"),", che \xe8 popolata dalle opzioni CLI. In questo caso, hai le seguenti opzioni:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"imposta esplicitamente la variabile env: ",(0,r.kt)("inlineCode",{parentName:"li"},"npm_config_target_arch=x64 pnpm install")),(0,r.kt)("li",{parentName:"ol"},"forzare l'opzione sconosciuta con ",(0,r.kt)("inlineCode",{parentName:"li"},"--config."),": ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm install --config.target_arch=x64"))),(0,r.kt)("h2",{id:"opzioni"},"Opzioni"),(0,r.kt)("h3",{id:"-c-path---dir-path"},"-C ","<","path",">",", --dir ","<","path",">"),(0,r.kt)("p",null,"Esegui come se pnpm fosse stato avviato in ",(0,r.kt)("inlineCode",{parentName:"p"},"<path>")," invece che nella cartella di lavoro corrente."),(0,r.kt)("h3",{id:"-w---workspace-root"},"-w, --workspace-root"),(0,r.kt)("p",null,"Aggiunto nella versione: v5.6.0"),(0,r.kt)("p",null,"Esegui come se pnpm fosse stato avviato nella radice dello ",(0,r.kt)("a",{parentName:"p",href:"https://pnpm.io/workspaces"},"spazio di lavoro")," invece che nella cartella di lavoro corrente."),(0,r.kt)("h2",{id:"comandi"},"Comandi"),(0,r.kt)("p",null,"Per ulteriori informazioni, vedere la documentazione per i singoli comandi CLI. Ecco un elenco di utili comandi equivalenti di npm per iniziare:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"comando npm"),(0,r.kt)("th",{parentName:"tr",align:null},"equivalente di pnpm"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"npm install")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/it/next/cli/install"},(0,r.kt)("inlineCode",{parentName:"a"},"pnpm install")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"npm i <pkg>")),(0,r.kt)("td",{parentName:"tr",align:null},"[",(0,r.kt)("inlineCode",{parentName:"td"},"pnpm add <pkg>"),"]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"npm run <cmd>")),(0,r.kt)("td",{parentName:"tr",align:null},"[",(0,r.kt)("inlineCode",{parentName:"td"},"pnpm <cmd>"),"]")))),(0,r.kt)("p",null,"Quando viene utilizzato un comando sconosciuto, pnpm cercher\xe0 uno script con il nome dato, quindi ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run lint")," \xe8 uguale a ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm lint"),". Se non c'\xe8 uno script con il nome specificato, allora pnpm eseguir\xe0 il comando come uno script di shell, quindi puoi fare cose come ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm eslint")," (vedi ",(0,r.kt)("a",{parentName:"p",href:"/it/next/cli/exec"},"pnpm exec"),")."))}u.isMDXComponent=!0}}]);
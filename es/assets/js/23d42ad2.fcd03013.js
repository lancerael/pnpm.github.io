"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8597],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),k=a,m=d["".concat(p,".").concat(k)]||d[k]||u[k]||l;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8001:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>p,metadata:()=>s,toc:()=>c,default:()=>d});var r=n(9518),a=n(7344),l=(n(9496),n(9613)),i=["components"],o={id:"recursive",title:"pnpm recursive"},p=void 0,s={unversionedId:"cli/recursive",id:"cli/recursive",title:"pnpm recursive",description:"Runs a pnpm command recursively on all subdirectories in the package or every available workspace. Currently, only the following commands can be used recursively: add, exec, install, list, outdated, publish, rebuild, remove, run, test, unlink, update, why",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/cli/recursive.md",sourceDirName:"cli",slug:"/cli/recursive",permalink:"/es/next/cli/recursive",editUrl:"https://crowdin.com/project/pnpm/es",tags:[],version:"current",frontMatter:{id:"recursive",title:"pnpm recursive"},sidebar:"docs",previous:{title:"pnpm pack",permalink:"/es/next/cli/pack"},next:{title:"pnpm server",permalink:"/es/next/cli/server"}},c=[{value:"Options",id:"options",children:[{value:"--link-workspace-packages",id:"--link-workspace-packages",children:[],level:3},{value:"--workspace-concurrency",id:"--workspace-concurrency",children:[],level:3},{value:"--no-bail",id:"--no-bail",children:[],level:3},{value:"--no-sort",id:"--no-sort",children:[],level:3},{value:"--reverse",id:"--reverse",children:[],level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[],level:3}],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Runs a pnpm command recursively on all subdirectories in the package or every available workspace. Currently, only the following commands can be used recursively: ",(0,l.kt)("inlineCode",{parentName:"p"},"add"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"exec"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"install"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"list"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"outdated"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"publish"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"rebuild"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"remove"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"run"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"test"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"unlink"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"update"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"why")),(0,l.kt)("p",null,"Aliases: ",(0,l.kt)("inlineCode",{parentName:"p"},"m"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"multi"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"<command> -r")),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"--link-workspace-packages"},"--link-workspace-packages"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("strong",{parentName:"li"},"true")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"true, false, deep"))),(0,l.kt)("p",null,"Link locally available packages in workspaces of a monorepo into ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules")," instead of re-downloading them from the registry. This emulates functionality similar to ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn workspaces"),"."),(0,l.kt)("p",null,"When this is set to deep, local packages can also be linked to subdependencies."),(0,l.kt)("p",null,"Be advised that it is encouraged instead to use ",(0,l.kt)("a",{parentName:"p",href:"/es/next/workspaces#link-workspace-packages"},"npmrc")," for this setting, to enforce the same behaviour in all environments. This option exists solely so you may override that if necessary."),(0,l.kt)("h3",{id:"--workspace-concurrency"},"--workspace-concurrency"),(0,l.kt)("p",null,"Added in: v2.13.0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("strong",{parentName:"li"},"4")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"Number"))),(0,l.kt)("p",null,"Set the maximum number of tasks to run simultaneously. For unlimited concurrency use ",(0,l.kt)("inlineCode",{parentName:"p"},"Infinity"),"."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Since v6.10.0 you can set the ",(0,l.kt)("inlineCode",{parentName:"p"},"workpace-concurrency")," as ",(0,l.kt)("inlineCode",{parentName:"p"},"<= 0")," and it will use amount of cores of the host as: ",(0,l.kt)("inlineCode",{parentName:"p"},"max(1, (number of cores) - abs(workspace-concurrency))"))),(0,l.kt)("h3",{id:"--no-bail"},"--","[no-]","bail"),(0,l.kt)("p",null,"Added in: v2.13.0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("strong",{parentName:"li"},"true")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"Boolean"))),(0,l.kt)("p",null,"If true, stops when a task throws an error."),(0,l.kt)("p",null,"This config does not affect the exit code. Even if ",(0,l.kt)("inlineCode",{parentName:"p"},"--no-bail")," is used, all tasks will finish but if any of the tasks fail, the command will exit with a non-zero code."),(0,l.kt)("p",null,"Example (run tests in every package, continue if tests fail in one of them):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm -r --no-bail test\n")),(0,l.kt)("h3",{id:"--no-sort"},"--","[no-]","sort"),(0,l.kt)("p",null,"Added in: v2.14.0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("strong",{parentName:"li"},"true")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"Boolean"))),(0,l.kt)("p",null,"When ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", packages are sorted topologically (dependencies before dependents). Pass ",(0,l.kt)("inlineCode",{parentName:"p"},"--no-sort")," to disable."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm -r --no-sort test\n")),(0,l.kt)("h3",{id:"--reverse"},"--reverse"),(0,l.kt)("p",null,"Added in: v5.17.1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("strong",{parentName:"li"},"false")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"boolean"))),(0,l.kt)("p",null,"When ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", the order of packages is reversed."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm -r --reverse run clean\n")),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/es/next/filtering"},"Read more about filtering.")))}d.isMDXComponent=!0}}]);
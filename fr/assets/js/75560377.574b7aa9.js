"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3731],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=l,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2349:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>p,metadata:()=>s,toc:()=>c,default:()=>d});var r=n(9518),l=n(7344),i=(n(9496),n(9613)),a=["components"],o={id:"run",title:"pnpm run"},p=void 0,s={unversionedId:"cli/run",id:"version-5.x/cli/run",title:"pnpm run",description:"Aliases: run-script",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-5.x/cli/run.md",sourceDirName:"cli",slug:"/cli/run",permalink:"/fr/5.x/cli/run",editUrl:"https://crowdin.com/project/pnpm/fr",tags:[],version:"5.x",frontMatter:{id:"run",title:"pnpm run"},sidebar:"version-5.x/docs",previous:{title:"pnpm why",permalink:"/fr/5.x/cli/why"},next:{title:"pnpm test",permalink:"/fr/5.x/cli/test"}},c=[{value:"Examples",id:"examples",children:[],level:2},{value:"Details",id:"details",children:[],level:2},{value:"Options",id:"options",children:[{value:"script-shell",id:"script-shell",children:[],level:3},{value:"shell-emulator",id:"shell-emulator",children:[],level:3},{value:"--recursive, -r",id:"--recursive--r",children:[],level:3},{value:"--if-present",id:"--if-present",children:[],level:3},{value:"--parallel",id:"--parallel",children:[],level:3},{value:"--stream",id:"--stream",children:[],level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[],level:3}],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,l.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Aliases: ",(0,i.kt)("inlineCode",{parentName:"p"},"run-script")),(0,i.kt)("p",null,"Runs a script defined in the package's manifest file."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Let's say you have a ",(0,i.kt)("inlineCode",{parentName:"p"},"watch")," script configured in your ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),", like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n    "watch": "build-command --watch"\n}\n')),(0,i.kt)("p",null,"You can now run that script by using ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm run watch"),"! Simple, right? Another thing to note for those that like to save keystrokes and time is that all scripts get aliased in as pnpm commands, so ultimately ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm watch")," is just shorthand for ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm run watch")," (ONLY for scripts that do not share the same name as already existing pnpm commands)."),(0,i.kt)("h2",{id:"details"},"Details"),(0,i.kt)("p",null,"In addition to the shell\u2019s pre-existing ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm run")," includes ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH")," provided to ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts"),". This means that so long as you have a package installed, you can use it in a script like a regular command. For example, if you have ",(0,i.kt)("inlineCode",{parentName:"p"},"eslint")," installed, you can write up a script like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"lint": "eslint src --fix"\n')),(0,i.kt)("p",null,"And even though ",(0,i.kt)("inlineCode",{parentName:"p"},"eslint")," is not installed globally in your shell, it will run."),(0,i.kt)("p",null,"For workspaces, as of v3.5, ",(0,i.kt)("inlineCode",{parentName:"p"},"<workspace root>/node_modules/.bin")," is also added to the ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH"),", so if a tool is installed in the workspace root, it may be called in any workspace package's ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts"),"."),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"script-shell"},"script-shell"),(0,i.kt)("p",null,"Added in: v5.10.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"null")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"path"))),(0,i.kt)("p",null,"The shell to use for scripts run with the ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm run")," command."),(0,i.kt)("p",null,"For instance, to force usage of Git Bash on Windows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'pnpm config set script-shell "C:\\\\Program Files\\\\git\\\\bin\\\\bash.exe"\n')),(0,i.kt)("h3",{id:"shell-emulator"},"shell-emulator"),(0,i.kt)("p",null,"Added in: v5.8.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", pnpm will use a JavaScript implementation of a ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@yarnpkg/shell"},"bash-like shell")," to execute scripts."),(0,i.kt)("p",null,"This option simplifies cross-platform scripting. For instance, by default, the next script will fail on non-POSIX-compliant systems:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n  "test": "NODE_ENV=test node test.js"\n}\n')),(0,i.kt)("p",null,"But if the ",(0,i.kt)("inlineCode",{parentName:"p"},"shell-emulator")," setting is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", it will work on all platforms."),(0,i.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,i.kt)("p",null,"This runs an arbitrary command from each package's \"scripts\" object. If a package doesn't have the command, it is skipped. If none of the packages have the command, the command fails."),(0,i.kt)("h3",{id:"--if-present"},"--if-present"),(0,i.kt)("p",null,"Added in: v4.5.0"),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--if-present")," flag to avoid exiting with a non-zero exit code when the script is undefined. This lets you run potentially undefined scripts without breaking the execution chain."),(0,i.kt)("h3",{id:"--parallel"},"--parallel"),(0,i.kt)("p",null,"Added in: v5.1.0"),(0,i.kt)("p",null,"Completely disregard concurrency and topological sorting, running a given script immediately in all matching packages with prefixed streaming output. This is the preferred flag for long-running processes over many packages, for instance, a lengthy build process."),(0,i.kt)("h3",{id:"--stream"},"--stream"),(0,i.kt)("p",null,"Added in: v5.1.0"),(0,i.kt)("p",null,"Stream output from child processes immediately, prefixed with the originating package directory. This allows output from different packages to be interleaved."),(0,i.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/fr/5.x/filtering"},"Read more about filtering.")))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[259],{9613:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var a=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=i,g=u["".concat(o,".").concat(d)]||u[d]||c[d]||r;return t?a.createElement(g,p(p({ref:n},m),{},{components:t})):a.createElement(g,p({ref:n},m))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,p=new Array(r);p[0]=u;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,p[1]=l;for(var s=2;s<r;s++)p[s]=t[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3867:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>o,metadata:()=>s,toc:()=>m,default:()=>u});var a=t(9518),i=t(7344),r=(t(9496),t(9613)),p=["components"],l={id:"continuous-integration",title:"\u7d99\u7d9a\u7684\u30a4\u30f3\u30c6\u30b0\u30ec\u30fc\u30b7\u30e7\u30f3"},o=void 0,s={unversionedId:"continuous-integration",id:"version-6.x/continuous-integration",title:"\u7d99\u7d9a\u7684\u30a4\u30f3\u30c6\u30b0\u30ec\u30fc\u30b7\u30e7\u30f3",description:"pnpm\u306f\u3001\u3055\u307e\u3056\u307e\u306a\u7d99\u7d9a\u7684\u30a4\u30f3\u30c6\u30b0\u30ec\u30fc\u30b7\u30e7\u30f3\u30b7\u30b9\u30c6\u30e0\u3067\u7c21\u5358\u306b\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-6.x/continuous-integration.md",sourceDirName:".",slug:"/continuous-integration",permalink:"/ja/continuous-integration",editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"6.x",frontMatter:{id:"continuous-integration",title:"\u7d99\u7d9a\u7684\u30a4\u30f3\u30c6\u30b0\u30ec\u30fc\u30b7\u30e7\u30f3"},sidebar:"version-6.x/docs",previous:{title:"pnpm \u3068 Changesets \u3092\u7d44\u307f\u5408\u308f\u305b\u3066\u4f7f\u7528\u3059\u308b",permalink:"/ja/using-changesets"},next:{title:"pnpm\u3060\u3051\u3092\u4f7f\u3046\u3088\u3046\u306b\u3059\u308b",permalink:"/ja/only-allow-pnpm"}},m=[{value:"Travis",id:"travis",children:[],level:2},{value:"Semaphore",id:"semaphore",children:[],level:2},{value:"AppVeyor",id:"appveyor",children:[],level:2},{value:"Sail CI",id:"sail-ci",children:[],level:2},{value:"GitHub Actions",id:"github-actions",children:[],level:2},{value:"Gitlab CI",id:"gitlab-ci",children:[],level:2},{value:"Bitbucket Pipelines",id:"bitbucket-pipelines",children:[],level:2}],c={toc:m};function u(e){var n=e.components,t=(0,i.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"pnpm\u306f\u3001\u3055\u307e\u3056\u307e\u306a\u7d99\u7d9a\u7684\u30a4\u30f3\u30c6\u30b0\u30ec\u30fc\u30b7\u30e7\u30f3\u30b7\u30b9\u30c6\u30e0\u3067\u7c21\u5358\u306b\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"travis"},"Travis"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://travis-ci.org"},"Travelis CI"),"\u3067\u306f\u3001 \u3092 ",(0,r.kt)("inlineCode",{parentName:"p"},".travis.yml")," \u30d5\u30a1\u30a4\u30eb\u306b\u8ffd\u52a0\u3059\u308b\u3053\u3068\u3067\u3001pnpm \u3092\u4f7f\u7528\u3057\u3066\u4f9d\u5b58\u95a2\u4fc2\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".travis.yml"',title:'".travis.yml"'},'cache:\n  npm: false\n  directories:\n    - "~/.pnpm-store"\nbefore_install:\n  - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@6\n  - pnpm config set store-dir ~/.pnpm-store\ninstall:\n  - pnpm install\n')),(0,r.kt)("h2",{id:"semaphore"},"Semaphore"),(0,r.kt)("p",null,"On ",(0,r.kt)("a",{parentName:"p",href:"https://semaphoreci.com"},"Semaphore"),", you can use pnpm for installing and caching your dependencies by adding this to your ",(0,r.kt)("inlineCode",{parentName:"p"},".semaphore/semaphore.yml")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".semaphore/semaphore.yml"',title:'".semaphore/semaphore.yml"'},"version: v1.0\nname: Semaphore CI pnpm example\nagent:\n  machine:\n    type: e1-standard-2\n    os_image: ubuntu1804\nblocks:\n  - name: Install dependencies\n    task:\n      jobs:\n        - name: pnpm install\n          commands:\n            - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@6\n            - checkout\n            - cache restore node-$(checksum pnpm-lock.yaml)\n            - pnpm install\n            - cache store node-$(checksum pnpm-lock.yaml) ~/.pnpm-store\n")),(0,r.kt)("h2",{id:"appveyor"},"AppVeyor"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.appveyor.com"},"AppVeyor"),"\u3067\u306f\u3001 \u3092 ",(0,r.kt)("inlineCode",{parentName:"p"},"appveyor.yml")," \u30d5\u30a1\u30a4\u30eb\u306b\u8ffd\u52a0\u3059\u308b\u3053\u3068\u3067\u3001pnpm \u3092\u4f7f\u7528\u3057\u3066\u4f9d\u5b58\u95a2\u4fc2\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="appveyor.yml"',title:'"appveyor.yml"'},"install:\n  - ps: Install-Product node $env:nodejs_version\n  - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@6\n  - pnpm install\n")),(0,r.kt)("h2",{id:"sail-ci"},"Sail CI"),(0,r.kt)("p",null,"[Sail CI]","\u3067\u306f\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},".sail.yml")," \u30d5\u30a1\u30a4\u30eb\u306b\u8ffd\u52a0\u3059\u308b\u3053\u3068\u3067\u3001pnpm \u3092\u4f7f\u7528\u3057\u3066\u4f9d\u5b58\u95a2\u4fc2\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".sail.yml"',title:'".sail.yml"'},"install:\n  image: znck/pnpm:latest\n  command:\n    - pnpm\n  args:\n    - install\n")),(0,r.kt)("p",null,"To get the exact Node version and pnpm version you require you can always make your own Docker image and push to ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/"},"Docker Hub"),"."),(0,r.kt)("h2",{id:"github-actions"},"GitHub Actions"),(0,r.kt)("p",null,"GitHub Actions\u3067\u306f\u3001( ",(0,r.kt)("inlineCode",{parentName:"p"},".github/workflows/NAME.yml")," \u306e\u3088\u3046\u306a\u30d5\u30a1\u30a4\u30eb\u3092\u7f6e\u304f\u3053\u3068\u306b\u3088\u3063\u3066) pnpm \u3092\u4f7f\u7528\u3057\u3066\u4f9d\u5b58\u95a2\u4fc2\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3068\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".github/workflows/NAME.yml"',title:'".github/workflows/NAME.yml"'},"name: pnpm Example Workflow\non:\n  push:\njobs:\n  build:\n    runs-on: ubuntu-20.04\n    strategy:\n      matrix:\n        node-version: [15]\n    steps:\n    - uses: actions/checkout@v2\n    - uses: pnpm/action-setup@v2.0.1\n      with:\n        version: 6.20.3\n    - name: Use Node.js ${{ matrix.node-version }}\n      uses: actions/setup-node@v2\n      with:\n        node-version: ${{ matrix.node-version }}\n        cache: 'pnpm'\n    - name: Install dependencies\n      run: pnpm install\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u30d1\u30c3\u30b1\u30fc\u30b8\u4f9d\u5b58\u95a2\u4fc2\u3092 ",(0,r.kt)("inlineCode",{parentName:"p"},"actions/setup-node@v2")," \u3067\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u306b\u306f\u3001 pnpm \u306e\u30d0\u30fc\u30b8\u30e7\u30f3 ",(0,r.kt)("strong",{parentName:"p"},"6.10+")," \u304c\u5fc5\u8981\u3067\u3059\u3002"))),(0,r.kt)("h2",{id:"gitlab-ci"},"Gitlab CI"),(0,r.kt)("p",null,"Gitlab\u3067\u306f\u3001 pnpm \u3092\u4f7f\u7528\u3057\u3066\u4f9d\u5b58\u95a2\u4fc2 \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u304a\u3088\u3073\u30ad\u30e3\u30c3\u30b7\u30f3\u30b0\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059 ( ",(0,r.kt)("inlineCode",{parentName:"p"},".gitlab-ci.yml"),") \u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".gitlab-ci.yml"',title:'".gitlab-ci.yml"'},'stages:\n  - build\n\nbuild:\n  stage: build\n  image: node:14.16.0-buster\n  before_script:\n    - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@6\n    - pnpm config set store-dir .pnpm-store\n  script:\n    - pnpm install # install dependencies\n  cache:\n    key: "$CI_COMMIT_REF_SLUG"\n    paths:\n      - .pnpm-store\n')),(0,r.kt)("h2",{id:"bitbucket-pipelines"},"Bitbucket Pipelines"),(0,r.kt)("p",null,"You can use pnpm for installing and caching your dependencies:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".bitbucket-pipelines.yml"',title:'".bitbucket-pipelines.yml"'},'definitions:\n  caches:\n    pnpm: $BITBUCKET_CLONE_DIR/.pnpm-store\n\npipelines:\n  pull-requests:\n    "**":\n      - step:\n          name: Build and test\n          image: node:14.16.0\n          script:\n            - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@6\n            - pnpm install\n            - pnpm run build # Replace with your build/test\u2026etc. commands\n          caches:\n            - pnpm\n')))}u.isMDXComponent=!0}}]);
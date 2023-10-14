"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[2789],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),i=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=i(a),m=r,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return a?n.createElement(g,s(s({ref:t},p),{},{components:a})):n.createElement(g,s({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[d]="string"==typeof e?e:r,s[1]=u;for(var i=2;i<o;i++)s[i]=a[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6183:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>u,toc:()=>i});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:10},s="Update packages by Renovate",u={unversionedId:"guides/renovate",id:"guides/renovate",title:"Update packages by Renovate",description:"image",source:"@site/docs/guides/renovate.md",sourceDirName:"guides",slug:"/guides/renovate",permalink:"/docs/guides/renovate",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/guides/renovate.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Guides",permalink:"/docs/guides/"},next:{title:"Enable Checksum Verification",permalink:"/docs/guides/checksum"}},l={},i=[{value:"\ud83d\udca1 Use Renovate with Dependabot",id:"-use-renovate-with-dependabot",level:2},{value:"\ud83d\udca1 Schedule Standard Registry&#39;s update",id:"-schedule-standard-registrys-update",level:2},{value:"\ud83d\udca1 Renovate&#39;s minimumReleaseAge",id:"-renovates-minimumreleaseage",level:2},{value:"\ud83d\udca1 Prevent some packages from being updated by Renovate",id:"-prevent-some-packages-from-being-updated-by-renovate",level:2},{value:"1. Renovate&#39;s enabled option",id:"1-renovates-enabled-option",level:3},{value:"2. Use the long syntax instead of the short syntax",id:"2-use-the-long-syntax-instead-of-the-short-syntax",level:3}],p={toc:i},d="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"update-packages-by-renovate"},"Update packages by Renovate"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "extends": [\n    "github>aquaproj/aqua-renovate-config#1.11.0"\n  ]\n}\n')),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/176582627-44f27c48-213b-44da-b18f-d4d482ef2f56.png",alt:"image"})),(0,r.kt)("p",null,"aqua manages package and registry versions,\nso it is important to update them continuously.\naqua doesn't provide sub commands like ",(0,r.kt)("inlineCode",{parentName:"p"},"aqua update")," or options like ",(0,r.kt)("inlineCode",{parentName:"p"},"aqua install --update"),".\nWe recommend managing ",(0,r.kt)("inlineCode",{parentName:"p"},"aqua.yaml")," with Git and update versions by ",(0,r.kt)("a",{parentName:"p",href:"https://docs.renovatebot.com/"},"Renovate")," or something."),(0,r.kt)("p",null,"Using Renovate's ",(0,r.kt)("a",{parentName:"p",href:"https://docs.renovatebot.com/modules/manager/regex/"},"Regex Manager"),", you can update versions."),(0,r.kt)("p",null,"We provide the Renovate Preset Configuration ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-renovate-config"},"aqua-renovate-config"),". For the detail, please see the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-renovate-config"},"README"),"."),(0,r.kt)("p",null,"Example pull requests by Renovate."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua/pull/193"},"chore(deps): update dependency golangci/golangci-lint to v1.42.0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua/pull/194"},"chore(deps): update dependency aquaproj/aqua-registry to v0.2.2"))),(0,r.kt)("h2",{id:"-use-renovate-with-dependabot"},"\ud83d\udca1 Use Renovate with Dependabot"),(0,r.kt)("p",null,"If you already use Dependabot and hesitate to use Renovate, you should enable only Renovate's ",(0,r.kt)("inlineCode",{parentName:"p"},"regex")," Manager."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "enabledManagers": ["regex"]\n}\n')),(0,r.kt)("p",null,"Then Renovate doesn't conflict with Dependabot."),(0,r.kt)("h2",{id:"-schedule-standard-registrys-update"},"\ud83d\udca1 Schedule Standard Registry's update"),(0,r.kt)("p",null,"The release frequency of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-registry"},"Standard Registry")," is high.\nIf you feel the update of Standard Registry is a bit noisy, you can schedule the update of Standard Registry."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.renovatebot.com/configuration-options/#schedule"},"schedule | Renovate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.renovatebot.com/presets-schedule/"},"Schedule Presets | Renovate"))),(0,r.kt)("p",null,"e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "packageRules": [\n    {\n      "matchPackageNames": ["aquaproj/aqua-registry"],\n      "extends": ["schedule:earlyMondays"]\n    }\n  ]\n}\n')),(0,r.kt)("h2",{id:"-renovates-minimumreleaseage"},"\ud83d\udca1 Renovate's minimumReleaseAge"),(0,r.kt)("p",null,"Some packages have a time lag between when a GitHub Release is created and when assets are uploaded.\nIn that case, Renovate may create pull requests before assets are uploaded.\nTo prevent the issue as much as possible, Renovate's ",(0,r.kt)("a",{parentName:"p",href:"https://docs.renovatebot.com/configuration-options/#minimumreleaseage"},"minimumReleaseAge")," may be useful."),(0,r.kt)("h2",{id:"-prevent-some-packages-from-being-updated-by-renovate"},"\ud83d\udca1 Prevent some packages from being updated by Renovate"),(0,r.kt)("p",null,"There are two ways to prevent some packages from being updated by Renovate."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://docs.renovatebot.com/configuration-options/#enabled"},"Renovate's enabled option")),(0,r.kt)("li",{parentName:"ol"},"Use the long syntax instead of the short syntax")),(0,r.kt)("h3",{id:"1-renovates-enabled-option"},"1. Renovate's enabled option"),(0,r.kt)("p",null,"e.g. renovate.json"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "packageRules": [\n    {\n      "matchPackageNames": ["kubernetes/kubectl"],\n      "enabled": false\n    }\n  ]\n}\n')),(0,r.kt)("h3",{id:"2-use-the-long-syntax-instead-of-the-short-syntax"},"2. Use the long syntax instead of the short syntax"),(0,r.kt)("p",null,"e.g. aqua.yaml"),(0,r.kt)("p",null,"\ud83d\udc4d Renovate wouldn't update ",(0,r.kt)("inlineCode",{parentName:"p"},"kubernetes/kubectl"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"packages:\n- name: kubernetes/kubectl\n  version: v1.25.0\n")),(0,r.kt)("p",null,"\ud83d\udc4e Renovate would update ",(0,r.kt)("inlineCode",{parentName:"p"},"kubernetes/kubectl")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"suzuki-shunsuke/tfcmt"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"packages:\n- name: kubernetes/kubectl@v1.25.0\n- name: suzuki-shunsuke/tfcmt\n  version: v2.0.0 # renovate: depName=suzuki-shunsuke/tfcmt\n")))}c.isMDXComponent=!0}}]);
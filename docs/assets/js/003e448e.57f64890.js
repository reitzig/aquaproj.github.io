"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[7695],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=s(a),d=r,h=f["".concat(l,".").concat(d)]||f[d]||c[d]||o;return a?n.createElement(h,u(u({ref:t},p),{},{components:a})):n.createElement(h,u({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,u=new Array(o);u[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,u[1]=i;for(var s=2;s<o;s++)u[s]=a[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},5018:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),u=["components"],i={title:"Why I use aqua",date:new Date("2021-12-23T00:32:46.000Z"),authors:["suzuki-shunsuke"]},l=void 0,s={permalink:"/blog/why-i-use-aqua",source:"@site/blog/why-i-use-aqua.md",title:"Why I use aqua",description:"Original Post//dev.to/suzukishunsuke/why-i-use-aqua-230",date:"2021-12-23T00:32:46.000Z",formattedDate:"December 23, 2021",tags:[],readingTime:1.19,truncated:!1,authors:[{name:"Shunsuke Suzuki",title:"SRE / OSS Contributor / Tool Maker / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"Why I use aqua",date:"2021-12-23T00:32:46.000Z",authors:["suzuki-shunsuke"]},nextItem:{title:"Manage CLI tool version with aqua",permalink:"/blog/2021/12/04/aqua-overview"}},p={authorsImageUrls:[void 0]},c=[{value:"Why I use\xa0aqua",id:"why-i-useaqua",level:2},{value:"Why not\xa0asdf?",id:"why-notasdf",level:2}],f={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("link",{rel:"canonical",href:"https://dev.to/suzukishunsuke/why-i-use-aqua-230"})),(0,o.kt)("p",null,"Original Post: ",(0,o.kt)("a",{parentName:"p",href:"https://dev.to/suzukishunsuke/why-i-use-aqua-230"},"https://dev.to/suzukishunsuke/why-i-use-aqua-230")),(0,o.kt)("p",null,"In this post, I describe why I use aqua."),(0,o.kt)("h2",{id:"why-i-useaqua"},"Why I use\xa0aqua"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Align tool versions in team and CI",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Solve the problem due to the difference of tool versions"))),(0,o.kt)("li",{parentName:"ul"},"Manage tools and their versions for projects as code declaratively, and provide an unified way to install tools",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"aqua supports changing tool versions per project"))),(0,o.kt)("li",{parentName:"ul"},"Stop developing shell scripts and GitHub Actions to install tools per tool and per project"),(0,o.kt)("li",{parentName:"ul"},"Update tools with Renovate easily"),(0,o.kt)("li",{parentName:"ul"},"Install tools hosted in private repositories")),(0,o.kt)("h2",{id:"why-notasdf"},"Why not\xa0asdf?"),(0,o.kt)("p",null,"asdf is used for the similar purpose, but I use aqua. Why?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Some tools don't have asdf plugins for them"),(0,o.kt)("li",{parentName:"ul"},"Good Experience",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"You don't have to install plugins"),(0,o.kt)("li",{parentName:"ul"},"Tools are installed automatically"),(0,o.kt)("li",{parentName:"ul"},"Search tools by ",(0,o.kt)("inlineCode",{parentName:"li"},"aqua g")," is useful"))),(0,o.kt)("li",{parentName:"ul"},"aqua doesn't force to use aqua in other projects and globally"),(0,o.kt)("li",{parentName:"ul"},"Easy to support new tools",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"It is easier to contribute to aqua-registry than to develop asdf plugin"))),(0,o.kt)("li",{parentName:"ul"},"Easy to introduce aqua to teams and projects because aqua is easy and doesn't force to use aqua in other projects and globally"),(0,o.kt)("li",{parentName:"ul"},"Easy to update tools with Renovate"),(0,o.kt)("li",{parentName:"ul"},"aqua supports splitting configuration files, so it is easy to filter builds in CI by changed file paths")),(0,o.kt)("p",null,"About the difference between aqua and asf, please see ",(0,o.kt)("a",{parentName:"p",href:"/docs/comparison/asdf"},"Comparison - asdf")," too."))}d.isMDXComponent=!0}}]);
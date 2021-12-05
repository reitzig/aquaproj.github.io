"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[941],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=c(t),m=a,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||o;return t?r.createElement(d,u(u({ref:n},s),{},{components:t})):r.createElement(d,u({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,u=new Array(o);u[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var c=2;c<o;c++)u[c]=t[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8129:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return f}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),u=["components"],i={sidebar_position:900},l="Uninstall aqua",c={unversionedId:"reference/uninstall",id:"reference/uninstall",isDocsHomePage:!1,title:"Uninstall aqua",description:"Remove aqua and ~/.aqua.",source:"@site/docs/reference/uninstall.md",sourceDirName:"reference",slug:"/reference/uninstall",permalink:"/docs/reference/uninstall",editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/uninstall.md",tags:[],version:"current",sidebarPosition:900,frontMatter:{sidebar_position:900},sidebar:"tutorialSidebar",previous:{title:"Get an executable file by `aqua which`",permalink:"/docs/reference/aqua-which"},next:{title:"Manual download and install tools",permalink:"/docs/comparison/manual"}},s=[],p={toc:s};function f(e){var n=e.components,t=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"uninstall-aqua"},"Uninstall aqua"),(0,o.kt)("p",null,"Remove ",(0,o.kt)("inlineCode",{parentName:"p"},"aqua")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.aqua"),"."),(0,o.kt)("p",null,"e.g."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ rm /usr/local/bin/aqua\n$ rm -R ~/.aqua\n")),(0,o.kt)("p",null,"Unset the environment variables you set for aqua."),(0,o.kt)("p",null,"e.g."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"export PATH=$HOME/.aqua/bin:$PATH # Remove `$HOME/.aqua/bin`\nexport AQUA_LOG_LEVEL=debug # Remove\n")))}f.isMDXComponent=!0}}]);
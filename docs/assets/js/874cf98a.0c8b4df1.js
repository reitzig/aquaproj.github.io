"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[5447],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return f}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(a),f=r,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||c;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,i=new Array(c);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<c;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5770:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var n=a(7462),r=a(3366),c=(a(7294),a(3905)),i=["components"],o={sidebar_position:200},l="Search packages",s={unversionedId:"tutorial-basics/search-packages",id:"tutorial-basics/search-packages",title:"Search packages",description:"You can search packages by aqua g command.",source:"@site/docs/tutorial-basics/search-packages.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/search-packages",permalink:"/docs/tutorial-basics/search-packages",editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/tutorial-basics/search-packages.md",tags:[],version:"current",sidebarPosition:200,frontMatter:{sidebar_position:200},sidebar:"tutorialSidebar",previous:{title:"Quick Start",permalink:"/docs/tutorial-basics/quick-start"},next:{title:"Lazy Install",permalink:"/docs/tutorial-basics/lazy-install"}},u=[],p={toc:u};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"search-packages"},"Search packages"),(0,c.kt)("p",null,"You can search packages by ",(0,c.kt)("inlineCode",{parentName:"p"},"aqua g")," command."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua g\n")),(0,c.kt)("p",null,"Then an interactive fuzzy zinder is launched (Powered by ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/ktr0731/go-fuzzyfinder"},"ktr0731/go-fuzzyfinder"),")."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-console"},"  influxdata/influx-cli (standard) (influx)                     \u250c \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500\n  newrelic/newrelic-cli (standard) (newrelic)                   \u2502  cli/cli\n  pivotal-cf/pivnet-cli (standard) (pivnet)                     \u2502\n  scaleway/scaleway-cli (standard) (scw)                        \u2502  https://github.com/cli/cli\n  tfmigrator/cli (standard) (tfmigrator)                        \u2502  GitHub\u2019cs official command line tool\n  aws/copilot-cli (standard) (copilot)                          \u2502\n  create-go-app/cli (standard) (cgapp)                          \u2502\n  harness/drone-cli (standard) (drone)                          \u2502\n  sigstore/rekor (standard) (rekor-cli)                         \u2502\n  getsentry/sentry-cli (standard)                               \u2502\n  grafana/loki/logcli (standard)                                \u2502\n  knative/client (standard) (kn)                                \u2502\n  rancher/cli (standard) (rancher)                              \u2502\n  tektoncd/cli (standard) (tkn)                                 \u2502\n  civo/cli (standard) (civo)                                    \u2502\n  dapr/cli (standard) (dapr)                                    \u2502\n  mongodb/mongocli (standard)                                   \u2502\n  openfaas/faas-cli (standard)                                  \u2502\n> cli/cli (standard) (gh)                                       \u2502\n  50/401                                                        \u2502\n> cli                                                           \u2514 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500\n")),(0,c.kt)("p",null,"Please select ",(0,c.kt)("inlineCode",{parentName:"p"},"tfmigrator/cli"),", then the package configuration is outputted."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua g\n- name: tfmigrator/cli@v0.2.1\n")),(0,c.kt)("p",null,"Please copy and paste the output to aqua.yaml."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-yaml"},"packages:\n- name: cli/cli@v2.2.0\n- name: junegunn/fzf@0.28.0\n- name: tfmigrator/cli@v0.2.1 # Added\n")))}d.isMDXComponent=!0}}]);
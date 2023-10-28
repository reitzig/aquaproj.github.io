"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[2050],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(a),c=o,m=d["".concat(l,".").concat(c)]||d[c]||h[c]||r;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7601:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_position:430},i="Windows Support",s={unversionedId:"reference/windows-support",id:"reference/windows-support",title:"Windows Support",description:"aqua >= v1.12.0",source:"@site/docs/reference/windows-support.md",sourceDirName:"reference",slug:"/reference/windows-support",permalink:"/docs/reference/windows-support",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/windows-support.md",tags:[],version:"current",sidebarPosition:430,frontMatter:{sidebar_position:430},sidebar:"tutorialSidebar",previous:{title:"Usage",permalink:"/docs/reference/usage"},next:{title:"Use aqua combined with other version manager such as asdf",permalink:"/docs/reference/use-aqua-with-other-tools"}},l={},u=[{value:"Develop environment",id:"develop-environment",level:2},{value:"How to install",id:"how-to-install",level:2},{value:"The install path (AQUA_ROOT_DIR)",id:"the-install-path-aqua_root_dir",level:2},{value:"PATH",id:"path",level:2},{value:"The separator of AQUA_GLOBAL_CONFIG",id:"the-separator-of-aqua_global_config",level:2},{value:"Required Standard Registry Version",id:"required-standard-registry-version",level:2},{value:"Windows Settings",id:"windows-settings",level:2},{value:"Windows Security",id:"windows-security",level:3},{value:"Windows Support of installed tools",id:"windows-support-of-installed-tools",level:2},{value:"tools written in shell scripts aren&#39;t supported",id:"tools-written-in-shell-scripts-arent-supported",level:3},{value:"Windows specific features",id:"windows-specific-features",level:2},{value:"Auto complesion of the file extension",id:"auto-complesion-of-the-file-extension",level:3},{value:"Create BAT files and shell scripts instead of symbolic links and aqua-proxy",id:"create-bat-files-and-shell-scripts-instead-of-symbolic-links-and-aqua-proxy",level:3},{value:"Why is this change needed?",id:"why-is-this-change-needed",level:4},{value:"Trouble Shooting",id:"trouble-shooting",level:2},{value:"GitHub Action aqua-installer doesn&#39;t work on Windows Runner",id:"github-action-aqua-installer-doesnt-work-on-windows-runner",level:3},{value:"Interactive Search by <code>aqua g</code> doesn&#39;t work on Git Bash",id:"interactive-search-by-aqua-g-doesnt-work-on-git-bash",level:3}],p={toc:u},d="wrapper";function h(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"windows-support"},"Windows Support"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"aqua >= v1.12.0")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/850"},"#850"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/orgs/aquaproj/projects/4"},"Project#4")),(0,o.kt)("p",null,"The author ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke"},"@suzuki-shunsuke")," doesn't use Windows, so the help of Windows Users is welcome."),(0,o.kt)("h2",{id:"develop-environment"},"Develop environment"),(0,o.kt)("p",null,"The author ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke"},"@suzuki-shunsuke")," tests the Windows Support on the following environments."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://aws.amazon.com/workspaces/"},"Amazon Workspaces")," ",(0,o.kt)("inlineCode",{parentName:"li"},"Standard with Windows 10 (Server 2019 based) (PCoIP)")),(0,o.kt)("li",{parentName:"ul"},"GitHub Actions' ",(0,o.kt)("inlineCode",{parentName:"li"},"windows-latest"))),(0,o.kt)("p",null,"Terminals"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Command Prompt"),(0,o.kt)("li",{parentName:"ul"},"PowerShell"),(0,o.kt)("li",{parentName:"ul"},"Git Bash (mingw)")),(0,o.kt)("h2",{id:"how-to-install"},"How to install"),(0,o.kt)("p",null,"Please download an asset from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/releases"},"GitHub Releases")," and deploy the binary into ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH"),"."),(0,o.kt)("p",null,"You can also ",(0,o.kt)("a",{parentName:"p",href:"/docs/install#go"},"install aqua with Go"),". "),(0,o.kt)("p",null,"From ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/releases/tag/v2.16.2"},"aqua v2.16.2"),", you can also install aqua by ",(0,o.kt)("a",{parentName:"p",href:"https://scoop.sh/"},"Scoop"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"scoop bucket add aquaproj https://github.com/aquaproj/scoop-bucket\nscoop install aqua\n")),(0,o.kt)("h2",{id:"the-install-path-aqua_root_dir"},"The install path (AQUA_ROOT_DIR)"),(0,o.kt)("p",null,"From aqua v1.12.0, the default value of ",(0,o.kt)("inlineCode",{parentName:"p"},"AQUA_ROOT_DIR")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/AppData/Local/aquaproj-aqua"),"."),(0,o.kt)("h2",{id:"path"},"PATH"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Command Prompt,PowerShell: ",(0,o.kt)("inlineCode",{parentName:"li"},"AQUA_ROOT_DIR/bat")),(0,o.kt)("li",{parentName:"ul"},"Git Bash: ",(0,o.kt)("inlineCode",{parentName:"li"},"AQUA_ROOT_DIR/bin"))),(0,o.kt)("h2",{id:"the-separator-of-aqua_global_config"},"The separator of AQUA_GLOBAL_CONFIG"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Command Prompt, PowerShell: ",(0,o.kt)("inlineCode",{parentName:"li"},";")),(0,o.kt)("li",{parentName:"ul"},"Git Bash: ",(0,o.kt)("inlineCode",{parentName:"li"},":"))),(0,o.kt)("h2",{id:"required-standard-registry-version"},"Required Standard Registry Version"),(0,o.kt)("p",null,"Please upgrade ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-registry"},"Standard Registry")," to v2.28.1 or later."),(0,o.kt)("h2",{id:"windows-settings"},"Windows Settings"),(0,o.kt)("p",null,"aqua works even if ",(0,o.kt)("inlineCode",{parentName:"p"},"Developer Mode")," is disabled.\nAnd you don't have to run the terminal as Administrator."),(0,o.kt)("h3",{id:"windows-security"},"Windows Security"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Please change the settings at your own risk.")),(0,o.kt)("p",null,"Security software may prevent aqua from installing and running tools.\nIn that case, you may have to add ",(0,o.kt)("inlineCode",{parentName:"p"},"AQUA_ROOT_DIR")," to security software's exclusion. "),(0,o.kt)("h2",{id:"windows-support-of-installed-tools"},"Windows Support of installed tools"),(0,o.kt)("p",null,"Note that some tools don't support Windows.\naqua skips installing those tools on Windows with ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/registry-config/supported-if"},"supported_if")," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/registry-config/supported-envs"},"supported_envs"),"."),(0,o.kt)("h3",{id:"tools-written-in-shell-scripts-arent-supported"},"tools written in shell scripts aren't supported"),(0,o.kt)("p",null,"Currently, tools written in shell scripts aren't supported."),(0,o.kt)("h2",{id:"windows-specific-features"},"Windows specific features"),(0,o.kt)("h3",{id:"auto-complesion-of-the-file-extension"},"Auto complesion of the file extension"),(0,o.kt)("p",null,"Please see ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/registry-config/complete-windows-ext"},"complete_windows_ext"),"."),(0,o.kt)("h3",{id:"create-bat-files-and-shell-scripts-instead-of-symbolic-links-and-aqua-proxy"},"Create BAT files and shell scripts instead of symbolic links and aqua-proxy"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/885"},"#885")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/892"},"#892")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/893"},"#893")," aqua >= v1.12.0"),(0,o.kt)("p",null,"Reference (Japanese): ",(0,o.kt)("a",{parentName:"p",href:"https://zenn.dev/link/comments/725555a2b1b034"},"https://zenn.dev/link/comments/725555a2b1b034")),(0,o.kt)("p",null,"aqua creates executable BAT files and shell scripts in directories ",(0,o.kt)("inlineCode",{parentName:"p"},"AQUA_ROOT_DIR/bin")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"AQUA_ROOT_DIR/bat")," instead of symbolic links."),(0,o.kt)("p",null,"If you use PowerShell or Command Prompt, please add ",(0,o.kt)("inlineCode",{parentName:"p"},"AQUA_ROOT_DIR/bat")," to the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH"),".\nOr if you use Git Bash, please add ",(0,o.kt)("inlineCode",{parentName:"p"},"AQUA_ROOT_DIR/bin")," to the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH"),"."),(0,o.kt)("h4",{id:"why-is-this-change-needed"},"Why is this change needed?"),(0,o.kt)("p",null,"On Windows, there are two problems regarding symbolic links."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"To create symbolic links, you have to run Terminal (cmd.exe, PowerShell, Git Bash, etc) as Administrator or enable Developer Mode"),(0,o.kt)("li",{parentName:"ol"},"PowerShell has a bug about symbolic link ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/PowerShell/PowerShell/issues/16171"},"https://github.com/PowerShell/PowerShell/issues/16171"))),(0,o.kt)("h2",{id:"trouble-shooting"},"Trouble Shooting"),(0,o.kt)("h3",{id:"github-action-aqua-installer-doesnt-work-on-windows-runner"},"GitHub Action aqua-installer doesn't work on Windows Runner"),(0,o.kt)("p",null,"We are working on it."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua-installer/issues/116"},"https://github.com/aquaproj/aqua-installer/issues/116")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua-installer/issues/117"},"https://github.com/aquaproj/aqua-installer/issues/117"))),(0,o.kt)("h3",{id:"interactive-search-by-aqua-g-doesnt-work-on-git-bash"},"Interactive Search by ",(0,o.kt)("inlineCode",{parentName:"h3"},"aqua g")," doesn't work on Git Bash"),(0,o.kt)("p",null,"The guide of ",(0,o.kt)("inlineCode",{parentName:"p"},"gh auth login")," is helpful."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/ktr0731/go-fuzzyfinder/issues/2#issuecomment-1154872091"},"https://github.com/ktr0731/go-fuzzyfinder/issues/2#issuecomment-1154872091")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You appear to be running in MinTTY without pseudo terminal support."),(0,o.kt)("p",{parentName:"blockquote"},"MinTTY is the terminal emulator that comes by default with Git\nfor Windows. It has known issues with gh's ability to prompt a\nuser for input."),(0,o.kt)("p",{parentName:"blockquote"},"There are a few workarounds to make gh work with MinTTY:"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},'Reinstall Git for Windows, checking "Enable experimental support for pseudo consoles".')),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/173531978-21a99818-11ff-4385-962a-64f74e4023db.png",alt:"image"})),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Use a different terminal emulator with Git for Windows like Windows Terminal.\nYou can run "C:\\Program Files\\Git\\bin\\bash.exe" from any terminal emulator to continue\nusing all of the tooling in Git For Windows without MinTTY.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Prefix invocations of gh with winpty, eg: "winpty gh auth login".\nNOTE: this can lead to some UI bugs.')))))}h.isMDXComponent=!0}}]);
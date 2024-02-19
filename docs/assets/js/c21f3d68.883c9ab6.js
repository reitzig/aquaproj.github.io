"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[282],{5680:(e,a,t)=>{t.d(a,{xA:()=>l,yg:()=>d});var n=t(6540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function u(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),o=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},l=function(e){var a=o(e.components);return n.createElement(c.Provider,{value:a},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=o(t),g=r,d=p["".concat(c,".").concat(g)]||p[g]||m[g]||i;return t?n.createElement(d,s(s({ref:a},l),{},{components:t})):n.createElement(d,s({ref:a},l))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=g;var u={};for(var c in a)hasOwnProperty.call(a,c)&&(u[c]=a[c]);u.originalType=e,u[p]="string"==typeof e?e:r,s[1]=u;for(var o=2;o<i;o++)s[o]=t[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},1199:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>o});var n=t(8168),r=(t(6540),t(5680));const i={sidebar_position:15},s="Enable Checksum Verification",u={unversionedId:"guides/checksum",id:"guides/checksum",title:"Enable Checksum Verification",description:"About Checksum Verification, please see also.",source:"@site/docs/guides/checksum.md",sourceDirName:"guides",slug:"/guides/checksum",permalink:"/docs/guides/checksum",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/guides/checksum.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"Update packages by Renovate",permalink:"/docs/guides/renovate"},next:{title:"Policy as Code",permalink:"/docs/guides/policy-as-code"}},c={},o=[{value:"Create a GitHub Repository",id:"create-a-github-repository",level:2},{value:"Prepare GitHub Access Token",id:"prepare-github-access-token",level:2},{value:"Create aqua.yaml",id:"create-aquayaml",level:2},{value:"Enable Checksum Verification",id:"enable-checksum-verification-1",level:2},{value:"Set up GitHub Actions Workflow",id:"set-up-github-actions-workflow",level:2},{value:"Create a pull request",id:"create-a-pull-request",level:2},{value:"Change a package version",id:"change-a-package-version",level:2},{value:"See how Checksum Verification prevents tampering",id:"see-how-checksum-verification-prevents-tampering",level:2}],l={toc:o},p="wrapper";function m(e){let{components:a,...t}=e;return(0,r.yg)(p,(0,n.A)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"enable-checksum-verification"},"Enable Checksum Verification"),(0,r.yg)("p",null,"About Checksum Verification, please see also."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/reference/security/checksum"},"Reference")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/reference/config/checksum"},"Configuration")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/reference/registry-config/checksum"},"Registry Configuration")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/reference/usage#aqua-update-checksum"},"Usage > aqua update-checksum"))),(0,r.yg)("h2",{id:"create-a-github-repository"},"Create a GitHub Repository"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/new"},"Let's create a GitHub Repository for this tutorial"),".\nYou can remove the repository after this tutorial."),(0,r.yg)("h2",{id:"prepare-github-access-token"},"Prepare GitHub Access Token"),(0,r.yg)("p",null,"Please create a classic personal access token and add it to Repository Secrets."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"name: GH_TOKEN"),(0,r.yg)("li",{parentName:"ul"},"required permissions: ",(0,r.yg)("inlineCode",{parentName:"li"},"contents: write"))),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"GitHub Actions' token ",(0,r.yg)("inlineCode",{parentName:"p"},"GITHUB_TOKEN")," is unavailable.")),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("del",{parentName:"p"},"Unfortunately, fine-grained personal access token is unavailable at the moment because it doesn't support GraphQL API."),"\n",(0,r.yg)("del",{parentName:"p"},(0,r.yg)("a",{parentName:"del",href:"https://github.com/cli/cli/issues/6680"},"https://github.com/cli/cli/issues/6680"))),(0,r.yg)("p",{parentName:"admonition"},"2023-04-27 ",(0,r.yg)("a",{parentName:"p",href:"https://github.blog/changelog/2023-04-27-graphql-improvements-for-fine-grained-pats-and-github-apps/"},"fine-grained access token supports GraphQL API now."))),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"In this time we use a classic personal access token, but we recommend GitHub App or fine-grained access token in terms of security.")),(0,r.yg)("h2",{id:"create-aquayaml"},"Create aqua.yaml"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"aqua init\naqua g -i suzuki-shunsuke/tfcmt\n")),(0,r.yg)("h2",{id:"enable-checksum-verification-1"},"Enable Checksum Verification"),(0,r.yg)("p",null,"By default, checksum verification is disabled.\nLet's edit aqua.yaml and enable Checksum Verification."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"---\nchecksum:\n  enabled: true\nregistries:\n- type: standard\n  ref: v3.143.0 # renovate: depName=aquaproj/aqua-registry\npackages:\n- name: suzuki-shunsuke/tfcmt@v4.2.0\n")),(0,r.yg)("h2",{id:"set-up-github-actions-workflow"},"Set up GitHub Actions Workflow"),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"For CircleCI Users, please use ",(0,r.yg)("a",{parentName:"p",href:"https://circleci.com/developer/orbs/orb/aquaproj/aqua#commands-update-checksum"},"circleci-orb-aqua's update-checksum command")," instead.")),(0,r.yg)("p",null,"To create and update ",(0,r.yg)("inlineCode",{parentName:"p"},"aqua-checksum.json")," automatically, let's set up GitHub Actions."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mkdir -p .github/workflows\nvi .github/workflows/update-aqua-checksum.yaml\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"name: update-aqua-checksum\non:\n  pull_request:\n    paths:\n      - aqua.yaml\n      - aqua-checksums.json\njobs:\n  update-aqua-checksums:\n    uses: aquaproj/update-checksum-workflow/.github/workflows/update-checksum.yaml@f637ff2417a258303aeec16a7fa7a1a7a8bda020 # v0.1.3\n    permissions:\n      contents: read\n    with:\n      aqua_version: v2.10.1\n      prune: true\n    secrets:\n      gh_token: ${{secrets.GH_TOKEN}}\n      # gh_app_id: ${{secrets.APP_ID}}\n      # gh_app_private_key: ${{secrets.APP_PRIVATE_KEY}}\n")),(0,r.yg)("p",null,"We use ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/update-checksum-action"},"update-checksum-action"),".\nThis action depends on ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/int128/ghcp"},"int128/ghcp"),", so let's install it by aqua."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"aqua g -i int128/ghcp\n")),(0,r.yg)("h2",{id:"create-a-pull-request"},"Create a pull request"),(0,r.yg)("p",null,"Commit ",(0,r.yg)("inlineCode",{parentName:"p"},"aqua.yaml")," and ",(0,r.yg)("inlineCode",{parentName:"p"},".github/workflows/update-aqua-checksum.yaml"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},'git checkout -b ci/aqua-checksum\ngit add aqua.yaml .github/workflows/update-aqua-checksum.yaml\ngit commit -m "ci: add aqua.yaml and set up workflow"\ngit push origin ci/aqua-checksum\n')),(0,r.yg)("p",null,"Create a pull request. Then ",(0,r.yg)("inlineCode",{parentName:"p"},"aqua-checksums.json")," will be created by GitHub Actions."),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/224527388-720ce451-bdce-4055-9eed-ba0942615eea.png",alt:"image"})),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/224527533-8fc150e2-55c1-4ca4-a9c7-f05544fdeccb.png",alt:"image"})),(0,r.yg)("h2",{id:"change-a-package-version"},"Change a package version"),(0,r.yg)("p",null,"Let's change version."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},'sed -i "s/v4.2.0/v4.1.0/" aqua.yaml\n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-diff"},"-- name: suzuki-shunsuke/tfcmt@v4.2.0\n+- name: suzuki-shunsuke/tfcmt@v4.1.0\n")),(0,r.yg)("p",null,"Push a commit."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},'git pull origin ci/aqua-checksum\ngit add aqua.yaml\ngit commit -m "chore: change tfcmt version"\ngit push origin "ci/aqua-checksum"\n')),(0,r.yg)("p",null,"Then ",(0,r.yg)("inlineCode",{parentName:"p"},"aqua-checksums.json")," is updated automatically."),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/224527976-4ddb1607-9958-4269-8882-3c0657e98a72.png",alt:"image"})),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/224528023-72aba252-7507-47fa-87b2-dc08eb7f908b.png",alt:"image"})),(0,r.yg)("h2",{id:"see-how-checksum-verification-prevents-tampering"},"See how Checksum Verification prevents tampering"),(0,r.yg)("p",null,"Let's see how Checksum Verification prevents tampering.\nIt's bothersome to tamper assets actually, so in this time let's simulate the situation by tampering checksum in ",(0,r.yg)("inlineCode",{parentName:"p"},"aqua-checksums.json"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"git pull origin ci/aqua-checksum\nvi aqua-checksums.json\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-diff"},'     {\n       "id": "github_release/github.com/suzuki-shunsuke/tfcmt/v4.1.0/tfcmt_linux_amd64.tar.gz",\n-      "checksum": "A8E55BEA1A5F94F9515FD9C5C3296D1874461BA1DBD158B3FC0ED6A0DB3B7D91",\n+      "checksum": "A8E55BEA1A5F94F9515FD9C5C3296D1874461BA1DBD158B3FC0ED6A0DB3B7D92",\n       "algorithm": "sha256"\n     },\n')),(0,r.yg)("p",null,"Add a GitHub Actions job that runs a tampered package."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'  test:\n    runs-on: ubuntu-latest\n    permissions:\n      contents: read\n    env:\n      AQUA_LOG_COLOR: always\n      AQUA_REQUIRE_CHECKSUM: "true"\n    steps:\n      - uses: actions/checkout@ac593985615ec2ede58e132d2e21d2b1cbd6127c # v3.3.0\n      - uses: aquaproj/aqua-installer@61e2563dfe7674cbf74fe6ec212e444198a3bb00 # v2.0.2\n        with:\n          aqua_version: v2.10.1\n        env:\n          GITHUB_TOKEN: ${{github.token}}\n      - run: tfcmt -v\n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},'git add aqua-checksums.json\ngit commit -m "chore: tamper aqua-checksums.json"\ngit push origin "ci/aqua-checksum"\n')),(0,r.yg)("p",null,"Then ",(0,r.yg)("inlineCode",{parentName:"p"},"test")," job would fail because the checksum is unmatched."),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/224528789-eeda95e7-73b9-46a3-95da-da954087e83b.png",alt:"image"})),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'time="2023-03-12T06:36:05Z" level=fatal msg="aqua failed" actual_checksum=A8E55BEA1A5F94F9515FD9C5C3296D1874461BA1DBD158B3FC0ED6A0DB3B7D91 aqua_version=2.10.1 env=linux/amd64 error="checksum is invalid" exe_name=tfcmt expected_checksum=A8E55BEA1A5F94F9515FD9C5C3296D1874461BA1DBD158B3FC0ED6A0DB3B7D92 package=suzuki-shunsuke/tfcmt package_version=v4.1.0 program=aqua\n')))}m.isMDXComponent=!0}}]);
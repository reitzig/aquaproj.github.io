"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[7042],{3905:function(e,a,t){t.d(a,{Zo:function(){return o},kt:function(){return k}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function u(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?u(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},u=Object.keys(e);for(n=0;n<u.length;n++)t=u[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)t=u[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),l=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},o=function(e){var a=l(e.components);return n.createElement(c.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,u=e.originalType,c=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),p=l(t),k=r,h=p["".concat(c,".").concat(k)]||p[k]||m[k]||u;return t?n.createElement(h,i(i({ref:a},o),{},{components:t})):n.createElement(h,i({ref:a},o))}));function k(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var u=t.length,i=new Array(u);i[0]=p;var s={};for(var c in a)hasOwnProperty.call(a,c)&&(s[c]=a[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<u;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},663:function(e,a,t){t.r(a),t.d(a,{assets:function(){return o},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return m}});var n=t(3117),r=t(102),u=(t(7294),t(3905)),i=["components"],s={sidebar_position:1100},c="Checksum Verification",l={unversionedId:"reference/checksum",id:"reference/checksum",title:"Checksum Verification",description:"This feature is still beta.",source:"@site/docs/reference/checksum.md",sourceDirName:"reference",slug:"/reference/checksum",permalink:"/docs/reference/checksum",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/checksum.md",tags:[],version:"current",sidebarPosition:1100,frontMatter:{sidebar_position:1100},sidebar:"tutorialSidebar",previous:{title:"Uninstall aqua",permalink:"/docs/reference/uninstall"},next:{title:"Checksum is required",permalink:"/docs/reference/codes/001"}},o={},m=[{value:"Overview",id:"overview",level:2},{value:"<code>aqua update-checksum</code> command",id:"aqua-update-checksum-command",level:2},{value:"aqua-registry version",id:"aqua-registry-version",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Question: Should <code>aqua-checksums.json</code> be managed with Git?",id:"question-should-aqua-checksumsjson-be-managed-with-git",level:2},{value:"Registry&#39;s checksum configuration",id:"registrys-checksum-configuration",level:2},{value:"Generate and patch checksum configuration automatically",id:"generate-and-patch-checksum-configuration-automatically",level:2},{value:"<code>enabled</code>",id:"enabled",level:3},{value:"checksum <code>algorithm</code>",id:"checksum-algorithm",level:3},{value:"checksum <code>type</code>",id:"checksum-type",level:3},{value:"checksum <code>file_format</code>",id:"checksum-file_format",level:3}],p={toc:m};function k(e){var a=e.components,t=(0,r.Z)(e,i);return(0,u.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"checksum-verification"},"Checksum Verification"),(0,u.kt)("admonition",{type:"caution"},(0,u.kt)("p",{parentName:"admonition"},"This feature is still beta.\nTo use this feature, use the prerelease version including the word ",(0,u.kt)("inlineCode",{parentName:"p"},"checksum"),"."),(0,u.kt)("p",{parentName:"admonition"},"e.g. ",(0,u.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/releases/tag/v1.20.0-8-checksum"},"v1.20.0-8-checksum")),(0,u.kt)("p",{parentName:"admonition"},"Or from ",(0,u.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/releases/tag/v1.20.0-1"},"v1.20.0-1"),", you can use this feature by setting the environment variable ",(0,u.kt)("inlineCode",{parentName:"p"},"AQUA_EXPERIMENTAL_CHECKSUM_VERIFICATION")," to ",(0,u.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,u.kt)("pre",{parentName:"admonition"},(0,u.kt)("code",{parentName:"pre",className:"language-sh"},"export AQUA_EXPERIMENTAL_CHECKSUM_VERIFICATION=true\n"))),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/427"},"#427")),(0,u.kt)("h2",{id:"overview"},"Overview"),(0,u.kt)("p",null,"Checksum Verification is a feature checking if the downloaded asset is correct with checksum.\nChecksum Verification prevent the supply chain attack and allows you to install tools securely."),(0,u.kt)("p",null,"By default, checksum verification is disabled.\nTo enable it, please add the configuration to ",(0,u.kt)("inlineCode",{parentName:"p"},"aqua.yaml"),"."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-yaml"},"checksum:\n  enabled: true\nregistries:\n  - type: standard\n    ref: v3.27.0 # renovate: depName=aquaproj/aqua-registry\npackages:\n  - name: golangci/golangci-lint@v1.46.2\n")),(0,u.kt)("p",null,"aqua creates or updates a file ",(0,u.kt)("inlineCode",{parentName:"p"},"aqua-checksums.json")," in the same directory as aqua configuration file ",(0,u.kt)("inlineCode",{parentName:"p"},"aqua.yaml")," and writes checksums."),(0,u.kt)("p",null,"e.g. ",(0,u.kt)("inlineCode",{parentName:"p"},"aqua-checksums.json")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "checksums": [\n    {\n      "id": "github_release/github.com/golangci/golangci-lint/v1.49.0/golangci-lint-1.49.0-darwin-amd64.tar.gz",\n      "checksum": "20cd1215e0420db8cfa94a6cd3c9d325f7b39c07f2415a02d111568d8bc9e271",\n      "algorithm": "sha256"\n    },\n    {\n      "id": "github_release/github.com/golangci/golangci-lint/v1.49.0/golangci-lint-1.49.0-darwin-arm64.tar.gz",\n      "checksum": "cabb1a4c35fe1dadbe5a81550a00871281a331e7660cd85ae16e936a7f0f6cfc",\n      "algorithm": "sha256"\n    }\n  ]\n}\n')),(0,u.kt)("admonition",{type:"info"},(0,u.kt)("p",{parentName:"admonition"},"aqua finds ",(0,u.kt)("inlineCode",{parentName:"p"},"aqua-checksums.json")," and ",(0,u.kt)("inlineCode",{parentName:"p"},".aqua-checksums.json"),".\n",(0,u.kt)("inlineCode",{parentName:"p"},"aqua-checksums.json")," takes precedence over ",(0,u.kt)("inlineCode",{parentName:"p"},".aqua-checksums.json"),".\nIf they don't exist, ",(0,u.kt)("inlineCode",{parentName:"p"},"aqua-checksums.json")," is created.")),(0,u.kt)("admonition",{type:"info"},(0,u.kt)("p",{parentName:"admonition"},"The checksum is case insensitive.")),(0,u.kt)("p",null,"Many tools publish checksum files, so aqua gets checksums from them."),(0,u.kt)("p",null,"e.g."),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://releases.hashicorp.com/terraform/1.2.7/terraform_1.2.7_SHA256SUMS"},"Terraform")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://github.com/cli/cli/releases/download/v2.14.4/gh_2.14.4_checksums.txt"},"GitHub CLI"))),(0,u.kt)("p",null,"When a tool is installed, aqua verifies the checksum as the following."),(0,u.kt)("ol",null,(0,u.kt)("li",{parentName:"ol"},"Download the tool in the temporal directory"),(0,u.kt)("li",{parentName:"ol"},"Calculate the checksum from the downloaded file"),(0,u.kt)("li",{parentName:"ol"},"Get the expected checksum"),(0,u.kt)("li",{parentName:"ol"},"If the actual checksum is different from the expected checksum, make the installation failure"),(0,u.kt)("li",{parentName:"ol"},"If the checksum isn't found in ",(0,u.kt)("inlineCode",{parentName:"li"},"aqua-checksums.json"),", the expected checksum is added to ",(0,u.kt)("inlineCode",{parentName:"li"},"aqua-checksums.json")),(0,u.kt)("li",{parentName:"ol"},"Install the tool")),(0,u.kt)("p",null,"aqua gets the expected from the following sources."),(0,u.kt)("ol",null,(0,u.kt)("li",{parentName:"ol"},(0,u.kt)("inlineCode",{parentName:"li"},"aqua-checksums.json")),(0,u.kt)("li",{parentName:"ol"},"checksum files that each tools publish"),(0,u.kt)("li",{parentName:"ol"},"If the tool doesn't publish checkfum files, aqua treats the checksum calculated from the downloaded asset as the expected checksum")),(0,u.kt)("h2",{id:"aqua-update-checksum-command"},(0,u.kt)("inlineCode",{parentName:"h2"},"aqua update-checksum")," command"),(0,u.kt)("p",null,"You can create or update ",(0,u.kt)("inlineCode",{parentName:"p"},"aqua-checksums.json")," without installing tools by ",(0,u.kt)("inlineCode",{parentName:"p"},"aqua update-checksum")," command."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua update-checksum\n")),(0,u.kt)("h2",{id:"aqua-registry-version"},"aqua-registry version"),(0,u.kt)("p",null,"From ",(0,u.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-registry/releases/tag/v3.27.0"},"v3.27.0"),", aqua-registry supports the checksum verification."),(0,u.kt)("h2",{id:"getting-started"},"Getting Started"),(0,u.kt)("p",null,"Install the prerelease version."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua -v\naqua version 1.20.0-1 (3577858929cbcdd608c3cab80315b8b0ec1efda0)\n")),(0,u.kt)("p",null,"Set the environment variable ",(0,u.kt)("inlineCode",{parentName:"p"},"AQUA_EXPERIMENTAL_CHECKSUM_VERIFICATION")," to ",(0,u.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-console"},"$ export AQUA_EXPERIMENTAL_CHECKSUM_VERIFICATION=true\n")),(0,u.kt)("p",null,"Scaffold ",(0,u.kt)("inlineCode",{parentName:"p"},"aqua.yaml")," and edit to enable the checksum verification."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua init\n$ vi aqua.yaml\n")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-yaml"},"---\n# aqua - Declarative CLI Version Manager\n# https://aquaproj.github.io/\nchecksum:\n  enabled: true\nregistries:\n- type: standard\n  ref: v3.66.0 # renovate: depName=aquaproj/aqua-registry\npackages:\n")),(0,u.kt)("p",null,"And add ",(0,u.kt)("inlineCode",{parentName:"p"},"suzuki-shunsuke/tfcmt")," by ",(0,u.kt)("inlineCode",{parentName:"p"},"aqua g")," command."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua g -i suzuki-shunsuke/tfcmt\n")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-yaml"},"packages:\n- name: suzuki-shunsuke/tfcmt@v4.0.0\n")),(0,u.kt)("p",null,"Run ",(0,u.kt)("inlineCode",{parentName:"p"},"aqua update-checksum"),"."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-console"},'$ aqua update-checksum\nINFO[0000] updating a package checksum                   aqua_version=1.20.0-1 env=darwin/arm64 package_name=suzuki-shunsuke/tfcmt package_registry=standard package_version=v4.0.0 program=aqua\n\n$ cat aqua-checksums.json\n{\n  "checksums": [\n    {\n      "id": "github_release/github.com/suzuki-shunsuke/tfcmt/v4.0.0/tfcmt_darwin_amd64.tar.gz",\n      "checksum": "346d43e34ee990c26ebcbc80936bea6d6f524bcc446aa74d1f07c42708fc480b",\n      "algorithm": "sha256"\n    },\n    {\n      "id": "github_release/github.com/suzuki-shunsuke/tfcmt/v4.0.0/tfcmt_darwin_arm64.tar.gz",\n      "checksum": "372986bfaddbfeb680329341568fc4fba0d6fa651b941bf4154585b7baaa67db",\n      "algorithm": "sha256"\n    },\n    {\n      "id": "github_release/github.com/suzuki-shunsuke/tfcmt/v4.0.0/tfcmt_linux_amd64.tar.gz",\n      "checksum": "e950763e64504e40a45c75c81a35d115f98f164264e159e4e4b7e2534d3d8087",\n      "algorithm": "sha256"\n    },\n    {\n      "id": "github_release/github.com/suzuki-shunsuke/tfcmt/v4.0.0/tfcmt_linux_arm64.tar.gz",\n      "checksum": "8ce944ccaf7ff5a150b256d75d8fe3d04ba741d5586bb5f100b9df80294f14fa",\n      "algorithm": "sha256"\n    },\n    {\n      "id": "github_release/github.com/suzuki-shunsuke/tfcmt/v4.0.0/tfcmt_windows_amd64.tar.gz",\n      "checksum": "2228e167f3ddf61e6ccfd30648cf649f7b18d98eb6b2150e6c3522183628bda9",\n      "algorithm": "sha256"\n    },\n    {\n      "id": "github_release/github.com/suzuki-shunsuke/tfcmt/v4.0.0/tfcmt_windows_arm64.tar.gz",\n      "checksum": "5435b0d4cca909f752dce456fd186bef2de994f7d1c24665fa8507e9d6019e5b",\n      "algorithm": "sha256"\n    }\n  ]\n}\n')),(0,u.kt)("p",null,"If tfcmt v4.0.0 is already installed, please uninstall once."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua which tfcmt\n/Users/shunsukesuzuki/.local/share/aquaproj-aqua/pkgs/github_release/github.com/suzuki-shunsuke/tfcmt/v4.0.0/tfcmt_darwin_arm64.tar.gz/tfcmt\n\n$ rm -Rf /Users/shunsukesuzuki/.local/share/aquaproj-aqua/pkgs/github_release/github.com/suzuki-shunsuke/tfcmt/v4.0.0\n")),(0,u.kt)("p",null,"And run ",(0,u.kt)("inlineCode",{parentName:"p"},"aqua i"),". tfcmt will be installed successfully."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua i\nINFO[0000] download and unarchive the package            aqua_version=1.20.0-1 env=darwin/arm64 package_name=suzuki-shunsuke/tfcmt package_version=v4.0.0 program=aqua registry=standard\n")),(0,u.kt)("p",null,"To confirm the checksum verification, let's edit the checksum in ",(0,u.kt)("inlineCode",{parentName:"p"},"aqua-checksums.json")," intentionally."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-console"},'$ cp aqua-checksums.json aqua-checksums.json.orig\n$ vi aqua-checksums.json\n$ diff aqua-checksums.json aqua-checksums.json.orig \n10c10\n<       "checksum": "372986bfaddbfeb680329341568fc4fba0d6fa651b941bf4154585b7baaa67d0",\n---\n>       "checksum": "372986bfaddbfeb680329341568fc4fba0d6fa651b941bf4154585b7baaa67db",\n')),(0,u.kt)("p",null,"And try to reinstall tfcmt."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-console"},'$ rm -Rf /Users/shunsukesuzuki/.local/share/aquaproj-aqua/pkgs/github_release/github.com/suzuki-shunsuke/tfcmt/v4.0.0\n$ aqua i\nINFO[0000] download and unarchive the package            aqua_version=1.20.0-1 env=darwin/arm64 package_name=suzuki-shunsuke/tfcmt package_version=v4.0.0 program=aqua registry=standard\nERRO[0000] install the package                           actual_checksum=372986BFADDBFEB680329341568FC4FBA0D6FA651B941BF4154585B7BAAA67DB aqua_version=1.20.0-1 env=darwin/arm64 error="checksum is invalid" expected_checksum="&{github_release/github.com/suzuki-shunsuke/tfcmt/v4.0.0/tfcmt_darwin_arm64.tar.gz 372986BFADDBFEB680329341568FC4FBA0D6FA651B941BF4154585B7BAAA67D0 sha256}" package_name=suzuki-shunsuke/tfcmt package_version=v4.0.0 program=aqua registry=standard\nFATA[0000] aqua failed                                   aqua_version=1.20.0-1 env=darwin/arm64 error="it failed to install some packages" program=aqua\n')),(0,u.kt)("p",null,"Then it failed to install tfcmt because the checksum is wrong.\nOf course, tfcmt isn't installed."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-console"},"$ ls /Users/shunsukesuzuki/.local/share/aquaproj-aqua/pkgs/github_release/github.com/suzuki-shunsuke/tfcmt/v4.0.0\ngls: cannot access '/Users/shunsukesuzuki/.local/share/aquaproj-aqua/pkgs/github_release/github.com/suzuki-shunsuke/tfcmt/v4.0.0': No such file or directory\n")),(0,u.kt)("p",null,"The checksum verification also works in the lazy install."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-console"},'$ tfcmt -v\nINFO[0000] download and unarchive the package            aqua_version=1.20.0-1 env=darwin/arm64 exe_path=/Users/shunsukesuzuki/.local/share/aquaproj-aqua/pkgs/github_release/github.com/suzuki-shunsuke/tfcmt/v4.0.0/tfcmt_darwin_arm64.tar.gz/tfcmt package=suzuki-shunsuke/tfcmt package_name=suzuki-shunsuke/tfcmt package_version=v4.0.0 program=aqua registry=standard\nFATA[0001] aqua failed                                   actual_checksum=372986BFADDBFEB680329341568FC4FBA0D6FA651B941BF4154585B7BAAA67DB aqua_version=1.20.0-1 env=darwin/arm64 error="checksum is invalid" expected_checksum="&{github_release/github.com/suzuki-shunsuke/tfcmt/v4.0.0/tfcmt_darwin_arm64.tar.gz 372986BFADDBFEB680329341568FC4FBA0D6FA651B941BF4154585B7BAAA67D0 sha256}" program=aqua\n')),(0,u.kt)("p",null,"Let's fix .aqua-chcksums.json, then you can install tfcmt."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-console"},"$ cp aqua-checksums.json.orig aqua-checksums.json\n$ tfcmt -v\nINFO[0000] download and unarchive the package            aqua_version=1.20.0-1 env=darwin/arm64 exe_path=/Users/shunsukesuzuki/.local/share/aquaproj-aqua/pkgs/github_release/github.com/suzuki-shunsuke/tfcmt/v4.0.0/tfcmt_darwin_arm64.tar.gz/tfcmt package=suzuki-shunsuke/tfcmt package_name=suzuki-shunsuke/tfcmt package_version=v4.0.0 program=aqua registry=standard\ntfcmt version 4.0.0 (047e980d083da80303e6e8f4ebf6d5c9e7859716)\n")),(0,u.kt)("h2",{id:"question-should-aqua-checksumsjson-be-managed-with-git"},"Question: Should ",(0,u.kt)("inlineCode",{parentName:"h2"},"aqua-checksums.json")," be managed with Git?"),(0,u.kt)("p",null,"Coming soon"),(0,u.kt)("h2",{id:"registrys-checksum-configuration"},"Registry's checksum configuration"),(0,u.kt)("p",null,"Each registry's package configuration has the configuration about checksum."),(0,u.kt)("p",null,"e.g. ",(0,u.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-registry/blob/109811850abf8ec34f8715f3384ba8218f05ec1d/pkgs/cli/cli/registry.yaml"},"GitHub CLI")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-yaml"},'packages:\n  - type: github_release\n    repo_owner: cli\n    repo_name: cli\n    # ...\n    checksum:\n      type: github_release\n      asset: gh_{{trimV .Version}}_checksums.txt\n      file_format: regexp\n      algorithm: sha256\n      pattern:\n        checksum: ^(\\b[A-Fa-f0-9]{64}\\b)\n        file: "^\\\\b[A-Fa-f0-9]{64}\\\\b\\\\s+(\\\\S+)$"\n')),(0,u.kt)("p",null,"e.g. ",(0,u.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-registry/blob/109811850abf8ec34f8715f3384ba8218f05ec1d/pkgs/argoproj/argo-cd/registry.yaml"},"ArgoCD CLI")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-yaml"},'packages:\n  - type: github_release\n    repo_owner: argoproj\n    repo_name: argo-cd\n    # ...\n    asset: argocd-{{.OS}}-{{.Arch}}\n    checksum:\n      type: github_release\n      asset: "{{.Asset}}.sha256"\n      file_format: raw\n      algorithm: sha256\n')),(0,u.kt)("h2",{id:"generate-and-patch-checksum-configuration-automatically"},"Generate and patch checksum configuration automatically"),(0,u.kt)("p",null,"It is bothersome to write the checksum configuration manually, so aqua supports scaffolding the configuration."),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"scaffold-registry"},"aqua gr")," scaffolds the checksum configuration too."),(0,u.kt)("p",null,"And you can also patch the checksum configuration to the existing registries by ",(0,u.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/registry-tool/blob/main/USAGE.md#aqua-registry-patch-checksum"},"aqua-registry patch-checksum command"),"."),(0,u.kt)("admonition",{type:"caution"},(0,u.kt)("p",{parentName:"admonition"},"The scaffolding isn't perfect, so sometimes you have to fix the code manually.")),(0,u.kt)("h3",{id:"enabled"},(0,u.kt)("inlineCode",{parentName:"h3"},"enabled")),(0,u.kt)("p",null,"You can enable or disable the checksum download by ",(0,u.kt)("inlineCode",{parentName:"p"},"enabled")," attribute."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-yaml"},"packages:\n  - type: github_release\n    repo_owner: argoproj\n    repo_name: argo-cd\n    # ...\n    checksum:\n      enabled: false\n")),(0,u.kt)("p",null,"By default, checkdum download is disabled."),(0,u.kt)("h3",{id:"checksum-algorithm"},"checksum ",(0,u.kt)("inlineCode",{parentName:"h3"},"algorithm")),(0,u.kt)("p",null,"The following ",(0,u.kt)("inlineCode",{parentName:"p"},"algorithm")," are supported."),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"sha256")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"sha512")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"md5"))),(0,u.kt)("h3",{id:"checksum-type"},"checksum ",(0,u.kt)("inlineCode",{parentName:"h3"},"type")),(0,u.kt)("p",null,"The following ",(0,u.kt)("inlineCode",{parentName:"p"},"type")," are supported."),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"github_release")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"http"))),(0,u.kt)("p",null,(0,u.kt)("inlineCode",{parentName:"p"},"github_release")," requires the following attributes."),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"asset"),": GitHub Release Asset name. The format is a Go's ",(0,u.kt)("inlineCode",{parentName:"li"},"text/template")," string")),(0,u.kt)("p",null,(0,u.kt)("inlineCode",{parentName:"p"},"http")," requires the following attributes."),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"url"),": Checksum file's download URL. The format is a Go's ",(0,u.kt)("inlineCode",{parentName:"li"},"text/template")," string")),(0,u.kt)("h3",{id:"checksum-file_format"},"checksum ",(0,u.kt)("inlineCode",{parentName:"h3"},"file_format")),(0,u.kt)("p",null,"The following ",(0,u.kt)("inlineCode",{parentName:"p"},"file_format")," are supported."),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"regexp")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"raw"))),(0,u.kt)("p",null,(0,u.kt)("inlineCode",{parentName:"p"},"regexp")," requires the following attributes."),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"pattern.checksum"),":"),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"pattern.file"),":")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-yaml"},'pattern:\n  checksum: ^(\\b[A-Fa-f0-9]{64}\\b)\n  file: "^\\\\b[A-Fa-f0-9]{64}\\\\b\\\\s+(\\\\S+)$"\n')),(0,u.kt)("p",null,"aqua extracts pairs of checkfum and asset name using regular expressions."))}k.isMDXComponent=!0}}]);
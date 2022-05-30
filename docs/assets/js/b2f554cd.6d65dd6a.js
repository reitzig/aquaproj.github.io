"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[1477],{10:function(a){a.exports=JSON.parse('{"blogPosts":[{"id":"/why-i-use-aqua","metadata":{"permalink":"/blog/why-i-use-aqua","source":"@site/blog/why-i-use-aqua.md","title":"Why I use aqua","description":"Original Post//dev.to/suzukishunsuke/why-i-use-aqua-230","date":"2021-12-23T00:32:46.000Z","formattedDate":"December 23, 2021","tags":[],"readingTime":1.19,"truncated":false,"authors":[{"name":"Shunsuke Suzuki","title":"SRE / OSS Contributor / Tool Maker / Go / Terraform","url":"https://github.com/suzuki-shunsuke","imageURL":"https://github.com/suzuki-shunsuke.png","key":"suzuki-shunsuke"}],"frontMatter":{"title":"Why I use aqua","date":"2021-12-23T00:32:46.000Z","authors":["suzuki-shunsuke"]},"nextItem":{"title":"Manage CLI tool version with aqua","permalink":"/blog/2021/12/04/aqua-overview"}},"content":"<head>\\n  <link rel=\\"canonical\\" href=\\"https://dev.to/suzukishunsuke/why-i-use-aqua-230\\" />\\n</head>\\n\\nOriginal Post: https://dev.to/suzukishunsuke/why-i-use-aqua-230\\n\\nIn this post, I describe why I use aqua.\\n\\n## Why I use\xa0aqua\\n\\n* Align tool versions in team and CI\\n  * Solve the problem due to the difference of tool versions\\n* Manage tools and their versions for projects as code declaratively, and provide an unified way to install tools\\n  * aqua supports changing tool versions per project\\n* Stop developing shell scripts and GitHub Actions to install tools per tool and per project\\n* Update tools with Renovate easily\\n* Install tools hosted in private repositories\\n\\n## Why not\xa0asdf?\\n\\nasdf is used for the similar purpose, but I use aqua. Why?\\n\\n* Some tools don\'t have asdf plugins for them\\n* Good Experience\\n  * You don\'t have to install plugins\\n  * Tools are installed automatically\\n  * Search tools by `aqua g` is useful\\n* aqua doesn\'t force to use aqua in other projects and globally\\n* Easy to support new tools\\n  * It is easier to contribute to aqua-registry than to develop asdf plugin\\n* Easy to introduce aqua to teams and projects because aqua is easy and doesn\'t force to use aqua in other projects and globally\\n* Easy to update tools with Renovate\\n* aqua supports splitting configuration files, so it is easy to filter builds in CI by changed file paths\\n\\nAbout the difference between aqua and asf, please see [Comparison - asdf](/docs/comparison/asdf) too."},{"id":"/2021/12/04/aqua-overview","metadata":{"permalink":"/blog/2021/12/04/aqua-overview","source":"@site/blog/2021-12-04-aqua-overview.md","title":"Manage CLI tool version with aqua","description":"Original Post//medium.com/@suzuki.shunsuke.1989/manage-cli-tool-version-with-aqua-cee38b2c4bf5","date":"2021-12-04T00:32:46.000Z","formattedDate":"December 4, 2021","tags":[],"readingTime":3.36,"truncated":false,"authors":[{"name":"Shunsuke Suzuki","title":"SRE / OSS Contributor / Tool Maker / Go / Terraform","url":"https://github.com/suzuki-shunsuke","imageURL":"https://github.com/suzuki-shunsuke.png","key":"suzuki-shunsuke"}],"frontMatter":{"title":"Manage CLI tool version with aqua","date":"2021-12-04T00:32:46.000Z","authors":["suzuki-shunsuke"]},"prevItem":{"title":"Why I use aqua","permalink":"/blog/why-i-use-aqua"},"nextItem":{"title":"aqua - Declarative CLI Version Manager","permalink":"/blog/2021/09/08/introduction"}},"content":"<head>\\n  <link rel=\\"canonical\\" href=\\"https://medium.com/@suzuki.shunsuke.1989/manage-cli-tool-version-with-aqua-cee38b2c4bf5\\" />\\n</head>\\n\\nOriginal Post: https://medium.com/@suzuki.shunsuke.1989/manage-cli-tool-version-with-aqua-cee38b2c4bf5\\n\\nIn this post, I introduce the CLI tool aqua, which manages CLI tool version with YAML.\\n\\nWhen I write this post, the latest version of aqua is v0.8.0.\\n\\naqua is a single binary written in Go, so you can install it easily. Unlike other package managers such as Homebrew, aqua manages CLI tools with declarative YAML Configuration files.\\n\\n## Pin Tool Version\\n\\naqua forces to pin tool version, which solves the problem due to the difference of tool version.\\n\\n## Auto update with Renovate\\n\\nWith Renovate Preset Config for aqua, you can update tools continuously with Renovate.\\n\\n## Lazy Install\\n\\nWhen the tool is invoked, aqua installs the tool automatically. This feature ensures the executed tool version is exactly same as the configuration.\\n\\n## Change tool version easily\\n\\nBy editing the tool version in the configuration file, you can easily change the tool version. You can try a new version or downgrade the tool easily.\\n\\n## Change tool version per configuration\\n\\nYou can manage tool version per configuration file. You can install multiple versions in the same machine and switch them per project.\\n\\n## Manage your tools as dotfiles\\n\\nBy managing your aqua configuration file in Git repository such as your dotfiles, you can manage your tools as code. You can set up your new laptop and use the same tool version in your multiple laptops easily.\\n\\n## Manage tools for your team and organization\\n\\naqua supports not only personal use but also team and organization use. By managing aqua configuration for your team and organization in Git Repository, you can manage tools for your team and organization as code. New joiners can set up their laptops quickly and you can distribute tools easily.\\n\\n## Manage tools for a repository\\n\\nBy adding aqua configuration file to a repository, you can manage tools for the repository with aqua. aqua manages tool versions declaratively, so you always only have to execute the same command. So new contributors can set up quickly and you can update tools easily. You don\u2019t have to maintain the document about required tools and you don\u2019t have to investigate how to install them.\\n\\n## Install tools managed in the private GitHub Repositories\\n\\naqua supports installing tools from the private GitHub Repositories. It\u2019s useful to distribute your organization\u2019s private tools.\\n\\n## Use aqua in CI\\n\\nThere are GitHub Actions and CircleCI Orb for aqua, so you can install tools with aqua easily in CI too. You can use the same version in both local development and CI.\\n\\nBy the way, many GitHub Actions install the tool automatically before executing it. It\u2019s very easy to use, but there are some problems.\\n\\n* Some GitHub Actions don\u2019t force to pin tool versions, which may cause the problem due to the difference of tool version\\n* When you specify tool version in inputs, you have to update it continuously but it\u2019s not easy\\n* You can\u2019t install tools in your laptop for local development with GitHub Actions. You have to install tools by the other way\\n* It\u2019s difficult to unify tool versions in local development and CI\\n\\naqua solves the above problems.\\n\\n* aqua forces to pin tool versions\\n* With Renovate Preset Config for aqua, you can update tools easily with Renovate\\n* aqua supports both local development and CI\\n* You can use the same configuration in both local development and CI, so you can unify tool versions easily\\n\\n## Registry\\n\\nRegistry is aqua\u2019s mechanism to manage the list of installable tools and how to install them. Registry is a simple YAML. You can write Registry in aqua configuration, or you can read it from other local files and GitHub Repositories. You can manage private Registry in private GitHub Repository.\\n\\nWe maintain the Standard Registry and you can install tools in the Registry easily without writing Registry by your self.\\n\\n## Conclusion\\n\\nIn this post, I introduced the CLI tool aqua, which manages CLI tool version with YAML. Let\u2019s try Quick Start."},{"id":"/2021/09/08/introduction","metadata":{"permalink":"/blog/2021/09/08/introduction","source":"@site/blog/2021-09-08-introduction.md","title":"aqua - Declarative CLI Version Manager","description":"Original Post//dev.to/suzukishunsuke/aqua-declarative-cli-version-manager-1ibe","date":"2021-09-08T00:32:46.000Z","formattedDate":"September 8, 2021","tags":[],"readingTime":5.165,"truncated":false,"authors":[{"name":"Shunsuke Suzuki","title":"SRE / OSS Contributor / Tool Maker / Go / Terraform","url":"https://github.com/suzuki-shunsuke","imageURL":"https://github.com/suzuki-shunsuke.png","key":"suzuki-shunsuke"}],"frontMatter":{"title":"aqua - Declarative CLI Version Manager","date":"2021-09-08T00:32:46.000Z","authors":["suzuki-shunsuke"]},"prevItem":{"title":"Manage CLI tool version with aqua","permalink":"/blog/2021/12/04/aqua-overview"}},"content":"<head>\\n  <link rel=\\"canonical\\" href=\\"https://dev.to/suzukishunsuke/aqua-declarative-cli-version-manager-1ibe\\" />\\n</head>\\n\\nOriginal Post: https://dev.to/suzukishunsuke/aqua-declarative-cli-version-manager-1ibe\\n\\nIn this post, I introduce [aqua](https://aquaproj.github.io), which is a declarative CLI Version Manager. \\nYou can install CLI tools and manage their versions with YAML declaratively.\\nMainly the following use cases are assumed.\\n\\n* Install tools in CI/CD\\n* Install tools for repository\'s local development\\n* Install tools in your laptop\\n\\naqua supports the `Lazy Install` and Sharable Configuration mechanism named `Registry`.\\nCompared to other package manager like `Homebrew`, aqua supports switching tool versions per `aqua.yaml`.\\nOf course, you can use aqua with other package managers too.\\n\\nYou can install aqua with [aqua-installer](https://github.com/aquaproj/aqua-installer).\\n\\n```console\\n$ curl -sSfL \\\\\\n  https://raw.githubusercontent.com/aquaproj/aqua-installer/v1.0.0/aqua-installer |\\n  bash -s -- -i ~/bin/aqua -v v1.9.0\\n```\\n\\nYou can install aqua with Homebrew too.\\n\\n```console\\n$ brew install aquparoj/aqua/aqua\\n```\\n\\nFor example, let\'s install jq with aqua. Write the following `aqua.yaml`.\\n\\n```yaml\\nregistries:\\n- type: standard\\n  ref: v2.19.0 # renovate: depName=aquaproj/aqua-registry\\npackages:\\n- name: stedolan/jq\\n  version: jq-1.5\\n```\\n\\nAnd run `aqua i -l`.\\n\\n```console\\n$ aqua i -l\\n```\\n\\nThe option `-l` is important. By this option, the symbolic links are created in `~/.aqua/bin` but the downloading tools is skipped.\\nThis is the feature named `Lazy Install`.\\n\\nTools are installed in `~/.local/share/aquaproj-aqua`. Let\'s add `~/.local/share/aquaproj-aqua/bin` to the environment variable `PATH`.\\n\\n```console\\n$ export PATH=$HOME/.local/share/aquaproj-aqua/bin:$PATH\\n```\\n\\nLet\'s check if jq installed correctly.\\n\\n```console\\n$ jq --version\\nINFO[0000] download and unarchive the package            package_name=jq package_version=jq-1.5 program=aqua registry=standard\\njq-1.5\\n```\\n\\nThe output `INFO[0000] download and unarchive the package            package_name=jq package_version=jq-1.5 program=aqua registry=standard` indicates that jq is installed automatically before jq is executed.\\n\\naqua searches the configuration file `[.]aqua.y[a]ml` from the current directory to the root directory.\\n\\n```console\\n$ cd foo\\n$ jq --version\\njq-1.5\\n\\n$ cd ../..\\n$ jq --version\\nFATA[0000] aqua failed                                   error=\\"command is not found\\" exe_name=jq program=aqua\\n```\\n\\nLet\'s update jq from 1.5 to 1.6.\\n\\n```yaml\\npackages:\\n- name: stedolan/jq\\n  version: jq-1.6\\n```\\n\\nAnd run `jq --version`.\\nBefore jq is executed, jq is installed automatically.\\n\\n```console\\n$ jq --version\\nINFO[0000] download and unarchive the package            package_name=jq package_version=jq-1.6 program=aqua registry=standard\\njq-1.6\\n```\\n\\nLet\'s downgrade jq from 1.6 to 1.5.\\n\\n```yaml\\npackages:\\n- name: stedolan/jq\\n  version: jq-1.5\\n```\\n\\n```console\\n$ jq --version\\njq-1.5\\n```\\n\\nThe version of tool is changed seamlessly.\\nYou don\'t have to execute `aqua`.\\n\\nBy adding `aqua.yaml` in each Git repositories, you can manage tools for each repositories.\\nDevelopers can use the same version, which prevents the problem due to the difference of tool versions.\\naqua supports both MacOS and Linux, so even if you are working on MacOS and CI is run on Linux, you can manage tools with the same aqua.yaml.\\n\\naqua installs tools in `~/.local/share/aquaproj-aqua` and shares tools across multiple `aqua.yaml`, so the same version of the same tool is installed only at once.\\nIt saves time and disk usage.\\n\\naqua supports the Global configuration.\\nThis is useful to install tools in your laptop regardless the specific project.\\nLike `dotfiles`, it is good to manage the Global Configuration with Git and share it with your multiple laptops.\\n\\n## Registry\\n\\naqua supports the Sharable Configuration mechanism named `Registry`.\\n\\nYou can install jq with the simple configuration.\\n\\n```yaml\\nregistries:\\n- type: standard\\n  ref: v2.19.0\\n\\npackages:\\n- name: stedolan/jq\\n  version: jq-1.5\\n```\\n\\nIn the above configuration, the [Standard Registry](https://github.com/aquaproj/aqua-registry) is being used.\\nThe Standard Registry is the Registry maintained by aqua\'s maintainers.\\n\\nPlease see the configuration.\\n\\nhttps://github.com/aquaproj/aqua-registry/blob/v2.19.0/pkgs/stedolan/jq/registry.yaml\\n\\n```yaml\\npackages:\\n  - type: github_release\\n    repo_owner: stedolan\\n    repo_name: jq\\n    asset: \\"jq-{{.OS}}\\"\\n    format: raw\\n    description: Command-line JSON processor\\n    replacements:\\n      darwin: osx-amd64\\n      linux: linux64\\n      windows: win64.exe\\n```\\n\\nThis is the configuration to download jq from GitHub Releases.\\nUsing the Standard Registry, you can install tools very easily without complicated configuration.\\n\\nYou can search the tool from the Registries with `aqua g` command.\\nPlease add the Registries to your aqua.yaml\'s registries, and run `aqua g`.\\n\\n```yaml\\nregistries:\\n- type: standard\\n  ref: v2.19.0\\n```\\n\\n```console\\n$ aqua g\\n```\\n\\n`aqua g` launches the interactive UI and you can search the package by fuzzy search.\\n\\n```console\\n  influxdata/influx-cli (standard) (influx)                     \u250c \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500\\n  newrelic/newrelic-cli (standard) (newrelic)                   \u2502  cli/cli\\n  pivotal-cf/pivnet-cli (standard) (pivnet)                     \u2502\\n  scaleway/scaleway-cli (standard) (scw)                        \u2502  https://github.com/cli/cli\\n  tfmigrator/cli (standard) (tfmigrator)                        \u2502  GitHub\u2019cs official command line tool\\n  aws/copilot-cli (standard) (copilot)                          \u2502\\n  create-go-app/cli (standard) (cgapp)                          \u2502\\n  harness/drone-cli (standard) (drone)                          \u2502\\n  sigstore/rekor (standard) (rekor-cli)                         \u2502\\n  getsentry/sentry-cli (standard)                               \u2502\\n  grafana/loki/logcli (standard)                                \u2502\\n  knative/client (standard) (kn)                                \u2502\\n  rancher/cli (standard) (rancher)                              \u2502\\n  tektoncd/cli (standard) (tkn)                                 \u2502\\n  civo/cli (standard) (civo)                                    \u2502\\n  dapr/cli (standard) (dapr)                                    \u2502\\n  mongodb/mongocli (standard)                                   \u2502\\n  openfaas/faas-cli (standard)                                  \u2502\\n> cli/cli (standard) (gh)                                       \u2502\\n  50/433                                                        \u2502\\n> cli                                                           \u2514 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500\\n```\\n\\nIf the tool you need isn\'t found, please create the issue or send the pull request to the [Standard Registry](https://github.com/aquaproj/aqua-registry)!\\nBy adding various packages to the Standard Registry, aqua becomes more useful and attractive.\\nYour contribution is needed!\\n\\nIt is also easy to create your own Registries.\\nJust create GitHub Repositories and add Registry Configuration like [the Standard Registry](https://github.com/aquaproj/aqua-registry/blob/main/registry.yaml) and add it to `aqua.yaml`\'s registries.\\nThe private repository is also supported.\\n\\ne.g.\\n\\n```yaml\\nregistries:\\n  - name: aquaproj/aqua-registry\\n    type: github_content\\n    repo_owner: aquaproj\\n    repo_name: aqua-registry\\n    ref: v2.19.0\\n    path: registry.yaml\\n```\\n\\n## Cotinuous update by Renovate\\n\\naqua manages package and registry versions,\\nso it is important to update them continuously.\\naqua doesn\'t provide sub commands like `aqua update` or options like `aqua install --update`.\\nIt is recommended to manage `aqua.yaml` with Git and update versions by [Renovate](https://docs.renovatebot.com/).\\n\\nUsing Renovate\'s [Regex Manager](https://docs.renovatebot.com/modules/manager/regex/), you can update versions.\\n\\nThe Renovate Preset Configuration https://github.com/aquaproj/aqua-renovate-config is useful.\\nFor the detail, please see the [README](https://github.com/aquaproj/aqua-renovate-config).\\n\\n## Summary\\n\\nIn this post, I introduced [aqua](https://aquaproj.github.io), which is a declarative CLI Version Manager. \\nYou can install CLI tools and manage their versions with YAML declaratively.\\naqua supports the `Lazy Install` and Sharable Configuration mechanism named `Registry`.\\n\\nYou can search tools from Registries by `aqua g` command.\\nIf the tool you need isn\'t found, please create the issue or send the pull request to the [Standard Registry](https://github.com/aquaproj/aqua-registry)!\\nBy adding various packages to the Standard Registry, aqua becomes more useful and attractive.\\nYour contribution is needed!"}]}')}}]);
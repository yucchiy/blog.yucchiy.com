---
type: "tech"
title: "Unity Cloud Buildでビルド後に独自のスクリプトを差し込む、成果物(ipa/apkなど)をAppCenterにアップロードする"
description: "Unity Cloud BuildのPost-Build Scriptの紹介と、これを用いてipaやapkなどの成果物をAppCenterにアップロードする方法について解説します。"
tags: ["Unity"]
date: "2022-12-11T15:00:00"

---

「[Applibot Advent Calendar 2022](https://qiita.com/advent-calendar/2022/applibot)」 12日目の記事です。



Unityで制作したアプリを自動でビルドするための環境構築として、Jenkinsを構築したりGitHub Actionsを用いたりする方法などたくさんありますが、サクッとビルド環境を整えたい場合、Unity公式が提供するUnity Cloud Build（以後UCBと呼びます）を利用するのがお手軽です。

また、UCBにはPre-Build ScriptとPost-Build Scriptという仕組みがあり、シェルスクリプトによる追加の処理をUnityのビルド前後に差し込めます。これによってビルド成果物に対してなにかの処理を施したり各種ベータ配信サービスへのアップロードなどを自動化できます。

本記事ではUCBでビルドした成果物を、Microsoftが提供する[AppCenter](https://appcenter.ms/)にアップロードする操作を、Post-Build Scriptによって自動化してみます。

## UCBのPost-Build Scriptについて

冒頭で軽く触れましたが、UCBにはPost-Build Scriptという仕組みがあります。

ビルド設定の「Advanced settings > Script hooks」に「Post-build script」という項目があるので、ここにビルド後に実行したいスクリプトのパスを指定することで、そのスクリプトがUnityビルド後に実行されます。

![](./382A2FAE13E16129540780FE0526F6CA.png)

ちなみに「Post-build script」下にある「Mark build as failed if the post-build script has a non-zero exit code」は項目名どおり、指定したスクリプトを実行した結果、その戻り値が0以外の場合にビルドを失敗にします。指定するスクリプトの処理次第ですが、追加した処理がすべて正常に終わったことを含めてビルドの成功としたい場合はこの設定にチェックを入れて、かつスクリプトの冒頭に下記の設定を入れると良いでしょう。（参考: [Safer bash scripts with 'set -euxo pipefail' · vaneyckt.io](https://vaneyckt.io/posts/safer_bash_scripts_with_set_euxo_pipefail/)）

```shell
set -euxo pipefail
```


## ビルドスクリプトの管理

Post-Build Scriptで利用するスクリプトは、下記のように管理することにします。

```plain text
repository-root
├── unity-project-root
└── .ci
```


`repository-root` がチェックアウトされるレポジトリのルートディレクトリ、 `unity-project-root` がUnityプロジェクトのルートディレクトリです。

Unityプロジェクトが格納されているディレクトリと同じ階層に`.ci`というディレクトリを配置し、その中に必要なスクリプトなどを配置します。

もちろん、レポジトリのルート直下にUnityプロジェクトルートを展開する場合、その配下に`.ci`を配置するなどのカスタマイズは問題ありません。

## UCBが設定済みの環境変数の一覧

スクリプトから成果物を扱うには、ビルドに関する情報をスクリプトから扱う必要があります。これらの情報は、UCBが設定する環境変数を介してアクセスできます。

UCBが設定する環境変数はこちらの「[Environment Variables for UCB](https://unity-technologies.github.io/cloud-build-docs-public/environment-variables)」より確認できます。

今回必要な成果物の出力されるパスは `UNITY_PLAYER_PATH` に格納されています。

## UCBのビルドマシンで利用できるツールの確認

AppCenterへ成果物をアップロードするために、UCB上でどのようなツールが利用できるか確認します。

Microsoftからは下記のツールを提供しているので、下記のツールを使ってAppCenterへのアップロードを行う前提で、FastlaneとNode.jsがそれぞれ利用できるか確認します。

* [microsoft/appcenter-cli: Command-line Interface (CLI) for Visual Studio App Center](https://github.com/microsoft/appcenter-cli)
* [microsoft/fastlane-plugin-appcenter: App Center fastlane integration.](https://github.com/microsoft/fastlane-plugin-appcenter)
ちなみに、UCB上にインストール済みのツールはドキュメントに明記されていないため、ビルドログやビルドスクリプト経由で必要な情報を出力しながらの確認になります。

まずFastlaneについては、[定義済みの環境変数にFastlaneの記述があったり](https://unity-technologies.github.io/cloud-build-docs-public/environment-variables)、[iOSのXcodeビルドにGymfileが利用できる](https://docs.unity3d.com/Manual/UnityCloudBuildGymfile.html)ことから、UCBはビルドパイプラインの構築にFastlaneを利用していることが推測できます。そのためFastlaneは、メジャーアップデートなどでシステムが刷新されない限りは安定して利用できるでしょう。

また、ビルドマシン上で printenv コマンドを実行すると `NVM_DIR` などの環境変数が利用できることから、一応Node.jsも利用できます。が、こちらは確実にビルドシステムが依存している、ドキュメントなどでも記載がないので、もしかするとシステムのアップデートで利用できなくなる可能性はあるかも知れません。

ビルドマシン上で確認する限り、下記のツールは利用できそうです。

* Fastlane
    * これにともないRubyも
* Python
    * `pyenv` 経由でのインストール
* Node.js
    * `nvm` 経由でのインストール
本記事では、Node.jsと [microsoft/appcenter-cli](https://github.com/microsoft/appcenter-cli) を用いてAppCenterへのアップロードを行います。

## microsoft/appcenter-cliのインストールと利用方法

 [microsoft/appcenter-cli](https://github.com/microsoft/appcenter-cli) のインストールは `npm` 経由で行います。

`.ci` 以下にツールをインストールしたいので、今回は `package.json` を配置してその中に `appcenter-cli` の依存を記述し、 `npm install` を行うことでインストールしました。

```json
{
    "name": "test-ci",
    "scripts": {
      "appcenter:distribute:release": "$(npm bin)/appcenter distribute release"
    },
    "dependencies": {
      "appcenter-cli": "^2.1.1"
    }
}
```


`.ci` 以下で下記コマンドを実行することで、appcenter-cli経由で成果物をアップロードできるようになります。

```shell
npm run appcenter:distribute:release --
    --disable-telemetry --silent
    --file "${UNITY_PLAYER_PATH}" 
    --app "${APPCENTER_APPLICATION}"
    --group "${APPCENTER_DISTRIBUTION_GROUP}"
```


上記コマンドで指定している `APPCENTER_APPLICATION` はAppCenterのアップロード先、 `APPCENTER_DISTRIBUTION_GROUP` は配布先のグループになるため、事前に作成したものを指定します。

また、環境変数に`APPCENTER_ACCESS_TOKEN`を指定しておくことで、appcenter-cliがAPI認証にこのトークンを利用するようになります。こちらも事前に取得しておきます。

これらの値はビルドごとにアップロード先などを切り替えたいことが多いので、「Advanced settings > Environment variables」に下記のように外から設定することにします。

![](./435DC7173A89A4D8D42A55AE7C38D5CE.png)

ただし`APPCENTER_ACCESS_TOKEN` は本来であればGitHubであればSecrets、JenkinsであればCredentialsのように**機密情報として扱いたいのですが、UCBではユーザーが設定する環境変数はそのような扱いができないので**今回はこのように設定しています。

そのため、実運用には管理者（この設定を行えるユーザー）を絞るなどの工夫が必要になります。

## Post-Build Scriptの実装

スクリプトを実装するための材料が揃ったので、Post-Build Scriptの実装の全文を示します。

Post-Build Scriptで実行するスクリプトを `.ci` 以下に `post-build-script.sh` というファイル名で配置し、 `package.json` も同ディレクトリ下に配置します。ディレクトリ構成は下記のとおりです。

```plain text
repository-root
├── unity-project-root
└── .ci
    ├── post-build-script.sh
    └── package.json
```


`package.json` の全文は下記のとおりです。

```json
{
    "name": "test-ci",
    "scripts": {
      "appcenter:distribute:release": "$(npm bin)/appcenter distribute release"
    },
    "dependencies": {
      "appcenter-cli": "^2.1.1"
    }
}
```


`post-build-script.sh` の全文を示します。

```shell
#!/usr/bin/env sh

set -euxo pipefail

# post-build-script.sh が入っている
# ディレクトリに移動
dir=`dirname $0`
cd "${dir}"

# APPCENTERで使うパラメータを環境変数に設定
export APPCENTER_UPLOAD_FILE="${UNITY_PLAYER_PATH}"
export APPCENTER_RELEASE_NOTES="**Project** : ${PROJECT_ID}, **Build Target** : ${BUILD_TARGET}, **Build Number** : ${UCB_BUILD_NUMBER}, **Git Revision** : ${BUILD_REVISION}"

# appcenter-cliを利用するためのセットアップ
npm install

# appcenter-cli経由で成果物アップロード
npm run appcenter:distribute:release --\
    --disable-telemetry --silent\
    --file "${APPCENTER_UPLOAD_FILE}"\
    --app "${APPCENTER_APPLICATION}"\
    --release-notes "${APPCENTER_RELEASE_NOTES}"\
    --group "${APPCENTER_DISTRIBUTION_GROUP}"
```


## まとめ

UCBのPost-Build Scriptの紹介と、この機能の実例としてAppCenterへの成果物のアップロードの方法について紹介しました。

いくつかの設定でサクッとアプリビルド環境を構築できるのと、Pre/Post-Build Scriptの活用である程度柔軟なビルドパイプラインが組めるので、本格的なビルド環境を構築するまでにサクッとアプリビルド環境を用意したいなどの用途などではかなりありな選択肢なのかな、と個人的には思っています。

この情報がUCBでのビルド環境構築の参考になれば幸いです。




---
type: "tech"
title: "C#でCustom GitHub Actionを書く"
description: "C#でCustom GitHub Actionを実装する方法について、notion-to-markdownというツールの実装を交えて紹介します。"
tags: ["C#","GitHub Actions"]
date: "2022-05-30T07:00:00"

---

「[Notionでブログを書く](https://blog.yucchiy.com/2022/05/blogging-with-notion/)」で紹介した通り、[notion-to-markdown](https://github.com/yucchiy/notion-to-markdown)というアクションの処理はC#で実装しています。



この実装を題材に、C#製のCLIアプリケーションを用いてCustom GitHub Actionを作成する方法について紹介します。



実装に当たってMicrosoftのドキュメント「[Tutorial: Create a GitHub Action with .NET](https://docs.microsoft.com/en-us/dotnet/devops/create-dotnet-github-action)」を参考にしています。（特に、C#を動かすためのDockerイメージの作成はほぼそのまま利用しています。）

## C#でGitHub Actionsの処理を書く

まずはC#でアクションの処理を実装します。基本的には、コンソールアプリケーションのテンプレートを用いて実装することになります。



最近のC#では[top-level statement](https://blog.yucchiy.com/2021/01/top-level-statements-in-csharp9/)やglobal usingをサポートしたので、エントリーポイントとなるクラスやメソッドやusingを一部省略でき、結構スッキリ処理をかけると思います。



外部からの入力は、標準入力や環境変数などから受け取れます。notion-to-markdownではNotionのAPIを叩くトークンや対象となるデータベースID、出力のパスを下記のように標準入力で渡しています。

```csharp
// from CLI
var notionAuthToken = args[0];
var notionDatabaseId = args[1];
var outputDirectoryPathTemplate = args[2];
```


コマンドライン引数のパースが複雑になる場合は、[System.Commandline](https://docs.microsoft.com/en-us/dotnet/standard/commandline/)や[ConsoleAppFramework](https://github.com/Cysharp/ConsoleAppFramework)などの利用を検討してもいいですが、GitHub Actionでそこまで複雑な引数を受け取るような入力を定義したくなったら、そもそも別アクションを検討した方が全体的にスッキリするかもしれません。



後続のステップに何かしらの値を渡したい場合は、標準出力に下記のような文字列を出力しておきます。notion-to-markdownではNotionのデータベースから実際にエクスポートしたMarkdown数を、下記のように出力しています。

```csharp
Console.WriteLine($"::set-output name=exported_count::{exportedCount}");
```


上記のように出力しておくことで、後続のステップでは下記のように定義することで、出力した値を `if: ${{ steps.export.outputs.exported_count != '0'}}` のように参照できます。

```csharp
- name: Export The Notion Database to local markdown files.
  id: export
  uses: yucchiy/notion-to-markdown@v0.2.1
  with:
    notion_auth_token: ${{ secrets.NOTION_AUTH_TOKEN }}
    notion_database_id: ${{ secrets.NOTION_DATABASE_ID }}
    output_directory_path_template: "./src/pages/{{publish|date.to_string('%Y/%m')}}/{{slug}}"
- name: Commit exported markdown files
  if: ${{ steps.export.outputs.exported_count != '0'}}
  run: |
    git config --local user.email "41898282+github-actions[bot]@users.noreply.github.com"
    git config --local user.name "github-actions[bot]"
    git add ./src/pages
    git commit -m "Import files from notion database"
```


## GitHub Action上でC#を動かす

GitHub Actionsは、[こちらの環境](https://github.com/actions/virtual-environments)からアプリケーションの実行環境を選択できます。それぞれの環境にプリインストールされているソフトウェアは、表中の右の「Included Softwawe」のリンクから確認できます。



例えば、ubuntu 22.04にプリインストールされているソフトウェアは[こちら](https://github.com/actions/virtual-environments/blob/main/images/linux/Ubuntu2204-Readme.md)から確認できます。



上記環境に用意されていないランタイムやツールが必要な場合は、Dockerfileを用意することで、任意の言語やツールが実行できる環境を構築できます。



ubuntu22.04にはdotnetのランタイムがインストールされているので、そのままでもC#を実行できますが、今回はDockerfileを用意して独自の環境を作成し、その中でアプリをビルドして実行してみます。



Dockerイメージは、大きく分けてアプリケーションのビルドと、ビルドしたアプリの実行に分かれます。



下記にDockerfileのうちの主要な処理を抜粋します。まずはアプリケーションのビルド部分です。

```docker
FROM mcr.microsoft.com/dotnet/sdk:6.0 as build-env

# Copy everything and publish the release (publish implicitly restores and builds)
WORKDIR /app
COPY . ./
RUN dotnet publish ./notion-to-markdown.csproj -c Release -o out --no-self-contained
```


適当なディレクトリをワークディレクトリとして（今回は `/app` ）、アプリケーションをフレームワーク依存の実行ファイルとしてビルドします。



次にアプリケーションの実行部分です。

```docker
# Relayer the .NET SDK, anew with the build output
FROM mcr.microsoft.com/dotnet/sdk:6.0
COPY --from=build-env /app/out .
ENTRYPOINT [ "dotnet", "/notion-to-markdown.dll" ]
```


先程ビルドしたファイルをコピーし、dotnetコマンドラインで実行しているだけです。



作成したDockerfileをGitHub Actionsで実行するには、 `action.yml` の image に作成したDockerfileを指定します。

```yaml
runs:
  using: docker
  image: Dockerfile
```


## action.ymlの定義

最後に、Custom GitHub Actionを定義するために `action.yml` を用意します。このファイルでは大きく分けて下記を定義します。



* アクション名や説明などの情報。
*  `inputs` : このアクションに渡す入力一覧。このアクションを利用するワークフローから入力を渡す。 `required: true`が定義されている場合は、渡さないとエラーとなる。
* `outputs` : このアクションの出力。アプリケーションが `::set-output name=output_name::output_value` という形式で標準出力に出力している場合、 `output_name` という出力を定義することで出力された値を参照できる。
* `runs` : このアクションを実行する環境やアクションに渡すコマンドライン引数、環境変数を定義する。


notion-to-markdownでは下記のような `action.yml` を定義しています。先述の通り、入力でNotionのトークンやデータベースID、出力パスを定義し、そのままコマンドライン引数として渡しています（ `runs.args` 部分）。

```yaml
name: notion-to-markdown
description: Custom action to export Notion database to local markdown files.
inputs:
  notion_auth_token:
    description: Auth token of the notion.
    required: true
  notion_database_id:
    description: ID of the notion database to be exported.
    required: true
  output_directory_path_template:
    description: Directory path template to output files.
    required: false
    default: output/{{publish|date.to_string('%Y/%m')}}/{{slug}}
outputs:
  exported_count:
    description: Number of exported files.
runs:
  using: docker
  image: Dockerfile
  args:
    - ${{ inputs.notion_auth_token }}
    - ${{ inputs.notion_database_id }}
    - ${{ inputs.output_directory_path_template }}
```




上記のアクションを、下記のようなワークフローを定義して利用しています。

```yaml
name: import

on:
  schedule:
    - cron: '0/10 * * * *'
  workflow_dispatch:

jobs:
  import_markdown:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2.4.2
        with:
          token: ${{ secrets.MY_GITHUB_TOKEN }}
      - name: Export The Notion Database to local markdown files.
        id: export
        uses: yucchiy/notion-to-markdown@v0.2.1
        with:
          notion_auth_token: ${{ secrets.NOTION_AUTH_TOKEN }}
          notion_database_id: ${{ secrets.NOTION_DATABASE_ID }}
          output_directory_path_template: "./src/pages/{{publish|date.to_string('%Y/%m')}}/{{slug}}"
      - name: Commit exported markdown files
        if: ${{ steps.export.outputs.exported_count != '0'}}
        run: |
          git config --local user.email "41898282+github-actions[bot]@users.noreply.github.com"
          git config --local user.name "github-actions[bot]"
          git add ./src/pages
          git commit -m "Import files from notion database"
      - name: Push markdown files
        uses: ad-m/github-push-action@master
        with:
          github_token: ${{ secrets.MY_GITHUB_TOKEN }}
          branch: ${{ github.ref }}
```


## まとめ

Custom GitHub Actionを、C#で実装する方法について紹介しました。


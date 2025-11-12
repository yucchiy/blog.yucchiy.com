---
title: Notionでブログを書く
description: Gatsby.jsで作成しているこのブログの執筆から投稿までをNotionで行えるようにしました。この対応について紹介します。
pubDatetime: 2022-05-27T08:00:00.000Z
tags:
  - ブログ環境
  - Notion
  - C#
  - GitHub Actions
---

最近はNotionでブログを書いて、そこからMarkdownでエクスポートし、それを**手作業で**ブログレポジトリにプッシュしていました。

流石に効率が悪いなと思っていたのと、「[Googleドキュメントでブログを書く](https://r7kamura.com/articles/2022-04-30-google-docs-for-blogging)」という記事を読んで、そのワークフローがとても参考になったので、自分のブログもNotionでブログを書けるようにしてみました。

## ブログ投稿までの流れ

大まかには下記の流れで、記事執筆からブログ更新までをおこなうようにしました。

1. Notion（のデータベース）に記事を執筆する。執筆が完了したら、記事投稿用のチェックを入れる。
1. 定期スケジュールされたGitHub Actionsで、1. からmarkdownを書き出し、ブログレポジトリの記事用ディレクトリにプッシュする。
1. ブログレポジトリへのプッシュをトリガーに、記事をデプロイする。

**ブログ執筆から投稿までをNotionの操作で完結させたかった**ので、投稿したい記事を示すチェックボックスをプロパティに設けることにしました。定期的に、そのプロパティにチェックが入った記事のみを書き出すようにしています。

ブログレポジトリはgitで管理されているため、Notionデータベース内の全記事を書き出して、gitとして差分があれば更新でもよかったんですが、記事を書き出すのに結構な回数APIを叩く必要があり、若干無駄に感じました。

あとそもそも定期チェックで記事を投稿するので、執筆中の記事が勝手に上がってしまうのは嫌なのと、そのために下書きフラグを１つ持つのであれば、更新フラグを１つ持つのとコストは変わらないな、と思いこの方式にしました。

## notion-to-markdown

[notion-to-markdown](https://github.com/yucchiy/notion-to-markdown)は、markdownをローカルに書き出すCustom GitHub Actionsです。

ブログレポジトリへの記事のプッシュは、下記のアクションを定義することで実現しています。

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
      - uses: actions/checkout@v2
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
        if: ${{ steps.export.outputs.exported_count != '0' || steps.export_unity_weekly.outputs.exported_count != '0' }}
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

上記コードのように、notion-to-markdownを実行して、書き出されたファイル数が１つでもあればコミット＆プッシュを行うようにしています。

実装はC#で行い、Notionライブラリには[notion-dotnet/notion-sdk-net](https://github.com/notion-dotnet/notion-sdk-net)を用いました。（この辺は別記事で）

## なぜNotionか？

このブログは [Gatsby.js で静的ファイルを書き出すことで記事をブログを投稿しています](https://blog.yucchiy.com/2020/02/deployment-to-self-hosted-server-for-gatsbyjs/)。特定のディレクトリ階層下にmarkdownファイル（と画像などのアセット）を配置し、ビルドコマンドでhtmlやjs、GraphQLファイルを吐き出し、それをデプロイしています。

一時期、[この記事](https://neue.cc/2021/11/21.html)を参考にGitHub web-based editorで記事で直接レポジトリ上でmarkdownファイルを編集していて、それはそれで便利（ローカルに Gatsby.js 環境を構築する必要がないため）だったのですが、ブログ執筆ごとに特定ディレクトリを掘ったりするのが面倒でした。

あと、特に画像の貼り付けるのにディレクトリに画像を配置して、そのパスをコピーするのが結構面倒でした。Notion だと画像の貼り付けは楽なのと、notion-to-markdownでは画像の書き出してて、相対パスで記事中にリンクするようにしたので、かなり体験が良くなりました。

また、地味にですが、スマホから記事が書けるのも体験として良いです。ガッツリ全部書き切るというより、思いついた時に記事の大枠をスマホで書いておき、あとでPCで細かいところと肉付けするみたいなやり方が、コロナが収束し始めて通勤時間が増えてきた今、隙間時間の使い方に良くマッチしている気がします。

## まとめ

notion-to-markdown によるnotionを用いたブログ執筆について紹介しました。



これでより記事が書きやすくなったため、記事執筆数も増えるはず…。


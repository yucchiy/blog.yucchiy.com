---
type: "memo"
title: "Notionインポートテスト"
description: "これはNotionからインポートした記事を、GitHub Actions経由で投稿しています。"
tags: ["Notion"]
date: "2022-04-01T00:00:00"

---

![](./761352A33870E48E74FA2534896C486B.jpeg)



この記事は、Notionからインポートした記事です。

Notionインポートをテストする目的で投稿しています。



### 作業ログ

* notion-to-markdownの `outputs` に、実際にmarkdownとして出力したファイル数を出力するようにしました。
* Markdownのインポートタスクを、markdownが実際に書き出されたときのみ行うようにしました。
* エクスポート用の `GITHUB_TOKEN` に Personal Access Token（PAT）を利用するようにした。
    * 使い方修正しました。
    * こちらを参考にさらに修正
        * [https://github.com/stefanzweifel/git-auto-commit-action](https://github.com/stefanzweifel/git-auto-commit-action)


### 参考

* [Googleドキュメントでブログを書く](https://r7kamura.com/articles/2022-04-30-google-docs-for-blogging)
* [Tutorial: Create a GitHub Action with .NET | Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/devops/create-dotnet-github-action)
* [GitHub Actions入門 ── ワークフローの基本的な構造からOIDCによる外部サービス認証まで - エンジニアHub｜Webエンジニアのキャリアを考える！](https://eh-career.com/engineerhub/entry/2022/05/20/093000)



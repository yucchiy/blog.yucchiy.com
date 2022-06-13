---
type: "unity-weekly"
title: "Octasphere、Github ActionsによるUnityビルド環境構築、Unity x WebGLテストTips - Unity Weekly #067"
date: "2022-05-09T08:00:00+09:00"
draft: false
tags: ["Unity", "Unity Weekly"]

---

# Articles

## Octasphere

[Octasphere](https://catlikecoding.com/unity/tutorials/procedural-meshes/octasphere/)

Catlike Codingの[Procedural Meshesシリーズ記事](https://catlikecoding.com/unity/tutorials/procedural-meshes/)です。

Cube SphereとUV Sphereを組み合わせたような、ひし形を折って八面体を作り球体を構築するOctasphereについて、実装方法を解説しています。

## AWSを使ったクラウドUnityビルド環境の構築～GitHub Actions構築編～

[AWSを使ったクラウドUnityビルド環境の構築～GitHub Actions構築編～ - Synamon’s Engineer blog](https://synamon.hatenablog.com/entry/2022/05/02/180000)

AWS上で、Unityアプリのビルド環境を構築する方法について紹介しています。

連載形式となっていて、過去記事は下記で確認できます。

- [https://synamon.hatenablog.com/entry/2022/03/29/190000](https://synamon.hatenablog.com/entry/2022/03/29/190000)
- [https://synamon.hatenablog.com/entry/2022/04/13/174034](https://synamon.hatenablog.com/entry/2022/04/13/174034)
- [https://synamon.hatenablog.com/entry/2022/04/20/190000](https://synamon.hatenablog.com/entry/2022/04/20/190000)

この記事ではGithub Actionsを用いて、Unityプロジェクトを管理するレポジトリにプッシュが行われたら、自動でテストとアプリビルドを行うWorkflowを構築する方法について解説しています。

## Unity x WebGLのテストTips

[Unity x WebGLのテストTips - やらなイカ？](https://www.nowsprinting.com/entry/2022/05/02/211858)

UnityのWebGLプラットフォームでのUnity Test Frameworkの制限についてまとめています。

WebGLプラットフォーム上ではテスト実行結果がTest Runnerに反映されない点、利用できない属性、Unity Test Framework v2での制限事項についてそれぞれ紹介しています。

## Metamesh/Metatex

[単色、グラデーション、絵文字等の簡単な画像をUnity上で生成できるMetatex【Unity】【アセット】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/Metatex)

[上下で太さの違う円柱や円、面取りした立方体等の簡単な3DモデルをUnity上で生成できるMetamesh【Unity】【アセット】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/Metamesh)

Unity上でテクスチャやメッシュ素材を作成できるMetameshとMetatexについて、その概要からインストール方法、使い方をスクリーンショット付きで紹介しています。

## 開発用ビルド時に有効になるDEVELOPMENT_BUILDとDEBUGの違い

[開発用ビルド時に有効になるDEVELOPMENT_BUILDとDEBUGの違い【Unity】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/DEVELOPMENT_BUILD_DEBUG)

Unityで、開発時のみ定義される `DEVELOPMENT_BUILD` と `DEBUG` の違いについて紹介しています。

それぞれのシンボルの定義が有効になるタイミングと、 `DEBUG` が C#（.NET）のシンボルでUnity上での挙動が変わりうるため、開発時機能のためのシンボルとしては `DEVELOPMENT_BUILD` を利用したほうが良い点についても言及しています。

## UnityのSQLite3にSQLiteUnityKit以外の選択肢～Dapper＆SqlKata編～（Windows・Android対応）

[UnityのSQLite3にSQLiteUnityKit以外の選択肢～Dapper＆SqlKata編～（Windows・Android対応） - Qiita](https://qiita.com/yaroyan/items/82c29d6afb1e66f128e7)

UnityでSQLite3を扱うライブラリとして、「SQLiteUnityKit」以外のライブラリとして「Dapper＆SqlKata」を紹介しています。

DapperとSqlKataの導入方法と、このライブラリを用いた簡単なSQLiteの操作スクリプトの実装についてそれぞれ解説しています。
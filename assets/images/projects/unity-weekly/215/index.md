---
type: unity-weekly
title: Unity Weekly 215
description: >-
  2025/03/17週のUnity Weeklyです。ZLinq、V24エフェクト制作事例紹介、Rider IL2CPPビルドデバッグ機能
  などについて取り上げています。
pubDatetime: 2025-03-16T15:00:01.000Z
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### 10 tips for succeeding at GDC

[10 tips for succeeding at GDC](https://unity.com/blog/games/10-tips-succeeding-at-gdc)

GDCを最大限に活用するためのヒントとして、明確な目標設定や事前準備、積極的なネットワーキングなどTipsを10個紹介しています。

## Repositories

### Cysharp/ZLinq

[Cysharp/ZLinq: Zero allocation LINQ with Span and LINQ to SIMD, LINQ to Tree (FileSystem, Json, GameObject, etc.) for all .NET platforms and Unity.](https://github.com/Cysharp/ZLinq)

ゼロアロケーションなLINQライブラリ ZLinq の プレビュー版である v 0.1.0 がリリースされました。

## Articles

### V24 – エフェクト制作の舞台裏

[V24 – エフェクト制作の舞台裏 │ Aiming 開発者ブログ](https://developer.aiming-inc.com/design/post-11912/)

Aimingが制作するデザイナーだけで構成されたハイエンド向けのUnityデモプロジェクト「V24」のエフェクト制作について、VFX Graphを用いてスキニングメッシュに沿ってパーティクルをエミットする機能やUnity上完結する破壊表現、などについて紹介しています。

### Rider 2024.3 なら IL2CPP ビルドのデバッグ機能で Scene の Hierarchy の情報を見られる

[【Unity】Rider 2024.3 なら IL2CPP ビルドのデバッグ機能で Scene の Hierarchy の情報を見られる - コガネブログ](https://baba-s.hatenablog.com/entry/2025/03/10/075712)

Rider2024.3から利用できるIL2CPP Debug support を用いて、デバッグビルド限定で、実機のヒエラルキーの状態をRiderのデバッグウインドウ上から確認する方法を紹介しています。

### UnityEngine.Objectの偽装null

[【Unity】UnityEngine.Objectの偽装null](https://zenn.dev/nuskey/articles/c8454ccec93dfc)

Unityが `UnityEngine.Object` の `null` チェックをオーバーライドしている挙動についてと、これによって発生する問題について説明しています。

また、Unityがなぜこのような設計を採用したかについても考察しています。

### ビヘイビアでターン制バトルの思考ルーチンをグラフで組めるようにしてみた

[[Unity] ビヘイビアでターン制バトルの思考ルーチンをグラフで組めるようにしてみた #C# - Qiita](https://qiita.com/Shinoda_Naoki/items/5b8e4a8f26816af8d744)

Unity公式のビヘイビアツリーパッケージ「[Behaviour](https://docs.unity3d.com/Packages/com.unity.behavior@1.0/manual/index.html)」を用いて、ターン制のバトルゲームの敵の思考ルーチンを実装する方法について解説しています。

### シェーダーでひびを入れる［その3：テッセレーションシェーダー編］

[【Unity】シェーダーでひびを入れる［その3：テッセレーションシェーダー編］](https://zenn.dev/lilytechlab/articles/a083aad2460432)

シェーダーをもちいた、ひびを入れる表現について、テセレーションシェーダーを用いてポリゴン分割を行う実装について紹介しています。

前回のジオメトリシェーダーを用いたひび表現については [こちら](https://zenn.dev/lilytechlab/articles/4b67cfbc44ad79) から確認できます。

### Monkey Test Helper v0.15.0 マイグレーション ガイド

[Monkey Test Helper v0.15.0 マイグレーション ガイド - やらなイカ？](https://www.nowsprinting.com/entry/2025/03/09/084029)

この記事の著者の開発する、Unity上でモンキーテストをサポートする「[Monkey Test Helper](https://github.com/nowsprinting/test-helper.monkey)」の v0.15.0 へのアップデートのためのマイグレーションガイドを公開しています。

### スプレッドシートで作成したデータを自動でScriptableObjectにしてみる

[スプレッドシートで作成したデータを自動でScriptableObjectにしてみる – 株式会社ロジカルビート](https://logicalbeat.jp/blog/18897/)

Google Spreadsheetで管理しているマスターデータを、Google App Script(GAS)を介して取得してCSVとして保存するエディター拡張の実装について紹介しています。

### EnterPlayModeでUnityエディタを爆速化しよう

[【Unity】EnterPlayModeでUnityエディタを爆速化しよう - 渋谷ほととぎす通信](https://shibuya24.info/entry/unity-enterplaymode)

「Enter Play Mode Settings」でドメインリロードを無効化することで、エディターの再生を高速化する方法の紹介と、この機能を有効にする際のコーディング上の注意点を紹介しています。

### Unity - Sentry を利用する

[Unity - Sentry を利用する - yotiky Tech Blog](https://yotiky.hatenablog.com/entry/unity_sentrysdk)

開発者向けのアプリケーションモニタリングやエラートラッキングツールを提供する Sentry の、Unity への導入方法から基本的な使い方を紹介しています。

### RiderでTODOのようなオリジナルのコメントパターンを設定し、記載した所を一覧で表示する方法

[RiderでTODOのようなオリジナルのコメントパターンを設定し、記載した所を一覧で表示する方法【JetBrains Rider】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/Rider_Original_TODO)

Riderで、特定のコメントパターンをリスト化する設定方法について紹介しています。

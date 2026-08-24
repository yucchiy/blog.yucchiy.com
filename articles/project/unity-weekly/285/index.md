---
type: unity-weekly
title: Unity Weekly 285
description: >-
  2026/08/24週のUnity Weeklyです。Unity CLI 1.0.0-beta.6、Unity Hub 3.21.0、iOS 26.4更新後のローエンドデバイスでのクラッシュ回避策などを紹介しています。
pubDatetime: 2026-08-24T09:00:00+09:00
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Unity CLI 1.0.0-beta.6 is rolling out

[Unity CLI 1.0.0-beta.6 is rolling out - Unity Editor Product Updates - Unity Discussions](https://discussions.unity.com/t/unity-cli-1-0-0-beta-6-is-rolling-out/1734486)

Unity CLI 1.0.0-beta.6のロールアウトを告知するディスカッションです。

- Breaking changes
    - `unity bug`が認証必須になり、未ログイン時はexit code 3で終了する
    - `unity test`のテスト失敗時のexit codeが8になり、6はテスト開始前の中断用に予約された
- Added
    - リポジトリ操作のGitホスティングを`gh`、`glab`、`tea`から選べるようになった
    - `unity projects clone`と`unity projects link vcs`が素のGit URLに対応した
    - プロジェクトの健全性チェックを行う`unity projects verify`コマンドが追加された
    - `unity build`でビルドのprovenance manifestを生成できるようになった
    - `unity collaboration`がdevelopmentビルド限定から全ビルドへ拡大された
    - CI向けにGitHub Actionsのannotation、キャッシュキー生成、sharding、リトライオプションが追加された
- Fixed
    - Editor・モジュールのダウンロード進捗が表示されない問題、古くなったlicensing clientの自動検出・置き換え、Androidモジュール・NDKのインストールパス、headless Editorのカウント精度、`unity auth login`のサインアウトループ、WindowsのPATH破損とPowerShell補完を修正した
- Security
    - シェル補完のエスケープと制御シーケンスインジェクションのサニタイズを実装した

### Discussions: what's changed?

[Discussions: what's changed? - Discussions Platform - Unity Discussions](https://discussions.unity.com/t/discussions-what-s-changed/1733999)

Unity Discussionsのプラットフォーム刷新で何が変わったかを紹介するディスカッションです。

- Categories and subcategories
    - フラットなカテゴリ一覧から、階層的なカテゴリ・サブカテゴリ構成へ移行した
- The New Topic button has moved
    - グローバルな新規トピック作成ボタンが廃止され、投稿先カテゴリのページから作成する方式になった
- Topics need at least three tags
    - トピック作成時に最低3つのタグ付けが必須になった
- Tags are scoped per category
    - タグがカテゴリごとのスコープを持つようになった
- Navigation
    - ホームページへのカテゴリカラーの導入、カテゴリページの見直し、ミュート機能の追加などナビゲーションが更新された
- Native Discourse features replacing custom code
    - 独自実装だった機能をDiscourseの標準機能へ置き換えた

また、変更点を通しで確認できる[video walkthrough](https://youtu.be/OAlIfd1c2bU)も用意されています。

### Now Available: Unity Hub 3.21.0

[Now Available: Unity Hub 3.21.0 - Unity Hub Product Updates - Unity Discussions](https://discussions.unity.com/t/now-available-unity-hub-3-21-0/1734183)

Unity Hub 3.21.0のリリースを告知するディスカッションです。

- Projects
    - プロジェクトへのタグ付け、Platform列、Current branch列（GitHub / GitLab / Unity Version Controlに対応）、プロジェクトリンクのコピー、Use Unity CLIチェックボックスが追加された
- Installs
    - Archiveからのバージョン検索と、インストール済みモジュールの個別の修復・削除に対応した
- General
    - Toolsメニューの追加、Unity CLIとの統合、進捗表示の改善が入り、macOS 12が非推奨になった

詳細は[release notes](https://unity.com/unity-hub/release-notes#3.21.0)にまとまっています。

### Unity Cloud Collaboration Tools (experimental)

[Unity Cloud Collaboration Tools (experimental) - DevOps Product Updates - Unity Discussions](https://discussions.unity.com/t/unity-cloud-collaboration-tools-experimental/1734008)

Unity Cloud Collaboration Tools（`com.unity.cloud.collaboration.tools` 0.2.0-exp.1）の提供開始を告知するディスカッションです。

シーン・GameObject・プロジェクトアセット上でのスレッド形式のコメント、@mentionによるチームメンバーへの通知、ファイルとスケッチの添付、Scene view内への空間マーカーの配置ができるとしています。

利用にはUnity 6000.0以上とUnity Cloudに接続済みのプロジェクトが必要で、experimentalのためAPIやワークフローは変更される可能性があり、本番パイプライン向けではないと注記しています。

また、かつてのUnity Collaborateとは別物であることも明記されています。詳細は[パッケージドキュメント](https://docs.unity3d.com/Packages/com.unity.cloud.collaboration.tools@0.2/manual/index.html)にまとまっています。

### Unity Pipeline package version 0.5.0-exp.1 is rolling out

[Unity Pipeline package version 0.5.0-exp.1 is rolling out - Unity Editor Product Updates - Unity Discussions](https://discussions.unity.com/t/unity-pipeline-package-version-0-5-0-exp-1-is-rolling-out/1734288)

Unity CLIとUnity Editorの統合を提供する`com.unity.pipeline`パッケージ0.5.0-exp.1のロールアウトを告知するディスカッションです。

- Added
    - 実行中コマンドの進捗を報告する`GET /api/progress`エンドポイントとCLIのプログレスバー
    - `POST /api/exec`の`"job": true`指定によるバックグラウンド実行
    - [Project Auditor](https://docs.unity3d.com/Manual/project-auditor/project-auditor.html)と統合した`audit` / `audit_status`コマンド
    - `/api/status`での`settling`ステータスの報告
- Changed
    - `eval`のタイムアウト上限を30秒から24時間へ拡大した
    - HTTPサーバーが並行処理に対応し、セキュリティも強化された
- Fixed
    - `executedAt`の時刻取得、Play Mode終了後にコンソールキャプチャが失われる問題、`set_autotick`の状態永続化、`run_tests`実行時の例外を修正した

Project Auditor統合は、Unity 6.4以上では組み込みモジュールを、Unity 6.0〜6.3では[com.unity.project-auditorパッケージ](https://docs.unity3d.com/Packages/com.unity.project-auditor@3.0/manual/index.html)を利用するとしています。

### Solution for crashes on low-end iPhones and iPads after the iOS 26.4 update

[Solution for crashes on low-end iPhones and iPads after the iOS 26.4 update - Mobile - Unity Discussions](https://discussions.unity.com/t/solution-for-crashes-on-low-end-iphones-and-ipads-after-the-ios-26-4-update/1733510)

iOS 26.4更新後にローエンドデバイス（iPhone SE 第2世代、iPad 第9世代など）で発生するメモリ関連クラッシュの原因と回避策を案内するディスカッションです。

iOS 26.4でOSのメモリ管理に変更が入り、仮想アドレス空間の枯渇が早まったことが原因で、仮想メモリの上限近くで動作しているアプリがメモリ確保時にクラッシュする（ログに「Could not allocate memory: System out of memory!」が出る場合がある）としています。

OS側の変更に起因するためエンジン側では対処できず、回避策として[Extended Virtual Addressing entitlement](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.kernel.extended-virtual-addressing)の追加を案内しています。追加は[ProjectCapabilityManager API](https://docs.unity3d.com/ScriptReference/iOS.Xcode.ProjectCapabilityManager.AddExtendedVirtualAddressing.html)またはXcodeのSigning & Capabilitiesから行い、Apple Developer Programへの登録が必要です。

### Technical Guide: Building custom tools for the Unity Editor

[Technical Guide: Building custom tools for the Unity Editor - Workflows - Unity Discussions](https://discussions.unity.com/t/technical-guide-building-custom-tools-for-the-unity-editor/1733712)

[Editor Tools](https://docs.unity3d.com/Manual/UsingCustomEditorTools.html)と[Overlays](https://docs.unity3d.com/Manual/overlays.html)を使ったUnity Editor向けカスタムツールの構築を解説する技術ガイドのディスカッションです。

Unity 6.6でカスタムエディタウィンドウ上にEditor Toolsワークフローをホストできるようになったことを踏まえた内容になっています。

- Foundation: Editor Tools and Overlays
- Creating Editor Tools
    - グローバルツール、コンポーネントツール、コンテキストツール、ツール設定の作り方
- Building your own Overlays
    - パネルオーバーレイ、ツールバー対応、トランジェントオーバーレイ、カスタムライフサイクル
- Wrapping up

### VR業界の巨人を常に新鮮に保つ方法：Gorilla Tagの2週間ごとのライブオペレーションサイクル

[VR業界の巨人を常に新鮮に保つ方法：Gorilla Tagの2週間ごとのライブオペレーションサイクル - Unity Blog](https://unity.com/ja/blog/another-axiom-gorilla-tag)

VRソーシャルゲーム『Gorilla Tag』の2週間ごとのライブオペレーションについて、Another AxiomのプロデューサーDerek Arabian氏へのインタビュー記事です。

各サイクルはおよそ1週間の統合作業（リリースブランチへのマージ）と1週間の安定化作業で構成し、全VRプラットフォームで同時リリースしているとのことです。パフォーマンス面では、プレイヤーベースの大半を占めるQuest 2スタンドアロン版を主要なベンチマークとして90fpsにできる限り近づけることを目標に、Unity Profilerでdraw call、GC、メモリ使用量を監視しており、URP移行後は1つの高性能シェーダーと複数バリアントの構成でdraw callを削減したと述べています。

配信面では、収益源であるコスメティックアイテムをAddressablesでOBB（Opaque Binary Blob）へパッケージし、Unity Build AutomationによるCI/CDパイプラインで各プラットフォームへ届けています。また、ユーザー生成コンテンツはポリゴン数やアクティブオブジェクト数の上限を設けたサンドボックスと、安定したコンポーネントだけを許可するホワイトリスト方式で運用していると語っています。


## Articles

### 【Unity】「なんとなく」を卒業する。4種類のノイズの処理を紐解いてみた。

[【Unity】「なんとなく」を卒業する。4種類のノイズの処理を紐解いてみた。 - Zenn](https://zenn.dev/zero_0r0/articles/34700641dbbcdf)

Value Noise、Perlin Noise、Cellular（Worley）Noise、Curl Noiseの4種類のノイズの仕組みを、C#・Shader Graph・VFX Graphでの実装例とともに解説する記事です。

Shader GraphのSimple NoiseがValue Noise、Gradient NoiseがPerlin Noise、VoronoiがCellular Noiseに対応するといった、ツールごとの名称の対応関係も整理しています。

### Unity6.5でLight2DProviderを継承して好きな形のライトを作る

[Unity6.5でLight2DProviderを継承して好きな形のライトを作る - Zenn](https://zenn.dev/1stscratch/articles/2203583f353768)

Unity 6.5のURPで`Light2DProvider`を継承し、任意の形状のカスタム2Dライトを作る方法を解説する記事です（[Create a custom 2D light type](https://docs.unity3d.com/6000.5/Documentation/Manual/urp/custom-2d-light.html)）。

`ProviderName()`と`GetMesh()`の2つを実装してメッシュでライト形状を定義する流れを示し、三角形・矩形・扇形・星形・リング形の5種類のライトを作る例を紹介しています。

### 【Unity】Unity6.8でCoreCLR GCが導入されてもIL2CPPではBoehm GCなのでGC.Collectの呼び出し方は注意した方が良い話

[【Unity】Unity6.8でCoreCLR GCが導入されてもIL2CPPではBoehm GCなのでGC.Collectの呼び出し方は注意した方が良い話 - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2026/08/16/172617)

Unity 6.8でデスクトップ向けにCoreCLR GCが導入されても、IL2CPP（iOSはJIT不可のため必須、Androidも未対応）はBoehm GCのままであるため、`GC.Collect`の呼び出し方に注意が必要という記事です。

Boehm GCでは`GC.Collect`を7回呼ばないとメモリがOSに返却されないとして、`#if ENABLE_IL2CPP`で呼び出し回数を分けるコード例を示しています（そもそも手動で実行すべきかどうかは議論があるとも注記しています）。

### Test Helper v1.6 : UIレイアウト系のカスタム制約

[Test Helper v1.6 : UIレイアウト系のカスタム制約 - やらなイカ？](https://www.nowsprinting.com/entry/2026/08/14/080000)

このブログの著者が開発するUnity Test Framework向けパッケージ[Test Helper](https://github.com/nowsprinting/test-helper) v1.6で追加された、UIレイアウト検証用の4つのカスタム制約（WithinScreen、WithinContainer、Overlapping、TextOverflowing）を紹介する記事です。

UIレイアウトは変更されやすくテストを書くROIが低い領域だったとしたうえで、UIコンポーネントの重なりや画面外へのはみ出しといった問題をAIコーディングエージェントが自律的に修正できるようにする用途を想定していると説明しています。

### モバイルの負荷やバッテリー消費を抑えて一部のポストプロセスが使えるOn Tile Post Processing【Unity】【URP】【ポストプロセス】

[モバイルの負荷やバッテリー消費を抑えて一部のポストプロセスが使えるOn Tile Post Processing【Unity】【URP】【ポストプロセス】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/On_Tile_Post_Processing)

Unity 6.5のURPに追加されたOn Tile Post Processingを紹介する記事です。

タイル上で直接エフェクトを適用することで、パフォーマンス向上に加えて発熱による性能低下やバッテリー消費も抑えられる機能で、Color Grading、Tonemapping、Vignette、Dithering、Film Grainに対応する一方、Bloomのようにタイル外のピクセル情報が必要なエフェクトは対象外としています。

効果があるのはVulkan/Metalを使うタイルベースGPUのデバイス（スマートフォンやQuest）に限られる点や、Renderer Featureの追加を含む設定手順も紹介しています。

## Repositories

### FineConfiner2D

[ruccho/FineConfiner2D: A smarter alternative to Cinemachine Confiner 2D — no clipping, no jumps.](https://github.com/ruccho/FineConfiner2D)

Cinemachineの2Dカメラでカメラの撮影範囲を制限するConfinerで、組み込みのConfiner 2Dで起きる凹角付近でのジャンプや領域境界でのクリッピングを防ぐ。カメラ中心の有効領域をポリゴン縮小によりベイクし、ターゲット位置を連続的にマッピングする方式をとる。Unity 6000.3以降とCinemachine 3.1以降に対応し、MITライセンスで公開されている。

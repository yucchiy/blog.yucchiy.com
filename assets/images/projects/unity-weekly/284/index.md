---
type: unity-weekly
title: Unity Weekly 284
description: >-
  2026/08/10週のUnity Weeklyです。The Path to CoreCLR、Unity 6.7のCustomizable Main Toolbar、3D as 2Dサンプルプロジェクト「Bunny Blitz」などを紹介しています。
pubDatetime: 2026-08-10T09:00:00+09:00
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### The Path to CoreCLR #1: The Problem

[The Path to CoreCLR #1: The Problem - Unity Engine - Unity Discussions](https://discussions.unity.com/t/the-path-to-coreclr-1-the-problem/1733018)

UnityのMonoからCoreCLRへのランタイム移行について、なぜ移行が必要なのかを解説する連載第1回のディスカッションです。

今後数か月にわたり、移行の各課題を個別の技術記事として掘り下げていくとしています。

- The Mono Runtime
    - Monoが採用された背景として、ネイティブアプリケーションへの組み込みやすさ、クロスプラットフォーム対応、AppDomainによるPlay Modeの実現、保守的で非移動型のBoehm GCがC++との相互運用を容易にした点を挙げています
- Mono Aging Gracefully
    - 2016年のMicrosoftによるXamarin買収以降の.NETへの一本化でAppDomainが廃止されたこと（[Legacy Mono](https://github.com/mono/mono)は最後まで維持）、Boehm GCによるヒープ断片化、RyuJITに対する性能面での劣位など、Monoが技術負債化していった経緯を整理しています
- What CoreCLR Gives Us
    - CoreCLRはMicrosoftが現在提供・サポートしている現代的なC#ランタイムであり大きな前進だとしたうえで、precise・[generational](https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/fundamentals#generations)・compactingなモダンGC、[RyuJIT](https://github.com/dotnet/runtime/blob/main/docs/design/coreclr/jit/ryujit-overview.md)によるJIT、最新のC# APIサーフェス、診断ツールの充実、[dotnet/runtime](https://github.com/dotnet/runtime/)としての継続的なupstreamサポートを利点として挙げています
- Okay… So Just Swap CoreCLR In?
    - 限定的な埋め込みAPI、GCがオブジェクトを移動することへのエンジンコードの対応、AppDomain喪失に伴うPlay Modeの再構築、プロファイラーの再実装、IL2CPPの更新など、単純な差し替えでは済まない課題を列挙しています
- Performance by Default
    - CoreCLRへの移行だけで自動的に速くなるわけではなく、安定性を速度より優先して書き直したエンジンコードが相当量あるとしたうえで、コード変更後のエディターのリロード待ち、プロジェクトのコールドオープン、デバッグセッション中のエディタークラッシュ、暗黙知頼みのメモリ管理といった課題をなくすため、Performance by Defaultを優先課題にすると述べています

### Customizable Main Toolbar: Unity 6.7 improvements

[Customizable Main Toolbar: Unity 6.7 improvements - Unity Engine - Unity Discussions](https://discussions.unity.com/t/customizable-main-toolbar-unity-6-7-improvements/1733331)

Unity 6.7でのカスタマイズ可能なMain Toolbarの改善を紹介するディスカッションです。これらの改善は次のAlphaバージョンから利用できるとしています。

- 要素のグループとトグルの見た目を調整し、操作している要素の種類が分かりやすくなった
- `MainToolbarCustomElement` APIが公開APIになり、カスタム要素を作成できるようになった（[ドキュメント](https://docs.unity3d.com/6000.7/Documentation/ScriptReference/Toolbars.MainToolbarCustomElement.html)）
- コードを書かずにMenuItemをツールバーへ直接追加できるようになった

Main Toolbarカスタマイズの全体像は[Editor: The main Toolbar of the Editor is now extensible and customizable](https://discussions.unity.com/t/editor-the-main-toolbar-of-the-editor-is-now-extensible-and-customizable/1668476)にて確認できます。

### Say hello to 11.0.16.10330!

[Say hello to 11.0.16.10330! - Unity Services - Unity Discussions](https://discussions.unity.com/t/say-hello-to-11-0-16-10330/1733312)

Unity Version Control 11.0.16.10330のリリースを告知するディスカッションです。

- New
    - Desktop GUIの属性値がMarkdownに対応した。Apply Attributeダイアログは内容に応じてレイアウトを切り替え、Markdownの場合は生エディタとライブプレビューを並べて表示する。属性値の文字数制限は1,000文字から5,000文字に拡張された。
    - オブジェクトから属性を削除する際に、削除対象の値のプレビュー付き確認ダイアログを表示するようにした
    - `cm attribute set`に`--valuecontents=`パラメータを追加し、複数行の値や`?`・`&`などの特殊文字を含むURLをファイルから設定できるようにした
- Bug
    - Cloud Serverで既存のtrunkbotを更新するとbot_userフィールドが失われ、mergebotが壊れる問題を修正した
    - `cm attribute set`で`?`や`*`を含む属性値がファイルのワイルドカードとして誤って処理される問題を修正した

### The 3D as 2D sample project, Bunny Blitz, is available now

[The 3D as 2D sample project, Bunny Blitz, is available now - Unity Blog](https://unity.com/blog/the-3d-as-2d-sample-project,-bunny-blitz,-is-available-now)

Unity 6.3以降の3D as 2Dワークフローを紹介するサンプルプロジェクト「Bunny Blitz」の公開を告知するブログ記事です。
URP 2D Rendererの下で3D GameObjectがSpriteと同様にsorting layerで並び、2D Lightingを受け、2D maskでマスクできる仕組みと、サンプルで確認できる内容を解説しています。

Core featuresとして以下を挙げています。

- Sprite and 3D Sorting — Sorting Groupと3D-as-2Dレンダリングによる3DオブジェクトとSpriteの並び替え
- Perspective Depth — perspectiveカメラとZ軸配置による奥行き表現
- Out-of-Focus Blur — カスタム2D Renderer injection passによる深度ベースのブラー
- 3D-as-2D Shaders — 3D-as-2D互換を有効にしたShader GraphのSpriteシェーダー
- Complete 2D Toolset — 2D Lights、Tilemap、Sprite Shape、アニメーション、マスクなど2Dツール一式
- Advanced Rendering — shadow cameraレンダリング、MatCapマテリアル、タイル化可能なTilemapマテリアル
- Visual Effects — VFX GraphとShader Graphを組み合わせたキャラクター出現や移動演出などの視覚効果
- Reusable Asset Library — アニメーション済みのメインキャラクター、敵、ボスを含む再利用可能なアセットライブラリ
- 2D Physics Gameplay — 2D Physicsによるゲームプレイ全体の駆動

3D in 2Dの各側面を扱うチュートリアルの文章版と動画版も制作中としています。

### Games made with Unity: July 2026 in review

[Games made with Unity: July 2026 in review - Unity Blog](https://unity.com/blog/games-made-with-unity-july-2026-releases)

2026年7月にリリースされたUnity製ゲームをジャンル別に紹介するブログ記事です。
冒頭ではUnite Seoulで発表されたUnity 7（Unity 6の直接の継続でbreaking changeなし、既定のFast Enter Play ModeやURPへ焼き込み不要のリアルタイムGIをもたらすSurface Cache GIなど）にも触れています。

『Moonlight Peaks』『The Mermaid Mask』『Teeto』『Rubinite』などを含む、early accessまたは正式リリースされたタイトルをジャンル別に一覧しています。

### Why go D2C now: The mobile game webshop business case

[Why go D2C now: The mobile game webshop business case - Unity Blog](https://unity.com/blog/mobile-game-webshop-business-case)

モバイルゲームのアイテムをアプリストア外で販売するD2C（direct-to-consumer）webshopについて、今が立ち上げの好機である理由をビジネス面から整理するブログ記事です。
2025年にトップ100タイトルのD2C売上が推定38%成長するなど、D2Cが実験段階から確立した収益チャネルへ移行したとしています。

- What’s changed with platform policies across markets
    - 各国の法規制を受けて、米国、EU、日本、韓国ではAppleとGoogleが自社のin-app purchaseシステムでの独占販売を強制できなくなり、アプリ内からプラットフォーム外のwebshopへプレイヤーを誘導できるようになったと説明しています
- The business case for D2C webshops for mobile games
    - 手数料は取引の経路・プラットフォーム・プレイヤーの所在地で決まり、アプリ内リンク経由（in-game link-outs）ではプラットフォームや地域に応じて最大約20%の手数料がかかる一方、アプリ内リンクを経由しない直接アクセス（direct web traffic）ではプラットフォーム手数料がかからないと整理しています
    - webshopへの誘導に10〜15%の割引を付けても、in-app purchaseより取引あたりの手取りが多くなる見込みであることや、標準価格ティアに縛られない価格設定の柔軟性を利点として挙げています
- How D2C solutions and infrastructure are empowering studios
    - [Unity IAP 5.4](https://unity.com/products/iap)のようなD2Cコマース対応ソリューション、ノーコード・ローコードのwebshopビルダー、決済プロバイダーエコシステムの拡充により、専任のコマースエンジニアリングチームなしでもwebshopを運用できるようになったとしています

## Articles

### Air Sticker 2.0 リリース ── デカール生成を Job System + Burst で並列化した話

[Air Sticker 2.0 リリース ── デカール生成を Job System + Burst で並列化した話 - CORETECH ENGINEER BLOG](https://blog.sge-coretech.com/entry/2026/08/06/144416)

実行時デカール生成ライブラリ[Air Sticker](https://github.com/CyberAgentGameEntertainment/AirSticker) 2.0で、メッシュ生成処理をJob SystemとBurstで書き直した過程を解説する記事です。

クラス参照を持つデータ構造を整数インデックスと`NativeArray`によるSoAへ組み替え、三角形単位で独立な処理を`IJobParallelFor`で並列化し、`[BurstCompile]`でSIMD化することで、エディタ計測で合計約30倍の高速化を実現したとのことです。

2.0の最小要件はUnity 6.0以上で `com.unity.burst`と`com.unity.mathematics`の依存が追加される一方で、公開APIは互換としています。

### Unity Editor上でのAddressableのロード速度を改善する

[Unity Editor上でのAddressableのロード速度を改善する - きゅぶろぐ](https://blog.kyubuns.dev/entry/2026/08/04/092627)

Editor上のAddressableのロードがビルドしたプレイヤーより遅い原因と対処を紹介する記事です。

`Assets/AddressableAssetsData/AddressableAssetSettings.asset`の`m_simulatedLoadDelay`がデフォルトで0.1に設定されており、ロード時に必ず0.1秒の遅延が入ることが原因で、この値はDebugモードのInspectorでのみ確認・変更できるとしています。

### エンコーダのみモデルの感情分析ファインチューニングして Unity で動かす

[エンコーダのみモデルの感情分析ファインチューニングして Unity で動かす - Zenn](https://zenn.dev/edom18/articles/encoder-only-model-ft)

エンコーダのみのモデルをファインチューニングする方法をまとめた記事で、日本語ModernBERT（ModernBERT-ja）をWRIMEデータセットで9クラス（8感情+中立）の感情分類にファインチューニングし、学習したモデルをONNXへ変換してUnity Sentisで動かすまでを解説しています。

ModernBERT-jaが採用するSentencePiece（unigram）のトークナイズをC#で実装しており、[デモプロジェクト](https://github.com/edom18/Encoder-model-fine-tuning-demo-with-unity)を公開しています。

### プライバシーを守りながらAndroidアプリの年齢認証を実施する「Google Play Age Signals API」の正式提供が開始、日本でも年内に施行

[プライバシーを守りながらAndroidアプリの年齢認証を実施する「Google Play Age Signals API」の正式提供が開始、日本でも年内に施行 - IndieGamesJp.dev](https://indiegamesjp.dev/?p=12291)

Googleが正式提供を開始した[Play Age Signals API](https://developer.android.com/blog/posts/delivering-safer-age-appropriate-experiences-on-google-play?hl=ja)を紹介する記事です。保護者が管理する子どもや成人の年齢層情報を取得し、アプリ内のコンテンツや設定を年齢に応じて調整できるようにするAPIで、現在はブラジルで提供されており、8月中旬までにオーストラリアとカナダへ拡大し、年内には全世界へ展開される予定としています。

APIはAndroidネイティブ向けのSDKとして提供される一方、Unity向けにはコミュニティ製ラッパーの[unity-play-age-signals](https://github.com/dvillaseca/unity-play-age-signals)がGitHubで公開されているほか、Voxel Bustersの無料アセット[Essential Kit Lite](https://assetstore.unity.com/packages/tools/integration/essential-kit-lite-for-mobile-tv-sharing-rate-my-app-shortcuts-m-140137)のUtilityモジュールに組み込まれることが報告されているとしています。

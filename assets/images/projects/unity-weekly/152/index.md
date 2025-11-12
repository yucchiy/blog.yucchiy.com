---
type: unity-weekly
title: Unity Weekly 152
description: >-
  2023/12/18週のUnity Weeklyです。New OpenUSD Package、Advent Calendar
  2023などについて取り上げています。
pubDatetime: 2023-12-17T15:00:01.000Z
tags:
  - Unity Weekly
  - Unity
  - Advent Calendar 2023
---

## Unity Officials

### New OpenUSD packages now available

[Official - New OpenUSD packages now available - Unity Forum](https://forum.unity.com/threads/new-openusd-packages-now-available.1524583/)

UnityEditorでのUSD（Universal Scene Description）シーンのインポートとエクスポート、C#コードからOpenUSD SDKにアクセスするためのパッケージがリリースされました。

現段階で実験的リリースで、Unity 2023.1以降で利用できます。サポートするOpenUSDのバージョンはv23.02です。

## Articles

### Hex Map 3.1.0

[Hex Map 3.1.0](https://catlikecoding.com/unity/hex-map/3-1-0/)

UnityでHex Mapを扱う連載で、前回の[Hex Map 3.0.0](https://catlikecoding.com/unity/hex-map/3-0-0/)と比べて`HexCell`クラスのリファクタリングと、単一の整数に7つの値を格納する方法を紹介しています。

### Intro to Shader Graph in Unity 2022 (Part 3 - Transparency & Alpha)

[Intro to Shader Graph in Unity 2022 (Part 3 - Transparency & Alpha)](https://danielilett.com/2023-12-11-tut7-5-intro-to-shader-graph-part-3/)

Shader GraphのチュートリアルとしてShader Graphで半透明やアルファクリッピングを扱う方法や、ピクセル上では半透明を用いずに半透明を実現するテクニックとしてディザーリング（Dithering）を実現する方法をそれぞれ紹介しています。

### ランタイムで読み込んだHumanoidモデルに読み込んだモーションを適用する

[ランタイムで読み込んだHumanoidモデルに読み込んだモーションを適用する - Activ8 Tech Blog](https://synamon.hatenablog.com/entry/unity_runtime_animation)

Humanoidモデルに対して、ランタイムで読み込んだモーションを、Playable API経由で適用する方法について解説しています。

### Unity Muse Textureを使う

[Unity Muse Textureを使う](https://zenn.dev/kawabunga/articles/4896bc83cc81fa)

Unity Museでテクスチャを生成する方法を紹介しています。


## Advent Calendar 2023

### Unity Searchを拡張する(QueryEngine編)

[Unity Searchを拡張する(QueryEngine編) #Unity - Qiita](https://qiita.com/Trapezoid/items/609a86ddf8c1b50426b7)

Unity Searchのクエリ式を拡張するための `QueryEngine<T>` を用いた独自のフィルター処理を実装する方法について、実例を交えつつ紹介しています。

### BurstLinq – Burst Compilerを用いたLINQ高速化ライブラリ

[【Unity】BurstLinq – Burst Compilerを用いたLINQ高速化ライブラリ - Annulus Games](https://annulusgames.com/blog/burst-linq/)

著者の開発する[BurstLinq](https://github.com/AnnulusGames/BurstLinq)について、このライブラリの概要や使い方、LINQとの互換性について紹介しています。

### モバイルアプリ上で GPU 負荷を計測する

[【Unity】モバイルアプリ上で GPU 負荷を計測する #iOS - Qiita](https://qiita.com/mao_/items/3b531d17cacb86036b7f)

Unityで実装したモバイルアプリ（iOS/Android）のGPU負荷を計測するための方法として `FrameTimingManager` を用いる方法や、iOS向けに「Metal Performance HUD」を用いる方法などをそれぞれ解説しています。

### UnityでGizmos(ギズモ)を使ってみよう

[【アドカレ】UnityでGizmos(ギズモ)を使ってみよう - YAMADA TAISHI’s diary](https://orotiyamatano.hatenablog.com/entry/Gizmos)

UnityのGizmosの各種メソッドの使用方法と実際にどのような描画が行われるのかについて紹介しています。

### Unityのツールバーにボタンを追加する方法(Unity 2021.2以降)

[Unityのツールバーにボタンを追加する方法(Unity 2021.2以降) #Unity - Qiita](https://qiita.com/iixd_pog/items/ae7220bfeae49750f354)

UI Toolkitがエディターに本格的に導入された2021.2以降のエディター環境上で、ツールバーに任意のボタンを追加する方法を紹介しています。

### In-Place Merge Sort を実装してみた

[【C#】In-Place Merge Sort を実装してみた](https://zenn.dev/happy_elements/articles/c471ee57b48036)

In-Place Merge Sortの実装方法と、実行速度とメモリ消費量をLINQのOrderByやInsertion Sortと比較しています。

### MagicTweenとPrimeTweenを触ってみた

[【Unity】MagicTweenとPrimeTweenを触ってみた #Unity - Qiita](https://qiita.com/albatrus/items/549b57822f0e22f6ad4b)

PrimeTweenとMagicTweenについて、それぞれのライブラリの特徴や基本的なアニメーションをどのように記述するのかについて紹介しています。

### ShaderGraphのシステムを使ってShaderGeneraterを作る

[ShaderGraphのシステムを使ってShaderGeneraterを作る #C# - Qiita](https://qiita.com/up-hash/items/dc9c9c19bebefbe869cd)

ShaderGraphのシステムに内蔵されている `ShaderUtils.CreateShaderAsset` と `ScriptedImporter` を用いて、独自のシェーダーファイルからシェーダーアセットを生成する方法を紹介しています。

### Debug.Logはもう古い！？ Unity公式のLoggingパッケージ「Unity Logging」の使い方まとめ

[【Unity】Debug.Logはもう古い！？ Unity公式のLoggingパッケージ「Unity Logging」の使い方まとめ - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2023/12/15/070000)

Unity公式のロギングパッケージ「Unity Logging」について、その概要から基本的な利用方法をまとめています。

### Source Generatorでプロパティを自動実装してみた

[Source Generatorでプロパティを自動実装してみた #C# - Qiita](https://qiita.com/amenone_games/items/25c857608af0138eb646)

記事の著者の開発するUnity向けのプロパティの自動実装をSourceGeneratorで行う[AutoGenerateProperty](https://github.com/amenonegames/AutoGenerateProperty)について各種機能を紹介しています。

### Unity の Hair System（デモ版）を試す

[Unity の Hair System（デモ版）を試す #Unity - Qiita](https://qiita.com/TOKIOatoz/items/c867bf198e04ed4b5ef7)

Unity公式が提供する[Hair System](https://github.com/Unity-Technologies/com.unity.demoteam.hair)について、デモを開く際のUnityバージョンの注意点やHair Assetや各種パラメーターが挙動にどのような影響を与えるのか、について紹介しています。

### TextMesh Proで絵文字を出す

[TextMesh Proで絵文字を出す - KAYAC engineers' blog](https://techblog.kayac.com/textmesh-pro-emoji)

標準の機能で表示できない絵文字も含め、TextMesh Proですべての絵文字を表示するための方法を紹介しています。

### MonoBehaviourアンチが採用する技術

[MonoBehaviourアンチが採用する技術 #C# - Qiita](https://qiita.com/naninunenoy/items/d41bda893e848271d04d)

Unityの`MonoBehaviour` を極力利用しないアプリケーション実装のメリットやデメリットの紹介と、VContainerを用いた `MonoBehaviour` を極力用いないエントリーポイントや状態遷移の実装を紹介しています。

サンプルプロジェクトは [naninunenoy/AntiMonoBehaviour](https://github.com/naninunenoy/AntiMonoBehaviour) にて公開されています。

### Unityのインスペクタに力技で適当なボタンをねじ込む

[Unityのインスペクタに力技で適当なボタンをねじ込む #Unity - Qiita](https://qiita.com/Swanman/items/e67af8a2115880e4dd27)

`EditorGUIUtility.PropertyCallbackScope` を用いて、特定のプロパティーのインスペクターに対して、外からボタンを差し込む方法を紹介しています。

### gree/unity-webviewを用いてUnityでWebViewを実装する

[【Unity】gree/unity-webviewを用いてUnityでWebViewを実装する | はなちるのマイノート](https://www.hanachiru-blog.com/entry/2023/12/15/120000)

[gree/unity-webview](https://github.com/gree/unity-webview)を用いたUnityアプリ上でのWebView呼び出し実装について、インストールから基本的な使い方を紹介しています。

### UIブラー対応事例紹介

[UIブラー対応事例紹介｜Colorful Palette](https://media.colorfulpalette.co.jp/n/nffc0ece136be)

画面全体のブラー（記事中では「BackgroundBlur」）やUIパーツ後ろのブラー（記事中では「グラスモーフィズム」）のUnityでの実装方法を紹介しています。

### Shader の GUI を実装する

[Shader の GUI を実装する #Unity - Qiita](https://qiita.com/___shanon/items/2d4be1a8c2f61bfc6621)

`ShaderGUI` と `MaterialPropertyDrawer` を用いて、シェーダーのGUI（インスペクター上の表示）を調整する方法を紹介しています。

### UniTaskの cancelImmediately フラグについて

[UniTaskの cancelImmediately フラグについて #C# - Qiita](https://qiita.com/Euglenach/items/6623d96d5b93ff52e816)

[UniTask v2.5.0](https://github.com/Cysharp/UniTask/releases/tag/2.5.0)で追加された`cancelImmediately`についてその挙動とメリットやデメリットを紹介しています。

### Unity Build Server のライセンスサーバーの Docker イメージを作る

[Unity Build Server のライセンスサーバーの Docker イメージを作る | by BBQ All Stars | Dec, 2023 | MIXI DEVELOPERS](https://mixi-developers.mixi.co.jp/docker-image-of-unity-build-server-9698bb6500b8)

Unity Build Serverのライセンスサーバー用のDockerイメージの作成方法を解説しています。

### uGUI の Image に BaseMeshEffect でグラデーションをかけてみる。

[uGUI の Image に BaseMeshEffect でグラデーションをかけてみる。](https://zenn.dev/happy_elements/articles/44cded89f622d7)

uGUIのBaseMeshEffectを用いて、Imageにグラデーションを掛ける方法を解説しています。

### よく使うディレクトリ構成を一発で生成するEditor拡張

[【Unity】よく使うディレクトリ構成を一発で生成するEditor拡張 #Unity - Qiita](https://qiita.com/kazuki_kuriyama/items/6d9f7368f7b4eef02482)

特定のディレクトリ構成を自動で生成するエディター拡張の実装を紹介しています。

### ContentSizeFitterとLayoutGroupを利用してScrollViewの縦(横)スクロールを実装する

[【Unity】ContentSizeFitterとLayoutGroupを利用してScrollViewの縦(横)スクロールを実装する - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2023/12/11/120000)

`ContentSizeFitter`と`VerticalLayoutGroup`を使用してスクロールビューを実現するためのそれぞれのコンポーネントの設定を紹介しています。

### はじめての C# 大統一理論

[はじめての C# 大統一理論](https://zenn.dev/monry/articles/20231211-beginning-unified-csharp)

クライアントとサーバー実装をC#で統一する方法について、主にクライアント・サーバー間でのコード共有するための `csproj` の設定やDLLコピーによるC#コードの共有方法を紹介しています。

### PLATEAUの都市モデルとGPSログの軌跡を重ねてみる

[【Unity】PLATEAUの都市モデルとGPSログの軌跡を重ねてみる - ろうでんのブログ](https://cllightz.hatenablog.com/entry/2023/12/17/120015)

PLATEAUの都市モデルとGoogleマップのタイムラインからエクスポートしたKMLファイル形式のGPSログをUnity上で重ねて表示する方法を紹介しています。

### Meta Questでシステムのバーチャルキーボードを呼び出す方法

[Meta Questでシステムのバーチャルキーボードを呼び出す方法 #C# - Qiita](https://qiita.com/OKsaiyowa/items/f5c18327ebbe96b259f8)

Meta Quest向けの自作アプリケーションでシステムのバーチャルキーボードを利用するための設定方法や任意のタイミングでキーボードを呼び出す方法を紹介しています。

### MethodImplOptions（インライン展開など）によるIL2CPPのふるまい

[MethodImplOptions（インライン展開など）によるIL2CPPのふるまい #C# - Qiita](https://qiita.com/up-hash/items/c7d776bb028eb357a318#aggressiveinlining)

`MethodImpl`属性によってIL2CPP上のコードがどのように変化するか、実際に生成されたコードを参照しつつ紹介しています。

### Unity WebGL で WebSocket を使う

[Unity WebGL で WebSocket を使う](https://zenn.dev/yoshd/articles/00aa57079e4063)

UnityのWebGLビルドでWebSocketを利用する際の問題点（`System.Net.WebSockets`が利用できない点）と、解決方法としてJavaScriptでプラグインを書いて、それをC#から呼び出すこと解決する方法を紹介しています。

### URP環境で3Dの描画解像度だけ下げる

[URP環境で3Dの描画解像度だけ下げる（UIはそのまま） #C# - Qiita](https://qiita.com/up-hash/items/23bc91340cfa9851c725)

UIの解像度はそのままに3Dの描画解像度のみを下げる方法について4つの方法とメリットや問題点をそれぞれ紹介しています。

### UniTaskでUIイベントを直感的に扱ってみる ~ボタンのグループ化~

- [UniTaskでUIイベントを直感的に扱ってみる ~連打対応~](https://zenn.dev/matsuataru/articles/unitask_ui_event)
- [UniTaskでUIイベントを直感的に扱ってみる ~ボタンのグループ化~](https://zenn.dev/matsuataru/articles/unitask_button_group_adcale_2023)

ボタンの連打対応（そのボタンに紐づく処理が終わるまで、次の処理を実行しないようにする対応）やグループ化したボタンの排他制御（グループ内のボタンに紐づく処理が終わるまで、グループ内のボタンの処理を実行しないようにする対応）を行う方法について紹介しています。

### MediaPipeのポーズトラッキングでゲームを作ろう

[【Unity】MediaPipeのポーズトラッキングでゲームを作ろう #Unity - Qiita](https://qiita.com/river_9167/items/3af6eb57b69acbb543b9)

MediaPipeを用いてUnityアプリでポーズトラッキングを実装する方法を紹介しています。

### UnityのProfilerの簡単な使い方

https://qiita.com/zisup/items/84a5a63241d56d13473c

[UnityのProfilerの簡単な使い方 #Unity - Qiita](https://qiita.com/zisup/items/84a5a63241d56d13473c)

UnityのProfilerの基本的な使い方として、処理負荷が高い箇所の特定方法や、Profilerを用いて実際にパフォーマンスを改善する方法を紹介しています。

### UnityEditor とVisionPro Simulatorをリアルタイムに接続して動作チェックする方法

[【VisionPro】UnityEditor とVisionPro Simulatorをリアルタイムに接続して動作チェックする方法【Unity】 #Unity - Qiita](https://qiita.com/Cova8bitdot/items/de9d9f174e607b47952c)

UnityEditorとVisionOS Simulatorを接続してリアルタイムに動作確認を行うための各種設定方法を紹介しています。

### Materialの正体

[Materialの正体 #Unity - Qiita](https://qiita.com/up-hash/items/2c47b778b0869cc03e8b)

UnityにおけるMaterialの役割について、内部でどのような処理を行っているのかを説明しつつ紹介しています。

### GameCIとGitHub Actionsを使ってクラウドビルド環境を構築する

[【Unity】GameCIとGithubActionsを使ってクラウドビルド環境を構築する #Unity - Qiita](https://qiita.com/broken55/items/2ca7d8b261ed12bb3820)

GameCIの提供するビルドイメージを用いてGitHub Actions上でUnityアプリのビルド環境を構築する方法を紹介しています。

### VYamlでUnityYamlと和解せよ

[VYamlでUnityYamlと和解せよ](https://zenn.dev/matsuataru/articles/vyaml_adcale_2023)

UnityのYAMLフォーマットとの互換性がある[VYaml](https://github.com/hadashiA/VYaml)の使い方を紹介しています。

### ビルド完了後に自動でZipファイルを作成する方法

[【Unity】ビルド完了後に自動でZipファイルを作成する方法 #Unity - Qiita](https://qiita.com/kazuki_kuriyama/items/152db86e6f1ad9fa33f5)

`IPostprocessBuildWithReport`を用いて、ビルド完了後に成果物を含めたZipファイルを生成するエディター拡張の実装を紹介しています。

### Unityではしごの昇り降りを実装する

[Unityではしごの昇り降りを実装する #Unity - Qiita](https://qiita.com/mo-cover/items/17dbd5f301d145fc6614)

はしごの上り下りをアニメーションベースに実装する方法を紹介しています。

### ShaderGraphで画像をお手軽にスクロール

[ShaderGraphで画像をお手軽にスクロール #Unity - Qiita](https://qiita.com/MilayYadokari/items/63cea55228cb6daae40e)

ShaderGraphを用いてUnityの画像をUVスクロールする方法を紹介しています。

### SystemSampleRateとDSPBufferSizeの調整

[【Unity】SystemSampleRateとDSPBufferSizeの調整 #Unity - Qiita](https://qiita.com/tanipika/items/dbf00b7b5cf2c4ef78d6)

Unityのノイズとレイテンシーを改善するための `SystemSampleRate` と `DSPBufferSize` について、その概要から調整方法を紹介しています。

### frameBufferFetchとCoLoRという謎のセマンティクス

[frameBufferFetchとCoLoRという謎のセマンティクス #Unity - Qiita](https://qiita.com/up-hash/items/38e030b573b90c07f1fc)

RenderTarget側のピクセルカラーを取得するFrameBufferFetchとCoLoRについて紹介しています。

### Unityを使った開発にC#以外のスクリプト言語を組み込んでみた。

[Unityを使った開発にC#以外のスクリプト言語を組み込んでみた。 #Unity - Qiita](https://qiita.com/MachiaWorx/items/8449f4ccc11b3cfe5467)

Miniscriptというスクリプト言語をUnityに組み込んだ際の

### ざっくりコンポジション

[ざっくりコンポジション【Unity/C#】 #C# - Qiita](https://qiita.com/gen09/items/d4d8ae37b971dd4e3bc4)

コンポジションの継承と比べたメリットを実際のコードを交えつつ紹介しています。

### 最近のUnity Tweenライブラリの紹介と速度検証

[最近のUnity Tweenライブラリの紹介と速度検証｜Colorful Palette](https://media.colorfulpalette.co.jp/n/nde30591896fc)

Unityで利用できるTweenライブラリを実機上でのパフォーマンス比較を紹介しています。

### Newtonsoft.Jsonの基本的な使い方

[[Unity]Newtonsoft.Jsonの基本的な使い方 #Unity - Qiita](https://qiita.com/kazuma_f/items/55a0b7ff628ab596e6ee)

Unity上でNewtonsoft.Jsonを扱う方法について紹介しています。

---
type: unity-weekly
title: Unity Weekly 253
description: >-
  2025/12/22週のUnity Weeklyです。Unity 6.5アルファリリース、Unity上でのメモリ管理、SynchronizationContextとUnityメインスレッド、U/day Tokyo2025一部スライド資料公開などを紹介しています。
pubDatetime: 2025-12-22T09:00:00+09:00
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Unity 6.5 Alpha is now available

[Unity 6.5 Alpha is now available - Unity Engine - Unity Discussions](https://discussions.unity.com/t/unity-6-5-alpha-is-now-available/1700712)

Unity6.5のアルファ版がリリースされました。
このディスカッションでは、今後ディスカッションにてどのように共有されるかや、バグの確認やバグレポートの送り方について説明しています。

### Understanding Memory Management in Unity

[Understanding Memory Management in Unity - Technical Articles - Unity Discussions](https://discussions.unity.com/t/understanding-memory-management-in-unity/1700107)

UnityでGCを実行したのに物理メモリやダーティメモリの使用量が減らなかったりGC.Collectを複数回実行することで使用量を削減するのが正しいのかについてよくある問いについて、Unityの物理メモリの確保からヒープ領域の確保の仕方、現在のUnityのGCのアルゴリズムの観点から解説しています。

また、CoreCLRでのGCアルゴリズムについても言及しています。

### Why await Resumes on the Main Thread in Unity - SynchronizationContext

[Why await Resumes on the Main Thread in Unity - SynchronizationContext - Technical Articles - Unity Discussions](https://discussions.unity.com/t/why-await-resumes-on-the-main-thread-in-unity-synchronizationcontext/1700147)

Unityでの非同期コードが、メインスレッドで再開されることが多いことについて、SynchronizationContextの仕組みからUnity独自のSynchronizationContext実装が必要な理由やPlayerLoopで実行が再開されるメカニズムについて解説しています。

また、これらの説明を踏まえてTask.Runのコード上でUnityAPIを実行するとエラーになることがある原因も合わせて説明しています。


## Slides / Archive

### Unity ゲーム開発オンラインセミナー

- [Unity ゲーム開発オンラインセミナー #1 ～Unity 6を使いこなすためには！～ | Unity Learning Materials](https://learning.unity3d.jp/10851/)
- [Unity ゲーム開発オンラインセミナー #2 ～Unity 6を使いこなすためには！第二弾～ | Unity Learning Materials](https://learning.unity3d.jp/10857/)

UTJが開催した、Unity 6に関する下記ウェビナーのアーカイブ動画がUnity Larning Materialsより閲覧できます。

- [Unityゲーム開発オンラインセミナー#1 ～Unity 6を使いこなすためには！～](https://unity3d.jp/events/game-dev-webinar-1/)
- [Unityゲーム開発オンラインセミナー#2 ～Unity 6を使いこなすためには！第二弾～](https://unity3d.jp/events/game-dev-webinar-2/)

### 【U/day Tokyo 2025】Cygames流 最新スマートフォンゲームの技術設計 〜『Shadowverse: Worlds Beyond』におけるアーキテクチャ再設計の挑戦～

[【U/day Tokyo 2025】Cygames流 最新スマートフォンゲームの技術設計 〜『Shadowverse: Worlds Beyond』におけるアーキテクチャ再設計の挑戦～ - Speaker Deck](https://speakerdeck.com/cygames/cygames_202512_udaytokyo2025)

U/day Tokyo 2025でCygamesの「Cygames流 最新スマートフォンゲームの技術設計 〜『Shadowverse: Worlds Beyond』におけるアーキテクチャ再設計の挑戦～」のスライド資料がSpeaker Deckより閲覧できます。


## Articles

### Unity VContainerを利用した実用的なMVP設計について

[Unity VContainerを利用した実用的なMVP設計について #C# - Qiita](https://qiita.com/KyoheiOkawa/items/eed408c1bf61e314afc5)

MVP（Model View Presentation）にVContainerによるDI(Dependency Injection)を導入した実装について、ブログ著者が考えるDIを導入するメリットや、VContainerを実用する上でのLifetimeScopeの登録や分割、MessagePipeによるイベント通知、Factoryパターンの活用などそれぞれ解説しています。

### 人が増えても遅くならないゲーム開発をするためにUnityエンジニアが実践したことまとめ

[人が増えても遅くならないゲーム開発をするためにUnityエンジニアが実践したことまとめ - CORETECH ENGINEER BLOG](https://blog.sge-coretech.com/entry/2025/12/16/115322)

ハイブリッドカジュアルゲームの開発現場において、人が増えても開発効率を落とさないための考え方や、工夫したドキュメンテーションやアウトゲーム設計、テスト戦略、工数の考え方、ツールのUXなどについてそれぞれ説明しています。

### Playable APIの概要とアニメーションブレンドを試す

[Unity - Playable APIの概要とアニメーションブレンドを試す #Unity - Qiita](https://qiita.com/toRisouP/items/603d67d4ae0500a966d7)

Playable APIについて、その概要からアニメーション（何か動かすもの）の他手法での実装との比較、基本的なAPIの使い方からブレンドも含めたアニメーション再生まで解説しています。

### Photon Quantum 3.0 学習ガイド

[【Unity】Photon Quantum 3.0 学習ガイド](https://zenn.dev/photon_japan/articles/a9af0224b79e61)

「Photon Quantum」について、このフレームワークの特徴からUnityの提供するNetcodeとの違い、このフレームワークを使うためのQuantum ECSやモジュール間通信、Quantum アセットやこれらを用いたネットワーク通信などについて解説しています。

### Unity を用いた開発で発見しづらい場所に溜まっていた不要データの大掃除

[Unity を用いた開発で発見しづらい場所に溜まっていた不要データの大掃除 - Akatsuki Hackers Lab | 株式会社アカツキ（Akatsuki Inc.)](https://hackerslab.aktsk.jp/2025/12/17/103000)

Timelineアセットの中からInspector上で見えないデータやParticle Systemの中から不要なコンポーネントを削除して、アセットの容量を削減した事例を紹介しています。

### 効果音は再生するな、計算しろ。無限にバリエーションを生む「衝突音」の実装アプローチ【Scriptable Audio Pipeline】

[【Unity 6.3】効果音は再生するな、計算しろ。無限にバリエーションを生む「衝突音」の実装アプローチ【Scriptable Audio Pipeline】 #ゲームサウンド - Qiita](https://qiita.com/AtsuAtsu0120/items/4f015e43719b4bb9f392)

Unity6.3から使えるScriptable Audio Pipeline を用いて、床にものが落ちた時の衝突音を、BiquadFilterを元に、衝撃の大きさを考慮しつつランタイムで生成する実装を紹介しています。

### Rendering 3D as 2D を使って3Dオブジェクトを2Dゲーム内に表示する

[【Unity6.3】Rendering 3D as 2D を使って3Dオブジェクトを2Dゲーム内に表示する](https://zenn.dev/yuji_ap/articles/66cbf685abe343)

Unity6.3から利用できる Rendering 3D as 2Dについて、2DライティングやSorting LayerやOrder in Layerでの2Dと3Dの描画順序、Sprite Maskなどの機能の使い方やその挙動を紹介しています。

### 開発中プロダクトにZLinqを入れてもシームレスに移行できるの？

[開発中プロダクトにZLinqを入れてもシームレスに移行できるの？ #C# - Qiita](https://qiita.com/luckin/items/9d67551f38dbd73411f9)

開発途中のプロジェクトにZLinqを導入するにあたって、そもそもZLinqがどのようにゼロアロケーションを実現しているのかについての解説をしたのち、ZLinqの導入方法や移行に際してのメリットやデメリットを説明しています。

### KENTOの - Qiita Advent Calendar 2025

[KENTOの - Qiita Advent Calendar 2025 - Qiita](https://qiita.com/advent-calendar/2025/kento)

Meta QuestでのXR開発について、基本的なSDKの導入から各種設定、ハンドトラッキングからコントローラーの扱いなどについて、広いトピックを扱っています。

### Unity で Microsoft Extensions AI を使って AI エージェントを開発する

[Unity で Microsoft Extensions AI を使って AI エージェントを開発する](https://zenn.dev/meson_tech_blog/articles/using-extensionai)

[Microsoft.Extensions.AI](https://learn.microsoft.com/ja-jp/dotnet/ai/microsoft-extensions-ai)を用いて、Unityアプリ上でAIエージェントを開発する方法について説明しています。

このライブラリを用いた簡単なチャットクライアントや画像を扱うマルチモーダルエージェントの実装から、自身のC#コードをFunction Callingする方法、MCPサーバーを利用する方法などそれぞれ実装含めて紹介しています。　

### リアルタイムレンダリングにおける透過手法まとめ

[リアルタイムレンダリングにおける透過手法まとめ](https://zenn.dev/hello_5246/articles/9eaa18b2641b3f)

リアルタイムレンダリングの透過手法について、Cull Offでのカメラ距離によるソートでの描画を行った際の描画破綻による問題提起から、Order Independent Tranceparencyに関する2手法とDual Depth Peelingという手法をそれぞれ紹介しています。

### SinglePlayerTransport で Co-op対応ゲームをそのままシングルプレイ対応する

[SinglePlayerTransport で Co-op対応ゲームをそのままシングルプレイ対応する #Unity - Qiita](https://qiita.com/tsubaki_t1/items/a3590b24b37631a54418)

Netcodeで実装したマルチプレイヤーゲームを、SinglePlayerTransportを用いて外部の通信を行わないシングルプレイヤーゲームとして動作させるための設定や実装を紹介しています。

### HybridでFluentなステートマシンを作った

[【Unity/C#】HybridでFluentなステートマシンを作った](https://zenn.dev/holybloodfilled/articles/28addda1f62b9b)

ブログの著者が開発するFluent APIで遷移情報を定義できるpull/push型のステートマシンについて、この使い方や開発の動機、依存解決周りについて紹介しています。

### Unityを活用したUIアニメーションの開発フローのツール改修事例 その２

[Unityを活用したUIアニメーションの開発フローのツール改修事例 その２ #Editor拡張 - Qiita](https://qiita.com/albatrus/items/94a4f3c7a2739902273b)

[前記事](https://technote.qualiarts.jp/article/90)の続きで、UI制作を効率化するために用意しているタイムラインベースのUIアニメーションツールのClipのミュート機能や、演出プレハブを一覧表示する専用Windowについて、概要や実装例を紹介しています。

### Unity as a Library を Expo Modules で楽に運用する (Expo 準備編)

[Unity as a Library を Expo Modules で楽に運用する (Expo 準備編)](https://zenn.dev/livetoon/articles/expo-uaal-prep)

UaaLをReact Native製のフレームワークExpoで利用するに至った経緯から、この構成のセットアップからネイティブUIとUnity Viewを共存させるための方法について紹介しています。

### Unity as a LibraryでAndroidに組み込む時にaarを使う

[Unity as a LibraryでAndroidに組み込む時にaarを使う](https://zenn.dev/izm/articles/b5a4a42ddb4b72)

UaaLで作ったUnityアプリを、AAR（Android Archive）としてAndroidアプリに組み込むためのビルドステップやAndroidアプリ側からの設定、この手法による注意点などそれぞれ説明しています。

### 「QualiArts様の描画最適化術」を試してみる Part.2

[「QualiArts様の描画最適化術」を試してみる Part.2 #Unity - Qiita](https://qiita.com/Toshizabeth/items/4bf22ce8117ef6742761)

「[「IDOLY PRIDE」における描画最適化術](https://technote.qualiarts.jp/article/23/)」という記事の中から、ComputeShaderを用いた深度値ベースの遮蔽判定についてその実装の再現を紹介しています。

### Unity 6でFacebook SDK導入後、Androidビルドがフリーズした原因とEDM4U運用の注意点

[Unity 6でFacebook SDK導入後、Androidビルドがフリーズした原因とEDM4U運用の注意点](https://zenn.dev/unsoluble_sugar/articles/f13714fe999f54)

FacebookSDKが、Unity6環境のAndroidビルドでこける原因を、EDM4UとJavaのバージョン互換性を中心に説明しています。

### TextAnimatorで会話シーンを彩ろう！

[【Unity】TextAnimatorで会話シーンを彩ろう！ #C# - Qiita](https://qiita.com/Euglenach/items/7e76e98948fcd02df1cf)

UIToolkitやText MeshProのテキストにアニメーションを加えることのできる「[TextAnimator](https://assetstore.unity.com/packages/tools/gui/text-animator-for-unity-ui-toolkit-and-text-mesh-pro-341308)」で、ビルトインのタグによるアニメーションや、独自のアニメーションタグを実装する方法について、それぞれ説明しています。

### Unity6から追加されたBuild Profilesを活用してみた

[【Unity】Unity6から追加されたBuild Profilesを活用してみた – 株式会社ロジカルビート](https://logicalbeat.jp/blog/22542/)

Unity 6から追加されたビルドBuild Profilesを用いて、開発・リリース版、特別なバージョン（東京ゲームショウ展示用）のビルドをプロファイル切り替えで実現する方法や、スクリプトからそれぞれのプロファイルを切り替えてビルドする方法をそれぞれ紹介しています。

### TreeViewを使ってシート管理がしやすいEditor拡張を作ってみた

- [TreeViewを使ってシート管理がしやすいEditor拡張を作ってみた その1 #Unity - Qiita](https://qiita.com/jukey17/items/57d4aa096dab0625c74c)
- [TreeViewを使ってシート管理がしやすいEditor拡張を作ってみた その2 #Unity - Qiita](https://qiita.com/jukey17/items/bd0a5874f85959d63da6)

複数行のデータ（シート）をTreeViewを用いて表示・編集する方法を紹介しています。

### UGUI Shadersサンプルを使ったお手軽UI描画

[【Unity】UGUI Shadersサンプルを使ったお手軽UI描画 #uGUI - Qiita](https://qiita.com/cy-tatsuya-sakai/items/f78c60322d13bba83f22)

Shader GraphのuGUIのシェーダーをグラフで記述できる「UGUI Shaders」というサンプルパックを用いて、uGUI要素の見た目を調整する方法を紹介しています。

### いまさら聞けないFinal IK

[いまさら聞けないFinal IK #Unity - Qiita](https://qiita.com/matchyy/items/434aa7a69f2496f73dbd)

UnityでIKを実現するアセット「Final IK」の概要や、それぞれのコンポーネントで実現できることやその使い方をまとめています。

### マルチプラットフォーム課金実装のハマりどころ備忘録

[マルチプラットフォーム課金実装のハマりどころ備忘録 #iOS - Qiita](https://qiita.com/hmgm/items/9d6f6d5a85038c79089a)

iOS・Android・Steamでアプリ内課金を実装しテストする際に困った挙動についてそれぞれ紹介しています。

### 1行もコードを書かずにGeminiだけでUnityの大富豪ゲームを作って公開した話

[1行もコードを書かずにGeminiだけでUnityの大富豪ゲームを作って公開した話](https://zenn.dev/tomotomobile/articles/b5cf31891b77e2)

GeminiCLIでバイブコーディングによってUnityで簡易的なゲームを実装した時のプロンプトや所感について。

### UnityでGameObjectを新規作成する座標のオプション

[UnityでGameObjectを新規作成する座標のオプション](https://zenn.dev/yumineko/articles/23c1453dc3c6d6)

Unity 6頃から用意された、ゲームオブジェクトを新しく作った際の配置される座標のモード設定について紹介しています。

### VFX Graphで点群モーフィングを実装する

[VFX Graphで点群モーフィングを実装する #Unity - Qiita](https://qiita.com/generosity_honda/items/054e7f3bad7dea21cbaf)

VFX Graphで点群モーフィング（記事中では2形状の点群の線形補完）を実現するためのノードの実装方法について紹介しています。

### UnityのGraph Toolkitを知ろう！

[UnityのGraph Toolkitを知ろう！ #ノードスクリプティング - Qiita](https://qiita.com/tsune2ne/items/1203b6753b29dc0cfaa9)

Unity 6.3から利用できるグラフエディター制作のためのフレームワーク「Graph Toolkit」についてこの概要から、公式のサンプルの構成について紹介しています。


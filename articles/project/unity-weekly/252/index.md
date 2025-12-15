---
type: unity-weekly
title: Unity Weekly 252
description: >-
  2025/12/15週のUnity Weeklyです。Unity 6.4ベータリリース、Unity6.5破壊的変更紹介、ECS開発状況などを紹介しています。
pubDatetime: 2025-12-15T09:00:00+09:00
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Unity 6.4 Beta is now available

[Unity 6.4 Beta is now available - Unity Engine - Unity Discussions](https://discussions.unity.com/t/unity-6-4-beta-is-now-available/1690610/7)

Unity6.4ベータ版リリースが、ディスカッションにてアナウンスされています。

### 6.4 Beta Sweepstakes - Your chance to win one of three GPUs

[6.4 Beta Sweepstakes - Your chance to win one of three GPUs - Unity Engine - Unity Discussions](https://discussions.unity.com/t/6-4-beta-sweepstakes-your-chance-to-win-one-of-three-gpus/1698426)

Unity6.4ベータでのバグレポートで、オリジナルなバグと認定されたら、NvidiaのGPUが貰えるチャンスを獲得できる「6.4 Beta Sweepstakes」というコンテストが開催されていることを告知するディスカッションです。

来年の2/23まで開催しており、それぞれ下記のGPUがもらえるとのことです。

- First winner: ASUS Dual GeForce RTX 5070
- Second winner: ASUS Dual GeForce RTX 4070 Super
- Third winner: ASUS Dual GeForce RTX 5060 Ti

### Planned breaking changes in Unity 6.5

[Planned breaking changes in Unity 6.5 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/planned-breaking-changes-in-unity-6-5/1694205)

Unity6.5における破壊的変更をアナウンスするディスカッションです。

このバージョンにおける主要な破壊的変更として、下記の変更とその概要を紹介しています。

- Android APIの最小バージョンが26(8.0)に変更
- RenderGraphでは現状HDRPで使っているレガシーインターフェイスとURPで使っている新しいインターフェイスの2つがあるが、これがURP側の新しいインターフェイスに統一されて古いインターフェイスが消える対応が入る
- Android Navigation Barがフルスクリーンステートから分離され、それに踏まえてそれぞれの状態を管理するための新たなAPIが追加
- Rendering DebuggerがUI Toolkitベースの実装に置き換えられる
- VR Moduleの削除
- Entitiess1.4でのForEachとAspects APIの削除に合わせて今後このAPIが削除、`SystemAPI.Query`に移行する必要がある
- ModelImporter APIの一部APIを利用するとコンパイルエラーするように
- ReplayKitのサポート廃止
- Editor.logのデフォルトパスが変更される
- 「ECS for all」の一環として行われるInstanceIDのEntityIdへの移行の一環として、6.5ではInstanceIDを利用するとコンパイルエラーとなる

### ECS Development Status - December 2025

[ECS Development Status - December 2025 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/ecs-development-status-december-2025/1699284)

ECSの2025/12時点での開発状況を伝えるディスカッションです。

Unity 6.4に入る変更として、ECS関連のパッケージのコアパッケージ化（エディターに付属するパッケージとなる）や、エディター側にECS側のEntityIdとGameObject側のInstanceIDの両方をもつEntityID型が新たに追加され、合わせて既存のInstanceIDが非推奨になる（オブジェクトを識別するIDとしてEntityIdの利用が推奨される）ことを告知しています。

また、今後のUnity6において、「ECS for All」に基づいてGameObjectにECSのコンポーネントデータをアタッチできる対応が入ることもアナウンスしています。

### Unity 6.3 - Addressables and HTTP/2 support

[Unity 6.3 - Addressables and HTTP/2 support - Unity Engine - Unity Discussions](https://discussions.unity.com/t/unity-6-3-addressables-and-http-2-support/1698805)

Unity 6.3で、UnityWebRequestがHTTP/2を標準でサポートすることから、Addressablesでも実質HTTP/2をサポートしていることを伝えるディスカッションです。

### Unity Learn | 2D Adventure Game: Robot Repair REVAMP! 

[Unity Learn | 2D Adventure Game: Robot Repair REVAMP! - Learn Content - Unity Discussions](https://discussions.unity.com/t/unity-learn-2d-adventure-game-robot-repair-revamp/1699617)

Unity Learnに「[2D Adventure Game: Robot Repair](https://learn.unity.com/course/2D-adventure-robot-repair?version=6.3)」という新しい2Dの学習リソースが追加されたことを告知するディスカッションです。

## Articles

### Unity6.3から6.4への現時点での更新内容まとめ

[Unity6.3から6.4への現時点での更新内容まとめ](https://zenn.dev/aakei/articles/unity-api-6_4)

Unity 6.4の現時点のchangelogやapiの差分について、その内訳を説明しています。

### Unity 6.3: RSUV で描画を軽量化する

[Unity 6.3: RSUV で描画を軽量化する](https://zenn.dev/ruccho/articles/6938101ba6696b)

Unity6.3から使えるRenderer Shader User Valueについて、この仕組みが登場した背景から使い方、ProfilerやMemoryProfilerやCPUやメモリ使用量やPIXを用いた描画パスの改善などの各種計測結果を紹介しています。

### Unity as a Library 再入門 (Android編: Unity 6.3 + Jetpack Compose)

[Unity as a Library 再入門 (Android編: Unity 6.3 + Jetpack Compose)](https://zenn.dev/reality_tech/articles/1134aca88503a9)

簡単なUnityアプリをUaaL化し、Jetpack ComposeベースのAndroidプロジェクトに取り込んで動かす方法から、Unityアプリケーションに対してSendMessageベースでメソッドを呼び出す方法についてそれぞれ解説しています。

### スクリプト言語ベースのADVシステムとスクリプト中のセーブ&ロード、ホットリロードの実装例【LuaCSharp】

[【Unity】スクリプト言語ベースのADVシステムとスクリプト中のセーブ&ロード、ホットリロードの実装例【LuaCSharp】 #Unity - Qiita](https://qiita.com/watabe_h/items/8de97b021a433b32857f)

LuaCsharp で（Luaスクリプトの）ホットロードに対応したADVエンジンを実装する方法を解説しています。

### いろいろな参照の形 (UnityYAML)

[いろいろな参照の形 (UnityYAML) #Unity - Qiita](https://qiita.com/caramel_cafe/items/8d410bfea362e396bef6)

Unityのmetaファイルを覗いて、アセットの参照方法としてGUIDとFileIDの形式や、それぞれがどのようにアセットを引いているのかについて説明しています。

### 型によるswitchの「網羅漏れ」を検出するRoslynAnalyzer「ExhaustiveSwitch」を作った

[【Unity】型によるswitchの「網羅漏れ」を検出するRoslynAnalyzer「ExhaustiveSwitch」を作った](https://zenn.dev/gameshalico/articles/4ab267ca7e74a4)

型スイッチにおいて、その抽象型が実装されてる具体型を網羅していない場合にエラーとするRoslyn Analyzerの実装を紹介しています。

### Unityのツールバーにgitの現在のブランチを表示する。ついでにブランチ一覧も引いてきて表示する。

[Unityのツールバーにgitの現在のブランチを表示する。ついでにブランチ一覧も引いてきて表示する。 #Git - Qiita](https://qiita.com/ScreenPocket/items/5065cd020ad4649b9115)

Unity6.3から使える、メインツールバーをカスタマイズできるMainToolbarElementAttributeを用いて、そのプロジェクトの現在のgitブランチを表示する実装を紹介しています。

### 【イベントレポ】: U/Day Tokyo 2025

[【イベントレポ】: U/Day Tokyo 2025 - Raspberlyのブログ](https://raspberly.hateblo.jp/entry/UDayTokyo2025)

このブログの著者によru、U/Day Tokyo 2025の参加レポートです。

### インフレ系ゲームの天文学的な数値はどう管理されているのか調べてみた

[インフレ系ゲームの天文学的な数値はどう管理されているのか調べてみた #C# - Qiita](https://qiita.com/kapi_takahashi/items/5a06599af29f66785544)

放置系ゲームなどである、longなどでは桁落ちしてしまうような数値を扱うためのBigIntegerやサードパーティ製のライブラリを紹介しています。

### MemoryProfilerでメモリ蓄積を調査する手順 

[【Unity】MemoryProfilerでメモリ蓄積を調査する手順 #Unity - Qiita](https://qiita.com/_EorF/items/c7421babb060d3dd31f7)

MemoryProfilerを用いてメモリリークを特定して対応していく方法を、簡単なリークを題材に、ステップバイステップで説明しています。

### Claude Code での Unity 開発の振り返り (2025年)

[Claude Code での Unity 開発の振り返り (2025年) - すぎしーのXRと3DCG](https://tsgcpp.hateblo.jp/entry/cluster_advent_calendar_2025)

Unity開発でのClaude Codeの活用事例として、UnityEditor向けのツール制作やInputActionの編集、エラー通知（Sentry MCP Server）からの修正案の提案などの活用方法を紹介しています。

### Unity WebGLとフロントエンドを繋ぐ型安全なメッセージングの設計と実装

[Unity WebGLとフロントエンドを繋ぐ型安全なメッセージングの設計と実装 #TypeScript - Qiita](https://qiita.com/iori_yuki/items/11d4ccf5197e7ff5e332)

Avatar Makerで行っているWebGLビルドしたUnityアプリからWebフロントエンドと疎通する際のメッセージについて、実行時に型を検証、確定して安全にメッセージを疎通し合うための設計や実装、非同期処理の考慮などそれぞれ説明しています。

### uGUI対応のLineRendererを作成してみた

[uGUI対応のLineRendererを作成してみた #C# - Qiita](https://qiita.com/xeon_lagunas/items/26020b3d30ef93c8d25d)

uGUIで、独自のLineRendererを実装するためのコンポーネントの準備から、線を破綻なく綺麗に描画するために使えるテクニックとして「マイター結合」や「ベベル結合」についてそれぞれ解説しています。

### uGUIで長さが変わるテキストボックスを作りたい

[【Unity】uGUIで長さが変わるテキストボックスを作りたい](https://zenn.dev/livetoon/articles/9a4ad96bcbfbe8)

uGUIの自動レイアウトを用いて、チャットUIのような、横固定で縦が可変なテキストボックスを実装する方法を具体的なコンポーネントの設定の説明も踏まえつつ紹介しています。

### Unity6.3のUIToolkitの新機能を触ってみる

[Unity6.3のUIToolkitの新機能を触ってみる #Shader - Qiita](https://qiita.com/Sakutaro111/items/780fb3ddeb904b9d6bec)

Unity 6.3のUI Toolkitで利用できる機能の中から、Shader GraphによるカスタムUIシェーダーとFilter（ポストプロセス）の実装のについてそれぞれ紹介しています。

### Unity Test Framework完全攻略ガイド 第3版

[Unity Test Framework完全攻略ガイド 第3版 - やらなイカ？](https://www.nowsprinting.com/entry/2025/12/13/180623)

ブログの著者が執筆しているTest Frameworkを使ったUnityのテストに関する書籍「Unity Test Framework完全攻略ガイド 第3版」の目次と各章の概要を紹介しています。

### UIToolkitをテストできるUI Test Frameworkが追加されたよ！

[【Unity6.3】UIToolkitをテストできるUI Test Frameworkが追加されたよ！ #Unity - Qiita](https://qiita.com/tamutamuta/items/589f5dff68825ea4b4dc)

Unity 6.3から利用できる、UIToolkitのテストを行うためのライブラリ「UI Test Framework」の導入方法から簡単に使い方を紹介しています。

### UIToolkitをWorldSpaceで表示する

[【Unity】UIToolkitをWorldSpaceで表示する #Unity - Qiita](https://qiita.com/tamutamuta/items/a0c45af98db79d5c598f)

Unity 6.2から使えるUI Toolkit のWorld Space上への配置について、その設定方法を紹介しています。

### VRMモデルをランタイムロードして表情・体・口を動かす 

[【Unity】VRMモデルをランタイムロードして表情・体・口を動かす #UniVRM - Qiita](https://qiita.com/dokudami/items/75c0a8e17af94c0e57c0)

ランタイム上でロードしたVRMのフェイシャルの変更や、PlayableGraphを用いたボディのアニメーション制御、uLipSyncを用いたリップシンクなどの実装を紹介しています。

### アニメーション遷移行列

[【Unity】アニメーション遷移行列 #Unity - Qiita](https://qiita.com/nZm31/items/d2777973a2022cca1bbd)

アニメーション制御のための独自の遷移制御スクリプトおよびエディター拡張の実装を紹介しています。

### Adaptive Probe Volumesと他ライティング手法のルック比較

- [【Unity】Adaptive Probe Volumesと他ライティング手法のルック比較](https://zenn.dev/ambr_inc/articles/83d28c7b123a8a)
- [【Unity】Adaptive Probe Volumesと他ライティング手法の負荷比較](https://zenn.dev/ambr_inc/articles/357109cfbc142e)

Adaptive Probe Volumesと、Unity標準のライトマップやリアルタイムライティング、サードパーティアセットBaleryなどでのルックや処理負荷を比較しています。

### Armのプロファイリングツール『Streamline』でオーバードローを計測してみた

[Armのプロファイリングツール『Streamline』でオーバードローを計測してみた #Unity - Qiita](https://qiita.com/ayaha401/items/7e831806ff2e2ebbafdb)

Arm製のプロファイリングツール「Streamline」を用いてAndroidの実機上でUnityアプリをプロファイリングする方法を紹介しています。

### UnityEditorのアイコンを画像に差し替えるOSS「Unicon」を作ってみた

[UnityEditorのアイコンを画像に差し替えるOSS「Unicon」を作ってみた](https://zenn.dev/matsuataru/articles/unicon_adcale_2025)

ブログの著者が開発する、UnityEditorのアイコンを差し替える「Unicon（https://github.com/AtaruMatsudaira/Unicon/）」について、アイコン差し替えの実装を紹介しています。

### Unityで3D地図をロードできるGeoTileLoaderを作りました【STYLY World Canvasでも利用】

[Unityで3D地図をロードできるGeoTileLoaderを作りました【STYLY World Canvasでも利用】 #Geolocation - Qiita](https://qiita.com/mhama/items/4e9f654d0b1a5656ec8a)

STYLY 社が開発する3D Tiles形式の3D地図をロードするための「[GeoTileLoader](https://qiita.com/mhama/items/4e9f654d0b1a5656ec8a)」について、3D Tiles形式の概要から同様のライブラリ「Cesium for Unity」との違い、このライブラリの使い方をそれぞれまとめています。

### VisionProでBluetoothLowEnergy(BLE)を用いた自作デバイスを利用する方法

[VisionProでBluetoothLowEnergy(BLE)を用いた自作デバイスを利用する方法 #Swift - Qiita](https://qiita.com/SAyanada9/items/85b8709fa581dd779e52)

Vision ProでBlueTooth通信を用いたデバイスとの双方向通信について、ネイティブプラグインやポストプロセスビルドの実装方法を説明しています。

### OpenXRとMeta Questではじめる！AR/MRアプリの現実世界との位置合わせ - ARアンカーの共有編 -

[OpenXRとMeta Questではじめる！AR/MRアプリの現実世界との位置合わせ - ARアンカーの共有編 -](https://zenn.dev/meson_tech_blog/articles/openxr-meta-shared-anchor)

OpenXRとAR Foundationを用いて、グループベース共有での共有アンカー（Shared Anchor）を利用する方法について、その基本的なセットアップから実装までを紹介しています。

### XREAL Air 2 Ultra + Beam Pro 開発入門 〜Unityで作るARクリスマスリース〜

[XREAL Air 2 Ultra + Beam Pro 開発入門 〜Unityで作るARクリスマスリース〜](https://zenn.dev/jigjp_engineer/articles/674d1f7134ea2f)

UnityでXREAL Air 2 Ultra + Beam Pro 向けのアプリケーションを作るための導入を紹介しています。


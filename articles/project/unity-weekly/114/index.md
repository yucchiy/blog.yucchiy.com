---
type: unity-weekly
title: Unity Weekly 114
description: >-
  2023/03/27週のUnity Weeklyです。 ECS、UGS、Memory Profiler、PRINCIPLES、Anime
  Toolboxなどについてまとめています。
pubDatetime: 2023-03-26T15:00:01.000Z
tags:
  - Unity Weekly
  - Unity
---


## Unity Officials

### Runtime authoring in projects using ECS for Unity
[Runtime authoring in projects using ECS for Unity | Unity Blog](https://blog.unity.com/engine-platform/runtime-authoring-in-projects-using-ecs)

[ECS for Unity](https://unity.com/ecs) でのオーサリングデータとランタイムデータの二重性を管理するためのData Modesというパターンやエディター環境、ワークフローについて紹介しています。


### Bringing the social experience to your games: Friends &amp; Leaderboards

[Bringing the social experience to your games: Friends &amp; Leaderboards | Unity Blog](https://blog.unity.com/engine-platform/introducing-friends-and-leaderboards)

UGS（Unity Gaming Services）で新しく提供される「Friends」と「Leaderboards」についてその概要や参考となる実装について紹介しています。


### Memory Profiler 1.1.0-exp.1 Released

[Official - Memory Profiler 1.1.0-exp.1 Released](https://forum.unity.com/threads/memory-profiler-1-1-0-exp-1-released.1415592/)

Memory Profilerのv1.1.0の実験バージョンが公開されました。このリリースで下記機能が新しく実装されました。

- Resident Memory Information（常駐メモリに関する情報）
- Managed Object Search Improvements
    - 通常マネージドオブジェクトは `No Name` が割り当てられて検索しづらかったが、テーブルのDescriptionカラムなども検索に含めるようになった
    - マネージドオブジェクトのアドレスやインスタンスIDでも検索ができるようになった
    - All Of Memoryテーブルにマネージドオブジェクトのアドレスが表示されるようになった
    - Unity ObjectsテーブルのMonoBehaviourとScriptableObjectを継承するスクリプトの型表示が細分化されるようになった。これにより型名や名前空間による検索とフィルタリングが可能になり、さらにネイティブメモリ使用量の影響の分析も簡単に行えるように。
- Improved Comparison Mode
    - Comparison ModeのAll Of Memoryビューでのマネージドオブジェクト名をそのオブジェクトのアドレスで指定するように変更
    - スナップショット比較の各種ビューで、ネイティブオブジェクトのインスタンスIDを個別にリストするようにし、オブジェクトの比較をしやすくなった。
- Render Texture Details
    - Textureオブジェクト同様に、Render Textureのフォーマットやサイズなどのメタデータを表示するようになった
    - Unity 2023.1以降では、resolve surfaceにcolorまたはdepth surfaceかそれを組み合わせて利用しているかどうかも確認できるように


### PRINCIPLESのグラフィック技術

[PRINCIPLESのグラフィック技術](https://www.youtube.com/watch?v=qKTX5GKKpwM)

COLOPL Creatorsによる短編アドベンジャーゲームPRINCIPLESについて、そのグラフィックス表現の技術的側面をインタビュー形式で深ぼっています。

各種3D表現やVFX Graphによる火花表現、破壊表現、パーティクルのためのシェーダーやMotionVectorによる補間、草木の編集のためのSpeedTreeの活用、タイムライン活用などについて解説しています。


### Meshクラス入門・ラインを描いてみよう！

[【Unity】Meshクラス入門・ラインを描いてみよう！](https://youtu.be/fv5OqLD3lEY)

Meshクラスを用いたスクリプトによるメッシュ描画について、三角形の描画を通して頂点バッファーとインデックスバッファーの設定方法とトポロジーの説明、応用として波を打つアニメーションを行うプレーンメッシュを生成する方法について解説しています。


### 今日からはじめるAnime Toolbox『プロによる作画アニメーション風の画面作りのコツをみてみよう~』

* [今日からはじめるAnime Toolbox第5回『プロによる作画アニメーション風の画面作りのコツをみてみよう~その1：MIKONOTE Anime Toolbox Sampleをみてみよう~』｜Nobuyuki Kobayashi@nyaa_toraneko｜note](https://note.com/nyaa_toraneko/n/n7bf182583aef)
* [今日からはじめるAnime Toolbox第6回『プロによる作画アニメーション風の画面作りのコツをみてみよう~その２：コンポジターグラフの基本構成をみてみよう~』｜Nobuyuki Kobayashi@nyaa_toraneko｜note](https://note.com/nyaa_toraneko/n/n2dccab1b5f4f)
* [今日からはじめるAnime Toolbox第7回『プロによる作画アニメーション風の画面作りのコツをみてみよう~その３：C105のコンポジションをじっくりみてみよう~』｜Nobuyuki Kobayashi@nyaa_toraneko｜note](https://note.com/nyaa_toraneko/n/n177e8cfb5d2b)
* [今日からはじめるAnime Toolbox第8回『プロによる作画アニメーション風の画面作りのコツをみてみよう~その４：C106のコンポジションをじっくりみてみよう~』｜Nobuyuki Kobayashi@nyaa_toraneko｜note](https://note.com/nyaa_toraneko/n/na93da77151ff)

アニメ制作スタジオである[グラフィニカ](http://www.graphinica.com/index.html)によって制作された、放送用のアニメ本編で実際に使われるレベルのAnime Toolboxの作例である『[MIKONOTE Anime Toolbox Sample](https://assetstore.unity.com/packages/templates/tutorials/mikonote-anime-toolbox-sample-237176)』のコンポジットグラフの構成とそれぞれのコンポジットブロックの構成から、Unity上で表現するためのタイムラインなどの活用方法についてその詳細を4記事にわけて解説しています。

## Unity Repositories

### option to blend out from snapshot

[https://github.com/Unity-Technologies/com.unity.cinemachine/pull/841](https://github.com/Unity-Technologies/com.unity.cinemachine/pull/841)

Cinemachineパッケージのカメラのブレンドオプションに「Freeze When Blending Out」が追加された。

通常カメラのブレンドアウト時に、ブレンドアウトするカメラはライブ状態（つまり定期更新が走る状態）だが、このブレンドオプションを設定するとブレンドアウトカメラのスナップショットをとって、更新を停止した状態でブレンドを行う。

## Articles

### 令和5年になったのでそろそろUnityでHTTP/3通信したい

[令和5年になったのでそろそろUnityでHTTP/3通信したい](https://zenn.dev/takehara_ryo/articles/0b0eb8126054c1)

UnityでHTTP/3通信を行うためのライブラリ[nhh3](https://github.com/TakeharaR/nhh3)の実装の元に、HTTP/3通信をUnityで行うために利用を検討したOSSや実際に利用したquicheのビルド方法や利用方法に関するTips、実装に際して躓いた課題、Unity実装などについてまとめています。


### MirrativにおけるUnityのWebGLを用いたライブゲームの仕組み

[MirrativにおけるUnityのWebGLを用いたライブゲームの仕組み - Mirrativ Tech Blog](https://tech.mirrativ.stream/entry/2023/03/24/170651)

Mirrativが提供するUnity WebGL製のライフゲーム実装について、WebGLで開発を行った経緯やメリット、MirrativアプリとWebGLアプリの構成やゲームサーバーとMirrativサーバーとのそれぞれの通信方法について紹介しています。


### 非公式和訳）Unity - level up your code with game programming patterns

[(非公式和訳）Unity - level up your code with game programming patterns](https://zenn.dev/twugo/books/21cb3a6515e7b8)

Unity公式のゲーム開発に関するデザインパターンや設計についてまとめたe-book「[Level up your code with game programming patterns](https://resources.unity.com/games/level-up-your-code-with-game-programming-patterns)」の、非公式による和訳が公開されています。


### Outline Post Process in Unity Shader Graph (URP)

[Outline Post Process in Unity Shader Graph (URP)](https://danielilett.com/2023-03-21-tut7-1-fullscreen-outlines/)

Fullscreen Shader Graphを用いたURPでアウトライン描画をポストエフェクトで行う方法について、カラーと法線ベースでの実装方法を紹介しています。


### Unityで複数種別のファイルが混在しているフォルダから特定の種別だけ選択する方法

[【ハルシオンブログ】Unityで複数種別のファイルが混在しているフォルダから特定の種別だけ選択する方法](http://halcyonsystemblog.jp/blog-entry-962.html)

プロジェクトビューで複数種類のファイルをまとめて選択した状態で、特定の種類のファイルだけを選択し直す方法について紹介しています。


### Unity (C#) の各演算の処理コストのまとめ

[Unity (C#) の各演算の処理コストのまとめ - Qiita](https://qiita.com/uminohiyoko/items/1dfeae592402697be025)

C#での各演算がどの程度の処理時間になるかについてまとめています。


### UnityでAndroidのネイティブGUIを出したい

[【Unity】UnityでAndroidのネイティブGUIを出したい - Qiita](https://qiita.com/AtsuAtsu0120/items/c8898c4888610e1271af)

Unity上でAndroidのネイティブGUI（Android標準のUI）を表示する方法について、TimePickerDialogを題材にkotlinでのUI呼び出しの実装とkotlinとC#の連携方法についてそれぞれ解説しています。

## Slides

### C# と HTTP/2 と gRPC

[C# と HTTP/2 と gRPC](https://speakerdeck.com/nenonaninu/2-to-grpc)

HTTP/2通信の基本、StreamやFrameType、Application-Layer Protocol Negotiationについてと、C#でHTTP/2を扱うための各種クラスやパラメーター、実装について解説しています。

## Repositories

### Unity-Grass

[cainrademan/Unity-Grass](https://github.com/cainrademan/Unity-Grass)

コンピュートシェーダーとシェーダーを用いたプロシージャルな草の描画システム。「[Procedural Grass in ‘Ghost of Tsushima’](https://www.youtube.com/watch?v=Ibe1JBF5i5Y)」を参考に実装されている。

3次ベジェ曲線による形状制御、風アニメーション、ライト、クランピング、フラスタム・ディスタンスカリングなど、さまざまな機能が実装されている。

### ChatdollKit

[uezo/ChatdollKit: ChatdollKit enables you to make your 3D model into a chatbot](https://github.com/uezo/ChatdollKit)

3Dモデルを使って音声対話可能なチャットボットを作るためのフレームワーク。

発話とアニメーション同期・フェイシャル制御などのモデル制御、音声認識・テキスト読み上げ・対話のステート管理・ChatGPT対応や感情シミュレーションなどの対話制御、複数プラットフォーム対応などの特徴を持つ。


### Simple Voronoi Fragmenter

[simplestargame/SimpleVoronoiFragmenter: Unity Voronoi-based Runtime Destruction Asset](https://github.com/simplestargame/SimpleVoronoiFragmenter)

ランタイムでのオブジェクトの破壊表現ができるスクリプトアセット。


### SerializeReferenceDropdown

[AlexeyTaranov/SerializeReferenceDropdown: (Unity) Editor dropdown for SerializeReference Attribute with Copy/Paste](https://github.com/AlexeyTaranov/SerializeReferenceDropdown)

SerializeReferenceのついたフィールドのサブクラスの一覧表示するための属性実装。あわせて値のコピー＆ペーストも行うことができる。


### Unity-ScreenSpaceReflections-URP

[JoshuaLim007/Unity-ScreenSpaceReflections-URP: SSR solution for Unity URP](https://github.com/JoshuaLim007/Unity-ScreenSpaceReflections-URP)

URPでのSSR（ScreenSpaceReflections）実装。


### Unity Bounding Volume Heirachy

[rossborchers/UnityBoundingVolumeHeirachy: Unity Bounding Volume Heirachy (BVH)](https://github.com/rossborchers/UnityBoundingVolumeHeirachy)

Unityで利用できるBVH（Bounding Volume Heirachy）実装。

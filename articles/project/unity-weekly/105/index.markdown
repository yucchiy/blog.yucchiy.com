---
type: "unity-weekly"
title: "Unity Weekly 105"
description: "2023/01/23週のUnity Weeklyです。シェーダーバリアントの事前フィルタリングと動的なシェーダーロード、Havok Physics for Unity、Authoring Dev Blitz Day、mocopiなどのついて取り上げています。"
tags: ["Unity Weekly","Unity"]
date: "2023-01-23T00:00:01"

---

## Unity Officials

### Unity 2021 LTS におけるシェーダーのビルド時間とメモリ使用量の改善

[Unity 2021 LTS におけるシェーダーのビルド時間とメモリ使用量の改善 | Unity Blog](https://blog.unity.com/ja/technology/2021-lts-improvements-to-shader-build-times-and-memory-usage)

Unity 2021 LTSに実装されているシェーダーのビルド時間とメモリ使用量の改善について、シェーダーバリアントの事前フィルタリングおよび動的なシェーダー読み込み機能を中心に解説しています。

### Havok Physics for Unity が製品版としてサポートされました

[Havok Physics for Unity が製品版としてサポートされました | Unity Blog](https://blog.unity.com/ja/technology/havok-physics-now-supported-for-production)

Havok Physicsが正式に製品版としてサポートされることがアナウンスされました。

Havok Physicsは、Unity Pro・Enterprise・Industrial Collectionに加入していると無料で利用できるとのことです。

### Unityのビルド時間を大幅削減！？Shader Variant Prefilteringの紹介

[Unityのビルド時間を大幅削減！？Shader Variant Prefilteringの紹介 - YouTube](https://www.youtube.com/watch?v=cSQnQgCIeys)

Shader Variant Prefiltering（シェーダーバリアントの事前フィルタリング）によるビルド時間の削減について紹介しています。

Shader Variant Prefilteringとビルド時間削減の原理、シェーダーバリアントについて、シェーダーバリアントの欠点について、Shader Variant Prefilteringの機能について、それぞれ解説しています。

### Authoring Dev Blitz Day 2022 - Q&A

[Official - Authoring Dev Blitz Day 2022 - Q&A - Unity Forum](https://forum.unity.com/threads/authoring-dev-blitz-day-2022-q-a.1388259/)

Unity開発者が直接フォーラム・Discord上で質問に答えるDev Blitz Dayが、今回はオーサリングツールの開発チームが参加して1/26に開催されます。

参加者は、検索・エディターツール・シーンワークフロー・スプラインツール・ProBuilder・GraphView・Entitiesツールなど、オーサリングツールに関する質問ができます。

前日の1/25に質問を受け付け、1/26の8:00〜16:00（EST）の間にそれらの質問に答えます。

## Articles

### URP14で追加された、Full Screen Pass Renderer Featureを読む

[URP14で追加された、Full Screen Pass Renderer Featureを読む](https://zenn.dev/sakutaro/articles/full_screen_pass_renderer_feature)

URP（Universal Render Pipeline）14で実装された画面全体へのポストエフェクトをかけることのできるFull Screen Pass Renderer Featureについて、その内部実装や処理フローをソースコードを追いつつ解説しています。

### MemoryPackで独自のバージョニングを行う

[MemoryPackで独自のバージョニングを行う | Yucchiy's Note](https://blog.yucchiy.com/2023/01/memorypack-custom-versioning/)

MemoryPackで、ヘッダーにデータを埋め込むことで独自のバージョニングを行う方法について紹介しています。

### SteamDeck上でUnityのVideoPlayerを利用しても動画が再生されない時の解決策

[SteamDeck上でUnityのVideoPlayerを利用しても動画が再生されない時の解決策 - きゅぶろぐ](https://blog.kyubuns.dev/entry/2023/01/19/113035)

StreamDeck上でUnityのVideoPlayerでの動画再生が正常に行えない原因とその対応方法について紹介しています。

### mocopiのトラッキングデータをUnityで利用する

[mocopiのトラッキングデータをUnityで利用する - Qiita](https://qiita.com/tsune2ne/items/696742b41582bb3ae18b)

mocopiで記録したモーションのトラッキングデータをUnityに送信して、UnityのAnimationClipとして取り込んで再生する方法について紹介しています。

### Unityプロジェクトを解析し、改善点を教えてくれる ProjectAuditor

[Unityプロジェクトを解析し、改善点を教えてくれる ProjectAuditor【Unity】【アセット】【最適化】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/ProjectAuditor?utm_source=feed)

Unityプロジェクトのアセットや設定、スクリプトを解析して改善点をレポートする静的解析ツールProject Auditorについて、導入方法から基本的な使い方をまとめています。

### DoTweenでUniTaskを対応させてawaitできるようにする

[【Unity】DoTweenでUniTaskを対応させてawaitできるようにする - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2023/01/19/120000)

UniTaskが公式で提供するDoTweenサポートを有効化する方法について紹介しています。

## Repositories

### Transform Changes Debugger API

[handzlikchris/Unity.TransformChangesDebugger.API: Tool will enable you to view and debug changes to position/rotation/scale on any Unity transform done by any method/setter on a frame by frame basis.](https://github.com/handzlikchris/Unity.TransformChangesDebugger.API?)

Transformのposition・rotation・scaleの変更を監視して、フレーム単位で表示およびデバッグを行うことのできるライブラリ。

### MonoBehaviourTree

[Qriva/MonoBehaviourTree: Simple event driven Behaviour tree for Unity projects](https://github.com/Qriva/MonoBehaviourTree?)

シンプルな、イベントドリブンによるBehaviourTree実装。ミニマムなノードライブラリとツリーのビジュアルエディターが付属している。

### Decision Trees for Unity

[KieranCoppins/Decision-Tree-Package: An open source Unity package for creating Decision Trees with a visual editor. The package comes with some samples to help teach users how to use it and an action manager to handle executing the results of the decision tree.](https://github.com/KieranCoppins/Decision-Tree-Package?)

ビジュアルエディター上で決定木を作成できるライブラリ。

### Bookmark4Unity

[superkerokero/Bookmark4Unity: A simple unity editor tool to provide basic bookmarking for scene objects, scene view camera positions, and project assets.](https://github.com/superkerokero/Bookmark4Unity?)

シーン上のオブジェクトやプロジェクトアセット、シーンビュー上のカメラ位置などをブックマークすることのできるシンプルなエディターツール。

### Vloxy Engine

[BLaZeKiLL/VloxyEngine: Performance oriented voxel engine for unity.](https://github.com/BLaZeKiLL/VloxyEngine?)

パフォーマンスを重視したUnity向けボクセルエンジン。

### Water shader in Unity 3D

[leonjovanovic/water-shader-unity: Simulation of water in Unity](https://github.com/leonjovanovic/water-shader-unity?)

よりリアルな水を描画するためのシェーダー実装。反射・屈折・コースティクス・波・流れ・水中霧などが実装されている。

### PolyExtruder

[nicoversity/unity_polyextruder: Create custom meshes (2D polygons) in Unity3D, incl. functionality to extrude them (into 3D prisms).](https://github.com/nicoversity/unity_polyextruder?)

ランタイム上で、頂点配列から2Dメッシュをxz座標に沿って作成するライブラリ。
また、生成したメッシュに対して、y座標方向に押し出したメッシュを作成する機能もあわせて提供されている。

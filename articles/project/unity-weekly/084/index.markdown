---
type: "unity-weekly"
title: "デノイズフィルター、RendererMesh API、Pixyz 2022.1 Update - Unity Weekly #084"
description: "2022/09/05週のUnity Weeklyです。デノイズフィルター、RendererMesh API、Pixyz 2022.1 Updateなどについてまとめています。"
tags: ["Unity Weekly","Unity"]
date: "2022-09-05T15:00:00"

---

## Unity Officials

### Pixyz 2022.1：3D データ処理ワークフロー全体の改善

[Pixyz 2022.1：3D データ処理ワークフロー全体の改善 | Unity Blog](https://blog.unity.com/ja/manufacturing/pixyz-20221-improvements-across-3d-data-processing-workflows)

Pixyzの2022.1のアップデートについてまとめています。



Autodesk Navisworks形式インポートのサポート、PVZ形式のファイルのサポート、Pixyzで処理されたモデルをエディターに取り込む際に3DモデルをUnityプレハブとしてエクスポートするようにする対応、インポートのパフォーマンス改善、Pixyz ReviewとPixyz Studioのアップデートなどについてそれぞれまとめています。

### パストレ時間が超短縮！デノイザを使ってみよう

[【Unity/HDRP】パストレ時間が超短縮！デノイザを使ってみよう - YouTube](https://www.youtube.com/watch?v=qeEBbkLEynM)

Unity 2022.2以降で利用できる、HDRP（High Definition Render Pipeline）のパストレーシングのデノイズフィルターについて紹介しています。



搭載されてたデノイズフィルターの種類の紹介、パストレーシングのレンダリング画像にデノイザを適用することでどのように見た目が変化するかなどについて解説しています。

### RenderMesh API で大量のオブジェクトを描画してみよう

[【Unity】RenderMesh API で大量のオブジェクトを描画してみよう - YouTube](https://www.youtube.com/watch?v=d6i9hvJ-xcM)

Unityで大量のオブジェクトを描画する際に利用できる `Graphics.RenderMesh` メソッドについて紹介しています。



`Graphics.RenderMesh` の基本的な使い方やインスタンス描画をサポートした `Graphics.RenderMeshInstanced` の使い方、それぞれの手法でのパフォーマンス比較、 `Graphics.RenderMeshInstanced` を用いた場合のデメリットとしてカリングの粒度、使い分けの方針について、それぞれまとめています。

## Articles

### パフォーマンス情報をグラフィカルに可視化できるOSS『Graphy』紹介

[【Unity】パフォーマンス情報をグラフィカルに可視化できるOSS『Graphy』紹介 - LIGHT11](https://light11.hatenadiary.com/entry/2022/09/05/193916)

FPSやメモリ使用量などをランタイムで確認するためのOSS「[Graphy](https://github.com/Tayx94/graphy)」の基本的な使い方について紹介しています。

### Accessing IBufferElementData elements in a job struct

[Accessing IBufferElementData elements in a job struct – COFFEE BRAIN GAMES](https://coffeebraingames.wordpress.com/2022/08/30/accessing-ibufferelementdata-elements-in-a-job-struct/)

`IBufferElementData` を実装するジョブ構造体の扱い方について、 `IComponentData` との利用方法の違いなどに触れつつ解説しています。

### ツカサ式スタック型ステートマシンの紹介（ゲーム向きのステートマシン実装）

[#unity ツカサ式スタック型ステートマシンの紹介（ゲーム向きのステートマシン実装） - 土屋つかさの技術ブログは今か無しか](https://someiyoshino.info/entry/2022/09/01/200643?utm_source=feed)

ブログ著者が利用している独自のスタック型ステートマシン「[T2sFSM](https://github.com/t-tutiya/T2sFSM)」について紹介しています。



基本的な使い方、ステートの組み方をサンプルコードを交えつつ解説しています。

### UnityのBuildSettingsウィンドウの表記とスクリプティングAPIの対応を纏めました（Unity 2021.3.0f1）

[UnityのBuildSettingsウィンドウの表記とスクリプティングAPIの対応を纏めました（Unity 2021.3.0f1） - Synamon’s Engineer blog](https://synamon.hatenablog.com/entry/2022/09/01/171256)

Unityの Build Settings ウインドウで設定できる項目を、コードで更新するためのAPIについて纏めています。

### 【Unity】【URP】【物理カメラ】カメラについて解説

[【Unity】【URP】【物理カメラ】カメラについて解説 - シェーダーTips](https://ny-program.hatenablog.com/entry/2022/09/01/103130)

URP（Universal Render Pipeline）を利用すると `Camera` コンポーネントにアタッチされる `UniversalAdditionalCameraData` の各種設定項目について解説しています。

### ゲームのライブ配信画面上で視聴者がステージを作って配信者に送れるシステムの構築

[ゲームのライブ配信画面上で視聴者がステージを作って配信者に送れるシステムの構築 - Qiita](https://qiita.com/Takaaki_Ichijo/items/feb8c4ca902f72c66cc3)

Twitch ExtensionsとGenvidを用いて、ライブ配信で視聴者がゲームのステージを構築して配信者にプレイしてもらうようなシステムを構築する方法について紹介しています。



構築するシステムの全体像から視聴者側の実装（ブラウザ側の実装）、配信者のゲーム側の実装（Unity側の実装）などについてそれぞれ解説しています。

### Repositories

### VoxToVFX

[Zarbuz/VoxToVFX: Import a MagicaVoxel project to Unity using the new VFX Graph](https://github.com/Zarbuz/VoxToVFX)

MagicaVoxelプロジェクトをUnityにVFX Graphとしてインポートするツール。



メッシュを作らないので巨大な空間のインポートが短時間で完了する、全ボクセルはGPU上でパーティクルとしてレンダリングされるなどの特徴があります。

### Better Streaming Assets

[gwiazdorrr/BetterStreamingAssets: A plugin for Unity that lets you access Streaming Assets directly on Android.](https://github.com/gwiazdorrr/BetterStreamingAssets)

Androidデバイズ上でStreaming Assetsに直接アクセスするためのより便利で、オーバーヘッドの少ないAPIを提供します。



AndroidでStreaming Assetsにアクセスするには、WWWクラスを介してアクセスするなどの実装が必要ですがこのライブラリではそれらの実装を隠蔽しています。また `System.IO.File` や `System.IO.Directory` クラスをベースに、よりC#ライクなAPIを提供しています。

### Unity Behaviour Tree Visualizer

[Yecats/UnityBehaviorTreeVisualizer: A tool built in Unity that draws a graph representation of behavior trees running in the scene](https://github.com/Yecats/UnityBehaviorTreeVisualizer)

Behaviour Treeの実装と、そのビジュアライザー。ビジュアライザーは、Behaviour Treeの各ノードの可視化だけでなく、現在実行中のハイライトやノードの変数などの情報などについても可視化しています。

### BakeShader

[Cyanilux/BakeShader: Unity editor tool for baking shaders to textures. Blit2D, Blit3D, or MeshRenderer (uses model UV). Adds options to Material & MeshRenderer context menus and Editor Window (under Window/Cyanilux/BakeShader)](https://github.com/Cyanilux/BakeShader)

シェーダーの描画情報をテクスチャにベイクするためのUnityエディターツール。

### UnityPlayableGraphMonitorTool

[SolarianZ/UnityPlayableGraphMonitorTool: PlayableGraph monitor tool inspired by PlayableGraph Visualizer and implemented in UIElements.](https://github.com/SolarianZ/UnityPlayableGraphMonitorTool)

[PlayableGraph Visualizer](https://github.com/Unity-Technologies/graph-visualizer)のような PlayableGraphのモニタリングツール。UIElements製。



本家のPlayableGraph Visualizerにない機能として、グラフビューのズーム・ドラッグなどがあります。

### Build Report Inspector for Unity

[Unity-Technologies/BuildReportInspector: Editor script which implements an inspector for the BuildReport class](https://github.com/Unity-Technologies/BuildReportInspector)

Unityのビルド時に出力する `BuildReport` クラスをわかりやすく可視化するインスペクター実装。


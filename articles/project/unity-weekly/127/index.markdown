---
type: "unity-weekly"
title: "Unity Weekly 127"
description: "2023/06/26週のUnity Weeklyです。Meta Quest3、Ziva VFX、Parsecなどについてまとめています。"
tags: ["Unity Weekly","Unity"]
date: "2023-06-26T00:00:01"

---

## Unity Officials

### Get started developing for Meta Quest 3 with Unity

[Get started developing for Meta Quest 3 with Unity | Unity Blog](https://blog.unity.com/engine-platform/get-started-developing-for-quest-3-with-unity)

OpenXRとAR Foundationを用いて、Meta Quest 3などのXRデバイス向けのアプリケーションを開発する方法について紹介しています。

### Simulate stylized characters for games with Ziva VFX and machine learning

* [Simulate stylized characters for games with Ziva VFX and machine learning | Unity Blog](https://blog.unity.com/games/simulate-stylized-characters-with-ziva-vfx-and-machine-learning)
* [Simulating film-quality characters in games I Unity at GDC 2023 - YouTube](https://www.youtube.com/watch?v=lk3THQfxwuc)

Ziva VFXを用いてフィルムクオリティのデフォルメキャラクターのシミュレーションを行うためのワークフローやベストプラクティスについて紹介しています。

この記事は、GDC 2023のセッションをもとに執筆されています。

### リモートデスクトップで Unity 開発！？ Parsec を使ってみよう！

[リモートデスクトップで Unity 開発！？ Parsec を使ってみよう！ - YouTube](https://www.youtube.com/watch?v=mueyyOy4QX0)

Unityが提供するリモートデスクトップソリューションParsecの概要や特徴、活用事例について紹介しています。

また、リモートデスクトップ環境を構築する上で便利なEDIDドングルやRemote button pusherなどのtipsについても紹介しています。

## Articles

### PlayModeWindowでGameビューの解像度を指定する

[PlayModeWindowでGameビューの解像度を指定する - やらなイカ？](https://www.nowsprinting.com/entry/2023/06/25/071828)

Unity 2022.2から追加された `PlayModeWindow` クラスを用いて、ゲームビューを操作する方法（解像度の指定やゲームビューへの切り替え）を行う方法について紹介しています。

### URP10,URP12,URP14でのMRTの実装の方法の違い

[【Unity】 URP10,URP12,URP14でのMRTの実装の方法の違い](https://zenn.dev/r_ngtm/articles/unity-mrt-urp10-urp14)

URPの各バージョンでのMRT（Multi Render Target）の実装の違いについてまとめています。

### ComputeShader + Graphics.DrawMeshInstancedIndirectで大量のオブジェクトを描画する

[【Unity】ComputeShader + Graphics.DrawMeshInstancedIndirectで大量のオブジェクトを描画する - シェーダーTips](https://ny-program.hatenablog.com/entry/2023/06/24/144715)

Compute Shaderと `Graphics.DrawMeshInstancedIndirect` を用いて、大量のオブジェクトを効率的に移動・描画する方法について紹介しています。

### Gaussian Blur Post Process in Unity URP

[Gaussian Blur Post Process in Unity URP](https://danielilett.com/2023-06-01-tut6-6-gaussian-blur/)

ガウシアンブラーをURPのポストプロセスで実装する方法について紹介しています。

ガウシアンブラーの基礎から `ScriptableRenderPass` と `RendererFeature` を用いたURPでの実装方法についてそれぞれ解説しています。

### Voronoi-based Lava in Unity Shader Graph

[Voronoi-based Lava in Unity Shader Graph](https://danielilett.com/2023-06-20-tut7-2-voronoi-lava/)

Shader Graphでボロノイ分割を用いて溶岩のような表現を実装する方法について紹介しています。

Custom Functionを用いてボロノイ分割を実装する方法から、ボロノイ分割を用いて溶岩の割れ目を表現する方法についてそれぞれ解説しています。

### アプリから他のアプリを起動する【Android】

* [【Unity】アプリから他のアプリを起動する【Android】](https://zenn.dev/sunmax/articles/fae0a16f8a8703)
* [【Unity】アプリから他のアプリを引数付きで起動する【Android】](https://zenn.dev/sunmax/articles/106ad1f5096fe7)

Unityアプリから別のアプリケーションを起動する方法について、その概要から実装方法、引数付きでの起動方法についてそれぞれ解説しています。

### CinemachinePassでレール移動させてみよう

[【Unity】CinemachinePassでレール移動させてみよう – 株式会社ロジカルビート](https://logicalbeat.jp/blog/15416/)

Cinemachineの `CinemachinePass` を用いて、ゲームオブジェクトを曲線に沿って移動させる実装について紹介しています。

### 「Selection Groups」を活用して複数のGameObjectをグループ化する(GoQLによる検索も便利) 

[【Unity】「Selection Groups」を活用して複数のGameObjectをグループ化する(GoQLによる検索も便利) - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2023/06/19/120000)

Unityが提供する「[Selection Groups](https://docs.unity3d.com/ja/Packages/com.unity.selection-groups@0.9/manual/index.html)」を用いて、ヒエラルキー上の複数のゲームオブジェクトをグループ化する方法について紹介しています。

### AnimationCurveをBurstで使えるようにスレッドセーフ化しよう

[【Unity】 AnimationCurveをBurstで使えるようにスレッドセーフ化しよう｜技術ブログ｜北海道札幌市・宮城県仙台市のVR・ゲーム・システム開発 インフィニットループ](https://www.infiniteloop.co.jp/tech-blog/2023/06/animationcurve_burst_0621/)

AnimationCurveがBurstから直接利用できない経緯の紹介と、これを独自の構造体実装に置き換えてBurstで利用するアイデアについて紹介しています。

### Input Systemで連打を判定するInteraction

[【Unity】Input Systemで連打を判定するInteraction | ねこじゃらシティ](https://nekojara.city/unity-input-system-button-mashing)

Input SystemのInteractionを用いて、ボタンの連打を判定する方法について紹介しています。

### 開発時にUnityのinternalなAPIにアクセスできるUnity.InternalAPIEngineBridgeDev

[開発時にUnityのinternalなAPIにアクセスできるUnity.InternalAPIEngineBridgeDev - LIGHT11](https://light11.hatenadiary.com/entry/2023/06/22/190426)

`Unity.InternalAPIEngineBridgeDev` を介してUnityのinternalなAPIにアクセスする方法について紹介しています。

### Prefab Modeになっているか(プレハブを開いてるか)を判定する方法

[Prefab Modeになっているか(プレハブを開いてるか)を判定する方法【Unity】【エディタ拡張】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/PrefabStageUtility_GetCurrentPrefabStage)

現在のプレハブの編集状況を取得する `PrefabStageUtility.GetCurrentPrefabStage` を用いて、現在Prefab Modeかどうかを判定する方法を紹介しています。
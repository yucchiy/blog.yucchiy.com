---
type: "unity-weekly"
title: "Unity Weekly 142"
description: "2023/10/09週のUnity Weeklyです。BatchRendererGroup、CA.Unity #7、Unity産業DXカンファレンス、NativeArrayなどについて取り上げています。"
tags: ["Unity Weekly","Unity"]
date: "2023-10-10T00:00:01"

---

## Unity Officials

### BatchRendererGroup sample: Achieve high frame rate even on budget devices

[BatchRendererGroup sample: Achieve high frame rate even on budget devices | Unity Blog](https://blog.unity.com/engine-platform/batchrenderergroup-sample-high-frame-rate-on-budget-devices)

アニメーション付きの大量のキューブを描画するシューターゲームを題材に、`BatchRendererGroup`（BRG）による描画の最適化について解説しています。
この記事では、BRGのメリット・デメリットや`Graphics.DrawMeshInstanced`との違い、描画からアニメーションなどの各種実装についてそれぞれ説明しています。

このサンプルはGLES3.0を使用して、安価なスマートフォン上で高フレームレートを実現することを目標としています。

### Unity Announces Leadership Transition

[Unity Technologies - Unity Announces Leadership Transition](https://investors.unity.com/news/news-details/2023/Unity-Announces-Leadership-Transition/default.aspx)

ジョン・リチテロが社長兼最高経営責任者）、会長、取締役を退任することを発表しました。

ジェームス・M・ホワイトハーストが暫定最高経営責任者兼社長兼取締役に就任、ユニティ取締役会のリード・インディペンデント・ディレクターであるロエロフ・ボタが会長に任命されました。リチテーロ氏は、円滑な移行を確実にするため、引き続きユニティ社に助言を行うとのことです。

## Slides

### CA.Unity #7

2023/09/15に開催された[CA.unity #7](https://meetup.unity3d.jp/jp/events/1405)の資料がUnity Learning Materialsにて公開されています。

- [完全掌握💪 SpringBone解体新書 | Unity Learning Materials](https://learning.unity3d.jp/9912/)
- [作って終わりじゃ無い！？　白猫キャラクタが世に出るまでの課題と解決方法を解説 | Unity Learning Materials](https://learning.unity3d.jp/9914/)
- [Sirius ～統合スタイライズドレンダリングシステム～ | Unity Learning Materials](https://learning.unity3d.jp/9916/)
- [自作ツールTitanとベクターUIを使ったIDOLY PRIDEのUIアニメーションの実装 | Unity Learning Materials](https://learning.unity3d.jp/9919/)
- [Windows/Macの証明書の取得と、署名済みインストーラーを作成するビルドプロセスの紹介 | Unity Learning Materials](https://learning.unity3d.jp/9921/)
- [SplineInstantiateで行うレベルデザイン | Unity Learning Materials](https://learning.unity3d.jp/9923/)

### Unity 産業 DX カンファレンス

2023/07/10に開催された[Unity 産業 DX カンファレンス](https://industry.unity3d.jp/dxconference/)の資料がUnity Learning Materialsにて公開されています。

- [Unity の製品&サービス のご紹介 | Unity Learning Materials](https://learning.unity3d.jp/9858/)
- [自在化身体：人間拡張工学の現在と未来 | Unity Learning Materials](https://learning.unity3d.jp/9860/)
- [高精細裸眼立体視ディスプレイの医歯学教育への応用～Unityを用いたアプリ開発とその効果～ | Unity Learning Materials](https://learning.unity3d.jp/9877/)
- [Unityで描くHMIの未来と実現の手法 | Unity Learning Materials](https://learning.unity3d.jp/9888/)

## Articles

### NativeArrayを使いこなせ

[【Unity】NativeArrayを使いこなせ - Annulus Games](https://annulusgames.com/blog/unity-nativearray/)

`NativeArray<T>`の概要からデータ構造、利用方法について解説しています。また、`NativeArray<T>`を確保する際のAllocatorの説明から自作方法、`NativeArray<T>`以外のコレクション（NativeContainer）やその独自実装についても言及しています。

### Hex Map 2.3.0

[Hex Map 2.3.0](https://catlikecoding.com/unity/hex-map/2-3-0/)

Hex Mapのメモリフットプリントを減らすためのビットフィールドの利用から、グリッドを介した隣接情報の取得方法について紹介しています。

### Lightship ARDK 3.0 Beta 試してみた

[Lightship ARDK 3.0 Beta 試してみた](https://zenn.dev/meson/articles/ardk3-beta-try)

Niantic'sの開発するLightship ARDKの3.0 betaのインストールから設定、ARDKの機能確認のためにOcclusion・Meshing機能の実装、公式サンプルプロジェクトの確認方法についてそれぞれ紹介しています。

### Steam 実績の実装サンプルが使いづらかったので使いやすいものを作った

[Steam 実績の実装サンプルが使いづらかったので使いやすいものを作った - Qiita](https://qiita.com/john95206/items/3bf76871a0f666bf3cbd)

記事の著者が開発する、Steamの実績を扱うライブラリ[SteamAchievementManager](https://github.com/john95206/SteamAchievementManager)の実装の詳細を解説しています。

### uGUIでオブジェクトとオブジェクトを結ぶ線とかを作ってみる。

[【ハルシオンUnityブログ】uGUIでオブジェクトとオブジェクトを結ぶ線とかを作ってみる。 - ハルシオンシステムの気ままBlog](http://halcyonsystemblog.jp/blog-entry-1014.html)

uGUIのUI Extensionsパッケージに実装されている`UILineRenderer`を用いて、オブジェクト間に線を引く方法を紹介しています。

### Intro to Shader Graph in Unity 2022 (Part 1 - Your First Graph)

[Intro to Shader Graph in Unity 2022 (Part 1 - Your First Graph)](https://danielilett.com/2023-09-26-tut7-3-intro-to-shader-graph/)

2022 LTSでのShader Graphについて、セットアップから基本的な使い方を紹介しています。


## Repositories

### UnityDynamicPanels

ドラッグやリサイズ、ドッキング、スタック可能なUIパネルソリューション。

[yasirkula/UnityDynamicPanels: Draggable, resizable, dockable and stackable UI panel solution for Unity 3D](https://github.com/yasirkula/UnityDynamicPanels)

### kDecals

[Kink3d/kDecals: Projection Decals for Unity's Universal Render Pipeline.](https://github.com/Kink3d/kDecals)

URP向けのプロジェクションデカール実装。

### UniFlux

Unity向けのFlux実装。

[xavierarpa/UniFlux: Typed Event Driven with Flux for Unity.](https://github.com/xavierarpa/UniFlux)

### XiDebugMenu

[hww/XiDebugMenu: Simple debug menu for Unity](https://github.com/hww/XiDebugMenu)

メモリフットプリントが小さいシンプルなデバッグメニュー実装。

### SteamAchievementManager

[john95206/SteamAchievementManager: Unity ゲームで Steam 実績機能を楽に実装するプロジェクトです](https://github.com/john95206/SteamAchievementManager)

Steamの実績機能を実装するためのライブラリ。


### Unity Collider Optimizer

[aniketrajnish/Unity-Collider-Optimizer: Optimizes mesh and polygon colliders in Unity](https://github.com/aniketrajnish/Unity-Collider-Optimizer)

メッシュやポリゴンコライダーのオプティマイザー。
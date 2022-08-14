---
type: "unity-weekly"
title: "Microsoft Cloud Partnership、Strand based Hair、Lion Demo - Unity Weekly 081"
description: "2022/08/15週のUnity Weeklyです。 Microsoft Cloud Partnership、Strand based Hair、Lion Demoなどについてとりあげました。"
tags: ["Unity","Unity Weekly"]
date: "2022-08-14T15:00:00"

---

## Unity Officials

### Unity and Microsoft announce cloud partnership for game developers and beyond

[Unity and Microsoft announce cloud partnership for game developers and beyond | Unity Blog](https://blog.unity.com/news/unity-and-microsoft-announce-cloud-partnership-for-game-developers-and-beyond)

Unityが、Microsoftとのクラウドサービスでの連携を発表しました。



記事中では、Plastic SCM や Cloud BuildなどのDevOpsやParsec、Wētā DigitalやZivaなどのアートツールへのAzureの導入や連携強化、WindowsやXboxプラットフォームでのゲームの構築や配布を容易にする、などに触れています。

### Package: com.unity.demoteam.hair

[Unity-Technologies/com.unity.demoteam.hair: An integrated solution for authoring / importing / simulating / rendering strand-based hair in Unity.](https://github.com/Unity-Technologies/com.unity.demoteam.hair)

[Enemies](https://unity.com/demos/enemies)で利用されているリアルタイムヘアーソリューションが公開されました。



このパッケージではストランドベースなヘアーを、Unityを中心に Authoring / Import / Simulation / Rendering するための機能を一通り提供しています。

### New real-time demo, Lion: Unity Art Tools in action and the future of Wētā Digital for RT3D

[New real-time demo, Lion: Unity Art Tools in action and the future of Wētā Digital for RT3D | Unity Blog](https://blog.unity.com/technology/new-real-time-demo-lion-unity-art-tools-in-action-and-the-future-of-weta-digital-for)

Unityが新しいリアルタイムデモ「[Lion](https://www.youtube.com/watch?v=KpPx_lvthBQ)」をリリースしました。



このデモは、Ziva VFXによるソフトボディダイナミックシミュレーションやWētā DigitalのヘアーやファーのグルームツールであるWig、コラボレーションツールであるSyncSketch、SpeedTreeによる植生といったUnityで利用できるアーティストツールを組み合わせて制作されていて、PlayStation 5上で、4K・30 fps でリアルタイムに動作するとのことです。

### Unity、中国事業を統括する新合弁会社を設立

[Unity、中国事業を統括する新合弁会社を設立 | Unity Blog](https://blog.unity.com/ja/news/unity-forms-new-venture-to-manage-china-operations)

地域合弁会社「Unity China」を設立する契約を締結したことが発表されました。



合弁会社の設立にあたり、Unity の中国における Create ソリューション事業とゲーミングサービス事業を Unity China に移管されます。また、Unity China にはアリババ、チャイナ・モバイル、G-Bits、miHoYo、OPPO、PCI、Douyin グループなどの現地パートナーが出資し、資金調達後の Unity China の評価額は 10 億ドルとなる予定とのことです。

## Articles

### Unity hair触ってみた

[Unity hair触ってみた - 事前準備編 - mtwandのブログ](https://mtholoblog.hatenablog.com/entry/2022/08/13/023826)

[Unity hair触ってみた - 使ってみる編 - mtwandのブログ](https://mtholoblog.hatenablog.com/entry/2022/08/13/034025)

Unityがリリースした[ストランドベースなリアルタイムヘアーソリューション](https://github.com/Unity-Technologies/com.unity.demoteam.hair)の導入方法からヘアーアセットの作成方法とパラメーター、Unityちゃんモデルを一部修正し、作成したヘアーアセットをアタッチしてプレイヤー上で動作させる様子について紹介しています。



また、ヘアーの色の制御やMetalicやSmoothnessパラメータについても言及しています。

### コンパイル時間計測&プラットフォーム毎のコンパイルエラーチェックできるOSS『Compilation Visualizer for Unity』紹介

[【Unity】コンパイル時間計測&プラットフォーム毎のコンパイルエラーチェックできるOSS『Compilation Visualizer for Unity』紹介 - LIGHT11](https://light11.hatenadiary.com/entry/2022/08/09/195601)

コンパイル時間を計測・解析する「Compilation Visualizer for Unity」のインストールや基本的な利用方法について紹介しています。



また、このライブラリが提供する、プラットフォームごとのコンパイルエラーをチェックするためのテストの導入方法についても言及しています。

### Packagesフォルダのreadonlyなprefabのvariantを作る

[Packagesフォルダのreadonlyなprefabのvariantを作る](https://zenn.dev/shiena/articles/unity-prefab-variant)

Packagesフォルダ下に（readonlyな）Prefabから、Prefab Variantを作るためのエディター操作が存在しないため、 `PrefabUtility` や `AssetDatabase` などのAPIを用いてPrefab Variantを生成する方法と実際のエディター拡張について紹介しています。

### Mixamoの無料3DモデルをUnityにインポートする方法

[Mixamoの無料3DモデルをUnityにインポートする方法](https://zenn.dev/gaku_moriya/articles/d1b451b288786b)

Adobeが公式で3Dモデルやアニメーションを配布する [Mixamo](https://www.mixamo.com/#/) から 3DモデルとアニメーションをダウンロードしてUnityへインポートし、 Humanoidとしてセットアップしてアニメーションを再生する方法について紹介しています。

### 何故PlayModeに入った時にOnValidate()が２回呼ばれるのか問題

[#Unity 何故PlayModeに入った時にOnValidate()が２回呼ばれるのか問題（その１） - 土屋つかさの技術ブログは今か無しか](https://someiyoshino.info/entry/2022/08/12/201247?utm_source=feed)

[#Unity 何故PlayModeに入った時にOnValidate()が２回呼ばれるのか問題（その２：完結編） - 土屋つかさの技術ブログは今か無しか](https://someiyoshino.info/entry/2022/08/13/143639?utm_source=feed)

`OnValidate` を用いて同ゲームオブジェクトの `RectTransform` のプロパティを設定するようなCanvas用のコンポーネントを実装するなかで発見した `OnValidate` が2回呼び出される挙動と、それがどのような理由で発生しているのか、その問題を踏まえた `OnValidate` の利用方法についてそれぞれ解説しています。

### Scene ウィンドウに簡単にデバッグ表示できる「Debugging」紹介

[【Unity】Scene ウィンドウに簡単にデバッグ表示できる「Debugging」紹介 - コガネブログ](https://baba-s.hatenablog.com/entry/2022/08/10/090000)

Sceneビュー上に簡単にデバッグ表示を行う [Debugging](https://github.com/vertxxyz/Vertx.Debugging) というライブラリについて、その使い方を紹介しています。

### Free eBooks by Unity

[Free eBooks by Unity | Giacomelli | C# programmer and Unity 3D gamedev](https://diegogiacomelli.com.br/free-ebooks-by-unity/)

Unityが公式で提供する無料のeBookのリンク一覧をまとめています。

## Repositories

### TerrainDecorator

[emrecancubukcu/Terrain-Decorator: lightweight terrain tool for unity3d](https://github.com/emrecancubukcu/Terrain-Decorator)

[Fire & Steel](https://store.steampowered.com/app/1791790/Fire_and_Steel/)というゲームで利用しているルールベースなTerrainのテクスチャツール。

### Debugging

[vertxxyz/Vertx.Debugging: Debugging Utilities for Unity](https://github.com/vertxxyz/Vertx.Debugging)

シーンビュー上にテキストやスフィアやライン、レイキャスト、メッシュなどをデバッグ表示するためのライブラリ。 `DrawSphere` や `DrawText` などのシンプルなAPIでデバッグ情報を表示できる。

### EZAssetGenerator

[EZhex1991/EZAssetGenerator: A bunch of texture tools for unity](https://github.com/EZhex1991/EZAssetGenerator)

コードを記述することなくアセットを設定するだけで、BoxやPlaneなどのメッシュや、ノイズやグラディエント、ガウシアンのLUTなどのテクスチャを生成するライブラリ。

### Animation Utils

[needle-tools/animation-utils: This package contains some utilities that help working with Unity's Timeline and Animation tools, for example drag & drop to fix ⚠ missing clip bindings](https://github.com/needle-tools/animation-utils)

アニメーションツールのユーティリティライブラリ。Missingなアニメーションクリップのバインディングに対して、ドラッグ&ドロップで再バインドを行う仕組みや、PlayableDirectorのバインディングをコピー&ペーストできるエディター拡張が実装されています。




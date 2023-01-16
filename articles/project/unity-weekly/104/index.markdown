---
type: "unity-weekly"
title: "Unity Weekly 104"
description: "2023/01/16週のUnity Weeklyです。スキルアップのためのアセットやLODクロスフェーディングについて取り上げています。"
tags: ["Unity Weekly","Unity"]
date: "2023-01-16T00:00:00"
---

## Unity Officials

### 2023 年、Unity のスキルアップに役立つ 7 つのチュートリアル

[2023 年、Unity のスキルアップに役立つ 7 つのチュートリアル | Unity Blog](https://blog.unity.com/ja/games/7-tutorials-to-help-uplevel-your-unity-skills-in-2023)

Unity公式アセットのうち、スキルアップに役立つアセットを7つ紹介しています。

### コージーゲームのための感じのいいアセット

[コージーゲームのための感じのいいアセット | Unity Blog](https://blog.unity.com/ja/games/cozy-assets-for-cozy-games)

コージーゲーム（プレッシャーが少なく、居心地の良いゲーム）を制作する上で役立つアセットを、環境作り、対話システム、ゲーム内のタスクシステムの3つの観点で紹介しています。

### ハイポリ→ローポリを滑らかに補間！LODクロスフェーディング

[【Unity URP】ハイポリ→ローポリを滑らかに補間！LODクロスフェーディング - YouTube](https://www.youtube.com/watch?v=zWxoBz1Pav8)

URP（Universal Render Pipeline）のハイポリ・ローポリをLODに応じてクロスフェードする新機能について紹介しています。

設定方法から制御方法（距離制御と時間制御）、クロスフェードを制御する各種オプションについての解説、ShaderGraphを用いたクロスフェードの方法についてそれぞれ開設しています。

## Articles

### Enhanced Scroller × MVPパターン × UniRxを使ってUnityで高機能なScrollerをいい感じに実装する

[Enhanced Scroller × MVPパターン × UniRxを使ってUnityで高機能なScrollerをいい感じに実装する - Synamon’s Engineer blog](https://synamon.hatenablog.com/entry/enhanced_scroller_mvrp)

Enhanced ScrollerとUniRxを用いたMVPパターンによるリストビューの実装について紹介しています。

### ホストマイグレーションの話

[【Photon Fusion】ホストマイグレーションの話](https://zenn.dev/o8que/articles/685eeab6473214)

Photon FusionをHostModeでホストが退出した際に、ホストをセッション内の別クライアントに引き継ぐことでゲームを継続させるホストマイグレーションについて、その実装方法や注意点などについてまとめています。

### Unity 用語の語源を調べてみた

[Unity 用語の語源を調べてみた - Qiita](https://qiita.com/segur/items/28d7c95276dbd8d831be)

Unityに登場する用語（InspectorやPrefabなどの）の語源について調査しています。

### Unityで始めるLive2Dを使った映像制作

[Unityで始めるLive2Dを使った映像制作【ノンコーディング】 - Qiita](https://qiita.com/live2d_dev/items/63ecc8ee4ff323751c47)

Cinemathic Studio（TimelineやSequences、Recorderなど映像制作に必要なパッケージをまとめてインストールできるパッケージ）を用いて、Live2Dの映像制作を行う方法について紹介しています。

### UnityでVRコンテンツを作成する手順メモ 2023年版

[UnityでVRコンテンツを作成する手順メモ 2023年版](https://zenn.dev/fumo/articles/f729f091668d83)

VRコンテンツを作成する際のVR開発に必要なパッケージやアセットの追加やプロジェクトの設定、コントローラー入力やVR空間での移動・回転のためのコンポーネント設定などについてまとめています。

### metaファイルが引き起こす問題を防ぐOSS『Unity Git Hooks』の使い方まとめ

[【Unity】metaファイルが引き起こす問題を防ぐOSS『Unity Git Hooks』の使い方まとめ - LIGHT11](https://light11.hatenadiary.com/entry/2023/01/10/191640)

対となるmetaファイルの上げ忘れや削除、更新忘れを検知するOSS「Unity Git Hooks」について、その基本的な使い方をまとめています。

### 2022.2からShaderGraphでポストエフェクト(フルスクリーンエフェクト)が作成できるようになったの試してみた

[【Unity】2022.2からShaderGraphでポストエフェクト(フルスクリーンエフェクト)が作成できるようになったの試してみた - 武0武/blog](https://bravememo.hatenablog.com/entry/2023/01/11/070000)

Unity 2022.2から利用できるShaderGraphでのフルスクリーンエフェクトの利用方法についてまとめています。

### Unity 2023.1 新機能 - Gizmos.DrawLineList・Gizmos.DrawLineStrip が追加された

[【Unity】Unity 2023.1 新機能 - Gizmos.DrawLineList・Gizmos.DrawLineStrip が追加された - コガネブログ](https://baba-s.hatenablog.com/entry/2023/01/13/090000?utm_source=feed)

Unity 2023.1で利用できるようになった`Gizmos.DrawLineList`と`Gizmos.DrawLineStrip`についてそれぞれ使い方をまとめています。

## Repositories

### InfLightProbe

[limztudio/InfLightProbe: Automatic Light probe generator for Unity engine. Based on "Light Grid" of "Precomputed Lighting in CoD IW 2017". and "Light probe interpolation using tetrahedral tessellations" by "Robert Cupisz".](https://github.com/limztudio/InfLightProbe?)

Light Probeを自動生成するツール。「Precomputed Lighting in CoD IW 2017」の「Light Grid」および「Robert Cupisz」の「Light probe interpolation using tetrahedral tessellations」が元になっています。

### Unity-QuickSheet

[kimsama/Unity-QuickSheet: Unity-QuickSheet enables you to use spreadsheet file data within Unity editor.](https://github.com/kimsama/Unity-QuickSheet)

ノーコードで、Google SpreadsheetやExcelからデータを取得して、ScriptableObjectとしてデータを格納するためのライブラリ。

### Serializable Interface

[Thundernerd/Unity3D-SerializableInterface: A wrapper that allows you to serialize interfaces](https://github.com/Thundernerd/Unity3D-SerializableInterface)

インターフェイスをシリアライズ可能にするライブラリ。

### Unity Proportional Navigation Collection

[Woreira/Unity-Proportional-Navigation-Collection: A collection of PN guidance systems, in Unity](https://github.com/Woreira/Unity-Proportional-Navigation-Collection?)

追従ミサイルなどの弾道計算に利用できるナビゲーションシステム。

### Volumetrics_URP

[bladesero/Volumetrics_URP: A render feature to recover Unity 5.x's offical volumetric fog in Adam demo](https://github.com/bladesero/Volumetrics_URP)

Unity 5.xのAdamデモ内に登場したVolumetric fogのURP実装。

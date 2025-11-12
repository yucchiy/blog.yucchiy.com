---
type: unity-weekly
title: Unity Weekly 160
description: >-
  2024/02/19週のUnity Weeklyです。R3、HoloLab DNN Packages、PLATEAU SDK-Toolkits for
  Unity、SDFなどについて取り上げています。
pubDatetime: 2024-02-18T15:00:01.000Z
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Collaborative Control for Geometry-Conditioned PBR Image Generation

[Collaborative Control for Geometry-Conditioned PBR Image Generation](https://unity-research.github.io/holo-gen/)

PBRのdiffusion Modelとfrozen RGB modelを密にリンクさせることで、ジオメトリとプロンプト情報から高品質なPBRマテリアルのための画像を生成する手法を提案する論文が、UnityとStability AIから発表されています。

## Articles

### R3とUniRxの比較まとめ

[【Unity】 R3とUniRxの比較まとめ #Unity - Qiita](https://qiita.com/toRisouP/items/4344fbcba7b7e8d8ce16)

C#向けの新しいRxライブラリ「[R3](https://github.com/Cysharp/R3)」のUniRxと比較した新機能や既存機能の変更点、削除された機能などについて網羅的に解説しています。

また、既存機能の変更点や削除された機能については、その背景や移行方法についてもあわせて紹介しています。

### Unityで手軽に使える画像認識パッケージのHoloLab DNN Packagesを公開しました。

[Unityで手軽に使える画像認識パッケージのHoloLab DNN Packagesを公開しました。 - ブログ@HoloLabInc](https://blog.hololab.co.jp/entry/2024/02/13/170000)

株式会社ホロラボが公開した、Unity Sentisベースのディープラーニングによる画像認識を実装した「[HoloLab DNN Packages](https://github.com/HoloLabInc/HoloLabDnnPackages)」について、パッケージ概要からインストール方法、簡単な使い方を紹介しています。

### 深掘りTextMeshPro：SDFフォントデータによる文字描画実装（第２回：シェーダーコード）

[#unity 深掘りTextMeshPro：SDFフォントデータによる文字描画実装（第２回：シェーダーコード） - 土屋つかさの技術ブログは今か無しか](https://someiyoshino.info/entry/2024/02/17/163146)

TextMeshProで採用されているSDF（Signed Distance Field）で表現されたフォントデータの描画方法について、スクラッチで実装したシェーダーコードをもとにその詳細を解説しています。

### uLipSync x WebGL における再生方法の制限について

[uLipSync x WebGL における再生方法の制限について - 凹みTips](https://tips.hecomi.com/entry/2024/02/18/221003)

ブログ著者が開発するuLipSyncのWebGLビルドで `AudioSource.PlayOneShot` を用いるとリップシンクが正常に再生されない問題と、その技術的な背景について解説しています。

### おそらく国内初のAppleVisionPro専用ゲームをリリースしたので開発中大変だったことを紹介します

[【AppleVisionPro】おそらく国内初のAppleVisionPro専用ゲームをリリースしたので開発中大変だったことを紹介します【Unity】 #Unity - Qiita](https://qiita.com/Cova8bitdot/items/aead03ee29fb8b595a7e)

Apple Vision Proでゲームを制作する際に苦労した点（プライバシーポリシーによる情報取得の制限やそれに伴う視差ベクトルなどが生成できない問題、vision OSの仕様上の問題など）を紹介しています。

### Visual Scriptingの始め方と基礎を徹底解説!プログラムを書かないプログラミング？

[【Unity】Visual Scriptingの始め方と基礎を徹底解説!プログラムを書かないプログラミング？ - 渋谷ほととぎす通信](https://shibuya24.info/entry/unity-visualscripting-start)

Visual Scriptingの概要から基本的な使い方を紹介しています。

### UnityでGLTFをランタイムロード【Unity glTFast】

[UnityでGLTFをランタイムロード【Unity glTFast】 - トマシープが学ぶ](https://bibinbaleo.hatenablog.com/entry/2024/02/15/112122)

glTFastを用いたUnityでGLTFをランタイムロードする方法について、パッケージのインストール方法からパッケージの基本的な使い方を紹介しています。

### Unity2023(URP)+Recorderを使用したアルファ付き動画の書き出し方法

[Unity2023(URP)+Recorderを使用したアルファ付き動画の書き出し方法](https://zenn.dev/melpot/articles/e4bd7d888136af)

Unity 2023ベースのURPとRecorderで、パッケージを改変してアルファ付きの動画を書き出す方法を紹介しています。

### PUN2でカスタムプロパティを使ったデータの同期

[【Unity】PUN2でカスタムプロパティを使ったデータの同期 – 株式会社ロジカルビート](https://logicalbeat.jp/blog/15470/)

PUN2のカスタムプロパティを用いた独自データの同期方法について、カスタムプロパティの概要から利用方法を実際の実装を交えつつ紹介しています。

### R3をUnityNuGetとOpenUPMで楽々インストール

[R3をUnityNuGetとOpenUPMで楽々インストール](https://zenn.dev/shiena/articles/unity-install-r3)

R3を（公式の推奨するNuGetForUnity経由ではなく）UnityUnuGetとOpenUPM経由でインストールする方法について紹介しています。

### 【Extenject】Unityで依存性注入(Dependency Injection, DI)の設計に触れてみた

[【Extenject】Unityで依存性注入(Dependency Injection, DI)の設計に触れてみた – 株式会社ロジカルビート](https://logicalbeat.jp/blog/15469/)

DIライブラリExtenjectを用いたUnityでのDIについて、基本的な使い方を紹介しています。

### Content Size Fitterが自動で更新されない時に、手動で即座に更新する方法

[Content Size Fitterが自動で更新されない時に、手動で即座に更新する方法【Unity】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/ContentSizeFitter_ForceRebuild)

Content Size Fitterのコンテンツサイズの再計算を即時に行うAPIについて紹介しています。

### Intro to Shader Graph in Unity

[Intro to Shader Graph in Unity (Part 5 - Vertex Shaders)](https://danielilett.com/2024-02-13-tut7-7-intro-to-shader-graph-part-5/)

Shader Graphの入門記事で、Shader Graphで頂点シェーダーを記述する方法について紹介しています。

### R3時代の連打・同時押し制御

[R3時代の連打・同時押し制御 #C# - Qiita](https://qiita.com/Butterfly-Dream/items/4e732a2e77139c8ec376)

C#向けの新しいRxライブラリ「[R3](https://github.com/Cysharp/R3)」を用いて、ボタンの連打・同時押しを制御する方法について紹介しています。

## Repositories

### R3 v1.0.0

[Cysharp/R3: The new future of dotnet/reactive and UniRx.](https://github.com/Cysharp/R3)

C#向けの新しいRxライブラリ「[R3](https://github.com/Cysharp/R3)」のv1.0.0がリリースされました。

### PLATEAU SDK-Toolkits for Unity v1.0.0

[Project-PLATEAU/PLATEAU-SDK-Toolkits-for-Unity: 3D都市モデルを利用したUnity上でのアプリケーション開発を支援するツールキットアドオン](https://github.com/Project-PLATEAU/PLATEAU-SDK-Toolkits-for-Unity)

PLATEAUの提供する「3D都市モデル」のデータを利用したUnity上でのアプリケーション開発を支援するツールキット群「PLATEAU SDK-Toolkits for Unity」のv1.0.0がリリースされました。

### SynicSugar

[skeyll/SynicSugar: Unity High-level Networking Library for Mobile and Small-party Games with Epic Online Services.](https://github.com/skeyll/SynicSugar)

EpicOnlineServicesを利用したUnity向けの高レベルなネットワーキングライブラリ。

### unity-toolbar-extender

[marijnz/unity-toolbar-extender: Extend the Unity Toolbar with your own Editor UI code.](https://github.com/marijnz/unity-toolbar-extender?tab=readme-ov-file)

Unityのツールバーを独自のUIで拡張するための補助ライブラリ。

### Capsule Occlusion

[Fewes/CapsuleOcclusion: Unity package implementing clustered capsule/character occlusion](https://github.com/Fewes/CapsuleOcclusion)

MSAAを使用したフォワードレンダリングパイプラインでの利用を想定したCapsule/Character Occlusionを実装したパッケージ。

### HoloLab DNN Packages

[HoloLabInc/HoloLabDnnPackages: The HoloLab DNN Packages providing image recognition library using deep learning running on the Unity. This packages is implemented based on Unity Sentis.](https://github.com/HoloLabInc/HoloLabDnnPackages)

Unity Sentisをベースにした、ディープラーニングを用いた画像認識ライブラリ。

### Monkey Test Helper

[nowsprinting/test-helper.monkey: Reference implementation that performs object-based Unity UI (uGUI) monkey tests and API for custom implementation](https://github.com/nowsprinting/test-helper.monkey)

uGUI上でのモンキーテストを行うためのリファレンス実装。

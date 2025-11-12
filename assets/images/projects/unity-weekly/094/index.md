---
type: unity-weekly
title: Unite 2022 Keynote、Lightmapping Troubleshootings、エディタ便利機能 - Unity Weekly 094
description: ''
pubDatetime: 2022-11-06T06:00:00.000Z
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Unite 2022 基調講演の要約：野心的なゲームの実現、マルチプレイヤー体験の構築、印象的なグラフィックスの制作のための新機能やワークフローの紹介

[Unite 2022 基調講演の要約：野心的なゲームの実現、マルチプレイヤー体験の構築、印象的なグラフィックスの制作のための新機能やワークフローの紹介 | Unity Blog](https://blog.unity.com/ja/news/unite-2022-keynote)

2022 11/01 〜11/02 に開催されたUnite 2022のキーノートについて要約しています。

主にDOTS、グラフィックス、マルチプレイヤーなどについて取り上げています。

また、[日本語音声付きのキーノート動画はこちらでも公開されています](https://www.youtube.com/watch?v=Gj-fLiuClp0)。

### Lightmapping Troubleshooting Guide

[Official - Lightmapping Troubleshooting Guide - Unity Forum](https://forum.unity.com/threads/lightmapping-troubleshooting-guide.1340936/)

フォーラム上にて、Unityでのライトマッピングに関するトラブルシューティングのリンク集が公開されています。

また、GI（Global Illumination）に関する学習リソースも合わせて公開されています。

[Official - Global Illumination Learning Resources - Unity Forum](https://forum.unity.com/threads/global-illumination-learning-resources.1290662/)

### Increasing system requirements for Windows Editor in 2023.1 and dropping support for Windows 7

[Official - Increasing system requirements for Windows Editor in 2023.1 and dropping support for Windows 7 - Unity Forum](https://forum.unity.com/threads/increasing-system-requirements-for-windows-editor-in-2023-1-and-dropping-support-for-windows-7.1355966/)

Unity Editor 2023.1 から エディターのWindowsの最小サポートバージョンがWindows 10 Version 1909（build 18363）に引き上げられました。

フォーラム上ではサポートバージョン引き上げの経緯について説明しています。

また今回はUnityエディタが引き上げの対象で、Windows Standalone playerは引き続きWindows 7をサポートするとのことです。

### デジタルヒューマンデモ「Enemies」の実行ファイル形式の公開

[Watch Enemies – State-of-the-art digital humans | Unity Demo](https://unity.com/demos/enemies)

デジタルヒューマンデモ「Enemies」の実行ファイル形式が公開されました。

### 知らないと損をする！？Unityエディタの隠された機能３選！

[知らないと損をする！？Unityエディタの隠された機能３選！ - YouTube](https://www.youtube.com/watch?v=mc0mHcnqu44)

Unityエディターで便利だけど気づきにくい機能について、シーンビュー上でのFPS操作・数式ボックスでの数式入力・スクリーンショット機能の３機能をピックアップして紹介しています。

## Articles

### CA.unity #5

株式会社CyberAgentの主催するUnityに関するオンラインイベント CA.unity の第5回目のアーカイブが Unity Learning Materials にて公開されています。

* [キャラクター向けの汎用トゥーンシェーダーを作った話 | Unity Learning Materials](https://learning.unity3d.jp/9339/)
* [STYLYのマルチプラットフォーム対応を支える仕組み | Unity Learning Materials](https://learning.unity3d.jp/9342/)
* [モバイルゲームのUI開発を支える基盤の仕組み | Unity Learning Materials](https://learning.unity3d.jp/9325/)
* [パフォーマンスチューニングのノウハウを公開！Unity Performance Tuning Bibleを紹介します | Unity Learning Materials](https://learning.unity3d.jp/9336/)
### ジンバルロックをゼロから理解する

[#unity ジンバルロックをゼロから理解する - 土屋つかさの技術ブログは今か無しか](https://someiyoshino.info/entry/2022/11/03/143431?utm_source=feed)

ジンバルロックをUnityエディター上で実際に発生させながら、その性質について解説しています。

### VRM 1.0 で決められた『親指の定義』とまたリターゲットの話

[VRM 1.0 で決められた『親指の定義』とまたリターゲットの話 - Qiita](https://qiita.com/TokageItLab/items/aa6c113dcf9e713f0f74)

VRM 1.0で仕様として策定されたT-poseでの親指の扱いについて取り上げています。

### Unityに既存のRoslyn Analyzerを導入する手順まとめ

[【Unity】Unityに既存のRoslyn Analyzerを導入する手順まとめ - LIGHT11](https://light11.hatenadiary.com/entry/2022/11/01/193339)

MicrosoftがUnity向けに提供しているアナライザーを題材に、提供されているRoslyn Analyzerをプロジェクトに導入する方法について紹介しています。

### BuildOptions.DetailedBuildReport を使うとビルド後にどのシーンがどのアセットを参照しているかわかる

[【Unity】BuildOptions.DetailedBuildReport を使うとビルド後にどのシーンがどのアセットを参照しているかわかる - コガネブログ](https://baba-s.hatenablog.com/entry/2022/11/04/090000?utm_source=feed)

UnityのアプリをビルドするためのBuildPlayerに対してオプションで `BuildOptions.DetailedBuildReport` を指定することで、ビルド後のレポートでビルドしたアプリのシーンでどのアセットを利用しているかを確認する方法について紹介しています。

### Unityで最大200人バトロワを実現するサンプル「BR200」を触ってみた　基礎編

[Unityで最大200人バトロワを実現するサンプル「BR200」を触ってみた　基礎編 - Qiita](https://qiita.com/nimushiki/items/dde8614c8173cd6537e0)

Unity社とリアルタイムサーバーPhotonを開発するExitGames社が共同開発した200人同時参加可能なバトルロワイアルゲームサンプル [BR200](https://support.photonengine.jp/hc/ja/articles/10919371554585) を動作させるための注意点やサンプルが利用している各種サービスの解説などの補足情報をまとめています。

### テクスチャストリーミング

[【Unity】テクスチャストリーミング - シェーダーTips](https://ny-program.hatenablog.com/entry/2022/10/31/235725)

ミップマップをレンダリングに必要な分だけロードするテクスチャストリーミングについて、その機能やUnity上での設定について説明しています。

### Oculus IntegrationからQuest Proの新機能を触ってみる(視線追従)

[Oculus IntegrationからQuest Proの新機能を触ってみる(視線追従) - Synamon’s Engineer blog](https://synamon.hatenablog.com/entry/2022/11/02/193552)

Quest Pro実機上で視線追従機能をOculus Integrationから利用する方法を、Quest Pro上での設定や必要なパッケージのインストール、視線追従スクリプトの設定方法などそれぞれ解説しています。

## Repositories

### Tri Inspector

[codewriter-packages/Tri-Inspector: Free and open-source library that improves unity inspector. Star us on Github? +1 [Custom Editor, Custom Inspector, Inspector Attributes, Attribute Extensions]](https://github.com/codewriter-packages/Tri-Inspector)

属性ベースでインスペクターを拡張する多機能ライブラリ

### Easy Fortune Spin Wheel UI

[herbou/Unity_PickerWheelUI](https://github.com/herbou/Unity_PickerWheelUI)

ルーレットUIを簡単に実装するためのライブラリ

### UnityInvokeAI

[unitycoder/UnityInvokeAI: simple Unity editor UI for calling InvokeAI (stable diffusion) web interface (locally)](https://github.com/unitycoder/UnityInvokeAI)

Unityエディタ上でInvokeAIを呼び出すためのエディタUI

### NaughtyWaterBuoyancy

[dbrizov/NaughtyWaterBuoyancy: Water Buoyancy Simulation for Unity](https://github.com/dbrizov/NaughtyWaterBuoyancy)

Buoyancy Simulationによるウォーターシミュレーション




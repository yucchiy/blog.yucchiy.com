---
type: unity-weekly
title: Unity Weekly 223
description: >-
  2025/05/19週のUnity Weeklyです。Unity 6.2 betaリリース、C# スタイルガイド、Distributed
  AuthorityのGA、APVsの自作シェーダー対応などについて取り上げています。
pubDatetime: 2025-05-18T15:00:01.000Z
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Unity 6.2 Beta is now available

- [Unity 6.2 Beta is now available - Unity Engine - Unity Discussions](https://discussions.unity.com/t/unity-6-2-beta-is-now-available/1639999)
- [Unity 6.2 Beta リリース ー Unity AI の紹介および Unity Muse・Unity Sentis の今後について | ユニティ・テクノロジーズ・ジャパン株式会社](https://unity3d.jp/news/unity-6-2-beta-ai/)

Unity 6.2のベータ版のリリースのアナウンスするディスカッションです。

Unity 6.2から、Unity SentisとUnity MuseがUnity AIとして置き換えられて、Muse Chat相当のAssistantとMuse Sprite・Texture・Animateを代替するGenerator、SentisがInference Engineとして提供されます。
また、このバージョンの主要な機能としてMesh LODやUI ToolkitのWorld Space UI対応なども紹介しています。

### C# スタイルガイドを 使用して、クリーンで スケーラブルな ゲームコードを書く ー Unity 6版

[C# スタイルガイドを 使用して、クリーンで スケーラブルな ゲームコードを書く ー Unity 6版  | ユニティ・テクノロジーズ・ジャパン株式会社](https://unity3d.jp/game/create-code-c-sharp-style-guide-e-book-unity-6/)

Unity C#のコーディングスタイルについて解説したE-book「C#スタイルガイドを作成する：拡張性のある、よりクリーンなコードを書く」がUnity 6対応したことがアナウンスされています。

### How to animate 2D characters in Unity 6

[How to animate 2D characters in Unity 6 - Technical Articles - Unity Discussions](https://discussions.unity.com/t/how-to-animate-2d-characters-in-unity-6/1642950)

Unity公式の2Dサンプルゲーム[Happy Harvest](https://assetstore.unity.com/packages/essentials/tutorial-projects/happy-harvest-2d-sample-project-259218)を題材に、Unity 6でどのように2Dアニメーションをつけるかについて解説するディスカッションです。

2Dアニメーションをセットアップするために[PSD Importer](https://docs.unity3d.com/Packages/com.unity.2d.psdimporter@10.1/manual/index.html)を用いてスプライトを用意するワークフローの構築からスプライトアニメーションのためのリギングやアニメーションコントローラーのセットアップ、IK制御などについてそれぞれ説明しています。

### Unity Distributed Authority is now Generally Available!

[Unity Distributed Authority is now Generally Available! - Unity Engine - Unity Discussions](https://discussions.unity.com/t/unity-distributed-authority-is-now-generally-available/1643825)

Unity Multipolayerのネットワークトポロジーとして「Distributed Authority」が正式にリリースされたことをアナウンスするディスカッションです。

従来提供されるモデルと比べて高品質な予測などが必要な対戦ゲームには不向きですが、クライアントサイドでのスケールや、より安価なマルチプレイを実現するためのトポロジーとして利用できるとのことです。

### Identifying GPU bottlenecks with Metal frame capture

[Identifying GPU bottlenecks with Metal frame capture - Technical Articles - Unity Discussions](https://discussions.unity.com/t/identifying-gpu-bottlenecks-with-metal-frame-capture/1642356)

Unityで作成したXcodeプロジェクトのGPUボトルネックを、Metal frame captureを用いて特定する方法について解説するディスカッションです。

フレームキャプチャーの取り方からシェーダーの各ステージやオーバードロー、ジオメトリなどのキャプチャ内容の具体的な確認方法などについてそれぞれ紹介しています。

### Native Android Unity Profiling using Android Studio

[Native Android Unity Profiling using Android Studio - Technical Articles - Unity Discussions](https://discussions.unity.com/t/native-android-unity-profiling-using-android-studio/1641922)

UnityでビルドしたAndroid向けアプリを、Android Studioを用いてプロファイリングする方法について紹介するディスカッションです。

Android StudioでアプリにアタッチするためのUnity側の設定や実際のアタッチ方法、実行中のCPU使用などをキャプチャする方法についてそれぞれ紹介しています。

## Articles

### Adaptive Probe Volumesを自作シェーダーに対応させる【NOVA Shader】

[Adaptive Probe Volumesを自作シェーダーに対応させる【NOVA Shader】 - CORETECH ENGINEER BLOG](https://blog.sge-coretech.com/entry/2025/05/12/113927)

このブログを執筆するサイバーエージェントのコアテクが開発する「[Nova Shader](https://github.com/CyberAgentGameEntertainment/NovaShader)」のAdaptive Probe Volumes（APVs）対応を元に、自作シェーダーをAPVsに対応する方法を解説しています。

Unityの組み込みシェーダーのAPVsの対応方法からそれに付随するキーワードや関数を説明した後、自作シェーダーをAPVsに対応するための方法について解説しています。

また、APVsの処理負荷についても紹介しています。

### バイナリ操作でよく使うAPIたち

[C#：バイナリ操作でよく使うAPIたち](https://zenn.dev/ruccho/articles/12245271629ec6)

C#でバイナリ操作を行う際に、領域の確保やエンディアンを考慮した値の読み書き、`Span<T>`を介した操作方法、構造体レイアウトの指定方法から連続した要素の読み書きなど、それぞれ用途ごとのAPIを網羅的に紹介しています。

### UniTaskのIObservable.ToUniTaskをR3でもやりたいときの対処法(FirstAsync・LastAsync)

[【C#】UniTaskのIObservable.ToUniTaskをR3でもやりたいときの対処法(FirstAsync・LastAsync) - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2025/05/15/120000)

UniRxで`IObservable.ToUniTask`相当の実装を、R3で実現する方法として`FirstAsync`や`LastAsync`の利用方法を紹介しています。

### リアルな表現は指先から。ホロライブアプリを改良して、トラッキングデバイスの組み合わせ自由度を上げてみた

[リアルな表現は指先から。ホロライブアプリを改良して、トラッキングデバイスの組み合わせ自由度を上げてみた｜カバー株式会社　公式note](https://note.cover-corp.com/n/n9471275c987c)

カバー株式会社で開発するタレント向けの配信用アプリを改良し、フェイス・ボディー・フィンガーのトラッキング処理をそれぞれ分割し、それぞれのトラッキングに異なる入力を利用し、統合する方法について紹介しています。

### VFX Graphを自作レンダーパイプラインに導入する

[VFX Graphを自作レンダーパイプラインに導入する](https://zenn.dev/nithink/articles/3875574342765a)

Scriptable Render Pipeline上に自作したパイプラインをVFX Graphに対応させるための方法について解説しています。

### ゲーム開発者向けの Google AI まとめ

[ゲーム開発者向けの Google AI まとめ｜npaka](https://note.com/npaka/n/n558111807dfd)

「[Google AI for game developers](https://developers.googleblog.com/en/google-ai-for-game-developers/)」のまとめとして「Gemma 3」やUnityプラグイン、「Gemini 2.0 Flash」で構築された「[Home Run: Gemini Coach Edition](https://github.com/googleforgames/homerun)」などについて紹介しています。

### CancellationTokenの生成・使い方完全ガイド

[Unity - CancellationTokenの生成・使い方完全ガイド - yotiky Tech Blog](https://yotiky.hatenablog.com/entry/unity_cancellationtoke-guide)

Unityのライフサイクルにおいての`CancellationToken`の扱い方やタイムアウト付きの`CancellationToken`の扱い方などをまとめています。

### UnityのLocalizationでSpreadsheetと連携する手順

[UnityのLocalizationでSpreadsheetと連携する手順 – ゆーじの技術ブログ](https://unity-yuji.xyz/localization-spreadsheet/)

LocalizationパッケージをGoogle Spreadsheetを連携する方法を紹介しています。

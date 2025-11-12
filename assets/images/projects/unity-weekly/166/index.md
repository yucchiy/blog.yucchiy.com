---
type: unity-weekly
title: Unity Weekly 166
description: >-
  2024/04/01週のUnity Weeklyです。Multiplayer resource roundup、GDC 2024
  Recap、TextMeshPro、Utf8StreamReaderなどについて取り上げています。
pubDatetime: 2024-03-31T15:00:01.000Z
tags:
  - Unity Weekly
  - Unity
---


## Unity Officials

### Multiplayer resource roundup: Get the latest templates, samples, and demos

[Multiplayer resource roundup: Get the latest templates, samples, and demos | Unity Blog](https://blog.unity.com/engine-platform/multiplayer-resource-roundup)

Unityの提供するマルチプレイヤーゲーム開発に関する最新のテンプレート、サンプル、デモを紹介する記事です。

NetCode for GameObjectsを用いたマルチプレイヤー基盤の構築から高度なマルチプレイヤー開発者向けのデモやサンプル、コミュニティなど幅広く紹介しています。

### GDC 2024：トレンド、Unity 6 ロードマップ、マルチプレイヤー、AI など多彩な話題を提供

[GDC 2024：トレンド、Unity 6 ロードマップ、マルチプレイヤー、AI など多彩な話題を提供 | Unity Blog](https://blog.unity.com/ja/games/gdc-2024-recap)

「[GDC 2024: Trends, the Unity 6 roadmap, multiplayer, AI, and more](https://blog.unity.com/games/gdc-2024-recap)」の日本語翻訳記事で、GDC 2024でUnityが発表した内容をまとめています。

### データ指向設計の座談会：あなたの質問にお答えします

[データ指向設計の座談会：あなたの質問にお答えします | Unity Blog](https://blog.unity.com/ja/engine-platform/dots-webinar-roundtable-q-a)

「[Meta title DOTS Roundtable Q&A with Stunlock Studios & Sunblink Entertainment | Unity Blog](https://blog.unity.com/engine-platform/dots-webinar-roundtable-q-a)」の日本語翻訳記事で、昨年の12月に開催されたDOTSに関するラウンドテーブルのQ&Aの要約が公開されています。

## Articles

### TextMeshProドキュメント

[TextMeshProドキュメント | Unity用ビジュアルノベルツール「宴」](https://madnesslabo.net/utage/?page_id=12863)

TextMeshProの基本的な使い方から各種アセットの扱い、デザインのための各種設定、各種tipsなどを詳細にまとめています。

### BuildPlayerWindow.RegisterBuildPlayerHandler で Build や Build And Run の動作を上書きできる

[【Unity】BuildPlayerWindow.RegisterBuildPlayerHandler で Build や Build And Run の動作を上書きできる - コガネブログ](https://baba-s.hatenablog.com/entry/2024/03/26/080000)

[BuildPlayerWindow.RegisterBuildPlayerHandler](https://docs.unity3d.com/ScriptReference/BuildPlayerWindow.RegisterBuildPlayerHandler.html)を用いて、「Build Settings」ウインドウなどの「Build」や「Build And Run」の動作を上書きする方法について紹介しています。

### ProfilerRecorderを用いてアプリ上でメモリ使用量を計測する

[Now in REALITY Tech #103 ProfilerRecorderを用いてアプリ上でメモリ使用量を計測する｜REALITY](https://note.com/reality_eng/n/nf5bc8ba75767)

`ProfilerRecorder` を用いて、[Memory Profiler module](https://docs.unity3d.com/2022.2/Documentation/Manual/ProfilerMemory.html)などのプロファイラーに表示される各種情報を取得する方法や各種情報の扱い、Profiler APIで取れる値との違いについてそれぞれ解説しています。

### Build Report Inspectorを用いてビルドプロセスに関する情報をインスペクター上に分かりやすく表示する

[【Unity】Build Report Inspectorを用いてビルドプロセスに関する情報をインスペクター上に分かりやすく表示する - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2024/03/29/120000)

Unityが提供する[Build Report Inspectorパッケージ](https://docs.unity3d.com/Packages/com.unity.build-report-inspector@0.3/manual/index.html)を用いて、ビルド時のレポート情報を詳細に確認する方法を紹介しています。

### Custom SRP 2.5.0

[Custom SRP 2.5.0](https://catlikecoding.com/unity/custom-srp/2-5-0/)

Catlike CodingのCustom SRPチュートリアル記事の続編で、前回の「[Custom SRP 2.4.0](https://catlikecoding.com/unity/custom-srp/2-4-0/)」までで扱っていた複数の配列を利用してライトとシャドウのデータを送信していた箇所を、構造化バッファに置き換えることで、コードのメンテナンス性と保守性を向上させる方法について解説しています。

### (Unity) Android で HttpClient で通信するとインターネット権限が自動でつかない問題

[(Unity) Android で HttpClient で通信するとインターネット権限が自動でつかない問題 - ネコのために鐘は鳴る](https://ikorin2.hatenablog.jp/entry/2024/03/30/025946)

UnityWebRequestを用いると、Androidアプリビルド時で自動でインターネットに関する権限が付与される挙動を、HttpClientのみつかっている場合でも再現する方法について紹介しています。

### MGS Stealth Camo in Shader Graph

[MGS Stealth Camo in Shader Graph](https://danielilett.com/2024-03-26-tut7-9-mgs-stealth-camo/)

メタルギア・ソリッドのシリーズで登場するステルス迷彩のような表現を、Shader Graphを用いて再現する方法について紹介しています。

### EditorApplication.updateMainWindowTitle でエディタのタイトルを変えられる

[【Unity】EditorApplication.updateMainWindowTitle でエディタのタイトルを変えられる - コガネブログ](https://baba-s.hatenablog.com/entry/2024/03/25/080000)

Unity 2023からpublic APIとして利用できるようになった[EditorApplication.updateMainWindowTitle](https://docs.unity3d.com/ja/2023.2/ScriptReference/EditorApplication-updateMainWindowTitle.html)をもちいて、Unityエディターのタイトルを変更する方法を紹介しています。

### UnityでC#10, 11を使えるようする手順メモ

[UnityでC#10, 11を使えるようする手順メモ](https://zenn.dev/chorome/articles/ce2d86608e55fc)

Cysharpの提供する[CsprojModifier](https://github.com/Cysharp/CsprojModifier)を用いて、UnityとIDE側双方でC#10・11の機能を利用するための設定手順と、注意点を紹介しています。

### USSのベストプラクティス

[【Unity】【UI Toolkit】USSのベストプラクティス - LIGHT11](https://light11.hatenadiary.com/entry/2024/03/26/193252)

Unity公式のUSSのベストプラクティスをまとめる[ドキュメント](https://docs.unity3d.com/2023.2/Documentation/Manual/UIE-USS-WritingStyleSheets.html)をまとめています。

### Unityクライアントだってオブザーバビリティを実現したい！

[Unityクライアントだってオブザーバビリティを実現したい！ #初心者 - Qiita](https://qiita.com/ume67026265/items/72d5068edd9a77baef2e)

UnityクライアントにNewRelic SDKを導入し、クライアントのエラーや行動、パフォーマンスを監視する方法について解説しています。

### uLipSync のバグ修正・更新についての解説

[uLipSync のバグ修正・更新についての解説 - 凹みTips](https://tips.hecomi.com/entry/2024/03/30/230850)

uLipSyncにおけるバグ修正や更新内容を実装の詳細を交えつつ解説しています。

### Unity Museを使った！

[Unity Museを使った！ - トマシープが学ぶ](https://bibinbaleo.hatenablog.com/entry/2024/03/21/164353)

Unity Museのテクスチャ生成やモーション生成などの各種機能を試用し、その体験について共有しています。

## Repositories

### Utf8StreamReader

[Cysharp/Utf8StreamReader: Utf8 based StreamReader for high performance text processing.](https://github.com/Cysharp/Utf8StreamReader)

UTF8ベースのStreamReader実装。UTF8のまま1行ずつ `ReadOnlyMemory<byte>` を取得できる。

不要な文字列割り当てを減らすことでパフォーマンス向上とメモリアロケーションの削減を実現しており、普通にStreamReaderで処理する方法と比べて100万行処理時のアロケーション確保が24万倍削減される。

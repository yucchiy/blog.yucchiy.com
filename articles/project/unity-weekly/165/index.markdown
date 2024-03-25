---
type: "unity-weekly"
title: "Unity Weekly 165"
description: "2024/03/25週のUnity Weeklyです。GDC 2024 Recap、New Shader Graph feature examples、Unity 6 Roadmap、2024 Unity Gaming Report、Game Delopers Meeting Vol.61などについて取り上げています。"
tags: ["Unity Weekly", "Unity"]
date: "2024-03-25T00:00:01"

---


## Unity Officials

### GDC 2024: Trends, the Unity 6 roadmap, multiplayer, AI, and more

[GDC 2024: Trends, the Unity 6 roadmap, multiplayer, AI, and more | Unity Blog](https://blog.unity.com/games/gdc-2024-recap)

GDC 2024でUnityが発表した内容をまとめています。

### New Shader Graph feature examples in 2022 LTS

[New Shader Graph feature examples in 2022 LTS | Unity Blog](https://blog.unity.com/engine-platform/shader-graph-feature-examples-2022-lts)

Unity 2022 LTSで追加されたShader Graphの新しいサンプルセットに含まれるカテゴリとその機能の概要について紹介しています。

### Unity 6 and beyond: A roadmap of Unity Engine and services | GDC 2024

- [Unity 6 and beyond: A roadmap of Unity Engine and services | GDC 2024 - YouTube](https://www.youtube.com/watch?v=o9AGkB9nnkc) 
- [Official - Unity 6 and beyond: A roadmap of Unity Engine and services | GDC 2024 - Unity Forum](https://forum.unity.com/threads/unity-6-and-beyond-a-roadmap-of-unity-engine-and-services-gdc-2024.1561318/)

GDC 2024にて発表されたUnityEngineとサービスに対するロードマップのセッションの動画が公開されています。

### 2024 Unity Gaming Report

- [2024 Unity Gaming Report - Trends, data & expert tips | Unity](https://unity.com/ja/resources/gaming-report)
- [Official - 2024 Unity Gaming Report - Unity Forum](https://forum.unity.com/threads/2024-unity-gaming-report.1559999/)

「Unity Gaming Report 2024」が公開されました。

このレポートは、約500万人のUnityを用いた開発者と3420億回以上の広告ビューのデータを元に作成されており、
AI利用、収益の多様性、クロスプラットフォーム開発、マルチプレイヤーゲーム開発、エンゲージメントの5つの要素に焦点を当てています。

## Slides

### Game Developers Meeting Vol.61

- [.NETの非同期戦略とUnityとの相互運用 - Speaker Deck](https://speakerdeck.com/neuecc/dot-netnofei-tong-qi-zhan-lue-tounitytonoxiang-hu-yun-yong)
- [C# 大統一理論推進委員会 会員のための Unity Package Manager プロジェクト構成案 - Speaker Deck](https://speakerdeck.com/monry/unity-package-manager-project-structure-for-csharp-grand-unified-theory)
- [2024-03-21 Unityバイブル紹介 - Google Slides](https://docs.google.com/presentation/d/e/2PACX-1vRk6SYUpVjZWU1zPQjzTdHuvfU2cpe0h_g3FYPmcg2l1env4VsFEFb7UeIOeckAA6AlVaTo0sHqUAkV/pub?start=false&loop=false&delayms=3000&slide=id.g26c2c88b4fb_1_6)

3/21に開催された「[Game Developers Meeting Vol.61](https://peatix.com/event/3884126/view)」の登壇資料が公開されています。

## Articles

### SpanとMemory

[【C#】SpanとMemory - Annulus Games](https://annulusgames.com/blog/span-and-memory/)

`Span<T>` と `Memory<T>` 概要からの使い分け、 `Memory<T>` を適切に扱う方法や `IMemoryOwner<T>` による所有権の管理、所有権モデルを用いた安全なバッファ管理などを解説しています。

### モバイルアプリ上の WebAssembly 製ライブゲームで発生した例外を捕捉して計測する

[モバイルアプリ上の WebAssembly 製ライブゲームで発生した例外を捕捉して計測する - Mirrativ Tech Blog](https://tech.mirrativ.stream/entry/2024/03/18/100841?utm_source=feed)

UnityからWebGLビルドしたWebAssemblyのゲームで、iOS/Androidそれぞれの環境で発生した例外を捕捉する方法を紹介しています。

### XR Interaction Toolkitをマウス入力に対応させる

[XR Interaction Toolkitをマウス入力に対応させる - Activ8 Tech Blog](https://synamon.hatenablog.com/entry/2024/03/21/180308)

XR Interaction Toolkitを、XRに限らない3Dオブジェクトに対しての汎用的なインタラクションを扱うツールとして利用する方法として、
Input System経由でのマウス入力を元に3Dオブジェクトとインタラクションする `XRBaseController` の実装を紹介しています。

### AppUI×ClaudiaでMVVMを意識してチャットアプリをつくる

- [【Unity】AppUI×ClaudiaでMVVMを意識してチャットアプリをつくる 1章 設計説明編 #C# - Qiita](https://qiita.com/garume/items/d3edba72548f51108e7c)
- [【Unity】AppUI×ClaudiaでMVVMを意識してチャットアプリをつくる 2章 AppUI編 #C# - Qiita](https://qiita.com/garume/items/9e83eb7a3ce7b8c12594)
- [【Unity】AppUI×ClaudiaでMVVMを意識してチャットアプリをつくる 3章 MVVM実装編 #C# - Qiita](https://qiita.com/garume/items/21840bc9edd70f40503b)
- [【Unity】AppUI×ClaudiaでMVVMを意識してチャットアプリをつくる 4章 アプリ実装編 #C# - Qiita](https://qiita.com/garume/items/5a26324cbbbeb2d32dc0)

C#製のClaudeクライアント[Claudia](https://github.com/Cysharp/Claudia)を利用したチャットアプリを、AppUIを利用し、MVVMパターンを用いて実装する方法について解説しています。

### Local UVs for Sprites in Sprite Sheet/Atlas

[Local UVs for Sprites in Sprite Sheet/Atlas | Cyanilux](https://www.cyanilux.com/tutorials/sprite-local-uv/)

スプライトシートやアトラス内のスプライトに対してローカルUV座標を取得する方法として3つの方法を紹介しています。

### NugetForUnityを使うときの注意点メモ

[NugetForUnityを使うときの注意点メモ #C# - Qiita](https://qiita.com/toRisouP/items/6c735e5fc28522853e5b)

NugetForUnityを利用した際のパッケージのバージョン管理やパッケージの復元方法、パッケージをうまくインストールできない際のトラブルシューティングについてそれぞれ紹介しています。

### Visitorパターンを用いた条件分岐を使わないサブウェポンの切り替え

- [【Unity】Visitorパターンを用いた条件分岐を使わないサブウェポンの切り替え](https://zenn.dev/cz_mirror/articles/f6b7a813a8afeb)
- [【Unity】Visitorパターンを用いたボムの実装](https://zenn.dev/cz_mirror/articles/8029dfe08228e1)

Visitorパターンを用いて、複数種類存在するサブウェポンの切り替えや効果の実装を条件分岐を用いずに実装する方法を紹介しています。

### Intro to Shader Graph in Unity (Part 6 - Lighting Basics)

- [Intro to Shader Graph in Unity (Part 6 - Lighting Basics)](https://danielilett.com/2024-03-19-tut7-8-intro-to-shader-graph-part-6/)
- [Unity Shader Graph Basics (Part 6 - Lighting Basics) - YouTube](https://www.youtube.com/watch?v=Tjo6mUhqui8)

### 「Multi-Process AssetBundle Building」でアセットバンドルのビルドを高速化

[【Unity】「Multi-Process AssetBundle Building」でアセットバンドルのビルドを高速化 - コガネブログ](https://baba-s.hatenablog.com/entry/2024/03/18/080000)

Unity 2023.1から実験的に利用できる、アセットバンドルビルドをマルチプロセスで行う機能「Multi-Process AssetBundle Building」について、その機能や利用方法、ビルド時間の比較結果を紹介しています。

### `[SerializeField]` の命名規約をソリューションごとに変更する

[[SerializeField] の命名規約をソリューションごとに変更する](https://zenn.dev/monry/articles/20240323-serializefield-in-rider)

Jetbrains Riderで `[SerializeField]` がついたフィールドの命名規則を、レイヤーベースの設定を用いてソリューションごとに変更する方法を紹介しています。

### destroyCancellationToken でオブジェクトの寿命管理

[destroyCancellationToken でオブジェクトの寿命管理 #C# - Qiita](https://qiita.com/sator_imaging/items/48296a686e4bbff8676c)

`destroyCancellationToken` を利用したオブジェクトの寿命管理の1手法について紹介しています。

### Application.memoryUsageChanged でメモリの使用状況を検知できる

[【Unity】Application.memoryUsageChanged でメモリの使用状況を検知できる - コガネブログ](https://baba-s.hatenablog.com/entry/2024/03/21/080000)

Unity 2022.2から利用できるようになった、メモリの使用状況の変化を検知する `Application.memoryUsageChanged` について、その使い方を紹介しています。

### Unity SearchでApplication.dataPathなどのpublicなStatic APIメソッドとプロパティの結果をお手軽に調べる方法(api:)

[【Unity】Unity SearchでApplication.dataPathなどのpublicなStatic APIメソッドとプロパティの結果をお手軽に調べる方法(api:) - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2024/03/18/120000)

Unity SearchでUnityのAPIのメソッドやプロパティの結果を調べる方法を紹介しています。

### StringBuilderとDefaultInterpolatedStringHandlerの処理速度・メモリ確保量を比べてみる

[【C#】StringBuilderとDefaultInterpolatedStringHandlerの処理速度・メモリ確保量を比べてみる - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2024/03/22/120000)

`DefaultInterpolatedStringHandler` を `StringBuilder` のような用途で扱う方法と、その処理速度とメモリ確保量を比較しています。

### UnityアプリをDiscordアクティビティとして実装してみる

[UnityアプリをDiscordアクティビティとして実装してみる](https://zenn.dev/riti0208/articles/c0fc7fc54b6f1a)

UnityアプリをWebGLビルドして、Discordのアクティビティとして起動する方法について紹介しています。

### 現在描画に利用しているカメラの取得方法

[【Unity】現在描画に利用しているカメラの取得方法 #Unity - Qiita](https://qiita.com/kazuki_kuriyama/items/d28f0a82ca726fddd7d1)

URPとBiRPそれぞれで、レンダリングが開始されたタイミングとそのレンダリングで利用されているカメラを取得する方法を紹介しています。
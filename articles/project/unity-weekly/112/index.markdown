---
type: "unity-weekly"
title: "Unity Weekly 112"
description: "2023/03/13週のUnity Weeklyです。 GDC 2023、BodyPix、ChatGPT、Stylized Water Shaderなどについて取り上げています。"
tags: ["Unity Weekly","Unity"]
date: "2023-03-13T00:00:01"

---

## Unity Officials

### GDC で Unity の出展を見逃すべきでない 3 つの理由

[GDC で Unity の出展を見逃すべきでない 3 つの理由 | Unity Blog](https://blog.unity.com/ja/news/3-reasons-why-unity-at-gdc-is-all-about-you)

GDC2023でのUnity公式のセッションやブース出展、Unityで開発されたゲームｎセッション情報を紹介しています。

### CTO の Luc Barthelet が語る、ゲームへの情熱と継続的な学習こそが Unity が次のフェーズへ進む鍵となる理由

[CTO の Luc Barthelet が語る、ゲームへの情熱と継続的な学習こそが Unity が次のフェーズへ進む鍵となる理由 | Unity Blog](https://blog.unity.com/ja/news/cto-luc-barthelet-on-key-to-next-phase-of-unity-tech)

新しくUnityのCTOとなったLuc Barthelet氏のインタビュー記事が公開されています。

### UnityとBodyPixでバーチャル背景やボディトラッキングをやってみよう

[UnityとBodyPixでバーチャル背景やボディトラッキングをやってみよう](https://www.youtube.com/watch?v=kE_xlG8OAm0)

Googleの開発する画像から人物の切り抜き・手や顔などのキーポイント座標の特定を行える機械学習モデルBodyPixを、Unityの推論エンジンBarracudaを用いて利用する方法について紹介しています。

BodyPixの概要やこれを用いたサンプルプロジェクト、処理負荷を解説しています。

## Unity Packages

Unityが開発するパッケージの、Pull RequestsやReleasesの中から、いくつかピックアップして紹介します。

### Compatibity with URP forward+

[com.unity.toonshader/whats-new-0.9.x.md at development/v1 · Unity-Technologies/com.unity.toonshader](https://github.com/Unity-Technologies/com.unity.toonshader/blob/development/v1/com.unity.toonshader/Documentation~/whats-new-0.9.x.md)

com.unity.toonshaderの0.9.x向けに、URPと互換性のあるforward+の実装がマージされる予定です。

### Expansion of Android permissions for notifications #249

[https://github.com/Unity-Technologies/com.unity.mobile.notifications/pull/249](https://github.com/Unity-Technologies/com.unity.mobile.notifications/pull/249)

Androidの通知で、バッテリー保護状態でも正確に通知を届けるためのパーミッションの要求を行うためのAPI実装がマージされました。

### feat: quaternion synchronization, delta position, and NetworkTransform bandwidth optimizations #2388

[https://github.com/Unity-Technologies/com.unity.netcode.gameobjects/pull/2388](https://github.com/Unity-Technologies/com.unity.netcode.gameobjects/pull/2388)

NetworkTransformのインスタンスあたりの帯域幅のコストを（精度を犠牲にして）最大50%削減するオプションの実装がマージされました。また、クォータニオン同期や圧縮についてのAPIも追加されています。

## Articles

### Stylized Water Shader

[Stylized Water Shader](https://alexanderameye.github.io/notes/stylized-water-shader/)

Shader GraphでリアルタイムなStylized Water Shaderを実装する方法についてのチュートリアル記事。

URPの設定から水の色や不透明度の扱い、屈折や泡、浮力、波、ライティングなどの表現とその実装や設定についてステップバイステップで詳細に解説しています。

### Fractured Cube Breakdown

[Fractured Cube Breakdown](https://www.cyanilux.com/tutorials/fractured-cube-breakdown/)

Pivot Bakingという手法を用いた破片の原点・ピボット位置のベイク方法から、ベイクしたデータをUnityで利用するためのShader Graph上でのノード構築について解説しています。

また、この手法の応用事例をいくつか紹介しています。

### NativeList や NativeArray の拡張メソッドが使える「com.bovinelabs.core」紹介

[【Unity】NativeList や NativeArray の拡張メソッドが使える「com.bovinelabs.core」紹介 - コガネブログ](https://baba-s.hatenablog.com/entry/2023/03/09/090000)

NativeListやNativeArrayの拡張メソッドを提供する「[com.bovinelabs.core](https://gitlab.com/tertle/com.bovinelabs.core/)」について紹介しています。

### 高速化された新しいオブジェクト検索メソッド FindObjectsByTypeとFindAnyObjectByType

[高速化された新しいオブジェクト検索メソッド FindObjectsByTypeとFindAnyObjectByType 【Unity】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/FindObjectsByType)

`FindObjectsOfType` より高速化された `FindObjectsByType` について、利用する際の注意点の紹介と、パフォーマンス比較を行っています。

### Unityエディターのそのものを拡張する　第3回ツールバー拡張編

[Unityエディターのそのものを拡張する　第3回ツールバー拡張編 - Qiita](https://qiita.com/marv_nakazawaka/items/7d50320c70d9560bc5d9)

Unityのツールバーの両端を拡張する手順と、UIをUIToolkitで開発する方法についてそれぞれ紹介しています。

### OpenAIが公開したChatGPTとWhisperのAPIをUnityでサクッと触れるようにした

[OpenAIが公開したChatGPTとWhisperのAPIをUnityでサクッと触れるようにした - Synamon’s Engineer blog](https://synamon.hatenablog.com/entry/openai_api_unity)

この記事の著者が開発する、OpenAIが公開したChatGPTとWhisperのAPIをUnityから簡単に利用できるレポジトリとその利用手順を紹介しています。

### aab環境で150M超えそうな場合の対処unity2021.3.17版

[aab環境で150M超えそうな場合の対処unity2021.3.17版](https://zenn.dev/waz/articles/86165b9182ca64)

Androidのaabが150MBを超えた場合にできる対策を、アプリ分割と容量ダイエットの観点から紹介しています。

アプリ分割については「Split Application Binary」と「Play Asset Delivery」の2つの紹介とUnityから利用する際の注意点を、容量ダイエットについては「アセットの圧縮率」と「アセットバンドル導入」2つを紹介しています。

### ComputeShader.Dispatchの真の実行タイミングはいつ？

[ComputeShader.Dispatchの真の実行タイミングはいつ？【Unity】 - Qiita](https://qiita.com/Red_Black_GPGPU/items/fac1bd5ceb3277a12bd7)

ComputeShader.Dispatchの実行と完了がUnityのライフサイクル上どのタイミングに来るかを検証しています。

### Android Studio を利用して C++ のスタティックライブラリ（.a）をUnity（C#）向けに作成する

[Android Studio を利用して C++ のスタティックライブラリ（.a）をUnity（C#）向けに作成する](https://zenn.dev/meson/articles/use-config-content-provider)

Android Studioを用いて、C++で記述したライブラリをスタティックライブラリとしてビルドしてUnityで利用するまでの手順を解説しています。

### 【ChatGPT】Shaderをガチャする。

[【Unity】【ChatGPT】Shaderをガチャする。](https://zenn.dev/ittonijo/articles/fc82b02a3c495f)

AIShaderを用いたChatGPTによるシェーダー自動生成の手順について紹介しています。

### UnityからVOICEVOXを簡単に利用できるライブラリを作った

[UnityからVOICEVOXを簡単に利用できるライブラリを作った - Qiita](https://qiita.com/mikito/items/6656c42c88ce0da3d2c8)

この記事の著者が開発する、UnityからVOICEVOX Engineを用いて音声合成を行うライブラリ「[Unity VOICEVOX Bridge](https://github.com/mikito/unity-voicevox-bridge)」の利用方法を紹介しています。

### Photon Fusion for Unityを使った自分のプロダクトをサーバーモードに対応する～実装編

[Photon Fusion for Unityを使った自分のプロダクトをサーバーモードに対応する～実装編 - Qiita](https://qiita.com/nimushiki/items/8be64371eca319f42378)

Photon Fusionのサーバーモードを用いてマルチプレイヤーのスポーンやデスポーン・名前表示を行う実装について紹介しています。

### UniversalRPで、Depthを表示するシンプルなRendererFeature

[UniversalRPで、Depthを表示するシンプルなRendererFeature - Qiita](https://qiita.com/ScreenPocket/items/418eecb9cad022d45627)

URPで深度を表示するRendererFeatureの実装と、必要な設定を紹介しています。

### 有名なGIFサポートライブラリについて比較してみる(UniGif, mgGif, Unity-GifDecoder)

[【Unity】有名なGIFサポートライブラリについて比較してみる(UniGif, mgGif, Unity-GifDecoder) - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2023/03/09/120000)

Unityから利用できるGIF動画を再生するためのライブラリを3つ比較しています。

## Repositories

### com.bovinelabs.core

[Tim (tertle) / com.bovinelabs.core · GitLab](https://gitlab.com/tertle/com.bovinelabs.core/)0i

DOTSにフォーカスした拡張機能、ツール、ユーティリティ。

### AIShader

[keijiro/AIShader: ChatGPT-powered shader generator for Unity](https://github.com/keijiro/AIShader)

ChatGPTを用いてシェーダーを自動生成するライブラリ。

### ChatGPT-API-unity

[mochi-neko/ChatGPT-API-unity: Binds ChatGPT chat completion API to pure C# on Unity.](https://github.com/mochi-neko/ChatGPT-API-unity)

ChatGPTのAPIをUnityから実行するためのライブラリ。

### Whisper-API-unity

[mochi-neko/Whisper-API-unity: Binds Whisper speech to text API to pure C# on Unity.](https://github.com/mochi-neko/Whisper-API-unity)

WisperのAPIをUnityから実行して、音声入力からテキストに変換を行うライブラリ。

### Unity VOICEVOX Bridge

[Unity VOICEVOX Bridge](https://github.com/mikito/unity-voicevox-bridge)

VOICEVOX APIを用いて音声合成を行うライブラリ。
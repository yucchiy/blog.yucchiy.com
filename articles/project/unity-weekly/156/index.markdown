---
type: "unity-weekly"
title: "Unity Weekly 156"
description: "2024/01/22週のUnity Weeklyです。Unity 6 beta、Apple privacy manifests、screen reader API、URPサンプル、Global Game Jam 2024などについて取り上げています。"
tags: ["Unity Weekly", "Unity"]
date: "2024-01-22T00:00:01"

---

## Unity Officials

### Unity 6 beta (2023.3) - Feature Highlights

[Official - Unity 6 beta (2023.3) - Feature Highlights - Unity Forum](https://forum.unity.com/threads/unity-6-beta-2023-3-feature-highlights.1532590/)

Unity 6 beta（2023.3.0b1）のリリースに際して、グラフィックスやXR、マルチプレイなどの主要な機能のハイライトを紹介しています。

### Apple privacy manifest updates for Unity Engine

[Official - Apple privacy manifest updates for Unity Engine - Unity Forum](https://forum.unity.com/threads/apple-privacy-manifest-updates-for-unity-engine.1529026/)

WWDC2023で発表された[Privacy Manifests](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files)のUnityEngine側の対応について、現状の対応状況および今後の対応についてまとめています。

これらの対応には現状Unityのアップデートが必要で、対応の最小バージョンは2021LTSを予定しているとのことです。下記は対応にUnityのアップデートが必要になるとのことです。

- Unity Engine側のRequired Reasonsの対応は2021.3.34f1、2022.3.16f1、2023.2.5f1にリリース予定
- Unityプラグインやパッケージ、プロジェクトのPrivacy Manifestsを取り込むソリューションが2021.3.35f1、2022.3.18f1、2023.2.7f1にリリース予定。リリースノートには「Add Apple Privacy Manifest support」と記載される
- UnityFramework内のUnityEngineライブラリへの署名は現在作業中。

また、アプリ開発者側の必要な対応や、[Unityが現状利用するRequired Reasons API](https://docs.unity3d.com/2023.3/Documentation/Manual/apple-privacy-manifest-policy.html)ついても言及しています。

### A look at mobile screen reader support in the Unity Engine

[A look at mobile screen reader support in the Unity Engine | Unity Blog](https://blog.unity.com/engine-platform/mobile-screen-reader-support-in-unity)

2023.2テックストリームから利用できるScreen Reader APIについて、その概要から利用方法、サポートされているプラットフォームと今後の対応予定について紹介しています。

### Dive into the URP 3D Sample

[Dive into the URP 3D Sample | Unity Blog](https://blog.unity.com/engine-platform/dive-into-the-urp-3d-sample)

Unityが先日公開したURPの新しいサンプルシーンについて、各シーンの技術的な概要やその狙いについて紹介しています。

### Global Game Jam 2024 x Unity! - COME JAM WITH US!

[Official - Global Game Jam 2024 x Unity! - COME JAM WITH US! - Unity Forum](https://forum.unity.com/threads/global-game-jam-2024-x-unity-come-jam-with-us.1537762/)

1/22から1/28に開催されるGlobal Game Jam 2024にUnityがスポンサーとして参加することを発表しています。

Unityを利用したゲーム開発に役立つチュートリアルや、[最大94%オフのアセットパック](https://assetstore.unity.com/mega-bundles/quick-start)の販売について紹介しています。

また、[学生向けのライセンス](https://unity.com/products/unity-student)や、[Unity Museの15日無料トライアル](https://store.unity.com/configure-plan/unity-muse-trial)について案内しています。

## Articles

### .NETプロジェクトとUnityプロジェクトのソースコード共有最新手法

[neue cc - .NETプロジェクトとUnityプロジェクトのソースコード共有最新手法](https://neue.cc/2024/01/15_shareprojectinunity.html)

ピュアな .NETプロジェクトのコードをUnityと共有する方法について、共有用のクラスライブラリプロジェクトを作成して、それをUPMローカルパッケージ参照でUnity側に取り込む手法の詳細を解説しています。

### 「IDOLY PRIDE」の着替えのカメラ実装の紹介

[「IDOLY PRIDE」の着替えのカメラ実装の紹介 | QualiArtsエンジニアブログ](https://technote.qualiarts.jp/article/71/)

記事の著者が開発に携わる「IDOLY PRIDE」の着せかえ機能におけるカメラの挙動の実装方法について、キャラの周囲を回るカメラの実装や焦点距離の特性を活かしたズーム実装、カメラの高さの調整と水平移動カメラについてそれぞれ解説しています。

### Unity(YetAnotherHttpHandler)とMagicOnionで自己署名証明書を使ったHTTPS&HTTP/2通信

[Unity(YetAnotherHttpHandler)とMagicOnionで自己署名証明書を使ったHTTPS&HTTP/2通信](https://zenn.dev/toutou/articles/2611fe24bd1939)

YetAnotherHttpHandlerとMagicOnionで、自己署名証明書を用いたHTTPSとHTTP/2通信の方法について、各種設定方法を具体的に解説しています。

### PBDの曲げ拘束を実装する

[PBDの曲げ拘束を実装する (2D)](https://zenn.dev/ruccho/articles/0270d51ab89b12)

2D上でのPBD（Position Based Dynamics）による紐や髪の毛のシミュレーションで、曲げ拘束の実装についてその実装を紹介しています。

### Private ProxyをUnityで実装

[Private ProxyをUnityで実装](https://zenn.dev/aakei/articles/94c2902ffc3061)

ブログ著者の開発する、[PrivateProxy](https://github.com/Cysharp/PrivateProxy)をUnity上で実現することを目的にした[ILAttributes](https://github.com/Akeit0/ILAttributes)の実装について、その技術的側面として .NET 8の `UnsafeAccessor` をUnityで実現するためのILPostProcessor実装について解説しています。

### UnityでMessagePack-CSharpのSourceGeneratorを使ってみる

[UnityでMessagePack-CSharpのSourceGeneratorを使ってみる #Unity - Qiita](https://qiita.com/p_a_sta/items/2b9522888b7488aafb7c)

MessagePack-Charpのコード生成を、このライブラリの[v2.6.x以降で採用される予定](https://github.com/MessagePack-CSharp/MessagePack-CSharp/releases/tag/v2.6.95-alpha)のSource Generatorを用いて行う方法について紹介しています。

### Unity/C#ゲーム開発における、クライアントでのマスタデータの扱い方

[Unity/C#ゲーム開発における、クライアントでのマスタデータの扱い方 – てっくぼっと！](https://blog.applibot.co.jp/2024/01/19/unity-master-data/)

記事の著者が開発に携わる「FINAL FANTASY Ⅶ EVER CRISIS」でのクライアントのマスターデーターあ使い方について、基本的なデータの扱い方から採用している[MasterMemory](https://tech.cygames.co.jp/archives/3269/)の活用、マスターデーターの意図しない操作を行わないための実装上の工夫について紹介しています。

### VisualElementで描画のためのメッシュを自由に生成できるMeshGenerationContextの使い方

[【Unity】【UI Toolkit】VisualElementで描画のためのメッシュを自由に生成できるMeshGenerationContextの使い方 - LIGHT11](https://light11.hatenadiary.com/entry/2024/01/15/193151)

UI Toolkitの `MeshGenerationContext` を用いて、 `VisualElement` 内にメッシュを描画する方法について、基本的な利用方法からテクスチャ利用のためのUV座標の設定について紹介しています。

### Unity から AWS を使う (Cognito で認証して S3 の署名付き URL を作成する)

[Unity から AWS を使う (Cognito で認証して S3 の署名付き URL を作成する) #Unity - Qiita](https://qiita.com/ma2yama/items/98180550bfa52a0474a3)

Unityへの[Nuget For Unity](https://github.com/GlitchEnzo/NuGetForUnity)を用いたAWS SDKのインストールから、S3署名付きURLを作成する方法について紹介しています。

### HDRPでカスタムShader -レイヤーが一致するDirectionalLightの影響を受ける・レイヤーで指定したオブジェクトの影を落とす

[HDRPでカスタムShader -レイヤーが一致するDirectionalLightの影響を受ける・レイヤーで指定したオブジェクトの影を落とす- - 3Dゲーム開発備忘録](https://daiki-eguchi.hatenablog.com/entry/2024/01/19/180053)

HDRPのカスタムシェーダーで、レイヤーベースでDirectionalLightの影響を受けるシェーダーの記述方法や、影をおとす対象のオブジェクトを指定する方法について紹介しています。

### エディタ拡張でスクリプトからテキストエディタを開く方法(InternalEditorUtility.OpenFileAtLineExternal)

[【Unity】エディタ拡張でスクリプトからテキストエディタを開く方法(InternalEditorUtility.OpenFileAtLineExternal) - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2024/01/19/120000)

エディター拡張からテキストエディターを開く `InternalEditorUtility.OpenFileAtLineExternal` についてその利用方法を紹介しています。

## Repositories

### Doinject

[mewlist/Doinject: Asynchronous DIContainer for Unity](https://github.com/mewlist/Doinject)

Unity向けの非同期DIフレームワーク。

### unity-google-drive

[elringus/unity-google-drive: Google Drive SDK for Unity game engine](https://github.com/elringus/unity-google-drive)

Unity向けのGoogle Drive SDKラッパー。

### Key-Value Store for Unity

[gilzoide/unity-key-value-store: Key-Value Store save system interface and implementations for Unity](https://github.com/gilzoide/unity-key-value-store)

Unity向けのキーバリューストアを提供するライブラリ。バックエンドやシリアライザーをカスタマイズ可能な実装になっている。

### FMOD-Syntax

[RoyTheunissen/FMOD-Syntax: Generates code to allow invoking FMOD events with a strongly-typed syntax.](https://github.com/RoyTheunissen/FMOD-Syntax)

UnityからのFMODの呼び出しのためのコードを生成するライブラリ。

### Vtools

[VictorHHT/VTools: Victor Toolkit for Unity Game and Editor Development](https://github.com/VictorHHT/VTools)

ヒエラルキー上でのカスタムプレビュー表示や独自のヒエラルキー拡張など、各種Unityエディター拡張を提供するレポジトリ。

### UExtension

Unityで利用できる、拡張メソッドの一覧をまとめたライブラリ。

[ls9512/UExtension: UExtension is a basic type extension library for .Net and Unity projects. It integrates a large number of commonly used, efficient and convenient extension methods, which helps to greatly improve development efficiency.](https://github.com/ls9512/UExtension)

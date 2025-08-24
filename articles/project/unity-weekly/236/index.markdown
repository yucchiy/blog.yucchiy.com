---
type: "unity-weekly"
title: "Unity Weekly 236"
description: "2025/08/25週のUnity Weeklyです。Unity 6.2のリリース、HDRP Ebooksリリース、RenderGraph、AIコーディングエージェントなどについて取り上げています。"
tags: ["Unity Weekly", "Unity"]
date: "2025-08-25T00:00:01"
---

## Unity Officials

### 6.2 is now available

[6.2 is now available - Unity Engine - Unity Discussions](https://discussions.unity.com/t/6-2-is-now-available/1677060)

Unity 6.2の正式版（Unity 6000.2.1f1）リリースされました。このディスカッションでは、6.2に含まれる主要なアップデートについて紹介しています。

### New technical e-book: Lighting and environments in the HDRP (Unity 6 edition)

[New technical e-book: Lighting and environments in the HDRP (Unity 6 edition) - Technical Articles - Unity Discussions](https://discussions.unity.com/t/new-technical-e-book-lighting-and-environments-in-the-hdrp-unity-6-edition/1677665)

HDRPについての包括的な情報をまとめたガイドブック「Lighting and environments in the High Definition Render Pipeline」のUnity 6エディションがリリースされたことをアナウンスしています。

### Unity で高度なビジュアル エフェクトを作成するため の決定版ガイド

[Unity で高度なビジュアル エフェクトを作成するため の決定版ガイド](https://unity3d.jp/game/creating-advanced-vfx-unity6/)

Unity 6でビジュアルエフェクトを開発するための包括的なガイドブック「[The definitive guide to creating advanced visual effects in Unity (Unity 6 edition)](https://unity.com/resources/creating-advanced-vfx-unity6)」の日本語訳バージョンが公開されました。

### Public Graphics Repository Structure Update

[Public Graphics Repository Structure Update : Template Files Moving - Unity Engine - Unity Discussions](https://discussions.unity.com/t/public-graphics-repository-structure-update-template-files-moving/1677313)

「[Graphics](https://github.com/Unity-Technologies/Graphics)」の再編成に伴って、HDRPのテンプレートファイルが `Templates` フォルダー移動したことをアナウンスしています。
この作業によって履歴が途切れている旨も合わせて言及されています。

また、今後の作業として、`com.unity.template-universal` などのそれぞれのテンプレートも `Templates` ディレクトリ配下に移動する予定とのことです。

### Optimizing Controls, Memory, and Build Size for Greak: Memories of Azur’s Android Port

[Optimizing Controls, Memory, and Build Size for Greak: Memories of Azur’s Android Port | Unity](https://unity.com/blog/optimizing-controls-memory-and-build-size-for-greak-memories-of-azur-android-port)

元々コンソールやPCでリリースされていた「Greak: Memories of Azur」をモバイルプラットフォーム（Android）に移植する際に注力した入力周りの扱いやモバイル向けの最適化についてインタビュー形式で紹介しています。

### 第17回 Unity Awards 開催

[第17回 Unity Awards 開催　応募受付開始](https://unity3d.jp/news/pr-17th-unity-awards/)

第17回 Unity Awards の開催について、応募受付の開始をアナウンスしています。

### Next-level GIS: Unity and Esri's real-time 3D innovation

[Next-level GIS: Unity and Esri's real-time 3D innovation](https://unity.com/ja/blog/esri-arcgis)

UnityとEsriの提携によって提供される「[ArcGIS Maps SDK for Unity](https://assetstore.unity.com/packages/tools/integration/arcgis-maps-sdk-for-unity-258537)」や、これを用いたデモアプリについてそれぞれ紹介しています。


## Articles

### ポストエフェクトをRenderGraphに対応させよう

[[Unity][URP]ポストエフェクトをRenderGraphに対応させよう｜G2 Studios株式会社](https://note.g2-studios.net/n/ncd28f04b8c5d)

「[軽くて綺麗なラディアルブラーを作ろう！](https://note.g2-studios.net/n/n7b7a0c068a1c)」で扱ったポストエフェクト（ラディラルブラー）をUnity 6から採用されたRenderGraphに対応するためのRenderGraphの基礎から具体的な対応までを解説しています。

### MiniBokeh パッケージ開発における AI コーディングエージェント活用の記録

[MiniBokeh パッケージ開発における AI コーディングエージェント活用の記録](https://github.com/keijiro/Memo/blob/main/Pages/MiniBokeh.md)

記事の著者が開発する「[keijiro/MiniBokeh](https://github.com/keijiro/MiniBokeh)」の、AIコーディングエージェントを用いた開発について、その活用方法や使ったみた感想をまとめています。

### ジェネリック共有について

[【.NET】ジェネリック共有について【Unity】](https://zenn.dev/aakei/articles/sharing-generics)

.NETのジェネリック共有についての概要から、UnityのIL2CPPでの同様の仕組みについてそれぞれ説明しています。

### Mystery Dungeon Sketches in Unity URP

[Mystery Dungeon Sketches in Unity URP](https://danielilett.com/2024-09-27-tut7-15-mystery-dungeon-sketch-urp/)

URPを用いて、「ポケモン不思議のダンジョン 救助隊DX」に出てくるような影にスケッチ表現を重ねるような表現の再現方法について解説しています。

### ワイヤーフレームシェーダー

[【Unity】ワイヤーフレームシェーダー](https://zenn.dev/lilytechlab/articles/9d2a9f7fad1d37)

ジオメトリーシェーダーベースのワイヤーフレームを描画するシェーダー（メッシュを線で描画するシェーダー）の実装方法を紹介しています。

### 『呪術廻戦 ファントムパレード』「バトルリザルト」の大規模リファクタ 〜工数10営削減までの裏側〜

[『呪術廻戦 ファントムパレード』「バトルリザルト」の大規模リファクタ ~工数10営削減までの裏側~ - Sumzap Engineering Blog](https://tech.sumzap.co.jp/entry/battle-result-refactoring-in-jujutsuphanpara)

「呪術廻戦 ファントムパレード」のバトルリザルト画面の現状の問題点とそれに対するリファクタリングで採用したデザインパターンについてそれぞれ紹介しています。

### Discord Social SDK のボイチャ機能が正式版になったのでUnityで動かしてみた

[【Discord】Discord Social SDK のボイチャ機能が正式版になったのでUnityで動かしてみた【Unity】 #discord - Qiita](https://qiita.com/Cova8bitdot/items/7ceb0647218a77c99c6d)

DiscordSocialSDKをUnityに組み込むための設定からインストール方法、サンプルアプリケーション実装についてそれぞれ紹介しています。

### 省電力化や発熱低減させたい時に使える、描画回数だけを減らすOnDemandRendering.renderFrameInterval

[省電力化や発熱低減させたい時に使える、描画回数だけを減らすOnDemandRendering.renderFrameInterval【Unity】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/OnDemandRendering_renderFrameInterval)

OnDemandRenderingによって、描画の更新頻度を下げることで描画負荷を下げる方法について紹介しています。

### VContainer の Singleton/Scoped の挙動をみる

[VContainer の Singleton/Scoped の挙動をみる](https://zenn.dev/tobya/articles/20250817-vcontainer-lifetime)

VContainerのLifetimeとして定義されているSingleton・Sopedの挙動を実験的に説明しています。

### Mesh (genus_n) Cutting 機能の試験実装

[【unity】Mesh (genus_n) Cutting 機能の試験実装 #C# - Qiita](https://qiita.com/sobabo/items/ec3e56c731d814645c5b)

メッシュをカットするためのアルゴリズムとその実装の概要を説明しています。

### Unity 6.2からSprite Editorでの変更を、確定する前にScene ViewでPreviewとして確認できるようになった

[Unity 6.2からSprite Editorでの変更を、確定する前にScene ViewでPreviewとして確認できるようになった #Unity2D - Qiita](https://qiita.com/RyotaMurohoshi/items/4b8106ef194c648b2411)

Unity6.2から利用できる、Sprite Editor上での変更をシーンビューで確認する機能を紹介しています。
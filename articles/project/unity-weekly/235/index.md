---
type: unity-weekly
title: Unity Weekly 235
description: >-
  8/11週のUnity Weeklyです。Shuriken Particles & Shader Graph、Netcode for GameObjects
  1.x deprecation、Android XR Verified Releaseなどについて取り上げています。
pubDatetime: 2025-08-12T15:00:01.000Z
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Shuriken Particles & Shader Graph

[Shuriken Particles & Shader Graph - Technical Articles - Unity Discussions](https://discussions.unity.com/t/shuriken-particles-shader-graph/1669355)

ShaderGraph上でShirikenベースのパーティクルを描画するための方法からGPU Instancing、URP上でのセットアップ、custom vertex streamを用いてより多くのデータをShader Graph上で扱う方法など解説しています。

### Netcode for GameObjects 1.x deprecation in 6000.3 editor

[Netcode for GameObjects 1.x deprecation in 6000.3 editor - Unity Engine - Unity Discussions](https://discussions.unity.com/t/netcode-for-gameobjects-1-x-deprecation-in-6000-3-editor/1674997)

Unity 6.xが、Netcode for GameObjects 1.xのサポートを打ち切って、2.x以降をサポートする旨が再度アナウンスされています。
タイムラインとして6000.2までは1.xのサポートを行い、6000.3以降は非推奨になることを告知しています。

またこのディスカッションでは、1.xから2.xのアップグレードについての主要な作業について説明しています。

### Android XR Verified Release Now Available!

[Android XR Verified Release Now Available! - Unity Engine - Unity Discussions](https://discussions.unity.com/t/android-xr-verified-release-now-available/1661294)

UnityでのAndroid XR 対応のVerified Release（テストが行われてプロダクトユースのためのサポートが行われるバージョンのリリース）についてアナウンスしています。


## Articles

### Unityエディタのバッチモードでビルド前にパッケージを変更する

[Unityエディタのバッチモードでビルド前にパッケージを変更する #Now in REALITY Tech #149｜REALITY株式会社](https://note.com/reality_eng/n/n052b69a11450)

バッチモードでUnityアプリをビルドする際に、そのバッチ起動中にパッケージマネジャーで管理された特定のパッケージを正確に省くための実装方法を紹介しています。

### 自作レンダーパイプラインの設定をGraphicsSettingsに表示させるには

[[Unity][SRP]自作レンダーパイプラインの設定をGraphicsSettingsに表示させるには](https://zenn.dev/nithink/articles/ba52f51d4c6bb2)

独自のレンダーパイプの設定項目をGraphicSettingsに表示するためのRenderPipelineGlobalSettingsの実装方法や、これを実装する際の注意点について内部のコードに触れつつ解説しています。

### オーディオアセットをダブルクリックするだけでプレビュー再生を行えるエディタ拡張

[オーディオアセットをダブルクリックするだけでプレビュー再生を行えるエディタ拡張 #Unity - Qiita](https://qiita.com/ScreenPocket/items/52c9424a3a787f5e4b04)

この記事の著者が開発する、オーディオアセットをエディター上でプレビュー再生するエディター拡張のコード全文と、その実装のアイデアとしてPlayable APIにを用いたオーディオソースの再生について紹介しています。

### ゲーム起動時に順番に処理可能なエントリーポイントを作る

[【Unity】ゲーム起動時に順番に処理可能なエントリーポイントを作る](https://zenn.dev/sumx21t/articles/7d83da1e949ba7)

`RuntimeInitializeOnLoadMethod` を起点にしつつ、独自の `EntryPoint` 基底クラスを継承したクラスを実装することで処理順を制御可能なエントリーポイントの実装方法について紹介しています。

### UnityでMissing Scriptを一括検出＆削除できるEditor拡張を作りました

[UnityでMissing Scriptを一括検出＆削除できるEditor拡張を作りました #C# - Qiita](https://qiita.com/segur/items/09eb05ac5b98b97e008f)

この記事の著者が開発する、指定したオブジェクトのMissing Scriptを検知、削除するエディター拡張について、その導入と使い方を紹介しています。

### services-config.json で使えるカラム情報のお話

[services-config.json で使えるカラム情報のお話](https://zenn.dev/kazu0617/articles/be682e8c1a204c)

UnityHubのカラム表示を調整できる設定ファイルについて紹介しています。

### Unityで複数カメラがある場合のCPU負荷の増分について

[Unityで複数カメラがある場合のCPU負荷の増分について #Now in REALITY Tech #148｜REALITY株式会社](https://note.com/reality_eng/n/n0ba687c0728a)
カメラをシーン上に複数個配置した場合の処理負荷について、主にCPUの処理負荷の観点で説明しています。

### 【R3】非同期メソッド版のObservable.Createでストリームを直感的に書く

[【Unity】【R3】非同期メソッド版のObservable.Createでストリームを直感的に書く - LIGHT11](https://light11.hatenadiary.com/entry/2025/08/05/194208)

R3の非同期なデリゲートを受け取る `Observable.Create` の基本的な使い方とエラーの伝播方法について紹介しています。

### Unityで簡単に音楽に同期した演出をする

[Unityで簡単に音楽に同期した演出をする #audio - Qiita](https://qiita.com/tatmos/items/16dab12fcc1266763833)

音楽に同期した処理を行うための、再生中の音楽の進捗率を取得するAPI実装について紹介しています。

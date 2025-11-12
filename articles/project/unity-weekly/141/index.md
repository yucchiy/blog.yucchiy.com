---
type: unity-weekly
title: Unity Weekly 141
description: 2023/10/02週のUnity Weeklyです。
pubDatetime: 2023-10-01T15:00:01.000Z
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Introducing the new URP 3D Sample (Beta)

[Official - Introducing the new URP 3D Sample (Beta) - Unity Forum](https://forum.unity.com/threads/introducing-the-new-urp-3d-sample-beta.1495706/)

URP向けの3Dサンプルプロジェクトが新しく公開されました。

Terminal・Garden・Oasis・Cockpitの4つの背景が含まれており、うち1つはXR向けスタイライズドされた背景、3つは~iPhone8のモバイル端末をターゲットとした背景です。

## Articles

### Custom SRP 2.1.0

[Custom SRP 2.1.0](https://catlikecoding.com/unity/custom-srp/2-1-0/)

[独自のSRPをRender Graphベースの実装に置き換える実装](https://catlikecoding.com/unity/custom-srp/2-0-0/)の続きで、`UnsupportedShadersPass`に適応させる方法について。解説しています。

また、この対応によって非推奨となる設定の扱いかたについても。言及しています。

### NavMeshSurfaceでNavMeshを動的にBakeする

[【Unity】NavMeshSurfaceでNavMeshを動的にBakeする【NavMesh】 - Raspberlyのブログ](https://raspberly.hateblo.jp/entry/NavMeshSurfaceBake)

NavMeshを動的にベイクするNavMeshSurfaceについて、その使い方や設定項目を紹介しています。

### uLipSync で解析結果を使ったカスタム挙動を作るためのチュートリアル

[uLipSync で解析結果を使ったカスタム挙動を作るためのチュートリアル - 凹みTips](https://tips.hecomi.com/entry/2023/09/30/231348)

ブログ著者の開発するリップシンクアセット[uLipSync](https://github.com/hecomi/uLipSync)で、音声の解析結果を受け取って独自の処理を実装する方法について紹介しています。

### ノーマルマップのブレンドの種類

[ノーマルマップのブレンドの種類](https://zenn.dev/sakutaro/articles/normalmap_blend)

2つのノーマルマップ（法線マップ）を合成する際に利用できる手法についてまとめています。

### Unity ECSとGameObjectを連携させる

[Unity ECSとGameObjectを連携させる](https://zenn.dev/adoring_onion/articles/unity-ecs-gameobject)

ECSとGameObject間のアクセス方法について、かんたんなサンプルをもとに紹介しています。

### Cinemachineが重すぎる時にやるべきこと

[Cinemachineが重すぎる時にやるべきこと - Qiita](https://qiita.com/amenone_games/items/939365a5e4dc7365eea6)

Cinemachineの処理が重たいときに確認すべき設定項目について紹介しています。

### asmdefで"必須パッケージ"と"任意パッケージ"を定義する方法

https://www.hanachiru-blog.com/entry/2023/09/29/120000

Assembly Definitionでパッケージを参照する方法と、Version Definesを用いて特定パッケージが入っている場合のみDefine Symbolsを定義する方法について紹介しています。

### Photon Fusion for Unityでマッチングシステムを実装する～基礎編

[Photon Fusion for Unityでマッチングシステムを実装する～基礎編 - Qiita](https://qiita.com/nimushiki/items/c91a52f4cd94374e5d92)

Photon FusionのMatchmaking APIを用いたマッチングの実装方法について介しています。

### YetAnotherHttpHandlerを利用してUnityでgRPC通信を行う

[YetAnotherHttpHandlerを利用してUnityでgRPC通信を行う - Qiita](https://qiita.com/mattak/items/0c5e6065459f251b87c5)

Cysharpが提供する[YetAnotherHttpHandler](https://github.com/Cysharp/YetAnotherHttpHandler)を用いたUnity上でのgRPC通信を、かんたんなサンプルによる動作確認についてまとめています。

### game-ci/unity-test-runner で Docker Image が見つからなくてエラーになる

[game-ci/unity-test-runner で Docker Image が見つからなくてエラーになる](https://zenn.dev/veryon_sakai/articles/21b124d211bcb3)

`game-ci/unity-test-runner`を用いてテストを行う際に、Unity2022.3.8f1の比較的新しいバージョンでのテストにおいて`rollingVersion`が`1`のimageが存在しないためにテストが失敗する不具合とその対紹介しています。

## Repositories

### UnityBuildRunner

[guitarrapc/UnityBuildRunner: Wrapper cli tool of Unity to output batch build log on StandardOutput.](https://github.com/guitarrapc/UnityBuildRunner)

WindowsのUnityバッチビルドで、ビルドログのリアルタイムな標準出力とタイムアウト制御を提供する .NET Tool。

### Asset Relations Viewer

[innogames/asset-relations-viewer: Plugin to display dependencies between assets, files, assetgroups, etc. in a tree based view within the Unity editor.](https://github.com/innogames/asset-relations-viewer)

アセット間の依存関係を図示するビューワー実装。

### unity-script-templates

[AnnulusGames/unity-script-templates: A collection of script templates for Unity](https://github.com/AnnulusGames/unity-script-templates)

スクリプトテンプレートコレクション。標準のテンプレートと比べて、ScriptableObjectやエディター拡張、ECS、package.jsonなどの各種テンプレートを提供する。

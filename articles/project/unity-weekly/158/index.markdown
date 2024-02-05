---
type: "unity-weekly"
title: "Unity Weekly 158"
description: "2024/02/05週のUnity Weeklyです。Apple Vision Pro、Native Windows on Arm beta Supportなどについて取り上げています。"
tags: ["Unity Weekly", "Unity"]
date: "2024-01-29T00:00:01"

---

## Unity Officials

### Start building spatial apps for Apple Vision Pro with Unity

[Start building spatial apps for Apple Vision Pro with Unity | Unity Blog](https://blog.unity.com/engine-platform/spatial-apps-for-apple-vision-pro)

UnityがApple Vision Pro向けのvisionOSのサポートを正式に開始したことを発表しています。

この記事では、Unityで作成できる主要な3種類の空間体験とその実装のためのリソースについて紹介しています。

### Native Windows on Arm beta support in the Unity Editor is now available

[Official - Native Windows on Arm beta support in the Unity Editor is now available - Unity Forum](https://forum.unity.com/threads/native-windows-on-arm-beta-support-in-the-unity-editor-is-now-available.1542110/)

Unity 2023.3からArmベースのWindowsデバイスに対してのネイティブなUnityEditorがプレリリースで利用可能になったことを発表しています。

Unity Hubからこのエディターのインストール方法から既知の制限、今後のアップデートについて紹介しています。

## Slides

### Unity URP 完全に理解した勉強会

2/2に開催された[Unity URP 完全に理解した勉強会](https://meetup.unity3d.jp/jp/events/1416)の動画アーカイブと一部スライドが公開されています。

- [アーカイブ](https://www.youtube.com/watch?v=a0sDSXTDkUM)
- [URPのシェーダーの書き方を理解しよう](https://rngtm.github.io/Unity-URP-Kanzen-Rikai-Event-Slide)

## Articles

### おうち３D配信を支えるトラッキングシステムについて

[おうち３D配信を支えるトラッキングシステムについて｜カバー株式会社　公式note](https://note.cover-corp.com/n/n7a413a4c167b)

ホロライブのタレントさんが普段の配信で利用しているアプリ（おうち3D）のトラッキングシステムについて、利用している機材から複数の入力を統合するためのシステムの概要、IK・FKの活用などを紹介しています。

### UnityでOpenPose風のアバタースケルトンを表示するライブラリを作ってみた

[UnityでOpenPose風のアバタースケルトンを表示するライブラリを作ってみた - Activ8 Tech Blog](https://synamon.hatenablog.com/entry/2024/02/02/191758)

ブログの筆者が開発する、OpenPose風にアバターのスケルトンを表示するためのライブラリ「[LikeOpenPoseAvatar](https://github.com/blkcatman/LikeOpenPoseAvatar)」についてその使い方を紹介しています。

### Unity Test Frameworkで特定の例外がスローされることをAssertする方法(Assert.Throws, Assert.Catch, Throws.TypeOf, Throws.InstanceOf)

[【Unity】Unity Test Frameworkで特定の例外がスローされることをAssertする方法(Assert.Throws, Assert.Catch, Throws.TypeOf, Throws.InstanceOf) - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2024/02/02/120000)

Unity Test Frameworkで、例外が投げられていることをテストするためのAPIとその使い方を紹介しています。

### R3のAddToまとめ

[R3のAddToまとめ #C# - Qiita](https://qiita.com/Euglenach/items/8263c4a505f567786fc2)

[R3](https://github.com/Cysharp/R3/)の購読の解除を` Disposable` や `CancellationToken` などに紐付ける `AddTo` や、 複数の `Disposable` を合成する `Disposable.Combine` についてまとめています。

### 【UI Toolkit】画像を9スライスして使う

[【Unity】【UI Toolkit】画像を9スライスして使う - LIGHT11](https://light11.hatenadiary.com/entry/2024/01/31/194019)

UI Toolkitで画像を9スライスで扱うための設定方法をまとめています。

### TSSファイルで「テーマ」ごとにスタイルを設定・変更する

[【Unity】【UI Toolkit】TSSファイルで「テーマ」ごとにスタイルを設定・変更する - LIGHT11](https://light11.hatenadiary.com/entry/2024/01/30/191527)

UI Toolkitで、「テーマ」ごとにスタイルを設定するためのTSSファイルのあ使い方をまとめています。

### CanvasArtを書けるPainter2Dで座標変換をできるようにしてみた

[【Unity】CanvasArtを書けるPainter2Dで座標変換をできるようにしてみた #C# - Qiita](https://qiita.com/garume/items/ed3c1d478bb8a26f2414)

UI ToolkitのVisualElement上にHTMLのCanvasのように2Dベクターグラフィックスを描画するPainter2D上で、2Dの座標変換を実装する方法を紹介しています。

### VSCodeでUnity2022.3以降と連携する

[VSCodeでUnity2022.3以降と連携する](https://sassembla.github.io/Public/2024:01:30/2024:01:30.html)

VSCodeとUnityを連携させるための設定や、動かない際に見るべき設定などをまとめています。

## Repositories

### DebugUI

[AnnulusGames/DebugUI: A framework for building debugging tools built on Unity UI Toolkit.](https://github.com/AnnulusGames/DebugUI)

Unity UI Toolkit上に構築された、デバッグGUIを作成するためのフレームワーク。
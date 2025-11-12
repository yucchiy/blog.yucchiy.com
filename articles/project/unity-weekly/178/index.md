---
type: unity-weekly
title: Unity Weekly 178
description: >-
  2024/06/24週のUnity Weeklyです。Unity Discussions移行、Splines、Photon Quantum
  3などについて取り上げています。
pubDatetime: 2024-06-23T15:00:01.000Z
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Update about the future of the Unity Forums and Unity Discussions

[Official - Update about the future of the Unity Forums and Unity Discussions - Unity Forum](https://forum.unity.com/threads/update-about-the-future-of-the-unity-forums-and-unity-discussions.1605753/)

Unity ForumをUnity Discussionsに移行する計画のアップデートについて報告しています。

7月末までにUnity Disscussionsへ移行することを目標にしており、Unity Forumからのデータの移行と並行してUnity Discussionsの再設計の取り組みや、ForumからDiscussionsへ移行することのメリットについて紹介しています。

## Articles

### スプラインに沿ってメッシュを変形させる

[【Unity】スプラインに沿ってメッシュを変形させる | ねこじゃらシティ](https://nekojara.city/unity-splines-mesh-deform)

Unity公式のSplineパッケージを用いて、Splineの位置情報を元にメッシュを変形させるような方法を紹介しています。

記事中ではレールのようなメッシュをSplineの形状を元に変換する方法から、変形したメッシュをアセットとして保存する方法まで解説しています。

### Unityクライアントのパフォーマンス改善の進め方

[Unityクライアントのパフォーマンス改善の進め方 - Cluster Tech Blog](https://tech-blog.cluster.mu/entry/2024/06/21)

clusterで新しい機能を並行して開発するためのフィーチャーフラグの活用方法と、フィーチャーフラグをうまく活用して機能追加前後でプロファイリングを行う方法について紹介しています。

### Photon Quantum 3

- [Quantum 3 SDK & Download | Photon Engine](https://doc.photonengine.com/ja-jp/quantum/v3/getting-started/initial-setup#)
- [Xユーザーのおばきうさん: 「「Photon Quantum 3」が一般公開されました！個人～小規模インディーチームからでも、eスポーツ品質のオンラインゲームが作れてしまう土壌が整いつつあるぞ！ってことです！！（ドキュメントの翻訳はこれからです） https://t.co/FClleuFzSX」 / X](https://x.com/o8que/status/1803761508675195034)

「Photon Quantum 3」が一般公開されました。

### UnityのビルトインレンダーパイプラインのForwardAddパスでちょっとした最適化がされていた話

[UnityのビルトインレンダーパイプラインのForwardAddパスでちょっとした最適化がされていた話 Now in REALITY Tech #113｜REALITY](https://note.com/reality_eng/n/n0c5bbc7cd0a8)

Unityのビルトインレンダーパイプラインで、2つ目以降のライトを計算する際のForwardAddパスにおける最適化について紹介しています。

### ShaderGraphで影だけを描画する

[[Unity]ShaderGraphで影だけを描画する - Qiita](https://qiita.com/Yothuba3/items/f4fb93186a95a424bea9)

スポットライトなどの追加ライトを含めた、影だけを描画するシェーダーをShaderGraphを用いて実装する方法について紹介しています。

### VFXGraphとParticleSystemで大量に配置した際の処理負荷を比較してみた

[VFXGraphとParticleSystemで大量に配置した際の処理負荷を比較してみた #Unity - Qiita](https://qiita.com/marv_ootake/items/3ffd3c05984888c1e5f3)

VFXGraphとParticleSystemでそれぞれパーティクルを大量に描画した際のパフォーマンスについての比較結果を紹介しています。

## Repositories

### Csv-CSharp

[AnnulusGames/Csv-CSharp: Fast CSV Serializer for .NET and Unity](https://github.com/AnnulusGames/Csv-CSharp)

Source Generatorを活用した高速なCSVパーサー。

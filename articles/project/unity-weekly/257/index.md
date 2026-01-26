---
type: unity-weekly
title: Unity Weekly 257
description: >-
  2026/01/26週のUnity Weeklyです。都市伝説解体センター開発者インタビュー、New 2D Animation samples、Unity自習室、Unity6.3完全に理解した勉強会などを紹介しています。
pubDatetime: 2026-01-26T09:00:00+09:00
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### 『都市伝説解体センター』の開発チーム・墓場文庫のメインエンジニア・MOCHIKIN氏に聞く、Unityでインディゲーム開発の罠を回避する方法

[『都市伝説解体センター』の開発チーム・墓場文庫のメインエンジニア・MOCHIKIN氏に聞く、Unityでインディゲーム開発の罠を回避する方法 | ユニティ・テクノロジーズ・ジャパン株式会社](https://unity3d.jp/game/urban-myth-dissolution-center/)

UTJ（Unity Technologies Japan）の墓場文庫のメインエンジニアMOCHIKIN氏のインタビュー記事で、ゲーム開発に挑むことになった経緯から墓場文庫でのUnity活用、インディーゲーム開発に付きものの「エターナル現象」を回避するための方法について紹介しています。

「エターナル現象」を打破するために大切にしている「制限した中で遊ぶ」開発方針やその方針を元に採用している「Adventure Creator」やノードエディターを活用した開発術、「ゲーム性の追求」と「エターナル現象のリスク」のバランスを考慮した墓場文庫の開発スタイル、その他のアセット活用によるゲーム体験の向上などに触れています。

### New 2D Animation Sample package on Unity Asset Store

[New 2D Animation Sample package on Unity Asset Store - Technical Articles - Unity Discussions](https://discussions.unity.com/t/new-2d-animation-sample-package-on-unity-asset-store/1703916)

「2D Animation」パッケージの新しいサンプルが公開されたことを告知するディスカッションです。

このサンプルは[Unity Asset Storeから入手できます](https://assetstore.unity.com/packages/2d/characters/2d-animation-samples-354550)。

### 【Unity自習室/2】 ２D物理でゲームを作ろう！ Unity 6.3 Low Level 2D Physics の紹介・他 【生配信】

[【Unity自習室/2】 ２D物理でゲームを作ろう！ Unity 6.3 Low Level 2D Physics の紹介・他 【生配信】 - YouTube](https://www.youtube.com/watch?v=DTwsXwcsLsw)

UTJの高橋 啓治郎氏が、Unity 6.3の新機能である「Low Level 2D Physics」についての解説とこれを利用したゲーム「Low Level Digger」の制作について紹介するライブ配信で、このゲームの制作のきっかけや「Low Level 2D Physics」についての解説、「Low Level Digger」の制作のプロトタイピングでのAI活用や本制作における作り込みにおけるパフォーマンスの考慮やルックの作り込みを紹介しています。

### 🎉 Netcode for GameObjects v2.8.0 is now publicly available

[🎉 Netcode for GameObjects v2.8.0 is now publicly available - Unity Engine - Unity Discussions](https://discussions.unity.com/t/netcode-for-gameobjects-v2-8-0-is-now-publicly-available/1704978)

Netcode for GameObjectsのv2.8.0のリリースについて告知するディスカッションです。

このバージョンでは、エディター上での実行におけるパフォーマンス向上やバインドするポートを柔軟に設定できる機能、NetworkAnimatorに分散オーソリティの機能が統合されてそれに伴い同期設定が柔軟に行えるようになるなどの更新が入ったとのことです。

[Changelogの全文はこちらから](https://github.com/Unity-Technologies/com.unity.netcode.gameobjects/releases/tag/v2.8.0)確認できます。

### RELEASE: Input System 1.18.0

[RELEASE: Input System 1.18.0 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/release-input-system-1-18-0/1704245)

Input System 1.18.0のリリースについて告知するディスカッションです。

このリリースでは、Unity 6.4以降に関する警告への対応やドキュメンテーション、Linuxサポートに関するドキュメンテーション、プレハブやScriptableObjectを設定しようとした時に、InputActionReferenceが設定されない不具合の修正などが入っています。

[Changelogの全文はこちらから](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.18/changelog/CHANGELOG.html#1180---2026-01-14))確認できます。


## Events

### Unity 6.3 完全に理解した 勉強会

[Unity 6.3 完全に理解した 勉強会 - connpass](https://unity-fully-understood.connpass.com/event/382040/)

Unity ユーザコミュニティ主導で開催される勉強会「Unity 〇〇完全に理解した勉強会」が、「Unity 6.3」をテーマに2/20（金）に開催されます。

現在、一般枠（オフライン・オンライン）およびLT枠の応募が開始されています。


## Articles

### 【Unity6.3新機能】RenderGraph関連の新機能・変更点

[Unity 6.3のRenderGraph関連機能 - CORETECH ENGINEER BLOG](https://blog.sge-coretech.com/entry/2026/01/21/115330)

Unity 6.3のRenderGraphに関連する新機能や変更点として、Render GraphのCompatibility ModeやRenderGraphViewerの新機能、BlitPassとCopyPassの変更点、RenderPass内でRenderTargetをBackBufferに切り替えられる変更について紹介しています。

また、この変更点を用いて、独自のFXAA処理をBackBufferへ出力することにより中間テクスチャを介さない最適化についてや、BlitPass最適化の変更において一部AndroidデバイスがFrameBufferFetchの互換性問題で正常に動かない不具合などにも言及しています。

### ShaderBuildSettingsでソースコードを変更せずにShaderバリアントを最適化する

[Unity 6.3の新機能解説 - CORETECH ENGINEER BLOG](https://blog.sge-coretech.com/entry/2026/01/14/151443)

Unity 6.3から利用できる、ShaderVariantを最適期化するためのキーワードの有効・無効やその分岐方法の切り替えを設定で行うことができる「ShaderBuildSettings」について、その基本的な使い方や制限事項、ユースケースなどについて紹介しています。

### Unityが出すキーボードのLiquid Glass対応

[Unityが出すキーボードのLiquid Glass対応](https://zenn.dev/reality_tech/articles/59a4624f11fbb1)

Unityが出すiOSのキーボード表示を、iOS 26のLiquid Glassでの表示に対応するための実装のアプローチから、具体的な対応としてUnityのビルドプロセス後に出力される `Keyboard.mm` に対してどのようなパッチを当てると良いのかについて紹介しています。

### Platform Toolkitのアチーブメントシステムについて

[Platform Toolkitのアチーブメントシステムについて | Yucchiy's Note](https://blog.yucchiy.com/2026/01/platform-toolkit-achievement-system)

Unity 6.3から利用できるPlatform Toolkitについて、実績管理の仕組みに焦点を当てて説明しています。

### Unity工程に“最後の仕事”が集まる理由 ― XR案件が増えるほど苦しくなる構造

[Unity工程に“最後の仕事”が集まる理由 ― XR案件が増えるほど苦しくなる構造 #プロジェクト管理 - Qiita](https://qiita.com/segur/items/e403a600ef464b7ecf08)

XR案件において、Unityによる実装工程に負荷が偏る原因やその対策について紹介しています。

### ミアレシティのホログラムをUnityちゃんで再現してみた

[【Unity】ミアレシティのホログラムをUnityちゃんで再現してみた【Shader芸】 #ポケモン - Qiita](https://qiita.com/Cova8bitdot/items/d741426096c8be3ec50a)

Pokémon LEGENDS Z-Aに登場するホログラム演出をShader Graphで再現するためのノード構築や工夫点などを紹介しています。

### Unityのアニメーション制御が、気づくと複雑になる理由

[Unityのアニメーション制御が、気づくと複雑になる理由](https://zenn.dev/ruskworks/articles/9498d32019c1f2)

Unityのアニメーション制御が複雑になる原因と、その課題感から著者が制作するアニメーション制御ライブラリ「[EasyAnim](https://assetstore.unity.com/packages/tools/animation/easyanim-simplified-animation-management-342220)」について紹介しています。

### Project Auditorをプログラムやコマンドラインで実行する

[Project Auditorをプログラムやコマンドラインで実行する | Yucchiy's Note](https://blog.yucchiy.com/2026/01/project-auditor-programming)

Project Auditorをプログラム上やコマンドラインから実行する方法や、その際の解析パラメータの指定方法などについて紹介しています。


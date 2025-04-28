---
type: "unity-weekly"
title: "Unity Weekly 220"
description: "2025/04/28週のUnity Weeklyです。Unity 6.1リリース、UI Toolkit ebook、Dynamic ShaderVariant Loadingなどについて取り上げています。"
tags: ["Unity Weekly", "Unity"]
date: "2025-04-28T00:00:01"
---

## Unity Officials

### Unity 6.1: Supported Update with Enhanced Performance

[Unity 6.1: Supported Update with Enhanced Performance | Unity](https://unity.com/blog/unity-6-1-is-now-available)

Unity 6.1が正式にリリースされたことをアナウンスするブログが公開されました。

この記事ではDeferred+やVariable Rate Shading、Project Auditorによる静的解析などUnity 6.1の新機能の一部が紹介されています。

また、Unity 6ファミリーの今後のリリースやLTSなどのサポート体制、パフォーマンスや安定性を継続的に向上させるためのテスト体制や動作検証について紹介されています。

### Create Scalable & Performant UI for Games in Unity 6

[Create Scalable & Performant UI for Games in Unity 6 | Unity](https://unity.com/resources/scalable-performant-ui-uitoolkit-unity-6)

Unity 6でUI Toolkit の活用方法を解説する電子書籍「UI Toolkit for advanced Unity developers」が公開されました。

以前公開されたUIに関する電子書籍を書き直し、この書籍ではUI Toolkitにのみ焦点をあて、さらにData binding・Localizaation・Custom ControlsなどUnity 6の機能をカバーする新しいセクションが追加されています。

## Articles

### シェーダー最適化入門　第３回目　「レンダリングターゲットの解像度～縮小バッファエフェクト～

[シェーダー最適化入門　第３回目　「レンダリングターゲットの解像度～縮小バッファエフェクト～」](https://blog.sge-coretech.com/entry/2025/04/24/163531)

特にエフェクト描画において顕著に問題となるオーバードローについてと、縮小バッファを用いることで描画負荷を削減する方法、その際に工夫が必要となるアルファブレンディングについての問題について、実際のソースコードを示しながら解説しています。

### Dynamic Shader Variant Loadingを深掘りしてみる

[Dynamic Shader Variant Loadingを深掘りしてみる｜黒河優介](https://note.com/wotakuro/n/n27274fc69508)

Shaderのデータをチャンクに分割して、必要に応じてロードを行う Dynamic ShaderVariant Loading の設定方法からその動作、パフォーマンスやトレードオフについて説明しています。

また、この設定によってShaderがどのようにチャンク分割されているかを調べる方法やチャンクの展開による負荷を確認する方法についても言及しています。

### Screen Space Lens Flareを改造する

[[Unity][SRP]Screen Space Lens Flareを改造する](https://zenn.dev/nithink/articles/a067dfa7933d42)

SRPによる独自レンダーパイプライン上に、UnityのScreenSpaceLensFlareを移植・改造して、処理負荷の軽減とSteaksを複数表示するようにするための実装が解説されています。

### How to Use Dependency Injection with ECS for Scalable Game Development

[How to Use Dependency Injection with ECS for Scalable Game Development](https://gamedev.center/how-to-use-dependency-injection-with-ecs-for-scalable-game-development/)

ECSベースのシステムにおいてDependency Injectionを導入することで、ボイラープレートなコードを削減し柔軟性あるシステムを構築する方法を、[VContainer](https://github.com/hadashiA/VContainer)と[https://github.com/scellecs/morpeh](https://github.com/scellecs/morpeh)を例に紹介しています。

### Unity DevOps Build AutomationがUnity Build Profilesを使ってビルドできるようになった

[Unity DevOps Build AutomationがUnity Build Profilesを使ってビルドできるようになった #UnityCloudBuild - Qiita](https://qiita.com/RyotaMurohoshi/items/4f233cbb59f0d330d838)

Unity Build Automationで、Unity 6から利用できるBuild Profilesのサポートについて取り上げています。

### Photon Fusionのサーバーモードでエアホッケー的な物を作ってみたい

- [(導入〜オブジェクト生成編1/3)](https://zenn.dev/1stscratch/articles/3c43d509ebefd8)
- [(移動〜Unity判定編2/3)](https://zenn.dev/1stscratch/articles/d4f62af569eb7d)
- [(部屋分け〜ゲームサイクル3/3)](https://zenn.dev/1stscratch/articles/7cbadf4225189d)

エアホッケーのようなゲームを題材に、Photon Fusionのサーバーモードを用いたマルチプレイヤーゲームの実装を紹介しています。

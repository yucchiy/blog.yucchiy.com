---
type: unity-weekly
title: Unity Weekly 216
description: 2025/03/24週のUnity Weeklyです。GDC2025、各種ロードマップ、Graph Toolkit などについて取り上げています。
pubDatetime: 2025-03-23T15:00:01.000Z
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### What’s Next: Unity Engine 2025 Roadmap

[What’s Next: Unity Engine 2025 Roadmap | Unity](https://unity.com/blog/unity-engine-2025-roadmap)

GDC 2025で共有されたUnity Engineの2025年のロードマップについて、その概要を紹介しています。

Unity 6.0 の今後のサポート体制についてや Unity 6.1 のリリース時期とこのバージョンに入る主要な機能、今後のロードマップについてそれぞれ紹介しています。

### Unity Graph Toolkit Update (Q1 2025)

[Unity Graph Toolkit Update (Q1 2025) - Unity Engine - Unity Discussions](https://discussions.unity.com/t/unity-graph-toolkit-update-q1-2025/1614727)

エディター拡張でグラフビューを実現するためのパッケージが Graph Toolkitという名前で正式にサポートされ、近日中に実験的パッケージとしてリリースされることがアナウンスされています。

以後Unityのグラフツールにおける実装が Graph Toolkit で実装され、はじめの導入事例として新しいアニメーションシステムで採用されることが決まっているとのことです。

### DirectX 12 Acceleration for the Sentis API

[DirectX 12 Acceleration for the Sentis API - Unity Engine - Unity Discussions](https://discussions.unity.com/t/directx-12-acceleration-for-the-sentis-api/1618901)

Unity 6.1より、Unity Sentis APIが Direct X12向けの GPUCompute バックエンドが活用できるようになったことがアナウンスされています。

ディスカッションでは、Time Ghostでの活用事例や、簡単な画像処理をこのバックエンドを用いて実現する方法について紹介しています。

### ECS development status / milestones – March 2025

[ECS development status / milestones – March 2025 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/ecs-development-status-milestones-march-2025/1615810)

ECSの2025/03のロードマップのアップデートについてアナウンスされています。

Entities 1.4の実験的リリースに含まれる予定のAPIの変更点や追加が予定される機能や新しくリリースされたECS×マルチプレイヤーテンプレート [Competitive Action Multiplayer Template](https://discussions.unity.com/t/competitive-action-multiplayer-template-now-released-netcode-for-entities/1573137) 、今後のロードマップに含まれる ECS for All やECSで使えるアニメーションシステム などについて、それぞれ紹介しています。

### Unity Multiplayer Roadmap Update – March 2025 Highlights

[Unity Multiplayer Roadmap Update – March 2025 Highlights - Unity Engine - Unity Discussions](https://discussions.unity.com/t/unity-multiplayer-roadmap-update-march-2025-highlights/1618064)

マルチプレイヤーパッケージの2025/03のロードマップのアップデートについてアナウンスされています。

近日公開の機能として、ホスト移行をスムーズに行うための「Host Migration」や シミュレーションの所有権を分散させる「Distributed Authority」、今後開発が予定されている機能として、マルチプレイヤーモードの強化やLinuxサーバーのARM64対応などが紹介されています。

Host Migrationについては、[こちらのディスカッション](https://discussions.unity.com/t/experimental-host-migration-in-netcode-for-entities/1615746) で詳細が言及されています。

### Input System 1.14.0 released

[Input System 1.14.0 released - Unity Engine - Unity Discussions](https://discussions.unity.com/t/input-system-1-14-0-released/1619063)

Input Systemの 1.14.0がリリースされたことがアナウンスされています。

バグフィックスとF13〜24キーがサポートされています。CHANGELOGは[こちら](https://github.com/Unity-Technologies/InputSystem/blob/develop/Packages/com.unity.inputsystem/CHANGELOG.md#1140---2025-03-20)から確認できます。

### The 2025 Unity Gaming Report is now available

[The 2025 Unity Gaming Report is now available - News & General Discussion - Unity Discussions](https://discussions.unity.com/t/the-2025-unity-gaming-report-is-now-available/1617031)

Unityによるゲームトレンドに関するレポートの公開がアナウンスされています。

## Articles

### V24 – 屋外シーンの画作り

[V24 – 屋外シーンの画作り │ Aiming 開発者ブログ](https://developer.aiming-inc.com/design/post-12143/)

Aimingが制作するデザイナーだけで構成されたハイエンド向けのUnityデモプロジェクト「V24」の室外シーンの制作について、背景制作のための画作りのためのテクニックやオブジェクトの配置や作り込み、法線マップやピクセルシェーダーによるライティング効果、エフェクト効果などのについて解説しています。

### # 簡単！Zenject攻略！ ~REALITY編~

[簡単！Zenject攻略！ ~REALITY編~｜REALITY株式会社](https://note.com/reality_eng/n/nab218f2bda0e)

ZenjectによるDIコンテナの基本的な使い方から、REALITYでのZenjectの活用事例について解説しています。

### Screen.SetResolutionに適当な解像度を渡すと想定しないアスペクト比になってしまうことがある

[Screen.SetResolutionに適当な解像度を渡すと想定しないアスペクト比になってしまうことがある - きゅぶろぐ](https://blog.kyubuns.dev/entry/2025/03/17/142856)

`Scree.SetResolution` において、サポートされない解像度を渡したときの挙動の説明と、使い方の注意点を説明しています。

### 便利なスクリプトの詰め合わせ【Unity／.NET】

[便利なスクリプトの詰め合わせ【Unity／.NET】 #C# - Qiita](https://qiita.com/sator_imaging/items/235c8447f4171ba5a522)

この記事の著者が開発する、Unity開発の際に便利なスクリプト群 [Unity-Fundations](https://github.com/sator-imaging/Unity-Fundamentals) について、それぞれの実装の概要や使い方を紹介しています。

### レンダーパイプラインを自作する その2

[[Unity][SRP]レンダーパイプラインを自作する その2](https://zenn.dev/nithink/articles/81901d0f9d4b9e)

SRP（Scriptable Render Pipeline）を自作する際の、ワイヤーフレームモードやシーングリッドの描画など、主にエディター上での機能に関する対応方法について紹介しています。

前回の記事は[こちら](https://zenn.dev/nithink/articles/3810a563f2e2d6)から確認できます。

### Editor.DrawPropertiesExcludingを用いてUnityが提供するコンポーネント含めインスペクターに表示されているプロパティを非表示にする

[【Unity】Editor.DrawPropertiesExcludingを用いてUnityが提供するコンポーネント含めインスペクターに表示されているプロパティを非表示にする - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2025/02/24/120000)

Unitu標準の `OnInspectorGUI` から、特定のプロパティを非表示にして表示するインターナルAPI `Editor.DrawProperiesExcluding` について紹介しています。

### Rider - Tips

[Rider - Tips - yotiky Tech Blog](https://yotiky.hatenablog.com/entry/rider_tips)

Riderの主にソースコード検索のTipsとして、どこでも検索（Search Everywhere）のショートカットキーや、検索時のスコープやファイルカラーの変更方法などを紹介しています。

### Sampling vs. Instrumentation Profilers in Unity: When to Use Each for Better Performance

[Sampling vs. Instrumentation Profilers in Unity: When to Use Each for Better Performance](https://gamedev.center/sampling-vs-instrumentation-profilers-in-unity-when-to-use-each-for-better-performance/)

[Superluminal](https://discussions.unity.com/t/profiling-in-unity-using-superluminal/1614358) などをはじめとしたサンプリングプロファイリングと、Unity Profilerによるインクリメンタルプロファイリングの、それぞれのメリットとデメリットの説明と、これらを組み合わせたプロファイリングのアプローチについて紹介しています。

### Unity Sentis 姿勢推定

[Unity Sentis 姿勢推定](https://zenn.dev/headwaters/articles/53c3477a9df662)

Unity Sentisで[MediaPipe Poseのモデル](https://github.com/microsoft/onnxruntime-inference-examples)を用いて、姿勢推定を行う方法について紹介しています。

### Clineを活用したUnityプログラミングの注意点とベストプラクティス

[Clineを活用したUnityプログラミングの注意点とベストプラクティス](https://zenn.dev/iwakenlab_book/articles/cline-unity-best-practices)

ClineをUnity開発で利用する際に、より効率的なコードを生成するためのプラクティスについて紹介しています。

---
type: "unity-weekly"
title: "Unity Weekly 183"
description: "2024/07/29週のUnity Weeklyです。ドラクエモンスターズ3開発事例、Level up your programming with game programming patternsアップデート、AR Foundation 6.0、Game Developers Meetingなどについて取り上げています。"
tags: ["Unity Weekly", "Unity"]
date: "2024-07-29T00:00:01"
---

## Unity Officials

### 『ドラゴンクエストモンスターズ３』で実践された、多種・大量の3Dキャラクターを制作するための工夫。鍵は「仕様の共通化」と「自動化」にあり

[『ドラゴンクエストモンスターズ３』で実践された、多種・大量の3Dキャラクターを制作するための工夫。鍵は「仕様の共通化」と「自動化」にあり | ユニティ・テクノロジーズ・ジャパン株式会社](https://unity3d.jp/game/dragonquest-monsters-3/)

「ドラゴンクエストモンスターズ３」の開発で実践された、デザイン業務を効率化させるためのエディター拡張や多種のモンスター制作を効率化するための自動化、Polybrushを用いた職種間での地形制作や、Unityを職種を跨いでに導入することによって実現した「言葉」の統一について、それぞれ解説しています。

### Level up your code with design patterns and SOLID E-book

[Level up your code with design patterns and SOLID E-book | Unity](https://unity.com/ja/resources/design-patterns-solid-ebook)

Unity開発における設計やデザインパターンについて紹介するEbook「[Level up your programming with game programming patterns](https://unity.com/ja/resources/level-up-your-code-with-game-programming-patterns)」の内容がアップデートされ、また、Unity 6前提となりました。

### Speed up your workflows in Unity with these keyboard shortcuts

[Speed up your workflows in Unity with these keyboard shortcuts - YouTube](https://www.youtube.com/watch?v=DSdtOrLlyyo)

作業を効率化するためのUnityが用意するキーボードショートカットについて動画で紹介しています。

### Unity OpenXR: Meta 2.0

[Unity OpenXR: Meta 2.0 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/unity-openxr-meta-2-0/1482730)

AR Foundation用のOpenXR: Metaプロバイダーが2.0にアップデートされ、meta Questデバイス向けの機能が追加されました。
ここでは追加された主要な機能について紹介しています。

### AR Foundation v6.0

[AR Foundation v6.0 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/ar-foundation-v6-0/1482694)

AR Foundation v6.0がリリースされました。ここではこのバージョンで追加された主要な機能や修正についてのハイライトを紹介しています。

### New e-book - Create virtual and mixed reality experiences in Unity

[New e-book - Create virtual and mixed reality experiences in Unity - Unity Engine - Unity Discussions](https://discussions.unity.com/t/new-e-book-create-virtual-and-mixed-reality-experiences-in-unity/1488433)

VR/MR開発に関するe-bookがリリースされました。

### Editor Design System spring content update

[Editor Design System spring content update - Unity Engine - Unity Discussions](https://discussions.unity.com/t/editor-design-system-spring-content-update/943099)

[Editor Design System](https://www.foundations.unity.com/)の春季アップデートの内容について紹介しています。

## Events

### Game Developers Meeting Vol.62

[Game Developers Meeting Vol.62 | Peatix](https://gdm62.peatix.com/view)

2024/07/31(水) 19:00より、Game Developers Meeting Vol.62が開催されます。セッションは以下の通りです。

- 中国発の令和最新Unity向けC#ホットアップデートソリューション「HybridCLR」が今アツい！
- Mirrativ上のライブゲームを、単体アプリとしてリリースした事例紹介

## Articles

### Notionデータベースを使ってAssetBundleリリースを自動化した話

[Notionデータベースを使ってAssetBundleリリースを自動化した話 Now In REALITY Tech #119｜REALITY](https://note.com/reality_eng/n/nc8cb44712bde)

Notionデータベースを用いてアセットの配信情報を管理し、その情報を下にアセットビルドのビルドからリリースを自動化するアセットビルドパイプラインについて紹介しています。

### Blender→Unity間でVTF(Vertex Texture Fetch)を行いオブジェクトを変形させる

- [Blender→Unity間で32bitテクスチャ(EXR)で数値の受け渡しを行う #Python - Qiita](https://qiita.com/nekoco/items/47028af8595c0c09f6cd)
- [Blender→Unity間で8bitテクスチャ(PNG)で数値の受け渡しを行う #Python - Qiita](https://qiita.com/nekoco/items/36540398abbdafe47eb0)
- [Blender→Unity間でVTF(Vertex Texture Fetch)を行いオブジェクトを変形させる #Python - Qiita](https://qiita.com/nekoco/items/5acf0af226f7c4cff46d)

BlendarからUnityにテクスチャ経由で数値を渡し、そのテクスチャの情報を元にオブジェクトを変形させる方法について、テクスチャの書き出しやテクスチャの色空間、Unity上でのテクスチャを扱うためのシェーダーの実装などについてそれぞれ検証しています。

### The state machine in C# with async/await

[The state machine in C# with async/await](https://steven-giesel.com/blogPost/720a48fd-0abe-4c32-83ac-26926d501895)

C#のasync/awaitによって自動生成されるステートマシンの仕組みについて解説しています。

### PolySpatialでの簡易ポータル表現

[PolySpatialでの簡易ポータル表現](https://zenn.dev/meson/articles/visionos-interior-mapping)

visionOSのRealityKitのPortalMaterialのような機能の代替として、ShaderGraphを用いたインテリアマッピングの実装について解説しています。

### クォータニオンAPIをゼロから自作して完全再現する

[【Unity】クォータニオンAPIをゼロから自作して完全再現する #C# - Qiita](https://qiita.com/amanatsutouko/items/51f39363d195079e1cc8)

クォータニオンを用いた回転の仕組みを、基本的な構造を実装し、回転や補間のメソッドを順に実装しながら解説しています。

### VYamlを用いてYAML(Unityで利用される特殊な形式を含む)をシリアライズ・デシリアライズする方法

[【C#, Unity】VYamlを用いてYAML(Unityで利用される特殊な形式を含む)をシリアライズ・デシリアライズする方法 - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2024/07/22/120000)

VYamlを用いたYAMLのシリアライズ・デシリアライズの方法について紹介しています。

### Unity 3D: Unlocking the Power of Unity Scene Template

[Unity 3D: Unlocking the Power of Unity Scene Templates | by Bruno Lorenz | Jul, 2024 | Medium](https://medium.com/@brunolorenz98/unity-3d-unlocking-the-power-of-unity-scene-templates-f45d0d87399d)

独自のシーンテンプレートを作成する方法について紹介しています。

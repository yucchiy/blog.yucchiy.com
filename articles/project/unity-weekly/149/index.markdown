---
type: "unity-weekly"
title: "Unity Weekly 149"
description: "2023/11/27週のUnity Weeklyです。Unite 2023ハイライト、Unity Asset Storeセール、デカール、visionOS、DI、ECSパフォーマンスなどについて取り上げています。"
tags: ["Unity Weekly","Unity"]
date: "2023-11-27T00:00:01"

---

## Unity Officials

### Unite 2023：第 15 回 Unity アワード、新しい開発リソース、最新の TECH ストリームリリース

[Unite 2023：第 15 回 Unity アワード、新しい開発リソース、最新の TECH ストリームリリース | Unity Blog](https://blog.unity.com/ja/news/unite-2023-awards-developer-resources)

Unite 2023のハイライトとして、第15回Unity Awardsの受賞者の発表やARゲーム開発者向けの新しい開発リソースの紹介、Unity 6とUnity 2023.2のTech Streamリリースについてそれぞれ紹介しています。

### Top selling assets in the Unity Asset Store

[Top selling assets in the Unity Asset Store | Unity Blog](https://blog.unity.com/games/top-selling-assets-supercharge-your-next-project)

Unity Asset Storeでは11/15から12/06までアセットセール中で、300点以上のアセットが50%オフ・最大70%オフの[期間限定のフラッシュディール](https://assetstore.unity.com/ja?flashdeals=true)が開催されています。

この記事ではセール中のいくつかのアセットを紹介しています。

## Articles

### 鮮血を、浴びせよ...!!

[鮮血を、浴びせよ...!!](https://zenn.dev/nrdev/articles/1ae096ef6d9637)

3Dモデル上のデカールの最終結果をテクスチャに書き出すことでデカールを実現する方法について、設計の思想から仕組みの説明、実装方法について解説しています。

このブログで解説したデカール実装の全容は[GitHubにて](https://github.com/ner-develop/DecalPainter)公開されています。

### Dependency Injection(依存性の注入)とは

[【C#】Dependency Injection(依存性の注入)とは - Annulus Games](https://annulusgames.com/blog/dependency-injection/)

Dependency Injection（DI）についてその概要から、DIを実現するためのサービスアロケーターやDIコンテナーについて解説しています。

### Unity ECS Performance Testing: The Way To The Best Performance

[Unity ECS Performance Testing: The Way To The Best Performance](https://gamedev.center/unity-ecs-performance-testing-the-way-to-the-best-performance/)

ECSの最適化のために、Entitiesパッケージの `EntityManager.HasComponent()` や `SystemAPI.HasComponent()` 、各種ジョブ実行を、[Performance Testing Package](https://docs.unity3d.com/Packages/com.unity.test-framework.performance@3.0/manual/index.html)を用いてパフォーマンス計測した結果を紹介しています。

### RectTransform.sizeDeltaの仕様と注意点

[【Unity】RectTransform.sizeDeltaの仕様と注意点 | ねこじゃらシティ](https://nekojara.city/unity-rect-transform-size-delta)

uGUIのアンカー設定と `RectTransform.sizeDelta` の挙動について解説しています。

### UnityでVisionPro開発できるようになった！！！【テンプレート、サンプルビルド】

[UnityでVisionPro開発できるようになった！！！【テンプレート、サンプルビルド】 - トマシープが学ぶ](https://bibinbaleo.hatenablog.com/entry/2023/11/24/174436)

簡単なプロジェクトや[テンプレートプロジェクト](https://docs.unity3d.com/Packages/com.unity.polyspatial.visionos@0.6/manual/TutorialCreateFromTemplate.html)を、[PolySpatial visionOS package](https://docs.unity3d.com/Packages/com.unity.polyspatial.visionos@0.6/manual/index.html)を用いてvisionOSアプリとしてビルドする方法の紹介や、このパッケージの各種Unity公式パッケージやAPIへの対応状況について触れています。

### Input Systemでスティック入力を受け取る

[【Unity】Input Systemでスティック入力を受け取る | ねこじゃらシティ](https://nekojara.city/unity-input-system-stick)

Input Systemでスティック入力をInput Action経由で受け取る方法や特定の方向の入力だけを受け取る方法、ドリフト現象（スティック入力を入れていないのに僅かな入力が入ってしまう現象）の対応やスティックを十字キーのようなボタン入力として受け付ける方法などについて紹介していいます。

### マスタデータを効率よく取り扱うMasterMemoryの概要と使い方まとめ

[【Unity】マスタデータを効率よく取り扱うMasterMemoryの概要と使い方まとめ - LIGHT11](https://light11.hatenadiary.com/entry/2023/11/20/194245)

インメモリーデータベース[MasterMemory](https://github.com/Cysharp/MasterMemory)について概要から使い方について紹介しています。
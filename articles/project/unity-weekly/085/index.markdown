---
type: "unity-weekly"
title: "Code Style、SIGGRAPH2022 - Unity Weekly 085"
description: "2022/09/12週のUnity Weeklyです。C#のコードスタイル、SIGGRAPH2022のUnityハイライト、プロシージャルアニメーションなどについて取り上げました。"
tags: ["Unity Weekly","Unity"]
date: "2022-09-11T15:00:00"

---

## Unity Officials

### コードを美しく保つ：独自の C# コードスタイルを作成する方法

[コードを美しく保つ：独自の C# コードスタイルを作成する方法 | Unity Blog](https://blog.unity.com/ja/technology/clean-up-your-code-how-to-create-your-own-c-code-style)

社内外のUnityエキスパートと協力して、[Microsoftの包括的なC#スタイル](https://docs.microsoft.com/ja-jp/dotnet/csharp/fundamentals/coding-style/coding-conventions)をベースとしたコーディングスタイルガイドが制作され、[eBook](https://resources.unity.com/games/create-code-style-guide-e-book)として公開されました。



この記事では、制作されたコードスタイルの一部紹介から、チームで読みやすい、スケーラブルなコードをベースを作り上げるために考慮すべき点などを紹介しています。

### SIGGRAPH 2022 の重要なハイライトのご紹介

[SIGGRAPH 2022 の重要なハイライトのご紹介 | Unity Blog](https://blog.unity.com/ja/community/discover-key-highlights-from-siggraph-2022)

SIGGRAPH 2022でのUnityのプレゼンテーションや発表についてまとめています。



Wētāをフィーチャーした「[Lion](https://www.youtube.com/watch?v=KpPx_lvthBQ)」デモ、「Real-Time Live!」でのMLアーティストリーチームのオーディエンスチョイスの受賞、「Enemies」でのストランドベースのヘアソリューション、[Ziva Face Trainer](https://zivadynamics.com/ziva-face-trainer)発表、[Advances in real-time rendering](https://advances.realtimerendering.com/)などについてそれぞれ紹介しています。

## Articles

### UIBuilderでランタイムUIをサクッと組み立てる

[【Unity】【UIToolkit】UIBuilderでランタイムUIをサクッと組み立てる - LIGHT11](https://light11.hatenadiary.com/entry/2022/09/06/194132)

UIToolkitのUIBuilderを用いて、ランタイムUIを構築する方法について紹介しています。



UIBuilderを用いたビューの作成から、ボタンのオンクリックイベントを例にとってビューの制御について解説しています。

### **VFX Breakdown : Lightning Particles + Shader(Graph)**

[VFX Breakdown : Lightning Particles + Shader(Graph) | Minions Art on Patreon](https://www.patreon.com/posts/vfx-breakdown-71191108)

ライトニングパーティクル（雷を表すようなパーティクル）を実装する方法について紹介しています。



Distance Fieldを表すテクスチャを用いて雷を表現する方法からテクスチャを用いた色付け、パーティクルシステムの設定など紹介しています。

### Building a third-person controller in Unity with the new input system

[Building a third-person controller in Unity with the new input system - LogRocket Blog](https://blog.logrocket.com/building-third-person-controller-unity-new-input-system/)

新しいInput Systemを用いてサードパーソンカメラおよびキャラクターコントローラーを実装する方法について紹介しています。



サードパーソンカメラについてはcinemachineを用いてカメラワークを実装する方法を、キャラクターコントローラーは待機と走り、ジャンプ、落下の挙動を `Character Controller` コンポーネントとそれを操作するスタートマシンを実装することで実現する方法を解説しています。

## Repositories

### Matchplay: A Matchmaker and Multiplay sample

[Unity-Technologies/com.unity.services.samples.matchplay: A Matchmaking with Multiplay Unity example project. Implements the Unity Matchmaking and Multiplay SDK to create an end to end matchmaking game experience.](https://github.com/Unity-Technologies/com.unity.services.samples.matchplay)

Unity公式のUGS（Unity Gaming Services）のMatchmakerおよびMultiplayのサンプルプロジェクト。



このプロジェクトをそのままコピーするという用途ではなく、Marchmaker と Multiplay をどのように組み合わせてマルチプレイゲームを構築するかについて実装のリファレンスとしての活用を目的としているとのことです。

### Generating Upper-Body Motion for Real-Time Characters Making their Way through Dynamic Environments

[edualvarado/unity-antagonistic-controller: Generating Upper-Body Motion for Real-Time Characters Making their Way through Dynamic Environments - 2022 -](https://github.com/edualvarado/unity-antagonistic-controller)

「Generating Upper-Body Motion for Real-Time Characters Making their Way through Dynamic Environments」という論文のUnity実装。動的な環境に対してインタラクティブな上半身モーションをリアルタイムで生成する。

### Asset Management Tools for Unity

[NibbleByte/UnityAssetManagementTools: Tools for managing assets in Unity 3D.](https://github.com/NibbleByte/UnityAssetManagementTools)

プロジェクトのアセットを管理するためのエディターツール。



シーン管理、ルールベースな一括アセットリネーム、重複アセット検索、プレハブがアタッチされているアセット検索、高速なリファレンス検索、シーン内のアセット検索などの複数のツールが実装されています。

### Unity-UI-Rounded-Corners

[kirevdokimov/Unity-UI-Rounded-Corners: This components and shaders allows you to add rounded corners to UI elements!](https://github.com/kirevdokimov/Unity-UI-Rounded-Corners)

UIElementsの要素に対して角丸な見た目を実現するためのコンポーネントとシェーダー実装。

### UnityProceduralBiped

[pickles976/UnityProceduralBiped](https://github.com/pickles976/UnityProceduralBiped)

二足歩行モデルに対してアニメーションクリップなしで、歩行モーションを生成することを目標とするプロジェクト。




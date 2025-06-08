---
type: "unity-weekly"
title: "Unity Weekly 226"
description: "2025/06/09週のUnity Weeklyです。「Pantheon: Rise of the Fallen」Unity活用事例、NVIDIA FLIPによるビジュアルリグレッションテスト、UIToolkit x R3などについて取り上げています。"
tags: ["Unity Weekly", "Unity"]
date: "2025-06-09T00:00:01"
---

## Unity Officials

### The multiplayer stack behind Visionary Realms’ MMORPG Pantheon: Rise of the Fallen

[The multiplayer stack behind Visionary Realms’ MMORPG Pantheon: Rise of the Fallen](https://unity.com/blog/multiplayer-stack-visionary-realms-mmorpg-pantheon)

「[Pantheon: Rise of the Fallen](https://www.pantheonmmo.com/)」のマルチプレイヤーのネットワーク実装からアセットロードの実装、Unity 6で利用できるGPU Resident DrawerやGPUオクルージョンカリングの活用などについて紹介しています。


## Articles

### 「NVIDIA FLIP」をUnityのTest Runnerで利用する

[「NVIDIA FLIP」をUnityのTest Runnerで利用する - CORETECH ENGINEER BLOG](https://blog.sge-coretech.com/entry/2025/06/02/121903)

ビジュアルリグレッションテストの概要から、Unity標準ライブラリでビジュアルリグレッションテストを実施するための「[Unity Graphics Test Framework](https://docs.unity3d.com/Packages/com.unity.testframework.graphics@7.2/manual/index.html)」を用いたテスト方法、「[NVIDIA FLIP](https://developer.nvidia.com/blog/flip-a-difference-evaluator-for-alternating-images/)」を用いたテストのメリットからこのツールをTest Runnerで利用する方法についてそれぞれ解説しています。

### UITKのUIElementsのイベントをR3で扱う

[【Unity】 UITKのUIElementsのイベントをR3で扱う #r3 - Qiita](https://qiita.com/toRisouP/items/2eb1f2eacc92327b4573)

UI ToolkitのUIElementに関するイベントを「[R3](https://github.com/Cysharp/R3)」の `Observable` として扱うための拡張メソッドの実装について紹介しています。

### Fusionの`[Networked]`属性はどう動いている？IL変換と自動同期の仕組みを解剖する

[Fusionの[Networked]属性はどう動いている？IL変換と自動同期の仕組みを解剖する](https://zenn.dev/wuyukwi/articles/79685434adc2f5)

Photon Fusionの `[Networked]` 属性の概要から、この属性によってどのようなILPostProcessingが適用されているのか解説しています。

### Unityエンジニアのための設計入門① 設計を学ぶ意義

[Unityエンジニアのための設計入門① 設計を学ぶ意義 #Unity - Qiita](https://qiita.com/thibino/items/3cb6b70a4d42420d091e)

Unityにおいて、責任の分離や差し替え可能な実装を行うことのメリットや、モックを用いたテストの実現方法について紹介しています。

### Unity EditorからOpenAI APIを叩く

[Unity EditorからOpenAI APIを叩く](https://zenn.dev/tkada/articles/4741a4ebad0f9b)

エディター拡張経由でOpenAIのAPIを叩いて画像やシェーダーを生成する方法について紹介しています。
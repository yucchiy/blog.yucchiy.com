---
type: unity-weekly
title: >-
  Memory allocator customization、UI Toolkit at runtime、UGS Use
  Cases、URP、Deferred Rendering - Unity Weekly #066
description: ''
pubDatetime: 2022-05-01T23:00:00.000Z
tags:
  - Unity
  - Unity Weekly
---

# Unity Official

## Unity 2021 LTS でメモリの使い方をカスタマイズする

[Unity 2021 LTS でメモリの使い方をカスタマイズする | Unity Blog](https://blog.unity.com/ja/technology/customize-your-memory-use-with-unity-2021-lts)

Unity 2021 LTSから利用できるメモリアロケーターのカスタマイズについて紹介しています。

Unityがネイティブのメモリ割り当てを行う仕組みとしてアロケーターの中の「バケットアロケーター」と「動的ヒープアロケーター」の紹介と、メモリ割り当てを要求されたときのUnity内でのアロケーターの使い分けについて解説しています。

またケーススタディとして、「Ori」のNintendo Switch移植時にパフォーマンスを最適化する（60fpsの維持）際に行ったメモリアロケーターの調整とメモリアロケーターのカスタマイズ機能開発の経緯についても言及しています。

## ランタイムで UI Toolkit を使う：その内側を覗く

[ランタイムで UI Toolkit を使ってみよう | Unity Blog](https://blog.unity.com/ja/technology/ui-toolkit-at-runtime-get-the-breakdown)

UI Toolkitをランタイムで（ここではゲーム中で）利用する方法について紹介しています。

UI Toolkitの概要から、UI Toolkitを用いたUI開発のワークフロー、UXMLによるUI要素の定義方法、Panel SettingによるUXMLの描画方法の定義、ボタンなどのイベントをハンドリングする方法、UI Toolkitで採用されているFlexboxアーキテクチャと要素の配置方法、USSによる要素のスタイルなどについてそれぞれ解説しています。

また、簡単なUIをUI Toolkitを用いて実装する例についても言及しています。

## Unity ゲーミングサービス Use Cases でバトルバスのサンプルをお試しください

[Unity ゲーミングサービス Use Cases でバトルバスのサンプルをお試しください | Unity Blog](https://blog.unity.com/ja/games/try-out-our-battle-pass-sample-using-unity-gaming-services-use-cases)

サーバーが絡むようなゲーム内の機能（例えばルートボックスやデイリーリワード）を、Unity Gaming Service（UGS）で実装するサンプル集「[Use Cases](https://github.com/Unity-Technologies/com.unity.services.samples.use-cases)」と、その中のサンプルの「[バトルパス](https://github.com/Unity-Technologies/com.unity.services.samples.use-cases/blob/main/Assets/Use%20Case%20Samples/Battle%20Pass/README.md)」について紹介しています。

バトルパスは、ゲームの進捗（進捗はゲームによって異なるが、ゲーム内で得られるポイントなど）によって得られる無償の報酬と並行して、バトルパスを購入するとプレミアム報酬が得られる仕組みで、このような機能を、UGSをどのように組み合わせて実装しているのかについて解説しています。

## URP12 の機能まとめ

[URP12 の機能まとめ – Unity for Pro](https://forpro.unity3d.jp/unity_pro_tips/2022/04/25/3620/)

Unity 2021 LTSで利用できるUniversal Render Pipeline（URP）v12でのアップデートを[What's new in URP 12](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@12.1/manual/whats-new/urp-whats-new.html)（URPの公式ドキュメント）をもとにまとめてます。

## 実は超便利！Timerノードを使いこなそう

[実は超便利！Timerノードを使いこなそう【Unityビジュアルスクリプティング】 - YouTube](https://www.youtube.com/watch?v=tRwKEqHLuk4)

ビジュアルスクリプティングで利用できるTimerノードの活用方法を紹介しています。

時間ベースな簡単なエフェクトの制御（指定した時間エフェクトが左右に揺れるような移動と、移動後にパーティクルシステムを再生する）を例にTimerノードの使い方について解説しています。

# Articles

## URP に新しく追加された Deferred レンダリングなどについてざっくりと調べてみた

[URP に新しく追加された Deferred レンダリングなどについてざっくりと調べてみた - 凹みTips](https://tips.hecomi.com/entry/2022/04/30/233225)

Unity 2021 LTSで正式サポートされたUniversal Render Pipeline（URP）のDeferred Renderingについて解説しています。

URPのSimpleLitシェーダーを起点に、このシェーダーが利用しているDepthNormalsとSSAOレンダリングでのDepthNormalsの利用例、URPのデカールのレンダリングの流れ、G-Bufferパスについてそのレイアウトとそれぞれの要素が書き込まれるシェーダーコード解説、Deferred レンダリングについて実際のパスの流れなど、それぞれ説明しています。

## Refactoring Data stored in Unity Prefabs, Scenes and other Assets

[Refactoring Data stored in Unity Prefabs, Scenes and other Assets](https://blog.gemserk.com/2022/04/24/refactoring-prefabs-and-unity-objects/)

Unityのコンポーネントをリファクタリング（データリファクタリング）するためのツールの実装について紹介しています。

シーンやプレハブに設定されたコンポーネントをまとめてリファクタリングするための汎用的なメソッドの実装と、そのツールを用いたフィールド型の変更・コンポーネントの親子間での移動・不要になったMonoBehaviourの削除方法などについて解説しています。

## Async FSM using UniTask

[Async FSM using UniTask | jussituomi.com](https://www.jussituomi.com/posts/async-fsm-unitask/)

[UniTask](https://github.com/Cysharp/UniTask)を用いて非同期なFinite-state machine（FSM）を実装する方法について紹介しています。

あるステートへの遷移を非同期で行えるFSMのフルスクラッチでの実装方法と、UniTaskのPlayerLoopとAsyncEnumerableを組み合わせたMonoBehaviourに依存しないFSMの非同期更新ループの実装方法、実装したFSMの使い方についてそれぞれ解説しています。

## Strategy Pattern In Unity

[Strategy Pattern In Unity. An Ability System | by James Lafritz | Apr, 2022 | Dev Genius](https://blog.devgenius.io/strategy-pattern-in-unity-b82065aaa969)

ゲームのアビリティシステム（各アビリティごとに効果があるようなシステム）を、各アビリティごとに対するswitch句による実装から、ストラテジーパターンを用いた実装に置き換える方法について紹介しています。

アビリティのためのインターフェイスの定義とインターフェイスを呼び分けるクラスの実装を既存の実装からどのようにリファクタリングするかを解説しています。

またストラテジーパターンや、導入するメリットについてそれぞれ言及しています。

## 法線をUVセットに格納し、Unityシェーダーでライティングに使う

[【Maya/MEL】法線をUVセットに格納し、Unityシェーダーでライティングに使う │ Aiming 開発者ブログ](https://developer.aiming-inc.com/unity/maya-normal-uv-unity-shader/)

MayaのUVセットで定義したユーザー独自データをMELスクリプトでfbx は書き出し、Unityで利用する方法を紹介しています。

実例としてUVセットに法線情報を埋め込み、そのUV値をUnityシェーダーのライティング時の法線として利用する方法を解説しています。

## Unity開発の新常識!? Localizationパッケージでアプリ内テキストを管理する

[Unity開発の新常識!? Localizationパッケージでアプリ内テキストを管理する - LIGHT11](https://light11.hatenadiary.com/entry/2022/04/26/193017)

Unityのアプリで多言語対応を行うためのパッケージである「[Localization](https://docs.unity3d.com/Packages/com.unity.localization@1.2/manual/index.html)」を用いて、アプリ内で利用するテキストを管理する方法について紹介しています。

アプリ内テキストの管理方法としてプログラム内に、直接文字列を埋め込む方法の問題点とLocalizationパッケージを用いてそれらのテキストを管理するアイデア、Localizationで扱うテキストをCSVやGoogle Spreadsheetで管理する方法についてそれぞれ解説しています。

## URPでPBRライティングをする基本的なシェーダの書き方まとめ

[【Unity】URPでPBRライティングをする基本的なシェーダの書き方まとめ - LIGHT11](https://light11.hatenadiary.com/entry/2022/04/25/190849)

URPでPhysically based rendering（PBR）なライティングを行うためのシェーダーの書き方について紹介しています。

URPに予め用意されているPBRのライティングやライトマップ、シャドウの計算を行うための関数の説明と、その関数を用いてPBRなライティングを行うためのシェーダーの実装方法についてそれぞれ解説しています。

## リスト内リストUIをUnityで作るには

[リスト内リストUIをUnityで作るには - Qiita](https://qiita.com/segur/items/01ba64f8b98755b5e882)

リスト内の要素がさらにリストになっているようなレイアウトを組む際の、高さを自動で計算するための方法と、それを実装するための `Vertical Layout Group` や `Content Size Fitter` コンポーネント、固定の高さになる要素を設定するための `Layout Element` の使い方などについてそれぞれ解説しています。

## TextMeshProのアウトラインを理解する

[【Unity】TextMeshProのアウトラインを理解する - うどんてっくメモ](https://myudon.hatenablog.com/entry/2022/04/24/201020)

TextMeshProのテキストで狙ったアウトライン表現をするための、アウトラインのサイズの計算式や各種パラメーター、外側のアウトラインと内側のアウトラインについてそれぞれ解説しています。

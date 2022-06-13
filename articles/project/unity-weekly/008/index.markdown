---
type: "unity-weekly"
title: "Unity Weekly #008"
date: "2021-04-05T09:00:00+09:00"
draft: false
tags: ["Unity", "Unity Weekly"]

---

## Tales from the optimization trenches: Saving memory with Addressables

![](./image12-2-1280x720.png)

[Tales from the optimization trenches: Saving memory with Addressables](https://blogs.unity3d.com/2021/03/31/tales-from-the-optimization-trenches-saving-memory-with-addressables/)

- この記事ではAddressablesを用いてメモリ最適化を行う方法についての紹介しています。
- アセットバンドルで参照をそのままもつと、そのアセットバンドルを読み込むと全てをメモリにユニークに展開してしまいますが、Addressablesをうまく活用してアセットのバンドル方法や依存を整理しメモリ使用量を削減していくプラクティスが紹介されています。
- Addressablesを用いないに強参照（GUIDによる参照）したプロジェクトからはじめ、Addressablesに置き換え、Bundle ModeをPack Separatelyに変更、Addressables Analyzeでの重複アセットの検知、Addressable Groupと依存の整理、最後にメタデータサイズの削減方法について紹介しています。


## Build stunning mobile games that run smoothly with Adaptive Performance

![](./Unity_Blog_header_Samsung-Adaptive-Performance_1280x720.jpg)

[Build stunning mobile games that run smoothly with Adaptive Performance](https://blogs.unity3d.com/2021/03/30/build-stunning-mobile-games-that-run-smoothly-with-adaptive-performance/)

- この記事ではAdaptive PerformanceというSamsungが提供するモバイルデバイスなどで問題となる発熱によるCPUやGPUのパフォーマンス低下に対応するためのライブラリについて紹介しています。
- Adaptive Performanceでは熱や電力状態を監視して、その状態に対して(LODやFPSなどを)適切なパフォーマンス設定を自動で適応することで、スムーズかつ安定したゲームプレイをサポートします。
- 実際にゲームの設定を変更するScalerは、標準で用意されている実装以外にも独自でScalerを実装して、組み込むことが可能です。
- Device Simulatorを用いて、実機を用いずにエディタで様々なシナリオを直接テストする方法についても紹介しています。


## Unity 新UIシステムUI Toolkit 触ってみた | CyberAgent

![](./qanote_banner_009.png)

[Unity 新UIシステムUI Toolkit 触ってみた | CyberAgent](https://creator.game.cyberagent.co.jp/?p=7921)

- この記事ではUI ToolkitというUnityが提供する新しいUIシステムについて紹介しています。
- UI Toolkitのインストール方法からUI Builderと呼ばれるGUIベースでUIを構築できるツールの利用方法、スクリプトによるUIイベントのハンドリングおよび要素の操作方法について紹介しています。
- また`VisualElement`を継承した自作のUI要素の実装方法について、プロパティの操作をUI Builderに対応させる`UxmlTraits`の実装方法、`INotifyValueChanged`の実装によるイベント発行の対応、UI上の値とオブジェクトの値を同期するBindingの対応方法について紹介されています。


## 【Unity】Scriptable Build Pipelineによるビルドフロー構築入門

[【Unity】Scriptable Build Pipelineによるビルドフロー構築入門 - LIGHT11](https://light11.hatenadiary.com/entry/2021/03/30/201333)

- この記事では、アセットバンドルなどのビルドフローをスクリプトで実装することのできるScriptable Build Pipeline(SBP)について紹介しています。
- SBPを理解する上で重要な`IBuildTask`と`IContextObject`について説明されています。
- おまけとしてデフォルトビルドフローの一部をカスタマイズする方法についても紹介されています。


## Animate Runtime Progress Bars With Ui Toolkit

![](./intro-final.gif)

[Animate Runtime Progress Bars With Ui Toolkit - GameDev Resources](https://yecats.github.io/2021/03/19/Animate-runtime-progress-bars-with-UI-Toolkit.html)

- この記事ではUI Toolkitを用いて、上記のようなアニメーションするプログレスバーを実装する方法について解説しています。
- UI Builderによるプログレスバーの構築方法、`Q`メソッドによるUI要素へのアクセス方法、要素のサイズや回転を操作してUIをアニメーションさせる方法について紹介しています。アニメーション実装にはDOTweenを利用しています。


## Forward Decals Prototype

![](./2021-03-25-22-20-41.gif)

[Forward Decals Prototype | Minions Art on Patreon](https://www.patreon.com/posts/forward-decals-49100194)

- この記事では[Astro Cat](https://www.patreon.com/minionsart)でのフォワードレンダリングによるデカールのプロトタイプ実装について紹介しています。
- デカールの描画には`Graphics.DrawMesh`でメッシュを描画しその上にテクスチャを貼りつけます。
- ただし素材が透明で影が落ちないため、コマンドバッファ経由でディレクショナルライトによる既存のシャドウマップを用いることで擬似的に影を落とす方法を紹介しています。
- デカールが全ての要素の上に描画されてしまう問題はステンシルバッファによって解決しています。

## Object Pooling in Unity 2021+

![](./object-pooling-in-unity-2021-cover.png)

[Object Pooling in Unity 2021+ | The Gamedev Guru](https://thegamedev.guru/unity-cpu-performance/object-pooling/)

- この記事ではObject Poolがどのような場面で必要であるいは必要ないのかについて説明しています。
- UnityでObject Poolを利用するにはどのような選択肢があるのかと、Unity 2021.1から利用できる`UnityEngine.Pool`の各種プールとその使い方を説明しています。
    - [Unity - Scripting API: ObjectPool<T0>](https://docs.unity3d.com/2021.1/Documentation/ScriptReference/Pool.ObjectPool_1.html)

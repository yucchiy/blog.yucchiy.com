---
type: "unity-weekly"
title: "Unity Weekly #097"
description: "2022/11/28週のUnity Weeklyです。Unity 2022.2のプレハブ関連新機能、ECS for Unity、PIX、Addressablesなどについて取り上げました。"
tags: ["Unity Weekly","Unity"]
date: "2022-11-28T00:00:00"

---

## Unity Officials

### Unity 2022.2 のプレハブ関連の新機能

[Unity 2022.2 のプレハブ関連の新機能 | Unity Blog](https://blog.unity.com/ja/technology/prefabs-whats-new-2022-2)

Unity 2022.2で追加された機能（「プレハブアセットからプレハブのインスタンスへの置換」・「追加されたゲームオブジェクトやコンポーネントの並べ替え」・「プレハブのインスタンスからのゲームオブジェクトの削除」・「プレハブバリアントの関係の検査」など）についてその概要や関連するAPIを紹介しています。

### Games Focus：スケールを拡大して野心的なゲームを作る

[Games Focus：スケールを拡大して野心的なゲームを作る | Unity Blog](https://blog.unity.com/ja/technology/games-focus-expanded-scale-for-ambitious-games)

ECS（Entity Component System）for Unityの 2022 TECH ストリームで現状提供しているパッケージの概要やリリース済みタイトルでのECSの導入事例、今後計画されている機能開発、ECS for Unityを始めるためのリソースなどについて紹介しています。

### Perception 1.0：合成データのためのツールボックスの拡張

[Perception 1.0：合成データのためのツールボックスの拡張 | Unity Blog](https://blog.unity.com/ja/technology/perception-open-source-toolbox-for-synthetic-data)

Unityが提供する合成データを構築するためのオープンソースツール Perception 1.0のメジャーアップデートでリリースされた人物ジェネレーターSynthetic Humansのアップデートや住宅インテリアデータセットSynthetic Homes、その他のアップデートについて紹介しています。

### PIXを使ってカリカリGPUチューニング！

[【Unity】PIXを使ってカリカリGPUチューニング！ - YouTube](https://www.youtube.com/watch?v=_KLr-XN-Wuw)

Windows DirectX 12用のパフォーマンスチューニング＆デバッグツール PIXを用いてUnityアプリのグラフィックスパフォーマンスを解析し、そのプロファイリングを利用して負荷を改善する例について紹介しています。

### この代入の意味が分かりますか… Tupleを便利に使おう！

[【Unity/C#】この代入の意味が分かりますか… Tupleを便利に使おう！ - YouTube](https://www.youtube.com/watch?v=-IW7ZWOS4r8)

C# 7.0に導入されたTupleの基本的な使い方からスワップ処理をTupleを利用することによって少ないコード量で記述する方法について紹介しています。

## Articles

### Addressablesの意図しない依存関係をチェックしたい

[Addressablesの意図しない依存関係をチェックしたい - Synamon’s Engineer blog](https://synamon.hatenablog.com/entry/unity_addressables_dependency)

Addressablesで管理されているアセットの依存関係を確認するためのツールの紹介やスクリプト経由で依存関係を参照する方法、`ExtractDataTask` 経由で依存を参照した場合にAddressablesが管理するアセットを特定するための `FileType` についてそれぞれ解説しています。

### プロジェクション行列を改造して遊ぶ【URP】

[【Unity】プロジェクション行列を改造して遊ぶ【URP】](https://zenn.dev/r_ngtm/articles/urp-modify-camera-matrix)

Universal Render Pipeline（URP）のプロジェクション行列を操作する方法と、操作することによってオブジェクトの描画がどのように変化するかについて紹介しています。

### asmdefのDefine Constraintsを利用して特定のシンボルが定義されているときのみアセンブリを含める

[【Unity】asmdefのDefine Constraintsを利用して特定のシンボルが定義されているときのみアセンブリを含める - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2022/11/25/120000)

asmdefの「Define Constraints」を用いて、特定シンボルが定義・または未定義なときのみビルドにアセンブリを含める方法について紹介しています。

## Repositories

### Unity URP RayMarching 体积云

[Straw1997/UnityURPCloud: unity urp RayMarching体积云渲染](https://github.com/Straw1997/UnityURPCloud)

URPでのレイマーチングによる体積雲の描画実装。




---
type: "unity-weekly"
title: "Unity Weekly 118"
description: "2023/04/24週のUnity Weeklyです。ScriptableObjects、Rapid design iteration using AssetPostprocessor、UGS、In App Purchasing 4.8.0などについて取り上げています。"
tags: ["Unity Weekly","Unity"]
date: "2023-04-24T00:00:01"

---

## Unity Officials

### 6 ways ScriptableObjects can benefit your team and your code 

[6 ways ScriptableObjects can benefit your team and your code | Unity Blog](https://blog.unity.com/engine-platform/6-ways-scriptableobjects-can-benefit-your-team-and-your-code)

UnityのeBookシリーズに「[Create modular game architecture in Unity with ScriptableObjects](https://resources.unity.com/games/create-modular-game-architecture-with-scriptable-objects-ebook)」というScriptableObjectsの活用に関する書籍が追加されました。

この記事では、ScriptableObjectsを活用することによる6つのメリットを解説しています。

### Rapid design iteration in Breachers using AssetPostprocessor and Blender

[Rapid design iteration in Breachers using AssetPostprocessor and Blender | Unity Blog](https://blog.unity.com/games/rapid-design-iteration-in-breachers-using-assetpostprocessor-and-blender)

Triangle Factory社の開発するBreachersで採用しているBlenderとUnityによるレベルデザインのワークフローについて、その全容と、Blenderの出力するカスタムプロパティを元にUnityのAssetProcessorでUnityのプレハブの設定を自動化する方法についてそれぞれ紹介しています。


### 「Unity ゲーミングサービス」： 待望の最新リリース！注目の 5 つのポイント

[「Unity ゲーミングサービス」： 待望の最新リリース！注目の 5 つのポイント | Unity Blog](https://blog.unity.com/ja/engine-platform/unity-gaming-services-5-highlights-from-recent-releases)

UGSで最近リリースされたもののうち、注目の機能をいくつか紹介しています。

### Changelog | In App Purchasing | 4.8.0

[Changelog | In App Purchasing | 4.8.0](https://docs.unity3d.com/Packages/com.unity.purchasing@4.8/changelog/CHANGELOG.html)

 In App Purchasing 4.8.0がリリースされています。

このバージョンでGoogle PlayのBilling Library v5.1.0のサポートが行われました。（ただし、v5で追加された機能の呼び出しについては未対応です）


## Articles

### Custom Renderer Features

[Custom Renderer Features](https://t.co/aX4iIQVi14)

URPのCustom Renderer Featuresについて、そのユースケースの紹介からCustom Renderer Featuresの実装方法から利用方法に関するテンプレートを解説しています。

この記事では、Unity 2022以上で利用されている `RTHandles` にフォーカスして解説しています。


### Input Systemでキーコンフィグを実装する

[【Unity】Input Systemでキーコンフィグを実装する | ねこじゃらシティ](https://nekojara.city/unity-input-system-rebinding)

Input SystemのInteractive Rebindingを用いてキーコンフィグ（デフォルトで用意されたキー操作を設定で上書きする機能）を実装する方法について、Interactive Rebindingの機能の説明からスクリプトからの操作方法、Composite BindingへのRebinding、キーコンフィグの設定の保持方法などについてそれぞれ解説しています。


### 爆発の表現をつくる【パーティクル作例】

[爆発の表現をつくる【パーティクル作例】 - Cluster Creators Guide](https://creator.cluster.mu/2023/04/19/explosion_particle/)

爆発エフェクトをParticle Systemを用いて表現する方法について、それぞれのモジュールの設定とその効果について解説しています。


### ShaderVariant その他 PreFilterとDynamic Shader Loading

[ShaderVariant その他 PreFilterとDynamic Shader Loading｜黒河優介｜note](https://note.com/wotakuro/n/n4b593ba72561)

Unity 2021 LTSに追加されたShader VariantのPreFilterとDynamic Shader Loadingについて、それらの機能が実装された背景や、制御のための設定や注意点について紹介しています。


### LangChainをFastAPI経由でUnityで利用する

[LangChainをFastAPI経由でUnityで利用する - Synamon’s Engineer blog](https://synamon.hatenablog.com/entry/langchain_fastapi_unity)

ローカル上で構築したLangChainに対して、FastAPIを用いてAPI化し、そのAPIをUnityで呼び出すことで、UnityからLangChainを利用する方法について紹介しています。


### UniTaskのWhenAllは省略して書ける

[【Unity】UniTaskのWhenAllは省略して書ける](https://zenn.dev/nitudon/articles/37592ea996c78c)

UniTaskには `UniTask[]` などに `GetAwaiter` が実装されているため、 `List<T>` で定義したタスクを直接 `await` すると `UniTask.WhenAll` として実行される挙動について解説しています。


### C#で Dictionary<A, List<B>> を IReadOnlyDictionary<A, IReadOnlyList<B>> として公開する

[C#で Dictionary<A, List<B>> を IReadOnlyDictionary<A, IReadOnlyList<B>> として公開する - きゅぶろぐ](https://blog.kyubuns.dev/entry/2023/04/22/201156)

`Dictionary<A, List<B>>` を、要素の書き換えをさせないように `IReadOnlyDictionary<A, IReadOnlyList<B>>` として公開する方法について紹介しています。


### ビルトインスクリプトシンボル一覧の調べ方

[【Unity】ビルトインスクリプトシンボル一覧の調べ方(Unity2023.1.0b7) - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2023/04/20/120000)

現在設定されているDefine Symbolの一覧を取得する `EditorUserBuildSettings.activeScriptCompilationDefines` について紹介しています。


## Slides

### Effects 入門 Cremee Vol. 3

[https://docs.google.com/presentation/d/13hzPv_A6E_6jYw4aFRnPjX8Ffvfy7w2ZitodLBihlkM/mobilepresent?slide=id.p](https://docs.google.com/presentation/d/13hzPv_A6E_6jYw4aFRnPjX8Ffvfy7w2ZitodLBihlkM/mobilepresent?slide=id.p)

ゲームエフェクトの基礎からエフェクト実装のためのブレイクダウン、ヒットエフェクトをParticle SystemとSubstance 3D Designerを用いて実装する方法についてそれぞれ解説しています。

## Repositories

### HoloLabInc/IwasmUnity

[HoloLabInc/IwasmUnity: Unity C# wrapper of iwasm](https://github.com/HoloLabInc/IwasmUnity)

WebAssembly Runtime [iwasm](https://github.com/bytecodealliance/wasm-micro-runtime)のUnityラッパー。
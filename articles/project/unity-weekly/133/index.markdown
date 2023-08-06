---
type: "unity-weekly"
title: "Unity Weekly 133"
description: "2023/08/07週のUnity Weeklyです。Ziva Face Trainer、Ziva Real-Time、Unity for Visual Studio Code、Rider 2023.2、ShaderGraph uGUI supportなどについて取り上げています。"
tags: ["Unity Weekly","Unity"]
date: "2023-08-07T00:00:01"

---

## Unity Officials

### Automate facial rigging with cloud-based machine learning in Ziva Face Trainer

[Automate facial rigging with cloud-based machine learning in Ziva Face Trainer | Unity Blog](https://blog.unity.com/engine-platform/ziva-face-trainer-cloud-based-maching-learning)

Ziva Face Trainerによるクラウドベースなフェイシャル自動リギングについて、その特徴や機能について紹介しています。

### Drive player engagement with blockbuster performances: Introducing Ziva Real-Time

[Drive player engagement with blockbuster performances: Introducing Ziva Real-Time | Unity Blog](https://blog.unity.com/engine-platform/introducing-ziva-real-time)

Ziva Real-Timeの特徴や利用するメリット、ユースケースについて紹介しています。

## Articles

### Unity for Visual Studio Code

[Visual Studio Code and Unity](https://code.visualstudio.com/docs/other/unity)

MicrosoftがVisual Studio Code用のUnity拡張機能をプレビュー版にて公開しました。

この拡張機能は C# Dev Kitと [C#の拡張機能](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp) などにより、「Unityエディターやプレイヤーへのデバッガーアタッチ」や「Unityに特化したC#の解析およびリファクタリング」、「Unityのファイルフォーマット（.asmdefや.shader、.uss、.uxml）のコードハイライト」などの機能が実装されています。

### Improvements to Unity shader files in Rider 2023.2

[Improvements to Unity shader files in Rider 2023.2 | The JetBrains Blog](https://blog.jetbrains.com/dotnet/2023/07/25/improvements-to-unity-shader-files-in-rider-2023-2/)

Rider 2023.2のアップデートのうちUnityシェーダーファイルに関する新機能（タイピングアシスタントやシェーダー名やパス名の補間など）を紹介しています。

### Unity 2023.2で、UIもShaderGraphでリッチにしよう

[Unity 2023.2で、UIもShaderGraphでリッチにしよう【Unity/URP/ShaderGraph #ポケテク】｜ポケラボ](https://note.com/pokelabo/n/nd4bc792ce677)

Unity 2023.2に入ったuGUIのShaderGraph対応について、UIマテリアルの実装デモを踏まえて紹介しています。

### Bouncy Ball Shooter

[Bouncy Ball Shooter](https://catlikecoding.com/unity/tutorials/prototypes/bouncy-ball-shooter/)

Catlike Codingの[プロトタイプシリーズ](https://catlikecoding.com/unity/tutorials/prototypes/bouncy-ball-shooter/)で、本記事ではシンプルな2Dのボールシューティングアクションゲームを扱っています。

このゲームのための、多くのボールのスポーンを考慮したプール実装、ボール挙動や当たり判定のためのBurstジョブ実装、ゲームプレイの実装、アニメーションの実装などを解説しています。

### visionOS Reality Composer Pro の試してみた

[visionOS Reality Composer Pro の試してみた](https://zenn.dev/meson/articles/visionos-reality-compooser-pro)

visionOS 上で 3Dコンテンツを制作する際に利用できる Reality Composer Proについて、その基本的な使い方を紹介しています。

### あてっこ！ぷにまるずで利用したVisualScriptingとデザイナーフレンドリーな開発

[あてっこ！ぷにまるずで利用したVisualScriptingとデザイナーフレンドリーな開発 - Mirrativ Tech Blog](https://tech.mirrativ.stream/entry/2023/08/02/192832?utm_source=feed)

ミラティブが開発するモバイルブラウザ上で動くWebGLアプリ「あてっこ！ぷにまるず」におけるVisualScriptingの活用事例と、実際に導入してみて感じたメリットやデメリットについて紹介しています。

### Unity URP custom render feature for UI Blur

[Unity URP custom render feature for UI Blur](https://gist.github.com/Refsa/e006f1a8d3a974ae88cb7ecd93bf306b)

主にUI用途のコンピュートシェーダーによるブラーエフェクト実装。

### Timeline のアニメーション出力をアニメーターのアニメーションとブレンドする

[【Unity】Timeline のアニメーション出力をアニメーターのアニメーションとブレンドする【Playable】 - Qiita](https://qiita.com/tsukimi_neko/items/f8a62df5e45fb9556f4d)

Timelineのアニメーショントラックで再生したアニメーションとAnimatorに出力されているアニメーションを、スクリプト設定でブレンドする方法について紹介しています。

### 生成AIをフル活用してゲームステージをつくる

[生成AIをフル活用してゲームステージをつくる｜nakashun](https://note.com/nakashun_t/n/n9babe8eee052)

stable-diffusion-for-unity に、 [投影（Projector）機能](https://docs.witchpot.com/production/projectornoi) が追加されました。事前に用意した3Dモデルの衝突判定や遮蔽を利用しつつ、AIで生成した2D画像の絵柄を利用できます。

この記事では、これらの機能を利用してゲームのステージを制作する方法について紹介しています。

### HotReload買ってみた感想と使い方

[【Unity】HotReload買ってみた感想と使い方(コンパイル時間が無くなる神アセット)](https://zenn.dev/daichi_gamedev/articles/unity-hotreload)

ゲームプレイ中にスクリプトのホットリロードを行えるアセット「[HotReload](https://assetstore.unity.com/packages/tools/utilities/hot-reload-edit-code-without-compiling-254358) 」の導入方法と利用方法をまとめています。

### Unity Test Frameworkでログ出力のテストをする方法

[【Unity】Unity Test Frameworkでログ出力のテストをする方法(特にDebug.LogError, Debug.LogException) - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2023/08/03/120000)

UnityのTestRunnerで、特定のログが出力されているかどうかをテストする方法について紹介しています。

### Unity Recorderをスクリプトから実行する

[【Unity】Unity Recorderをスクリプトから実行する - うどんてっくメモ](https://myudon.hatenablog.com/entry/2023/07/31/000252)

Unity Recorderをプログラム上で操作し、特定のタイミングの動画を撮影する方法について紹介しています。

### Photon Fusion for UnityのサンプルSocial HubとProjectilesをあわせて物理シューターを作る

[Photon Fusion for UnityのサンプルSocial HubとProjectilesをあわせて物理シューターを作る　その２ - Qiita](https://qiita.com/nimushiki/items/02f3376e2ec547fb9719)

Photon Fusionを用いて大量の物理オブジェクト（物理挙動によって制御されるオブジェクト）を扱う際に注意すべきネットワークのトポロジーや、大量のオブジェクトが重なったりした際に動きが落ち着かない挙動への対応方法などをそれぞれ紹介しています。

### TextMeshProでピクセル（ドット）系フォントがぼやける問題を解決する

[[Unity]TextMeshProでピクセル（ドット）系フォントがぼやける問題を解決する（ドット絵警察お怒り版） - Qiita](https://qiita.com/kowato/items/267dbeb45ed18eaaf6f4)

TextMeshProでピクセルフォントを扱う際に、デフォルトのフォント設定ではフォントの描画がぼやけてしまう問題と、設定による解決方法を紹介しています。

### HDRPでカスタムShader - Unlit編

[HDRPでカスタムShader - Unlit編 - 3Dゲーム開発備忘録](https://daiki-eguchi.hatenablog.com/entry/2023/08/04/095941)

HDRPで独自のUnlitシェーダーを書くためのテンプレートシェーダーを、HDRP独自のシェーダーのincludeやTag指定を含めて紹介しています。

## Repositories

### lukakldiashvili/Unified-Universal-Blur

[lukakldiashvili/Unified-Universal-Blur: URP UI blur (translucent) effect for Unity.](https://github.com/lukakldiashvili/Unified-Universal-Blur)

URP用のUIの画面のぼかしエフェクト実装。

### ainurdada/com.dada.commander

[ainurdada/com.dada.commander: Cheat console for Unity](https://github.com/ainurdada/com.dada.commander)

チートコマンドの開発を簡単に行うためのライブラリとコンソールUI実装。

### pschraut/UnityDbgDraw

[pschraut/UnityDbgDraw: DbgDraw is an API that provides the ability to render various 2D and 3D shapes for visual debugging purposes.](https://github.com/pschraut/UnityDbgDraw)

デバッグ目的の2Dまたは3Dを描画するためのライブラリ。

### mochi-neko/dynamic-unity-avatar-generator

[mochi-neko/dynamic-unity-avatar-generator: Dynamically generates humanoid `UnityEngine.Avatar` from skeleton bones at runtime.](https://github.com/mochi-neko/dynamic-unity-avatar-generator)

ランタイムでヒューマノイドの骨を操作するためのライブラリ。

### Ale1/Splashdown: Splashdown

[Ale1/Splashdown: Splashdown - A Unity open-source splash and icon generator](https://github.com/Ale1/Splashdown)

アプリアイコンやスプラッシュスクリーンを、アプリのビルドパイプライン上でスクリプトによって変更するためのツール。
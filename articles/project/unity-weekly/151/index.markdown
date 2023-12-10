---
type: "unity-weekly"
title: "Unity Weekly 151"
description: "2023/12/11週のUnity Weeklyです。Mobile & Console 最適化、Advent Calendar 2023などについて取り上げています。"
tags: ["Unity Weekly", "Unity", "Advent Calendar 2023"]
date: "2023-12-11T00:00:01"

---


## Unity Officials

### Updated 2022 LTS Best Practice Guides for optimizing games

[Updated 2022 LTS Best Practice Guides for optimizing games | Unity Blog](https://blog.unity.com/engine-platform/updated-2022-lts-best-practice-guides)

Unity 2022 LTS向けのコンソール/PC向けのモバイル向けのパフォーマンス最適化をまとめた[ebookのリリースされました](https://discussions.unity.com/t/two-new-optimization-guides-for-mobile-console-and-pc-2022-lts-edition/318797)。

この記事では、そのebookの概要を紹介しています。


## Articles

### Ultraviolet Lights & Invisible Ink

[Ultraviolet Lights & Invisible Ink | Cyanilux](https://www.cyanilux.com/tutorials/ultraviolet-lights-invisible-ink/)

隠れたデカールテクスチャを明らかにするUVライトや特殊なレンズなどのエフェクトの実装について紹介しています。

### ライトベイクの限りある表現で見た目を向上させるには？

[【Unity】ライトベイクの限りある表現で見た目を向上させるには？ – 株式会社ロジカルビート](https://logicalbeat.jp/blog/15473/)

リアルタイムライトとライトベイクの使い分けからライティングのクオリティを向上させるための手法をいくつか紹介しています。

### 生成AIを使ってUnityのカメラアプリを作ってみた

[生成AIを使ってUnityのカメラアプリを作ってみた - Activ8 Tech Blog](https://synamon.hatenablog.com/entry/2023/12/10/011938)

OpenAIの`gpt-4-vision-preview`とDALL-E3を用いて、カメラ入力からプロンプトを生成し、生成したプロンプトから画像を生成するようなカメラアプリの実装を紹介しています。

### Intro to Shader Graph in Unity 2022 (Part 2 - Textures & UVs)

[Intro to Shader Graph in Unity 2022 (Part 2 - Textures & UVs)](https://danielilett.com/2023-12-04-tut7-4-intro-to-shader-graph-part-2/)

Shader Graphでのテクスチャの扱いとUVマッピングについて紹介しています。

### ホロライブアプリのアーキテクチャ その2 ～新プロジェクト立ち上げ編～

[ホロライブアプリのアーキテクチャ その2 ～新プロジェクト立ち上げ編～ #C# - Qiita](https://qiita.com/kura_cvr/items/ee4d140f719570a9c4fa)

カバー株式会社で開発するホロライブアプリのアーキテクチャーの刷新についての概要と、そこで導入したZenjectやクリーンアーキテクチャについて紹介しています。

## Repositories

### CompositeCanvasRenderer

[mob-sakai/CompositeCanvasRenderer: CompositeCanvasRenderer bakes multiple source graphics into a bake-buffer (RenderTexture) and renders it. Additional material modification, mesh modification, and baking effects are supported! Let's enjoy the effects that were difficult to implement with UI shaders, such as blur, soft outline, and soft shadow!](https://github.com/mob-sakai/CompositeCanvasRenderer)

複数のソースをbake-buffer（レンダーテクスチャ）に書き出して描画するライブラリ。

その際ソースに対してマテリアルやメッシュ更新、エフェクトを適用できる。

### BurstLinq

[AnnulusGames/BurstLinq: Extremely fast LINQ aggregation operations implementation optimized by Burst Compiler](https://github.com/AnnulusGames/BurstLinq)

UnityのBurst Compilerを用いてLINQの集約操作を高速化するライブラリ。


## Advent Calendar 2023

### Unityで3D化技術を駆使した2Dイラストのライティング検証

[Unityで3D化技術を駆使した2Dイラストのライティング検証](https://zenn.dev/happy_elements/articles/aca77527860a05)

2Dイラストを[PIFuHD](https://shunsukesaito.github.io/PIFuHD/)を用いて3D化して、3Dから得た法線を用いて2Dイラストをライティングする方法について解説しています。

### Unityの「Split Application Binary」を用いて、GooglePlay Storeで150MBより大きいアプリケーションを配信する

[Unityの「Split Application Binary」を用いて、GooglePlay Storeで150MBより大きいアプリケーションを配信する | Yucchiy's Note](https://blog.yucchiy.com/2023/12/unity-split-application-binary-and-pad/)

「Split Application Binary」という設定によってAAB分割を行い、特別な実装を行うことなく150MB超えのアプリをGooglePlay Store上で配信する方法と、その仕組みについて解説しています。

### UnityのPlay Asset DeliveryをtargetSdk34に対応させる

[UnityのPlay Asset DeliveryをtargetSdk34に対応させる](https://uzzu.co/post/unity-android-pad-targetsdk34.html)

Unityで、Androidのtarget SDKのバージョン34に引き上げた上でPlay Asset Deliveryを利用すると発生する不具合とその対処方法について紹介しています。

### シャドウマップを自作して、キャラクターの影をキャラクターが受けないようにする

[【URP14】シャドウマップを自作して、キャラクターの影をキャラクターが受けないようにする](https://zenn.dev/r_ngtm/articles/urp14-custom-shadow)

キャラクター上にキャラクターの影が描画されないようにする影の描画を、URP14で独自のシャドウマップ描画のレンダーパスを実装することで実現する方法を解説しています。

### unsafeコードを書いてみよう

[【C#】unsafeコードを書いてみよう - Annulus Games](https://annulusgames.com/blog/unsafe/)

unsafeやUnsafeクラスの使い方について解説しています。

### トップビュー向けの自由形状な地形を作るテクニック

[[Unity]トップビュー向けの自由形状な地形を作るテクニック #Unity - Qiita](https://qiita.com/flankids/items/7c4fe9b5683505b2479c)

[2D Sprite Shape](https://docs.unity3d.com/Packages/com.unity.2d.spriteshape@10.0/manual/index.html)のSprite Shapeで表現される地形をもとに、Shapeの膨張とSprite Shapeに複数レイヤーを重ねることでよりリッチな地形を表現するためのエディター拡張を紹介しています。

### ランタイムでTexture2DをASTCテクスチャに圧縮しロードする

[ランタイムでTexture2DをASTCテクスチャに圧縮しロードする #C# - Qiita](https://qiita.com/up-hash/items/76f6f879f3129bb1d23e)

ランタイムで、Texture2Dの保持するテクスチャデータをASTCに圧縮してロードする方法を紹介しています。

### FontEngineで軽量テキスト描画

[【Unity】FontEngineで軽量テキスト描画](https://zenn.dev/ruccho/articles/f6413a1a71e2b4)

TextMesh ProやUI Toolkitがバックエンドで利用する文字描画エンジン`FontEngine`についてその基本的な使い方や用途を紹介しています。

### Unity 2023.1 から入った Android Project Configuration Managerについて理解する

[Unity 2023.1 から入った Android Project Configuration Managerについて理解する | Yucchiy's Note](https://blog.yucchiy.com/2023/12/intro-unity-android-project-configuration-manager/)

Unity 2023.1から追加されたAndroid Project Configuration Managerについて、その機能の概要から利用方法、既存機能との関係や移行方法を解説しています。


### お手軽メモリ改ざんチート対策 任意のstructをXORするジェネリック

[【Unity C#】お手軽メモリ改ざんチート対策 任意のstructをXORするジェネリック #C# - Qiita](https://qiita.com/rittora/items/2d21d67443ca2311d574)

任意の構造体をXORをかけて保持するチート対策のための型の実装について解説しています。

### RectTransformの基礎 

[RectTransformの基礎 #Unity - Qiita](https://qiita.com/maple_22/items/4e81acec92ab44b31910)

UIを制作する際に重要な`RectTransform`の各種フィールドの挙動について解説しています。

### ゲームアプリ「イロまぜインク店」の開発振り返り＆使用アセット紹介

[ゲームアプリ「イロまぜインク店」の開発振り返り＆使用アセット紹介 #Unity - Qiita](https://qiita.com/ScreenPocket/items/053529717f6c6ac290a0)

この記事の著者の開発する「[イロまぜインク店](https://apps.apple.com/us/app/%E3%82%A4%E3%83%AD%E3%81%BE%E3%81%9C%E3%82%A4%E3%83%B3%E3%82%AF%E5%BA%97/id6446950487)」の開発の振り返りや役立ったアセットを紹介しています。

### UnityのProjectWindowに表示履歴機能を付けるエディタ拡張

[UnityのProjectWindowに表示履歴機能を付けるエディタ拡張](https://zenn.dev/yuji_ap/articles/da96d7819e9653)

ProjectWindow上に閲覧履歴をたどるエディター拡張を実装する方法を解説しています。

### Taskを使って、絶対バグる連打・同時タップの苦しみから解放されよう

[Taskを使って、絶対バグる連打・同時タップの苦しみから解放されよう #C# - Qiita](https://qiita.com/up-hash/items/6fae0012435b50e9311d)

ボタンを押したときの非同期処理が終わるまで、ボタンの再呼び出しを停止するようなボタンの実装について解説しています。

### UnityからiOS/Android端末の音量設定を操作する方法

[UnityからiOS/Android端末の音量設定を操作する方法 #Unity - Qiita](https://qiita.com/satanabe1@github/items/ba24f2a23c297272c7c8)

iOS/Androidが用意する音量設定のAPIを呼び出して、Unity上で音量を取得・設定する方法を紹介しています。

### フォト画像を端末に保存する機能の実装上のポイント

[フォト画像を端末に保存する機能の実装上のポイント #C# - Qiita](https://qiita.com/aielement/items/7f757e00edb04473ac6b)

[Unity Native Gallery Plugin](https://github.com/yasirkula/UnityNativeGallery)を用いた、iOS/Androidごとのアルバムに画像を保存する方法を紹介しています。

### 3Dアバターファイルフォーマット "VRM" の構造をのぞいてみよう

[【VRM, glTF】3Dアバターファイルフォーマット "VRM" の構造をのぞいてみよう - すぎしーのXRと3DCG](https://tsgcpp.hateblo.jp/entry/vrm_file_format_beginning)

3Dアバターファイルフォーマットとして利用されるVRMのデータ構造について、実データーを眺めつつ解説しています。

### 2023年末版のFBXエクスポート設定

[2023年末版のFBXエクスポート設定 #Unity - Qiita](https://qiita.com/called_D/items/40590218b6a79a4aa574)

Blenderで制作したモデルをUnityに取り込む際のBlender側のエクスポート設定とUnity側のインポート設定についてそれぞれ考察しています。

### 複数の Spine アニメーションを動的に合成する

[複数の Spine アニメーションを動的に合成する](https://zenn.dev/happy_elements/articles/ae73a5d8c2091a)

Spineの複数アニメーションの動的合成を、レンダラーを複数に分割することで実現する方法について紹介しています。

### Unityからスプレッドシートに直接アクセスしてデータ調整を高速化できた話

[Unityからスプレッドシートに直接アクセスしてデータ調整を高速化できた話](https://zenn.dev/happy_elements/articles/4bf35bd1690052)

UnityからGoogleスプレッドシートのAPIを認証付きでアクセスしてデーターを取得する方法について解説しています。

### RiderでSource Generatorを使用したツールを作成するフローを紹介

[RiderでSource Generatorを使用したツールを作成するフローを紹介 #C# - Qiita](https://qiita.com/Tanakancolle/items/b12c48e0cf0fe78af2ad)

Rider 2023.2から導入されたSource Generatorテンプレートをベースに、特定の属性がついたメンバー変数にゲッターを生成するSource Generatorのと単体テストの実装を紹介しています。

### Source Generator の使いみち

[【Unity】Source Generator の使いみち](https://zenn.dev/ruccho/articles/05e08bd6ec10af)

Unity上でのSource Generatorの活用事例について紹介しています。

### Poly Spatialの始め方 0.6.3版

[[Vision Pro] Poly Spatialの始め方 0.6.3版 [Unity] #Unity - Qiita](https://qiita.com/afjk/items/74c35b254f31a0e3646b)

UnityでVision Pro向けのアプリケーションを開発する際の情報をまとめています。

### Unityでプレイアブル広告を作る方法【Luna Playable Plugin】

[Unityでプレイアブル広告を作る方法【Luna Playable Plugin】 #Unity - Qiita](https://qiita.com/kazuki_kuriyama/items/dc2d40c4fd1559e89e9b)

プレイアブル広告を作ることのできるLuna社の提供する[Playable Plugin](https://docs.lunalabs.io/docs/playable/overview)について、その概要からデプロイ可能なプラットフォーム、プレイアブルの制約やSDKの各種制限、開発の流れについてそれぞれ解説しています。

### Unityにテクスチャなどインポートする時に最低限の設定を自動化する

[Unityにテクスチャなどインポートする時に最低限の設定を自動化する #Unity - Qiita](https://qiita.com/ppengotsu/items/7d1808fc01ff50ea35ec)

Unityでテクスチャやオーディオを読み込んだ時に、特定のディレクトリごとにインポート設定を自動化するエディター拡張の実装を紹介しています。

### HLSLでもオブジェクト指向プログラミングが出来るですよ！

[HLSLでもオブジェクト指向プログラミングが出来るですよ！ #Unity - Qiita](https://qiita.com/up-hash/items/0d35260eb09bfc803c9d)

HLSLで利用できるクラスの継承やインターフェイスの実装とその活用について紹介しています。

### HLSLでデリゲート（コールバック）を実現する

[HLSLでデリゲート（コールバック）を実現する #Unity - Qiita](https://qiita.com/up-hash/items/74dd12595b9ec27be51a)

HLSLでデリゲートを実装する方法について紹介しています。

### Cinemachine と Input System で作るお手軽 TPS カメラ

[【Unity】Cinemachine と Input System で作るお手軽 TPS カメラ #Unity - Qiita](https://qiita.com/neusstudio/items/28076c0d0b8abb949366)

TPSカメラを実装するためのCinemachineのVirtual Cameraの各種設定や入力を受け取るためのInput Systemの設定について紹介しています。

### FileStreamの正体🤔（UnityAndroidの場合）

[FileStreamの正体🤔（UnityAndroidの場合） #Android - Qiita](https://qiita.com/up-hash/items/f5fe09fc789e02434590)

Androidプラットフォーム下での`FileStream`の実装について、Unityの[monoフォークの実装](https://github.com/Unity-Technologies/mono/blob/2022.3.15f1/mcs/class/corlib/System.IO/FileStream.cs#L235-L242)を追いつつ紹介しています。

### Jenkins+PythonでUnityの自動ビルド&自動デプロイ

[Jenkins+PythonでUnityの自動ビルド&自動デプロイ](https://zenn.dev/kd_gamegikenblg/articles/c8b89f317d9cee)

Unityで制作したアプリをJenkinsを用いて自動ビルドする方法を紹介しています。

Unityをコマンドライン経由でビルドするためのエディター拡張から、エディターをJenkins上で叩くためのPythonスクリプト、成果物をGoogle Drive上にアップロードするためのPythonスクリプトやJenkinsの設定方法についてそれぞれ解説しています。

### TDDでゲームを作ってみる REALITY Advent Calendar 2023

[TDDでゲームを作ってみる REALITY Advent Calendar 2023｜REALITY](https://note.com/reality_eng/n/nfcfa3bb9093b)

テスト駆動にゲームを制作する方法について紹介しています。

### C#のMono.Cecil(自分が)入門

[C#のMono.Cecil(自分が)入門](https://zenn.dev/kd_gamegikenblg/articles/e4cefb3b49f0e3)

Unityの`ILPostProcessor`とMono.Cecilを用いて、UnityのC#コンパイル時のメソッドの書き換えを実現する方法を紹介しています。

### ILPostProcessorによる定数書き換え入門

[ILPostProcessorによる定数書き換え入門](https://zenn.dev/kozu_pid/articles/bd62d6f9b330e5)

`ILPostProcessor` とMono.Cecilを用いて、コード上に定義されている定数を書き換える方法について紹介しています。

### UnityのNetcode for GameObjectsでマルチプレイヤーゲームを開発したときの話

[UnityのNetcode for GameObjectsでマルチプレイヤーゲームを開発したときの話](https://zenn.dev/kd_gamegikenblg/articles/eeb76c3996fef3)

UnityのNetcode for GameObjects（NGO）を用いたマルチプレイヤーゲームの開発について、NGOの概要や使い方、デバッグ時の注意点、開発効率化のための独自のパッチになどをそれぞれ紹介しています。

### TypeCacheを用いて"特定の属性でマークされている型やメソッド" や "特定のクラスやインターフェイスから派生する型"に素早くアクセスする

[【Unity】TypeCacheを用いて"特定の属性でマークされている型やメソッド" や "特定のクラスやインターフェイスから派生する型"に素早くアクセスする - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2023/12/08/120000)

Unityの `TypeCache` から特定の属性がついたメンバーや、特定のインターフェイスや基底クラスから派生する型へアクセスする方法を紹介しています。

### UI Toolkitの公式ドキュメントのGetting Startedをやったメモ

[【Unity】UI Toolkitの公式ドキュメントのGetting Startedをやったメモ - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2023/12/07/120000)

UI Toolkitの[公式ドキュメント](https://docs.unity3d.com/ja/2023.2/Manual/UIE-simple-ui-toolkit-workflow.html)を参考に、簡単なエディターウィンドウの実装を紹介しています。

### Riderでスマートにコード整理！File Layoutでクラスメンバーを順序正しく

[Riderでスマートにコード整理！File Layoutでクラスメンバーを順序正しく #Unity - Qiita](https://qiita.com/ducchy/items/d73f05b2ef5a2150298e)

RiderのFile Layout機能を用いて、フォーマット時のメンバーの並び順を調整する方法を紹介しています。

### Unityで使えるメモリ系の型（NativeArray/List/Memory/Span/etc.）

[Unityで使えるメモリ系の型（NativeArray/List/Memory/Span/etc.） #C# - Qiita](https://qiita.com/up-hash/items/f1b67a46b00d61c2ad20)

Unityで使える型の内、連続したメモリ領域を扱う配列や`Span<T>`、`Memory<T>`、`MemoryManager<T>`、`NativeArray<T>`などの特徴や使い方、型の相互変換の方法についてそれぞれ紹介しています。

### Unityで口パクをつけられるプラグイン「uLipSync」のご紹介

[Unityで口パクをつけられるプラグイン「uLipSync」のご紹介](https://zenn.dev/aielement/articles/d8db96cfaa62f6)

[uLipSync](https://github.com/hecomi/uLipSync)のノベルゲームでの活用事例を紹介しています。

### Bakeryでライトベイクをしてみよう【Bakeryでするライトベイク入門編】

[Bakeryでライトベイクをしてみよう【Bakeryでするライトベイク入門編】](https://zenn.dev/dolphiiiin/articles/70f78a10a20f2e)

GPU Lightmaperアセット[Bakery](https://assetstore.unity.com/packages/tools/level-design/bakery-gpu-lightmapper-122218?locale=ja-JP)を用いたライトベイクについて紹介しています。

### UnityのTimelineのカスタムクリップの出入りに合わせて気軽に処理をするはずだったが落とし穴があった件

[UnityのTimelineのカスタムクリップの出入りに合わせて気軽に処理をするはずだったが落とし穴があった件｜Colorful Palette](https://media.colorfulpalette.co.jp/n/n06b714e3dda1)

`MixerBehaviour` を用いて、カスタムクリップの開始と終了を検知する方法を紹介しています。

### PICO4で動作しないUnityの機能とその対応策の紹介

[PICO4で動作しないUnityの機能とその対応策の紹介 #Unity - Qiita](https://qiita.com/segur/items/f4265350c1419aedc9af)

PICO4で実験的に動作しなかったUnityでのおもにグラフィックス面での機能とその対策について紹介しています。

### Enumを継承したい！と思ったときに僕らが求めているもの

[Enumを継承したい！と思ったときに僕らが求めているもの #C# - Qiita](https://qiita.com/amenone_games/items/3a4425eb058c89a5d618)

同質なEnumをまとめて扱うような構造体の実装と、この構造体を用いたメソッドの共通化について紹介しています。

### ルックアップテーブルの効果

[【小ネタ】ルックアップテーブルの効果 #Unity - Qiita](https://qiita.com/nissy_gp/items/5167edcd04ecc595277a)

ルックアップテーブルのC#スクリプト上での活用とパフォーマンスについて紹介しています。

### Draw indirect argument buffer too small. Must be at least XX bytes というエラーが出たときの対処法

[【Unity】Draw indirect argument buffer too small. Must be at least XX bytes というエラーが出たときの対処法【ConputeShader】 #C# - Qiita](https://qiita.com/Cova8bitdot/items/f0012f8661b72397ade6)

ComputeShaderで「Draw indirect argument buffer too small. Must be at least XX bytes」というエラーが出た際の対処方法を紹介しています。
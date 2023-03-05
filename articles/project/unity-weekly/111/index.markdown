---
type: "unity-weekly"
title: "Unity Weekly 111"
description: "2023/03/06週のUnity Weeklyです。FindObjectsByType、Dynamic Addressables Network Prefab（NetCode Bitesize Samples）、DeNA TechCon 2023などを取り上げています。"
tags: ["Unity Weekly","Unity"]
date: "2023-03-06T00:00:01"

---

## Unity Officials

### 【Unity】FindObjectsOfTypeが高速化！？ FindObjects"By"Typeの紹介

[【Unity】FindObjectsOfTypeが高速化！？ FindObjects"By"Typeの紹介 - YouTube](https://www.youtube.com/watch?v=QJcU7jO5HZ8)

FindObjectsOfTypeより高速なFindObjectsByTypeの紹介と、その理由としてインスタンスIDによるソートの省略について解説しています。

また、FindObjectsOfTypeがUnity2023で非推奨となる点についても言及しています。

### Dynamic Addressables Network Prefabs (com.unity.multiplayer.samples.bitesize v1.2.1)

[Release v1.2.0 · Unity-Technologies/com.unity.multiplayer.samples.bitesize](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/releases/tag/v1.2.0)

NetCodeのBitesize Samplesに、Dynamic Addressables Network Prefabsが追加されました。

ランタイムで動的にAddressablesで管理されたプレハブのロードを同期するサンプルです。デバッグのための意図的な遅延やタイムアウトのテストも、設定を介してかんたんに行えるようになっています。

## Slides

### DeNA TechCon 2023

DeNA主催の技術カンファレンスが2023/03/02に開催されました。Unityに関する4件の発表がありました。

* [grpc-webによる内製ゲームサーバ基盤TakashoのUnity WebGL対応 | DeNA TechCon2023](https://techcon2023.dena.dev/session/session16/)
    * WebGLビルドのアプリケーションにおいてgRPC通信を動作させるために採用したgrpc-webと、grpc-webを動作させるためにとったUnityWebRequestによる独自実装とその背景、実装にあたって考慮した点などについて解説しています。
* [機械学習を用いたIRIAM顔認識機能の改善の取り組み | DeNA TechCon2023](https://techcon2023.dena.dev/session/session9/)
    * IRIAMの顔認識機能を改善するための取り組みと独自開発した表情認識モジュール「SuperCV」の開発について、Unityへの組み込み時の工夫ポイントとして「Shader/SSBOのよるCPU・GPU間のリソース同期の削減」や「Unity.Mathematicsによる処理速度の高速化」、「NativeArrayによるGC.Allocの抑制」などについてそれぞれ紹介しています。
* [TDDで作るRoslynアナライザー | DeNA TechCon2023](https://techcon2023.dena.dev/session/session3/)
    * DeNAが開発するDena.CodeAnalysis.Testingを用いて、TDDでRoslynAnalyzerを実装する方法について紹介しています。
* [ゲーム開発のJenkins整備から横断SREチームが誕生するまで | DeNA TechCon2023](https://techcon2023.dena.dev/session/session4/)
    * DeNAのプロジェクト横断したSREチームが取り組んでいるゲーム開発におけるCI/CD運用や開発効率化事例として、「JenkinsビルドマシンとしてMacStadiumの活用」・「BigQueryによるビルド情報の分析基盤の構築」・「Jenkinsの代わりにGitHub Actionsを活用する取り組み」について、それぞれ紹介しています。

## Articles

### C#からC/C++のネイティブプラグインを使用するときに注意すること

[C#からC/C++のネイティブプラグインを使用するときに注意すること - Synamon’s Engineer blog](https://synamon.hatenablog.com/entry/unity_cs_bridge)

C#からWasmerのC/C++ライブラリのブリッジを行う上で注意すべき、C#とネイティブプラグイン間のデータ受け渡しの際のマーシャリングやネイティブオブジェクトの生成と破棄、wasm特有の所有権の扱い、SafeHandlerによるネイティブに確保したアンマネージド領域の確実な破棄方法などについてまとめています。

### GitHub Actionsのセルフホストランナーでジョブごとにディレクトリを分離する方法

[GitHub Actionsのセルフホストランナーでジョブごとにディレクトリを分離する方法 - DeNA Testing Blog](https://swet.dena.com/entry/2023/02/28/100000)

GitHub Actionsのセルフホストランナーでジョブごとにディレクトリを分離するための方法と、分離をかんたんに行うための [DeNA/setup-job-workspace-action](https://github.com/DeNA/setup-job-workspace-action) について紹介しています。

### テクニカルアーティストのインターン生がコライダー可視化ツールを作った話

[テクニカルアーティストのインターン生がコライダー可視化ツールを作った話](https://technote.qualiarts.jp/article/53)

URPのRenderFeatureによるゲームビュー上でのランタイムなコリジョンビジュアライザーの実装を紹介しています。

### 国土交通省が日本全国の3D都市モデルのアセットをUnity Asset Storeで配信。

[国土交通省が日本全国の3D都市モデルのアセットをUnity Asset Storeで配信。価格は無料](https://www.4gamer.net/games/210/G021014/20230228023/)

国土交通省がUnity Asset Storeに全国の都市モデルアセットを公開しました。アセットはPLATEAU SDK for Unityから利用できます。

### ガラス風の表現をつくる──Unityのマテリアルを調整する

[ガラス風の表現をつくる──Unityのマテリアルを調整する - Cluster Creators Guide](https://creator.cluster.mu/2023/02/27/grass-material/)

ガラス風の見た目を作るためのマテリアル設定と、Reflection Probeを用いた周囲の風景の映り込みやノーマルマップを指定したガラスの質感表現などについてまとめています。

### 【URP】LUT (ルックアップテーブル) 

[【Unity】【URP】LUT (ルックアップテーブル) - シェーダーTips](https://ny-program.hatenablog.com/entry/2023/02/28/191656)

URPのカラーグレーディングの概要と内部で利用されているルックアップテーブルテクスチャについて、LUTを用いたポストエフェクトの実装についてシェーダーとスクリプトそれぞれ解説しています。

### C#でDictionaryのキーに2つのintを使いたい場合の性能比較 (ただしキーの範囲は[-32768, 32767])

[C#でDictionaryのキーに2つのintを使いたい場合の性能比較 (ただしキーの範囲は[-32768, 32767])](https://zenn.dev/zubu/articles/f594afaa3b6051)

2つの`int`から得られるハッシュコードとその衝突率による`Dictionary`の性能について紹介しています。また、`ValueTuple` や`HashCode`を使用した方法なども合わせて触れています。

### Minecomb

[Minecomb](https://catlikecoding.com/unity/tutorials/prototypes/minecomb/)

マインスイーパーライクなゲームの実装を、そのゲームロジックの実装から見た目を整えるためのエフェクトの実装含めて解説しています。

### Input Systemの同時押しを排他制御する

[【Unity】Input Systemの同時押しを排他制御する](https://nekojara.city/unity-input-system-exclusive-modifier)

新しいInput Systemによる同時押しの排他制御を、1.4.0で導入された排他制御の有効化設定による実装と、それ以前のバージョンでカスタムComposite Bindingを用いた実装の2パターン紹介しています。

### Nintedo SwitchのJoy-Conを使う

* [【Unity】3分でセットアップ！Nintedo SwitchのJoy-Conを使う - おもちゃラボ](https://nn-hokuson.hatenablog.com/entry/2023/02/27/164608)
* [【Unity】macOSでもJoyConLibが使えるようにする - おもちゃラボ](https://nn-hokuson.hatenablog.com/entry/2023/03/03/062301)

[JoyConLib](https://github.com/Looking-Glass/JoyconLib)を用いてNintendo SwitchのJoy-ConをUnityの入力として利用する方法を紹介しています。

また、このライブラリをM1 macOS上でも確認する方について合わせて解説しています。

### SourceGeneratorを実装してUnityで動作させるまでやってみた

[【Unity】SourceGeneratorを実装してUnityで動作させるまでやってみた(Unity2021.3以上で利用可) - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2023/03/02/120000)

Unityで動作するSource Generatorの作成方法とUnity上での設定方法について解説しています。

### GPT-3とVoiceVoxを活用してAIエージェントを作る！

[GPT-3とVoiceVoxを活用してAIエージェントを作る！【Unity】｜ねぎぽよし｜note](https://note.com/negipoyoc/n/n081e25f5ee9e)

マイクによる音声を入力とし、Windowsの音声入力でテキスト化し、その質問テキストをOpenAI APIに投げて回答をテキストで受け取り、そのテキストをVoiceVoxに投げることでAIエージェントを実現する方法について、その実装を紹介しています。

### LODクロスフェーディングでモデル切替時にフェードで自然に補完

[LODクロスフェーディングでモデル切替時にフェードで自然に補完【Unity】【URP】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/LOD_CrossFade)

Unity2022.2からURPで利用できるLODのクロスフェード（LODのメッシュを滑らかにを切り替える機能）の設定方法についてまとめています。

### GIFをサポートするようにできる「Unity-GifDecoder」の使い方

[【Unity】GIFをサポートするようにできる「Unity-GifDecoder」の使い方(Streamを扱えるので便利) - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2023/02/27/120000)

Unityでgif動画を扱えるUnity-GifDecodrerについて利用方法と、類似ライブラリとの比較、uGUIのImageコンポーネントを介してgif動画を再生する方法について紹介しています。

### 【Unity,UI Elements】ツールバーにボタンを追加するエディター拡張

[【Unity,UI Elements】ツールバーにボタンを追加するエディター拡張 - Qiita](https://qiita.com/nattuhan/items/ee47b29ca6968b7f3e21)

Unityエディターのツールバー部分を拡張し、独自のUIをUIElementsをもちいて配置する方法について紹介しています。

### Console ウィンドウで等幅フォントを使用する方法

[【Unity】Console ウィンドウで等幅フォントを使用する方法 - コガネブログ](https://baba-s.hatenablog.com/entry/2023/03/02/090000?utm_source=feed)

コンソールウインドウを等幅フォントで表示する方法を紹介しています。

## Repositories

### csbindgen

[Cysharp/csbindgen: Generate C# FFI from Rust for automatically brings native code and C native library to .NET and Unity.](https://github.com/Cysharp/csbindgen/)

RustからC# FFIを生成し、ネイティブコードとCネイティブライブラリを.NETとUnityに自動的に生成するためのライブラリ。

### FFTConvolutionBloom

[AKGWSB/FFTConvolutionBloom: Bloom using FFT to accelerate convolution, with Unity URP](https://github.com/AKGWSB/FFTConvolutionBloom)

FFTを利用したBloomの高速化実装。

### UniTask Supplement

[su10/UniTask-Supplement: Supplemental codes for UniTask.](https://github.com/su10/UniTask-Supplement)

UniTaskのCancellationTokenを渡す記述を簡素にするための補助コード。
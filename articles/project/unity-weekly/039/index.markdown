---
type: "unity-weekly"
title: "Welcome Weta Digital! - Unity Weekly #039"
date: "2021-11-15T09:00:00+09:00"
draft: false
tags: ["Unity", "Unity Weekly"]

---

# Unity Official

## ようこそ Weta Digital！

![](./0.png)

[ようこそ Weta Digital！ | Unity Blog](https://blog.unity.com/ja/news/welcome-weta-digital)

Unityは11/10にWeta Digital のアーティスト用ツール、コアパイプライン、知的財産、そして世界的にも評価されるエンジニアリング人材買収の最終合意に達したことを発表しました。この買収では、Weta Digital独自の(VFX)ツールや技術を、クリエイターやアーティストに提供することを目的としているとのことです。

Weta Digitalの開発するツールは「アバター」や「ロード・オブ・ザ・リング」など数々の受賞歴で知られる作品で活用されています。

## コンソール機向けゲームのグラフィックス最適化に関する専門家からのヒント集

![](./1.png)

[コンソール機向けゲームのグラフィックス最適化に関する専門家からのヒント集 | Unity Blog](https://blog.unity.com/ja/technology/expert-tips-on-optimizing-your-game-graphics-for-consoles)

主にコンソール機やPCなどのハイエンドグラフィックスを最適化するためのヒントを、「バッチ数」と「避けるべきシェーダー」、「レンダリングオプション」の観点で紹介しています。

オクルージョンカリングやGPUインスタンシング、SPR Batcherによるバッチ数やシャドウマップのサイズや、コンソール機やPC特有のテッセレーションシェーダーやジオメトリシェーダーやGPUのAsync Computeなどについても触れています。

eBookではグラフィックス以外にもコードアーキテクチャやプロジェクト設定、アセット、UI、オーディオ、アニメーション、物理、ワークフローも取り扱っていて、[こちらから](https://resources.unity.com/games/performance-optimization-e-book-console-pc)ダウンロードができます。

## HDRP と Unity 2021.2 で本物のボリューメトリッククラウドを体験しよう

![](./2.png)

[HDRP と Unity 2021.2 で本物のボリューメトリッククラウドを体験しよう | Unity Blog](https://blog.unity.com/ja/technology/experience-true-volumetric-clouds-with-hdrp-unity-20212)

High Definition Render Pipeline （HDPR）とUnity 2021.2から[利用できるボリューメトリッククラウドによる新しい雲システム](https://docs.unity3d.com/Packages/com.unity.render-pipelines.high-definition@12.1/manual/Override-Volumetric-Clouds.html)について、雲のレンダリングについての歴史から、HDPRでのボリューメトリッククラウドの設定方法、現状の限界と今後の改善点についてまとめています。

## 機能プレビュー：Unity のマルチプレイヤーネットワーキングに関する新機能

![](./3.png)

[Unity のマルチプレイヤーネットワーキングに関する新機能 | Unity Blog](https://blog.unity.com/ja/games/feature-preview-whats-new-for-multiplayer-networking-in-unity)

Unityが2021/10/21にリリースした新機能と、今後の予定について紹介しています。

リリースされた新機能は下記のとおりです。

- Netcode for GameObjects 1.0.0-pre
    - [カスタムデータ型のシリアライズ対応](https://docs-multiplayer.unity3d.com/docs/advanced-topics/custom-serialization/index.html)
    - [シーン管理改善](https://docs-multiplayer.unity3d.com/docs/basics/scene-management/index.html)（追加シーンの読み込みワークフローサポートを含む）
    - [NetworkAnimator](https://docs-multiplayer.unity3d.com/docs/components/networkanimator/index.html)（Animatorの同期）
    - [補間を含む NetworkTransform のサポート](https://docs-multiplayer.unity3d.com/docs/components/networktransform/index.html)（Transformの同期）
    - [NetworkObject Parentingのサポート](https://docs-multiplayer.unity3d.com/docs/advanced-topics/networkobject-parenting/index.html)
- Unity Transport UTP 1.0.0-pre
    - UDPのラッパーでDOTSとGameObjectベースの両方のNetcodeに対応。今回はDTLSとUnity Relayプロトコルに対応。
- Unity Transport Adapter for GameObjects 1.0.0-pre
    - Netcode for GameObjectsをUnity Transportで動作させるためのパッケージ。
- ネットワークプロファイラー
    - Netcode for GameObjectsのネットワークアクティビティの分析ツール。Unity標準のプロファイラーに新しいモジュールを追加する形で実装される。
- Relay（ベータ版）
    - 専用サーバーを必要としない（ホストプレイヤーがリッスンサーバーとして中継サーバーを作成できる）マルチプレイヤーゲームソリューション。
- Lobby（ベータ版）
    - ゲームセッション前や途中でプレイヤーをつなげるソリューション。

## Pixyz 2021.1：よりパワフルな 3D データ前処理を実現する新製品・新機能

![](./5.png)

[Pixyz 2021.1：よりパワフルな 3D データ前処理を実現する新製品・新機能 | Unity Blog](https://blog.unity.com/ja/manufacturing/pixyz-20211-more-powerful-3d-data-prep-with-new-products-and-features)

[Unityファミリーの一員](https://blog.unity.com/ja/manufacturing/pixyz-software-joins-unity)であるPixyzが2021.1バージョンでリリースした新機能や新製品の中から、「 Scenario Processor」と「Pixyz Loader for Unity」、「Pixyz Review」についてそれぞれ紹介しています。

Pixyz Scenario Processorは3Dデータ前処理の自動化ツールで、CADファイルをUnityのアセットバンドルに変換したり、CADデータを特定のポリゴンターゲットをもつメッシュに変換したり、点群を最適化できます。

Pixyz Loader Unityを用いるとCADファイルをランタイムやエディタで読み込んで、Unity上で描画できるようになります。

また、 Pixyz Plugin for Unityにアップデートが行われ、「Decimate to target function」と「Impostor generator」が新機能として追加されました。「Impostor generator」の生成するインポスターは、オブジェクトの交差やGPUインスタン寝具、影の投影と受け取り、LODクロスフェードにも対応しています。

## 小規模な協力型マルチプレイヤーゲームの開発における 8 つの要素：『Breakwaters』の場合

![](./6.png)

[小規模な協力型マルチプレイヤーゲームの開発における 8 つの要素 | Unity Blog](https://blog.unity.com/ja/games/the-8-factors-of-multiplayer-gamedev-in-small-scale-cooperative-games-ft-breakwaters)

この記事では、マルチプレイヤーゲーム開発において考慮すべき8つの要素と、[Soaring Pixels Games](https://twitter.com/GamesSoaring)社の近日発売予定のインディーゲームである「[Breakwaters](https://store.steampowered.com/app/1203180/Breakwaters/)」においてそれらの要素をどう適用したかについて解説しています。

また小規模な協力型ゲームにおいて利用可能なUnity製品としてNetcode for GameObjectsとRelay、Lobbyについてそれぞれ紹介しています。

## DLSS が『Naraka: Bladepoint』の美しい世界に与えた影響

![](./7.png)

[DLSS が『Naraka: Bladepoint』の美しい世界に与えた影響 | Unity Blog](https://blog.unity.com/ja/games/the-impact-of-dlss-naraka-bladepoint)

24 Entertainment 社が開発するバトルロワイヤルゲーム『Naraka: Bladepoint』での、NVIDIA社のDeep Learning Super Sampling（DLSS）の導入事例について紹介しています。

ポストプロセッシング前までを低解像度で描画してDLSSを用いて高解像度化することでピクセルシェーダーなどの計算のコストを抑えることで、フレームレートを落とすことなく4K解像度を実現しているそうです。また、ネイティブの4Kのレンダリング結果と比べてほぼ見分けのつかないディティールを達成しています。

「Naraka: Bladepoint」でのDLSSの入力やジッターオフセット、モーションベクターの算出方法や実際のレンダリングパイプライン、ミップマップの利用、カメラキャッシュについて紹介しています。

また、Unity 2021.2でのDLSSでの利用方法についてもふれています。

## ゲーム開発を最適化する9つの方法

![](./4.png)

[ゲーム開発を最適化する9つの方法 | Unity for Pro](https://forpro.unity3d.jp/unity_pro_tips/2021/11/02/2827/)

Unityのサポートエンジニアチームによる、ゲーム開発を最適化する方法を下記の９つの観点から紹介しています。

- 計画
- 開発とワークフロー
- プロファイリング
- アセット
- プログラミングとコードアーキテクチャ
- 物理演算
- アニメーション
- GPUパフォーマンス
- UI


## ゲームを台無しにするミスを避けるための5つのポイント

![](./8.png)

[ゲームを台無しにするミスを避けるための5つのポイント | Unity for Pro](https://forpro.unity3d.jp/unity_pro_tips/2021/11/02/2817/)

ゲーム開発において起こりがちな、回避可能なミスを５項目紹介し、それを回避するための方法について紹介しています。

- 不適切なプランニング
- 正しいプラットフォームをターゲットとしていない
- 社内のリソースを無駄にしており、かつ複雑なワークフローを使用している
- 不十分なプロファイリング
- オーバーエンジニアリング

# Articles

## Unity Androidのネイティブプラグイン（C++）でOpenGLのテクスチャデータをNativeArrayにコピーする

[Unity Androidのネイティブプラグイン（C++）でOpenGLのテクスチャデータをNativeArrayにコピーする - e.blog](https://edom18.hateblo.jp/entry/2021/11/06/200037)

Unityの提供する低レベルネイティブプラグインインターフェイスを介して、レンダーテクスチャをAndroidネイティブプラグイン側でOpenGLのテクスチャポインタとして受け取って、ネイティブプラグインでNativeArrayとしてコピーし、それをC#から参照する方法について紹介しています。

低レベルネイティブプラグインインターフェイスによってUnityのグラフィックスに関するデータをネイティブプラグインで扱う方法や、渡されたテクスチャのポインタからデータをOpenGLのコマンドを用いてデータを読み出す方法とNativeArrayへのコピー方法について解説しています。

## ZenjectからVContainerに移行する際に気をつけること

[ZenjectからVContainerに移行する際に気をつけること - imog](https://adarapata.hatenablog.com/entry/2021/11/12/010317)

ZenjectからVContainerに乗り換える際の基本的な流れからVContainerにない機能の紹介、アセット内のZenjectBinding利用の調べ方、シーン内の `Inject` 属性のついたコンポーネントの探し方について説明しています。

## ScriptableRenderPipeline(SRP)でシャドウマップを自作する ～ディレクショナルライト編～

![](./9.png)

[ScriptableRenderPipeline(SRP)でシャドウマップを自作する ～ディレクショナルライト編～ - Qiita](https://qiita.com/gamu/items/7558fbc0be41913bbba5)

独自のScriptableRenderPipeline（SRP）を用いてシャドウマップを自作する方法を紹介しています。

記事はシリーズ形式となっていて、独自のSRP内でUnityのディレクショナルライトを取得して、その情報を元にシャドウマップによって影を描画する方法について解説しています。前回の記事は下記リンクとなっています。

[ScriptableRenderPipeline(SRP)でシャドウマップを自作する ～準備編～ - Qiita](https://qiita.com/gamu/items/214637ac068f65f5862d)

## Imitation Learning for 2D platformer with Unity ML-Agents

![](./10.png)

[Imitation Learning for 2D platformer with Unity ML-Agents - Pav Creations](https://pavcreations.com/imitation-learning-for-2d-platformer-with-unity-ml-agents/)

ML-Agentsを用いて2DプラットフォームのゲームImitation Learning（模倣学習）を行って、AIにシンプルなゲームの攻略方法を学習させる方法について紹介しています。

Imitation Learningのコンセプトから、AIを訓練させるための環境の構築、ML-AgentsにおけるAgentの実装方法、Imitation Learningのためのデモの記録方法とハイパーパラメータについての説明、トレーニングの実行方法について解説しています。

## Niantic Lightship ARDK

[Niantic Lightship](https://lightship.dev/)

Niantic社が11/9に、AR向けのSDKである「Niantic Lightship ARDK」の提供を開始しました。

下記記事では、サンプルプロジェクトの動かし方や、ARDKにおける注意点についてそれぞれ紹介されています。

[Lightship ARDK のサンプルプロジェクトを動かしてみる - Qiita](https://qiita.com/nekoharuyuki/items/54b0e91c1b69446e2684)

[Niantic Lightship ARDK の注意点ピックアップ - Qiita](https://qiita.com/FumiyaHr/items/19d02ef1bb202c6b81b6)

## 入力を記録してリプレイできるInputEventTraceの使い方【InputSystem】

![](./15.gif)

[【Unity】入力を記録してリプレイできるInputEventTraceの使い方【InputSystem】 - Qiita](https://qiita.com/makihiro_dev/items/ca739b73908c56e2a835)

Unityの新しいInputSystemの[InputEventTrace](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.1/api/UnityEngine.InputSystem.LowLevel.InputEventTrace.html)を用いてユーザー入力を記録しておき、記録された情報を再生する方法について紹介しています。

`InputEventTrace` の生成から入力の記録方法、 `ReplayController` を用いた記録情報の再生方法、記録情報をファイル書き込み・読み込みする方法についてそれぞれ解説しています。

## 独自拡張子のファイルをScripted ImporterでアセットにしてRiderで拡張子を紐付けて編集するまでの流れ

![](./11.png)

[【Unity】独自拡張子のファイルをScripted ImporterでアセットにしてRiderで拡張子を紐付けて編集するまでの流れ - LIGHT11](https://light11.hatenadiary.com/entry/2021/11/10/195648)

`ScriptedImporter` を用いて、Unityのサポートしない拡張子をUnityアセットとしてインポートする方法と、独自拡張子のファイルをUnity上で開いたときのエディタをRiderとして紐付ける方法について紹介しています。

## Netcode for GameObjects (NGO) 1.0.0-pre.2 リリースノート

![](./12.png)

[Netcode for GameObjects (NGO) 1.0.0-pre.2 リリースノート - デニッキ！](https://xrdnk.hateblo.jp/entry/2021/11/06/000000)

Netcode for GameObject 1.0.0-pre.2 のリリースノートを、日本語に翻訳して提供されています。

## Decals and Stickers in Unity Shader Graph and URP

![](./13.png)

[Decals and Stickers in Unity Shader Graph and URP](https://danielilett.com/2021-11-06-tut5-20-decals/)

Universal Render Pipeline（URP）とShader Graphを用いてデカールを実装し、オブジェクトにテクスチャを貼り付ける方法を紹介しています。

デカールの理論とShader Graphでデカールを実装する方法についてスクリーンショット付きで解説しています。

## URPのParticleシェーダでFlip-Book Blendingを使う

![](./20210831111910.gif)

[【Unity】URPのParticleシェーダでFlip-Book Blendingを使う - LIGHT11](https://light11.hatenadiary.com/entry/2021/11/09/195049)

この記事では、URPのパーティクルシェーダーで利用できるFlip-Book Blendingの利用方法について解説しています。

Flip-Book Blendingの説明から基本的な利用方法とブレンド方法、GPUインスタンシングの適用方法についてそれぞれ説明しています。

## Varjo XR-3を使ってハンドトラッキングを試してみる(MRTK編)

![](./14.png)

[Varjo XR-3を使ってハンドトラッキングを試してみる(MRTK編) - Synamon’s Engineer blog](https://synamon.hatenablog.com/entry/2021/11/08/190000)

Varjo XR-3でのハンドトラッキングを、Ultraleap SDKと [Microsoft Mixed Reality Toolkit（MRTK）](https://github.com/Microsoft/MixedRealityToolkit-Unity/releases)を用いて行う方法について紹介しています。

それぞれのSDKの導入方法から、ハンドトラッキングのための設定方法についてそれぞれ解説しています。

## GoogleDrive上の指定のフォルダ内のファイルをダウンロードする

[[Unity]GoogleDrive上の指定のフォルダ内のファイルをダウンロードする](https://zenn.dev/kurosan/articles/88e125c8e9d943)

[Elringus/UnityGoogleDrive](https://github.com/Elringus/UnityGoogleDrive) というライブラリを用いてUnity上でGoogleDriveを利用する方法について、Google Drive APIの設定方法から、Unityで認証情報を読み取る方法、スクリプト例として「指定フォルダ内のファイル一覧の取得」と「ファイルのダウンロード」をそれぞれ解説しています。

## UnityHubをbetaにアップデートする方法

[UnityHubをbetaにアップデートする方法 - Qiita](https://qiita.com/UbiquitousD/items/96455d200c2c9deda213)

Unity Hubは標準で正式版のリリースしかインストールできませんが、設定を変更してベータバージョンをインストール方法と、任意バージョンのUnity Hubをインストールする方法について紹介しています。

# Tweet

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Unity C# reference source code drop github repo has been not updating for a while (infrastructure snag), but it&#39;s back up! <a href="https://t.co/0zW2VEcJ7Y">https://t.co/0zW2VEcJ7Y</a></p>&mdash; Aras Pranckevičius (@aras_p) <a href="https://twitter.com/aras_p/status/1458036233381335045?ref_src=twsrc%5Etfw">November 9, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

しばらく更新が停止していた UnityCsReference の更新が再開し、2022.1.0.a13までのバージョンがアップロードされました。


---
type: "unity-weekly"
title: "Unity Weekly 134"
description: "2023/08/14週のUnity Weeklyです。Unity Wētā Tools、Brighton Developer Day 2023、Unity Sentis、Compute Shader最適化、テセレーションなどについて取り上げています。"
tags: ["Unity Weekly","Unity"]
date: "2023-08-14T00:00:01"

---

## Unity Officials

### Find out how Unity Wētā Tools is transforming workflows for artists

[The power of Unity Wētā Tools for artists, workflows | Unity Blog](https://blog.unity.com/news/unity-weta-tools-for-artists)

SIGGRAPH 2023の基調講演にてUnity Art ToolsがUnity Wētā Toolsとしてリブランディングされたことが発表されました。

この記事では、Unity Wētā Toolsの各プロダクトの概要を紹介しています。

### Brighton Developer Day 2023

[Official - Brighton Developer Day 2023 - Unity Forum](https://forum.unity.com/threads/brighton-developer-day-2023.1472229/)

2023/09/14にブライトンでUnity Developer Dayが開催されます。下記リンクより参加登録が行なえます。

[Unity Developer Day: Brighton](https://unitydeveloperdaybrighton.splashthat.com/)

### FogBugz end of service

[Official - FogBugz end of service - Unity Forum](https://forum.unity.com/threads/fogbugz-end-of-service.1470227/)

UnityのバグトラッカーのJiraへの移行に際して、いままで利用していたFogBugzのサービス廃止がアナウンスされています。

2023/08/29以降にFogBugzがシャットダウンされると、2022/10/04以前にFogBugz上に提出されたケースはアクセスできなくなります（ただし、この日時点でアクティブであったケースはJiraへ移行済みとのことです）。

## Articles

### 実践！Compute Shaderを最適化してみよう

[【Unity】実践！Compute Shaderを最適化してみよう](https://zenn.dev/ruccho/articles/f9a58ae9a48704)

ガウシアンフィルタのCompute Shader実装を題材に、この実装をPIXでパフォーマンス計測する方法から、計測結果をもとにして共有メモリを利用したテクスチャフェッチの削減やサンプリング回数を間引き、重複した計算の削減、numthreadsの活用などによってCompute Shaderを最適化する方法を解説しています。

### Unity Sentis入門 - PyTorchからONNXを自作して使うまで

[Unity Sentis入門 - PyTorchからONNXを自作して使うまで](https://zenn.dev/meson/articles/basis-of-sentis)

ランタイムにAIを組み込むことのできるUnity Sentisについてその概要の紹介と、手書き文字の識別を題材に、PyTorchによるモデル（ONNX）の作成からUnity Sentisでの利用方法について解説しています。

### 構造体(struct)を完全に理解する

[【C#】構造体(struct)を完全に理解する - Annulus Games](https://annulusgames.com/blog/understanding-struct/)

C#の構造体についてその基礎からメモリ配置、クラスと構造体の違い、構造体を使う上での注意点、C#の標準クラスにおける構造体の利用事例など解説しています。

### テッセレーションについて勉強してみる

[【URP】テッセレーションについて勉強してみる](https://zenn.dev/r_ngtm/articles/urp-tessellation)

簡単なポリゴンの分割を題材に、テッセレーションの概要とテッセレーションシェーダーの実装方法を紹介しています。

### Footstep Audio

[Footstep Audio – Echoes of Somewhere](https://echoesofsomewhere.com/2023/08/11/footstep-audio/)

Unityで足音の実装について、足音のイベントトリガーの仕込み方から足音のバリエーションを出すためのサウンド再生方法、床の属性の検知、空間オーディオとリバーブの制御についてそれぞれ解説しています。

### Unity Entitiesが正式リリースされたのでマルチプレイチュートリアルを弄ってみる

[Unity Entitiesが正式リリースされたのでマルチプレイチュートリアルを弄ってみる - Synamon’s Engineer blog](https://synamon.hatenablog.com/entry/2023/08/11/200946)

NetCode for Entitiesの[サンプルコード](https://docs.unity3d.com/Packages/com.unity.netcode@1.0/manual/networked-cube.html)を触りながら、NetCode for Entitiesによるネットワーク間の位置同期や、シンクライアント（シミュレートされたクライアント）によるプレイヤーとダミー入力の追加方法について説明しています。

### Unityでメモリリーク発生？原因と調査方法について

[【Unity】Unityでメモリリーク発生？原因と調査方法について – 株式会社ロジカルビート](https://logicalbeat.jp/blog/15426/)[

Unityにおけるメモリリークの要因の1つである「Leaked Managed Shell」の概要と、簡単なメモリリークを題材にMemory Profilerを用いたメモリリークの調査方法についてそれぞれ紹介しています。

### 宴を使用したシナリオパート制作フロー

[宴を使用したシナリオパート制作フロー │ Aiming 開発者ブログ](https://developer.aiming-inc.com/%e3%82%b2%e3%83%bc%e3%83%a0/post-8935/)

「かみながしじま～輪廻の巫女～」における、[ビジュアルノベルツール「宴」](https://madnesslabo.net/utage/)を用いたシナリオパートの制作フローを紹介しています。

### Unity 2023.2aからVFX GraphでカスタムHLSLが実行できる話（Custom HLSL Block）

[Unity 2023.2aからVFX GraphでカスタムHLSLが実行できる話（Custom HLSL Block）](https://zenn.dev/drumath2237/articles/4fb51d2ec2e36a)

Unity 2023.2aから利用できるCustom HLSL Blockについて、その概要を紹介しています。

### Unity-HDRPでMMDを動かしつつ、ピンクのシェーダエラーも解消する

[Unity-HDRPでMMDを動かしつつ、ピンクのシェーダエラーも解消する](https://zenn.dev/toshikun/articles/c471f9f7da23fe)

MMDフォーマットのモデルをHDRP上で描画するための方法やマテリアルセットアップのためのエディター拡張、アニメーションの再生方法などについて紹介しています。

また、MMDのカメラモーションをUnityにインポートするためのスクリプトについても言及しています。

### エディタ上でBuilt-inに存在するアイコンのTextureを取得する方法

[【Unity】エディタ上でBuilt-inに存在するアイコンのTextureを取得する方法 - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2023/08/10/120000)

エディターで利用されているビルトインされた標準アイコンを `Texture` として取得する方法について紹介しています。

### MAMPでサーバにした自分のPCからAssetBundleをロードする

[【Unity, Addressables】MAMPでサーバにした自分のPCからAssetBundleをロードする](https://zenn.dev/rintaro_fms9th/articles/ebae2a44649448)

Addressablesによるリモートアセットの読み込みを、ローカルサーバーにホストされたAssetBundleによって検証する方法について紹介しています。

## Repositories

### Unity Image Loader

[IvanMurzak/Unity-ImageLoader: Asynchronous image loading from remote or local destination. It has two layers of configurable cache system: RAM and Disk.](https://github.com/IvanMurzak/Unity-ImageLoader)

非同期な画像ロードと画像キャッシュ実装。キャッシュはメモリキャッシュとディスクキャッシュの2つが用意されている。

### HdrpCustomSky

[keijiro/HdrpCustomSky: custom procedural sky renderers for HDRP](https://github.com/keijiro/HdrpCustomSky)

HDRP用の独自のプロシージャルスカイレンダラー実装。 Unity 2022 LTSに対応。

### Gameframe.GUI

[coryleach/UnityGUI: UGUI Panel Systems for navigation, animation and more](https://github.com/coryleach/UnityGUI)

uGUIのヘルパーライブラリで、ナビゲーションやスタックを実装するパネルシステムやシーン遷移システム、UIパネルの背景をぼかすためのSRPシェーダー実装などが含まれれる。
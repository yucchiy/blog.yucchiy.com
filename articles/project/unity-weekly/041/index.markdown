---
type: "unity-weekly"
title: "Empower great multiplayer experiences with Relay and Lobby - Unity Weekly #041"
date: "2021-11-29T09:00:00+09:00"
draft: false
tags: ["Unity", "Unity Weekly"]

---

# Unity Official

## Relay と Lobby で素晴らしいマルチプレイヤー体験を実現しよう

![](00.png)

[Relay と Lobby で素晴らしいマルチプレイヤー体験を実現しよう | Unity Blog](https://blog.unity.com/ja/games/empower-great-multiplayer-experiences-with-relay-and-lobby)

先日 Unity Gaming Services にリリースされたマルチプレイヤーサービスである Relay と Lobbyについて、それらのサービスの紹介とRelayとLobbyを組み合わせることでプロジェクトにどのような恩恵が受けられるのかについて説明しています。

また、RelayとLobbyの[サンプルプロジェクト](https://github.com/Unity-Technologies/com.unity.services.samples.game-lobby) と [チュートリアル動画](https://www.youtube.com/watch?v=mgIDwkaVAqw) をそれぞれ紹介しています。

# Articles

## 無限ループでフリーズした Unity を復帰させる方法

![](01.png)

[【Unity】無限ループでフリーズした Unity を復帰させる方法 - コガネブログ](https://baba-s.hatenablog.com/entry/2021/11/24/090000)

Unityで無限ループを発生させたときに、無限ループから抜け出す方法を３つ紹介しています。

- Unityの再生をショートカットで一時停止させる 「[Emergency Exit](https://assetstore.unity.com/packages/tools/utilities/emergency-exit-194959)」を利用する方法
- Visual Studioのステートメントを用いてブレイクポイントにかかったときに次に実行する行を強制的に変更することで無限ループを抜ける方法
- Visual Studioのイミディエイトウィンドウを用いてブレイクポイントにかかったときに変数の値を書き換えることで無限ループを抜ける方法

## Unity URPでGPU処理負荷を画面に出してみる

![](02.png)

[Unity URPでGPU処理負荷を画面に出してみる｜黒河優介｜note](https://note.com/wotakuro/n/nf553a3225b71)

Universal Render Pipeline（URP）で上記のような項目別のGPU負荷を表示する機能を実装するための方法について解説しています。

現在利用している `ScriptableRenderer` から `ScriptableRenderPass` の一覧を収集し、そのなかから `ProfilingSampler` の一覧を収集して、サンプラーからそれぞれのパスの負荷を取得して、UIに表示しています。

実装はサンプラーなどが公開されていないためリフレクションを介して行っています。

## The safest way to use DOTS in your MonoBehaviour project

![](03.png)

[The safest way to use DOTS in your MonoBehaviour project – COFFEE BRAIN GAMES](https://coffeebraingames.wordpress.com/2021/11/23/the-safest-way-to-use-dots-in-your-monobehaviour-project/)

この記事では、記事の著者が開発している [Academia : School Simulator](https://store.steampowered.com/app/672630/Academia__School_Simulator/) で行ったMonoBehaviourとオブジェクト指向で実装していたプロジェクトをDOTSベースのシステムに置き換えた経験をもとに、移行方法のプラクティスを紹介しています。

DOTSでは参照型が利用できないため同等の処理をBurstによる最適化の恩恵を受けるようにどのように書き直すのか、また、Transformが絡むようなケースでどのように書き換えるのかについて解説しています。

また、上記の移行の際に問題となる配列の都度コピーのパフォーマンスを改善するために、永続的な配列確保と、オブザーバーパターンを導入してコピーした配列の保守を簡単にする方法についても言及しています。

## Unity Localization を用いた多言語対応の実装方法

![](04.png)

[Unity Localization を用いた多言語対応の実装方法 - デニッキ！](https://xrdnk.hateblo.jp/entry/2021/11/26/090000)

[Unity Localization](https://docs.unity3d.com/Packages/com.unity.localization@1.0/manual/index.html) を用いたアプリケーションの多言語対応の実装方法について解説しています。

Unity Localizationのインストール方法から、ロケールの作成やデフォルトロケールなどの基本的なローカライズの設定方法、ロケールの判定ロジックの説明と `IStartupLocaleSelector` による独自のロケール判定の実装、画像などのアセットや文字列のローカライズ方法についてそれぞれ詳細に解説されています。

## Publish Asset Store UPM package on which LTS version?

[Publish Asset Store UPM package on which LTS version?](https://gametorrahod.com/asset-store-upm-package-lts/)

[Introloop](https://exceed7.com/introloop/)や[native-audio](https://exceed7.com/native-audio/)、[tiny-ambience](https://exceed7.com/tiny-ambience/)開発・メンテナンスしている著者が、Unity Package Manager（UPM)でパッケージを公開する上で、どのLTSバージョンをサポートするべきかについて考えをまとめた記事です。

現状では、すべてのUPM Assetを2019.4 LTSで開発するほうが良いと著者は結論づけていますが、2017および2018LTSをサポートするにあたって、パッケージ管理として欠落しているasmdefの機能を取り上げながら、その理由について解説しています。

また、新しいUnityのバージョン向けに機能を提供する方法として、 `package.json` に定義できる Version Definitions についても言及しています。

## Better Collider Generation with Asset Processors

![](05.png)

[Better Collider Generation with Asset Processors – Bronson Zgeb](https://bronsonzgeb.com/index.php/2021/11/27/better-collider-generation-with-asset-processors/)

Asset Processorsというエディタスクリプトを用いて、アセットインポート時にアセットの加工を行う方法を、モデルインポート時に独自でコリジョンを生成する例を交えながら解説しています。

`AssetProcessor.OnPostprocessModel` を継承して、モデルアセットをインポートした際に処理を差し込む方法から、ヒエラルキー上に特定の名前のノードが存在する場合に、コリジョンを生成する方法、組み込まれたメッシュからメッシュコリジョンを生成する方法について、それぞれ説明しています。

## 【URP】Light Layersで特定のオブジェクトにだけ影響するライトを作る

![](06.png)

[【Unity】【URP】Light Layersで特定のオブジェクトにだけ影響するライトを作る - LIGHT11](https://light11.hatenadiary.com/entry/2021/11/25/200042)

Unity 2021.2 からUniversal Render Pipeline（URP）利用できる [Light Layers](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@12.0/manual/lighting/light-layers.html) を用いてライトにレイヤーをもたせることができるようになりました。この記事では、Light Layersを用いて特定のオブジェクトにしかライティングの影響を与えないようなライトを作成する方法について解説しています。

## Unity Vivox (UGS版) でボイスチャット・テキストチャットを行う【Unity Gaming Services】

![](07.png)

[Unity Vivox (UGS版) でボイスチャット・テキストチャットを行う【Unity Gaming Services】 - デニッキ！](https://xrdnk.hateblo.jp/entry/2021/11/21/232605)

Unity Gaming Services（UGS）として発表されたVivoxというボイス・テキストチャットサービスについて、処理フローやパッケージのインストール方法、ダッシュボードでのプロジェクトのセットアップ方法、サービスを用いたテキストチャットとボイスチャットの実装について解説しています。

また、それぞれUGSとUnity SDK（UGS版ではない、以前から存在したVivoxのUnity SDK）のVivoxの相違点についても触れています。

## UnityでC#のアセンブラを見る

[UnityでC#のアセンブラを見る – NotNullVariable](https://notnullvariable.com/2021/jit-asm-for-unity/)

[unity-asm-explorer-package](https://github.com/sschoener/unity-asm-explorer-package)というツールを用いて、Unityエディタ上で、UnityのMonoがJITに吐き出すアセンブラを確認する方法について紹介しています。

[unity-asm-explorer-package](https://github.com/sschoener/unity-asm-explorer-package)のインストール方法および、Unityバージョンにおける注意点、ビルドしたアプリで、実際にMonoが吐き出すアセンブラを確認する方法について説明しています。

## iOSでウィンドウからSafeAreaを取得するプラグインを作る

[【Unity】iOSでウィンドウからSafeAreaを取得するプラグインを作る - Qiita](https://qiita.com/ichiromatano/items/943f54509000b8e9c959)

iOS15でUnityの提供するSafeArea取得APIである `Screen.safeArea` が正常な値を返さないという[不具合の紹介](https://forum.unity.com/threads/unity-safearea-is-inconsistent-between-different-starting-rotations.1173764/)とその事情の説明と、独自のiOSプラグインによってSafeAreaを取得する方法について解説しています。

## Unity公式のNetcode for GameObjectsのHelloWorldチュートリアルを改造しつつ触ってみた

[Unity公式のNetcode for GameObjectsのHelloWorldチュートリアルを改造しつつ触ってみた - Synamon’s Engineer blog](https://synamon.hatenablog.com/entry/2021/11/22/190000)

先日リリースされた [Netcode for GameObjects](https://docs-multiplayer.unity3d.com/docs/getting-started/about/index.html) の[HelloWorldチュートリアル](https://docs-multiplayer.unity3d.com/docs/tutorials/helloworld/helloworldintro/index.html)を改良しながら、Netcode for GameObjectsのその仕組みについて解説しています。

また、NetworkManagerとNetworkObjectの利用方法、RPCとして利用するメソッドの命名規則、NetworkVariableの書き換え、通信のラグの考慮についてそれぞれ言及しています。

## そろそろShaderをやるパート47　水面の歪みのような表現

![](08.png)

[そろそろShaderをやるパート47　水面の歪みのような表現](https://zenn.dev/kento_o/articles/6d8b80e235d099)

上記画像のような、水面の歪みを表現するシェーダーの実装について解説しています。

GrabPassを用いて水面以外のオブジェクトの描画結果を取得して、その結果に対して水面より下を歪ませて、最後に水面を描画しています。

GrabPassの利用方法から、深度情報を用いた水面下の歪ませる対象の塗り分けと歪ませ方、水面の描画についてそれぞれ説明しています。

## シェーダーグラフのカスタムライティング

![](09.png)

[【Unity】シェーダーグラフのカスタムライティング – 株式会社ロジカルビート](https://logicalbeat.jp/blog/8201/)

Shader Graphのカスタムノードについて、その作成方法とそのシェーダー内でのライト情報へのアクセスの仕方、ライト計算を行ってライティングをカスタマイズする方法についてそれぞれ解説しています。

## AndroidのSpeechRecognizer APIレベル30以上で実装する

[[Unity] AndroidのSpeechRecognizer APIレベル30以上で実装する - Qiita](https://qiita.com/atsutama/items/8284b7ace081fb3f1edc)

Unity 2018.4.19fのプロジェクトでAndroid APIレベルを30以上に引き上げて、Speech Recognizer APIを利用する方法について紹介しています。

aarのtargetSdkVersionのアップデート、AndroidManifestへの `queries` の追記、UnityプロジェクトのTarget API Levelを強制的に30へ引き上げ、Custom Base Gradle Templateを用いてビルドに用いるgradleのバージョンを引き上げることTarget API レベルの30への引き上げを実現しています。

## Unity Hubをベータ版にする方法と、Unity HubからAppleシリコン版(M1 Mac用)のUnityをインストールする方法

[Unity Hubをベータ版にする方法と、Unity HubからAppleシリコン版(M1 Mac用)のUnityをインストールする方法【Unity】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/Unity_Hub_Beta)

Apple Sliconにネイティブ対応したUnity Hubをインストールする方法と、同じくネイティブ対応したエディタのインストール方法、エディタがIntel版かApple Slicon版かを見分ける方法について解説しています。

## UnityEditor上でGameObjectをUpdateさせる方法

[UnityEditor上でGameObjectをUpdateさせる方法 - Qiita](https://qiita.com/KyoheiOkawa/items/26fa8d8a46f6e40ae44e)

エディター中に、プレイヤーループを強制的に実行するハック。

エディター中でも確実に実行される`OnRenderObject` 内で、  `EditorApplication.QueuePlayerLoopUpdate` を呼びだして強制的にプレイヤーループを回して、その後 `SceneView.RepaintAll` でシーンを再描画することでこれらを実現しています。

## VIVE Flow の Unity環境構築してCubeを表示するまで / Input周りを調べた

[VIVE FlowのUnity環境構築してCubeを表示するまで](https://zenn.dev/nakashun/articles/74fd01fc57175d)

[VIVE Flow のInput周りを調べた](https://zenn.dev/nakashun/articles/9b9660905f44f6)

HTCから2021/11/18に発表された[VIVE Flow](https://www.vive.com/jp/product/vive-flow/overview/)のアプリを、VIVE Wave XR Pluginを用いて開発する方法について解説しています。

記事ではプラグインの導入方法からCubeを配置したシーンをビルドして実機で確認する方法と、UnityEngine.XRを用いて、VIVE Flowに連携しているスマホから入力を受け取る方法についてそれぞれ説明しています。

## SNSシェア機能を実装できるアセット【NatShare】

![](10.png)

[【Unity】SNSシェア機能を実装できるアセット【NatShare】 - トマシープが学ぶ](https://bibinbaleo.hatenablog.com/entry/2021/11/26/175609)

OSのシェア機能を呼び出してテキストや画像をシェアする[NatShare](https://assetstore.unity.com/packages/tools/integration/natshare-mobile-sharing-api-117705)について、その導入方法から利用方法、それぞれのSNSでのシェア結果について、サンプルつきで解説しています。

## Unity Test Runnerの使い方を理解する

[Unity Test Runnerの使い方を理解する - Qiita](https://qiita.com/riekure/items/b0f89280ecfcfa626f7b)

Unity Test Runnerについてその導入方法からEditMode・PlayModeの違い、テストを書く際のフォルダ構成、テストの書き方と実行方法、テスト前後の処理（Setup / TearDown）について紹介しています。
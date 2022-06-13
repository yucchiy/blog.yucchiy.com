---
type: "unity-weekly"
title: "Unity 2021 LTS Released - Unity Weekly #064"
date: "2022-04-18T09:00:00+09:00"
draft: false
tags: ["Unity", "Unity Weekly"]

---

# Unity Official

## Unity 2021 LTS のご紹介

[Unity 2021 LTS のご紹介 | Unity Blog](https://blog.unity.com/ja/news/introducing-unity-2021-lts)

Unity 2021 LTSが 4/13にリリースされました。

LTSでは公開から2年間サポートされ、この期間中は隔週でのアップデートが提供されます。

2021 LTSで重点を置いて開発された「ワークフロー」と「イテレーション」、「グラフィックス機能」、「多プラットフォームサポート」についてそれぞれ紹介しています。

また、機能詳細は「[プログラマー向け機能](https://unity.com/ja/releases/2021-lts/programming)」と「[アーティスト向け機能](https://unity.com/ja/releases/2021-lts/art-design)」でそれぞれまとめられています。

## 柔軟なサーバーホスティングで拓かれたマルチプレイヤーゲームのさらなる可能性。『スーパーボンバーマン R オンライン』チームに聞く、Multiplay＆Matchmakerの活用

[柔軟なサーバーホスティングで拓かれたマルチプレイヤーゲームのさらなる可能性。『スーパーボンバーマン R オンライン』チームに聞く、Multiplay＆Matchmakerの活用 – Unity for Pro](https://forpro.unity3d.jp/case_study/superbomberman/)

「[スーパーボンバーマン R オンライン](https://www.konami.com/games/bomberman/online/jp/ja/)」の開発者インタビュー記事です。

「[スーパーボンバーマン R オンライン](https://www.konami.com/games/bomberman/online/jp/ja/)」で64人同時対戦を実現するにあたって[Multiplay](https://unity.com/ja/products/multiplay)と[Matchmaker](https://unity.com/ja/products/matchmaker)を採用した経緯やリリース後のサーバー台数のデイリー最適化、レイテンシー削減のためのプレイ状況に応じたデーターセンターの選択などについて話されています。

## 2022 年の「Boss Room」をのぞいてみよう：Netcode for GameObjects、Relay、そして Lobby

[2022 年の「Boss Room」をのぞいてみよう：Netcode for GameObjects、Relay、そして Lobby | Unity Blog](https://blog.unity.com/ja/games/enter-the-boss-room-in-2022-netcode-for-gameobjects-relay-and-lobby)

「[Boss Room](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop)」のマルチプレイ実装にはNetcode for GameObjectsとUnity Gaming Service（UGS）のAuthenticationとRelay、Lobbyを利用しています。

このゲームの、特にマルチプレイ部分の実装を上の技術を用いてどのように実装しているか、アプリの全体フローからロビー作成と参加、切断と再接続の処理についてそれぞれ実装箇所のコードを参照しつつ解説しています。

## 予測できない面白さ：ゲームデザインにおけるランダム化の価値

[予測できない面白さ：ゲームデザインにおけるランダム化の価値 | Unity Blog](https://blog.unity.com/ja/technology/unpredictably-fun-the-value-of-randomization-in-game-design)

ゲームデザインにおけるランダム化の重要性とゲームにおけるランダム化のいくつかの事例とその実装を紹介しています。

Unityが用意する乱数クラス `UnityEngine.Random` のパフォーマンスと各メソッドについての紹介と、ゲームにおけるランダム要素として、ヒットダメージとカードゲームにおける乱数、パーリンノイズとカメラの手ブレ、AIエージェントについてそれぞれ解説しています。

# Articles

## Unityの描画パイプラインをURPに移行しました

[Unityの描画パイプラインをURPに移行しました - Mirrativ Tech Blog](https://tech.mirrativ.stream/entry/2022/04/11/093000)

ミラティブアプリの描画パイプラインをビルトインレンダーパイプラインからUniversal Render Pipeline（URP）へ移行した際の対応項目やURP移行後の描画パフォーマンス、トラブルシューティングについてまとめています。

ビルトインレンダーパイプラインからURPへ移行を決めた理由から移行までの流れ、URPではマルチパスを記述できないためRendererFeatureで対応した項目の紹介、ビルトインレンダーパイプラインの内製シェーダーを移行する際にSRP（Scriptable Render Pipeline） Batcherをできる限り効かせるために行った対応項目とSetPass削減確認のためのFrame Debuggerの利用方法・負荷確認、PrefabやScript対応、その他細かいトラブルについてそれぞれ解説しています。

## Managed Code Strippingの挙動の検証と2020 LTSで利用できる新しいアノテーション属性の紹介

[Managed Code Strippingの挙動の検証と2020 LTSで利用できる新しいアノテーション属性の紹介 – てっくぼっと！](https://blog.applibot.co.jp/2022/04/11/managed_code_stripping/)

Unityアプリケーションのコード最適化のひとつであるManaged Code Strippingについて紹介しています。

Managed Code Strippingによるコード削減の挙動を実際にアプリビルドで生成されたdllによる確認とManaged Code Stirppingによりアプリの挙動に悪影響を及ぼす例の紹介とその解決方法、2020 LTSから利用できる新しいアノテーション属性についてそれぞれ解説しています。


## AWSを使ったクラウドUnityビルド環境の構築～ビルドサーバー構築編～

[AWSを使ったクラウドUnityビルド環境の構築～ビルドサーバー構築編～ - Synamon’s Engineer blog](https://synamon.hatenablog.com/entry/2022/04/13/174034)

UnityアプリケーションをAWS上でビルドするためのビルドサーバーの構築方法について紹介しています。

EC2スポットインスタンスを活用したビルドサーバー環境の費用削減や[terraform-aws-github-runner](https://github.com/philips-labs/terraform-aws-github-runner)を用いたUnityアプリビルド環境の構築、runner（アプリビルドマシン）がライセンスサーバーへ認証リクエストを行うためのVPC間のVPC Peeringの設定、runner用のAMI（マシンのイメージ）の構築方法についてそれぞれ解説しています。

## clusterのリアルタイム通信サーバーの漸進的な進化

[clusterのリアルタイム通信サーバーの漸進的な進化｜cluster - メタバースプラットフォーム｜note](https://note.com/cluster_official/n/n38a73dbf5d68)

[cluster](https://cluster.mu/)の、3D空間の複数クライアント間同期のためのリアルタイム通信サーバー実装の変遷を紹介しています。

2021年半ばまでの3rd party MQTT serverを用いたpubsubとbroadcastによる同期実装の紹介と、機能要求の高度化にともなって（内製の？）room serverへの無メンテナンスでの移行方法、room serverで実装した各種対応についてそれぞれ解説しています。

## How To Write A Custom URP Shader With DOTS Instancing Support

[How To Write A Custom URP Shader With DOTS Instancing Support](https://gamedev.center/how-to-write-a-custom-urp-shader-with-dots-instancing-support/)

[前回の記事](https://gamedev.center/trying-out-new-unity-api-batchrenderergroup/)で実装した[BatchRendererGroup API](https://forum.unity.com/threads/new-batchrenderergroup-api-for-2022-1.1230669/)を用いた多数の立方体によるboidsシミュレーションの実装の見た目を強化したり、プロシージャルな頂点アニメーションを行うためにUniversal Render Pipeline（URP）のカスタムシェーダーを実装する方法と、DOTSによるインスタンス化をサポートする方法について紹介しています。

## そろそろShaderをやる - ZWrite、ZTest、RenderQueue、影を落とす、受ける

[そろそろShaderをやるパート68　ZWrite、ZTest、RenderQueueを理解する](https://zenn.dev/kento_o/articles/4b0c751727b793)
[そろそろShaderをやるパート69　影を落とす処理、受ける処理を自作Shaderに追加する](https://zenn.dev/kento_o/articles/c75cc095794be9)

ZWriteやZTest、RenerQueueのそれぞれの機能紹介とこれらの組み合わせによる描画順の検証、自作のシェーダーに対して影を落とす、または他のオブジェクトの影を受けるためのパスの書き方についてそれぞれ解説しています。

## DOTS Snippets: Listening for new and destroyed entities

[DOTS Snippets: Listening for new and destroyed entities – COFFEE BRAIN GAMES](https://coffeebraingames.wordpress.com/2022/04/16/dots-snippets-listening-for-new-and-destroyed-entities/)

DOTSにおいて、オブジェクトが生成または削除されたときの処理をどのように記述するかについて紹介しています。

エンティティを削除しても破壊されない `ISystemStateComponentData` というコンポーネントを用いて（記事中では `Marked` コンポーネント）新たに追加したコンポーネントおよび削除されたコンポーネントを取得するためのクエリの記述方法とこの運用を自動で行うためのシステムの実装例について解説しています。

## Apple Silicon(M1) 対応の Firebase Unity SDK 作成手順

[Apple Silicon(M1) 対応の Firebase Unity SDK 作成手順 - Qiita](https://qiita.com/atr-toru/items/b65647993a022b966175)

Firebase Unity SDK は [Apple Silicon（M1）版の Unity Editorをサポートしていない](https://github.com/firebase/quickstart-unity/issues/1100)ので、自前でビルドして対応する手順を紹介しています。

## 春のアセット祭りセール開催！500以上の人気アセットが50%オフ！先着順で最大80%オフのアセットもあるよ！

[春のアセット祭りセール開催！500以上の人気アセットが50%オフ！先着順で最大80%オフのアセットもあるよ！【Unity】【アセット】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/Spring_Sale_2022)

4/30までのUnity Asset Storeアセットセールが開催されています。50%オフのセールと、先着順で最大80%のライトニングディールがあります。

この記事ではセール対象のアセットのなかで[こちらのブログ](https://kan-kikuchi.hatenablog.com/)で紹介したアセットをリストアップして紹介しています。

## シェーダでUNITY_VERSIONマクロを使ってUnityエディタのバージョンごとに処理を変える

[【Unity】シェーダでUNITY_VERSIONマクロを使ってUnityエディタのバージョンごとに処理を変える - LIGHT11](https://light11.hatenadiary.com/entry/2022/04/14/195946)

UNITY_VERSIONマクロを用いてシェーダーの処理をUnityバージョンごとに変更する方法について紹介しています。

## Input Systemでバーチャルパッドを実装する

[【Unity】Input Systemでバーチャルパッドを実装する | ねこじゃらシティ](https://nekojara.city/unity-input-system-on-screen-controls)

新しいInput SystemのOn-screen Controlsを用いて、バーチャルパッドを実装する方法について紹介しています。
---
type: "unity-weekly"
title: "It begins with light - Unity Weekly #040"
date: "2021-11-22T09:00:00+09:00"
draft: false
tags: ["Unity", "Unity Weekly"]

---

# Unity Official

## それは光から始まる：HD レンダーパイプラインの決定版ガイド

![](./00.png)

[それは光から始まる：HD レンダーパイプラインの決定版ガイド | Unity Blog](https://blog.unity.com/ja/technology/it-begins-with-light-the-definitive-guide-for-the-high-definition-render-pipeline)

High Definition Render Pipeline（HDRP）の包括的なガイドラインがebookで公開されました。

これは、Unity のテクニカルアートマネージャーであるPierre Yves Donzallaz 氏がUnite Now で講演した「[Achieving high-fidelity graphics with HDRP](https://www.youtube.com/watch?v=yqCHiZrgKzs&t=3659s)」を元にしたガイドラインです。

このebookでは下記のようなコンテンツを扱っています。（箇条書きについてはブログより引用）

- HDRP のコンセプト、設定、カメラ、Volume フレームワーク
- 露出、モード、カメラの物理的な設定、計算式の理解
- 光の単位、種類、特性、IES プロファイル
- 物理ベースのスカイシステムで自然な空のある景色を作る
- シャドウ、反射、リアルタイムライティングのエフェクトを洗練させ、シーンにさらなる深みを与える
- レンダリングデバッガーについて
- レイトレーシングとポストプロセッシングによる画像の品質向上

ebookは[こちら](https://create.unity.com/hdrp-guide)からダウンロードできます。

## Unity 2021.2 のシェーダーグラフの新機能

![](./01.png)

[Unity 2021.2 のシェーダーグラフの新機能 | Unity Blog](https://blog.unity.com/ja/technology/whats-new-in-shader-graph-20212)

2021.2で追加されたシェーダーグラフの新機能について、主に「URP のサーフェスオプション」、「カスタムインターポレーター」、「Blackboard のカテゴリ」について紹介しています**。**

「Allow Material Override」というオプションにチェックを入れると、Universal Render Pipeline（UPR）のUnlitおよびLitシェーダーグラフのサーフェイスオプションのプロパティを、マテリアルインスペクター上に公開でき、またその値をマテリアルごとに設定できるようになりました。これによりシェーダーグラフの基本的な機能を共有しつつ、バリエーションを作成できるようになります。

カスタムインターポレーターでは、頂点データであるか頂点ステージで行われたカスタムされた計算の結果であるかに関わりなく、頂点ステージからフラグメントステージに情報を渡すことができるようになり、シェーダーのパフォーマンスを向上させられます。デモシーンでのUVタイリングの計算をピクセルシェーダから頂点ステージへ移行させることで、約33%の高速化を実現できたそうです。

またBlackboard にカテゴリが用意され、プロパティをグループ化することができるようになり、より複雑なシェーダーグラフについての作業効率の向上が見込めます。

また、これらの機能を確認するためのデモパッケージとして、[Viking Village URP](https://assetstore.unity.com/packages/essentials/tutorial-projects/viking-village-urp-29140)が公開されています。

## アートと魔法が出会う時：『Lost in Random』の幻想的な世界を作り上げる

![](./02.png)

[アートと魔法が出会う時：『Lost in Random』の幻想的な世界を作り上げる | Unity Blog](https://blog.unity.com/ja/games/when-art-meets-magic-forging-the-fantasy-realm-of-lost-in-random)

Zoink が開発し、Electronic Arts がパブリッシャーを務める『*Lost in Random*』の制作についてのインタビューです。

アセット制作ワークフローにおいて基本パーツの組み合わせでアセットを制作することで、メモリ負荷などを軽減した点、プロトタイプではHDRPで作り込んだ点、複数のプラットフォームへの配信を考慮するとHDRPではパフォーマンスの観点で限界があるため、最終的にURPに載せ替えた点について説明しています。

また、世界観を表現するために、標準のライトバイクではパフォーマンスおよび表現力の観点では足りないため、独自のライティングを採用して、アクティブライトを絞る形でリアルタイムライティングを採用した点、などについてそれぞれ解説しています。

## RPGチュートリアルを徹底解説

[RPGチュートリアルを徹底解説｜Unity Japan（ユニティ・テクノロジーズ・ジャパン）｜note](https://note.com/unityjapan/n/n2438724fecfb)

Unity公式が提供するRPGチュートリアル「Creator Kit: RPG」の、ユニティ・テクノロジーズ・ジャパンによる解説動画です。

「Creator Kit: RPG」についての紹介と、このチュートリアルパッケージのマップを自分で拡張する方法や、アイテムを実装しながらUnity上でレベルデザインする方法について解説しています。

## 都市のデジタルツインを使い、パリを再構築する

[都市のデジタルツインを使い、パリを再構築する | Unity Blog](https://blog.unity.com/ja/aec/reimagining-paris-with-the-help-of-an-urban-digital-twin)

![](./03.png)

ビジュアライゼーションソリューションを提供するVectuel社が、パリ広域都市圏 1,000km² に存在する200万件以上におよぶ建造物をデジタルツインとして再現している現状について解説しています。

[2021 年、クロスプラットフォームのマルチプレイヤーゲームの需要が高まっている理由 | Unity Blog](https://blog.unity.com/ja/games/why-demand-for-cross-platform-multiplayer-games-is-growing-2021)

ハリス・ポール社がアメリカの成人 2,000 人以上を対象にオンラインで実施した調査から、クロスプラットフォームのマルチモバイルゲームの需要が高まっている点と、Unityでマルチゲームを実現するためのソリューションについて紹介しています。

## What's new in Unity 2022.1.0 Alpha 15

[What's new in Unity 2022.1.0 Alpha 15 - Unity](https://unity3d.com/unity/alpha/2022.1.0a15)

現在アルファ版である 2022.1.0パッケージの、15が公開されています。

# Articles

## UnityEngine.Object の Null チェックまとめ

[【Unity】UnityEngine.Object の Null チェックまとめ - コガネブログ](https://baba-s.hatenablog.com/entry/2021/11/16/090000?utm_source=feed)

Unityでハマりがちな `UnityEngine.Object` のnullチェックについて、Destroy直後や1フレーム経過後などさまざまな状況および、 `==` や `??` などの複数の比較方法で、それぞれどのような結果になるのか、全パターン検証結果つきで紹介されています。

また、結論としてハマらない nullチェックの方法についても言及しています。

## AndroidのSpeechRecognizer(音声テキスト認識)を実装する

[[Unity] AndroidのSpeechRecognizer(音声テキスト認識)を実装する - Qiita](https://qiita.com/atsutama/items/fd8dca4a1e621f4c855b)

Unity の ネイティブプラグインで、 Androidの[SpeechRecognizer](https://developer.android.com/reference/android/speech/SpeechRecognizer?hl=ja)を利用して音声認識を行い、その結果をC#側のテキストデータとして受け取る方法について解説しています。

SpeechRecognizerがメインスレッド上でしか動作しないため、 `UnityPlayerActivity` を継承したネイティブプラグインの実装方法やランタイムパーミッションの要求方法、AndroidManifestの設定についてそれぞれ解説しています。

## 【Unity】shader_feature_localやmulti_compile_localを正しく使おうというお話

[【Unity】shader_feature_localやmulti_compile_localを正しく使おうというお話 - LIGHT11](https://light11.hatenadiary.com/entry/2021/11/18/200645)

Unity 2019から利用できる shader_feature_local と multi_compile_local ディレクティブで定義できるローカルキーワードについて、グローバルキーワードとの違いや、操作できるAPIの違い、パフォーマンスの違いについて解説しています。

また、Unity2021.2からのシェーダーキーワードの個数緩和についても触れています。

## Run Unity Cloud Build based on Github Commit message using Github Actions

[Run Unity Cloud Build based on Github Commit message using Github Actions « Unity Coding – Unity3D](https://unitycoder.com/blog/2021/11/18/run-unity-cloud-build-based-on-github-commit-message-using-github-actions/)

Unity Cloud Buildによるビルドを、Github Actions経由で特定のブランチにプッシュしたときに実行するためのワークフローについて紹介しています。

## UniversalRPでスクリプトから画面をキャプチャする一番簡単な方法

[UniversalRPでスクリプトから画面をキャプチャする一番簡単な方法 - Qiita](https://qiita.com/ScreenPocket/items/13db6f79821cedd5ccfc)

Universal Render Pipeline（URP）標準のCapturePassを、`CameraPaptureBridge.AddCaptureAction` を用いてハンドリングし、画面をキャプチャする方法について解説しています。

## Create a compass and objectives with uGUI

![](./04.png)

[Create a compass and objectives with uGUI - GameDev Resources](https://gamedev-resources.com/create-a-compass-with-ugui/)

uGUIを用いて、オープンワールドゲームによくあるコンパスUIとコンパス上に表示する目標の実装方法について解説しています。

コンパスの回転はプレイヤーの向きから算出した画像のUV値を `Image.uvRect` へ渡すことで実装、目標は管理しやすいようにクラス化し、コンパスクラスに登録することでコンパスUIに反映させています。

## UnityでGraphQLを使った通信を行う方法

[UnityでGraphQLを使った通信を行う方法 - WonderPlanet Developers’ Blog](https://developers.wonderpla.net/entry/2021/11/18/110048)

[graphQL-client-unity](https://github.com/Gazuntype/graphQL-client-unity) というライブラリを用いてUnity上でGraphQLを利用する方法と、GraphQLへの認証方法についてそれぞれ解説しています。

## Windows上でUnityとROS2を連携させる

[Windows上でUnityとROS2を連携させる(3) ~Oculus Quest2でTurtlebot3を操作する~ - Qiita](https://qiita.com/sfc_nakanishi_lab/items/7250fa851f824d02a5f9)

Oculus Quest2のコントローラであるOculus Touchを用いて、ROS2を経由して[Turtlebot3](https://emanual.robotis.com/docs/en/platform/turtlebot3/overview/)を操作する方法を紹介しています。

Oculus TouchのUnity上でのハンドリング方法から、ROS2の命令の送信、Oculus Linkとの連携、[turtlebot3_bridge](https://emanual.robotis.com/docs/en/platform/turtlebot3/bringup/#bringup)を起動して実際にturtlebot3の確認する方法まで解説しています。

また、一連の記事は下記から確認できます。

[Windows上でUnityとROS2を連携させる (1) ~環境構築編~ - Qiita](https://qiita.com/sfc_nakanishi_lab/items/40ab94a2f19f375f42db)

[Windows上でUnityとROS2を連携させる(2) ~簡易型シミュレータ作成編~ - Qiita](https://qiita.com/sfc_nakanishi_lab/items/ad81e16bd52805347534)

## ParticleからShaderへ値を渡す

[そろそろShaderをやるパート46　ParticleからShaderへ値を渡す](https://zenn.dev/kento_o/articles/7dc0449b6577cd)

Particleに、Custom Vertex Streams経由で独自に定義したデータをShaderへ渡して、その値を利用する方法について紹介しています。

## GitHubのプライベートリポジトリにGitクライアントでhttpsでアクセスする際に設定すること（Unity Package Managerでプライベートリポジトリ内のパッケージを取得したい）

[GitHubのプライベートリポジトリにGitクライアントでhttpsでアクセスする際に設定すること（Unity Package Managerでプライベートリポジトリ内のパッケージを取得したい） - Synamon’s Engineer blog](https://synamon.hatenablog.com/entry/2021/11/15/190000)

Unity Package ManagerでGitHubのプライベートレポジトリを指定する場合の、権限の割り振りおよびクライアントでの設定方法について解説しています。

GitHubのPersonalAccessTokenの発行と、作成したトークンを `.gitconfig` で設定する方法についてそれぞれ説明しています。

## Unity iOSビルド時に輸出コンプライアンス情報をinfo.plistに記載する

[Unity iOSビルド時に輸出コンプライアンス情報をinfo.plistに記載する - Qiita](https://qiita.com/Arihi/items/509a88ac8e937e563ded)

iOSのビルド時を `IPostprocessBuildWithReport` でフックして、輸出コンプライアンス情報である `ITSAppUsesNonExemptEncryption` の値を `info.plist` を書き出す方法について解説しています。
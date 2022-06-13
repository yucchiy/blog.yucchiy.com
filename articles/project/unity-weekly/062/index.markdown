---
type: "unity-weekly"
title: "RiderFlow for Unity & Multiplayer Games - Unity Weekly #062"
date: "2022-04-04T09:00:00+09:00"
draft: false
tags: ["Unity", "Unity Weekly"]

---

# Unity Official

## マルチプレイヤーゲームにおけるレイテンシへの対応

[マルチプレイヤーゲームにおけるレイテンシへの対応 | Unity Blog](https://blog.unity.com/ja/games/dealing-with-latency-in-your-multiplayer-game)

マルチプレイヤーゲームにおいてレイテンシを低く抑える方法について紹介しています。

まずはじめに権限モデル（クライアントに権限を持つか、サーバーに権限を持つか）とそれぞれのモデルによるセキュリティとレスポンス、一貫性の関係を紹介し、次にサーバーが権限をもつゲームにおいてレイテンシ問題に対応する方法として「影響の少ないクライアント権限の許可（Allow low impact client authority）」・「クライアント側の予測（Client side prediction）」・「アクションの先読み（Action antcipation）」・「ラグ補正（Server side rewind（AKA lag compensation））」について解説しています。

この記事の完全なガイドは[こちらのページ](https://unity.com/ja/how-to/manage-network-latency)から確認できます。

## Multiplayer を詳しく見てみよう

[Multiplayer を詳しく見てみよう | Unity Blog](https://blog.unity.com/ja/games/a-closer-look-at-multiplayer)

Unity Gaming Service（UGS）が提供するサービス一覧のうちマルチプレイヤーゲームの制作に関係する機能として、Netcode for GameObjectsとNetcode for Entities、Relay、Lobby、Multiplay、Matchmakerについてそれぞれ紹介しています。

## Unity Forma を使って、コードを書かずに素晴らしいコンフィギュレーターを作ろう

[Unity Forma を使って、コードを書かずに素晴らしいコンフィギュレーターを作ろう | Unity Blog](https://blog.unity.com/ja/manufacturing/create-stunning-product-configurators-using-unity-forma-without-having-to-code)

[Brett Wissemann](https://www.artstation.com/b3d)氏がUnity Formaを用いてインタラクティブな製品コンフィギュレーターを制作する過程を紹介しています。

## Unity2021.2でFace Capture 手順を確認しよう

[Unity2021.2でFace Capture 手順を確認しよう - YouTube](https://www.youtube.com/watch?v=XyE2wFJQfjY)

Unity2021.2で利用できるFace CaptureとiOS端末を用いて、フェイシャルアニメーションをキャプチャーする方法を動画で紹介しています。

## アセット作者に聞いてみよう！「NOVA Shader」編 - Unityステーション

[アセット作者に聞いてみよう！「NOVA Shader」編 - Unityステーション - YouTube](https://www.youtube.com/watch?v=0gzpgHRegak)

ParticleSystemベースの多機能シェーダー「NOVA Shader」を開発者の方が「NOVA Shader」についてとOSS化の経緯、これを使ったエフェクトサンプルについてそれぞれ紹介しています。

# Articles

## RiderFlowによるヒエラルキービュー上のゲームオブジェクトの管理

Jetbrainから、ヒエラルキービューをグループ化したりメモやブックマークを残すことのできるRiderFlowというライブラリがリリースされました。

[Manage the GameObjects Hierarchy view | RiderFlow](https://www.jetbrains.com/help/riderflow/manage-gameobjects-hierarchy-view.html)

下記の記事では、RiderFlowの導入方法や基本的な使い方について紹介しています。

[超絶便利な無料ツール『RiderFlow』を使って作業を効率化しよう！](https://zenn.dev/meson/articles/get-started-riderflow)

[RiderFlowでGameObjectをグループ化したり、ブックマークしたり、メモ残したり！！！ - Qiita](https://qiita.com/RyotaMurohoshi/items/384640d1be03ac268d35)

[【Unity】RiderFlowの紹介 - Raspberlyのブログ](https://raspberly.hateblo.jp/entry/RiderFlow)

## Unity で Timeline のカスタムトラックおよびクリップを作成して見た目をキレイにしてみた

[Unity で Timeline のカスタムトラックおよびクリップを作成して見た目をキレイにしてみた - 凹みTips](https://tips.hecomi.com/entry/2022/03/28/235336)

この記事では、Timelineのトラックおよびクリップの見た目を装飾する方法についてまとめています。

カスタムトラックとクリップ、ミキサーの基本的な作成方法からトラックやクリップにシーンやアセットの参照する方法、トラックやクリップの見た目を変える方法としてクリップの色や背景の変え方（ `TrackEditor` と `ClipEditor` の拡張方法）、クリップ名を変更する方法について解説しています。

## Unityで「ここは自由文言で20文字が入力できる」と言われた時に考えることの全て

[Unityで「ここは自由文言で20文字が入力できる」と言われた時に考えることの全て - Qiita](https://qiita.com/neon-izm/items/307b5adedaac73a0bcd0)

uGUI標準のInputFieldで文字数制限のある自由文言を入力するときに考慮すべき点として、絵文字や絵文字合字、アラビア文字、UTF-8において4バイトになる文字、uGUIのTextタグの扱い、禁止文字列を紹介しています。

## Seamless Cube Sphere

[Seamless Cube Sphere](https://catlikecoding.com/unity/tutorials/procedural-meshes/seamless-cube-sphere/)

この記事では、[前回の記事](https://catlikecoding.com/unity/tutorials/procedural-meshes/cube-sphere/)で実装したCube Sphereを改良して、頂点を位置情報のみ保持するだけで実装する方法（法線やタンジェント、UVを取り除く）、同位置の頂点をすべて共有することで重複する頂点を省く方法、メッシュの描画順序の視覚化とメッシュの最適化についてそれぞれ紹介しています。

## Unity Localizationの使い方まとめ

[【Unity】【Localization】あらゆる種類のアセットをローカライズできるようにする方法まとめ - LIGHT11](https://light11.hatenadiary.com/entry/2022/03/28/193708)
[【Unity】【Localization】ローカライズしたアセットを動的に切り替える - LIGHT11](https://light11.hatenadiary.com/entry/2022/03/29/200741)
[【Unity】【Localization】ローカライズ文字列をSpreadSheetと連携する - LIGHT11](https://light11.hatenadiary.com/entry/2022/03/31/195900)
[【Unity】【Localization】ローカライズ文字列をCSVに入出力する - LIGHT11](https://light11.hatenadiary.com/entry/2022/03/30/193935)

Unity公式の提供するローカライズパッケージで、アセットのローカライズ方法やアプリ起動中の言語切り替え時のアセット切り替え対応、ローカライズ文字列の管理としてCSVとSpreadSheetの利用法について紹介しています。

## Why job structs are better than Entities.ForEach()

[Why job structs are better than Entities.ForEach() – COFFEE BRAIN GAMES](https://coffeebraingames.wordpress.com/2022/03/27/why-job-structs-are-better-than-entities-foreach/)

DOTSによる並列処理を記述する際に、 `Entities.ForEach` よりもJob構造体の方がよりよい理由を、柔軟性と再利用性の観点から説明しています。

## ネイティブプラグインを書かずにUnity製のアプリにHaptic Feedback(振動)を実装する【iOS】【Unity】【アセット】

[ネイティブプラグインを書かずにUnity製のアプリにHaptic Feedback(振動)を実装する【iOS】【Unity】【アセット】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/Unity_Haptic_Feedback)

iOSのHaptic Feedbackを利用するための[katsd/Unity-HapticFeedback](https://github.com/katsd/Unity-HapticFeedback)の導入と利用方法について紹介しています。

## UnityのTextを豆腐にしない、Font.HasCharacter

[UnityのTextを豆腐にしない、Font.HasCharacter - Qiita](https://qiita.com/nigiri/items/52eea3843ea9efe0a436)

uGUIとTextMeshProそれぞれで利用しているフォントが、指定した文字を表示可能か判定するメソッドについて紹介しています。

## Unityのポストプロセスで平均ブラーを実装する方法

[Unityのポストプロセスで平均ブラーを実装する方法 | 3DCG school](https://3dcg-school.pro/unity-post-process-basic-blur/)

平均ブラーの原理と欠点、Unityのポストプロセスのシェーダーで平均ブラーを実装する方法について紹介しています。


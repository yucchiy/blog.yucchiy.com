---
type: unity-weekly
title: 'Advent Calendar 2021特集 その1 - Unity Weekly #043'
description: ''
pubDatetime: 2021-12-06T01:00:01.000Z
tags:
  - Unity
  - Unity Weekly
---

## Unity 2021におけるパッケージ関連の変更について

[Unity 2021におけるパッケージ関連の変更について - Qiita](https://qiita.com/RyotaMurohoshi/items/2b7853db9c42283a9670)

Unity 2021.1で行われた、[パッケージのライフサイクルに関する変更](https://blog.unity.com/ja/technology/a-new-package-manager-experience-in-unity-20211)について紹介しています。

## async/awaitを理解する

[(C#) async/await を理解する - ネコのために鐘は鳴る](https://ikorin2.hatenablog.jp/entry/2021/12/05/072126)

C#で利用できるasync/awaitについて、C#における非同期処理の歴史に触れつつその動作原理について詳細に解説しています。

「非同期処理」と「バックグラウンド処理（別スレッドで処理を行う）」の違いから、Unityで頻繁に利用される非同期処理のPlayerLoop上での動作、awaitによるスレッド間移動や同期コンテキスト、asyncメソッドの戻り値についても触れています。

## Unity 2021.2で強化されたインスペクターの数式機能や、複数要素選択時の線形配置機能について

[Unity 2021.2で強化されたインスペクターの数式機能や、複数要素選択時の線形配置機能について - Qiita](https://qiita.com/RyotaMurohoshi/items/fa777dfd50254a3a88cf)

2021.2から利用できるようになった、インスペクターでの数式機能や複数要素選択時の配置機能の強化について紹介しています。

## インタラクティブな水面の表現をやってみる

[[Unity]インタラクティブな水面の表現をやってみる - Qiita](https://qiita.com/flankids/items/ca0aaa89aa0049aa0429#%E5%85%89%E3%81%AE%E6%80%A7%E8%B3%AA%E3%82%92%E5%8A%A0%E5%91%B3%E3%81%97%E3%81%9F%E6%B0%B4%E9%9D%A2%E3%81%AE%E8%A1%A8%E7%8F%BE)

Unity上でキャラクターの移動に合わせたインタラクティブな水面を、「映り込みや水面の凹凸、フルネル反射を用いた透け感」と「波動方程式を用いたインタラクティブな波の表現」で表現する方法を紹介しています。

## Unity 2021.2からProject Windowでもコピー・カット・ペーストができるようになった

[Unity 2021.2からProject Windowでもコピー・カット・ペーストができるようになった - Qiita](https://qiita.com/RyotaMurohoshi/items/7c112fb05615aa893636)

2021.2からProject Windowで複製だけでなくコピー・カット・ペーストが行えるようになった件について紹介しています。

## C#向けJSONデシリアライザ Hurisake.JsonDeserializer を作った

[C#向けJSONデシリアライザ Hurisake.JsonDeserializer を作った](https://hasipon.github.io/pages/blog/1638550000.html)

Unityでも動作するC#向けデシリアライザのHurisake.JsonSeserializer についての紹介。string の生成を極力避けるためにbyte[]配列で処理を進める、Dictionaryインスタンスの生成を極力避ける、JSONのobject のkeyはハッシュで比較するなどの工夫を施すことで、MiniJSONと比較して約4倍ほど高速にデシリアライズできるとのことです。

## Riderで開発するなら知っておきたい2つのデバッグ機能

[Riderで開発するなら知っておきたい2つのデバッグ機能 - うどんてっくメモ](https://myudon.hatenablog.com/entry/2021/12/01/100000)

Riderで利用できる「Evaluate expressions」と「Immediate window」を用いて、デバッグ実行中にブレークポイントで止めて、そこで式を評価したり、変数の中身を変更できる。これらを組み合わせることでデバッグ効率を上げる方法について紹介しています。

## Unityでのマルチプレイアプリ開発を便利にしてくれるEditor拡張-ParrelSyncを深ぼってみる

[Unityでのマルチプレイアプリ開発を便利にしてくれるEditor拡張-ParrelSyncを深ぼってみる - Synamon’s Engineer blog](https://synamon.hatenablog.com/entry/read-parrelsync)

マルチゲーム開発の確認のためのエディタ拡張である「[ParrelSync](https://github.com/VeriorPies/ParrelSync)」について、その実装を読みながら、ParrelSyncでの「クローン側でのアセット変更の禁止方法」や「ファイル操作」についてどのようなAPIが利用されているのかについて調査しています。

## NotNullAttributeで設定したオブジェクトをHierarchy上で確認できる機能拡張の作成

[NotNullAttributeで設定したオブジェクトをHierarchy上で確認できる機能拡張の作成 - Qiita](https://qiita.com/taroshun_v2/items/e3d4be78e9da198e82ff)

自作した `NotNullAttribute` を設定することで、インスペクター上でオブジェクトの参照が空である場合にエラーを通知する `PropertyDrawer` の実装方法の紹介、同属性を `EditorApplication.hierarchyWindowItemOnGUI` を用いてヒエラルキー上でもエラーの通知する方法について紹介しています。

## TimeLineにMarkerを打ち込んでオブジェクトにパラメータを送信する

[#unity TimeLineにMarkerを打ち込んでオブジェクトにパラメータを送信する - 土屋つかさの技術ブログは今か無しか](https://someiyoshino.info/entry/2021/12/03/000127)

Timelineで利用できる[Marker](https://docs.unity3d.com/Packages/com.unity.timeline@1.0/api/UnityEngine.Timeline.Marker.html)を用いて、任意のタイミングで特定のオブジェクトに対して処理を実行する方法について、その実装方法とPlay/Editモードでの挙動の注意点や `RetroActive` について解説しています。

## UnityのProfilerの情報を取得する(UnityEditorInternal使用)

[UnityのProfilerの情報を取得する(UnityEditorInternal使用) - Qiita](https://qiita.com/random25umezawa/items/3bd7ab72e4f0a0233841)

UnityEditorInternal内のProfilerDriver経由で、Profiler のヒエラルキービュー内の情報を取得するための方法を紹介しています。

周辺の定義がunity2018から変更されていて、列挙の定義位置の変更や、フレーム一覧の取得方法の変更が行われている点についても触れています。

## Netcode for GameObjectsの機能紹介 NetworkTransformコンポーネントについて

[Netcode for GameObjectsの機能紹介 NetworkTransformコンポーネントについて - Synamon’s Engineer blog](https://synamon.hatenablog.com/entry/ngo-introduce-networktransform)

Netcode for GameObjectsにあるPlayerのTransformを同期するための `NetworkTransform` コンポーネントについて、その設定方法や補完設定、 `In Local Space` について紹介しています。

また、クライアント側からTransformの更新を行える `ClientNetworkTransform` の紹介と利用方法、課題についてそれぞれ触れています。

## UnityのGC AllocateとWaitForSeconds

[UnityのGC AllocateとWaitForSeconds - Qiita](https://qiita.com/nissy_gp/items/7823afcd6b1db0b75887)

`WaitForSeconds` や `WaitForEndOfFrame` はクラスのインスタンスを生成するため、 `yield new WaitForSeconds()` を行うごとにGCAllocが発生し、スパイクの原因となります。その問題のProfilerでの確認と、 `WaitForSeconds` で生成されるインスタンスを再利用することで、この問題を回避する方法について紹介しています。

## OpenCVforUnityを使った、カメラ映像から手の向き認識

[OpenCVforUnityのインポートとサンプル実行 - Qiita](https://qiita.com/amanatsutouko/items/ddd8a964543a4a35d1e8)

[OpenCVforUnityを使った、カメラ映像から手の向き認識 - Qiita](https://qiita.com/amanatsutouko/items/02ce52c1ffc7ff2937a5)

[OpenCV for Unity](https://assetstore.unity.com/packages/tools/integration/opencv-for-unity-21088) のインストール方法からサンプル実行方法、WebCam上の画像からオブジェクトの矩形を抽出し、矩形の形状ベースで手の向きを認識する方法について紹介しています。

## SystemInfo.operatingSystemからバージョンを取得するときの注意（iPadOS15.1以降のiPad端末の挙動について）

[SystemInfo.operatingSystemからバージョンを取得するときの注意（iPadOS15.1以降のiPad端末の挙動について） - Qiita](https://qiita.com/e73ryo/items/ebb63cb90c71b4c31db7)

UnityでOSの情報を返す`SystemInfo.operatingSystem` の紹介と、iPadOS 15.1以降で返す文字列が `iPadOS *` になった件について解説しています。

## Debug.Log()の全文をファイル出力し、<message truncated>で省略された内容をすぐに確認できるようにする

[Debug.Log()の全文をファイル出力し、<message truncated>で省略された内容をすぐに確認できるようにする - Qiita](https://qiita.com/e73ryo/items/808107640ea77ec04a8a)

Consoleログでは長い文字列がトランケートしてしまう問題についての紹介と、 `Application.logMessageReceived` を用いて独自にログを保存することで、ログ全文を確認する方法について解説しています。

## Unity TextMeshProにおけるダイナミックフォントの扱い

[Unity TextMeshProにおけるダイナミックフォントの扱い](https://zenn.dev/siguma_sig/articles/66854ef85db6d5)

TextMeshProのダイナミックフォントについて、ビットマップフォントとの違いと、ダイナミックフォントの設定方法、ダイナミックフォントでフォントキャッシュとして利用しているFontTextureよりも多い文字を描画しようとしたときに発生する問題と、フォントキャッシュのクリア方法について解説しています。



## Unity - 2021年に使ってみた16のオススメツール系アセットを紹介！

[Unity - 2021年に使ってみた16のオススメツール系アセットを紹介！ - Qiita](https://qiita.com/asiram/items/bbd48e31d64411afc3ae)

記事の著者の自作ゲームにて利用して便利だったアセットやツールを16個紹介しています。

## スプライト(Transparent)にもDoF(被写界深度)を効かせたい

[スプライト(Transparent)にもDoF(被写界深度)を効かせたい【Unity】【URP】 - Qiita](https://qiita.com/gamu/items/449ab562a7aa34da0f73)

スプライト（Transparent）に対して被写体深度（DoF）が効かない問題について、その原因と対応のために深度値を書き込んだときに発生するZファイティングと、回避するためにスプライト専用のパスを用意してUniversal Render Pipeline（URP）のRendererFeatureを用いて用意したパスを呼び出す方法、URPのポストエフェクト用の深度テクスチャである `_CameraDepthTexture` に深度を書き込むことでスプライトにDoFを効かせる方法を解説しています。

## Unity Profilerの表示情報をReflectionで取得してみる

[Unity Profilerの表示情報をReflectionで取得してみる - Qiita](https://qiita.com/messhi/items/8a18f3d77297f4c1cecb)

UnityのProfilerの項目のうち、internalやprivateな領域をリフレクションで取得する方法について紹介。

## [Unity] UniversalRenderPipelineについて調べた覚え書き

[[Unity] UniversalRenderPipelineについて調べた覚え書き - Qiita](https://qiita.com/ishiguro_takuya/items/310f97446c299a3380e5)

URPについて、その概要から特徴やクラスの設計、実際にRendererFeatureを触って描画をカスタマイズする方法について紹介しています。

## Beta版のUnity Gaming Servicesを導入して軽く触ってみる

[Beta版のUnity Gaming Servicesを導入して軽く触ってみる - Qiita](https://qiita.com/kai_yamamoto/items/fc9352aec8847bba0854)

Unity Gaming Servicesの導入方法から、Gaming Servicesダッシュボード上での準備、Unity Authenticationの利用によるサインインとLobbyをもちいたロビー作成から入室方法について紹介しています。

## Unityで神になれる最強おすすめアセット集

[Unityで神になれる最強おすすめアセット集 - Qiita](https://qiita.com/UbiquitousD/items/54a04a0886b308555152)

UnityでおすすめなアセットをシステムからUI、モデルやエフェクトアセットなど幅広く紹介しています。

## Unity uGUIで使える無料/OSSなカラーピッカー

[Unity uGUIで使える無料/OSSなカラーピッカー - Qiita](https://qiita.com/kabosu3d/items/cb679c7d1837785cc955)

UnityでOSSとして公開されているカラーピッカーを5つ紹介しています。

## STYLY VRでフェードイン・フェードアウトをつくる

[【Unity】STYLY VRでフェードイン・フェードアウトをつくる【STYLY】 - Qiita](https://qiita.com/Four4_mm/items/53f5fea7548816fab14f)

フェードイン・アウトするQuadの実現方法について紹介しています。

## Unityプロジェクトで使えるちょっと便利なGit aliasたち

[Unityプロジェクトで使えるちょっと便利なGit aliasたち | 白黒羊](https://shirokurohitsuji.studio/2021/12/02/unity-repository-git-alias/)

Unityで使えるGit aliasについて「.gitignore自動生成」と「Packages/manifest.jsonのソート」、「UnitTestの実行」、「Unity Cloud Buildと連携したPR作成」をそれぞれ紹介しています。

## 同じシーンの中で状態遷移を実装するベストプラクティス

[同じシーンの中で状態遷移を実装するベストプラクティス - Qiita](https://qiita.com/TakashiHamada/items/660007f341f3537c1ce1)

同一シーンでのオブジェクトの状態管理について、管理方法からUniRxの購読停止・再購読、ポーズ実装についてのプラクティスを紹介しています。

## Unityで自力描画。

[Unityで自力描画。 - Qiita](https://qiita.com/MachiaWorx/items/3bc553b39afcfda6e066)

Unityで利用できる `Graphics.DrawMesh` を用いて、自前でメッシュを描画する方法について紹介しています。

## Unity の Automated QA を使ってローカルの実機でスモークテストを実行してみた

[Unity の Automated QA を使ってローカルの実機でスモークテストを実行してみた - Qiita](https://qiita.com/johro/items/a5d2f91f3e2480db5246)

Automated QAの導入方法から操作の記録方法、記録した捜査を再生してテストを行う方法、コマンドライン経由でテストを実行する方法について解説しています。

## 【Unity】HaritoraX+OculusQuestで6点トラッキング

[【Unity】HaritoraX+OculusQuestで6点トラッキング - Qiita](https://qiita.com/dokudami/items/0f5be3d42eecb94ecf63)

OculusQuestとSteamVR Plugin を用いて両手と頭、HaritoraX を用いて腰と両足の6点トラッキングを行うためのツールの導入やコンポーネントなどの各種設定について紹介しています。

## おさえておきたいUI開発3つのポイント

[【Unit】おさえておきたいUI開発3つのポイント - 渋谷ほととぎす通信](https://shibuya24.info/entry/unity_ui_point_3)

UI開発において重要になるポイントとして「直接遷移」と「手前の画面に戻る仕組み」、「各画面の拡張可能性」の３つのポイントを、具体例を交えながら紹介されています。

## 図解で分かる！アニメ調シェーダ基礎

[【Unity】図解で分かる！アニメ調シェーダ基礎 - Qiita](https://qiita.com/KoniroIris/items/1f0fccb88cbad2aab1b1)

アニメ調なシェーディングで重要なアウトラインの描画を法線方向へのモデル拡大によって実装する方法と、モデルの法線を修正することでこの問題に対応する方法について紹介しています。

## OculusQuestのハンドトラッキングでライトの色を変えよう

[OculusQuestのハンドトラッキングでライトの色を変えよう - Qiita](https://qiita.com/Ah_/items/c6689292d3b8bc218bbb)

OculusQuestでハンドトラッキングを行なって、特定のジェスチャーを行ったら、それをUDP経由でRasberry Piへ送信し、受け取ったら赤外線でライトを操作する方法について解説しています。

## Hinge Jointでなんとかしてみた話

[Hinge Jointでなんとかしてみた話 - Qiita](https://qiita.com/Nyaf0039V/items/ef86046c843bf48802be)

VCIで利用できるunity標準のHinge Jointを利用して、銃が窓に当たった時の物理的な挙動を再現する方法について、ジョイントの設定方法について解説しています。

---
type: unity-weekly
title: 'Advent Calendar 2021特集 その2 - Unity Weekly #045'
description: ''
pubDatetime: 2021-12-13T01:00:01.000Z
tags:
  - Unity
  - Unity Weekly
---

## UnityでGraphQL.Clientを使ってAWS AppSyncを利用する

[UnityでGraphQL.Clientを使ってAWS AppSyncを利用する - e.blog](https://edom18.hateblo.jp/entry/2021/12/11/105140)

[GraphQL.Client](https://github.com/graphql-dotnet/graphql-client)をUnityに導入して、AWS AppSyncを操作する方法について紹介しています。

クライアントのインストール方法からAWS AppSyncの設定、GraphQLの操作としてquery、mutation、subscriptionについてそれぞれ実装方法を紹介しています。

subscriptionが、前処理が多くハマりやすいポイントとしてWebSocketのコネクション、AWS AppSyncのヘッダーについて解説しています。

## Burstでポータブルかつ確実にSIMD化を行うにはどうすればいいのか

[Burstでポータブルかつ確実にSIMD化を行うにはどうすればいいのか - Qiita](https://qiita.com/Trapezoid/items/461c058a0feadb7ccefe)

BurstでのSIMD化について、基本的な最適化の挙動の確認とBrustの挙動を正確に把握しないと最適化がかけづらいという問題点の紹介、確実にBrustでSIMD化させるためにUnity.Mathematicsを用いる方法とインターリーブ配置による最適化についてそれぞれ解説しています。

## 【トラブル回避】端末依存のC#処理に注意！

[【トラブル回避】端末依存のC#処理に注意！ - Qiita](https://qiita.com/Gaku_Ishii/items/c44b832ee08cbc7c25c4)

C#において端末設定などに依存するAPIとその対策について紹介しています。Unity 2020.1.5.1f以前ではデフォルトカルチャが `InvariantCulture` となるバグについても触れています。

## OpenXRランタイムを実行時に選ぶ

[OpenXRランタイムを実行時に選ぶ](https://zenn.dev/shiena/articles/openxr-runtime)

OpenXR 1.0.18で規格化されたアクティブなランタイム一覧の列挙と、この規格をもとにUnityでランタイムの一覧の取得方法、ランタイムを指定してOpenXRを有効にする方法について紹介しています。

## UnityのCode Strippingって本当に効いてるの？

[UnityのCode Strippingって本当に効いてるの？ - Qiita](https://qiita.com/satanabe1@github/items/b72b572b7321ff1715e5)

シンプルなサンプルプロジェクトからビルドしたapkを解析して、UnityのCode Strippingがどのように効いているのか、dllの数とdllの中身を確認しながら検証しています。

## Unidux でマルチシーン画面遷移制御を行う

[Unidux でマルチシーン画面遷移制御を行う【Unity Advent Calender 2021】 - デニッキ！](https://xrdnk.hateblo.jp/entry/2021/12/12/151140)

UnityでのFlux実装である[Unidux](https://github.com/mattak/Unidux)を用いてマルチシーンでの画面遷移の制御を行う方法について紹介しています。

Uniduxのデータフローから、Uniduxの各種要素の紹介、Uniduxを用いた画面遷移の書き方について主な利用方法についてコード付きで解説しています。

## エディタのカスタムモードを作成する

[エディタのカスタムモードを作成する - Qiita](https://qiita.com/Shiranui_Isuzu/items/b2ca640a75457311f62e)

Unityが起動時にコンパイルエラーがあると遷移するセーフモードについて、独自のモードを定義し、そのモードに遷移する方法について紹介しています。

## Visual Effect GraphのSDFとParticle Stripを使ってみた

[[Unity] Visual Effect GraphのSDFとParticle Stripを使ってみた - Qiita](https://qiita.com/Mr_K/items/444eb6662cea56d174fa)

Visual Effect GraphのParticle StripとSDFをそれぞれ利用してエフェクトの作成例を紹介しています。Experimental Operators/Blocksという設定を入れないとParticle Stripが利用できない点や、SDFが最新のUnityでしか利用できない点についても言及しています。

## だれでもできる！Nreal Lightアプリ作成入門

[だれでもできる！Nreal Lightアプリ作成入門 - Synamon’s Engineer blog](https://synamon.hatenablog.com/entry/nrealnyuumon)

ARグラス「Nreal Light」のアプリの作り方を解説しています。

SDK（NRSDK）のインストール方法から専用のカメラ及び入力コンポーネント、アプリビルドから実機確認まで説明しています。

## Vivox でボイスチャットを始めよう！

[【Unity】Vivox でボイスチャットを始めよう！ - Qiita](https://qiita.com/neusstudio/items/9942c079d4c06b5fd36e)

ボイスチャットのミドルウェア及びクラウドサービスを提供する[Vivox](https://unity.com/products/vivox)について、その概要と機能紹介、インストール方法、コード例としてログインからチャンネル参加まで一連の実装を解説しています。

## ゆるく使うUnityTest

[ゆるく使うUnityTest - tanaka's Programming Memo](https://am1tanaka.hatenablog.com/entry/yuru-unitytest-2021)

Unity Test Frameworkを用いてサンプルゲーム [Creator Kit: Puzzle](https://learn.unity.com/project/creator-kit-puzzle) の自動操作を行って、ゲームが正しく動作するかをテストする方法について紹介しています。

## Unityエディタの中を見て理解を深める

[Unityエディタの中を見て理解を深める - Qiita](https://qiita.com/e73ryo/items/e67a5838eea79cc7facd)

[UnityCsReference](https://github.com/Unity-Technologies/UnityCsReference) からUnityエディタの内部実装を確認する方法から、リフレクションを用いてエディタ内部のクラスを参照して操作する方法についてそれぞれ紹介しています。

## UnityのAndroid SDKにAPIレベル30のSDKツールを導入する

[UnityのAndroid SDKにAPIレベル30のSDKツールを導入する - Qiita](https://qiita.com/segur/items/a84b1096311542b04e9a)

UnityのAndroid Modulesでインストールできる Android SDK のAPIレベルを30以降にアップデートする方法について紹介しています。

## チェスを題材に一人DDDごっこしてUnityで動かしてみた話

[チェスを題材に一人DDDごっこしてUnityで動かしてみた話 - Qiita](https://qiita.com/chorome/items/1d9521210aac893b3dd2)

チェスを題材にドメインモデリングをしつつ、Unity上でつなぎこみを実装する方法と、そこで得た学びについて紹介しています。

## DOTSベースのUnity PhysicsはPhysXよりどの程度軽量なのか？

[DOTSベースのUnity PhysicsはPhysXよりどの程度軽量なのか？ - Qiita](https://qiita.com/nissy_gp/items/ed26e934ddf5a190946d)

DOTSベースの物理演算実装であるUnity Physicsの紹介とPhysXとUnity Physicsでのパフォーマンス比較について紹介しています。

## テスト対象のプレハブを名前で検索するUtilityメソッド

[【Unity】テスト対象のプレハブを名前で検索するUtilityメソッド - Qiita](https://qiita.com/nkjzm/items/9124a48c1dcba1e7194c)

`AssetDatabase.FindAssets`を用いてプレハブ名から対象のプレハブをロードすることで、フォルダ構造の変更に対して頑健なプレハブロードを実現する方法について紹介しています。 

## ノーコーディングで手軽にアウトラインをつけてみる

[ノーコーディングで手軽にアウトラインをつけてみる【Unity】 - Qiita](https://qiita.com/gamu/items/2a5d20cc7a90d8d2b1b6)

[UnityFx.Outline](https://github.com/Arvtesh/UnityFx.Outline)を用いてBuild-in RPおよびUniversal Render Pipeline（URP）でコードを書かずにアウトラインを実装する方法について紹介しています。

URPの場合オブジェクト単位ではなくレイヤー単位でアウトラインが描画されるため、期待したアウトラインを描画するためにレイヤーを調整する方法についても言及しています。

## UnityのLightAnchorコンポーネント

[UnityのLightAnchorコンポーネント - Qiita](https://qiita.com/block/items/396525cddbf5c0044d58)

Unity 2021.2から追加された、照らしたい場所と方向を基準にライトを調整できる [Light Anchor](https://docs.unity3d.com/Packages/com.unity.render-pipelines.high-definition@12.0/manual/light-anchor.html) について紹介しています。

## 後回しにすると大変なことになった事例集

[【Unity】後回しにすると大変なことになった事例集 - Qiita](https://qiita.com/kurosawa_tomokazu/items/09723bb192fb9d0fbd99)

Unityによるゲーム開発で開発中に意識したい事例について、画面遷移の設計ポイントから特にUI類のアセット管理で気をつけるべき圧縮設定とフォルダ構成、アセットバンドルをフォルダ単位かファイル単位のどちらでパッキングすべきかについてそれぞれ解説しています。

## CI初心者がfastlaneでアプリ申請の半自動化を行うまで

[CI初心者がfastlaneでアプリ申請の半自動化を行うまで - Qiita](https://qiita.com/s_ebata/items/3d286d9935d3e390b041)

fastlaneを用いたUnityアプリのビルドからipa作成、slack通知、ベータ配信サービスへのアップロードまでの方法を紹介しています。

## 正攻法でUIのマテリアルをいじる

[[Unity]正攻法でUIのマテリアルをいじる - Qiita](https://qiita.com/rarudonet/items/52de2fd3a47b6e0a2b1f)

UnityのUIで利用されているマテリアルのプロパティを変更する方法として、 `IMaterialModifier` を利用したプロパティの更新とマテリアルへの反映方法について紹介しています。

## タイムストレッチ機能を使った音声の倍速再生

[【CRI ADX2】タイムストレッチ機能を使った音声の倍速再生 - Qiita](https://qiita.com/norimatsu_yusuke/items/b21b867e488ece466e95)

CRI ADX2のタイムストレッチ機能を用いて、音の高さはそのままに再生速度を変更する方法について紹介しています。

## AR Foundationでユニティちゃん召喚スマホアプリを作ってみた

[AR Foundationでユニティちゃん召喚スマホアプリを作ってみた - Synamon’s Engineer blog](https://synamon.hatenablog.com/entry/arfoundation-unity-chan)

AR Foundationを用いてUnity上でARを実装する方法について紹介しています。

AR Foundationの導入方法から各種設定、iOS/Androidの実機ビルドの注意点、平面検出の利用方法、検出した平面上にオブジェクトを配置する方法についてそれぞれ解説しています。

## 瓶の中に入っている液体の簡易表現を実装してみる@Unity

[瓶の中に入っている液体の簡易表現を実装してみる@Unity - Qiita](https://qiita.com/aluminum1981/items/968f523f3cbc13345f4c)

Unityで、容器の中に入った液体を表現する方法について、シェーダーの実装と液体の充填、オブジェクトの挙動と連動した液体の波打ち表現についてそれぞれ紹介しています。

## Netcode for GameObjectsでプレイヤー間で同期する物体の生成 / 破棄

[Netcode for GameObjectsでプレイヤー間で同期する物体の生成 / 破棄 - Synamon’s Engineer blog](https://synamon.hatenablog.com/entry/ngo-networkobject-spawn)

Netcode for GameObjectsの `NetworkManager` でプレイヤー間で同期可能なオブジェクトを作成・破棄する方法と、スクリプトから同期可能オブジェクトの生成を行う方法について紹介しています。

## JobParallelForの改良案

[JobParallelForの改良案 - Qiita](https://qiita.com/A_rosuko/items/75b0bcbb1a00d483223d)

`FixedUpdate` のタイミングに合わせて `IJobParallelFor` で並列処理を実行する方法について紹介しています。

## MacとUnityでVTuberっぽくVRMを動かす方法

[MacとUnityでVTuberっぽくVRMを動かす方法 - Qiita](https://qiita.com/will-yama/items/d348db26d9309107ba31)

UniVRMとiFacialMocapを用いて、Unity上でVRMを動かす方法について紹介しています。

## Unityのキャラクターの不要コンポーネントをワンポチでremoveするエディタ拡張をサクッと書く

[Unityのキャラクターの不要コンポーネントをワンポチでremoveするエディタ拡張をサクッと書く - Qiita](https://qiita.com/iwaken71/items/ea454291f4982e026672)

ヒエラルキー上の特定コンポーネントをまとめて削除するエディタ拡張について紹介しています。

## WebSocketを使ってPCツールからUnityアプリを操作する

[[Unity] [Qt] WebSocketを使ってPCツールからUnityアプリを操作する - Qiita](https://qiita.com/MAA_/items/cd4953f43755b5796d76)

WebSocketSharpを用いてUnityとQt製のツールをWebSocketで繋ぎ、Unityを操作するデバッグアプリを作成する方法について紹介しています。

## Exception発生時に自動でSlackへレポート送信

[[Unity] Exception発生時に自動でSlackへレポート送信 - Qiita](https://qiita.com/sumchun/items/89050e82ee30c98c5971)

SRDebuggerと[Unity-SRDebugger_BugReport_Send_To_Slack](https://github.com/Itoen/Unity-SRDebugger_BugReport_Send_To_Slack)を用いて、例外が発生を検知して、自動的にSlackへその内容を送信する機能を実装する方法について紹介しています。

## Google Spreadsheetの値をScriptableObjectに反映させる

[Google Spreadsheetの値をScriptableObjectに反映させる - Qiita](https://qiita.com/TakashiHamada/items/198c520b815efb594a5c)

Google Spreadsheetに記述されているデータを、Google apps scriptを経由して出力し、その情報をScriptableObjectへ反映する方法について紹介しています。

## Unity Barracuda を利用して透明人間になるマン

[Unity Barracuda を利用して透明人間になるマン - Qiita](https://qiita.com/ku6ryo/items/02edb2506f2165fcedbd)

Unity Barracudaと[PINTO_model_zoo](https://github.com/PINTO0309/PINTO_model_zoo)を用いて人物のセグメンテーションを行い、その領域を背景で埋めることで、透明人間のような演出を実装する方法について紹介しています。

## VR空間で球面上を自由に歩き回りたい

[VR空間で球面上を自由に歩き回りたい（Unity） - Qiita](https://qiita.com/ozegod/items/8053442d8a2c68c5c960)

Unityで球面上を歩くようなキャラクター制御の実装方法について紹介しています。

## FancyCarouselView使ってみた

[FancyCarouselView使ってみた - Qiita](https://qiita.com/t_soto/items/6150675c049c353647f6)

[FancyCarouselView](https://github.com/Haruma-K/FancyCarouselView/) を利用してカルーセルビューを実装する方法について紹介しています。

## UnityでGitのリビジョンを表示したい！

[UnityでGitのリビジョンを表示したい！ - Qiita](https://qiita.com/sakudai/items/ecbf8a273eb840178f8b)

Processクラスを介してコマンドラインを直接叩いて、GitのリビジョンをUnityエディタ上で表示する方法について紹介しています。

---
type: "unity-weekly"
title: "Unity Weekly 103"
description: "2023/01/09週のUnity Weeklyです。インクリメンタルビルドパイプライン高速化、【年末だよ】Unity お・と・なのLT大会 2022などについて取り上げています。"
tags: ["Unity Weekly","Unity"]
date: "2023-01-10T00:00:01"
---

## Unity Officials

### インクリメンタルビルドパイプラインによるプレイヤーのビルドの高速化

[インクリメンタルビルドパイプラインによるプレイヤーのビルドの高速化 | Unity Blog](https://blog.unity.com/ja/technology/accelerating-player-builds-with-incremental-build-pipeline)

プレイヤービルドのインクリメンタルビルドパイプラインを高速化するために行ってきた施策やパイプラインの設計、どの程度高速化したかを[BoatAttackデモ](https://blog.unity.com/ja/technology/accelerating-player-builds-with-incremental-build-pipeline)のビルド時間で比較しています。

### 2022 年の Twitter で Unity 開発者から寄せられた最高のヒント集

[2022 年の Twitter で Unity 開発者から寄せられた最高のヒント集 | Unity Blog](https://blog.unity.com/ja/games/2022-best-tips-from-developers-on-twitter)

2022年にUnityコミュニティーから寄せられたTipsの中で、とくに参考になるものを紹介しています。

## Slides

### 【年末だよ】Unity お・と・なのLT大会 2022

2022/12/18に開催された「[【年末だよ】Unity お・と・なのLT大会 2022](https://meetup.unity3d.jp/jp/events/1384)」のスライド資料と登壇動画が公開されています。

* [UnityのCrash and Exception Reportingを活用しよう！ | Unity Learning Materials](https://learning.unity3d.jp/9490/)
    * Crash and Exception Reportingを用いて、サーバー側でエラーログや例外を調査したり、カスタムログを埋め込む方法などについて紹介しています。
* [ゲームのステージを動画配信の視聴者に作らせる | Unity Learning Materials](https://learning.unity3d.jp/9504/)
    * Genvid SDKを用いて、ゲーム実況を視聴しているユーザーが、配信者がプレイするゲームのステージを生成するようなシステムを制作する方法について紹介しています。
* [Unityの広告まわりの最新プロダクト 2022 まとめ | Unity Learning Materials](https://learning.unity3d.jp/9514/)
    * Unity Ads周辺のアップデートについて、メディエーションツールの変遷、SDKのアップデート、各種ツールについて紹介しています。
* [UnityのDevOpsまわりの最新プロダクト 2022 まとめ | Unity Learning Materials](https://learning.unity3d.jp/9540/)
    * 「Unity Teams」・「Unity Collaborate」・「Plastic SCM」・「Unity Cloud Build」のそれぞれのサービスの変遷やアップデートについて紹介しています。
* [Photon Fusion for Unityを 半年使ってわかった ハマりポイント | Unity Learning Materials](https://learning.unity3d.jp/9544/)
    * Photon Fusionを使う上でハマリポイントを5選紹介しています。
* [Unity で ARゲームを作った話 | Unity Learning Materials](https://learning.unity3d.jp/9548/)
    * 「うごっこランド」の開発を通じて得られたARゲームを開発する際の知見として「Unityで使える姿勢推定と表情推定ライブラリ」・「うごっこランドの技術スタック」・「モバイルでのパフォーマンス」についてそれぞれ紹介しています。
* [プレビュー版 Cinemachine3.0 紹介 | Unity Learning Materials](https://learning.unity3d.jp/9554/)
    * Cinemachine 3.0のアップデートで、2.Xと比べてコンポーネント単位でどのような変更が入るか、Splines対応などについてまとめています。

## Articles

### Snowglobe 

[Snowglobe | Cyanilux](https://www.cyanilux.com/tutorials/snowglobe/)

スノーグローブをVFX GraphとShader Graphを用いて再現する方法について紹介しています。
球体内の当たり判定込みのSnow particlesと、屈折を考慮したグローブの2つをメインで解説しています。

### Unity WebGLのProfilerや実行周りについて

[Unity WebGLのProfilerや実行周りについて｜黒河優介｜note](https://note.com/wotakuro/n/n081376960f8b)

WebGL PlayerとProfilerがどのように接続を確立するのかや、プロファイリング時に毎回Build & Runせずとも接続を行うためのエディター拡張などについて紹介しています。

### A Comprehensive Guide to the Execution Order of Unity Event Functions

[A Comprehensive Guide to the Execution Order of Unity Event Functions](https://www.edy.es/dev/docs/a-comprehensive-guide-to-the-execution-order-of-unity-event-functions/)

Unityのイベント実行順関数のチートシート。イベントメソッドの実行タイミングと、それぞれのメソッドの注意点についてまとめています。

### GitHub Actionsを使ってアプリを開発するときのワークフロー記述の個人的ベストプラクティス

[GitHub Actionsを使ってアプリを開発するときのワークフロー記述の個人的ベストプラクティス - Synamon’s Engineer blog](https://synamon.hatenablog.com/entry/2023/01/06/181710)

GitHub Actionsを用いてアプリをビルドする時のプラクティスとして、「GITHUB_STEP_SUMMARYへのパラメーターの書き出し」・「Problem Matchersによるエラーのサマリー表示」・「workflow_callによるトリガーと処理の分離」の3つを紹介しています。

### LineUtilityで直線データを削減する

[【Unity】LineUtilityで直線データを削減する | ねこじゃらシティ](https://nekojara.city/unity-line-utility-simplify)

`LineUtility.Simplify`メソッドを用いて、直線データを単純化してデータを削減する方法について紹介しています。

### ZStringを導入してマネージドヒープへのアロケーションを削減する

[【Unity】ZStringを導入してマネージドヒープへのアロケーションを削減する - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2023/01/05/120000)

ZStringの導入方法や基本的な使い方をまとめています。

### Unity Gaming Serviceのサンプルプロジェクトを触ってみる

[【Unity】Unity Gaming Serviceのサンプルプロジェクトを触ってみる - うどんてっくメモ](https://myudon.hatenablog.com/entry/2023/01/07/140319)

Unity Gaming Service（UGS）のUnity公式が提供する[サンプルプロジェクト](https://github.com/Unity-Technologies/com.unity.services.samples.use-cases)の中の箱庭ゲーム「[Idle Clicker game](https://github.com/Unity-Technologies/com.unity.services.samples.use-cases/blob/main/Assets/Use%20Case%20Samples/Idle%20Clicker%20Game/README.md)」の実装を、ユーザー認証やロジック実装部（Cloud Code）を中心に解説しています。

### UnityTestがWebGL Playerで実行できるようになっていた 

[UnityTestがWebGL Playerで実行できるようになっていた - やらなイカ？](https://www.nowsprinting.com/entry/2023/01/06/072103)

[Unity Test Framework](https://docs.unity3d.com/Packages/com.unity.test-framework@1.3/index.html)パッケージのWebGL Player対応について紹介しています。
また、非同期テストがWebGL Playerでは動作しない点についても言及しています。

### uLipSync の新機能解説（実行時のセットアップ / タイムライン上の自動クリップ追加機能）

[uLipSync の新機能解説（実行時のセットアップ / タイムライン上の自動クリップ追加機能） - 凹みTips](https://tips.hecomi.com/entry/2023/01/06/013115)

ブログ著者の開発するuLipSyncの新機能「実行時のセットアップ」と「タイムライン上の自動クリップ追加」機能について、それぞれ紹介しています。

## Repositories

### UnityScriptableObjectDatabase

[UnityScriptableObjectDatabase/Documentation.en.md at master · NuclearBand/UnityScriptableObjectDatabase](https://github.com/NuclearBand/UnityScriptableObjectDatabase/blob/master/Assets/com.nuclearband.sodatabase/Documentation/Documentation.en.md)

ScriptableObjectによるデータベース実装。Odin Inspectorを用いてGUIを構築している。

### UnityGoogleDrive

[Elringus/UnityGoogleDrive: Google Drive SDK for Unity game engine](https://github.com/Elringus/UnityGoogleDrive?)

Unityで利用できるGoogle Drive SDK。ドライブ内ファイルのリストアップや検索、作成、編集、削除、アップロード、ダウンロードなどを行うことができる。

### TextureMerge

[Fidifis/TextureMerge: Software to merge (or pack) textures into image channels, producing one image with up to four textures.](https://github.com/Fidifis/TextureMerge)

テクスチャをチャンネルごとに合成・パックすることで、1枚のテクスチャに対して最大4枚のテクスチャをパックするツール。

### Serially

[CareBoo/Serially: Adds a unity-supported, SerializableType class and an inspector for editing SerializeReference fields.](https://github.com/CareBoo/Serially?)

`System.Type`をシリアライズする[SerializableType](https://github.com/CareBoo/Serially/blob/main/Documentation~/SerializableType.md)と`SerializeReference`に対して選択した型のインスペクターを表示する[ShowSerializeReference](https://github.com/CareBoo/Serially/blob/main/Documentation~/ShowSerializeReference.md)を提供するライブラリ。

### EcsRx

[EcsRx/ecsrx: A reactive take on the ECS pattern for .net game developers](https://github.com/EcsRx/ecsrx?)

ECSパターンに対してRxパターンを提供するライブラリ。

### unity-vectorfield

[komietty/unity-vectorfield: Vector field library for Unity](https://github.com/komietty/unity-vectorfield?)

メッシュ上のベクトル場を生成するジェネレーターと、ベクトル場上での演算を提供するユーティリティライブラリ。
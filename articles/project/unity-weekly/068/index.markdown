---
type: "unity-weekly"
title: "Unity 2022.1 TECHストリーム、2Dアートブック、ARCore Geospatial API、Mixture、InputCompositeBinding - Unity Weekly #068"
date: "2022-05-16T08:00:00+09:00"
draft: false
tags: ["Unity", "Unity Weekly"]

---

# Unity Official

## Unity 2022.1 TECH ストリームが公開されました

[Unity 2022.1 TECH ストリームが公開されました | Unity Blog](https://blog.unity.com/ja/news/unity-20221-tech-stream-is-now-available)

Unity 2022の正式版の第一弾が公開されました。

この記事ではUnity 2022.1で追加・改善された機能のうち、下記についてそれぞれ紹介しています。

- エディター機能の強化
    - UI Toolkit
    - TreeView
    - 新しいベクター描画API
    - スプラインツール
    - [Material API](https://docs.unity3d.com/Packages/com.unity.render-pipelines.high-definition@13.1/manual/Material-API.htm)
    - ファイルシステム用API
        - このAPIを用いた[AssetBundle Analyzerの実装](https://github.com/Unity-Technologies/UnityDataTools)
- QoL向上
    - [マテリアルバリアント](https://docs.unity3d.com/2022.1/Documentation/Manual/materialvariant-concept.html)
    - ビジュアルサーチクエリ
    - スプライトアトラスv2をデフォルトに
    - 2D PSD Importer
    - 2D物理演算支援のためのドロネーテッセレーション
    - IL2CPPのFull Generic Sharing
- プロファイリングツール強化
    - Frame Timing Managerで取得できる情報の強化（[フォーラム](https://forum.unity.com/threads/update-for-frame-timing-manager.1191877)）
    - Scriptable Render PipelineのためのFrame Stats Profilerを[レンダリングデバッガー](https://docs.unity3d.com/Packages/com.unity.render-pipelines.high-definition@13.1/manual/Render-Pipeline-Debug-Window.html)に追加
- プラットフォーム最適化
    - Adaptive Performance 4.0
        - Sumsungデバイスでのパフォーマンス最適化用途
        - 物理・デカール・レイヤーカリング・カスタムの４つのスケーラーを追加
        - Visual Scriptingサポート
    - System Metrics Maliパッケージ
        - Maliを積んだAndroid端末で詳細なメトリクスを取得できる
    - iOSで最新のインクリメンタルビルドパイプラインが利用可能に

## 過去最大ボリュームの e ブック：アーティストのための 2D ゲームアート、アニメーション、ライティング

[過去最大ボリュームの e ブック：アーティストのための 2D ゲームアート、アニメーション、ライティング | Unity Blog](https://blog.unity.com/ja/games/our-biggest-e-book-yet-2d-game-art-animation-and-lighting-for-artists)

Unityで2Dゲーム制作時の、主にアーティスト向けの内容を扱うe-Bookが公開されました。

このe-Bookは、開発開始時の技術的な検討事項や、アセットの視点（Perspective）やアセットの解像度の選定、DCCツールのラウンドトリップ、レベルデザイン・2Dアニメーションやリギング・2Dライトについての解説、高度なビジュアルエフェクトおよびポストプロセッシングの技術的な詳細についての解説など、幅広く扱っています。

このe-Bookで、[こちら](https://resources.unity.com/games/2d-game-art-animation-lighting-for-artists-ebook)から無料でダウンロードできます。

## Unity プロファイラーでパフォーマンス指標をカスタマイズする

[Unity プロファイラーでパフォーマンス指標をカスタマイズする | Unity Blog](https://blog.unity.com/ja/technology/customizing-performance-metrics-in-the-unity-profiler)

Unity 2021 LTSに追加された新しいプロファイラーの拡張機能について紹介しています。

Unity 2021 LTSでリリースされた[Profiling.Core](https://docs.unity3d.com/Packages/com.unity.profiling.core@1.0/manual/profilercounter-guide.html)パッケージを用いた独自のプロファイラーカウンターの実装方法と、カスタムプロファイラーモジュールを利用してProfilerにプロジェクト独自のプロファイラーモジュール（Unity標準で用意されているMemoryやGPUモジュールみたいな形で、プロジェクト独自にモジュールを定義できる）の追加方法についてそれぞれ解説しています。

## ロボット工学のツールボックスを拡張する：Unity 2022.1 における物理システムの変更点

[ロボット工学のツールボックスを拡張する：Unity 2022.1 における物理システムの変更点 | Unity Blog](https://blog.unity.com/ja/manufacturing/expanding-the-robotics-toolbox-physics-changes-in-unity-20221)

Unity 2022.1での物理演算周辺でのアップデートについて紹介しています。

Physics Debuggerの改良によるUI改善・接触点の可視化（法線と離隔距離の表示・各種レイキャストの可視化）、インバースダイナミクス（目的の軌道に対して、その軌道を描くために必要な力を計算する）、補間と外挿の改善によるパフォーマンス向上についてそれぞれ解説しています。

## Cloud Content Delivery：2022 年春の新情報

[Cloud Content Delivery：2022 年春の新情報 | Unity Blog](https://blog.unity.com/ja/games/whats-new-in-cloud-content-delivery-spring-2022-update)

Unity Gaming Services（UGS）のCloud Content Delivery（CCD）で追加された機能や活用方法について紹介しています。

[Game Overrides](https://docs.unity.com/gameoverrides/WhatsGameOverrides.html)や[Remote Config](https://unity.com/ja/products/remote-config)を組み合わせることでアセット配信のスケジューリングやプレイヤーに応じたアセット配信やA/Bテストの実施方法や、新しくリリースされたCCD Management SDKの紹介、そのSDKを用いた[Addressable Asset SystemとCCDの連携改善](https://docs.unity3d.com/Packages/com.unity.addressables@1.19/manual/AddressablesCCD.html)についてそれぞれ触れています。

## Unity ゲーミングサービスの新しいサンプルゲーム『Loady Dungeons』で、ジュラ紀の世界をその手に収めよう

[Unity ゲーミングサービスの新しいサンプルゲーム『Loady Dungeons』で、ジュラ紀の世界をその手に収めよう | Unity Blog](https://blog.unity.com/ja/games/get-jurassic-with-loady-dungeons-the-new-ugs-sample-game)

Unityがリリースした、カジュアルゲーム向けの新しいサンプルゲーム「[Loady Dungeons](https://unity.com/ja/demos/loady-dungeons)」について紹介しています。

このサンプルゲームが開発された目的や、このゲームに組み込まれている Addressables と Cloud Content Delivery の実装についてそれぞれ解説しています。

## Unity の DevOps に対するビジョンを定める

[Unity の DevOps に対するビジョンを定める | Unity Blog](https://blog.unity.com/ja/technology/setting-the-vision-for-unity-devops)

Unityの[DevOps](https://unity.com/ja/solutions/what-is-devops)についての方針について共有しています。

[Unity Teams](https://unity.com/ja/products/unity-teams)バンドルを廃止によるUnity ProとUnity EnterpriseサブスクリプションからTeams Advanced、[Cloud Build](https://unity.com/ja/solutions/ci-cd)で[従量制の料金体系](https://unity.com/ja/products/unity-devops/pricing)の採用、レポジトリ上限が40GB・同時実行数の上限を8・IL2CPPビルドにWindowsビルダー追加、Unityでのバージョン管理がUnity Collaborateから[Plastic SCM](https://blog.unity.com/ja/games/upgrading-from-collaborate-to-unity-plastic-scm)へアップデートなどが紹介されています。

## レガシーバージョンの Analytics から Unity ゲーミングサービスの Analytics へのアップグレード

[レガシーバージョンの Analytics から Unity ゲーミングサービスの Analytics へのアップグレード | Unity Blog](https://blog.unity.com/ja/games/upgrading-from-legacy-analytics-to-unity-gaming-services-analytics)

UGSにリリースされているAnalyticsの機能紹介と、[レガシーバージョンのAnalytics](https://docs.unity3d.com/ja/current/Manual/UnityAnalytics.html)からAnalyticsへ移行するためのガイドラインについて解説しています。

## Decalによる様々な表現と使い方

[Decalによる様々な表現と使い方 | Unity Learning Materials](https://learning.unity3d.jp/8317/)

Decalの概要と、High Definition Render Pipeline（HDRP）およびUniversal Render Pipeline（URP）でDecalの利用するための設定やShader Graphの構築方法について解説しています。

## OSCって何？UnityビジュアルスクリプティングでOSC通信してみよう！

[OSCって何？UnityビジュアルスクリプティングでOSC通信してみよう！ - YouTube](https://www.youtube.com/watch?v=aGwpV28EF94)

Open Sound Control（OSC）をUnityビジュアルスクリプティングで扱い、外部のデバイスからUnityアプリを操作したり、Unityアプリ上から外部デバイスを操作する方法について紹介しています。

# Articles

## Destroyable tilemaps in 2D Unity platformer

[Destroyable tilemaps in 2D Unity platformer - Pav Creations](https://pavcreations.com/destroyable-tilemaps-in-2d-unity-platformer/)

2D Tilemapを用いて2Dプラットフォームゲームで爆弾などで壊せる壁などの破壊可能なグリッドを実装する方法について、アセットの構築方法からスクリプトの実装方法について解説しています。

## C++ライブラリ（DLL）をUnity（C#）向けに作成して利用するシンプルな方法

[C++ライブラリ（DLL）をUnity（C#）向けに作成して利用するシンプルな方法](https://zenn.dev/meson/articles/make-dll-for-unity)

UnityでC++ライブラリを作成して利用する方法について、C++プロジェクトの作成方法からビルドしてDLLを生成する手順、DLLをUnityに取り込む方法からDLL内の関数をUnityで呼び出すための定、C++からC#のメソッドを関数ポインタ経由で呼び出す方法についてそれぞれ解説しています。

## InputCompositeBindingのTouchscreenでの応用例の紹介

[InputCompositeBindingのTouchscreenでの応用例の紹介 - Synamon’s Engineer blog](https://synamon.hatenablog.com/entry/unity_input_composite_bindings_application)

新しいInput Systemで、InputCompositeBindingをタッチスクリーン上でタップした位置をそのまま入力として受け取る方法や、仮想ボタンを定義してそのボタンを入力として受け取る方法についてそれぞれ解説しています。

## ダイレクトタッチ(ポーク)を実現する Poke Interaction の概説【Oculus Interaction SDK】

[ダイレクトタッチ(ポーク)を実現する Poke Interaction の概説【Oculus Interaction SDK】 - デニッキ！](https://xrdnk.hateblo.jp/entry/interaction_sdk_poke)

Oculus Interaction SDKで、空間上のボタンを直接タッチする Poke Interaction についての機能概要と、これを実装するためのコンポーネント郡についてそれぞれ解説しています。

## Oculus Interaction SDK の Sample シーンを URP で利用できるようにする

[Oculus Interaction SDK の Sample シーンを URP で利用できるようにする - デニッキ！](https://xrdnk.hateblo.jp/entry/2022/05/11/155604)

Oculus Integration SDKのサンプルシーンをUniversal Render Pipeline（URP）対応した有志のレポジトリと、これを用いてサンプルシーンをURP対応する方法についてそれぞれ紹介しています。

## Codemagicを使ってUnity iOSアプリをApp Store Connectに公開する方法

[Codemagicを使ってUnity iOSアプリをApp Store Connectに公開する方法 - Qiita](https://qiita.com/liina/items/ae7c68ce59d7f5a36ee5)

[Codemagic](https://codemagic.io/start/)を利用してUnityで作成したOSアプリを自動ビルドするための設定方法やポストビルドスクリプトの記述方法などについてそれぞれ紹介しています。

## UPMでプライベートリポジトリを指定したUnityプロジェクトをGameCIで動かす

[UPMでプライベートリポジトリを指定したUnityプロジェクトをGameCIで動かす](https://zenn.dev/chorome/articles/1f0ffbf2ba5077)

パッケージマネジャーの依存にプライベートリポジトリを指定したプロジェクトを[GameCI](https://game.ci/)を用いてビルドするときに、SSH鍵経由でプライベートレポジトリを認証する方法について紹介しています。

## Unity上でテクスチャをノードベースで生成できるOSS「Mixture」の使い方簡単にまとめ

[【Unity】Unity上でテクスチャをノードベースで生成できるOSS「Mixture」の使い方簡単にまとめ - LIGHT11](https://light11.hatenadiary.com/entry/2022/05/10/195218)

ノードベースの記述でプロシージャルにテクスチャを作成する[Mixture](https://github.com/alelievr/Mixture)というライブラリの導入方法から実際のテクスチャアセットの作成方法、ランタイム上でRender Textureにテクスチャを書き出すRealtime Mixtureについてそれぞれ解説しています。

## ARCore Geospatial APIをUnityで使ってみる

[ARCore Geospatial APIをUnityで使ってみる](https://zenn.dev/tkada/articles/04b44474149130)

先日のGoogle I/O 2022で発表された「ARCore Geospatial API」をUnityで利用するためのサービス設定やSDK（[Google ARCore Extensions for AR Foundation](https://github.com/google-ar/arcore-unity-extensions)）のインストール方法、サンプルアプリのビルド方法、任意のオブジェクトを配置する方法についてそれぞれ解説しています。

## UnityからPythonモジュールを呼び出す【Python.NET】

[UnityからPythonモジュールを呼び出す【Python.NET】](https://zenn.dev/ryuryu/articles/20220426-python-for-unity)

C#から直接Pythonモジュールを実行するPython.NETの紹介と、Unity上でのセットアップ方法についてそれぞれ紹介しています。

## TextMeshProでアウトライン付けたテキストのフォントサイズを変えた時にアウトラインが付かずに範囲内の色が変わってしまう場合の対処法

[TextMeshProでアウトライン付けたテキストのフォントサイズを変えた時にアウトラインが付かずに範囲内の色が変わってしまう場合の対処法【Unity】【TextMesh Pro】【トラブルシューティング】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/TextMeshPro_Outline_Trouble)

TextMeshProでアウトラインをつけたテキストのフォントサイズを変えたときに、アウトラインが付かずにさらにテキスト描画範囲の色が変わってしまう場合の対処方法について紹介しています。
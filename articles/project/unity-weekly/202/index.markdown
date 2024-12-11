---
type: "unity-weekly"
title: "Unity Weekly 202"
description: "2024/12/09週のUnity Weeklyです。Multiplayer Game E-book、CA.unity、MessagePack for C# v3、Advent Calendarなどについて取り上げています。"
tags: ["Unity Weekly", "Unity"]
date: "2024-12-09T00:00:01"
---

## Unity Officials

### Ultimate guide: Multiplayer Networking for Advanced Unity Developers

[Ultimate guide: Multiplayer Networking for Advanced Unity Developers | Unity](https://unity.com/blog/multiplayer-networking-ebook)

マルチプレイヤーゲームを開発するUnity開発者向けのE-book「[The ultimate guide to multiplayer networking for advanced Unity developers](https://unity.com/resources/ultimate-guide-advanced-multiplayer-networking)」がリリースされました。

この記事では、E-bookで取り扱っている内容の概要を紹介しています。

## Events

### CA.unity #9

[CA.unity #9 - connpass](https://cyberagent.connpass.com/event/336971/)

2025/01/08に株式会社サイバーエージェントが主催するUnityに関する勉強会「CA.unity」の第9回が開催されます。

今回はユニティ・テクノロジーズ・ジャパン株式会社コラボ回で、主にUnity 6でのアップデートや追加された機能について発表があります。

また、今回はオフライン（AbemaTowers）とオンラインのハイブリッド開催となります。

現在、オンラインとオフラインの両枠の参加を募集しています。

## Articles

### SourceGenerator対応のMessagePack for C# v3リリースと今後について

[neue cc - SourceGenerator対応のMessagePack for C# v3リリースと今後について](https://neue.cc/2024/12/06_MessagePack_v3.html)

MessagePack for C# v3のリリースに含まれているSource Generator対応と、今後の開発方針について解説しています。

### フロー解析を実装した静的解析ツールをOSS公開しました

[フロー解析を実装した静的解析ツールをOSS公開しました - DeNA Testing Blog](https://swet.dena.com/entry/2024/12/03/120000)

DeNA社が公開したC#のコードをフロー解析することで `await` 忘れを検知する「[MustAwaitAnalyzer](https://github.com/DeNA/MustAwaitAnalyzer)」について、このライブラリの概要やフロー解析の概要について紹介しています。

### Unity 6 Sentisを触ってみた!

[Unity 6 Sentisを触ってみた!｜アップフロンティア株式会社](https://note.com/upfrontier/n/n75a174e90c66)

Unity 6から利用できるUnity Sentisを用いて、[BlazeHand](https://huggingface.co/unity/sentis-blaze-hand)モデルによるハンドトラッキングやGoogleの提供する「[Quick,Draw!](https://quickdraw.withgoogle.com/)」をMeta Quest 3/3S上で動かす実装について紹介しています。

### 結局Addressablesでリソースダウンロード・リソース更新を行うにはどうしたら良いの？という貴方へ

[[Unity Addressables] 結局Addressablesでリソースダウンロード・リソース更新を行うにはどうしたら良いの？という貴方へ #AssetBundle - Qiita](https://qiita.com/AzuQiita/items/e00c5fbb0711c01d8ed6)

Addressablesを用いたリソースを管理からAssetBundleのビルド、ビルドしたAssetBundleをサーバー（今回はS3）へアップロード方法など、Addressablesによるリモートアセット配信の実現方法について解説しています。

### Shoreline Shader Breakdown

[Shoreline Shader Breakdown | Cyanilux](https://www.cyanilux.com/tutorials/shoreline-shader-breakdown/)

海岸線の波を打つようなシェーダー表現について、2種類の海外線の表現のアプローチや波の表現、濡れた砂の表現についてそれぞれShader Graphにおける実装を解説しています。

### Edge Detection Outlines

[Edge Detection Outlines](https://ameye.dev/notes/edge-detection-outlines/)

Unity 2022 LTSとUnity 6で動作する、フルスクリーンレンダーパス内でのエッジ検出によるアウトライン描画について、概要からシェーダー実装までを紹介しています。

### IL2CPP が出力した C# の文字列の扱いを探ってみた

[IL2CPP が出力した C# の文字列の扱いを探ってみた - e.blog](https://edom18.hateblo.jp/entry/2024/12/05/084553)

C#の文字列が、IL2CPP C++上でどのように扱われているのか、実際のIL2CPPが出力するコードをたどりながら解説しています。

### Unity 6から追加されたAndroidに関するAPIの紹介

[Unity 6から追加されたAndroidに関するAPIの紹介 | Yucchiy's Note](https://blog.yucchiy.com/2024/12/new-android-api-in-unity6/)

Unity 6から追加されたAndroidに関するAPIについてその概要と基本的な使い方を紹介しています。

### モデルをイジらずポスプロも要らず。ハードエッジをサクッと解決する背面法アウトラインの作り方

[[Unity]モデルをイジらずポスプロも要らず。ハードエッジをサクッと解決する背面法アウトラインの作り方 #Shader - Qiita](https://qiita.com/flankids/items/259085b95a23c0e7ad49)

背面法によるアウトライン描画に、3Dモデル上に存在する法線を「[# Unity Outline Normal Smoother](https://github.com/JasonMa0012/OutlineNormalSmoother)」により加工した法線を用いることで、手軽なアウトライン描画を実現する方法について紹介しています。

### Github ActionsでUnityアプリをビルドする前に知っておきたかったこと

[Github ActionsでUnityアプリをビルドする前に知っておきたかったこと #GitHubActions - Qiita](https://qiita.com/neon-izm/items/3db5f6ac0df4a189ec07)

UnityプロジェクトをGitHub Actions上でアプリビルド際のプラクティスについてまとめています。

### Rive Unityを使ってみる

[Rive Unityを使ってみる #Unity - Qiita](https://qiita.com/thammin/items/6136dc5f45f15acea751)

モーショングラフィックを制作・実行するための「[Rive](https://rive.app/)」についての概要からUnityへの導入方法や利用方法についてまとめています。

### UnityのAnimationC#Jobsを使用した曲げ捻り補助骨の実装例

[UnityのAnimationC#Jobsを使用した曲げ捻り補助骨の実装例 #animation - Qiita](https://qiita.com/salt-k2t/items/beb26c884e25d0c9c6a1)

C# Animation Jobを用いた補助骨による曲げや捻りの実装について、その概要から実装例を紹介しています。

### マルチシーンエディティングを知って、考えるシーン構造 

[【Unity】マルチシーンエディティングを知って、考えるシーン構造 #Unity3D - Qiita](https://qiita.com/4_mio_11/items/0efe6f5f8e350b551bb8)

マルチシーンエディッティングによるシーン管理について、採用するメリット・デメリット・注意点からマルチシーンで開発を行う際のカメラやイベントシステムの扱い、ロードやアンロードの方法についてまとめています。

### InstantiateAsyncの使い方と速度検証

[【Unity】InstantiateAsyncの使い方と速度検証](https://zenn.dev/ambr_inc/articles/1636d59bdf8786)

`Object.InstantiateAsync` について、その基本的な使い方やこのAPIのパフォーマンスの検証結果を紹介しています。

### カジュアルゲームに使いやすい「これでいい」水面シェーダー

[[Unity]カジュアルゲームに使いやすい「これでいい」水面シェーダー #Shader - Qiita](https://qiita.com/flankids/items/8e1a4d5c807c1eadfe05)

シンプルなシェーダーで実現できる水面シェーダーについて、その実装を紹介しています。

### 実践flutter_unity_widget Protobufを用いたアプリ間状態同期

[実践flutter_unity_widget Protobufを用いたアプリ間状態同期 #Unity - Qiita](https://qiita.com/t5ujiri/items/b866bc52480222c70a70)

Flutter（flutter_unity_widget）とUnityの間で、Reduxのような設計を用いて、Protobufをプロトコルにしたメッセージングによって状態を同期するための実装についてその実装を紹介しています。

### Androidのローカル通知実装と審査対応

[【Unity】Androidのローカル通知実装と審査対応](https://zenn.dev/ambr_inc/articles/7c70b349a5eb27)

Androidのローカル通知の独自実装の設計やその実装、GooglePlayConsoleにアプリを提出した際の審査対応について紹介しています。

### TextMeshProで複数フォントを1つのアトラスに無理やり書き込む方法

[TextMeshProで複数フォントを1つのアトラスに無理やり書き込む方法 #C# - Qiita](https://qiita.com/tyanmahou/items/918060a58e1dae362ef9)

リフレクションを介して`TMP_FontAsset`の非公開のフィールドにアクセスすることで、複数のフォントアセットを1つのアトラスに書き出す方法を紹介しています。

### UnityのAnimationMixerPlayableにはブレンドした時、片方が空クリップだったとしてもルートモーションのRotationだけ謎にWeightでLerpされるバグがある！

[UnityのAnimationMixerPlayableにはブレンドした時、片方が空クリップだったとしてもルートモーションのRotationだけ謎にWeightでLerpされるバグがある！ - Akatsuki Hackers Lab | 株式会社アカツキ（Akatsuki Inc.)](https://hackerslab.aktsk.jp/2024/12/03/164543)

AnimationMixerPlayableの特定条件下によるルートモーションのRotationブレンド挙動の不具合とそのワークアラウンドについて紹介しています。

### Unityでゲームシーン実行中のGC Allocをゼロに保つために気をつけていること

[Unityでゲームシーン実行中のGC Allocをゼロに保つために気をつけていること #C# - Qiita](https://qiita.com/TP113/items/6985824fee01bffd0526)

GC.Allocを回避するために気をつけるべきポイントをまとめています。

### Unity2023.1からdidAwake,didStartなんてのがあった 

[【ハルシオンブログ】Unity2023.1からdidAwake,didStartなんてのがあった - ハルシオンシステムの気ままBlog](http://halcyonsystemblog.jp/blog-entry-1116.html)

Unity 2023.1から追加された、`MonoBehaviour` の `Awake` や `Start` が実行済みかを判定するために追加されたプロパティについて紹介しています。

### 2Dキャラの髪や衣装の自然な揺れを簡単にする拡張

[[Unity] 2Dキャラの髪や衣装の自然な揺れを簡単にする拡張 #ゲーム制作 - Qiita](https://qiita.com/Shinoda_Naoki/items/ec19ef8d610b939dc312)

Unity Animation2Dに含まれる`SpriteSkin`を用いたキャラクター制御の実装においてゆれものを実装するためのコンポーネント実装について解説しています。

### レイマーチングのQuest対応

[【VRChat】レイマーチングのQuest対応(モバイルVR対応)](https://zenn.dev/dimebag29/articles/5a3bce19f653e0)

レイマーチングによる描画をQuest（モバイルVR）に対応させるためのシェーダー対応のポイントをまとめています。

### UnityのAddressableアセットをビルドしてからCloudflare R2へとアップロードするエディタ拡張を作成する

[UnityのAddressableアセットをビルドしてからCloudflare R2へとアップロードするエディタ拡張を作成する #CloudflareR2 - Qiita](https://qiita.com/furyu-nakagawa/items/03ccf680b5fa5787d195)

AddressablesでビルドしたAssetBundleをCloudflare R2へアップロードするためのエディター拡張の実装と実際のビルド・アップロード処理について紹介しています。

### デバッグシステムを強化するSR Debuggerのタブ拡張手法

[【Unity】デバッグシステムを強化するSR Debuggerのタブ拡張手法 #ゲーム制作 - Qiita](https://qiita.com/4_mio_11/items/0a607fd6d3a4efe182b0)

デバッグメニューライブラリ「[SR Debugger](https://www.stompyrobot.uk/tools/srdebugger/)」のタブ表示を拡張する方法について紹介しています。

### 2024年版Cardboard用プロジェクトを作る方法

[【Unity】2024年版Cardboard用プロジェクトを作る方法](https://zenn.dev/tkada/articles/7fc69b5a4b5c06)

VRデバイス「Google Cardboard」用のプロジェクトをUnity 6を作成するためのプロジェクトやiOS/Androidでのビルド設定について紹介しています。

### Unityエディタのオペレーション運用を見据えたコンポーネント設計の提案

[Unityエディタのオペレーション運用を見据えたコンポーネント設計の提案 #C# - Qiita](https://qiita.com/jscmla1118/items/773c9c2e92fa36f5605f)

拡張性や運用を見据えたエディター拡張のコンポーネント設計についてその詳細を説明しています。

### Unityでリアルな車の挙動を簡単に作ろう！

[Unityでリアルな車の挙動を簡単に作ろう！ #Collider - Qiita](https://qiita.com/kota_geek/items/448c03a53f0a0910f0dc)

Wheel Colliderを用いて車の挙動を再現するための調整方法について紹介しています。

### SceneSemanticAPIを使ってオクルージョン処理を実現する

[【Unity】SceneSemanticAPIを使ってオクルージョン処理を実現する #C# - Qiita](https://qiita.com/OKsaiyowa/items/8d86c985312dc5f05660)

ARCoreのSceneSemanticAPIによるシーンセグメンテーションを用いて空の領域のみにオブジェクトを描画し、擬似的なオクルージョン表現を実現する方法について紹介しています。

### Google.ProtobufのTypeInitializationExceptionの対処方

[Google.ProtobufのTypeInitializationExceptionの対処方](https://zenn.dev/hatopopo_0113/articles/893da55614257e)

Google.Protobufの一部メソッド・プロパティが、Managed Code Strippingによってコードが削られて利用できず `TypeInitializationException` を吐くケースとその対応について紹介しています。

### PC1台(Unity1つ)でマルチプレイを簡単に確認出来る Multiplayer Play Modeの導入と使い方

[PC1台(Unity1つ)でマルチプレイを簡単に確認出来る Multiplayer Play Modeの導入と使い方【Unity】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/Multiplayer_Play_Mode)

1マシン上で、同プロジェクトを複数立ち上げることでマルチプレイをテストするための「[Multiplayer Play Mode](https://docs.unity3d.com/Packages/com.unity.multiplayer.tools@2.2/manual/index.html)」の導入方法と使い方について紹介しています。

### シェーダーで世界を曲げる

[【Unity】シェーダーで世界を曲げる #Shader - Qiita](https://qiita.com/ducchy/items/566e526df0183588054f)

平たい背景をシェーダーによって丸める（世界を曲げる）表現について、計算の概要と実際のシェーダーを紹介しています。

### GitHub ActionsのWindows Serverでビルドが「Failed to get ipc connection from UnityShaderCompiler shader compiler」で失敗する

[【Unity】GitHub ActionsのWindows Serverでビルドが「Failed to get ipc connection from UnityShaderCompiler shader compiler」で失敗する - うどんてっくメモ](https://myudon.hatenablog.com/entry/2024/12/08/123742)

Windows Servers上で「Failed to get ipc connection from UnityShaderCompiler shader compiler」というエラーが出た際の対応方法について紹介しています。

### UniRXからR3移行時にRepeatオペレーターが廃止されていて困った話

[UniRXからR3移行時にRepeatオペレーターが廃止されていて困った話 #C# - Qiita](https://qiita.com/harashima318/items/ba418dda24e13656286c)

UniRxにあってR3にない `Repeat` を代替する手法についていくつか紹介しています。

### 自作Editor拡張で固めた開発環境を紹介してみる

[【Unity】自作Editor拡張で固めた開発環境を紹介してみる #C# - Qiita](https://qiita.com/ayaha401/items/d3badb58a56d2f2852d8)

記事の著者が個人のシェーダー制作で用意しているエディター拡張で実装された開発ツールについて紹介しています。

### Unity6+VisualStudio2022でNuGetパッケージをインストールする入門

[#unity Unity6+VisualStudio2022でNuGetパッケージをインストールする入門 - 土屋つかさの技術ブログは今か無しか](https://someiyoshino.info/entry/2024/12/06/173523)

Unity 6でNuGetForUnityを用いてNuGetパッケージをインストールする方法について紹介しています。

### Unityでディゾルブシェーダーを作る方法

[Unityでディゾルブシェーダーを作る方法 #ゲーム制作 - Qiita](https://qiita.com/YSnami/items/7a87a258536e878fe425)

オブジェクトが消失するさいの表現としてのディゾルブシェーダーの実装について紹介しています。

### VFXGraphsがWebビルドに対応したので、早速ビルドをしてみた!

[VFXGraphsがWebビルドに対応したので、早速ビルドをしてみた! #Unity - Qiita](https://qiita.com/KoniroIris/items/7ba271b353f8494da52d)

Unity 6でVFXGraphをWebプラットフォーム上でビルドする方法について紹介しています。

### 他のクラスが初期化されるまで待つ - UniTaskCompletionSourceの使用例

[【UniTask】他のクラスが初期化されるまで待つ - UniTaskCompletionSourceの使用例 #Unity - Qiita](https://qiita.com/watabe_h/items/e3ccd749142cb37616e2)
`UniTaskCompletionSource` によって、`MonoBehaviour` の初期化完了を待つ実装について紹介しています。

## Repositories

### MessagePack for C# v3

[Release v3.0.3 · MessagePack-CSharp/MessagePack-CSharp](https://github.com/MessagePack-CSharp/MessagePack-CSharp/releases/tag/v3.0.3)

MessagePack for C# v3がリリースされました。

このバージョンから内部のコード生成がSource Generatorで行われるようになり、あわせてUnityでコード生成で必要だったmpcが不要になりました。
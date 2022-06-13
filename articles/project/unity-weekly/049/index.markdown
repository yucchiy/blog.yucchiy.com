---
type: "unity-weekly"
title: "Advent Calendar 2021特集 その4 - Unity Weekly #049"
date: "2021-12-27T10:00:01+09:00"
draft: false
tags: ["Unity", "Unity Weekly", "Advent Calendar 2021"]

---

## Addressable Asset System入門

[Addressable Asset System入門 - Synamon’s Engineer blog](https://synamon.hatenablog.com/entry/introduction-to-addressable-asset-system)

Addressablesについて、執筆時の最新のバージョン（1.19.14）の情報をまとめています。

Addressablesを導入するメリットからパッケージの導入方法、アセットへのAddressablesの設定方法、ロード方法として `Addressables.InstantiateAsync` と `AssetReferenceT` を用いてそれぞれロードする方法、Addressables Groupsの設定方法、Addressables Analysisを用いてアセットの状況を分析する方法をそれぞれ解説しています。

## 【Unity, C#】非publicな型やメンバにアクセスするには、多分これが一番手軽だと思います

[【Unity, C#】非publicな型やメンバにアクセスするには、多分これが一番手軽だと思います - Qiita](https://qiita.com/mob-sakai/items/37978a030d6a6e262065)

パッケージなど、直接編集することが難しいAPIの非publicな型やメンバーにアクセスする方法について、Assembly Definition Reference（asmref）を用いて `InternalsVisibibleToAttribute` を追加してinternalアクセスする方法と、[CSharpCompilerSettingsForUnity](https://github.com/mob-sakai/CSharpCompilerSettingsForUnity) を用いて `IgnoresAccessChecksToAttribute` 属性を追加して internalとprivateアクセスする方法の紹介と、またそれぞれの実装の注意点について紹介しています。

## 滲みにこだわるブラウン管シェーダ

[【Unity】滲みにこだわるブラウン管シェーダ - Qiita](https://qiita.com/saragai/items/2885d83f55a46f206d1d)

ブラウン管のうち、アパーチャーグリル方式の描画を再現するブラウン管シェーダーの実装方法について、その原理からBuilt-in Render Pipelineによる実装方法をそれぞれ紹介しています。

## Unityでアプリ内にアセットを組み込む3つの方法

[Unityでアプリ内にアセットを組み込む3つの方法 | Yucchiy's Note](https://blog.yucchiy.com/2021/12/built-in-asset-for-unity/)

Unityで作成したアプリで、アセットをアプリ内に組み込む方法として、 Resources API と StreamingAssets、Addressablesによって組み込む方法を、それぞれの注意点とともに解説しています。

## 【Unity】プロファイリングを効率良く進めるための3つのTips

[【Unity】プロファイリングを効率良く進めるための3つのTips - Qiita](https://qiita.com/Gaku_Ishii/items/cdcfba9e4ffc7d3c325a)

アプリケーションの最適化を行うためのプロファイリングを効率的にすすめるためのTipsとして、Profilerの計測タイミングのカスタマイズとDeep ProfilingとProfiingの使い分け、2020で追加されたStandaloneプロファイラについてそれぞれ紹介しています。

## ファイナル判定をやっつける（すり抜け、多段ヒット対策）

[ファイナル判定をやっつける（すり抜け、多段ヒット対策） - Qiita](https://qiita.com/LuminousNeco/items/311b450cf5a45eab3f9e)

アクションゲームなどでの武器の当たり判定でにおいて多段ヒットしてしまったりすり抜けてしまったりのファイナル判定についての紹介と、それぞれスクリプトによる多段ヒットの解決と、武器のフレーム間の位置から動的にコライダーを生成することですり抜けを回避する方法についてそれぞれ紹介しています。

## UnityのScene間でのデータの受け渡し方法について比較する

[UnityのScene間でのデータの受け渡し方法について比較する - Qiita](https://qiita.com/Kosei-Yoshida/items/d7dc37bcde3a52cb5265)

シーン間でデータを共有する方法として下記の方法をそれぞれ検証し、メリット及びデメリットについて紹介しています。

- static class (Singleton class)
- SingletonMonoBehaviour + Don'tDestroyOnLoad
- LoadSceneMode.Additive + MonoBehaviour
- VContainer-EnqueueParent
- VContainer-RootLifetimeScope
- ScriptableObject

## 私がUnityプロジェクトを作成したら必ず入れるアセット４選！

[私がUnityプロジェクトを作成したら必ず入れるアセット４選！ - Qiita](https://qiita.com/manntera_studio/items/3ce686865823865f40fc)

Unityパッケージのインストール方法と、著者がどのUnityプロジェクトでも必ず利用するアセットとして、UniRxとUniTask、VContainer、Odinについてそれぞれ解説しています。

## clusterのUnity UI周りの開発紹介

[clusterのUnity UI周りの開発紹介 - Qiita](https://qiita.com/sansuke05/items/c353f287dfc9b19d3a14)

clusterのUI設計及び利用技術について紹介しています。

アーキテクチャとして、MVVMではなくMVPを採用した背景、データバインディングにUniRx、非同期処理にUniTaskを利用している点、DesktopからMobile、VRの複数プラットフォーム対応するための方法についてそれぞれ解説しています。

## 忙しい人のためのURP新機能7個サクッとまとめ

[【Unity】忙しい人のためのURP新機能7個サクッとまとめ - Qiita](https://qiita.com/Haruma-K/items/ebea359bfca0f00193c2)

Universal Render Pipeline（URP）に2020.3以降で追加された機能として、「クリアコートマテリアル」、「リフレクションプローブのボックスリフレクション」、「ライトクッキーによるライトマスク」、「デカール」、「ライトレイヤー」、「ディファードレンダリング」、「ポイントライトシャドウ」についてそれぞれ機能の概要と設定方法を紹介しています。

## Spring Joint 2D で ソフトボディを作る

[Spring Joint 2D で ソフトボディを作る - Qiita](https://qiita.com/r-ngtm/items/6241cd5f8916a7ef84c8)

2D Rigidbodyをばね（Spring Joint 2D）で接続して、ソフトボディのように振る舞うオブジェクトを実装する方法について紹介しています。

## Adaptive Performanceを試してみた

[[Unity] Adaptive Performanceを試してみた - Qiita](https://qiita.com/mrtm30/items/a33b31bb5d3e85f282dd)

Samsung端末で利用できる、端末負荷によって処理を切り替えられるAdaptive Performanceについて、導入方法からサンプルプロジェクトのソースリーディング、IndexerとScalerについてそれぞれ解説しています。

## モバイルブラウザでもUnity WebGLが動いてほしい!

[モバイルブラウザでもUnity WebGLが動いてほしい! - Qiita](https://qiita.com/T_keigo/items/3227ab7df18dfcbe356a)

iOSやAndroidなどに搭載されているウェブブラウザでUnityの出力WebGLを実行する際の問題点としてSafariのWeb GL2対応状況とテクスチャ圧縮の対応状況についての解説と、それらの対応方法、ベンチマークについてそれぞれ紹介しています。

## Unityの新MeshAPIでMeshColliderをリアルタイム変形させる

[Unityの新MeshAPIでMeshColliderをリアルタイム変形させる - Qiita](https://qiita.com/UnagiHuman/items/7db6c75adea0d5862acf)

Unity 2021.2から導入されたMeshAPIのvertexbufferをコンピュートシェーダー上から編集する機能を用いて、非同期にMeshの頂点情報を取得・編集することで、リアルタイムにMeshColliderの形状を変形する方法について紹介しています。

HoloLensなどを始めとするスタンドアロンデバイスで利用されている空間認識手法のインサイドアウト方式の広い空間での問題点と、それを解決するためのWorld Anchor、その管理を簡単に行える World Locking Toolsと、位置情報の共有ツールであるAzure Spatial Anchorsについてのそれぞれの紹介と、インストール方法・サンプルの導入、HoloLendsへのデプロイまでそれぞれ解説しています。

## World Locking Tools for Unityの安定した空間をAzure Spatial Anchorsを利用してクロスプラットフォームで共有する

[World Locking Tools for Unityの安定した空間をAzure Spatial Anchorsを利用してクロスプラットフォームで共有する - Qiita](https://qiita.com/miyaura/items/acd7e1356ddafde0874f)

## 積雪表現をShaderGraphで作ってみる

[【ShaderGraph】積雪表現をShaderGraphで作ってみる - Qiita](https://qiita.com/kida_hironari/items/9ca5bf3eb915ac34180f)

ShaderGraph及びURPで積雪表現を実装する方法について、それぞれのノードのスクリーンショットと解説を行っています。

## リアルタイムビートトラッキングサンタクロースを作ろう

[【Unity】リアルタイムビートトラッキングサンタクロースを作ろう - Qiita](https://qiita.com/axAt/items/d281e93a72c9330fdc7e)

Unity標準の機能を用いて、マイク入力を受け取ってその音からビートを検出し、検出したビートからリズムを推定してモーションをリズムに合わせて再生する方法を紹介しています。

## 【2021年】Unity 2D Animationの使い方

[【2021年】Unity 2D Animationの使い方 - Qiita](https://qiita.com/albatrus/items/fbe9cf1b07e65a4f5693)

Unity 2D Animationと2D PSD Importerを用いて、Photoshopで作成したイラストデータからUnityのスプライトとしてインポートしてリギングする方法から、リギングしたデータに対してIKを行ったりアニメーションを再生する方法、Sprite Swappingを行う方法について紹介しています。

## PlayMakerとBehaviourTreeを使ってステートマシンにイベントハンドリングをできるようにしてみた

[PlayMakerとBehaviourTreeを使ってステートマシンにイベントハンドリングをできるようにしてみた - Qiita](https://qiita.com/blkcatman/items/86a780aec37a85ae93c2)

アクションゲームにあるような、ゲーム中にプレイヤーがキー入力をしたら、スキル実行を行うような実装を、スキルのライフサイクルをPlayMakerによるステートマシンで、スキル内の処理のハンドリングをBehaviour DesignerのBehaviourTreeを用いてビジュアルスクリプティングで実装する例について紹介しています。

## UnityのLightAnchorについてもう少し詳しく

[UnityのLightAnchorについてもう少し詳しく - Qiita](https://qiita.com/block/items/b61e970d7c0e0fbfe8fc)

Unity 2021.2で追加されたLight Anchorコンポーネントについて、著者が[Advent Calendarで執筆した内容](https://qiita.com/block/items/396525cddbf5c0044d58) の補足として「見た目から照らす方向を調整できる機能」と「SpotLight以外でも利用できる」点について解説しています。

## UnityでMayaのリグを再現してAnimationRiggingでキャラクタを制御する

[UnityでMayaのリグを再現してAnimationRiggingでキャラクタを制御する - Qiita](https://qiita.com/salt-k2t/items/d0752410773b4b652f2e)

Unity上でMayaのリグをAnimationRiggingで再現することで、MayaとUnityのリグを共通化してアニメーション制御する方法について紹介しています。また、この手法のメリットとデメリットについてもそれぞれ解説しています。

## 緯度経度と高度からARを表示する

[【Location Based AR】緯度経度と高度からARを表示する - Qiita](https://qiita.com/ta-sr/items/cff5d64d973c84dd08b8)

緯度経度と高度を用いて、現実世界に3Dモデルを表示するLocation Based ARを、Unityの [Input.location](https://docs.unity3d.com/ScriptReference/Input-location.html) の情報を用いて実装する方法について紹介しています。

## 地味だけどARと現実を地続きに表現するために重要な "画面揺れ"の実装

[地味だけどARと現実を地続きに表現するために重要な "画面揺れ"の実装 - Qiita](https://qiita.com/kiyossy/items/fe7b494329c2ec59d707)

画面揺れ効果の実装において、よくあるカメラを揺らす実装が、ARでは用いることができない背景と、それを解決するための実装について紹介しています。

## ゲーム開発者の為の物理・古典力学基礎知識 #01

[ゲーム開発者の為の物理・古典力学基礎知識 #01 - Qiita](https://qiita.com/suzuna-honda/items/0db8438109db6ea12ca1)

Unityの物理エンジンなどの基礎となる物理・力学の基礎知識として、質点の運動力学、剛体の運動力学についてそれぞれ解説しています。

## Unity Netcode for GameObjectsでオンラインマルチプレイゲームを作る

[Unity Netcode for GameObjectsでオンラインマルチプレイゲームを作る - Qiita](https://qiita.com/pakiln/items/e2a971260479385cd928)

Netcode for GameObjectsを用いて、簡単な仕様のオンラインマルチプレイゲームを実装する方法について紹介しています。

## Unity で音声通話を簡単に導入してみる

[Unity で音声通話を簡単に導入してみる - Qiita](https://qiita.com/kai_yamamoto/items/ad433ffc074f5957d7e6)

Unity Gaming ServicesのVivoxを用いて、iOS実機で音声通話を実装する方法について紹介しています。

## Houdini Engine For Unityを色々試してみる

[Houdini Engine For Unityを色々試してみる - Qiita](https://qiita.com/oudont3/items/213f605cbc9174ba990f)

Houdini Engine for Unityを用いて、メッシュ加工の方法から、Unityが生成したカーブをHoudiniへ渡してその情報を元にMesh生成する方法、Photoshopと連携する方法、SDFを出力する方法についてそれぞれHoudiniのネットワークとともに紹介しています。

## 【Unity初心者向け】Layout GroupでUI配置をお手軽に綺麗に

[【Unity初心者向け】Layout GroupでUI配置をお手軽に綺麗に - Qiita](https://qiita.com/CaL/items/39a689a6024cba43b7c7)

配下の要素の配置を自動化するLayout Groupについて、Horizontal・Vertical・Grid Layout Groupのそれぞれの設定項目についての紹介と、利用する上での注意点について紹介しています。

## ３DモデルをBlenderで.pmxから.fbx形式に変換しUnityで動かすまで

[３DモデルをBlenderで.pmxから.fbx形式に変換しUnityで動かすまで - Qiita](https://qiita.com/HirokiLucky/items/633dac1215a4f783500f)

Blenderを用いて、pmx形式で配布されているモデルをfbx形式に変換して、Unity上で動かす方法を紹介しています。

## FactoryMethodパターンでボタン生成をしてみる

[FactoryMethodパターンでボタン生成をしてみる@Unity - Qiita](https://qiita.com/Tomy_0331/items/5d8904da291533cc925c)

FactoryMethodパターンを用いてUnity UIのボタンをスクリプトで生成する方法について紹介しています。

## Unityのシェーダーを使って画像をマスクする

[Unityのシェーダーを使って画像をマスクする - Qiita](https://qiita.com/garyumaru/items/0f5d6004fc0cde1751c5)

UnityのUIシェーダーに対してマスクを実装を実装する方法と、マスク画像を回転させる方法について紹介しています。

## 聖夜にUnityでクソアプリを作る

[聖夜にUnityでクソアプリを作る - Qiita](https://qiita.com/SanQ/items/5a8e601506df2a3621bd)

ARFoundationで平面検知、タップした座標に対してレイキャストを行って、検知した平面に対してモデルを配置するアプリの実装について紹介しています。

## Unity UIを手動でレイアウトする方法

[Unity UIを手動でレイアウトする方法 - Qiita](https://qiita.com/_moto_y/items/d9949c71c0d15f51c184)

Horizontal Layout GroupおよびLayout Elementを用いて、「任意個のサイズ固定のものを、片側に密着させる場合」および「サイズ固定と比率固定が混合のものを、両側に密着させる場合」のレイアウトの設定方法を紹介しています。

## 【初心者向け】Unityでの非同期処理、コルーチン、コールバックについて

[【初心者向け】Unityでの非同期処理、コルーチン、コールバックについて - Qiita](https://qiita.com/abcdeff/items/9181698feeab5d558c8f)

Unity上で非同期処理を行うための方法として、コルーチンおよびコールバックによる方法を紹介しています。

## 音の再生をピッチで制御する、カセットテープのようなもの

[音の再生をピッチで制御する、カセットテープのようなもの - Qiita](https://qiita.com/TakashiHamada/items/4e4b0d5167d9665fabd5)

Unity上でカセットテープのような挙動を、 `AudioSource` の標準機能で実装する方法について紹介しています。

## Riderでdllの依存関係を見る

[Riderでdllの依存関係を見る - Qiita](https://qiita.com/_EF/items/3f0986c73188a5828d56)

Riderでdllの依存関係を確認するツールの利用方法を紹介しています。

[ROSとUnityを使ってVJツールを作る - Qiita](https://qiita.com/comocc/items/f61d517b7ff53f27212d)

## UniRxを(少しだけ)触れてみた

[UniRxを(少しだけ)触れてみた - Qiita](https://qiita.com/Nihu/items/854ee98d0228f772b7fd)

UniRxを用いてアクションゲームの、プレイヤーからの入力受付からキャラクターの移動・ジャンプの実装を行う方法について解説しています。

## 研修中勉強したObserverパターンについて

[研修中勉強したObserverパターンについて - Qiita](https://qiita.com/R_arai/items/48238c49d04cb3c270ce)

Observerパターンと実装例、導入のメリットについてそれぞれ紹介しています。
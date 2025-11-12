---
type: unity-weekly
title: Unity Weekly 098
description: >-
  2022/12/05週のUnity Weeklyです。Unity 2021 LTSのURP、Splinesパッケージ、Input System、Advent
  Calendar 2022などについて取り上げています。
pubDatetime: 2022-12-04T15:00:00.000Z
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Unity 2021 LTS のユニバーサルレンダーパイプラインに光を当てる

[Unity 2021 LTS のユニバーサルレンダーパイプラインに光を当てる | Unity Blog](https://blog.unity.com/ja/games/shedding-light-on-universal-render-pipeline-for-unity-2021-lts)

URP（Universal Render Pipeline）の設定のうち、特にライティング・ライトクッキー・リフレクションプローブなどに関する設定とそれぞれの設定の実装、どのようにパフォーマンスに影響を与えるかについて紹介しています。

また、URPのレンダリングパスや扱うことのできるライティングモデルについてもそれぞれ紹介しています。

### ****Unity 2022 New Feature! Splines Introduction****

[Unity 2022 New Feature! Splines Introduction - YouTube](https://www.youtube.com/watch?v=5IrKqVnvP6M)

Unity 2022からつかえるSplinesパッケージの導入方法から曲線編集、曲線のメッシュ表示、曲線に沿ったアニメーション、曲線に沿ったオブジェクトの配置、応用例などについて紹介しています。

## Articles

### Input Systemでボタンの押した瞬間／離した瞬間を判定する

[【Unity】Input Systemでボタンの押した瞬間／離した瞬間を判定する | ねこじゃらシティ](https://nekojara.city/unity-input-system-get-down-up)

新しいInput Systemでボタンを押した瞬間と離した瞬間の判定について「Input ActionのPress Interactionを用いる方法」と「Input ManagerのGetButtonDownなど状態を判定するメソッドを毎フレームチェックすることで判定する方法」の２つの実装を紹介しています。

### SpringBone第2回 Spring Boneで布表現をする方法と、謎の距離制限について

[SpringBone第2回 Spring Boneで布表現をする方法と、謎の距離制限について｜COLOPL Creators](https://note.colopl.dev/n/n137afb8296e5)

Spring Boneの距離制限によってスカートなどの足抜けを回避する方法について紹介しています。

### Unity Optimization Tips: Mobile & Desktop

[Unity Optimization Tips — Optimize Unity Game, Tutorial 2022](https://makaka.org/unity-tutorials/optimization)

Unityアプリの最適化Tipsについてまとめています。

パフォーマンスを低下させる原因やパフォーマンスを解析するための各種ツールの紹介、UIやグラフィックス、物理など各分野での最適化の勘所などについてまとめています。

### UnityのAndroidビルドでAPIレベル31にしたらGradle地獄だった話

[UnityのAndroidリリースビルドだけ起こったバグの話 - Qiita](https://qiita.com/warapuri/items/9f9b4e293bf52c7cd6fd)

[UnityのAndroidビルドでAPIレベル31にしたらGradle地獄だった話 - Qiita](https://qiita.com/warapuri/items/17721b113be8c44e5369)

Unityで制作したAndroidビルドで、ProGuardによる難読化によって特定のJavaのクラスがビルド時に除外される不具合とその対応方法、Target APIを31にあげると発生するGradleのビルドエラーとその対応方法について紹介しています。

### Splinesパッケージの内部計算式

[【Unity2022】Splinesパッケージの内部計算式 | ねこじゃらシティ](https://nekojara.city/unity-splines-math)

Unity 2022からUnityが公式で配布しているSplinesパッケージの内部で利用されている、スプライン補間のためのベジエ曲線について解説しています。

### Photon Fusion for Unityの公式サンプルBR200を触ってみた　キャラ追加編

[Photon Fusion for Unityの公式サンプルBR200を触ってみた　キャラ追加編 - Qiita](https://qiita.com/nimushiki/items/36656c5d549b61e17aa5)

Photon FusionのバトルロワイアルサンプルBR200で独自のキャラクターを追加する方法について紹介しています。

### LocalizationのStringTableCollectionを一括でCSVに出力するエディタ拡張を作った

[【Unity】LocalizationのStringTableCollectionを一括でCSVに出力するエディタ拡張を作った - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2022/12/01/120000)

Unityが提供するLocalizationパッケージの `StringTableCollection` を `UnityEditor.Localization.Plugins.CSV.Csv` を用いてCSVとしてエクスポート、またはCSVからインポートする方法について紹介しています。

### 結婚式のプロフィールムービーを Unity で作ってみた

[結婚式のプロフィールムービーを Unity で作ってみた - 凹みTips](https://tips.hecomi.com/entry/2022/11/30/233616)

Timeline・Unity Recorder・Shader Graph・URPを用いてスプラトゥーン風なスライドショームービーを制作するための、Timelineでのムービーの制御やインクの表現のShader Graphでの実現方法、素材写真やコメントを差し替えやすくするための仕組みなどについて紹介しています。

## Advent Calendar

今年もAdvent Calendarの季節になりました。特にUnityに関するAdvent Calendarの記事も取り上げていきたいと思います。

### Unity開発の現場でJenkinsがしていることの紹介

[Unity開発の現場でJenkinsがしていることの紹介 | QualiArtsエンジニアブログ](https://technote.qualiarts.jp/article/48)

Unityアプリを開発する現場で構築されているJenkinsの各種自動化としてアプリビルド・アセットバンドルビルド・PRの自動生成・PRに対するテストなどについて紹介しています。

### UnityでUIパフォーマンスを向上させる8つのTips

[UnityでUIパフォーマンスを向上させる8つのTips【Advent Calendar 12/1】｜Colorful Palette](https://media.colorfulpalette.co.jp/n/n5413002d917f)

UIパフォーマンスを向上させるための設定や設計について紹介しています。

### Semantic Confidenceでセグメントの境界線をぼかす

[【ARDK】Semantic Confidenceでセグメントの境界線をぼかす - Qiita](https://qiita.com/OKsaiyowa/items/a44682edbcfc487813d9)

Nianticが提供するARライブラリ[ARDK](https://lightship.dev/)にExperimentalで追加されたSemantic Segmentationの紹介とこの機能を用いた仮想世界のオブジェクトと現実世界のオクルージョン処理においてセグメントの境界線をぼかす実装を紹介しています。

### なぜUnityを使い始め、9年間も使い続けているのか

[なぜUnityを使い始め、9年間も使い続けているのか【Unity】【雑記】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/Unity_Advent_Calendar_2022)

ブログ著者がUnityを使い続けるモチベーションやメリットなどについて紹介しています。

### Unity WebGL で canvas で文字を描画する

[Unity WebGL で canvas で文字を描画する - Qiita](https://qiita.com/gtk2k/items/18575dcc2b5d7ad65368)

UnityのWebGLアプリケーションで、TextMeshProなどを用いずにcanvasで文字を描画する方法の紹介とメリット・デメリットについてまとめています。

### Houdini x Unity : VAT関連Tips & 備忘録

[Houdini x Unity : VAT関連Tips & 備忘録 - Qiita](https://qiita.com/sasaki_0222/items/4469ec6ccce3c53f4d37)

HoudiniでVAT（Vertex Animation Texture）を書き出す際にどのバージョンで書き出すとUnityで安定した再生が行えるのかについてまとめています。

### 最短でAirTestでUIテストをしてSlackに定期的に結果を通知する方法！

[最短でAirTestでUIテストをしてSlackに定期的に結果を通知する方法！ - Qiita](https://qiita.com/KoniroIris/items/009e9ff44835947a4f83)

AirTestとPocoを用いたUIの自動テスト環境の構築方法とテスト結果をAirTestからSlackに通知する方法、テストを定期実行する方法についてまとめています。

### Unityでデザイナーがいじってほしいパラメータ用のAttributeを作ってみた

[Unityでデザイナーがいじってほしいパラメータ用のAttributeを作ってみた - Qiita](https://qiita.com/taroshun_v2/items/149cc988d3c4ff379e32)

デザイナーさんに設定してほしいに特定のAttributeをつけることで、パラメーターをインスペクター上で色付けやヒエラルキー上を行う実装について紹介しています。

### Unityエディタ上で循環的複雑度(CCN)を計測する

[Unityエディタ上で循環的複雑度(CCN)を計測する - Qiita](https://qiita.com/e73ryo/items/e50b7c90a072bbd615c8)

lizardというpythonライブラリを用いてプログラムの複雑度を循環的複雑度で計測する方法と、Unityエディタ上からライブラリを呼び出してエディタ上で結果を確認する方法について紹介しています。

### ****Unityエディタ上でスクリーンショットを撮る****

[Unityエディタ上でスクリーンショットを撮る - Qiita](https://qiita.com/tanikura/items/d46507946e23f1b7fe6f)

Unityエディタ上でスクリーンショットを取る方法を `ScreenCapture.CaptureScreeshot` を用いた方法と開発者モードを利用する方法の２つの方法をまとめています。

### Unity VFXGraphを1ヶ月で完全に理解した話

[Unity VFXGraphを1ヶ月で完全に理解した話 - Qiita](https://qiita.com/H4Y4_88/items/750ae0675302ebc450b3)

VFX GraphのSubgraphやMesh Samplingの設定、Experimentalなオペレーターやブロックを利用するための設定についてまとめています。

### ML-AgentsとFinal IKでアバターを学習させて動かす(ように見せる)

[【Unity】ML-AgentsとFinal IKでアバターを学習させて動かす(ように見せる) - Qiita](https://qiita.com/T_4c3/items/4b9b244739bfbd593128)

ML-Agentsの3DBallの学習結果とFinal IKを用いて、板の上にのったボールをアバターが落とさないように動かすような実装について紹介しています。

### RiderFlowはいいぞ！

[RiderFlowはいいぞ！ - Qiita](https://qiita.com/RyotaMurohoshi/items/bea7a222ac4fa15bffd6)

JetBrains社が提供するUnityエディタプラグインRiderFlowの「Hierarchy WindowにおけるGameObject管理機能」・「Scene View management toolbar」・「スマートエディター」・

「GameObjectのReplace」・「Find Usages」・「Search Everywhere」の使い方やRiderFlowのデータの保存場所についてまとめています。

### スマホ端末の傾き角を知る方法

[【Unity】スマホ端末の傾き角を知る方法【決定版】【加速度センサー】【ジャイロスコープ】 - Qiita](https://qiita.com/Cova8bitdot/items/a51fb48f3b94821867fb)

Unityで利用可能なセンサーとして加速度センサーとジャイロセンサーの紹介とそれぞれのセンサーの入力値を取る方法、注意点として座標系とiOS/AndroidでのZ軸の回転の違いについてまとめています。

### シーン内のInject対象コンポーネントを自動で収集する [VContainer]

[シーン内のInject対象コンポーネントを自動で収集する [VContainer] - Qiita](https://qiita.com/tanikura/items/e08e6e7375105131d5df)

シーン内にあるInject対象のコンポーネントを、シーン保存時に自動で収集するエディタ拡張の実装について紹介しています。

### GitHub Pagesで手軽にスマホゲームを公開する

[[Unity]GitHub Pagesで手軽にスマホゲームを公開する - Qiita](https://qiita.com/flankids/items/08ebc63a2a50507a418a)

UnityアプリをWebGLビルドしてGitHub Pagesで公開する方法について紹介しています。

### UnityでARスタンプラリーアプリを作ってみた

[UnityでARスタンプラリーアプリを作ってみた - Qiita](https://qiita.com/SanQ/items/35917d1e28a9872a179b)

AR Foundationを用いてARアプリ上でスタンプラリーを行うようなアプリを実装する方法について紹介しています。

### 「え！UnityYAML読めないんですか？」

[「え！UnityYAML読めないんですか？」 - Qiita](https://qiita.com/satanabe1@github/items/515f206659177883c7f4)

Unity YAMLのビューワーの独自実装を、YamlDotNetでのYamlパース・TreeView表示・ClassId解決・Icon適用・GUIDの解決などの観点でまとめています。

### サイズの大きいUnityプロジェクトのGitリポジトリを効率的に扱うコツ

[サイズの大きいUnityプロジェクトのGitリポジトリを効率的に扱うコツ - Qiita](https://qiita.com/Gaku_Ishii/items/8680077086a14983c65d)

アセットがサブモジュールで管理されたアセットサイズの大きなUnityプロジェクトで、プラットフォーム切り替えでの再インポートを避けるためにプラットフォームごとにUnityプロジェクトをクローンする際に、git worktreeやLFSのローカルキャッシュを共有することでストレージを節約する方法についてまとめています。

### Unity + Doozy UI ManagerでUI制御をわかりやすく作るならこれだけは覚えておけ！集

[Unity + Doozy UI ManagerでUI制御をわかりやすく作るならこれだけは覚えておけ！集 - Qiita](https://qiita.com/asiram/items/fa2f6ef80a99788bdd19)

Doozy UI ManagerでUI制御を行う際に知っておくべきコンポーネントやフローグラフ、Signal/Streamという仕組み、便利コンポーネントの紹介と、実際にDoozy UI Managerを用いた簡単な画面遷移の実装について解説しています。

### ****SPAJAM 2022 決勝戦で `Unity (C#)` で `Speech-to-Text API` と `DeepL API` を使ったので紹介するよ****

[SPAJAM 2022 決勝戦で `Unity (C#)` で `Speech-to-Text API` と `DeepL API` を使ったので紹介するよ](https://qiita.com/dacchan/items/f80d035d637eddc81d6c)

UnityでSpeech-to-Text APIやDeepL APIを利用する方法について紹介しています。

### Orbital Cameraの独自実装の手法について

[Orbital Cameraの独自実装の手法について - Qiita](https://qiita.com/vinyel/items/9848892b5afb1da15c35)

CinemachineのVirtual Cameraを用いてOrbital Camera（対象オブジェクトをLookAtしつつ円周上の軌道に沿って操作できるカメラ）を実装する方法について紹介しています。

### VRM(VRoid)モデルをMayaのHumanIKに対応し、モーキャプしたモーションを流す

[VRM(VRoid)モデルをMayaのHumanIKに対応し、モーキャプしたモーションを流す - Qiita](https://qiita.com/salt-k2t/items/b574f4269185d14151f3)

VRMモデルをFBXに変換してからMayaで読み込む方法、そのモデルをMayaのHumanIKに対応する方法（とスクリプトでの自動化）、モーションの転写方法、UniVRM経由でUnity上でモーションを再生する方法についてまとめています。

### ****Unityで動画を再生する様々な方法****

[Unityで動画を再生する様々な方法 - Qiita](https://qiita.com/broken55/items/f235497c7b4b2a46b926)

Unityで動画をVideo Playerを用いて再生する方法についてRender Modeの設定や外部においたファイルの再生方法、音声の制御やスクリプトから動画再生を制御する方法についてまとめています。

また、Youtube動画の再生方法、HLS形式のストリーミング動画を再生する方法などについてもそれぞれ紹介しています。

### Netcode for GameObjectsの通信量過剰時の挙動と対策

[Netcode for GameObjectsの通信量過剰時の挙動と対策 - Qiita](https://qiita.com/tsune2ne/items/00049e66ca3ee7fa96a5)

Netcode for GameObjectsで１フレームあたりの通信（RPCとレプリケーション）を過剰に行った場合にどのような挙動をするのかと、RPCの信頼性（ `RpcDelivery.Unreliable` ）を設定することによって実際に通信するメッセージの優先度を設定することで、通信量過剰時でも優先度の高い通信を行うための方法について紹介しています。

### インポートしたモデルのマテリアルをまとめて外に出す

[インポートしたモデルのマテリアルをまとめて外に出す [Unity] - Qiita](https://qiita.com/tanikura/items/2af9b38ac385ad313f5f)

fbxをインポートしたときにアセット内部にあるマテリアルをUnityプロジェクトに展開するエディタ拡張の実装について紹介しています。

## Repositories

### Megacity-Sample

[Unity-Technologies/Megacity-Sample: ECS sample](https://github.com/Unity-Technologies/Megacity-Sample)

ECS（Entity Component System）のサンプルデモプロジェクト。

### Unity Geometry Grass Shader

[Velorexe/unity-geometry-grass-shader: A Geometry shader written for Unity's build-in Render Pipeline](https://github.com/Velorexe/unity-geometry-grass-shader)

ジオメトリシェーダーを用いたインタラクティブな草シェーダー実装。

### Asset Store Tools v2

[Unity-Technologies/com.unity.asset-store-tools: With these tools, you can prepare, validate, and package your assets for submission through publisher.unity.com.](https://github.com/Unity-Technologies/com.unity.asset-store-tools)

Asset Storeへのパッケージ公開のための検証や提出を自動化するためのツール。

### Open Brush - Tilt Brush Evolved

[icosa-gallery/open-brush: Open Brush is the open source, community led evolution of Tilt Brush!](https://github.com/icosa-gallery/open-brush)

VRの3Dペイントアプリケーション[Tilt Brush](https://www.tiltbrush.com/)をフォークしてUnityのアップグレードや機能追加などを行ったライブラリ。

### PBD2D

[andywiecko/PBD2D: Unity Position Based Dynamics in two dimensions](https://github.com/andywiecko/PBD2D)

２次元のPosition Based DynamicsのUnity ECS実装。

Position Based Dynamics＋各種コンストレイント、コリジョンシステム、剛体やソフトボディのシミュレーションなどが実装されている。

### Pixel Anti-Cheat

[TinyPlay/Pixel-Anticheat: This is a simple and open-source anti-cheat toolkit for your games on Unity. This toolkit developed by TinyPlay for Pixel Incubator](https://github.com/TinyPlay/Pixel-Anticheat?)

チート対策ライブラリ。

スピードハックやメモリハックなどの各種検出実装から暗号化型やPlayer Prefsの暗号化実装、各種暗号化のためのクラスが用意されている。

### **OpenGraphGUI**

[RobProductions/OpenGraphGUI: An open-source Editor GUI for use with Unity's URP ShaderGraphs. This project aims to clean up the look of Material Properties while providing ease-of-use to developers via tagging](https://github.com/RobProductions/OpenGraphGUI)

URPのShader Graphからマテリアルプロパティのインスペクターの外観を、ShaderのBlackboardにあるプロパティ名に特定の文字を入力することで調整できるツール。

### WSNet2

[KLab/wsnet2: モバイルオンラインゲーム向けのリアルタイム通信システム](https://github.com/KLab/wsnet2)

WebSocketベースなモバイルゲーム向けリアルタイム通信システム。クライアントにUnity実装が用意されています。

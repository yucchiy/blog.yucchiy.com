---
type: "unity-weekly"
title: "Unity Weekly 150"
description: "2023/12/04週のUnity Weeklyです。モバイルブラウザサポート、Unity Sentis、Unite 2023、Unity UI完全に理解した勉強会、Advent Calendar 2023などについて取り上げています。"
tags: ["Unity Weekly", "Unity", "Advent Calendar 2023"]
date: "2023-12-04T00:00:01"

---


## Unity Officials

### Web runtime updates are here: Take your browser to the next level

[Web runtime updates are here: Take your browser to the next level | Unity Blog](https://blog.unity.com/engine-platform/web-runtime-updates-enhance-browser-experience)

Unity 6でのモバイルブラウザのサポート状況やMetaインスタンスとゲーム向けの戦略的パートナーシップについての概要、ブラウザアプリの最適化のためのベストプラクティスやWebAssemlby・WebGPUの活用、ブラウザ向けの各種デモアプリについてそれぞれ紹介しています。

### Create next-gen features with Unity Sentis in 5 simple steps

[Create next-gen features with Unity Sentis in 5 simple steps | Unity Blog](https://blog.unity.com/games/create-next-gen-ai-models-with-unity-sentis)

ランタイムで実行できるAIエンジンUnity Sentisについて、ONNX形式のモデルの読み込みからエンジンの利用方法、サンプルプロジェクト（https://github.com/Unity-Technologies/sentis-samples）の事例紹介、その他活用事例について紹介しています。

### UNITE 2023 APAC ON-AIR STAY TUNED!

[UNITE 2023 APAC ON-AIR STAY TUNED! - YouTube](https://www.youtube.com/watch?v=eDBwSeMTY2E)

Unite 2023であったセッションのうち、Keynoteと5つのセッションの日本語翻訳が公開されています。


## Unity UI 完全に理解した勉強会

[Unity UI 完全に理解した勉強会 - Unity Meetup](https://meetup.unity3d.jp/jp/events/1411)

2023/12/01にユーザコミュニティ主導の勉強会「Unity UI 完全に理解した勉強会」が開催されました。アーカイブは[YouTubeで公開されています](https://www.youtube.com/watch?v=QF2iNTscjYA)。

### ざっくり理解するUI Toolkit

UI Toolkitの概要から機能紹介と注意点、Tips、開発に役立つ資料を紹介しています。

### Unity Searchを拡張して高度な検索型UIを実現する

[Unity Searchを拡張して高度な検索型UIを実現する - Speaker Deck](https://speakerdeck.com/trapezoid/unity-searchwokuo-zhang-sitegao-du-najian-suo-xing-uiwoshi-xian-suru)

Unity Searchの機能と構造についての紹介と、これを拡張するための `SearchProvider` についての解説、`SearchProvider` を用いた実例や活用のためのノウハウやTipsを紹介しています。

### uGUIの自動操作の考え方と操作方法

[uGUI の自動操作の考え方と操作方法 - Speaker Deck](https://speakerdeck.com/orgachem/basics-of-ugui-automation)

uGUIを自動で操作する方法から、最低限の動作確認を行うための自動操作の方針から実装、自動操作におけるハマりどころについて紹介しています。

### CanvasMaterialでUI Shaderをシンプルに

[CanvasMaterialでUI Shaderをシンプルに（+Unity完全に理解した勉強会のフォローアップ） #Unity - Qiita](https://qiita.com/up-hash/items/dec16eeae94513799cd9)

uGUIのImage等のコンポーネントが`null`の場合に利用されるCanvasMaterialを用いてUI Shaderを管理する方法について、CanvasMaterialへの独自シェーダーの差し込み方から`IMaterialModifirer`によるパラメーターの上書き、UI UberShaderの設計から実装、この実装における注意点を纏めています。

### どう作る？モーダルの実装！

モーダルの実装について、モーダルUIを効率的に構築するためのPrefabVariantの活用や、多用してもストレスがかかりづらいアニメーションの作り方について紹介しています。

### UIデザインツールでゲームのUIを作る話（Adobe XD編）

[AdobeXDとAkyuiUnityを使用し、ゲームUI制作を簡易化する #Unity - Qiita](https://qiita.com/nananori/items/22bb56e25e38e8d96bb1)

[AkyuiUnity](https://github.com/kyubuns/AkyuiUnity)を用いてAdobeXDで制作したUIをUnityにインポートする方法を紹介しています。


## Articles

### 複数の非同期処理を直列に実行する機構を作る

[【Unity】複数の非同期処理を直列に実行する機構を作る #Unity - Qiita](https://qiita.com/toRisouP/items/bd0616b00aa620b7eecb)

非同期処理の一部を直列に実行するための機構を実装する方法として、`Queue` を用いた方法と `IUniTaskAsyncEnumerable` を用いた方法の2つを紹介しています。

また、著者が開発するこれらの機構を提供する[SequentialTaskExecutor](https://github.com/TORISOUP/SequentialTaskExecutors)についても言及しています。

### Custom SRP 2.3.0

[Custom SRP 2.3.0](https://catlikecoding.com/unity/custom-srp/2-3-0/)

独自のレンダリングパイプラインをSRPで構築するチュートリアルで、本記事ではシャドウテクスチャをSRPのRenderGraphで管理する方法を紹介しています。

### 画面を切断するポストプロセスのシェーダコード

[画面を切断するポストプロセスのシェーダコード #Unity - Qiita](https://qiita.com/ScreenPocket/items/60c52ed97d659028541f)

画面を切断したような表現をポストプロセスで実現する方法について、実現方法とそのシェーダーコードを紹介しています。

### Collab service is deprecated and has been replaced with PlasticSCMが一生出続ける！！

[【Unity】Collab service is deprecated and has been replaced with PlasticSCMが一生出続ける！！ #Unity - Qiita](https://qiita.com/ra7ra7_430/items/331905d09f2a310e3723)

「Collab service is deprecated and has been replaced with PlasticSCM」というエラーが発生した場合の対処方法を紹介しています。

### UnityEditor拡張勉強会 第1回 ～Prefabを大量に設置したい編～

[UnityEditor拡張勉強会 第1回 ～Prefabを大量に設置したい編～ #C# - Qiita](https://qiita.com/segur/items/c71995636dd58576eb75)

このブログの著者が所属する会社で開催されたUnityEditor拡張勉強会の第1回の内容として、Prefabをまとめてコピーするためのエディター拡張の実装を紹介しています。

### uLipSync の WebGL 対応を調査してみた

[uLipSync の WebGL 対応を調査してみた - 凹みTips](https://tips.hecomi.com/entry/2023/11/30/231911)

著者の開発する[uLipSync](https://github.com/hecomi/uLipSync)のWebGL対応のための課題についての技術調査と、WebGL対応パッケージ[uLipSyncWebGL](https://github.com/uezo/uLipSyncWebGL)での対応方法（とくにオーディオの再生）について紹介しています。

### Steamでゲームをリリースするときは、セーブデータの保存パスにSteamIDを入れよう！

[Steamでゲームをリリースするときは、セーブデータの保存パスにSteamIDを入れよう！ - きゅぶろぐ](https://blog.kyubuns.dev/entry/2023/12/02/171158)

Steamゲームでセーブデータの保存パスにSteamIDを入れる必要がある理由と、Unityでの対応方法についてまとめています。

### Unityの拡張機能『NaughtyAttributes』を紹介！

[Unityの拡張機能『NaughtyAttributes』を紹介！](https://zenn.dev/m_mikan12/articles/0cb0750c74c96e)

インスペクター拡張のためのライブラリ[NaughtyAttributes](https://github.com/dbrizov/NaughtyAttributes)の概要と各種属性の使い方を紹介しています。

### Unity Sentisを使ってYolov5を動かしてみる

[Unity Sentisを使ってYolov5を動かしてみる #Unity - Qiita](https://qiita.com/ChurappsWatatani/items/dff7c49aafa83b554002)

Unity Sentisを用いて独自のモデル（Yolov5）を動かす方法について紹介しています。


## Repositories

### Alchemy

[AnnulusGames/Alchemy: Alchemy is a library that provides attribute-based Inspector extensions for Unity. Adds attributes that provide powerful inspector extensions and a source generator that extends Unity's serialization.](https://github.com/AnnulusGames/Alchemy)

属性ベースのインスペクター拡張を提供するライブラリ。属性ベースのエディター拡張の他に独自のシリアル化による`Dictionary`や`HashSet`などのシリアライズ化に対応。


## Advent Calendar 2023

### URPとShaderGraphで光学迷彩シェーダーを作る

[[Unity]URPとShaderGraphで光学迷彩シェーダーを作る](https://zenn.dev/kd_gamegikenblg/articles/6227f6ad7ece9a)

ShaderGraphで某ゲームの光学迷彩のような表現のシェーダーを実装する方法を紹介しています。

### UnityのGraphViewでスキル処理を構築するための試み

[UnityのGraphViewでスキル処理を構築するための試み](https://zenn.dev/happy_elements/articles/725d8f977aff33)

Visual Scriptingのようなグラフビューを実装できる[GraphView](https://docs.unity3d.com/ScriptReference/Experimental.GraphView.GraphView.html)を用いてゲームのスキルロジックのデータを構築するようなツールを自作する方法を紹介しています。

### プロジェクトセカイ 3周年グラフィックスアップデート解説

* [プロジェクトセカイ 3周年グラフィックスアップデート解説（DoF，ディフュージョン）｜Colorful Palette](https://media.colorfulpalette.co.jp/n/n51bf8818b89d)
* [プロジェクトセカイ 3周年グラフィックスアップデート解説 (目の透過表現)｜Colorful Palette](https://media.colorfulpalette.co.jp/n/n927a776b6b35)

プロジェクトセカイの3周年アップデートでのグラフィックスにおける改善を解説しています。

### Unity向けツールランチャーを公開しました！

[Unity向けツールランチャーを公開しました！ | QualiArtsエンジニアブログ](https://technote.qualiarts.jp/article/66/)

QualiArtsで利用されているUnity向けのツールランチャー [UnityToolLauncher](https://github.com/QualiArts/UnityToolLauncher) について、制作したきっかけからランチャーの各種機能、拡張性について紹介しています。

### Unity 2023.1と2023.2のTilemapのアップデート

[Unity 2023.1と2023.2のTilemapのアップデート #Unity - Qiita](https://qiita.com/RyotaMurohoshi/items/855e0f1adfb8c2a286be)

Unity 2023のテックストリームでのTilemapの各種機能のアップデートについて紹介しています。

### Unityでのモバイル3Dアクションゲームのカメラワーク

[Unityでのモバイル3Dアクションゲームのカメラワーク #Unity - Qiita](https://qiita.com/tsune2ne/items/85f2e17954ce9413ab09)

Cinemachineで「被写体とカメラ間に障害物がある場合のカメラワーク切り替え」や「自動で後ろに回り込むカメラ」、「ロックオンカメラと通常のカメラの切り替え」などを実装する方法を紹介しています。

### UnityのTutorial Frameworkを自作のEditor拡張で使ってみた

[UnityのTutorial Frameworkを自作のEditor拡張で使ってみた #Unity - Qiita](https://qiita.com/taroshun_v2/items/117eafb76e959f5b4ad6)

[Tutorial Framework](https://blog.unity.com/ja/engine-platform/in-editor-tutorials-to-try-in-2021-1)の利用方法を、簡単なエディター拡張を例に紹介しています。

### CoreBluetoothForUnity のご紹介

[CoreBluetoothForUnity のご紹介 #Unity - Qiita](https://qiita.com/Teach/items/f22c81fd6dd2e76d9218)

このブログの著者が開発する[CoreBluetoothForUnity](https://github.com/teach310/CoreBluetoothForUnity)について、その概要と導入方法を紹介しています。

### 汎用的に扱えるボタンの個人的な実装アプローチの紹介

[【Unity】汎用的に扱えるボタンの個人的な実装アプローチの紹介 #C# - Qiita](https://qiita.com/Putinu/items/932d24494d7de277b274)

ゲーム内で汎用的に利用できるUIパーツの実装についてその設計意図と、ボタンとラジオボタンとチェックボックスの3つのUIパーツを例に具体的な実装を紹介しています。

### UnityTextで頂点追加でルビ表示してみた

[UnityTextで頂点追加でルビ表示してみた #Unity - Qiita](https://qiita.com/tyanmahou/items/c400d7d8b8cb2d7a6f61)

uGUIのText（Legacy）で頂点を追加してルビ表示を実装する方法について紹介しています。

### TextMeshProの表示時の情報textInfoの活用

[TextMeshProの表示時の情報textInfoの活用 #Unity - Qiita](https://qiita.com/nakatsuji_tomohiro/items/dff80aadfe01976ac63e)

[`TMP_TextInfo`](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/api/TMPro.TMP_TextInfo.html)について、この記事の著者がよく利用するプロパティとその活用事例を紹介しています。

### UI ToolkitにてC#スクリプトからStylesを適応する

[【Unity】UI ToolkitにてC#スクリプトからStylesを適応する - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2023/12/01/120000)

`VisualElement.style`や`StyleSheet`をC#スクリプト上で操作して、UIパーツのスタイルを変更する方法を紹介しています。

### UnityのHierarchyウィンドウで階層構造を色分け表示する

[UnityのHierarchyウィンドウで階層構造を色分け表示する #C# - Qiita](https://qiita.com/tus18/items/6309fb41e39912a944a4)

`EditorApplication.hierarchyWindowItemOnGUI`をフックして、ヒエラルキーウインドウの階層構造を色分けして表示する方法を紹介しています。

### MRTKを使ったアプリをHololens2にデプロイすると片目しか表示されない問題

[MRTKを使ったアプリをHololens2にデプロイすると片目しか表示されない問題 #Unity - Qiita](https://qiita.com/flutter_daisuki/items/d6fcb7e0e154f9f062cf)

表題通り、MRTKで制作したアプリをHololensにデプロイすると片目しか表示されない問題について、その対応方法を紹介しています。

### Wwiseを使ってみて

[Wwiseを使ってみて](https://zenn.dev/happy_elements/articles/cf3e6fe8b693b5)

Wwiseの概要と採用の経緯などをまとめています。

### YetAnotherHttpHandlerでHTTP/2通信！〜UnityWebRequestとの比較を添えて〜

[YetAnotherHttpHandlerでHTTP/2通信！〜UnityWebRequestとの比較を添えて〜](https://zenn.dev/matsuataru/articles/yet_another_adcal_2023)

Unity標準のHTTPクライアントUnityWebRequest（HTTP/1.1）と、YetAnotherHttpHandler（HTTP/2）の通信速度をの比較について紹介しています。

### 原神MMDをUnityで動かす話 ~URP対応を添えて~

[【令和最新版】原神MMDをUnityで動かす話 ~URP対応を添えて~](https://zenn.dev/matsuataru/articles/c9605392a12b77)

原神のMMDモデルをUnityへ移行し、URPで描画する方法をまとめています。

### ShaderGraphを使ってclusterのワールドを色々つくってみた

[ShaderGraphを使ってclusterのワールドを色々つくってみた｜Skip](https://note.com/skipskip/n/n34f44e9f9714?sub_rt=share_pw)

ShaderGraphの概要と著者の制作したシェーダーをいくつか紹介しています。

### ナウでヤングな若者言葉をWebSocketがしゃべれるようにする

[ナウでヤングな若者言葉をWebSocketがしゃべれるようにする](https://zenn.dev/matsuataru/articles/async_websoket_adcal_2023)

[NativeWebSocket](https://github.com/endel/NativeWebSocket)を用いて、UnityでWebSocketを扱う方法を紹介しています。

### プラットフォーム依存の処理の書き方について

[【Unity】プラットフォーム依存の処理の書き方について](https://zenn.dev/panda_blog/articles/d6625b35919cb9)

Unityでプラットフォーム（iOSやAndroidなど）に依存した処理を書く方法を紹介しています。
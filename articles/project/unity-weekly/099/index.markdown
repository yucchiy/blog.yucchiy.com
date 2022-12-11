---
type: "unity-weekly"
title: "Unity Weekly 099"
description: "2022/12/12週のUnity Weeklyです。2022.2TECHストリーム、VFX Ebook、DOTS向けキャラクターコントローラ実装Rival、アドベントカレンダー2022などについて取り上げています。"
tags: ["Unity Weekly","Unity"]
date: "2022-12-11T15:01:00"

---

## Unity Officials

### Unity 2022.2 TECH ストリームが公開されました

[Unity 2022.2 TECH ストリームが公開されました | Unity Blog](https://blog.unity.com/ja/technology/2022-2-tech-stream-available)

Unity 2022.2 TECH ストリームがリリースされました。これによって 2022 は正式版となり、例年どおりだと 2023年の3月~4月頃にLTSがリリースされます。

この記事では、2022.2 TECHストリームで利用できる機能の中から、 [ECS for Unity](https://unity.com/ja/ecs)・[Netcode for GameObjects](https://unity.com/ja/products/netcode)・グラフィックスからSRP（Scriptable Render Pipeline）やURP（Universal Render Pipeline）、HDRP（High Definition Render Pipeline）の新機能・プレハブに関する新機能・UI Toolkit・DirectX12グラフィックスバックエンド・XR Interaction Toolkit（XRI）などについて紹介しています。

### Create spellbinding visual effects with our advanced VFX guide

[Create spellbinding visual effects with our advanced VFX guide | Unity Blog](https://blog.unity.com/games/create-spellbinding-visual-effects-with-advanced-vfx-guide)

新しく公開されたVFX Graphに関する電子書籍「*[The definitive guide to creating advanced visual effects in Unity](https://resources.unity.com/games/definitive-guide-to-creating-visual-effects?ungated=true)**」*の内容について簡単に触れています。

### Rival - DOTS Character Controller for Unity

[Rival - DOTS Character Controller for Unity | Physics | Unity Asset Store](https://assetstore.unity.com/packages/tools/physics/rival-dots-character-controller-for-unity-225129)

DOTSベースなCharacter Controller実装がアセットストアにて公開されています。ドキュメントは[こちら](https://github.com/Unity-Technologies/rival-documentation)から、サンプルについては[こちら](https://github.com/Unity-Technologies/rival-samples)から確認できます。

## Articles

### RenderDocの使い方をステップバイステップで解説～初歩からディープな使い方まで～

[【Unity】RenderDocの使い方をステップバイステップで解説～初歩からディープな使い方まで～ | CyberAgent Developers Blog](https://developers.cyberagent.co.jp/blog/archives/38917/)

URPを使ったUnityアプリのグラフィックスのデバッグを題材に、RenderDocの基本的な使い方から各種機能の説明と実際の使い方、シェーダーを最適化するためにコンパイル後のシェーダーのアセンブラコードをRenderDocで確認する方法まで詳細に解説しています。

### Unityプロジェクト向けオートパイロットフレームワークの作りかた

[Unityプロジェクト向けオートパイロットフレームワークの作りかた - DeNA Testing Blog](https://swet.dena.com/entry/2022/12/05/170000)

ほぼ完成済みのゲームを自動でテストするオートパイロットによるゲームの品質検証のアプローチと、DeNAが開発するモンキーテストとシナリオテストを組み合わせたオートパイロットフレームワークAnjinの実装について紹介しています。

### V Rising's Animation Layering in Unity

[V Rising's Animation Layering in Unity](https://80.lv/articles/v-rising-s-animation-layering-in-unity/)

V Risingで利用されているキャラクターアニメーションのワークフローやアニメーションレイヤーの作り方、IKなどによるアニメーション調整のアプローチについて紹介しています。

### Six Grass Rendering Techniques in Unity

[Six Grass Rendering Techniques in Unity](https://danielilett.com/2022-12-05-tut6-2-six-grass-techniques/)

Unityで草をレンダリングするためのテクニック・手法を６つ紹介し（Mesh Grass・Geometry + Tesselation Shader・Compute ShaderによるProcedural Rendering・Billboarding・Imposter・Unity Terrains）、それぞれのメリットやデメリットについてまとめています。

### Humanoidアニメーション内のFoot IK、Hand IKって何？どうやって使うの？

[【Unity】Humanoidアニメーション内のFoot IK、Hand IKって何？どうやって使うの？ - Qiita](https://qiita.com/Maron_Vtuber/items/9c12d45cfb4cae11a83f)

HumanoidアニメーションでのFootIKやHandIKの挙動とその利用用途について紹介しています。

### シェーダーモデルとは

[【Unity】シェーダーモデルとは - シェーダーTips](https://ny-program.hatenablog.com/entry/2022/12/04/204408)

Unityの `#pragma target` ディレクティブで指定できるシェーダーモデルについてその概要と、指定できるシェーダーモデルそれぞれの説明と主要なAPIのサポート状況についてまとめています。

### UnityのUI Elements (UI Toolkit)を触ってみた

[UnityのUI Elements (UI Toolkit)を触ってみた - Synamon’s Engineer blog](https://synamon.hatenablog.com/entry/2022/12/08/124015)

UI Elementsの概要や基本的な利用方法、各種UIの実装方法について紹介しています。

### JenkinsでUnityをビルドしてSlackに結果を通知する

[JenkinsでUnityをビルドしてSlackに結果を通知する – 株式会社ロジカルビート](https://logicalbeat.jp/blog/11046/)

UnityアプリをJenkins経由でビルドするための `BuildPipeline.BuildPlayer` の利用方法やビルド結果をSlackに通知するためのJenkinsの設定についてまとめています。

### URPでの2Dライト

[URP での 2D ライト - 強火で進め](https://nakamura001.hatenablog.com/entry/2022/12/06/_URP_%E3%81%A7%E3%81%AE_2D_%E3%83%A9%E3%82%A4%E3%83%88?utm_source=feed)

[Light 2D について - 強火で進め](https://nakamura001.hatenablog.com/entry/2022/12/06/_Light_2D_%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6?utm_source=feed)

[Light Blend Styles について - 強火で進め](https://nakamura001.hatenablog.com/entry/2022/12/06/_Light_Blend_Styles_%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6?utm_source=feed)

[Shadow Caster 2D について - 強火で進め](https://nakamura001.hatenablog.com/entry/2022/12/06/_Shadow_Caster_2D_%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6?utm_source=feed)

URPで利用できる2Dライトについて、導入方法からLight 2Dコンポーネントの各種設定、Light Blend Styles、Shadow Caster 2Dなどについてまとめています。

### ShaderGraphできらきら光るシェーダーを作成する

[【Unity】ShaderGraphできらきら光るシェーダーを作成する - 武0武/blog](https://bravememo.hatenablog.com/entry/2022/12/11/000000)

Shader Graphで、きらきら光るカードのような見た目を作るシェーダーの実装方法について紹介しています。

## Repositories

### Unity Anime Toolbox

[unity3d-jp/AnimeToolbox](https://github.com/unity3d-jp/AnimeToolbox)

Unityでアニメや映像を制作するための数々の機能を提供する包括的なパッケージ。

含まれるパッケージとドキュメントは[こちら](https://github.com/unity3d-jp/AnimeToolbox/wiki/%E4%B8%BB%E8%A6%81%E3%83%91%E3%83%83%E3%82%B1%E3%83%BC%E3%82%B8)。

### NSprites - Unity DOTS Sprite Rendering Package

[Antoshidza/NSprites: Unity DOTS Sprite Rendering Package](https://github.com/Antoshidza/NSprites)

ECS互換なスプライトレンダリングシステム。

同マテリアルを持つスプライトエンティティを1ドローコールで描画する。

### NativeTrees

[bartofzo/NativeTrees: Burst compatible Octree and Quadtree for Unity](https://github.com/bartofzo/NativeTrees)

ECS/DOTS向けのAABBを格納するOctreeとQuadtree実装。

現状、レイキャスト・範囲内の要素列挙・k近傍列挙などのクエリをサポート。

### NightPool

[MeeXaSiK/NightPool: Fast object pool for Unity](https://github.com/MeeXaSiK/NightPool?)

高速なゲームオブジェクトプール実装。

### MonoCache

[MeeXaSiK/MonoCache: Lightweight Optimization Framework for Unity](https://github.com/MeeXaSiK/MonoCache)

Update集約による高速なUpdateループとコンポーネントキャッシュを提供する最適化フレームワーク。

### **TimeControl**

[AkiKurisu/Time-Control: Unity时间回溯系统](https://github.com/AkiKurisu/Time-Control)

ゲーム中のTransformやAnimatorなどの記録・巻き戻し・再生を行うことのできるライブラリ。

## Advent Calendar

12/05 〜 12/11にアドベントカレンダーに投稿された記事のうち、主にUnityに関する記事をまとめています。

### anti-aliasingのはなし

[[VRChat] anti-aliasingのはなし - Qiita](https://qiita.com/phi16/items/78f3760535c6b1fe63c7)

エイリアシングの発生原因と、その解決方法としてMulti-SamplingとTexture Filteringの２手法の紹介、エイリアシングが発生しやすいケースとその対処方法についてまとめています。

### Shader GraphでStylizedなSkyboxシェーダを実装する

[【Unity】Shader GraphでStylizedなSkyboxシェーダを実装する【Advent Calendar 12/5】｜Colorful Palette](https://media.colorfulpalette.co.jp/n/n136e0ef5e1e7?magazine_key=m753f507dae79)

Shader Graphでアーティストが細かい色調整がしやすいSkyboxシェーダーを実装する方法について、地平線の高さと２カラーでの空のカラーの制御、太陽の描画、ノイズテクスチャを用いた雲の描画、時間経過の表現などについてまとめています。

### デザイナー向け5つのUnityテクニック

[【知らないと損する？】デザイナー向け5つのUnityテクニック - 渋谷ほととぎす通信](https://shibuya24.info/entry/unity-basis-designer-technique)

デザイナーさんがUnityで作業をする上で知っておくと便利な操作やショートカットについて５つ紹介しています。

### SYNMNのマルチプレイの仕組みについてちょっと紹介

[SYNMNのマルチプレイの仕組みについてちょっと紹介 - Synamon’s Engineer blog](https://synamon.hatenablog.com/entry/2022/12/05/235416)

自社で開発するSYNMNのマルチプレイでの状態同期の実装方針とその意図、メリット・デメリットについて紹介しています。

### 金で解決する！Unityの絵作り

[金で解決する！Unityの絵作り](https://zenn.dev/o8que/articles/ee9396f7c438d7)

Asset Storeで有料アセットをうまく活用しつつ、Unityでのゲーム制作できれいな絵作りをするためのライトなどの設定方法についてまとめています。

### Unityで制作したアプリをMeta Quest2(OculusQuest2)でビルドする方法

[Unityで制作したアプリをMeta Quest2(OculusQuest2)でビルドする方法 - Qiita](https://qiita.com/yoooosu/items/b5f929a480cb1f68b5fc)

Unityで制作したMeta Quest2アプリを実機ビルドして、実機上で動作させる方法についてまとめています。

### ARアプリをテストするときのテスト観点簡単にまとめてみた

[ARアプリをテストするときのテスト観点簡単にまとめてみた - Qiita](https://qiita.com/uechan16/items/30668732ab5370d62dae)

ARアプリのテスト観点についてまとめています。

### WebGLのプラグインをモダンに書く方法

[[Unity]WebGLのプラグインをモダンに書く方法 - Qiita](https://qiita.com/yaegaki/items/71cdebc7798784aa3464)

WebGLのプラグイン（ `.jslib` ）開発を、`__postset` を用いて都度WebGLビルドすることなくプラグインを開発する方法とその汎用化、C#とJS間でのデータの受け渡し、C#のメソッドをJSから呼び出す方法などについてまとめています。

### Unity<=>Maya受け渡せるカスタムアトリビュートまとめ

[Unity<=>Maya受け渡せるカスタムアトリビュートまとめ - Qiita](https://qiita.com/salt-k2t/items/c44c2235a16bb43827af)

Mayaで入力したアトリビュートのうち、どのデータ型のもののアトリビュート名とカーブがUnityにインポートして利用できるかについてまとめています。

### Unity2022.2からのECS入門

[Unity2022.2からのECS入門【Advent Calendar 12/6】｜Colorful Palette](https://media.colorfulpalette.co.jp/n/n669486062bf7)

ECSの基本的な実装方法と、MonoBehaviour実装との比較について紹介しています。

### インスペクタでクラス定数をenumのように選択できるようにする

[インスペクタでクラス定数をenumのように選択できるようにする [Unityエディター拡張, Odin対応] - Qiita](https://qiita.com/tanikura/items/83f628102f021b9559d5)

クラス定数をセレクタで選択できるようなEditorUIの実装について紹介しています。

### PhotonFusion + PhotonVoice2 導入方法

[【Unity】PhotonFusion + PhotonVoice2 導入方法【ボイスチャット】 - Qiita](https://qiita.com/Cova8bitdot/items/d19ce607d6a3933c2000)

PhotonFusionとPhotonVoice2の導入方法についてまとめています。

### ILPostProcessorとasmrefを使った外部Packageのメソッド書き換え

[【Unity】ILPostProcessorとasmrefを使った外部Packageのメソッド書き換え - Qiita](https://qiita.com/sune2/items/bb23de9364f966ada933)

ILPostProcessorとasmrefを用いて、Unity Package Managerで導入した外部パッケージの特定のメソッドを書き換える方法について紹介しています。

### Cysharp/ObservableCollectionsの紹介とUnityでの使い方考察

[Cysharp/ObservableCollectionsの紹介とUnityでの使い方考察 - Qiita](https://qiita.com/toRisouP/items/c42769dd23a91b1b4762)

Cysharpが提供する [ObservableCollections](https://github.com/Cysharp/ObservableCollections) について、提供する各種コレクションの紹介とコレクションとUnityのビュー（uGUI）をつなぎこむ方法、少し複雑なUIの実装をMV(R)Pベースな設計とObservableCollectionsを用いて実装する方法についてそれぞれ解説しています。

### CRI ADX2 + Addressables + 宴のマシマシセットを動かす

[CRI ADX2 + Addressables + 宴のマシマシセットを動かす - 鉄ブロ](https://tetsujp84.hatenablog.com/entry/2022/12/05/054915)

CRIWARE公式のUnityサポートプラグインによるADXファイルのUnityアセット対応とAddressables対応、宴でAddressablesを用いてADXファイルを読み込んで再生する方法についてまとめています。

### DOTween + UniTask環境でのTweenCancelBehaviourについて

[DOTween + UniTask環境でのTweenCancelBehaviourについて - Qiita](https://qiita.com/gen09/items/163ca1d8c6572a27b623)

DOTweenでUniTask上でアニメーションの終了を待つときに利用する `ToUniTask` で渡す `TweenCancelBehaviour` の挙動についてまとめています。

### コルーチンやUniTaskを使ったゲージアニメーションについて

[コルーチンやUniTaskを使ったゲージアニメーションについて【Advent Calendar 12/7】｜Colorful Palette](https://media.colorfulpalette.co.jp/n/n18a11e05e883?magazine_key=m753f507dae79)

UIアニメーションを、コルーチンとUniTaskを用いてそれぞれ実装する方法について紹介しています。

### Geospatial APIでオレオレセカイカメラを作りかけた

[Geospatial APIでオレオレセカイカメラを作りかけた - Qiita](https://qiita.com/mhama/items/ea164bfc8c8d105f5175)

Geospatial APIを用いてセカイカメラのようなARアプリを作る方法や、Google Places APIから情報を取る際のコツ（複数回呼び出しや疎密への対応）、ロケーション情報を画面表示する方法、住所から階数を推定して高度情報として利用する方法などまとめています。

### Samplerが消える問題

[【Unity】Samplerが消える問題 - Qiita](https://qiita.com/ayaha401/items/55f773e2c40dcb937b7f)

UnityでSamplerを扱う上での注意点やSamplerを使いまわして16枚以上のテクスチャを1シェーダーで扱う方法、その際発生したSamplerStateが消える問題とその対処方法についてまとめています。

### インスペクタに画像を表示する

[インスペクタに画像を表示する [Unityエディター拡張, Odin対応] - Qiita](https://qiita.com/tanikura/items/26ba587d42fd8f05262a)

インスペクタ上にテクスチャを表示する方法についてその実装を紹介しています。

### SONY ELF-SR1にUnityのPost Processingどこまで効くか試してみた

[【空間再現ディスプレイ】SONY ELF-SR1にUnityのPost Processingどこまで効くか試してみた - Qiita](https://qiita.com/iorn121/items/e08acb9b070cd196eb50)

SONY ELF-SR1の画面にPost Processing（Post-Process Stack v2）をかける方法と、Post-Process Stack v2の各種効果についてまとめています。

### 今すぐできる！Unityでの開発を快適にするための各設定

[今すぐできる！Unityでの開発を快適にするための各設定 - Qiita](https://qiita.com/kai_yamamoto/items/2ee478f1dd0284bfbb3c)

Unityの開発を快適にする設定について紹介しています。

### URPのBokeh DoFを読み解く

[【Unity】URPのBokeh DoFを読み解く【Advent Calendar 12/8】｜Colorful Palette](https://media.colorfulpalette.co.jp/n/n926f008617b3)

URPに実装されているボケ表現の実装を、その原理とURPでの実装についてコードを追いながら計算式の説明も交えつつ解説しています。

### 複数ループDOTweenのタイミングを同期する方法

[複数ループDOTweenのタイミングを同期する方法 - Qiita](https://qiita.com/ozaki_shinya/items/54f6d8f108359ef28394)

複数のループトゥイーンのタイミングを同期する方法とそのユーティリティクラスの実装について紹介しています。

### UnityでGitHub Actions

[UnityでGitHub Actions(1) -Unityのライセンス認証 - Qiita](https://qiita.com/tanikura/items/42085f24e83644258c53)

[UnityでGitHub Actions(2) -PRと特定コメントをフックにしてビルドを行う - Qiita](https://qiita.com/tanikura/items/b2334656bc1d1910e995)

GitHub ActionsでUnityを扱うための、GameCIを用いたライセンス認証の方法やPRなどをフックしてUnityビルドを行う方法について紹介しています。

### ワープポータル転送演出の作り方

[【Unity】ワープポータル転送演出の作り方【AdventCalendar2022】 - かつて代官山らへんで働いてたengineerのUnityブログ](https://chroske.hatenablog.com/entry/2022/12/08/225344)

ワープポータルのような表現を行うシェーダーの実装方法について紹介しています。

### UnityからAzure Computer Visionを利用する

[UnityからAzure Computer Visionを利用する - Qiita](https://qiita.com/t_A_M_u/items/62b97f4d70abc9bc8069)

UnityからAzure Computer Visionを利用するための環境の構築手順から実装方法、実際にUnityのテクスチャを Computer Visionにかけて解析する方法について紹介しています。

### Unity Cinemachine VirtualCameraを知らない人向けだけの紹介

[Unity Cinemachine VirtualCameraを知らない人向けだけの紹介 - Qiita](https://qiita.com/YamadaGames/items/fbdbfdafa18137b52a60)

CinemachineのVirtualCameraについて紹介しています。

### Timelineからシグナルを使ってAnimationController制御する

[#unity Timelineからシグナルを使ってAnimationController制御する - 土屋つかさの技術ブログは今か無しか](https://someiyoshino.info/entry/2022/12/09/000758)

Timelineのシグナルを用いて、タイムライン再生中に AnimationController に対して命令を送る方法について紹介しています。

### GitLab CI で Unity アプリをビルドする CI テンプレートを作った

[GitLab CI で Unity アプリをビルドする CI テンプレートを作った](https://zenn.dev/masakura/articles/1235eeddc00e70)

GameCIのイメージを利用しつつGitLab CIでUnityアプリをビルドするテンプレートを実装する方法について紹介しています。

### InputSystemを使ったらWebGLのEditorとPCとスマホそれぞれで苦労した話

[InputSystemを使ったらWebGLのEditorとPCとスマホそれぞれで苦労した話 - tanaka's Programming Memo](https://am1tanaka.hatenablog.com/entry/unity-adcale1209-inputsystem)

Input Systemとシーンの非同期ロードの組み合わせで発生した不具合とその対応方法について紹介しています。

### URPでオブジェクトモーションブラーを使う

[[Unity]URPでオブジェクトモーションブラーを使う - Qiita](https://qiita.com/rarudonet/items/fb2386a60a2468e76a00)

PostProcessingStack V2に実装されているオブジェクトモーションブラー（オブジェクトの移動・回転に対してブラーを適用する機能）をURPで `ScriptableRenderPass` を用いて実装する方法について紹介しています。

### 汎用的なCI環境構築ライブラリを作ったお話

[[Unity] 汎用的なCI環境構築ライブラリを作ったお話 - Qiita](https://qiita.com/s_ebata/items/bec17b737bd572324086)

Unityのアプリビルドで、複数のプロジェクトをまたいで利用できる汎用的なCI環境の構築方法について紹介しています。

### UnityでAndroidアプリのメモリ使用量を軽量に取得する

[UnityでAndroidアプリのメモリ使用量を軽量に取得する - Qiita](https://qiita.com/messhi/items/4ecad44568defa817714)

Androidアプリのメモリを `ActivityManager` の `getProcessMemoryInfo` からネイティブプラグイン経由で取得する方法とその軽量化について紹介しています。

### Photon Fusion for UnityとPlayFabを連携し、データを永続化する

[Photon Fusion for UnityとPlayFabを連携し、データを永続化する - Qiita](https://qiita.com/nimushiki/items/6c41111ab2b4adcc8d4f)

Photon Fusion for UnityにPlayFabを組み合わせて、オンラインゲームの認証・データ保存機能を実装する方法について紹介しています。

### Unityでアイソメトリックマップ（クオータービューマップ）を作ってみた

[Unityでアイソメトリックマップ（クオータービューマップ）を作ってみた｜とぶ@うさおいみと｜note](https://note.com/moon_peta/n/nc8968556dcef)

TilemapとTilemapRendererを用いてクォータービューマップを実装する方法について紹介しています。

### 今からでも遅くない！最新のUnityエディタ拡張を知ろう 〜 UIElementsのすすめ 〜

[今からでも遅くない！最新のUnityエディタ拡張を知ろう 〜 UIElementsのすすめ 〜 - Qiita](https://qiita.com/yuyu0127/items/9fa7f4fac5dd8862e18e)

UIElementsによるエディタ拡張のUI実装方法について紹介しています。

### 新しいUnity Searchの隠れた機能紹介

[【Unity】新しいUnity Searchの隠れた機能紹介 - うどんてっくメモ](https://myudon.hatenablog.com/entry/unity_advent_2022)

新しいUnity Searchで利用できる機能として「検索条件の保存」・「Search AssetStore（アセットストアの検索）」・「Performance（エディタで実行されている処理の呼び出し回数や処理時間の検索）」について紹介しています。

### Rigidbody を用いた移動でよく出る不具合と、FixedUpdate 改造による解決法の提案

[Rigidbody を用いた移動でよく出る不具合と、FixedUpdate 改造による解決法の提案【Unity】 - Qiita](https://qiita.com/tsukimi_neko/items/acf2d1dce01ea97885cf)

FixedUpdateをPlayerLoopをカスタマイズしてUpdateと更新間隔を一致させることで、カメラのカクつきや入力受け付け漏れなどを解消する方法について解説しています。

### UnityのTimelineを使ってMV製作した話

[UnityのTimelineを使ってMV製作した話 - kugi's notebook](https://kugi-masa.hatenablog.com/entry/NaTsu_Beats_MV)

Timelineでカスタムトラック実装やShader Graphを組み合わせてMVを制作する方法について紹介しています。

### **Unityのパススルーのサンプルを動かす**

[Unityのパススルーのサンプルを動かす｜41h0｜note](https://note.com/41h0/n/n7ca6059d6edc)

Unityで制作したMeta Quest Proアプリでパススルーをするための設定から実機ビルド、動作確認までを説明しています。

### VContainerでインスタンスを複数登録できなかった話

[VContainerでインスタンスを複数登録できなかった話 - Qiita](https://qiita.com/tanikura/items/443982e5a917abed9970)

VContainerで複数インスタンスを登録する際に、 `InstanceRegistrationBuilder` が内部でインスタンスの生存期間を `Singleton` として指定するために発生する問題と、登録の際にスコープを明記することでこの問題を解決する方法について紹介しています。

### SRDebuggerのオプションにSliderを実装する

[[Unity]SRDebuggerのオプションにSliderを実装する - Qiita](https://qiita.com/madoramu_f/items/d70f51630f80a5631f0c)

SRDebuggerで、Slider属性を自作してスライダーUIを実装する方法について紹介しています。




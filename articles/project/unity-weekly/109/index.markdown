---
type: "unity-weekly"
title: "Unity Weekly 109"
description: "2023/02/20週のUnity Weeklyです。CoreCLRの文字列マーシャリング、Adaptive Probe Volumes、Surface Gradient Bump Mapping、Weta Toolsなどについてまとめています。"
tags: ["Unity Weekly","Unity"]
date: "2023-02-20T00:00:01"

---

## Unity Officials

### 文字列マーシャリングを CoreCLR ガベージコレクターに対して安全にする

[文字列マーシャリングを CoreCLR ガベージコレクターに対して安全にする | Unity Blog](https://blog.unity.com/ja/technology/making-string-marshaling-safe-for-coreclr-garbage-collector)

Unityの .NET CoreCLR対応の際に行った文字列のマーシャリング周辺の対応についてまとめています。

### Unityの新しいライティング機能 Adaptive Probe Volumes

[Unityの新しいライティング機能 Adaptive Probe Volumes - YouTube](https://www.youtube.com/watch?v=4eIAWo-Gmiw)

Unity2022.2から利用できるAdaptive Probe Volumeについてその概要と使い方の紹介、従来のLight Probe Groupsとの比較、Lightmapperと比較したときの静的オブジェクトのライティングの品質を比較しています。

### ヘックス・タイリングでテクスチャの繰り返しを防ごう！（Surface Gradient Bump Mapping解説）

[【Unity】ヘックス・タイリングでテクスチャの繰り返しを防ごう！（Surface Gradient Bump Mapping解説） - YouTube](https://www.youtube.com/watch?v=9VhbXyYIXhc)

Unityで利用できるHex Tilingと、それを実現するために使われているSurface Gradient Bump Mappingについて解説しています。

### Introducing Eddy and Deep Comp

[Eddy and Deep Comp Tools](https://create.unity.com/LP=4513)

UnityがWeta Toolsのベータ版のアクセスをフォームにて開始しました。

ガス状の流体シミュレーションを高速かつインタラクティブに操作できるEddy（v2.9）と、Deep Comp Tool（v0.5 beta）の2つのツールの利用をリクエストできます。

どちらもNukeに対応していて、現状EddyはWindows/Linux上で、Deep Comp ToolsはLinux版を提供しています。

また、大幅な機能追加が行われるEddy v3.0のベータ版は2023/04頃提供予定とのことです。

### Unity Toon Shaderの公式マニュアルの日本語訳の完了

[Unity Toon Shader の概要 | Unity Toon Shader | 0.8.5-preview](https://docs.unity3d.com/ja/Packages/com.unity.toonshader@0.8/manual/index.html)

Unity Toon Shaderの公式マニュアルの日本語訳の完了がアナウンスされました。

## Slides

### CA.unity #6 資料公開

[CA.unity | Unity Learning Materials](https://learning.unity3d.jp/event/ca-unity/)

サイバーエージェントの主催するCA.unity第6回目のスライド資料と発表動画が、Unity Learning Materialsにて公開されています。

* [存在しないアセットへの参照と未公開アセットでのネタバレにどう立ち向かうか | Unity Learning Materials](https://learning.unity3d.jp/9584/)
* [2Dキャラをリッチに魅せる描画テクニック | Unity Learning Materials](https://learning.unity3d.jp/9586/)
* [Unity+C#で学ぶ！ メモリレイアウトとvtableのすゝめ 〜動的ポリモーフィズムを実現する仕組み〜 | Unity Learning Materials](https://learning.unity3d.jp/9588/)
* [都市ARの作り方 PLATEAU × Geospatial API | Unity Learning Materials](https://learning.unity3d.jp/9589/)
* [Unityでのチート対策を簡単かつ高品質に行う為の取り組み | Unity Learning Materials](https://learning.unity3d.jp/9585/)
* [URPのBokeh Depth of Fieldを物理挙動から紐解く | Unity Learning Materials](https://learning.unity3d.jp/9587/)

## Articles

### URP14でポストエフェクトのかけ方が変わった

[URP14でポストエフェクトのかけ方が変わった](https://zenn.dev/sakutaro/articles/bliter_api_change)

URP14で入るBliterAPIの説明と、そのAPIでのポストエフェクトのかけ方についてAPI呼び出しとシェーダー記述の観点でまとめています。

### 既存のRendererFeatureをURP14のBlitに対応させる

[既存のRendererFeatureをURP14のBlitに対応させる](https://zenn.dev/sakutaro/articles/convert_blitter)

URP14以前で実装したポストエフェクトをURP14で入るBliterAPIでの実装に置き換える方法についてまとめています。

### Cesium for UnityとPLATEAUを連携して、GeospatialAPIで位置合わせを行う

[Cesium for UnityとPLATEAUを連携して、GeospatialAPIで位置合わせを行う](https://zenn.dev/meson/articles/cesium-plateau-geospatialapi)

Geospatials API・Cesium for Unity・PLATEAUの、3つのサービスを併用するための位置合わせの手法について、それぞれの高度の扱いや座標系の整理、Cesiumのセットアップ、Geospatial APIを用いた位置合わせの手法について実装を交えつつ紹介しています。

### Unityのアプリ上でWebAssemblyを動かしてみる

[Unityのアプリ上でWebAssemblyを動かしてみる - Synamon’s Engineer blog](https://synamon.hatenablog.com/entry/wasm_on_unity)

WebAssemblyの概要と、Unity上でWebAssemblyを動かす方法について、Unity上で利用できるランタイムの紹介・Wasmtimeを用いたWebAssemblyの実行とAoTコンパイルなどの観点でまとめています。

また、UnityでWasmの使い道や導入を検討する際の課題についてもまとめています。

### JetBrains Rider/ReSharperのNamespace does not correspond to file locationインスペクションをUnityプロジェクトで期待どおり診断させる

[JetBrains Rider/ReSharperのNamespace does not correspond to file locationインスペクションをUnityプロジェクトで期待どおり診断させる - やらなイカ？](https://www.nowsprinting.com/entry/2023/02/17/004304)

JetBrains Rider/ReSharperの提供する名前空間とディレクトリ階層が一致するかを検査する「Namespace does not correspond to file location」を、期待通り動作させる方法について紹介しています。

### サーバーから値を取得してゲームの挙動を変える

[[RemoteConfig] サーバーから値を取得してゲームの挙動を変える](https://zenn.dev/kameffee/articles/ec98792fb349be)

UGS（Unity Gaming Services）のRemoteConfigの説明と環境セットアップから基本的な使い方、複数環境の作り方と切り替え方、tipsとしてスキーマの更新をロールバックする方法やエディター上から値の更新を行う方法などについてまとめています。

### Addressables × CRIの調査メモ

[Addressables × CRIの調査メモ - Qiita](https://qiita.com/mad_khaki/items/2ac93f1f489106bba690)

CRI AssetsとCRI Addressablesについてまとめています。

### 高校生でもわかりそうだけど、ちゃんと理解もするUnityでのクォータニオン運用法

[高校生でもわかりそうだけど、ちゃんと理解もするUnityでのクォータニオン運用法｜MetaFormingPro｜note](https://note.com/metaformingpro/n/n8b19767b7788)

クォータニオンによる回転の扱い方やその原理について解説しています。

### GIFをサポートするようにできる「mgGif」というライブラリの使い方(Imageへの適応例つき)

[【Unity】GIFをサポートするようにできる「mgGif」というライブラリの使い方(Imageへの適応例つき) - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2023/02/16/120000)

Unityでgif動画を利用できるmgGifの基本的な使い方とuGUIのImageでgif動画を再生するコンポーネントの実装例、パフォーマンスのための設定項目について解説しています。

### TextMesh Proでテキストを１文字ずつ表示する

[【Unity】TextMesh Proでテキストを１文字ずつ表示する | ねこじゃらシティ](https://nekojara.city/unity-textmesh-pro-typewriter-effect)

TextMeshProを用いて文字送り演出（文章を一文字づつ描画していく演出を指す）を実装するために便利なプロパティの紹介と、コルーチンとUpdateメソッドでそれぞれ実装する方法を紹介しています。

### Improve retention by storing player data in the cloud

[Improve retention by storing player data in the cloud - GameDev Resources](https://gamedev-resources.com/improve-retention-by-storing-player-data-in-the-cloud/)

UGSの認証とCloud Save使って、ゲームのユーザー認証とユーザーデータのロード、セーブを実装する方法についての紹介しています。

### 半透明描画について

[【Unity】半透明描画について - シェーダーTips](https://ny-program.hatenablog.com/entry/2023/02/18/124543)

Unityでの半透明描画について基本的な計算から描画を正しく行うためのシェーダーのタグ記述、半透明を綺麗に描画するためのテクニック、半透明の負荷について解説しています。

## Repositories

### UniTyped

[ruccho/UniTyped: A source generator for Unity that provides strongly typed access to serialized data through SerializedObject / SerializedProperty.](https://github.com/ruccho/UniTyped)

SerializeObjectやSerializedProperty経由でのシリアライズされたフィールドへのアクセスのためのコードをSourceGeneratorを用いて自動生成するライブラリ。

### HLSL Tools for Visual Studio Config Generator

[hecomi/HLSLToolsForVisualStudioConfigGenerator: Create shadertoolsconfig.json for Unity project](https://github.com/hecomi/HLSLToolsForVisualStudioConfigGenerator)

Unityプロジェクト用のshadertoolconfig.jsonを生成するツール。

v1.1.0でCore RP/URP/HDRP/SHaderGraphやgit URLで追加したソースも含む対応が行われました。

### Unity Threading

[Enderlook/Unity-Threading: A helper library for Unity Jobs, System.Threading, Async/Await and Coroutines in Unity.](https://github.com/Enderlook/Unity-Threading)

UnityのジョブやSystem.Thrading、async/await、コルーチンのヘルパーライブラリ。

### Multiable Buildable Target Configuration Tool

[voldien/UMultiTargetBuilder: Unity 3D Multi Platform Builder Configuration Project Tool](https://github.com/voldien/UMultiTargetBuilder?)

複数のプラットフォーム用に異なる設定を持つ複数のビルドターゲットの追加をサポートするエディター拡張。
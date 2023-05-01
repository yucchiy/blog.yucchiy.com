---
type: "unity-weekly"
title: "Unity Weekly 119"
description: "2023/05/01週のUnity Weeklyです。The Universal Render Pipeline cookbook、Optimizing memory and build size Webinerなどについてまとめています。"
tags: ["Unity Weekly","Unity"]
date: "2023-05-01T00:00:01"

---

## Unity Officials

### Recipes for popular visual effects with the Universal Render Pipeline

[Recipes for popular visual effects with the Universal Render Pipeline | Unity Blog](https://blog.unity.com/engine-platform/popular-visual-effects-recipes-with-universal-render-pipeline)

URPを用いたVisual Effectsに関するレシピ集「The Universal Render Pipeline cookbook」が、近日中にeBookで公開される旨が告知されました。

この記事では、そのeBookから一部のコンテンツを紹介しています。

### Extended Q&A: Optimizing memory and build size with Addressables

[Extended Q&amp;A: Optimizing memory and build size with Addressables | Unity Blog](https://blog.unity.com/engine-platform/extended-q-a-optimizing-memory-and-build-size-with-addressables)

UnityのAccelerate Solutionsによる、メモリ使用量やアプリビルドサイズを最適化に関する[ウェビナー](https://resources.unity.com/games/accelerate-solutions-memory-and-addressables-webinar)のQ&Aの延長として、ウェビナーで答えられなかったいくつかの質問に対して追加で回答を行っています。

### How to initiate guest access for remote collaboration with Parsec for Teams

[How to initiate guest access for remote collaboration with Parsec for Teams | Unity Blog](https://blog.unity.com/engine-platform/how-to-initiate-guest-access-for-remote-collaboration-with-parsec-for-teams)

Persec for Teamsアカウントで、共同作業者に対して一時的なゲストアクセス権限を付与する方法について紹介しています。

### 勉強の習慣を身につけるなら、もくもく会へ！5月Unityイベント情報まとめ

[勉強の習慣を身につけるなら、もくもく会へ！5月Unityイベント情報まとめ｜Unity Japan（ユニティ・テクノロジーズ・ジャパン）｜note](https://note.com/unityjapan/n/nf5a42131e612)

5月に開催される、Unityに関するもくもく会イベントをまとめています。


## Unity Repositories

### Netcode for GameObjects v1.4.0

[Release 1.4.0 · Unity-Technologies/com.unity.netcode.gameobjects](https://github.com/Unity-Technologies/com.unity.netcode.gameobjects/releases/tag/ngo/1.4.0)

NGO（Netcode for GameObjects）のv1.4.0がリリースされました。サーバーとクライアントの起動や終了を受け取るイベントや姿勢同期のための半精度（half float）オプション、Quaternionの圧縮オプションなど、さまざまな機能が追加されています。

### Boss Room v2.1.0

[Release v2.1.0 · Unity-Technologies/com.unity.multiplayer.samples.coop](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/releases/tag/v2.1.0)

Boss Roomのv2.1.0がリリースされました。サーバーの予期せぬシャットダウンの検出やNGO v1.4.0へのアップグレード、ロビーのアップデート購読をWebsocketベースのロビーイベントへ置き換えることによる帯域幅の削減などの対応が追加されています。

## Articles

### Circular menus in the Unity Editor

[Circular menus in the Unity Editor](https://alexanderameye.github.io/notes/unity-circular-menu/)

Blenderで提供されているような円形メニューを、UnityEditor上で実装する方法について、その実装コードを公開しています。

### RecyclableMemoryStreamを使ったメモリプールのご紹介

[RecyclableMemoryStreamを使ったメモリプールのご紹介 - Synamon’s Engineer blog](https://synamon.hatenablog.com/entry/2023/04/24/000000)

Microsoftの提供するMemoryStreamのプール実装RecyclableMemoryStreamについて、活用例や内部でのメモリ管理について紹介しています。

また、利用する際の注意点や、プールの有無でのベンチマークについても触れています。　

### Input SystemのAxis／Vector系Compositeのモードによる挙動の違い

[【Unity】Input SystemのAxis／Vector系Compositeのモードによる挙動の違い](https://nekojara.city/unity-input-system-axis-vector-composite)

Input Systemで、複数の入力を合成して1つの入力値として利用できるComposite Bindingのうち1D asix・2D vector・3D vectorについて、それぞれの機能の概要とパラメーターを変化させたときの挙動について解説しています。

また、2D vectorのAnalogモードのときにxyの値域が、-1から1なのでxyが張る領域は正方形になりますが、これをStick Deadzoneを用いて円形領域に加工する方法についても言及しています。

### Rider 2023.1 Release: Discovering New Features for Unity Developers

[Rider 2023.1 Release: Discovering New Features for Unity Developers | HackerNoon](https://hackernoon.com/rider-20231-release-discovering-new-features-for-unity-developers)

Rider 2023.1で追加された機能の中から、AndroidアプリのUSBを介したスクリプトデバッグやUI Toolkit向けの新しいテンプレート、DOTS向けに追加された機能などについてまとめています。

### uLipSync v3.0.0 をリリースしました

[uLipSync v3.0.0 をリリースしました - 凹みTips](https://tips.hecomi.com/entry/2023/04/28/230437)

このブログの著書が開発するuLipSyncのv3.0.0のアップデート内容をまとめています。

### Unityで非同期に行うスクリーンショットの取得・永続化・読み出し

[Unityで非同期に行うスクリーンショットの取得・永続化・読み出し](https://zenn.dev/waz/articles/0a69c809439944)

Unityでスクリーンショットの取得・保存・読み出しをそれぞれ非同期で行うためのUnityのAPIの紹介と、そのAPIを用いた実際の実装について解説しています。

また、スクリーンショットの保存の際に `ImageConversion.EncodeNativeArrayToPNG` を用いて `Texture2D` のネイティブ領域のメモリを直接pngにエンコードすることで、C#のマネージド領域のメモリ確保を省くテクニックや、各手法のパフォーマンスについても言及しています。

### ゲーム開発から見たAndroid端末とiOS端末

[ゲーム開発から見たAndroid端末とiOS端末｜黒河優介｜note](https://note.com/wotakuro/n/n103da624704d)

モバイルゲームの開発における、iOS/Android向けの対応の難しさについて、とくにAndroid端末の種類の豊富さからスペック帯、搭載しているGPUなどの観点から説明しています。

### UnityでSerializeFieldされたFieldへオブジェクトを楽にBindingできるようにしました

[UnityでSerializeFieldされたFieldへオブジェクトを楽にBindingできるようにしました](https://zenn.dev/happy_elements/articles/93b612af56a20a)

`SerializeField`属性が設定されたフィールドの参照を、 `AutoAssignByName("path/to/component")` のような属性を設定しておくことで、対応するパスにアタッチされたコンポーネントをバインドするようなエディター拡張について、その実装を紹介しています。

### FlutterUnityWidgetを使ってUaaL(Flutter)を試す

[FlutterUnityWidgetを使ってUaaL(Flutter)を試す - Qiita](https://qiita.com/K0uhe1D/items/611771ea0dae1de9d5fd)

Unity as a Library（UaaL）を用いてFlutterアプリ上でUnityアプリを操作するための [FlutterUnityWidget](https://github.com/juicycleff/flutter-unity-view-widget)の、iOSビルドを行う手順についてまとめています。

### IEquatableの実装をSource Generatorで生やす

[【C#】IEquatableの実装をSource Generatorで生やす - うどんてっくメモ](https://myudon.hatenablog.com/entry/2023/04/24/120000)

`Equatable` 属性をつけるとそのクラスの `IEquatable` を自動生成する [Generator.Equals](https://github.com/diegofrata/Generator.Equals) の使い方と内部実装について紹介しています。

### そろそろShaderをやるパート85　-URP編- シンプルなURP向けShaderを書いてみる

[そろそろShaderをやるパート85　-URP編- シンプルなURP向けShaderを書いてみる](https://zenn.dev/kento_o/articles/161d9d0e604470)

ベースカラーに対して色を乗算できるシンプルなUnlit Shaderを例に、URPのシェーダーの記述方法と、SRP Batcherに対応する方法について紹介しています。

### Macアプリを、公証済みpkg（インストーラー）で配布する

[【Unity】Macアプリを、公証済みpkg（インストーラー）で配布する](https://zenn.dev/dara/articles/253507ae7b3608)

Unityで制作したアプリを、macOSで、署名付きのpkgとして配布する方法を紹介しています。

### Unityで作ったPC(Windows&Mac)向けゲームでアスペクト比は固定したままウィンドウのサイズは可変出来るようにする

[Unityで作ったPC(Windows&Mac)向けゲームでアスペクト比は固定したままウィンドウのサイズは可変出来るようにする【Unity】【Mac】【Windows】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/WindowSizeAdjuster)

Windows向けのUnityアプリで、可変ウインドウにしつつもアスペクト比を固定するような実装について紹介しています。

### UI Toolkitにおけるイベント伝播の仕組みとハンドリング方法

[【Unity】UI Toolkitにおけるイベント伝播の仕組みとハンドリング方法 - LIGHT11](https://light11.hatenadiary.com/entry/2023/04/27/192204)

UI Toolkitのマウスやキーボードなどのイベントを受け取るための `RegisterCallback` の利用方法と、親子関係をもつUIElementに対して、どのようにイベントが伝播されるのかについて解説しています。
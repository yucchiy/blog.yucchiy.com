---
type: "unity-weekly"
title: "Unity Weekly 154"
description: "2024/01/08週のUnity Weeklyです。Unityフォルダー構造、CEDEC2023講演動画公開、Unity URP 完全に理解した勉強会、R3などについて取り上げています。"
tags: ["Unity Weekly", "Unity"]
date: "2024-01-09T00:00:01"

---

## Unity Officials

### Why folder structures matter

[Why folder structures matter | Unity Blog](https://blog.unity.com/engine-platform/why-folder-structures-matter)

プロジェクト内のフォルダー構造の重要性についての解説と、よくあるフォルダー構成のパターンを4種類紹介し、その中でアセットの目的に基づいたフォルダー構成のメリットについて紹介しています。

### CEDEC 2023

CEDEC 2023の講演のうち、Unity Technologies Japanが発表した講演の動画が、YouTubeおよびUnity Learning Materialsに公開されています。

- [C++で作ったゲームを Unity Gaming Service でホストする方法 | Unity Learning Materials](https://learning.unity3d.jp/10007/)
- [昼夜の変化のある「ビッグワールド」の町の実現のための実用的な技術の紹介／Practical technologies to create Big World city with time-of-day | Unity Learning Materials](https://learning.unity3d.jp/10002/)
- [推論ライブラリを実装する | Unity Learning Materials](https://learning.unity3d.jp/9990/)
- [アプリマネタイズ入門解説とUnity LevelPlay実装チュートリアル／ゲーム開発におけるAddressablesとDevOpsサービスの活用法 | Unity Learning Materials](https://learning.unity3d.jp/9995/)

## Events

### Unity URP 完全に理解した勉強会

[Unity URP 完全に理解した勉強会 - Unity Meetup](https://meetup.unity3d.jp/jp/events/1416)

Unityユーザコミュニティ主導で開催される勉強会「Unity 〇〇完全に理解した勉強会」のURP回が2024/02/02に開催されます。

## Articles

### 数式を読み解きながら頂点シェーダーで波の動きを作ってみる(Gerstner Waves)

[[Unity] 数式を読み解きながら頂点シェーダーで波の動きを作ってみる(Gerstner Waves)](https://zenn.dev/nrdev/articles/a1a350e5d7e725)

波を表現する「Gerstner Waves」について、手法の解説からUnity実装までを紹介しています。

### MagicOnion + MessagePack + YetAnotherHttpHandler でリアルタイム通信を行う

[MagicOnion + MessagePack + YetAnotherHttpHandler でリアルタイム通信を行う](https://zenn.dev/toutou/articles/7918da3d1a9e1d)

MagicOnion・MessagePack・YetAnotherHttpHandlerを用いて、Unityでリアルタイム通信を行う環境を構築する方法について解説しています。

### Visitorパターンで型によるswitchやif判定を消す

[Visitorパターンで型によるswitchやif判定を消す #C# - Qiita](https://qiita.com/toRisouP/items/d96a09fab827af17fb37?utm_campaign=post_article&utm_medium=twitter&utm_source=twitter_share)

型によるswitchやif判定を用いることによる問題点と、これをVisitorパターンを用いて解決する方法について紹介しています。

### uLipSync の WebGL 対応をしてみた

[uLipSync の WebGL 対応をしてみた - 凹みTips](https://tips.hecomi.com/entry/2023/12/30/003934)

ブログの著者が開発する「[uLipSync](https://github.com/hecomi/uLipSync)」のWebGL対応について、WebGLビルドにおける音声解析（`OnAudioFilterRead`）の課題と解決方法、音ズレの原因と対策についてそれぞれ解説しています。

### 【Unity / URP10.8.1】よく使うシェーダーのテクニックについてメモ (座標まわり)

[【Unity / URP10.8.1】よく使うシェーダーのテクニックについてメモ (座標まわり)](https://zenn.dev/r_ngtm/articles/unity-urp10-shader-memo)

ブログの著者がシェーダー実装の際によく使う座標に関するテクニックを9つ紹介しています。

### Ugui上でスパイク形状を簡単に作成するためのコンポーネント

[Ugui上でスパイク形状を簡単に作成するためのコンポーネント #Unity - Qiita](https://qiita.com/ScreenPocket/items/536fef55326a2bd8f783)

uGUIで、多角形やスパイク形状を表現する独自の `MaskableGraphic` 実装について、その原理と実装方法を解説しています。

### Input Systemでクリック／タップされた座標を取得する

[【Unity】Input Systemでクリック／タップされた座標を取得する | ねこじゃらシティ](https://nekojara.city/unity-input-system-press-position)

Input Systemでクリック・タップされた座標を取得する方法を、InputActionを用意してそのコールバックから取得する方法と、カスタムComposite Bindingを用いて取得する方法の2つの方法を紹介しています。

###  非同期コールバック関数パターン

[[Unity][C#] 非同期コールバック関数パターン │ Aiming 開発者ブログ](https://developer.aiming-inc.com/csharp/unity-csharp-async-callback-patterns/)

非同期なメソッドをコールバックとして呼び出すときのパターンや注意点をまとめています。

### 3Dアニメーションのための躍度最小軌道メモ

[3Dアニメーションのための躍度最小軌道メモ](https://zenn.dev/mogesystem/articles/9edbc38fd328d5)

躍度最小軌道を用いたアニメーション制御について、3Dキャラクターの手の位置の移動を題材に、アルゴリズムの原理からUnity上での実装までを解説しています。

### USSで変数を使う方法まとめ

[【Unity】【UI Toolkit】USSで変数を使う方法まとめ - LIGHT11](https://light11.hatenadiary.com/entry/2024/01/04/195725)

UI ToolkitのUSSで扱える変数についてまとめています。

### Transformインスペクタの拡張

[Transformインスペクタの拡張](https://zenn.dev/emptybraces/articles/6840c98af1c544)

Unity標準のTransformインスペクターを拡張する方法を紹介しています。

### TextMeshProのアウトラインの太さをランタイムで変更する

[【Unity】TextMeshProのアウトラインの太さをランタイムで変更する - うどんてっくメモ](https://myudon.hatenablog.com/entry/2024/01/03/155225)

TextMeshProの描画に利用されるマテリアルのプロパティを変更することで、アウトラインの太さをランタイムで変更する方法を紹介しています。

### SceneSystemを試してみた

[【Unity】SceneSystemを試してみた【AnnulusGames】](https://zenn.dev/ail/articles/1a6d64d34b43dc)

シーン管理システム「[SceneSystem](https://github.com/AnnulusGames/SceneSystem)」の導入から基本的な利用方法を紹介しています。

### ローカルUPMパッケージをunitypackage化する

[ローカルUPMパッケージをunitypackage化する](https://zenn.dev/ruccho/articles/b91d424cd3d005)

「[Asset Store Publishing Tools](https://assetstore.unity.com/packages/tools/utilities/asset-store-publishing-tools-115?locale=ja-JP)」を用いてローカル上のUPMパッケージをunitypackage化する方法を紹介しています。

### SpriteRendererで3D空間上に影を投影する

[【Unity】SpriteRendererで3D空間上に影を投影する【URP】](https://zenn.dev/gameshalico/articles/fa5d4b9c532039)

URP環境で、SpriteRendererが生成する影を3D空間上に投影する方法を紹介しています。

### Unityからのビルド時に、XCode上の設定を自動で行う

[【Unity/iOS】Unityからのビルド時に、XCode上の設定を自動で行う](https://zenn.dev/dara/articles/0d8c931f750fcb)

Xcode15対応やUaaLを利用するために必要なXcode上の設定を、`OnPostProcessBuild` を用いて、UnityがXcodeプロジェクトを作成時に自動で行う方法を紹介しています。

## Repositories

### R3

[Cysharp/R3: The new future of dotnet/reactive and UniRx.](https://github.com/Cysharp/R3)

dotnet/reactiveやUniRxの進化系を見据えたAPIの見直しや、モダンな技術による再実装によるパフォーマンス向上、プラットフォーム抽象化によってWPF・Unity・Godot・Avaloniaに対応したC#のReactive Extensions実装。

### LitMotion

[AnnulusGames/LitMotion: Lightning-fast and Zero Allocation Tween Library for Unity.](https://github.com/AnnulusGames/LitMotion?)

Unity向けの高速かつゼロアロケーションなTweenライブラリ。

### VitalRouter

[hadashiA/VitalRouter: The zero-allocation message passing tool for Unity (Game Engine). And the very thin layer that encourages MVP (or whatever)-like design.](https://github.com/hadashiA/VitalRouter)

Unity向けのゼロアロケーションなメッセージパッシングツール。

### ChainingAssertion for Unity

[AnnulusGames/ChainingAssertion-Unity: Chaining Assertion for Unity Test Framework](https://github.com/AnnulusGames/ChainingAssertion-Unity)

Unity Test Framework向けに実装されたメソッドチェーンベースのAssertionライブラリ。

### Fang Auto Tile

[ruccho/FangAutoTile: Fang Auto Tile is an easy and fully featured auto-tiling system for Unity.](https://github.com/ruccho/FangAutoTile)

Unity向け高機能なオートタイルシステム。
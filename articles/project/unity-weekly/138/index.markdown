---
type: "unity-weekly"
title: "Unity Weekly 138"
description: "2023/09/11週のUnity Weeklyです。ECS、Unity Physics、3D表現、Z-Fightingなどについて取り上げています。"
tags: ["Unity Weekly","Unity"]
date: "2023-09-11T00:00:01"

---

## Unity Officials

### モバイルの成長と収益化レポート / 2023 年

[モバイルの成長と収益化レポート / 2023 年 | Unity Blog](https://blog.unity.com/ja/games/the-2023-mobile-growth-and-monetization-report-is-here)

今年の6月に投稿された [The 2023 Mobile Growth and Monetization Report is here](https://blog.unity.com/en/games/the-2023-mobile-growth-and-monetization-report-is-here) の翻訳記事です。

この記事では、2023年に報告された [モバイルの成長と収益化に関するレポート](https://create.unity.com/mobile-growth-monetization-2023-jp) の概要について紹介しています。

### ECS で物理挙動！ Unity Physics を使ってみよう！

[ECS で物理挙動！ Unity Physics を使ってみよう！ - YouTube](https://www.youtube.com/watch?v=TZMB3jKnJuQ)

ECSベースの物理エンジン実装である Unity Physics について、その実装の概要からオーサリング手順（エディター上でのレベルデザイン方法）、PhysXとUnity Physicsでのパフォーマンス比較とBurst Compilerによる高速化、Unity PhysicsのC# スクリプティングついてそれぞれ解説しています。

また、ステートレスな設計によって通常のPhysXでのスクリプティングと比べて多くなってしまいがちなコード記述を、 `StatefulTriggerEvent` を用いて今までのコード記述に寄せる方法についても言及しています。

## Articles

### ECSで実装されたトゥイーンライブラリ「Magic Tween」を公開しました

[【Unity】ECSで実装されたトゥイーンライブラリ「Magic Tween」を公開しました - Annulus Games](https://annulusgames.com/blog/magic-tween/)

ブログの著者が開発する 「[Magic Tween](https://github.com/AnnulusGames/MagicTween)」について、他トゥイーンライブラリとのパフォーマンス比較や機能についての紹介、設計思想などについて解説しています。

### 3Dモデルを凍らせる表現

[[Unity]3Dモデルを凍らせる表現 - Qiita](https://qiita.com/flankids/items/5af1ddbe5ac3e83803fe)

3Dモデルが凍ったような表現をそれぞれのシェーダー表現に分解して、ステップバイステップで実装しながら解説しています。

### 3Dモデルのスキニングを理解する

[【Unity】3Dモデルのスキニングを理解する - Qiita](https://qiita.com/mkc1370/items/9c6bb83acf449a5b15f6)

UnityのSkinnedMeshRendererなどで行われている3Dモデルのスキニングについて、 LBS（Liner　Blend Skinning）に焦点を当ててそのアルゴリズムの概要からUnityでの実装について解説しています。

### Z-Fightingと計算誤差

[【Unity】Z-Fightingと計算誤差【RenderDoc】](https://zenn.dev/r_ngtm/articles/unity-z-fighting)

Z-Fightingを意図的に発生させたときの深度値をRenderDocで分析し、深度値の計算誤差について考察しています。

### Super-charging Object Selection & Searching in Unity

[Super-charging Object Selection & Searching in Unity | Medium](https://medium.com/@juris.savos/super-charging-object-selection-searching-in-unity-88cf9ea04581)

オブジェクトの検索を、 Object Picker から Unity Search に変更する方法や Unity Search の基本的な使い方から検索トークンを用いたアセットの絞り込み方法、 `SearchContext` 属性によるオブジェクト検索時のフィルターや見た目の変更方法についてそれぞれ紹介しています。

### Portal Effect with Stencil Decals (BIRP & URP)

[Portal Effect with Stencil Decals (BIRP & URP) | Patreon](https://www.patreon.com/posts/portal-effect-88069142)

デカールを使ったポータルエフェクトの貼り付けを、 `Graphics.RenderMesh` を用いて URP と BIRP（Built-In Render Pipeline）の両方に対応する方法について解説しています。

### 画像やプレハブのプレビュー画像を表示するPropertyAttribute

[【Unity】画像やプレハブのプレビュー画像を表示するPropertyAttribute【Editor拡張】](https://zenn.dev/gameshalico/articles/51217c728bfb67)

フィールドに対して属性をつけると、インスペクター上での画像プレビューを行ってくれる `PreviewAttribute` という独自の属性の実装について紹介しています。

### Unity Entitiesが正式リリースされたのでマルチプレイチュートリアルを弄ってみる（その2）

[Unity Entitiesが正式リリースされたのでマルチプレイチュートリアルを弄ってみる（その2） - Synamon’s Engineer blog](https://synamon.hatenablog.com/entry/2023/09/08/193555)

NetCode for Entitiesのサンプルプロジェクトの実装を改変しつつ、マルチプレイチュートリアルの実装について紹介しています。

この記事は連載記事となっており、前回はシンクライアントの実装（シミュレートされたダミーのクライアントを参加させる実装）について解説していました。詳細については下記リンクから確認できます。

[Unity Entitiesが正式リリースされたのでマルチプレイチュートリアルを弄ってみる - Synamon’s Engineer blog](https://synamon.hatenablog.com/entry/2023/08/11/200946)

### Unity 2023、バージョンルール変わるってよ。

[Unity 2023、バージョンルール変わるってよ。](https://zenn.dev/monry/articles/20230907-unity-2023-versioning)

Unity 2023におけるLTSとテックストリームのリリースバージョンの変更についてまとめています。

### フォルダ内にある全ての Scene, Prefab 内から条件に合う GameObject を一括で編集する関数

[【Unity】フォルダ内にある全ての Scene, Prefab 内から条件に合う GameObject を一括で編集する関数 - Qiita](https://qiita.com/Yamara/items/cac97c97afa8ba721f83)

特定のフォルダ内に存在する `GameObject` を一括で操作するエディター用メソッドについて、その実装と使い方を紹介しています。

### Unity IAP 課金実装メモ

[Unity IAP 課金実装メモ - Qiita](https://qiita.com/izugch4423/items/169db59aa53f3db9627c)

Unity IAPを用いた課金機能の実装について、Unity IAPのそれぞれのAPIやコールバックの利用方法を紹介しています。また、コンビニ払いの対応方法についても言及しています。

### Editor拡張を使ってAnimationCurveをプリセット化する

[Editor拡張を使ってAnimationCurveをプリセット化する - Qiita](https://qiita.com/haw2fregel/items/765fa7046111f3b76c09)

AnimationCurveのプリセットを管理する独自のエディターウィンドウ実装について、その実装を紹介しています。

### Photon Fusion for UnityのProjectilesサンプルを改造して弾ビルドゲームを作る

[Photon Fusion for UnityのProjectilesサンプルを改造して弾ビルドゲームを作る - Qiita](https://qiita.com/nimushiki/items/8f51d5e20038b2329b26)

Photon Fusion for Unity の提供するシューター系サンプルプロジェクト [Projectiles](https://doc.photonengine.com/ja-jp/fusion/current/technical-samples/fusion-projectiles-advanced) における弾の種類とその同期方法について解説と、このプロジェクトを改変して独自の武器を実装する方法について紹介しています。

### Unity公式のハッシュアルゴリズムxxHash3がCollectionsパッケージに入っているので使ってみる

[【Unity】Unity公式のハッシュアルゴリズムxxHash3がCollectionsパッケージに入っているので使ってみる - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2023/09/07/120000)

UnityのCollectionsパッケージに実装されている `xxHash3` を利用する方法について紹介しています。

### TextMesh Pro のテキストが変更されたのを検知したい時

[【ハルシオンブログ】TextMesh Pro のテキストが変更されたのを検知したい時 - ハルシオンシステムの気ままBlog](http://halcyonsystemblog.jp/blog-entry-1008.html)

TextMesh Proのテキストの値の変更を `TMPro_EventManager.TEXT_CHANGED_EVENT` コールバックによって検知する方法を紹介しています。

### VFXGraphで使用できる自作ブロック (custom spawner block)を作成する

[【Unity】VFXGraphで使用できる自作ブロック (custom spawner block)を作成する - 武0武/blog](https://bravememo.hatenablog.com/entry/2023/09/06/080000)

`VFXSpawnerCallbacks` を継承したVFXGraphの自作ブロックの作成方法について紹介しています。
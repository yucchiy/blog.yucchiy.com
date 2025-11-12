---
type: unity-weekly
title: >-
  プロファイリング、CA.unity #4、uRaymarchingのURP向け機能対応、UaaL XCFramework対応 - Unity Weekly
  #071
description: >-
  Unity Weekly #071。今週はUnity 2021 LTSにおけるプロファイリング、CA.unity
  #4の資料まとめ、uRaymarchingのURP向け機能対応、UaaL XCFramework対応などについて取り上げました。
pubDatetime: 2022-06-05T13:00:00.000Z
tags:
  - Unity Weekly
  - Unity
---

# Unity Officials

[Unity 2021 LTS におけるプロファイリング：何を、いつ、どのように行うか | Unity Blog](https://blog.unity.com/ja/technology/profiling-in-unity-2021-lts-what-when-and-how)

プロファイリングをどのタイミングで行うべきか、目標とするターゲットフレームレートに対してフレーム予算をどのように考えればよいか、プロジェクトでよくある処理負荷の傾向とボトルネックを割り出すためにプロファイラーをどのように利用するべきか、などについてまとめています。



この記事の内容をより詳細に確認したい人向けに、無料のPDFがこ[ちらから](https://resources.unity.com/games/ultimate-guide-to-profiling-unity-game)ダウンロードできます。

# CA.unity #4特集

2022/05/20に開催された[CA.unity #4](https://meetup.unity3d.jp/jp/events/1348)の登壇資料についてまとめます。

* NieR Re[in]carnationにおけるUnity アニメーション活用術
    * スライド: [NieR Re[in]carnationにおけるUnityアニメーション活用術 - Speaker Deck](https://speakerdeck.com/applibot/nier-re-in-carnationniokeruunityanimesiyonhuo-yong-shu)
    * 動画: [NieR Re[in]carnationにおけるUnity アニメーション活用術 | CA.Unity#4 - YouTube](https://www.youtube.com/watch?v=yvl1dgjYXug)
    * ブログ: [CA.Unity #4で「NieR Re[in]carnationにおけるアニメーション活用術」というタイトルで発表しました | Yucchiy's Note](https://blog.yucchiy.com/2022/06/caunity04-lt/)
* Overlaysで独自機能を作る方法
    * 動画: [Overlaysで独自機能を作る方法 | CA.Unity#4 - YouTube](https://www.youtube.com/watch?v=Zgvq3l6JyPs)
* Unity Package Managerで自作パッケージを配布する
    * スライド資料: [Unity Package Managerで自作パッケージを配布する方法 - Speaker Deck](https://speakerdeck.com/yunoda/unity-package-managerdezi-zuo-patukeziwopei-bu-surufang-fa)
    * 動画: [Unity Package Managerで自作パッケージを配布する | CA.Unity#4 - YouTube](https://www.youtube.com/watch?v=n88jrnNJrWA)
* Oculus Interaction SDK 概説
    * スライド: [Oculus Interaction SDK 概説 / xrdnk-caunity-LT4 - Speaker Deck](https://speakerdeck.com/xrdnk/xrdnk-caunity-lt4)
    * 動画: [Oculus Interaction SDK 概説 | CA.Unity#4 - YouTube](https://www.youtube.com/watch?v=8mS4c6th7R0)
    * ブログ: [Oculus Interaction SDK 概説｜発表資料【CA.unity #4】 - デニッキ！](https://xrdnk.hateblo.jp/entry/ca_unity_4)
* スマホで60fps維持しながら オープンワールドの草原を描画する
    * 動画: [スマホで60fps維持しながら オープンワールドの草原を描画する | CA.Unity#4 - YouTube](https://www.youtube.com/watch?v=Bux-bvTaGw8)
    * ソースコード: [Gamu2059/OpenWorldGrassDemo](https://github.com/Gamu2059/OpenWorldGrassDemo)
* URPでGPU負荷を画面上に出してみました
    * 動画: [URPでGPU負荷を画面上に出してみました | CA.Unity#4 - YouTube](https://www.youtube.com/watch?v=refgmc0sxxs&t=2s)
* IDOLY PRIDEにおけるAssetBundleビルドパイプラインについて
    * スライド: [IDOLY PRIDEにおけるAssetBundleビルドパイプラインについて - Speaker Deck](https://speakerdeck.com/qualiarts/idoly-prideniokeruassetbundlebirudopaipurainnituite)
    * 動画: [IDOLY PRIDEにおけるAssetBundleビルドパイプラインについて | CA.Unity#4 - YouTube](https://www.youtube.com/watch?v=8Jv7M6O0TL4)
# Articles

## uRaymarching の URP 向け機能更新をしてみた（Deferred / SSAO / Decal / Clear Coat）

[uRaymarching の URP 向け機能更新をしてみた（Deferred / SSAO / Decal / Clear Coat） - 凹みTips](https://tips.hecomi.com/entry/2022/05/31/003815)

ブログの著者が開発する [uRaymarching](https://github.com/hecomi/uRaymarching/releases/tag/v2.3.0) の、URP（Universal Render Pipeline）新機能（Deferred ・SSAO・Decal・Clear Coat）対応の技術的な側面を紹介しています。



SSAOやDecal対応のために必要な `DepthNormals` パスの追加、  `Depth Normals` を `Source` としたSSAOを有効にするためのパス追加、DecalやClear Coat対応のためのパス追加、Deferred対応などについてそれぞれ解説しています。

## Unity as a LibraryをXCFramework化してiOSの実機とシミュレーターの両方で動かせるようにする

[Unity as a LibraryをXCFramework化してiOSの実機とシミュレーターの両方で動かせるようにする - Qiita](https://qiita.com/mao_/items/9874c1efa280ed4bb399)

UnityのiOSビルドではデバイス用とシミュレーター用のプロジェクトを別々にしか生成できないため、別々に生成したプロジェクトからそれぞれ `.xcarchive` を生成し、２つの `.xcarchive` から `.xcframework` を生成することで、iOSの実機とシミュレーターの両方で動く Unity as a Library（UaaL）を生成する方法を紹介しています。



また、シミュレーター向けに吐き出したUaaLビルドで発生するであろうビルドエラーと回避策、各種処理のPostProcessBuildやシェルスクリプトによる自動化、 `[BUILD_LIBRARY_FOR_DISTRIBUTION]` オプションを有効にした状態で `.xcframework` を読み込んだ際のビルドエラーの回避方法についても触れています。

## 大量のSD制作を支える「IDOLY PRIDE」におけるSpine活用事例① 〜導入/方向制御編〜

[大量のSD制作を支える「IDOLY PRIDE」におけるSpine活用事例① 〜導入/方向制御編〜 | QualiArtsエンジニアブログ](https://technote.qualiarts.jp/article/35)

IDOLY PRIDEのSDキャラクターの実装について解説しています。



SDの実装で利用しているSpineと各種アセット、SDキャラクターが反対方向を向く際の違和感解消のための動的なスキン切り替え（パーツの切り替え）について説明しています。

## DOTS Snippets: Populating native collections in parallel

[DOTS Snippets: Populating native collections in parallel – COFFEE BRAIN GAMES](https://coffeebraingames.wordpress.com/2022/05/29/dots-snippets-populating-native-collections-in-parallel/)

DOTSのネイティブコレクション（記事中では `NativeArray` と `NativeList` 、 `NativeMultiHashMap` を扱っています）を Burst コンパイルを有効にしつつ、並列に処理するためのスニペットを紹介しています。

## uPalette 2.0で色を管理すると捗るという話

[【Unity】uPalette 2.0で色を管理すると捗るという話 - うどんてっくメモ](https://myudon.hatenablog.com/entry/2022/05/30/000905)

Unityプロジェクトの色設定を管理する「uPalette」というOSSについて、その使い方や用途の紹介と、2.0から追加された「色管理のIDに対応するenumの自動生成」と「Gradationやテキストスタイルの管理」、「一連の色設定をまとめるTheme」について解説しています。

## EditorWindowをモーダルやポップアップなどとして開く方法まとめ

[【Unity】【エディタ拡張】EditorWindowをモーダルやポップアップなどとして開く方法まとめ - LIGHT11](https://light11.hatenadiary.com/entry/2022/06/01/200914)

`EditorWindow` を開く際に利用できる `Show` 以外のメソッド（ `ShowModal` や `ShowPopup` など）について、メソッド一覧とそれらのメソッドで開くことによって、ウインドウの挙動がどう変化するのかについてまとめています。

## シェーダーでひびを入れる

[【Unity】シェーダーでひびを入れる［その2：ジオメトリシェーダー編］ - Qiita](https://qiita.com/masamin/items/250793b27a4f369511ac)

[【Unity】シェーダーでひびを入れる［その3：テッセレーションシェーダー編］ - Qiita](https://qiita.com/masamin/items/9646ab3a469b4ac6b87a)

テクスチャなどを用いずにシェーダーの処理のみで、モデルに「ひび」を入れるような表現を、ボロノイパターンをベースに実装する方法について紹介しています。



[前回](https://blog.yucchiy.com/project/unity-weekly/070/#%E3%82%B7%E3%82%A7%E3%83%BC%E3%83%80%E3%83%BC%E3%81%A7%E3%81%B2%E3%81%B3%E3%82%92%E5%85%A5%E3%82%8C%E3%82%8B%EF%BC%BB%E3%81%9D%E3%81%AE1%EF%BC%9A%E3%83%95%E3%83%A9%E3%82%B0%E3%83%A1%E3%83%B3%E3%83%88%E3%82%B7%E3%82%A7%E3%83%BC%E3%83%80%E3%83%BC%E7%B7%A8%EF%BC%BD)の記事ではフラグメントシェーダーを用いていましたが、ジオメトリシェーダーとテセレーションシェーダーを利用した実装と、それぞれの見た目について比較しています。


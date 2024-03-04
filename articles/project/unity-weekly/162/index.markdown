---
type: "unity-weekly"
title: "Unity Weekly 162"
description: "2024/03/04週のUnity Weeklyです。Weekly Publisher Sale、R3、Unityプログラミング・バイブル R6号、Apple Vision Pro Live Webinarなどについて取り上げています。"
tags: ["Unity Weekly", "Unity"]
date: "2024-03-04T00:00:01"

---

## Unity Officials

### DOTS Roundtable Q&A with Stunlock Studios & Sunblink Entertainment 

[DOTS Roundtable Q&A with Stunlock Studios & Sunblink Entertainment | Unity Blog](https://blog.unity.com/engine-platform/dots-webinar-roundtable-q-a)

昨年の12月に開催されたDOTSに関するラウンドテーブルのQ&Aの要約が公開されています。

### Get started developing for Apple Vision Pro

[Official - Get started developing for Apple Vision Pro - Live Webinar - Unity Forum](https://forum.unity.com/threads/get-started-developing-for-apple-vision-pro-live-webinar.1551941/)

2024/3/5 11:30（東部標準時）・8:30（東部標準時）に、Apple Vision Proのリアルタイム3Dアプリケーションの開発に関するウェビナーが開催されます。また、UnityのエキスパートによるライブQAも開催されます。

ウェビナーへの登録は[こちら](https://create.unity.com/visionOS-webinar-series-getting-started)から行うことができます。

### Weekly Publisher Sale - All Stars - 2024

[Weekly Publisher Sale - All Stars - 2024 - Asset Store](https://assetstore.unity.com/publisher-sale?aid=1011l8NVc&utm_campaign=unity_affiliate&utm_medium=affiliate&utm_source=partnerize-linkmaker)

Asset Store上でパブリッシャーセールが開催されています。

## Books

### Unityプログラミング・バイブル R6号

[Unityプログラミング・バイブル R6号 | 河合 宜文, 安原 祐二, 黒河 優介, 室星 亮太, 井本 大登, 岩本 拓也, 梁瀬 貞裕, 岡田 祥一, したかみ, mao, 打田 恭平, 森 哲哉, 吉谷 幹人, 悴田 悠太, 村上 雅裕, 中地 功貴, 相良 拓哉, 飯田 泰明 |本 | 通販 | Amazon](https://www.amazon.co.jp/dp/4862465900)

Unityプログラミング・バイブルR6号が、2024/02/29より販売開始しています。

## Articles

### C#用のReactive Extensionsの新しい現代的再実装

[neue cc - R3 - C#用のReactive Extensionsの新しい現代的再実装](https://neue.cc/2024/02/27_R3.html)

R3の作者による、R3を開発するまでに至ったRxの歴史からasync/await時代におけるRxの価値、R3によるRxの再構築の方針やその思想について詳細に解説しています。

また、R3開発に際しての `IScheduler` の再考と代替としての `FrameProvider` についての解説や、単一の値を返す `Observables` を排除のためのasync/awaitインテグレーションの紹介、名前付けのルールなどについても解説しています。

### R3でObservableをTaskに変換して扱う方法一覧

[【Unity開発者向け】R3でObservableをTaskに変換して扱う方法一覧 #Unity - Qiita](https://qiita.com/toRisouP/items/9fa0b8b40e01ec9bcbd4)

R3の `Observable` を `Task` へ変換する方法の紹介と、`Task` に変換する各種APIの挙動について解説しています。

### 2D Destructable Terrain in Unity using QuadTrees

[2D Destructable Terrain in Unity using QuadTrees | by Kajetan Radulski | Feb, 2024 | Medium](https://medium.com/@hesmeron/2d-destructible-terrain-in-unity-using-quadtrees-09e99a161b96)

QuadTreeを用いた最適化された、破壊可能な2D地形を実装する方法について、具体的な実装を交えつつ解説しています。

### R3のForEachAsyncが便利

[【Unity】R3のForEachAsyncが便利 #Unity - Qiita](https://qiita.com/toRisouP/items/a9c94ee008b1a68f79c7)

R3の `ForEachAsync` の概要と、これを用いた応用例として、 `UniRx`の `Repeat`・`Retry` の代替手段としての利用方法について紹介しています。

### Unity Editorから同じネットワーク上にいるデバイスのプレイヤーにデータを送る

[Unity Editorから同じネットワーク上にいるデバイスのプレイヤーにデータを送る - きゅぶろぐ](https://blog.kyubuns.dev/entry/2024/03/03/112910)

`UnityEditor.Networking.PlayerConnection.EditorConnection` を用いて、Console Window上などから接続できるデバイスに対してデータを送受信する方法を紹介しています。

またこの機能を用いて、リモートデバイス上で指定したメソッドを実行する [DebugCommandExecutor](https://github.com/kyubuns/DebugCommandExecutor) も合わせて紹介しています。

### llama.cppをUnityで扱う

[llama.cppをUnityで扱う - e.blog](https://edom18.hateblo.jp/entry/2024/03/02/135858)

llama.cppをUnityで扱うための、Swiftパッケージでのllama.cppのラップライブラリの作成から、iOS/macOS向けのビルド手順、このライブラリのUnity上での呼び出し方について解説しています。

### UniRxをR3に移行する

[[Unity] UniRxをR3に移行する](https://zenn.dev/tkada/articles/a96258e080056a)

UniRxからR3へ移行する際に必要なコードの書き換えを、各プロパティやメソッドごとに説明しています。

### ゲームプログラミングにおいて例外処理は必要か？

[#Unity ゲームプログラミングにおいて例外処理は必要か？ - 土屋つかさの技術ブログは今か無しか](https://someiyoshino.info/entry/2024/03/02/173756?utm_source=feed)

ゲームプログラミングにおける例外処理の必要性や、Unity上で主にnull参照による例外を避けるための手法をいくつか紹介しています。

### ゲームエンジンUnity中国版では、「仮想ジオメトリ」などグローバル版にない機能がある。miHoYoなど現地企業の協力・提携もあってか“独自進化”

[ゲームエンジンUnity中国版では、「仮想ジオメトリ」などグローバル版にない機能がある。miHoYoなど現地企業の協力・提携もあってか“独自進化” - AUTOMATON](https://automaton-media.com/articles/newsjp/20240301-284376/)

Unity Chinaによる独自のUnity実装について、ソーシャル上で話題になっていました。この記事では話題になった経緯やUnity Chinaの提供する独自のUnity実装に備わる機能や現地企業との協力などについて紹介しています。

### R3でダブルクリック検出処理を実装する

[#unity #Rx R3でダブルクリック検出処理を実装する - 土屋つかさの技術ブログは今か無しか](https://someiyoshino.info/entry/2024/02/27/221638)

R3を用いたuGUIなどのボタンに対してのダブルクリックの検知について、具体的なコード例を交えつつ紹介しています。

### RenderMeshIndirectを使用して多量描画の負荷を抑えてみた

[【Unity】RenderMeshIndirectを使用して多量描画の負荷を抑えてみた – 株式会社ロジカルビート](https://logicalbeat.jp/blog/15467/)

`RenderMeshIndirect` を用いて、同じオブジェクトの大量描画を高速に行う方法について紹介しています。

また、カリングの対応方法や `DrawMeshInstanced` との比較、インスタンスごとに異なるプロパティを設定する方法についても合わせて解説しています。

### GameCIを用いてUnityのCI 環境をGitHub Actions上に構築し、Test Frameworkを実行&結果をアップロードする方法

[【Unity】GameCIを用いてUnityのCI 環境をGitHub Actions上に構築し、Test Frameworkを実行&結果をアップロードする方法 - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2024/02/26/120000)

GitHub Actions上で、GameCIの提供するUnityイメージを用いてTest Frameworkを実行する方法を、実際の設定ファイルとあわせて紹介しています。

### カラオケアプリの隠れた機能を実現するために Unity開発基礎知識

[カラオケアプリの隠れた機能を実現するために Unity開発基礎知識｜カバー株式会社　公式note](https://note.cover-corp.com/n/n4101ccd1dd18)

Unityにおける生成と破棄で発生するコストについてと、ランタイムでのGC.Allocを抑える方法としてObjectPoolを使った最適化を紹介しています。

### AssemblyBuilder.Build で Assets フォルダ外のスクリプトから .dll を作成する

[【Unity】AssemblyBuilder.Build で Assets フォルダ外のスクリプトから .dll を作成する - コガネブログ](https://baba-s.hatenablog.com/entry/2024/03/04/083456)

`AssemblyBuilder` 用いて、Unityアセット外のスクリプトをコンパイルし、 `.dll` を作成する方法を紹介しています。

### Riderのコーディング規約をチーム内で共有する方法

[Riderのコーディング規約をチーム内で共有する方法 #Unity - Qiita](https://qiita.com/mkc1370/items/141c7b134678e8a847bf)

Riderの設定をチーム間で共有するための `DotSettings` と `.editorconfig` について、それぞれの設定ファイルの詳細からその使い分けについて紹介しています。

### VRM1.0について調べる＆アップグレード

[VRM1.0について調べる＆アップグレード - トマシープが学ぶ](https://bibinbaleo.hatenablog.com/entry/2024/02/26/160038)

UniVRMで、VRM 0.xからVRM 1.0へアップロードする手順や、VRM1.0における新機能について紹介しています。

## Repositories

### Arch.Unity

[AnnulusGames/Arch.Unity: Arch ECS integration for Unity.](https://github.com/AnnulusGames/Arch.Unity)

C#向けのECSフレームワークである[Arch](https://github.com/genaray/Arch)をUnityに統合するための機能を提供するライブラリです。
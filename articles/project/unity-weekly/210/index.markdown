---
type: "unity-weekly"
title: "Unity Weekly 210"
description: "2025/02/10週のUnity Weeklyです。Physicsの重心の調整、パストレーサー、Unity ECSなどについて取り上げています。"
tags: ["Unity Weekly", "Unity"]
date: "2025-02-10T00:00:01"
---

## Unity Officials

### UnityShortTips: 重心の調整

[Xユーザーのユニティ・テクノロジーズ・ジャパンさん: 「Unity の物理挙動でゲームを作るのは楽しいですよね！🎮✨ でも意外と見落とされがちなのが重心の調整です。これを変えるだけで動きがガラッと変わります🎯⚡ ぜひ試してみてください！ #UnityJapan #UnityShortTips https://t.co/S4kblKMlo1」 / X](https://x.com/unity_japan/status/1888784964071641305)

Physicsにおける重心位置の調整方法について紹介しています。

## Articles

### Unity6 + URP で動くパストレーサーを実装してみよう Part 2

[Unity6 + URP で動くパストレーサーを実装してみよう Part 2 - シリコンスタジオBlog ｜ CG・ゲームエンジン・機械学習・ビジュアライゼーション](https://blog.siliconstudio.co.jp/2025/02/2146/)

Unity 6 & URPのカスタムレンダーパス上に独自のパストレーサーを実装する連載記事で、本記事ではURP相当のライティングおよびレイトレーシングを用いた影を実装する方法について解説しています。

前回の記事は、下記より確認できます。

[Unity6 + URP で動くパストレーサーを実装してみよう Part 1 - シリコンスタジオBlog ｜ CG・ゲームエンジン・機械学習・ビジュアライゼーション](https://blog.siliconstudio.co.jp/2024/12/1923/)

### シェーダーでひびを入れる［その1：フラグメントシェーダー編］

[【Unity】シェーダーでひびを入れる［その1：フラグメントシェーダー編］](https://zenn.dev/lilytechlab/articles/518b5e29738f9b)

フラグメントシェーダーで、プロシージャルにオブジェクトにひびを描く方法について解説しています。

### Unity ECS v1.3.2を使ってゲームを作ってみました (3)―System編

[[Unity]Unity ECS v1.3.2を使ってゲームを作ってみました (3)―System編 │ Aiming 開発者ブログ](https://developer.aiming-inc.com/unity/unity-ecs-sample-game-3-system/)

Unity ECS を用いて簡単なゲームを制作する連載記事で、本記事ではSystemの実装方法について紹介しています。

また、過去の記事は下記より確認できます。

- [[Unity]Unity ECS v1.3.2を使ってゲームを作ってみました (1)―紹介編 │ Aiming 開発者ブログ](https://developer.aiming-inc.com/unity/unity-ecs-sample-game-1-introduction/)
- [[Unity]Unity ECS v1.3.2を使ってゲームを作ってみました (2)―Component編 │ Aiming 開発者ブログ](https://developer.aiming-inc.com/unity/unity-ecs-sample-game-2-component/)

### 古い C# 環境でも Task.WhenEach を使いたい

[古い C# 環境でも Task.WhenEach を使いたい #Unity - Qiita](https://qiita.com/sator_imaging/items/0facece38f6e1c03bd19)

C# 9.0で導入された `Task.WhenEach` を .NET Standard 2.1 上でも利用できるようにする方法を紹介しています。

### Unityで [UnityTest]と[TestCase, TestCaseSource] のテストケースを使う場合の一工夫

[Unityで [UnityTest]と[TestCase, TestCaseSource] のテストケースを使う場合の一工夫](https://zenn.dev/masaki_mori72/articles/86d95f93a6acbe)

`UnityTest` で非同期のテストを行う際の、`TestCase` や `TestCaseSource` によるテストケース作成の注意点についてまとめています。

### 特定のアセットの変更や移動、削除を禁止したり確認を出したり出来る AssetModificationProcessoｋr

[特定のアセットの変更や移動、削除を禁止したり確認を出したり出来る AssetModificationProcessor【Unity】【エディタ拡張】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/AssetModificationProcessor)

`AssetModificationProcessor` によってアセットの移動・変更前のイベントをフックすることで、特定のアセットの変更や削除に対して警告を出す方法について紹介しています。

### C# 8.0以降のswitch式で条件分岐をスッキリさせる

[C# 8.0以降のswitch式で条件分岐をスッキリさせる](https://zenn.dev/ryuryu_game/articles/7bf498798212c0)

戻り値を返すような条件分岐をswitch式を用いて実装する方法からパターンマッチの記述方法、switch式を利用するメリットについてまとめています。

### UnityEngine.Poolの理解 コレクションに対応するObjectPoolを使おう

[UnityEngine.Poolの理解 コレクションに対応するObjectPoolを使おう](https://zenn.dev/masaki_mori72/articles/2f641ad4d364bb)

Unity標準のオブジェクトプール実装である `UnityEngine.Pool` を用いた、文字列リストのプールとその破棄までの実装を紹介しています。

### Unity Sentis YOLOv8 Nano で物体検知

[Unity Sentis YOLOv8 Nano で物体検知](https://zenn.dev/bon_ninax/articles/253b1089ec4b96)

Unity Sentis上でYOLOv8 Nanoモデルを動かしてリアルタイムで物体検知を行う方法について紹介しています。

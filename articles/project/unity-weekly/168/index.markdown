---
type: "unity-weekly"
title: "Unity Weekly 168"
description: "2024/04/15週のUnity Weeklyです。マルチプレイヤーサービス、Unity Timeline/Playable API 完全に理解した 勉強会などについて取り上げています。"
tags: ["Unity Weekly", "Unity"]
date: "2024-04-15T00:00:01"

---

## Unity Officials

### Bring more players into your game with Unity Multiplayer Services 

[Bring more players into your game with Unity Multiplayer Services | Unity Blog](https://blog.unity.com/engine-platform/more-players-unity-multiplayer-services)

マルチプレイヤーゲームの実装において、Unityが提供する「Netcode for GameObjects」や「Unity Multiplay Hosting」を用いるメリットや、Unityのマルチプレイヤーゲーム開発における継続的な取り組みについて紹介しています。

### A look ahead on spatial computing with Owlchemy Labs

[A look ahead on spatial computing with Owlchemy Labs | Unity Blog](https://blog.unity.com/engine-platform/spatial-computing-with-owlchemy-labs)

UnityのシニアアドボケイトAntonia Forsterと、Owlchemy LabsのCEOwlのAndrew Eicheの対談記事で、空間コンピューティングの今後についての見解や、Apple Vision Proのための開発に関する実践的なヒントについて紹介しています。

### How Fika Productions set sail with their peer-to-peer multiplayer hit Ship of Fools

[How Fika Productions set sail with their peer-to-peer multiplayer hit Ship of Fools | Unity Blog](https://blog.unity.com/games/couch-co-op-multiplayer-ship-of-fools)

Fika Productionsの開発する「Ship of Fools」とおうゲームが、もともとローカルマルチによって提供する予定だったマルチプレイヤー機能をpeer-to-peerによるマルチプレイヤーゲームへ移行した経緯や、その際用いた「Netcode for GameObjects」の活用について紹介しています。

## Events

### Unity Timeline/Playable API 完全に理解した

[Unity Timeline/Playable API 完全に理解した 勉強会 - connpass](https://unity-fully-understood.connpass.com/event/315521/)

Unityユーザコミュニティ主導で開催される勉強会「Unity 〇〇完全に理解した勉強会」のTimeline/Playable API回が2024/05/10に開催されます。

## Articles

### LitMotion Guidebook

[LitMotion Guidebook](https://zenn.dev/qemel/books/cd6dc0aec66b61)

Tweenライブラリ[LitMotion](https://github.com/AnnulusGames/LitMotion)の導入方法から基本的な利用方法、UniTaskとの連携、実例を解説するガイドブック。

### ECSを使ってTextMesh Proの文字を大量に描画する

[ECSを使ってTextMesh Proの文字を大量に描画する - e.blog](https://edom18.hateblo.jp/entry/2024/04/13/105655)

TextMesh Proの文字もテクスチャアトラスのUV算出をECSで行い、`RenderMeshArray` を用いて描画することで、大量の文字を描画する方法について解説しています。

### UI操作をInput Systemのローカルマルチに対応させる

[【Unity】UI操作をInput Systemのローカルマルチに対応させる | ねこじゃらシティ](https://nekojara.city/unity-input-system-local-multiplayer-ui)

Input Systemでローカルマルチ（同端末上でのマルチプレイ）を実現するための `MultiplayerEventSystem` の使い方や、動的にプレイヤーが追加される場合の対処方法について解説しています。

### Hex Map 3.3.0

[Hex Map 3.3.0](https://catlikecoding.com/unity/hex-map/3-3-0/)

Catlike CodingのHex Mapのチュートリアルシリーズで、前回までの内容で扱っていた `HexCell` クラスを、Burstジョブで扱えるように `HexCellData` 構造体に変更する方法について紹介しています。

### SceneViewのカメラ位置をゲームで使いたい

[SceneViewのカメラ位置をゲームで使いたい #Unity - Qiita](https://qiita.com/MARQUE/items/c41af003b9300f05e781)

SceneView上のカメラとGameView上のカメラ位置を相互に変換する方法を紹介しています。

### Pokémon's Terastallize Effect in Shader Graph

[Pokémon's Terastallize Effect in Shader Graph](https://danielilett.com/2024-04-10-tut7-10-terastal-effect/)

ポケモンのテラスタルのような描画をShader Graphを用いて実装する方法について紹介しています。

### 自然言語によって動く2Dプラットフォーム

[[Claudia][Unity]自然言語によって動く2Dプラットフォーム](https://zenn.dev/hiropoko/articles/c40bb984bf3c9a)

Cysharpの提供するClaudeクライアント[Claudia](https://github.com/Cysharp/Claudia)のFunction Callingを用いて、ゲームを自然言語を用いて操作する実装について、その実現方法を紹介しています。

### UniTask.WhenAllは省略できて、配列かIEnumerableかTupleをawaitしてあげるだけでも同じ意味になる

[【Unity】UniTask.WhenAllは省略できて、配列かIEnumerableかTupleをawaitしてあげるだけでも同じ意味になる - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2024/04/08/120000)

`UniTask`の配列・`IEnumerable` ・`Tuple` に対しての拡張メソッドによって、これらを直接 `await` すると内部的に `UniTask.WhenAll` が呼び出される実装について紹介しています。

### Unityでカメラロールにアクセスしてみる

[Unityでカメラロールにアクセスしてみる](https://zenn.dev/matsuataru/articles/videokit-share)

NatMLの提供する[VideoKit](https://github.com/natmlx/videokit)に内包されるNatShareを用いて、OSの提供するカメラロールにアクセスし、Unityで作成した画像を保存する方法について紹介しています。

### 【UI Toolkit】マウス操作やジェスチャに関する処理を切り離して実装できるManipulatorの使い方

[【Unity】【UI Toolkit】マウス操作やジェスチャに関する処理を切り離して実装できるManipulatorの使い方 - LIGHT11](https://light11.hatenadiary.com/entry/2024/04/11/191057)

UI ToolkitのManipulatorによる入力操作のハンドリング方法や独自のManipulatorの実装方法についてそれぞれ紹介しています。

### AppUI上でロジックをいい感じに書けるUnityReduxMiddleware作ってみた

[【Unity】AppUI上でロジックをいい感じに書けるUnityReduxMiddleware作ってみた #C# - Qiita](https://qiita.com/garume/items/2a6678005574a721699a)

この記事の著者の開発する、AppUI上でRedux Middlewareのようなパターンを実現するライブラリ[Unity Redux Middleware](https://github.com/Garume/Unity-Redux-Middleware)について、その基本的な使い方を紹介しています。

### 「Enable Helper Bar」で便利なショートカットキーをエディタ下に表示できる

[「Enable Helper Bar」で便利なショートカットキーをエディタ下に表示できる - コガネブログ](https://baba-s.hatenablog.com/entry/2024/04/09/080000)

Unity 2023.1から追加された「Enable Helper Bar」について紹介しています。

## Repositories

### Asset Relations Viewer

[innogames/asset-relations-viewer: Plugin to display dependencies between assets, files, assetgroups, etc. in a tree based view within the Unity editor.](https://github.com/innogames/asset-relations-viewer)

アセット、ファイル、AddressableAssetGroupsなどの依存関係を、ツリーベースのビューに表示するエディター拡張
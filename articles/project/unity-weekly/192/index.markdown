---
type: "unity-weekly"
title: "Unity Weekly 192"
description: "2024/09/30週のUnity Weeklyです。Time Ghost、電子書籍日本語翻訳、VFX Graph、Muse Chatなどについて取り上げています。"
tags: ["Unity Weekly", "Unity"]
date: "2024-10-01T00:00:01"
---

## Unity Officials

### Time Ghost

[Time Ghost](https://unity.com/ja/demos/time-ghost)

Unity 6で追加された新しいデモ「Time Ghost」が公開されました。

### 電子書籍の日本語翻訳追加

- [アーティスト向けの 2D ゲームアート、アニメーション、ライティング | ユニティ・テクノロジーズ・ジャパン株式会社](https://unity3d.jp/game/game-ebooks/2d-game-art-animation-lighting-for-artists/)
- [C#スタイルガイドを作成する：拡張性のある、よりクリーンなコードを書く | ユニティ・テクノロジーズ・ジャパン株式会社](https://unity3d.jp/game/game-ebooks/create-code-c-sharp-style-guide-e-book/)
- [ゲームプログラミングパターンでプログラミングをレベルアップ | ユニティ・テクノロジーズ・ジャパン株式会社](https://unity3d.jp/game/game-ebooks/level-up-your-code-with-game-programming-patterns/)
- [HD レンダーパイプライン( HDRP )：ライティングを有効に活用するのに最も信頼性の高いガイド | ユニティ・テクノロジーズ・ジャパン株式会社](https://unity3d.jp/game/game-ebooks/the-definitive-guide-to-lighting-in-hdrp/)

下記の電子書籍が日本語翻訳されて公開されました。

- [2D game art, animation, and lighting for artists | Unity](https://unity.com/resources/2d-game-art-animation-lighting-for-artists-ebook)
- [Create a C# style guide: Write cleaner code that scales | Unity](https://unity.com/resources/create-code-c-sharp-style-guide-e-book)
- [Level up your programming with game programming patterns | Unity](https://unity.com/resources/level-up-your-code-with-game-programming-patterns)
- [The definitive guide to lighting in the HDRP | Unity](https://unity.com/resources/lighting-hdrp-guide)

### 【Unity 6】VFX Graph の新機能を解説！遂にウェブでも VFX が利用可能に！？

[【Unity 6】VFX Graph の新機能を解説！遂にウェブでも VFX が利用可能に！？ - YouTube](https://www.youtube.com/watch?v=eimJktG1IjQ)

Unity 6で追加されるVFX Graphの新機能としてWebGPU対応やCustom HLSL Code、Profiling機能の追加や、いままでの機能からの変更点について解説しています。

### レイキャストの問題を解決する５つのポイント！

[レイキャストの問題を解決する５つのポイント！ - YouTube](https://www.youtube.com/watch?v=xoP6cyZHygQ)

レイキャストを扱う上でハマりがちな問題とそれを解決する方法について5つ紹介しています。

### 15 Tips to Get Better Results with Unity Muse Chat

[15 Tips to Get Better Results with Unity Muse Chat | Unity](https://unity.com/ja/blog/muse-chat-prompt-attachment-tips)

Unity Muse Chatを活用するためのヒントを15個紹介しています。

## Articles

### Unity2021以前のURPのシェーダーで "RenderPipeline" のタグがバグってる件について

[Unity2021以前のURPのシェーダーで "RenderPipeline" のタグがバグってる件について - ネコのために鐘は鳴る](https://ikorin2.hatenablog.jp/entry/2024/09/15/020401)

Unity2021以前とUnity2022でのURPのシェーダーとして認識するタグの違いについて解説しています。

### Unity6で新規プロジェクトを作るとビルドがやけに長い時の対処法。ネタバレ：Forward+はシェーダーコンパイルが長いよ。

[Unity6で新規プロジェクトを作るとビルドがやけに長い時の対処法。ネタバレ：Forward+はシェーダーコンパイルが長いよ。 - きゅぶろぐ](https://blog.kyubuns.dev/entry/2024/09/23/145428)

Unity 6では新規プロジェクトでのデフォルトがForward+になったことによるビルド時間の増加の問題とその対処法について解説しています。

### 無理せず始めるUnityアセットバンドルビルドのJenkins→GitHub Actionsセルフホステッドランナー移行

[無理せず始めるUnityアセットバンドルビルドのJenkins→GitHub Actionsセルフホステッドランナー移行 | QualiArtsエンジニアブログ](https://technote.qualiarts.jp/article/80/)

UnityのアセットバンドルビルドをJenkinsからGitHub Actionsのself-hosted runnerに移行するために実装したシステムや管理画面、Jenkins運用の課題感などについて紹介しています。

### Mystery Dungeon Sketches in Unity URP

[Mystery Dungeon Sketches in Unity URP](https://danielilett.com/2024-09-27-tut7-15-mystery-dungeon-sketch-urp/)

「ポケモン不思議のダンジョン 救助隊DX」にでてくる背景のスケッチ風の表現をUnity URPで実装する方法について解説しています。

### Unity URPでのGraphics.RenderMeshIndirect 備忘録

[Unity URPでのGraphics.RenderMeshIndirect 備忘録 - したかみ ぶろぐ](https://shitakami.hateblo.jp/entry/2024/09/29/235022)

`Graphics.RenderMeshIndirect` を用いて、URP環境下で大量のメッシュを描画する方法について解説しています。

### ShaderGraphで色収差フィルターを実装

[ShaderGraphで色収差フィルターを実装【Unity、ShaderGraph、色収差、RGB Shift】 #Unity - Qiita](https://qiita.com/generosity_honda/items/5488b637c953a8619af8)

ShaderGraphを用いて色収差フィルターを実装する方法から、色収差をナチュラルに表現するための調整方法について紹介しています。

### 型の拡張メソッドについて

[【Unity】型の拡張メソッドについて](https://zenn.dev/tmb/articles/5d0a76028e0b1f)

UnityやC#の標準型に対して便利なメソッドを追加するための拡張メソッドの実装を紹介しています。

### UIの裏側をボケさせてUIを見やすくしたい時は、ポストプロセスを使うのが楽でエフェクトも色々追加しやすい

[UIの裏側をボケさせてUIを見やすくしたい時は、ポストプロセスを使うのが楽でエフェクトも色々追加しやすい【Unity】【uGUI】【ポストプロセス】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/PostProcessing_Blur)

Unity標準のポストプロセスを用いてUIの裏側をぼかす方法について紹介しています。
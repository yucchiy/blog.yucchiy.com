---
type: unity-weekly
title: Unity Weekly 228
description: >-
  2025/06/23週のUnity Weeklyです。Unity AI Live Stream、versionOS 2.3 support、Input
  Systemなどについて取り上げています。
pubDatetime: 2025-06-22T15:00:01.000Z
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Unity AI Live Stream: learn how to use your built-in AI assistant

[Unity AI Live Stream: learn how to use your built-in AI assistant - Unity Engine - Unity Discussions](https://discussions.unity.com/t/unity-ai-live-stream-learn-how-to-use-your-built-in-ai-assistant/1656788)

Unity AIのベータ版の使用方法を紹介するライブストリーム「[FASTER and EASIER creation using Unity AI - Unity 6.2 Beta How-To - YouTube](https://www.youtube.com/live/doj_TLKGMx8)」が、2025/06/25の午前1時（日本時間）より開催することをアナウンスしています。

### visionOS Release Notes 1.3.13 and 2.3.1

[visionOS Release Notes 1.3.13 and 2.3.1 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/visionos-release-notes-1-3-13-and-2-3-1/1650709)

visionOS 2.3 をサポートする PolySpatial 2.3.1 および 1.3.13 がリリースされたことをアナウンスしています。

## Articles

### Input Systemでキー割り当ての重複を調べる

[【Unity】Input Systemでキー割り当ての重複を調べる | ねこじゃらシティ](https://nekojara.city/unity-input-system-binding-overlap)

Input Systemで、キー割当に対して重複した操作が存在しないかを調べる方法として、`InputBinding` 間の重複のチェックから `InputAction` に対して指定した `InputBinding` の重複のチェック、`InputAction` 間での重複チェックを行う方法を順繰り紹介しています。
また、この実装の応用例として、キーコンフィグ画面での操作に対する重複チェックを行う実装も合わせて紹介しています。

### Unity向けのIncremental Source GeneratorをイチからつくってUnityで動かすまでの手順まとめ

[【Unity】【Rider】Unity向けのIncremental Source GeneratorをイチからつくってUnityで動かすまでの手順まとめ - LIGHT11](https://light11.hatenadiary.com/entry/2025/06/16/195338)

Unityプロジェクト向けにIncremental Source Generatorを導入する方法について、簡単なコード生成を元に実装方法を紹介しています。

### TextMeshPro から□□□を駆逐する

[TextMeshPro から□□□を駆逐する](https://zenn.dev/catsnipe/articles/923d4ec268d97f)

TextMeshProで日本語フォントを用意する方法から、絵文字表示の対応方法、表示できない文字を「□」として表示しないフォールバック対応についてそれぞれ紹介しています。

### Assets以下でファイル・フォルダに特定の名前をつけると非表示にすることができる

[【Unity】Assets以下でファイル・フォルダに特定の名前をつけると非表示にすることができる - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2025/06/16/120000)

`Assets` フォルダー以下で、Unityが管理の対象外とする（ `.meta` ファイルを生成しない）ファイルやフォルダーの命名規則について紹介しています。

###  Unityでasmdefを適用しつつC#10の機能を使う

[Unityでasmdefを適用しつつC#10の機能を使う](https://zenn.dev/s4k1/articles/bfbe2b67408ae6)

Unityで `csc.rsp` の `LangVersion`  C#10に設定することで、C#10の機能をUnity上で利用するための設定方法について紹介しています。

### Claude CodeをUnity×Riderに導入し、AIにプログラムを書いてもらう方法(Mac)

[Claude CodeをUnity×Riderに導入し、AIにプログラムを書いてもらう方法(Mac)【Unity】【JetBrains Rider】【AI】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/Claude_Code_Mac_Unity_Rider)

RiderにClaude Codeのプラグインを導入して、Unityプロジェクト上で、Rider上でClaude Codeを利用する方法について紹介しています。

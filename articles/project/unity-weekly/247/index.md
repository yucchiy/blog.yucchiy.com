---
type: unity-weekly
title: Unity Weekly 247
description: >-
  2025/11/10週のUnity Weeklyです。非同期プログラミング、パブリックロードマップ変更、Unity Awards 2025、Unity AI
  完全に理解した勉強会などを紹介しています。
pubDatetime: 2025-11-09T15:00:01.000Z
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Introducing Asynchronous Programming in Unity

[Introducing Asynchronous Programming in Unity - Technical Articles - Unity Discussions](https://discussions.unity.com/t/introducing-asynchronous-programming-in-unity/1693772)

Unityによるゲーム開発において非同期プログラミングが重要な理由から、コルーチンによる非同期プログラミングの実現方法について紹介しています。

また、コルーチンによる非同期プログラミングが不必要に複雑になってしまう問題と、その問題を解決するためのasync/ awaitベースの実装から、Unity6から使えるAwaitableについてそれぞれ説明しています。

### Interactive public roadmap changes

[Interactive public roadmap changes - Web Resources - Unity Discussions](https://discussions.unity.com/t/interactive-public-roadmap-changes/1693017)

現状公開されている[パブリックロードマップ](https://unity.com/roadmap)を、現段階で廃止し、Unite2025で発表されるハイレベルなロードマップに置き換えて、年2回更新のロードマップに更新することをアナウンスするディスカッションです。

また、ロードマップに関する各機能の詳細な説明については、今後もディスカッションにてアナウンスされることことです。

### ScriptableObject を使って Unity でモジュラーゲーム アーキテクチャを作成する (Unity 6 対応)

[ScriptableObject を使って Unity でモジュラーゲーム アーキテクチャを作成する (Unity 6 対応)](https://unity3d.jp/game/create-modular-game-architecture-scriptableobjects-unity-6/)

「[Create modular game architecture in Unity with ScriptableObjects (Unity 6 edition)](https://unity.com/resources/create-modular-game-architecture-scriptableobjects-unity-6)」の日本語訳が公開されています。

### The Unity Awards 2025 Nominees are here - Vote now on your Favorites

[The Unity Awards 2025 Nominees are here - Vote now on your Favorites - News & General Discussion - Unity Discussions](https://discussions.unity.com/t/the-unity-awards-2025-nominees-are-here-vote-now-on-your-favorites/1693983)

Unity Award 2025のノミネートが公開されています。

## Slides

### Unity AI 完全に理解した 勉強会

[Unity AI 完全に理解した 勉強会 - connpass](https://unity-fully-understood.connpass.com/event/372478/)

2025/11/07に、「Unity AI 完全に理解した 勉強会」が開催されました。

YouTubeでの当日の録画アーカイブや一部登壇者のスライド、有志によるレポートが公開されています。

- [Unity AI完全に理解した 勉強会 - YouTube](https://www.youtube.com/watch?v=Zx0Y3wHkLBE)
- [Agent Client Protocolを用いたAIエージェントのエディタ組み込み実践 | ドクセル](https://www.docswell.com/s/nuskey/KEYD11-unity-agent-client)
- [【勉強会レポ】: Unity AI 完全に理解した 勉強会 - Raspberlyのブログ](https://raspberly.hateblo.jp/entry/UnityAiComplete)

## Articles

### SRDebuggerとVContainerを用いて簡単で安全なデバッグ機能を実装する

[[Unity] SRDebuggerとVContainerを用いて簡単で安全なデバッグ機能を実装する](https://zenn.dev/happy_elements/articles/e85e6366905e85)

SRDebuggerの機能のデバックビルド時のみ有効化を、VContainerのLifeScopeに紐づけることで実現する方法を紹介しています。

### Sentis → Inference Engine → Sentis

[Sentis → Inference Engine → Sentis - 強火で進め](https://nakamura001.hatenablog.com/entry/2025/11/07/Sentis_%E2%86%92_Inference_Engine_%E2%86%92_Sentis)

Unity 6.2のタイミングでInference Engineと名前が変更されたSentisが、2.4で再びSentisに戻ったことを紹介しています。

## Repositories

### UnityAgentClient

[nuskey8/UnityAgentClient: Provides integration of any AI agent (Gemini CLI, Claude Code, Codex CLI, etc.) with the Unity editor using Agent Client Protocol](https://github.com/nuskey8/UnityAgentClient)

Agent Client Protocol(ACP)を用いて、任意のAIエージェントをUnityエディタ上で動かすためのエディター拡張。

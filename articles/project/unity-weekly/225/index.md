---
type: unity-weekly
title: Unity Weekly 225
description: >-
  2025/06/02週のUnity Weeklyです。Unity AI、Behaviour Package 1.0.10、Unite Seoul
  2025、Distributed Authorityなどについて取り上げています。
pubDatetime: 2025-06-01T15:00:01.000Z
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### An introduction to Unity AI

[An introduction to Unity AI - YouTube](https://www.youtube.com/watch?v=TGUjw7eezYs)

Unity 6.2で導入される予定のUnity AIについて、簡単なデモンストレーションによる紹介動画が公開されています。

### Behavior Package 1.0.10 Released! Changelog inside

[Behavior Package 1.0.10 Released! Changelog inside - Unity Engine - Unity Discussions](https://discussions.unity.com/t/behavior-package-1-0-10-released-changelog-inside/1648231)

Unity Behaviourの1.0.10のリリースをアナウンスするディスカッションです。

このリリースで追加された機能として、ランタイムシリアライズの改修やグラフツールのUndoの強化などのQoLに関する改善、StartOnEventノードにメッセージの処理を逐次行うキューモードの追加について紹介しています。

また、Unity Museの終了に伴い、これに関する機能が無効化もアナウンスされています。

### Unite Seoul 2025 Lecture Archive

- [How to choose Rendering Path and Global illumination in URP - YouTube](https://www.youtube.com/watch?v=v-u8tKEUWH4)
- [Unity 6 向け ShaderVariant ガイド (ウォームアップとストリッピング) - YouTube](https://www.youtube.com/watch?v=QcKsm2-L9Nw&t=4s) 
- [Unity Source Code Quick Guide - ダウンロードから内部デバッグまで - YouTube](https://www.youtube.com/watch?v=AJ8qmEaAg1w&t=5s)

Unite Seoul 2025で、Unity Technology Japanが登壇した動画のアーカイブが公開されています。

### 分散権限：クライアントホスト型ネットワーキングトポロジー

[分散権限：クライアントホスト型ネットワーキングトポロジー | Unity](https://unity.com/ja/products/distributed-authority)

Unity Multipleyerの分散権限（Distributed Authority）のネットワーキングトポロジーについて、この機能概要を紹介しています。


## Articles

### マテリアルから不要なパラメータを削除する

[マテリアルから不要なパラメータを削除する【Nova Shader】 - CORETECH ENGINEER BLOG](https://blog.sge-coretech.com/entry/2025/05/26/113157)

このブログを執筆するコアテクが開発する「[Nova Shader](https://github.com/CyberAgentGameEntertainment/NovaShader)」の2.6.0に追加された「不要なマテリアルパラメーターの削除ツール」を題材に、
マテリアルに不要なパラメーターが存在することの弊害から、これを取り除くためのテクニックを紹介しています。

### Unity 向けの Android 16KB ページサイズのサポートについて

[Unity 向けの Android 16KB ページサイズのサポートについて Now In REALITY Tech #139｜REALITY株式会社](https://note.com/reality_eng/n/n6280ed836577)

Android 15以上向けの16 KBページサイズのサポートについての概要の説明と、Unityアプリでこれに対応するための手順や、アプリが対応しているかどうかの確認手順について紹介しています。

### Vision Pro向けアプリをMeta Quest 3へ移植する際のTips

[Vision Pro向けアプリをMeta Quest 3へ移植する際のTips｜アップフロンティア株式会社](https://note.com/upfrontier/n/n54e8e1b7c3ca)

Vision Pro向けに開発されたアプリをMeta Quest 3に移植する際のTipsとして、UI操作（Interactor）の切り替えや負荷対策としてのモデル軽量化・Foveated Renderingの設定、描画のチラツキ対策、プレイエリア出入り時の判定方法についてそれぞれ紹介しています。

### Meta Quest向けアプリのストア公開Tips

[Meta Quest向けアプリのストア公開Tips｜アップフロンティア株式会社](https://note.com/upfrontier/n/n494ce4d71662)

このブログを執筆するアップフロンティア株式会社が開発するQuest向けアプリ「[トリらっくす](https://www.meta.com/ja-jp/experiences/relax-with-bird/8935630513230985/)」を題材に、
このアプリをMeta Questに公開する際のPlayer Settingsや`AndroidManifest.xml`の設定、ローカライズのための `res` フォルダーの配置、keystoreの設定などについて紹介しています。

### Anjinでシナリオ終了前N秒の動画を保存するレポーターの実装サンプル（Instant Replay for Unityパッケージを利用）

[Anjinでシナリオ終了前N秒の動画を保存するレポーターの実装サンプル（Instant Replay for Unityパッケージを利用） - やらなイカ？](https://www.nowsprinting.com/entry/2025/05/31/090000)

株式会社DeNAが公開する「[Anjin](https://github.com/DeNA/Anjin)」の `Reporter` に、株式会社サイバーエージェントが開発する[Instant Replay for Unity](https://github.com/CyberAgentGameEntertainment/InstantReplay) を組み込んで、Anjinのシナリオが終了するN秒前の動画を保存する機能の実現方法を紹介しています。

### Unity製アプリを作る時のアーキテクチャをどこまで区切るか、あるいはレイヤードアーキテクチャの一指針

[Unity製アプリを作る時のアーキテクチャをどこまで区切るか、あるいはレイヤードアーキテクチャの一指針](https://zenn.dev/izm/articles/2478583453b235)

Unity製アプリのアーキテクチャについて、「多層設計アプローチ」と「Service+DIパターン」の2つのアプローチについてのメリット・デメリットから、「多層設計アプローチ」における `UseCase` や `Presenter` などの扱いについて解説しています。

### やっと来た！まともにUnity+Cursor環境をReSharperを使って構築する

[やっと来た！まともにUnity+Cursor環境をReSharperを使って構築する](https://zenn.dev/mogami/articles/cursor-resharper-unity)

Cursor上にReSharperを導入し、Unityの外部エディターとして設定する方法を紹介しています。


### Shader Variant Loading Settingsに関して

[Shader Variant Loading Settingsに関して](https://zenn.dev/fumo/articles/6f534aa88dbc59)

Unityアプリにおけるシェーダーデータの読み込みの仕組みの説明から、シェーダーのメモリ使用量を抑えるための「Shader Variant Loading Settings」の設定について紹介しています。

### Firebase AI Logic for Unity発表！XR体験にGeminiを

[Firebase AI Logic for Unity発表！XR体験にGeminiを](https://zenn.dev/hololab/articles/firebase-ai-logic-unity-androidxr)

Firebase AI Logic for Unityについてその概要から、SDKの実用例としてgemini-2.0-flashを用いたテキストベース会話やマルチモーダルによる画像を入力としたテキスト生成、画像生成をUnity上で実装する方法について紹介しています。

### セーブデータを難読化する

[セーブデータを難読化する｜西山 信行](https://note.com/5mingame2/n/n7625b38270ea)

Unityアプリで、セーブデータを難読化するための方法について紹介しています。

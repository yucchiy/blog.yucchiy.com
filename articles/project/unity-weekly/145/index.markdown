---
type: "unity-weekly"
title: "Unity Weekly 145"
description: "2023/10/30週のUnity Weeklyです。UI Toolkit、CoreCLR、Unity Community Solutions、Unity Test Frameworkなどについて取り上げています。"
tags: ["Unity Weekly","Unity"]
date: "2023-10-30T00:00:01"

---

## Unity Officials

### Porting Unity to CoreCLR

[Porting Unity to CoreCLR | Unity Blog](https://blog.unity.com/engine-platform/porting-unity-to-coreclr)

UnityのCoreCLR移植における、ネイティブコードとの連携のためのガベージコレクションの修正について紹介しています。

### Introducing Community Solutions to manage toxicity in gaming

[Introducing Community Solutions to manage toxicity in gaming | Unity Blog](https://blog.unity.com/games/toxicity-gaming-escalating-solutions-for-safe-engaged-communities)

ボイスチャットやAIによる毒性検出、モデレーションやフレンド管理、リーダーボード等などを提供するUnity Community Solutionsについて紹介しています。

### 使ってみようUI Toolkit - 後半

[使ってみようUI Toolkit - 後半 - YouTube](https://www.youtube.com/watch?v=RxWqTZDjkRI)

[前半](https://www.youtube.com/watch?v=R4xd7FGNYqs)で作成したカード型のUIにアニメーションを設定する方法や、複数のUIを配置する際の設定、UIをプログラムから配置する方法についてそれぞれ解説しています。

また、このチュートリアルで扱ったサンプルは、[UIToolkitExamples](https://github.com/ikewada/UIToolkitExamples)として公開されています。

## Articles

### Unity Test Frameworkで利用できるカスタム属性の実装方法

[Unity Test Frameworkで利用できるカスタム属性の実装方法 - やらなイカ？](https://www.nowsprinting.com/entry/2023/10/27/063703)

Unity Test Frameworkでにおけるカスタム属性の実装方法と、いくつかのTipsを紹介しています。

### Unity Package Manager(UPM)が認識する自作Packageを作成し、git経由でインストールできるまで整える

[【Unity】Unity Package Manager(UPM)が認識する自作Packageを作成し、git経由でインストールできるまで整える - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2023/10/23/120000)

git URL経由で自作したパッケージをUnity Package Managerに配布する方法を紹介しています。

### シンプルなDIコンテナを自作してみた

[【Unity】シンプルなDIコンテナを自作してみた #C# - Qiita](https://qiita.com/ogix/items/0e6e98a058a608cf712c)

簡単なDIコンテナのフルスクラッチを題材に、DIコンテナの内部実装について紹介しています。

### タグをインスペクターから選択可能にする

[【Unity】タグをインスペクターから選択可能にする | ねこじゃらシティ](https://nekojara.city/unity-tag-inspector)

Unity標準のタグをインスペクターから指定するための`EditorGUI.TagField`の紹介と、シリアライズ可能なフィールドに対して、OdinInspectorのようにカスタム属性を指定することでインスペクター上でタグ選択のGUIを表示するような実装について解説しています。

### 空のGameObjectを可視化する【Gizmos】

[【Unity】空のGameObjectを可視化する【Gizmos】 - Raspberlyのブログ](https://raspberly.hateblo.jp/entry/UnitySceneGizmos)

Gizmosを用いて、空のゲームオブジェクトをプリミティブ（SphereやCubeなど）やテキストで可視化する方法について紹介しています。

### uLipSyncで事前録音した音声からTimelineでVRMモデルを口パク

[uLipSyncで事前録音した音声からTimelineでVRMモデルを口パク - トマシープが学ぶ](https://bibinbaleo.hatenablog.com/entry/2023/10/23/173210)

uLipSyncを用いて、事前に録音した音声からVRMモデルを口パクする方法を紹介しています。

### MRTK3 x Meta Quest3 でパススルー

[MRTK3 x Meta Quest3 でパススルー](https://zenn.dev/pinboke/articles/mrtk3-quest3-passthrough)

Meta Quest3でパススルーを実現するためのMKTR3の導入から設定を紹介しています。

### CI で ReShaper command line tools での Unity の静的コード検査

[CI で ReShaper command line tools での Unity の静的コード検査](https://zenn.dev/masakura/articles/60e502a275e9c3)

ReSharperのコマンドラインツールをCI上で実行するための各種導入手順や、GitLab Code Qualityによる静的解析の実行方法について紹介しています。

### Unityで投影テクスチャマッピングシャドウ

[Unityで投影テクスチャマッピングシャドウ - 3Dゲーム開発備忘録](https://daiki-eguchi.hatenablog.com/entry/2023/10/25/192655)

投影テクスチャマッピングシャドウについてその原理からUnity実装を紹介しています。
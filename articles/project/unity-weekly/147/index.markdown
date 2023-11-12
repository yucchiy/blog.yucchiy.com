---
type: "unity-weekly"
title: "Unity Weekly 147"
description: "2023/11/13週のUnity Weeklyです。Unite 2023、レベルデザイン ebook、Unityエディターソフトウェア規約更新、MSAAなどについて取り上げています。"
tags: ["Unity Weekly","Unity"]
date: "2023-11-13T00:00:01"

---

## Unity Officials

### Unite 2023

[Unite - Home](https://reg.unite2023ams.com/flow/unity/unite23ams/landing/page/Home)

11/15と11/16に、アムステルダムでUnite 2023が開催されます。キーノートは[オンライン配信が予定されています。](https://www.youtube.com/watch?v=8ZIdejTiXAE)。

### Official - Unite 2023 - Ask the Experts Online

[Official - Unite 2023 - Ask the Experts Online - Unity Forum](https://forum.unity.com/threads/unite-2023-ask-the-experts-online.1513925/)

2023/11/16の13:00 ~ 21:00（中央ヨーロッパ標準時）に[Unity Discord](https://discord.com/invite/unity)と[Unity Disscussions](https://discussions.unity.com/)上で「Ask the Experts」が開催されます。

Discord上では、11/15の13:00（中央ヨーロッパ標準時）にフォーラムチャンネルがオープンします。Unity Disscussionでは11/15からイベント終了までQ&Aカテゴリーに投稿された質問が、「Ask the Experts」の一部として優先的に表示されます。「Ask the Experts」チームが11/16 13:00から回答を開始します。

質問のルール等は[フォーラム](https://forum.unity.com/threads/unite-2023-ask-the-experts-online.1513925/)を確認ください。

### Unite 2023 APAC On-Air

Unite 2023が日本語で無料ライブ配信される「Unite 2023 APAC On-Air」が12/1（金）午前10時から予定されています。
[事前登録を開始しており](https://create.unity.com/unite-2023-apac-on-air-ja)、登録すると[イベント当日に招待メールが送られる](https://twitter.com/unity_japan/status/1721818052998918148)とのことです。

### Unity エディターソフトウェア規約の更新

[Unity エディターソフトウェア規約の更新 | Unity Blog](https://blog.unity.com/ja/news/unity-editor-software-terms-update)

先日のRuntime Feeポリシーの変更の公表に際して、Unityエディターのソフトウェア規約の内容が2023/11/06付けで更新されました。

今後に規約が変更された場合に、ユーザーが利用しているUnityのバージョンの規約を維持できるように、この更新が[GitHubレポジトリ](https://github.com/Unity-Technologies/TermsOfService)ならび[unity.com/legal](https://unity.com/ja/legal/editor-terms-of-service/software)に追加されました。

また、Unityの次の主要なリリースを利用しない限り、Runtime Feeが適用されない旨が明記されました。

### Unity’s first game level design e-book is here

[Unity’s first game level design e-book is here | Unity Blog](https://blog.unity.com/games/e-book-for-level-designers)

レベルデザイナー向けの電子書籍「Introdution to game level design」がリリースされました。

この書籍は、ゲーム開発におけるレベルデザインについて、レベルデザイナーのためのUnity入門、Unityのレベルデザインツールの3つのパートから構成されます。

書籍は[こちらのページ下部の「Introdution to game level desgin.pdf」リンク](https://discussions.unity.com/t/our-first-ever-e-book-for-level-designers-is-here/310631)からダウンロードできます。

### 6 resources to help you master gamedev fundamentals

[6 resources to help you master gamedev fundamentals | Unity Blog](https://blog.unity.com/games/6-fundamental-resources-to-help-you-master-unity-basics)

UnityでAR・VRアプリケーションを開発するときに参考になる[Unity Learn](https://learn.unity.com/)のコースを6つ紹介しています。

### ジャギーを滑らかに！ MSAA の原理と使い方

[ジャギーを滑らかに！ MSAA の原理と使い方 【Unity】 - YouTube](https://www.youtube.com/watch?v=htzYbOZ-an0&t=88s)

MSAAの原理から利用方法、他のアンチエイジングと比べた特徴、MSAAの弱点、デバイスごとの挙動の違い、モバイルGPUでのMSAAの最適化などについてそれぞれ解説しています。

## Articles

### Why Cities: Skylines 2 performs poorly

[Why Cities: Skylines 2 performs poorly - paavohtl's blog](https://blog.paavo.me/cities-skylines-2-performance/)

Cities: Skylines 2のパフォーマンス問題について、描画パフォーマンスをRenderDocを用いて分析しています。

### Volumetric Fogの実装概要を知る

[Volumetric Fogの実装概要を知る](https://zenn.dev/inpro/articles/73bc866b0d5d15)

Volumetric Fogを実装するための概要から、一部実装についての擬似コードを紹介しています。

### どれだけ速く振ってもボールをすり抜けないVRラケットの実装

[【Unity】どれだけ速く振ってもボールをすり抜けないVRラケットの実装](https://zenn.dev/wappaboy/articles/unity-dont-slip-through-racket)

VR上で（卓球の）ラケットを実装する際に、ラケットを振る速度に応じてラケットのコリジョン形状を変更することでボールがすり抜けにくくする方法について紹介しています。

### PackageManager.Clientを利用してC#スクリプトを通してPackageManagerを操作する

[【Unity】PackageManager.Clientを利用してC#スクリプトを通してPackageManagerを操作する - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2023/11/10/120000)

Unity Package Managerをスクリプトから操作する方法について紹介しています。

### HDRPでカスタムShader -影を落とす・影を受け取る

[HDRPでカスタムShader -影を落とす・影を受け取る- - 3Dゲーム開発備忘録](https://daiki-eguchi.hatenablog.com/entry/2023/11/07/130545)

HDRP上でのカスタムシェーダーで影を落とす・受け取る方法について解説しています。

### UI Toolkitの要素内でIMGUIを使えるIMGUI Containerの使い方

[【Unity】UI Toolkitの要素内でIMGUIを使えるIMGUI Containerの使い方 - LIGHT11](https://light11.hatenadiary.com/entry/2023/11/08/190151)

UI Toolkit上にIMGUIの要素を描画する方法について紹介しています。

## Repositories

### M-x

MenuItemの代替を目指すコマンドベースの補完フレームワーク。

[jcs090218/Unity.Mx: M-x for Unity](https://github.com/jcs090218/Unity.Mx)

### FernRP

スタイライズドレンダリングのURPベースのレンダリングパイプライン拡張。

[FernRP/FernRP](https://github.com/FernRP/FernRP)
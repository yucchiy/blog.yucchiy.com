---
type: unity-weekly
title: 'Better build times and iteration speed for Quest - Unity Weekly #060'
description: ''
pubDatetime: 2022-03-22T00:00:00.000Z
tags:
  - Unity
  - Unity Weekly
---

# Unity Official

## Quest 向けのビルドタイムとイテレーション速度の向上

[Quest 向けのビルドタイムとイテレーション速度の向上 | Unity Blog](https://blog.unity.com/ja/technology/better-build-times-and-iteration-speed-for-quest)

Questの開発において、実機アプリのビルド時間を短縮してイテレーション速度を向上するための方法として、「Unityバージョンごとのビルド速度の比較」や「Oculus Link」、「スクリプトのみパッチ」、「Addressables」を紹介しています。

Unityのバージョンを最新に保つことで、Unity 2019 から2020で33% ～ 42%、Unity 2020から2021で8% ～ 16%ほどビルド時間を短縮でき、さらにスクリプトのみパッチオプションを用いることでapkビルドをスクリプトのみの更新に留め、ビルド時間を45%ほど短縮できることを紹介しています。

Addressablesを用いることでプロジェクト内のコードとアセットを分離することを容易にし、アセットのリモート読み込みを可能にします。アセット更新のみの場合はアセットビルドのみに留めることでアプリビルドを省き、大幅なビルド時間の短縮を行えます。

また、複数シーンで同マテリアルを利用する際にビルド時間がかかるエッジケースやAddressablesの接続先をローカルとリモートで切り替える方法、OVR Quick Scene Previewについても言及しています。

## Burst 1.7 でゲームの品質を向上させる

[Burst 1.7 でゲームの品質を向上させる | Unity Blog](https://blog.unity.com/ja/technology/raising-your-game-with-burst-17)

この記事では、Burst 1.7のアップデートについて紹介しています。

Burst 1.7では主にイテレーション時間の大幅な短縮とBurst Inspectorの改善（「Show Branch Flow」とインスペクター内の選択中コードのコピー）が行われました。イテレーション時間改善については具体的な取り組みとパフォーマンスの計測結果を、Burst Inspecrtorについてはコンパイル済みのBurstコードの分岐フローをわかりやすく可視化する「Show Branch Flow」をスクリーンショット付きで解説しています。

また[直接呼び出し](https://docs.unity3d.com/Packages/com.unity.burst@1.7/manual/docs/CSharpLanguageSupport_Lang.html#directly-calling-burst-compiled-code)のパフォーマンス改善や、その他の改善項目として「Arm Neon vst1*  API への 完全対応」や「Burst を使ったコード内で System.Span と System.ReadOnlySpanのサポート」などについても言及しています。

## Experimental Entities 0.50 is Available

[Unity - Experimental Entities 0.50 is Available - Unity Forum](https://forum.unity.com/threads/experimental-entities-0-50-is-available.1253394/)

ECS（Entity Component System）パッケージの 0.50の実験パッケージがリリースされました。このパッケージはUnity2020.3.30以降を利用する必要があります。インストールガイドは[こちら](https://docs.unity3d.com/Packages/com.unity.entities@0.50/manual/install_setup.html)から、Entitiesパッケージの0.17から0.50へのアップグレードは[こちら](https://docs.unity3d.com/Packages/com.unity.entities@0.50/manual/upgrade-guide.html)のドキュメントで確認できます。

このリリースの一部として下記パッケージがUnity 2020 LTSで一緒にテストされています。Changelogは下記から確認できます。

- [com.unity.entities](https://docs.unity3d.com/Packages/com.unity.entities@0.50/changelog/CHANGELOG.html)
- [com.unity.rendering.hybrid](https://docs.unity3d.com/Packages/com.unity.rendering.hybrid@0.50/changelog/CHANGELOG.html)
- [com.unity.netcode](https://docs.unity3d.com/Packages/com.unity.netcode@0.50/changelog/CHANGELOG.html)
- [com.unity.physics](https://docs.unity3d.com/Packages/com.unity.physics@0.50/changelog/CHANGELOG.html)
- [com.havok.physics](https://docs.unity3d.com/Packages/com.havok.physics@0.50/changelog/CHANGELOG.html)

このアップデートの主要な機能として、下記が追加されています。

- Entity Authoring
    - Entity Debuggerウインドウの一部機能刷新
    - ２つのEntityプロファイラーモジュールの追加
    - Entities Journalingを用いたECSイベントの記録や調査、データのライフサイクルの把握
- System and Entities API Inprovements
    - `SystemBase` と `Entities.WithFilter(NativeArray<Entity> entities)` 、 `IJobEntity`
- Improved Debugging
    - ECSが生成するC#コードの可視化、主要なエンティティにデバッガプロキシが追加されてIDEでのデバッグが容易に、スタンドアロンビルドでのデバッグ情報の追加
- Netcode Updates、Rendering Updates、Unity Physics and Havok Updates

## DOTS Development Status And Next Milestones - March 2022

[Unity - DOTS Development Status And Next Milestones - March 2022 - Unity Forum](https://forum.unity.com/threads/dots-development-status-and-next-milestones-march-2022.1253355/)

Entities パッケージ 0.50のリリースとあわせて、Entities 1.0に向けたマイルストーンが公開されました。

1.0のリリースに向けて、2020 LTSとの互換性の達成、2021 LTSとの互換性の実現、2022 Tech Streamとの互換性の到達を目標としている点を触れています。

またEntities 1.0では、既存のすべての機能を置き換えるのではなく、GameObjectsとの互換性を持ちつつことも言及しています。GameObjectシステムとECSベースのシステムを効率的にブリッジするためのAPIとオーサリングワークフローを提供することで、ゲーム構築に柔軟性をもたせるようにするようです。

マイルストーンの詳細については[こちらのリンク](https://unity.com/roadmap/unity-platform/dots)から確認できます。

## Hub 3.1.0 node-ipc incident

[Unity - Hub 3.1.0 node-ipc incident - Unity Forum](https://forum.unity.com/threads/hub-3-1-0-node-ipc-incident.1254597/)

Unity Hub 3.1.0のリリースに含まれていたnode-ipcライブラリの障害とその障害による影響のレポートと、Unity Hubが将来の問題を防ぐための内部QAプロセスの改善について説明しています。

## Unity ゲーミングレポート 2022：ゲーム業界の今を知る 5 つの知見

[Unity ゲーミングレポート 2022：ゲーム業界の今を知る 5 つの知見 | Unity Blog](https://blog.unity.com/ja/games/unity-gaming-report-2022-five-insights-on-the-gaming-industry-today)

この記事では2021年のトレンドを調査し、2022年以降のゲーム業界の変化についての予測を行った「Unity ゲーミングレポート 2022」について紹介しています。

このレポートでは、2021年にUnityで制作されたゲーム数やUnityを利用するクリエイターの増加数、ゲーム収益（ゲーム内課金・広告）の急増、カジュアルゲームの収益率、マルチプラットフォームの普及などを取り扱っています。

全文は[こちら](https://create.unity.com/gaming-report-2022)で確認できます。

## モバイルマルチプレイヤー入門：理想的な技術スタック

[モバイルマルチプレイヤー入門：理想的な技術スタック | Unity Blog](https://blog.unity.com/ja/games/mobile-multiplayer-101-your-ideal-tech-stack)

この記事では、この数十年間のマルチプレイヤーゲームのニーズの変化と、Unityが考えるモバイル向けのマルチプレイヤーゲームに技術スタックの３つの柱である「Creation」・「Connection」・「Communication」とそれぞれのソリューションとしてNetcodeやゲーム性にあったマッチメイクの仕組みなどを紹介しています。

また、「2021年末のマルチプレイヤーゲームについて必要な機能に関する調査」から、マルチプレイヤーゲームのプレイヤー体験を向上させるために検討すべき項目や、マルチプレイヤーゲームを制作する上で開発を手助けするUnity Gaming Serviceのソリューションについても言及しています。

## Game Backend を詳しく見てみよう

[Game Backend を詳しく見てみよう | Unity Blog](https://blog.unity.com/ja/games/a-closer-look-at-game-backend)

この記事では、Unity Gaming Serviceの提供するサービスのうちゲームの[バックエンド](https://unity.com/ja/solutions/game-backend)にカテゴリされるサービスを紹介しています。

アカウント認証サービス[Authentication](https://unity.com/ja/products/authentication)やプレイヤーデータ保存サービス[Cloud Save](https://unity.com/ja/products/cloud-save)、ゲーム内の決済サービス[Economy](https://unity.com/ja/products/economy)、サーバレスなゲームロジックサービス[Cloud Code](https://unity.com/ja/products/cloud-code)について、それぞれの概要やこのサービスが解決する課題、仕組みについてそれぞれ解説しています。

## Unity の Game Backend ツールの 9 つのユースケース

[Unity の Game Backend ツールの 9 つのユースケース | Unity Blog](https://blog.unity.com/ja/games/nine-use-cases-for-unitys-game-backend-tools)

この記事では、[Authentication](https://unity.com/ja/products/authentication)、[Cloud Save](https://unity.com/ja/products/cloud-save)、[Economy](https://unity.com/ja/products/economy)、[Cloud Code](https://unity.com/ja/products/cloud-code)のユースケースをゲーム内でよくある事例を９つとりあげて、これらのサービスをどのように組み合わせることで解決できるかを解説しています。

# Articles

## Verlet Rope in Games

[Verlet Rope in Games](https://toqoz.fyi/game-rope.html)

位置ベースのベルレ法を用いて2D空間上でのロープの物理挙動を実装する方法を紹介しています。

ロープのノード表現と、位置ベースのベルレ法によるロープノード移動のシミュレーションとロープの長さを維持するためのコンストレイントの反復適用、衝突の実装、LineRendererを用いない独自のロープレンダリングについてそれぞれ解説しています。

## VR でも利用できる URP Renderer Feature を用いたフェード処理の実装

[VR でも利用できる URP Renderer Feature を用いたフェード処理の実装 - デニッキ！](https://xrdnk.hateblo.jp/entry/urp_renderer_feature_fade)

Universal Render Pipeline（URP）のRenderer Featureをもちいて、画面全体のフェード処理を実装する方法について紹介しています。

`ScriptableRenderPass` と `ScriptableRendererFeature` を継承した独自のRender Featureの追加方法、実装したRender Featureの設定方法、ポストプロセス後の画面全体のバッファのハンドリング方法とフェードの実装方法などについて紹介しています。

## How to Make Flappy Bird with Online Leaderboards

[How to Make Flappy Bird with Online Leaderboards | LootLocker - build, ship & run your best games](https://www.lootlocker.io/blog/post/how-to-make-flappy-bird-with-online-leaderboards/)

Flappy Birdをフルスクラッチで実装し、[lootlocker](https://www.lootlocker.io/)というBackend as a Service（BaaS）を用いてリーダーボードを実装する方法について紹介しています。

## Creating Reusable Characters With Blender and Unity

[Creating Reusable Characters With Blender and Unity | raywenderlich.com](https://www.raywenderlich.com/31539225-creating-reusable-characters-with-blender-and-unity)

この記事では、Blenderを用いてUnityのHumanoid Avatarと互換性のあるモデルを作成することでアニメーションを共有する方法について紹介しています。

Blenderを用いてUnityのHumanoidと互換性のあるリギングを行う方法と、fbxとしてエクスポートしたモデルをUnityに取り込み、Humanoid Avatarとして設定する方法を紹介しています。

## そろそろShaderをやるパート62　アウトラインの表現

[そろそろShaderをやるパート62　アウトラインの表現](https://zenn.dev/kento_o/articles/77cfafc2915ccc)

モデルを２パス目で頂点を押し出して描画することでアウトラインを表現する方法についてその実装方法を紹介しています。

押し出しの方法についても、「法線方向」と「各頂点のローカル座標方向」の２つの方法で比較しています。

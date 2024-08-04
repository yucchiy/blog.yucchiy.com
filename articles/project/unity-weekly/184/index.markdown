---
type: "unity-weekly"
title: "Unity Weekly 184"
description: "2024/08/05週のUnity Weeklyです。Unity 6 New GI Lighting、Unity 2021 LTS Extended、Input System 1.10.0、Pixyz Update、Multiplay Dev Blitsz Day、Unity CI/CD 完全に理解した勉強会などについて取り上げています。"
tags: ["Unity Weekly", "Unity"]
date: "2024-08-05T00:00:01"
---

## Unity Officials

### Unity 6's New Global Illumination Lighting Features

[Unity 6's New Global Illumination Lighting Features](https://unity.com/ja/blog/engine-platform/new-ways-of-applying-global-illumination-in-unity-6)

Unity 6で実装された新しいGIライティングの機能として新しいライトベイクアーキテクチャとAdaptive Probe Volumes（APV）についての概要や、これを用いたワークフローについて紹介しています。

### Unity 2021 Long Term Support Extended

[Unity 2021 Long Term Support Extended](https://unity.com/ja/blog/unity-2021-long-term-support-extended)

Unity 2021 LTSのサポート期間が、今年後半に予定されているUnity 6のリリースまで延長されることが発表されました。

### Input System 1.10.0 released

[Input System 1.10.0 released - Unity Engine - Unity Discussions](https://discussions.unity.com/t/input-system-1-10-0-released/1490892)

Input System 1.10.0がリリースされました。このバージョンでは[おもにバグフィックスが含まれており](https://github.com/Unity-Technologies/InputSystem/blob/develop/Packages/com.unity.inputsystem/CHANGELOG.md#1100---2024-07-24)、またUnity 6 Previewの推奨バージョンになる予定です。

### Discover What's New in Pixyz for 3D Data Optimization

[Discover What's New in Pixyz for 3D Data Optimization](https://unity.com/ja/blog/pixyz-whats-new-2024)

Pixyzのアップデートとして、Pixyz SDKリリースとPixyz Studio 2024のベータ版リリース、Pixyz Pluginのライセンシングの変更について紹介されています。

### New VR Multiplayer Template Available

[New VR Multiplayer Template Available - Unity Engine - Unity Discussions](https://discussions.unity.com/t/new-vr-multiplayer-template-available/1488824)

VR Multiplayer Templateの[新しいバージョンがリリース](https://docs.unity3d.com/Packages/com.unity.template.vr-multiplayer@2.0/manual/index.html)されました。

### Multiplayer Dev Blitz Day 2024

[Multiplayer Dev Blitz Day 2024 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/multiplayer-dev-blitz-day-2024/1495280)

Dev Blits Day 2024が2024/08/13 ~ 08/14に開催されることが発表されました。

このイベントは、UnityのMultiplayerに関する質問に対してUntiyのエンジニアがオンラインでその日に回答するイベントです。

## Slides

- [Unity CI/CD 完全に理解した勉強会 - YouTube](https://www.youtube.com/watch?v=XoPRO71NFt0)
- [ビルドシステムを C# 大統一したお話 - Speaker Deck](https://speakerdeck.com/monry/unifying-the-build-system-with-csharp)
- [azukizuki/AppStoreConnectApiUtils: python wrapper of appStoreConnect api](https://github.com/azukizuki/AppStoreConnectApiUtils)
- [【勉強会レポ】: Unity CI/CD 完全に理解した 勉強会 - Raspberlyのブログ](https://raspberly.hateblo.jp/entry/UnityCiCdComplete)

2024/08/02に開催された[Unity CI/CD 完全に理解した勉強会](https://unity-fully-understood.connpass.com/event/324346/)の一部登壇資料・レポジトリが公開されています。

また、有志によるレポートも公開されています。

## Articles

### Hierarchyウィンドウで参照切れを発見できるようにすると便利

[[Unity]Hierarchyウィンドウで参照切れを発見できるようにすると便利](https://zenn.dev/happy_elements/articles/5906ed71df1bdd)

各コンポーネント中に`Required`属性がついたシリアライズフィールドが参照切れになっている場合に、Hierarchyウィンドウ上で警告を表示するエディター拡張の実装を紹介しています。

### UniRx.ToolKit.ObjectPool相当の機能を別の実装で代替する

[UniRx.ToolKit.ObjectPool相当の機能を別の実装で代替する #Unity - Qiita](https://qiita.com/toRisouP/items/67afa141e3ac613c6817)

UniRxに実装されている `UniRx.ToolKit.ObjectPool` 相当の機能を、[R3](https://github.com/Cysharp/R3)や[uPools](https://github.com/AnnulusGames/uPools)を用いて実装する方法について紹介しています。

### Immediate Windowを用いてデバッグ中に使用可能なオブジェクト・機能にアクセスしデバッグ効率をあげる方法

[【Rider】 Immediate Windowを用いてデバッグ中に使用可能なオブジェクト・機能にアクセスしデバッグ効率をあげる方法 - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2024/08/01/120000)

RiderのImmediate Windowの基本的な使い方について紹介しています。

### クリックするだけで思い通りのアニメーションカーブを作れるおすすめアセット『Curvify』の使い方

[【Unity】クリックするだけで思い通りのアニメーションカーブを作れるおすすめアセット『Curvify』の使い方 - LIGHT11](https://light11.hatenadiary.com/entry/2024/07/23/191756)

[Curvify](https://assetstore.unity.com/packages/tools/animation/curvify-277062)を用いたアニメーションカーブの作成方法について紹介しています。

### Hex Map 3.4.0

[Hex Map 3.4.0](https://catlikecoding.com/unity/hex-map/3-4-0/)

Catlike CodingのHex Mapのチュートリアルの続編で、`HexCell` を利用している一部をグリッドという構造に移行することでこれまでの構造を簡略化しています。

### uLipSync の Timeline の軽量化オプションを改良してみた

[uLipSync の Timeline の軽量化オプションを改良してみた - 凹みTips](https://tips.hecomi.com/entry/2024/07/31/215415)

ブログ著者の開発する[uLipSync](https://github.com/hecomi/uLipSync)の[v3.1.4](https://github.com/hecomi/uLipSync/releases/tag/v3.1.4)で実装されたTimelineの軽量化オプションによって改善されたポイントを紹介しています。

## Repositories

### GeoVfx

[keijiro/GeoVfx: Examples of geographical data visualization with Unity VFX Graph](https://github.com/keijiro/GeoVfx)

WebGPU & VFX Graphを用いた地理データの可視化のサンプルリポジトリ。
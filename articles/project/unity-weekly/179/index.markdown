---
type: "unity-weekly"
title: "Unity Weekly 179"
description: "2024/07/01週のUnity Weeklyです。GraphicsStateCollection Tracing and Warmup、Unity 2022 LTS日本語ローカライゼーションなどについて取り上げています。"
tags: ["Unity Weekly", "Unity"]
date: "2024-07-01T00:00:01"
---

## Unity Officials

### GraphicsStateCollection Tracing and Warmup in Unity 6

[Official - GraphicsStateCollection Tracing and Warmup in Unity 6 - Unity Forum](https://forum.unity.com/threads/graphicsstatecollection-tracing-and-warmup-in-unity-6.1606386/)

Unity 6で追加されるPSO Cachingによる最適化や、そのために追加される事前ビルドやランタイムで利用したPSOを収集するためのAPIについて紹介しています。

### Unity 2022 LTSのマニュアルの日本語ローカライゼーション完成

[Xユーザーのユニティ・テクノロジーズ・ジャパンさん: 「Unity 2022 LTSのマニュアルについて、日本語ローカリゼーションが完成しました。Unityでの開発の際には、ぜひこちらの日本語版もご活用ください。 https://t.co/e6j8oeQguh #UnityJapan https://t.co/PmI1XFzHF8」 / X](https://x.com/unity_japan/status/1806550632792522785?s=46)

Unity 2022 LTSのマニュアルの日本語ローカライゼーションが完成したことが報告されています。

### Unity Japan Office

[Unity Japan Office | ユニティ・テクノロジーズ・ジャパン株式会社](https://unity3d.jp/industry/demo/unity-japan-office/)

デザインビジュアライゼーションの例として、Unity Japanのオフィスのサンプルシーンが公開されました。

このサンプル以外にもFactoryやWarehouseといったデモが、[こちら](https://unity3d.jp/industry/demo/)に公開されています。

## Articles

### ファンパレ「夢幻廻楼」技術の裏側 ~ 天候変化編~

[ファンパレ「夢幻廻楼」技術の裏側 ~ 天候変化編~ - Sumzap Engineering Blog](https://tech.sumzap.co.jp/entry/technology-regarding-weather-changes-in-jujutsuphanpara-mugenkairo)

「[呪術廻戦 ファントムパレード](https://jujutsuphanpara.jp/)」の「夢幻廻楼」における無限に登れる塔の構築方法や天候変化のためのシェーディングについて実際のアセットやシェーダー実装を交えつつ解説しています。

### event を IDisposable で購読する

[【C#】event を IDisposable で購読する](https://zenn.dev/ruccho/articles/dc6f82771cf650)

C#の `event` を `IDisposable` スタイルで購読できるようにするライブラリ [Disposify](https://github.com/ruccho/Disposify) について、その内部的な実装を解説しています。

### Unity設計練習 - リバーシ

[Unity設計練習 - リバーシ](https://zenn.dev/qemel/articles/f1829f9b847bcb)

リバーシを、ドメイン駆動設計のように設計し、かつテスト駆動やDIコンテナを用いてMonoBehaviourによる依存を極力減らすかたちで実装する方法を実際のコードを交えて解説しています。

### 3Dモデルの表面の形に沿って、画像をスタンプのように投影して表示するデカール(Decal)の使い方

[3Dモデルの表面の形に沿って、画像をスタンプのように投影して表示するデカール(Decal)の使い方【Unity】【URP】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/Decal_Renderer_Feature)

URP標準のデカールを用いて、3Dモデル上にテクスチャを投影する方法を紹介しています。

### uLipSync で Timeline の軽量化オプションを追加しました

[uLipSync で Timeline の軽量化オプションを追加しました - 凹みTips](https://tips.hecomi.com/entry/2024/06/29/232401)

このブログの著者が開発する[uLipSync](https://github.com/hecomi/uLipSync)に入ったTimelineの軽量化オプションについて紹介しています。

## Books

### Shader Graph Hands-On Book -ver.URP- 

[Shader Graph Hands-On Book -ver.URP- (野良狸工房) | ぽこぽん丸。 | 工学 | Kindleストア | Amazon](https://www.amazon.co.jp/dp/B0D8BR44QJ)

初学者でも理解しやすい、Shader Graphを用いたシェーダーの作成方法を解説した書籍。

## Repositories

### UIMaterialPropertyInjector

[mob-sakai/UIMaterialPropertyInjector: This package provides a component that allows easy modification of material properties for Unity UI (uGUI) without the need for shader-specific custom components.](https://github.com/mob-sakai/UIMaterialPropertyInjector)

シェーダー固有のカスタムコンポーネントを用意せずにuGUIのマテリアルプロパティを簡単に変更できるコンポーネントを提供するパッケージ。

### Unity Runtime Shader

[witalosk/UnityRuntimeShader: Compile and apply fragment / compute shaders to render textures or buffers.](https://github.com/witalosk/UnityRuntimeShader)

ランタイムでフラグメントやコンピュートシェーダーをコンパイルして、レンダーテクスチャやバッファーに書き込むパッケージ。

### Disposify

[ruccho/Disposify: Subscribe C# events with IDisposables!](https://github.com/ruccho/Disposify)

C#の `event` を `IDisposable` スタイルで購読できるようにするライブラリ。
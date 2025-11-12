---
type: unity-weekly
title: Unity Weekly 224
description: >-
  2025/05/26週のUnity Weeklyです。Unity 6.3の破壊的変更、WebGPUウェビナー、DOTS
  Ebook、ReSharper、InstantReplayなどについて取り上げています。
pubDatetime: 2025-05-25T15:00:01.000Z
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Planned breaking changes in Unity 6.3

[Planned breaking changes in Unity 6.3 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/planned-breaking-changes-in-unity-6-3/1646418)

Unity 6.3における破壊的変更について事前のアナウンスを行うディスカッションです。

Legacy ETC Compressorの削除、SceneManagement.Scene.handleがintから専用の型SceneHandleに変更、Experimental.GlobalIllumination下のEntityIdの名前空間変更、SerializeFieldがフィールドのみにしか設定できなくなる対応について、それぞれ説明しています。

### Announcement: Webinar – "GPU Driven Rendering on WebGPU with Fantasy Kingdom"

[📢 Announcement: Webinar – "GPU Driven Rendering on WebGPU with Fantasy Kingdom" - Unity Engine - Unity Discussions](https://discussions.unity.com/t/announcement-webinar-gpu-driven-rendering-on-webgpu-with-fantasy-kingdom/1646471/2)

2025年6月7日に開催されるWebGPUについてのウェビナーのアナウンスです。

このウェビナーでは、Unity 6のデモFantasy KingdomをWebGPUによる描画に移行した方法を、リアルタイムデモと実践的な最適化のヒントを交えて紹介するとのことです。

[こちらのリンク](https://unity3d.zoom.us/webinar/register/2117479091470/WN_G2-ZuglpSdCfsapSz2sZ_g#/registration)からウェビナーに登録できます。

### Intro to the DOTS Features & Samples in Unity 6

[Intro to the DOTS Features & Samples in Unity 6 | Unity](https://unity.com/resources/dots-concepts-features-samples-resources-unity-6)

以前「[Introduction to the Data-Oriented Technology Stack for advanced Unity developers](https://unity.com/ja/resources/introduction-to-dots-ebook)」として公開されていたE-bookが、Unity 6に対応したことをアナウンスしています。


## Articles

### ReSharper for Visual Studio Code

[ReSharper for Visual Studio Code](https://www.jetbrains.com/resharper/vscode/)

ReSharperのVisual Studio Code向けのプラグインがパブリックプレビューとして公開されました。

### Unity で直近 N 秒のプレイ動画をいつでも保存できるライブラリを公開しました

[Unity で直近 N 秒のプレイ動画をいつでも保存できるライブラリを公開しました - CORETECH ENGINEER BLOG](https://blog.sge-coretech.com/entry/2025/05/20/121648)

このブログを執筆する組織コアテクがリリースした、Unityの直近N秒のプレイ動画を保持するライブラリ「[InstantReplay](https://github.com/CyberAgentGameEntertainment/InstantReplay)」について、このライブラリの概要からインストール方法、内部実装についてそれぞれ解説しています。

### エディタバージョンの互換性を保ちつつRenderGraphに対応する

[エディタバージョンの互換性を保ちつつRenderGraphに対応する【NOVA Shader】 - CORETECH ENGINEER BLOG](https://blog.sge-coretech.com/entry/2025/05/19/105659)

このブログを執筆する組織コアテクが開発する「[NOVA Shader](https://github.com/CyberAgentGameEntertainment/NovaShader)」のDistortionエフェクトのRenderGraph対応を題材に、RenderGraphを利用しないバージョンとRenderGraphを利用したバージョンの両方をサポートするための考慮や実際の対応について解説しています。

### RaycastNonAllocの使い方

[【Unity】RaycastNonAllocの使い方 #Physics - Qiita](https://qiita.com/toRisouP/items/e45d371bbec31c6866b6)

`RaycastNonAlloc`を利用して、GC.Allocの発生を抑えたレイキャストの実装について紹介しています。

また、ここで利用する配列に `ArrayPool<T>` を利用する方法や、レイキャスト時の情報をイテレーションする際の配列のスライスを `Span<T>` を用いて実現する方法についても言及しています。

### .NETのシリアライザまとめ

[【C#】.NETのシリアライザまとめ](https://zenn.dev/nuskey/articles/csharp-serializers)

.NET（やUnity）で利用できるシリアライザーについて、それぞれのシリアライザーの概要から特徴、簡単な利用方法についてそれぞれ紹介しています。

### Meshを一時的に書き換えるコンポーネント

[【Unity】Meshを一時的に書き換えるコンポーネント](https://zenn.dev/lilytechlab/articles/c7262f8a591a19)

`MeshFilter` が保持しているメッシュを、ランタイムで書き換えるコンポーネントの実装について紹介しています。

### BuildProfileのCreateOrLoadでエラーが出て正常に操作できない時の対処

[【Unity】BuildProfileのCreateOrLoadでエラーが出て正常に操作できない時の対処 - うどんてっくメモ](https://myudon.hatenablog.com/entry/2025/05/20/110354)

Unity 6のBuildProfileで、「CreateOrLoad」関数で「Object reference not set to an instance of an object」が出て正常な操作ができない場合の対処方法について紹介しています。

### プレイヤーが操作できない時間を設計することの重要性

[プレイヤーが操作できない時間を設計することの重要性 #Unity - Qiita](https://qiita.com/kitasyunpp/items/1103c6c2c95b33fd55c8)

プレイヤーが操作できない時間を設けることについて、その実現方法や、操作できない時間をプレイヤーに納得してもらうための工夫について紹介しています。

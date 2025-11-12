---
type: unity-weekly
title: >-
  GDC 2022、New BatchRendererGroup、AsyncReadManager、CompositeBindings、RiderFlow -
  Unity Weekly #063
description: ''
pubDatetime: 2022-04-11T00:00:00.000Z
tags:
  - Unity
  - Unity Weekly
---

# Unity Official

## GDC 2022：皆さんにお会いできたことに感謝！

[GDC 2022：皆さんにお会いできたことに感謝！ | Unity Blog](https://blog.unity.com/ja/community/it-was-good-to-see-you-gdc-2022)

GDC 2022のUnityに関するイベントのハイライトがまとめられています。

Unity ShowcaseのGDC期間中のライブ開催、Unity Awards 2021、Unityの公演セッション一覧、Unityブースについてそれぞれ紹介しています。

## メタバースへの道はリアルタイム 3D で舗装されている

[メタバースへの道はリアルタイム 3D で舗装されている | Unity Blog](https://blog.unity.com/ja/manufacturing/the-road-to-the-metaverse-is-paved-with-real-time-3d)

メタバースの基礎としてのリアルタイム3D技術について学べる「[Road to the Metaverse](https://create.unity.com/road-to-metaverse)」について紹介しています。

「Road to the Metaverse」は、メタバースを構築するためのUnityツールについて知るためのクリエイタートラックと、メタバースに対するUnityの見解やUnityのAccelerate Solutions部門がUnityの技術スタックを使ってどのようにさまざまな企業のDXへの道のりを支援しているかについて紹介するエグゼクティブトラックの２つのトラックで構成されます。

# Articles

## Trying out new Unity API: BatchRendererGroup

[Trying out new Unity API: BatchRendererGroup](https://gamedev.center/trying-out-new-unity-api-batchrenderergroup/)

Unity2022.1から利用できる新しい[BatchRendererGroup API](https://forum.unity.com/threads/new-batchrenderergroup-api-for-2022-1.1230669/)の利用方法と、Instancingなどとのパフォーマンスの比較を紹介しています。

前半ではBatchRendererGroup APIを理解するために、シンプルな1メッシュの描画からはじめ、オブジェクトの移動の実装、多オブジェクトの描画方法について説明しています。

後半ではBoidsアルゴリズムを用いた群れのシミュレーションをBatchRendererGroup APIで実装し、同じ実装をGameObjectやInstancingで行い、パフォーマンスを比較しています。

## XRコンテンツで厳禁の処理落ちを軽減！ AsyncReadManagerで画像を非同期読み込みする

[XRコンテンツで厳禁の処理落ちを軽減！ AsyncReadManagerで画像を非同期読み込みする](https://zenn.dev/meson/articles/improve-performance-with-asyncreadmanager)

[AsyncReadManager](https://docs.unity3d.com/ScriptReference/Unity.IO.LowLevel.Unsafe.AsyncReadManager.html)を用いて画像読み込みを非同期にすることで処理落ちを軽減する方法について紹介しています。

画像の読み込みを非同期化、ReadCommandを用いたファイル読み込みコマンドの作成方法からAsyncReadManagerでのコマンド発行からファイルデータの取得、AsyncReadManagerのasync対応などについて解説しています。

## スマホ向けオンラインツールアプリ開発で対応したこと・アセットなど総まとめ【Unity】

[スマホ向けオンラインツールアプリ開発で対応したこと・アセットなど総まとめ【Unity】｜アマガミナブログ](https://amagamina.jp/blog/remote-dice-dev/)

ブログの著者が開発する [リモートダイス3D](https://apps.apple.com/app/id1605142955?mt=8) を開発するうえで利用したアセットや、設計やUI、グラフィックス、物理、Android/iOSの各種プラットフォームなど、対応した項目を詳細にまとめています。

## いかにして人類はVRアプリケーションの標準UIを手から伸びるレーザーポインター方式に確定したのか

[いかにして人類はVRアプリケーションの標準UIを手から伸びるレーザーポインター方式に確定したのか - izm_11's blog](https://izm-11.hatenablog.com/entry/2022/04/06/212001)

VRアプリケーションのUI選択時のレーザーポインター方式がどのような歴史を辿りこの方式がポピュラーになったのかについて解説しています。

GearVRやOculus Rift DK2などのコンシューマー向けVRが主戦場だった頃のUIから、Oculus Rift TouchやVive Wandなど家庭用VR機器が登場した頃の直接手で触れるようなUIの登場、OculusQuestが登場しレーザーポインター方式の選択UIに戻ってきた経緯について紹介しています。

## Unityの(New)InputSystemでBindingを好きにカスタマイズできるCompositeBindingsの紹介

[Unityの(New)InputSystemでBindingを好きにカスタマイズできるCompositeBindingsの紹介 - Synamon’s Engineer blog](https://synamon.hatenablog.com/entry/unity_input_composite_bindings)

Unityの新しいInputSystemの、複数の入力を合成して新たな入力として扱うCompositeBindingsについて紹介しています。

CompositeBindingsの機能の概要と、キーボードのWASD移動入力を、1つの十字キー（Vector2）入力に変換する例の紹介、実際にCompositeBindingsを設定する方法についてそれぞれ紹介しています。

## RiderFlowでSceneViewを素早く操作！オブジェクト配置、カメラプリセット切り替え、ブックマークにフォーカス！

[RiderFlowでSceneViewを素早く操作！オブジェクト配置、カメラプリセット切り替え、ブックマークにフォーカス！ - Qiita](https://qiita.com/RyotaMurohoshi/items/22dda1eb7a4704940b9c)

JetBrain社が開発する、Unityのプロダクティビティツール「RiderFlow for Unity」の [Scene view management toolbar](https://www.jetbrains.com/help/riderflow/scene-view-management-toolbar.html) を用いた「アセット検索とDrag&Drop」・「カメラプリセット」・「ブックマーク」機能について、それぞれ利用方法を紹介しています。

## UnityのPresetの紹介

[UnityのPresetの紹介 - Qiita](https://qiita.com/jvince/items/8c2f5b3eaead44db9697)

複数コンポーネントやアセット、プロジェクト設定などのプリセット設定（初期設定）を管理する[Preset](https://docs.unity3d.com/Manual/Presets.html)の使い方とPresetを用いてテクスチャや複数コンポーネントのプリセット設定を行う方法、[Preset Manager](https://docs.unity3d.com/Manual/class-PresetManager.html)によるプリセット設定の管理方法について紹介しています。

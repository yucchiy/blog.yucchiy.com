---
type: "unity-weekly"
title: "Unity Weekly 167"
description: "2024/04/08週のUnity Weeklyです。Ziva、Chromebook & Chrome OS runtime support、Shader Graph Sprite Outlineなどについて取り上げています。"
tags: ["Unity Weekly", "Unity"]
date: "2024-04-08T00:00:01"

---

## Unity Officials

### An announcement about Ziva

- [An announcement about Ziva](https://blog.unity.com/news/update-about-ziva)
- [Ziva に関するアップデート](https://blog.unity.com/ja/news/update-about-ziva)

UnityのZivaに関するアップデートの記事で、Ziva VFX、Ziva Real-Time、Ziva Face Trainer および関連する Ziva 製品のサポートを、Unity が今後これらの製品を積極的に販売あるいはサポートしないことを発表しました。

また、有効なサブスクリプションを契約している場合、既存のライセンスを5年間のライセンスに変換するオプションを提供することも合わせて発表しています。

### The future of Chromebook and ChromeOS runtime support

[Official - The future of Chromebook and ChromeOS runtime support - Unity Forum](https://forum.unity.com/threads/the-future-of-chromebook-and-chromeos-runtime-support.1573534/)

Unity 6 Previewから、AndroidのランタイムプレイヤーからChromebookとChromeOSのサポートが削除されることが発表されました。

またAndroidの x86_32 ターゲットアーキテクチャは完全に削除され、 x86_64 ターゲットアーキテクチャは（Chromebookが削除され）XRハードウェア（Magic Leap 2）でのみサポートされます。

フォーラムでは、その経緯や目的についても触れています。

### SpriteOutlineSample

[keijiro/SpriteOutlineSample: Unity Shader Graph: Sprite outline shader sample](https://github.com/keijiro/SpriteOutlineSample)

Shader Graphでのスプライト用のアウトラインシェーダーを実装を公開しています。

## Articles

### Meta Quest Building Blocks: コントローラーを活用したインタラクションの構築

[Meta Quest Building Blocks: コントローラーを活用したインタラクションの構築](https://zenn.dev/meson/articles/quest-buildingblocks-interaction)

Oculus Integration v57以降に提供されているBuilding Blocksを用いたインタラクションシーンの自動構築方法や、コントローラーハンドのインタラクション設定の方法についてそれぞれ紹介しています。

### Input Systemでキーリピートを実現するInteraction

[【Unity】Input Systemでキーリピートを実現するInteraction | ねこじゃらシティ](https://nekojara.city/unity-input-system-key-repeat)

Input SystemのInteractionを活用して、任意のActionに対してのキーリピート（ボタンを押しっぱなしにするときの挙動）を実現する方法について解説しています。

### 2D Water Shader Breakdown

[2D Water Shader Breakdown | Cyanilux](https://www.cyanilux.com/tutorials/2d-water-shader-breakdown/)

2Dゲームでの水面の反射を表現するシェーダーの実装について紹介しています。

### UIテスト向けのGameObject検索API

[UIテスト向けのGameObject検索API - やらなイカ？](https://www.nowsprinting.com/entry/2024/04/01/004725)

ブログ著者が開発するMonkey Test Helperパッケージ「[test-helper.monkey](https://github.com/nowsprinting/test-helper.monkey)」に実装されている、UIテスト時に便利なGameObjectを検索するAPIについて紹介しています。

### Unity2023.2からUI Toolkitの「UxmlElementとUxmlAttribute」を使用することでCustom UI Elementsを実装する際に「UxmlFactoryとUxmlTraits」が必要がなくなった

[【Unity】Unity2023.2からUI Toolkitの「UxmlElementとUxmlAttribute」を使用することでCustom UI Elementsを実装する際に「UxmlFactoryとUxmlTraits」が必要がなくなった - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2024/04/04/120000)

Unity 2023.2からUI Toolkitに追加された `UxmlElement` と `UxmlAttribute` を用いて、独自のUI Elementsを実装する方法について紹介しています。

### MonoBehaviour.didStart で Start が呼び出されたか確認できる

[【Unity】MonoBehaviour.didStart で Start が呼び出されたか確認できる - コガネブログ](https://baba-s.hatenablog.com/entry/2024/04/04/080000)

Unity 2023.1から追加された、`MonoBehaviour` の `Awake` や `Start` が呼び出されたかどうかを確認するためのAPIについて紹介しています。

### Unity2021からRenderTextureDescriptorにDepthStencilFormatというパラメータが追加されていた

[Unity2021からRenderTextureDescriptorにDepthStencilFormatというパラメータが追加されていた](https://zenn.dev/inpro/articles/81f564d30c75c4)

Unity 2021から追加された`RenderTextureDescriptor.depthStencilFormat`について、この概要から `stencilFormat` との違い、Unityでの利用箇所を紹介しています。

### メンテナンス不要でチュートリアルを突破するAnjinのオートパイロット設定

[メンテナンス不要でチュートリアルを突破するAnjinのオートパイロット設定 - やらなイカ？](https://www.nowsprinting.com/entry/2024/04/06/101028)

DeNAが開発するオートパイロットフレームワーク「[Anjin](https://github.com/DeNA/Anjin)」のv1.3に入った機能を用いて、チュートリアル突破を確認するためのテストのためのオートパイロット設定について紹介しています。

### Unity 6の新しい命名規則やプリプロセッサディレクティブについて

[Unity 6の新しい命名規則やプリプロセッサディレクティブについて #Unity - Qiita](https://qiita.com/RyotaMurohoshi/items/f4b80d1ff2e02fd5e923)

Unityフォーラム（「[Unity 6 New Naming Convention](https://forum.unity.com/threads/unity-6-new-naming-convention.1558592/)」）で発表されたUnity 6の命名規則についての解説や、Unity 6で提供されるプリプロセッサディレクティブなどについて紹介しています。

### 【AppleVisionPro】部屋の明るさをマテリアルに反映させたい！

[【AppleVisionPro】部屋の明るさをマテリアルに反映させたい！ #Unity - Qiita](https://qiita.com/segur/items/1387a4a406b507c0b78a)

PolySpatialパッケージで、部屋の明るさを取得する方法と、その値を用いてマテリアルに部屋の明るさを反映させる方法を紹介しています。

### Create Scene Thumbnail Image using OnSceneSaved & OnPreviewGUI

- [Create Scene Thumbnail Image using OnSceneSaved & OnPreviewGUI « Unity Coding – Unity3D](https://unitycoder.com/blog/2024/04/07/create-scene-thumbnail-image-using-onscenesaved-onpreviewgui/)
- [Save Thumbnails for Scenes (unity editor script)](https://gist.github.com/unitycoder/b740b9db92e454d83ade8528d5e1f382)

シーン保存時に、シーンカメラからプレビューを作成する方法について紹介しています。
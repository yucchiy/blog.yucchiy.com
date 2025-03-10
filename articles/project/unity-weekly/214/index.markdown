---
type: "unity-weekly"
title: "Unity Weekly 214"
description: "2025/03/10週のUnity Weeklyです。UIToolkit、Variable Rate Shading、Unity IAP 5.0.0-pre4、エディタ拡張完全に理解した勉強会などについて取り上げています。"
tags: ["Unity Weekly", "Unity"]
date: "2025-03-10T00:00:01"
---

## Unity Officials

### UI Toolkit development status and next milestones – February 2025

[UI Toolkit development status and next milestones – February 2025 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/ui-toolkit-development-status-and-next-milestones-february-2025/1607740)

2025/02現在のUI Toolkitの開発状況および今後のマイルストーンが報告されています。

開発状況については、Unity 6でUI Toolkitに追加された主な機能とUI Toolkitを学ぶうえでの学習リソースについて共有されています。
今後のマイルストーンでは、ワールド空間対応やポストプロセススタイルのフィルター、キーフレームアニメーションなどの今後対応予定の機能が簡単に紹介されています。

また、UI Toolkitをより良くするためにゲーム開発者の意見を直接UI Toolkitチームに届けることのできる1on1を、下記時間（EST）で実施予定とのことです。

- March 10, 2025: 10 AM, 12 PM, 2 PM, 4 PM
- March 14, 2025: 10 AM, 12 PM, 2 PM, 4 PM
- March 17, 2025: 10 AM, 12 PM, 2 PM, 4 PM
- March 21, 2025: 10 AM, 12 PM, 2 PM, 4 PM

### Optimize Renderer Features with Variable Rate Shading in Unity 6.1

[Optimize Renderer Features with Variable Rate Shading in Unity 6.1 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/optimize-renderer-features-with-variable-rate-shading-in-unity-6-1/1605893)

Unity 6.1にDirectX12およびVulkanに対して追加された、ピクセルシェーダーの解像度を描画パスごとに変更することができる Variable Rate Shading（VRS）について、その機能の概要やAPI、パフォーマンスについて紹介してます。

### Unity IAP package 5.0.0-pre.4 is now available

[Unity IAP package 5.0.0-pre.4 is now available - Unity Services - Unity Discussions](https://discussions.unity.com/t/unity-iap-package-5-0-0-pre-4-is-now-available/632966/113)

Unity上でプラットフォームごとのアプリ内課金を実装するためのライブラリ Unity IAP の 5.0.0-pre.4 がリリースされたことが報告されています。

このリリースでの主要な改善点として、GoogleのBilling Library が 7.1.1にアップデートされ、あわせて周辺のAPIが更新されました。
また、AppleのStore Kit 2のコールバックに関する不具合が修正されています。

ただし、エディターのバージョンによっては[DependencyInjectionException](https://discussions.unity.com/t/unity-iap-package-5-0-0-pre-4-is-now-available/632966/117) が投げられる不具合が報告されており、この不具合は次のリリースである pre.5 で修正が予定されています。

### Important Update for UnityTLS

[Important Update for UnityTLS - Unity Engine - Unity Discussions](https://discussions.unity.com/t/important-update-for-unitytls/1611437)

Unity 2021 LTS・2022 LTS・6 で、UnityWebRequestなどがサポートするTLSの最小バージョンが1.2に引き上げられることがアナウンスされました。

この変更は、それぞれのバージョンの次のアップデートで対応されることが予定されています。

### Assembly updater and changes in builds using AppleIntel architecture

[Assembly updater and changes in builds using AppleIntel architecture - Unity Services - Unity Discussions](https://discussions.unity.com/t/assembly-updater-and-changes-in-builds-using-appleintel-architecture/1603403)

Unity Build Automationに、[API Updates](https://docs.unity3d.com/Manual/APIUpdater.html)の挙動を制御するためのオプションが追加されたことがアナウンスされました。

## Events

### Unity エディタ拡張完全に理解した 勉強会

[Unity エディタ拡張完全に理解した 勉強会 - connpass](https://unity-fully-understood.connpass.com/event/347805/)

「Unity 〇〇完全に理解した勉強会」のエディター拡張回が2025/04/04（金）に開催されます。

## Articles

### AppleのSpatialAudioであるPHASEのUnityプラグインを日本語翻訳・解説してみた

[【Unity】AppleのSpatialAudioであるPHASEのUnityプラグインを日本語翻訳・解説してみた【SpatialAudio】 #audio - Qiita](https://qiita.com/Cova8bitdot/items/0caeec2eae941c1c9530)

AppleがUnity向けに提供するネイティブプラグイン「[apple/unityplugins](https://github.com/apple/unityplugins)」で提供される [PHASE](https://developer.apple.com/documentation/phase/) を操作するためのプラグインについて、その基本的な使い方を解説しています。

### 2022.3.45f1 で JetBrains.Annotations.MustDisposeResource が使えるようになった

[【Unity】2022.3.45f1 で JetBrains.Annotations.MustDisposeResource が使えるようになった - コガネブログ](https://baba-s.hatenablog.com/entry/2025/03/06/191059)

Unity 2022.3.45f1 から使えるようになった、破棄していないインスタンス（ `IDisposable` が定義されているが `Dispose` が呼び出されていないローカル変数）を注釈するための `MustDisposeResource` 属性について紹介しています。

### シェーダーのマルチコンパイルとシェーダーフィーチャー入門

[【Unity】シェーダーのマルチコンパイルとシェーダーフィーチャー入門 - 渋谷ほととぎす通信](https://shibuya24.info/entry/unity-shader-macro-multicompile)

Unityのシェーダーで、異なる要件に対して処理をコンパイル時に切り替えるための `multi_compile` と `shader_feature` について、その違いや実際の使い方について説明しています。

### Unity製iPhoneアプリのメモリ使用量の調査まとめ

[Unity製iPhoneアプリのメモリ使用量の調査まとめ](https://zenn.dev/ambr_inc/articles/49f2359fa9e230)

Unityで実装したiOS向けのアプリのメモリ使用量を調査するためのXcodeのMemory Profilerの使い方から、実際に動画再生や描画解像度時のメモリ使用量の変化や、テクスチャやメッシュの使用するメモリの調整方法について説明しています。

### Timelineから参照しているすべてのアセットパスを手に入れたい

[【Unity】Timelineから参照しているすべてのアセットパスを手に入れたい #C# - Qiita](https://qiita.com/ayaha401/items/9a5e5ce1e813a452514a)

Timelineのアセットが内部的に参照しているアセットのパス一覧を取得するためのエディター拡張の実装方法について紹介しています。

### TextMeshPro の Material Preset に表示されるマテリアルの条件

[【Unity】TextMeshPro の Material Preset に表示されるマテリアルの条件 #Unity - Qiita](https://qiita.com/yuri_tsukimi/items/448eb7d6a132febda749)

TextMeeshProのテキストコンポーネントの「Matrial Preset」で選択できるマテリアルとして認識される条件を、実装を追いつつ説明しています。

### Addressableのカタログは分割可能と聞いたので試してみた

[【Unity】Addressableのカタログは分割可能と聞いたので試してみた #Addressables - Qiita](https://qiita.com/moramora/items/a197a6cfc0547e30bc44)

Addressableのカタログを分割することでアセットバンドルを分割し、それをロードする方法について紹介しています。

### カンマや小数点のローカライズ

[[Unity] カンマや小数点のローカライズ](https://zenn.dev/kagamimoti/articles/f98fc368ca7b94)

C#の `CultureInfo` によって、小数点の桁の区切り文字が切り替わる挙動について紹介しています。

### VRメタバースのリアルタイム通信サーバーの技術にMagicOnionとNATSを選んだ話

[VRメタバースのリアルタイム通信サーバーの技術にMagicOnionとNATSを選んだ話](https://zenn.dev/ambr_inc/articles/c2cd63556eed88)

ambrでリアルタイムサーバーにMagicOnionおよびNATSを選定した経緯について説明しています。

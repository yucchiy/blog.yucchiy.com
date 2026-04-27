---
type: unity-weekly
title: Unity Weekly 270
description: >-
  2026/04/27週のUnity Weeklyです。Unity6.6の破壊的変更、Physics Core 2Dパッケージ、Shader Function Reflection API、アセットインポート設定などを紹介しています。
pubDatetime: 2026-04-27T09:00:00+09:00
tags:
  - Unity Weekly
  - Unity
---


## Unity Officials

### Planned breaking changes in Unity 6.6

[Planned breaking changes in Unity 6.6 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/planned-breaking-changes-in-unity-6-6/1715134)

Unity 6.6における破壊的変更を紹介するディスカッションです。紹介されている破壊的変更は下記の通りです。

- Minimum OpenGLES version raised to 3.1
    - OpenGLESの最小バージョンを3.1に引き上げる対応
    - Unity社のデータによると、OpenGLES 3.0ユーザーはプレイヤー全体の0.4%で、かつ大半はAdreno 300 GPUを利用している
- Android legacy chained signal handler support removed
    - ネイティブクラッシュをJava例外としてラップする `androidChainedSignalHandlerBehavior` の `legacy` がサポートされなくなった
    - Java例外でラップされたネイティブクラッシュに依存するコードがある場合、Androidまたはサードパーティのサービスによって処理されるようになった
- Denoising changes
    - OptixデノイザーがUnity6.5で廃止されたことを受け、6.6では完全に削除されるようになった
    - 代替となるOpenImageは全てのエディタープラットフォームで最適化されたGPUパスを活用でき、対応プラットフォームの範囲およびパフォーマンス上優れている
    - 合わせて、OpenImageデノイザーがエンジンモジュールへ移行され、`com.unity.rendering.denoising` パッケージが不要に
- Removal of Rendering Debugger DebugState serialization system
    - Unity6.5からレンダリングデバッガーがUI Toolkitに移行され、この変更に伴い、DebugStateによる古いシリアライズシステムが削除された
    - 新しい方式では、シリアル化したいフィールドをもつクラスに `[Serializable]`をつけた上で [`ISerializedDebugDisplaySettings`](https://docs.unity3d.com/Packages/com.unity.render-pipelines.core@17.5/api/UnityEngine.Rendering.ISerializedDebugDisplaySettings.html)を実装して値を取得する
- UIToolkit “set input backend” method removed
    - `UIToolkitInputConfiguration.SetRuntimeInputBackend`メソッドが削除された
- Deprecation / Removal of low-level internal Content Build APIs
    - 内部利用が主な利用目的の低レベルなコンテンツビルドAPIが非推奨または削除された
- Removal of UxmlFactory/UxmlTraits
    - `UxmlFactory`と`UxmlTraits` が削除された。この対応は元々Unity6.4に入る予定だったが、間に合わずにこのバージョンに入ることが決まった
    - 代替となる仕組みとして[`UxmlElementAttribute`](https://docs.unity3d.com/ScriptReference/UIElements.UxmlElementAttribute.html)と[`UxmlAttributeAttribute`](https://docs.unity3d.com/ScriptReference/UIElements.UxmlAttributeAttribute.html)が提供される
        - 移行ガイドは「[Manual: Migrate custom controls from an earlier version to Unity 6](https://docs.unity3d.com/Manual/ui-systems/migrate-custom-control.html)」で確認できる
- Removal of experimental AssetDatabase on-demand import APIs
    - 実験的なAssetDatabaseのオンデマンドインポートが削除され、それに伴い `AssetDatabaseExperimental.OnDemandMode` と `AssetDatabaseExperimental.ActiveOnDemandMode` が削除された
    - 代替手段はないため、呼び出しを削除する必要がある
- Unity.Hierarchy Obsolete APIs Now Generate Errors
    - `Unity.Hierarchy`の廃止されたAPIを利用していた場合に、コンパイルエラーになるようになった
        - これらのAPIは、Unity 6.7で完全に削除される
    - このディスカッションでは、影響を受けるAPIの代替APIが紹介されている

また、CoreCLRの変更については「[Path to CoreCLR, 2026: Upgrade Guide](https://discussions.unity.com/t/path-to-coreclr-2026-upgrade-guide/1714279)」を合わせて確認するようにとのことです。

### Physics Core 2D in Unity 6.5

[Physics Core 2D in Unity 6.5 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/physics-core-2d-in-unity-6-5/1715178)

Physics Core 2DのUnity 6.5での変更点について紹介するディスカッションです。紹介されている変更点は下記の通りです。

- Namespace change
    - LowLevelPhysics2D が PhysicsCore2Dとなり、合わせて名前空間が `UnityEngine.LowLevelPhysics2D` から `Unity.U2D.Physics` に変更される
- Dedicated Module
    - 新しい Physics Core 2D モジュールはパッケージマネージャーからインストールできる
    - 古いPhysics Moduleは利用しない場合はパッケージを外すことでビルドサイズを小さくできる
- Project Settings
    - Physics Core 2Dモジュール専用のプロジェクト設定が用意された
    - `PhysicsLowLevelSettings2D` アセットは自動的に `PhysicsCoreSettings2D` アセットに更新される
- Transforms
    - 新しいTransform Writing Optionsが追加され、write/tweenイベントのコールバックを受け取ったり、独自のtransform writing や tweeningが実装可能に
    - トランスフォームの変更は[`ITransformChangedCallback`](https://docs.unity3d.com/6000.5/Documentation/ScriptReference/Unity.U2D.Physics.PhysicsCallbacks.ITransformChangedCallback.html)にて、[その理由](https://docs.unity3d.com/6000.5/Documentation/ScriptReference/Unity.U2D.Physics.PhysicsEvents.TransformChangeEvent-changeReason.html)とともに通知されるようになった
    - Transform Plane modeにカスタムオプションが追加され、通常の3Dプレーンへの書き出し以外に、任意の3Dのトランスフォームプレーンを指定できるようになった
- Contact Filter Mode
    - 2 PhysicsShape間の衝突条件を決定する [Contact Filter Mode](https://docs.unity3d.com/6000.5/Documentation/ScriptReference/Unity.U2D.Physics.PhysicsShape.ContactFilterMode.html)と、[`ContactFilter.groupIndex`](https://docs.unity3d.com/6000.5/Documentation/ScriptReference/Unity.U2D.Physics.PhysicsShape.ContactFilter-groupIndex.html)の挙動を決める[Contact Filter Group Mode](https://docs.unity3d.com/6000.5/Documentation/ScriptReference/Unity.U2D.Physics.PhysicsShape.ContactFilterGroupMode.html)が追加された
- Ignore Filter Options
    - 新しいIgnore Filter Optionsが追加された
    - カテゴリベースのフィルタリングに加えて、形状やレイキャスト、オーバーラップなどのワールドクエリに対してきめ細かい制御を提供する
- Continuous Collision Tuning
    - 動的ボディに対するCCD(Continuous Collision Detection)が、パフォーマンスを維持するために自動で制限され、Collision Thresholdで設定できる
    - 0.5は形状の半分以上の移動に対する判定でCCDを利用し、0を設定するとあらゆる移動でCCDを利用する
    - この機能は、Unity 6.3 LTSにも追加される予定
- Query Features
    - 既存のオーバーラップとそのテストクエリがスパンをサポートをサポートし、単一の操作で複数のオーバーラップのチェックを実行できるように
- Ownership
    - コンポーネント作成機能の一つで、コンポーネントによって作成されたオブジェクトに所有者と所有権を割り当てる
    - オブジェクトの破壊などの重要な変更を所有者のみに制限し、意図しない問題の発生を防ぐ
- Maximum Worlds
    - 独立したワールドの作成上限が1024までと大幅に増加、以前は128に固定されていたが、この値を設定できるようになった
    - デフォルトワールドしか使っていないプロジェクトでは、この数を1に絞ることで、静的メモリのオーバーヘッドを回避できる
- Rendering
    - 物理演算のレンダリングが改善され、[Rendering Mode](https://docs.unity3d.com/6000.5/Documentation/ScriptReference/Unity.U2D.Physics.PhysicsWorld-renderingMode.html)にDevelopment PlayerやAny Playerが指定できるようになった
    - 描画APIはジオメトリとシェイプのバッチ描画をサポートするように
    - [`PhysicsEvents.WorldDrawResults`](https://docs.unity3d.com/6000.5/Documentation/ScriptReference/Unity.U2D.Physics.PhysicsEvents.WorldDrawResults.html)を介して描画結果を取得できるように

### Shader Function Reflection API

[Shader Function Reflection API - Unity Engine - Unity Discussions](https://discussions.unity.com/t/shader-function-reflection-api/1708277)

Unity 6.5に導入される（6000.5.0a8に導入された）Shader Graphに導入されるShader Function Reflection APIについて紹介しています。

この機能を用いると、特定のフォーマットで記述したHLSLの関数をShader Graph上に公開し、呼び出せるようになります。

入出力ポートは関数シグネチャから判断され、XMLドキュメントによってヒントやデフォルト値、外観などのカスタマイズができます。

このディスカッションでは、この機能の仕組みから記述方法、使用例などについてそれぞれ紹介しています。

この機能は、最終的にカスタム関数ノードとカスタムノード内部APIを置き換えることを目的にしているようです。

### Optimize and automate your asset import configuration settings

[Optimize and automate your asset import configuration settings - Technical Articles - Unity Discussions](https://discussions.unity.com/t/optimize-and-automate-your-asset-import-configuration-settings/1717084)

テクスチャ・アニメーションクリップ・ビデオクリップ・フォントなどの推奨のインポート設定について解説しています。

### Announcing the Transition from Rosetta 2

[Announcing the Transition from Rosetta 2 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/announcing-the-transition-from-rosetta-2/1717433)

Apple Silicon搭載のUnity Editorで、macOS27以降のリリースにおいてRosetta 2の対応を段階的に廃止することをアナウンスしています。

macOS27以前では、Rosetta 2サポート付きのUnityをそのまま利用できるが、macOS27以降ではApple Siliconにネイティブに対応したUnityEditorを利用する必要があります。

### A Note on UI Toolkit Support for HDRP

[A Note on UI Toolkit Support for HDRP - Unity Engine - Unity Discussions](https://discussions.unity.com/t/a-note-on-ui-toolkit-support-for-hdrp/1716572)

[HDPRがメンテナンスモードへ移行することに](https://discussions.unity.com/t/render-pipelines-strategy-for-2026/1710004)伴い、UI ToolkitのHDPRのサポートの予定がなくなったことをアナウンスしています。

### OculusXR Package Deprecation

[OculusXR Package Deprecation - Unity Engine - Unity Discussions](https://discussions.unity.com/t/oculusxr-package-deprecation/1717655)

Unity 6.5から、[OculusXRパッケージ](https://docs.unity3d.com/Packages/com.unity.xr.oculus@4.5/manual/index.html)が非推奨になることをアナウンスしています。

代替としては、[OpenXRパッケージ](https://docs.unity3d.com/Packages/com.unity.xr.meta-openxr@2.5/manual/index.html)を利用してQuestプラットフォームへの移行を推奨しています。


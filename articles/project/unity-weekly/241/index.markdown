---
type: "unity-weekly"
title: "Unity Weekly 241"
description: "2025/09/29週のUnity Weeklyです。Cinemacine3.1チュートリアル動画、Unity XR Updates、Netcode for GameObjects v2.5.0などを紹介しています。"
tags: ["Unity Weekly", "Unity"]
date: "2025-09-29T00:00:01"
---

## Unity Officials

### New 5 part Cinemachine 3.1 Youtube tutorial series available

[New 5 part Cinemachine 3.1 Youtube tutorial series available - Technical Articles - Unity Discussions](https://discussions.unity.com/t/new-5-part-cinemachine-3-1-youtube-tutorial-series-available/1685256)

Cinemachine 3.1のチュートリアル動画が公開されたことをアナウンスするディスカッションです。

- [An introduction to Cinemachnine](https://www.youtube.com/watch?v=XTVzs4B1d7I&list=PLX2vGYjWbI0QiMBrmyzbxZeHepAbhVOJa)
    - Cinemachine 3.1の基礎と、Follow Camera・Third Person Aim extension・FreeLook Camera・Spline Dolly・Sequencer Cameraなどの利用できるカメラの種類について説明しています。
- [Cinemachine and Timeline](https://www.youtube.com/watch?v=Px_H1oyZgGY&list=PLX2vGYjWbI0QiMBrmyzbxZeHepAbhVOJa)
    - タイムラインを用いて複雑なアニメーションシーケンスを構築するための知識として、ショットとアニメーション、シーケンスのアクティブ・非アクティブ化・カメライベント・被写体深度によるブラーなどを説明しています。
- [Cinemachine 2D Cameras](https://www.youtube.com/watch?v=-tUd-bLmoO8&list=PLX2vGYjWbI0QiMBrmyzbxZeHepAbhVOJa) 
    - Cinemachineで2Dカメラを制御する方法として、confinersを用いたカメラの動きの制限や2Dカメラのズームを行うためのトリガーイベント、カメラシェイクの機能などの使い方などを紹介。ています。
- [Cinemachine Player Controller Cameras](https://www.youtube.com/watch?v=u0a1F6BlczE&list=PLX2vGYjWbI0QiMBrmyzbxZeHepAbhVOJa)
    - Cinemachineでプレイアブルキャラクターのカメラの追従を行う方法として、カメラの種類の切り替えやカメラが壁にめり込まないようにするための制御、Deoccluder extensionやClear Shotコンポーネントなどの使い方についてそれぞれ紹介しています。
- [Cinemachine Tips and Tricks](https://www.youtube.com/watch?v=AFU9hsxPLZU&list=PLX2vGYjWbI0QiMBrmyzbxZeHepAbhVOJa)
    - Cinemachineをプロジェクトで活用するためのTipsとして、オブジェクトの動きのJittersを抑制する方法やスローモーションでキャラクターの周りをリアルタイムで回転するFreeLookカメラの作成方法、FreeLook Modifierコンポーネントの使用方法、そして複数のキャラクターを追跡するためのCinemachine Target Groupコンポーネントの利用方法についてそれぞれ説明しています。

### Unity XR Updates - September 2025

[Unity XR Updates - September 2025 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/unity-xr-updates-september-2025/1684847)

2025年09時点でのUnityのXR関連のアップデートをまとめています。

具体的にはUnity6.2で入ったXRのアップデートとして、下記を紹介しています。

- Android XRがfully verifiedという形でサポートされました。主要なアップデートとして下記が紹介されています。
    - ハンドメッシュ: ハンドメッシュを可視化して、オクルージョンとして活用できる
    - 動的リフレッシュレート: ランタイム中にディスプレイのリフレッシュレートを動的に調整して、アプリケーションのニーズに基づいてパフォーマンスと消費電力を最適化できる
    - 可視メッシュオクルージョン: URPでのポストプロセッシングエフェクトのGPUオーバーヘッドを削減できる
- XR Interaction ToolkitとUI Toolkitを用いて、ワールド空間上にUI ToolkitによるUIを直接レンダリングできるようになりました
- Colocated experiences on Questのサポートを強化し、コラボレートユーザー間のアンカーの共有や同じアプリケーションを実行している他の共同配置デバイスを検出できるコロケーション検出機能を追加しました

また、今後の展望として、開発サイクルを加速し、より優れたグラフィックスパフォーマンスや新しいデバイスや機能のサポートを予定しているとのことです。

### Netcode for GameObjects v2.5.0 is now publicly available! 

[🎉 Netcode for GameObjects v2.5.0 is now publicly available! - Unity Engine - Unity Discussions](https://discussions.unity.com/t/netcode-for-gameobjects-v2-5-0-is-now-publicly-available/1679866)

Netcode for GameObjectsのv2.5.0がリリースされたことをアナウンスするディスカッションです。

CHANGELOGは[こちらより確認できます](https://docs.unity3d.com/Packages/com.unity.netcode.gameobjects@2.5/changelog/CHANGELOG.html)。

### Free Webinar: "Getting The Most Out of Unity 6"

[Free Webinar: "Getting The Most Out of Unity 6" - Unity Engine - Unity Discussions](https://discussions.unity.com/t/free-webinar-getting-the-most-out-of-unity-6/1684784)

Unityのシニアソフトウェア開発コンサルタントのRyan Thomas Warnerによる、プロジェクトをUnity 6にアップデートを検討している、Unity 6の新機能を把握したい開発者向けのウェビナーが 2025/10/03 に開催される予定です。

## Slides

## Articles

### Unity 6 で追加された Roslyn Analyzer 関連機能

[Unity 6 で追加された Roslyn Analyzer 関連機能 - やらなイカ？](https://www.nowsprinting.com/entry/2025/09/22/080000)

Unity 6からドキュメントに明記されるようになったRoslyn Analyzerの機能としてAdditional filesの扱いや、Report analyzer diagnosticsによるAnalyzerの処理時間計測、Unity上でのRoslyn global config fileの扱いについて紹介しています。

### UnityのBRPにおけるスフィアトレーシングを用いたレイマーチングのTips

[UnityのBRPにおけるスフィアトレーシングを用いたレイマーチングのTips](https://zenn.dev/koturn/articles/koturn-unity-sphere-tracing-tips)

UnityのBRP（Built-in Render Pipeline）でスフィアトレーシングによるレイマーチングシェーダーを実装する際の詳細な技術Tipsをまとめています。

基本実装からオブジェクト/ワールド空間の切り替え、SPS-I対応、ForwardBase/ForwardAdd/ShadowCasterの各レンダリングパス対応、パフォーマンスの最適化などそれぞれ解説しています。
---
type: unity-weekly
title: >-
  SYNC 2022、Unity toolsets and workflows for technical artists、XR、Block Shader -
  Unity Weekly 092
description: >-
  2022/10/24週のUnity Weeklyです。SYNC
  2022、テクニカルアーティストのためのUnityツールセットとワークフローに関するeBook、XRフォーカス、Block
  Shaderリリースなどについて取り上げました。
pubDatetime: 2022-10-23T06:00:00.000Z
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

## SYNC 2022

[SYNC 2022](https://events.unity3d.jp/sync/)

Unity主催の大規模カンファレンスが今週火曜日と水曜日（2022/10/25と10/26）で開催されます。



SYNC 2022はオンライン開催で、無料で視聴できます。参加申込は[こちら](https://meetup.unity3d.jp/jp/events/1370)から行えます。

### テクニカルアーティストのための Unity ツールセットとワークフローを網羅したガイドのご紹介

[テクニカルアーティストのための Unity ツールセットとワークフローを網羅したガイドのご紹介 | Unity Blog](https://blog.unity.com/ja/technology/complete-overview-of-unity-toolsets-workflows-for-technical-artists)

主にテクニカルアーティスト向けのUnityが提供するツールセットとワークフローを解説する[eBook「Unity for Technical Artist」がリリース](https://resources.unity.com/games/unity-for-technical-artists-key-toolsets-and-workflows)されました。



eBookではUnityが提供するツールの中で、特にテクニカルアーティストが知っておくと有用なツール・ワークフローを、レンダーパイプライン・シェーダー・ライト・ワールドビルディング・アニメーション・カットシーンやシネマ・VFX・スクリプティング・プロファイリングとデバッグ・2Dゲーム開発の観点で、それぞれ網羅的に紹介しています。

### Games Focus：XR が拡張するあなたの現実

[Games Focus：XR が拡張するあなたの現実 | Unity Blog](https://blog.unity.com/ja/technology/games-focus-extending-your-reality-with-xr)

UnityのXRサポートについて、主にUnityがサポートするハードウェア・OpenXR・ARFoundationのアップデート・XRI（XR Interaction Toolkit）を紹介しています。

### Block Shaders: Surface Shaders for SRPs and more (Public Demo Now Available!)

[Official - Block Shaders: Surface Shaders for SRPs and more (Public Demo Now Available!) - Unity Forum](https://forum.unity.com/threads/block-shaders-surface-shaders-for-srps-and-more-public-demo-now-available.1350497/)

SRP（Scriptable Render Pipeline）互換なSurface ShaderのBlock Shaderのアルファ版リリースが発表されました。



Block Shaderはシェーダーのパスとステージを定義する「Block Templates」から作成でき、テンプレート内の「Customization Points」と呼ばれるブロックにユーザー独自の処理を差し込むことで既存のシェーダーの一部を上書き・拡張できます。



Block Shaderのドキュメントは[こちら](https://docs.google.com/document/d/1GAq6wCAbqLiRDaJR6zLmRlRg4AFIZkli49bM80cN09s/edit)から、ロードマップは[こちら](https://portal.productboard.com/8ufdwj59ehtmsvxenjumxo82/c/1375-block-shaders-surface-shaders-replacement)からそれぞれアクセスできます。

## Articles

### UniVRM 利用アプリケーションの VRM 1.0 への移行について

[UniVRM 利用アプリケーションの VRM 1.0 への移行について - Speaker Deck](https://speakerdeck.com/santarh/univrm-li-yong-apurikesiyonno-vrm-1-dot-0-henoyi-xing-nituite)

VRM1.0の規格やUniVRMで構築されたアプリケーションをVRM 1.0に対応する上で必要な対応を、UniVRM 0.x から UniVRM 1.0 での機能の差分を紹介しつつ解説しています。

### 「OggVorbisEncoder」を用いてWavファイルからOggファイルに変換を行う

[【Unity】「OggVorbisEncoder」を用いてWavファイルからOggファイルに変換を行う - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2022/10/20/120000)

Unityのエディタ拡張でWavファイルを自前で解析して、[OggVorbisEncoder](https://github.com/SteveLillis/.NET-Ogg-Vorbis-Encoder)を用いてOggファイルに変換する方法について紹介しています。

### wavデータをプログラムを使用せずにループさせてみる

[【Unity】wavデータをプログラムを使用せずにループさせてみる – 株式会社ロジカルビート](https://logicalbeat.jp/blog/11023/)

Wavデータのsmplチャンクと、このチャンクをデータに付与してUnityで設定のみで音源再生をループする方法について紹介しています。

### Rendering A Card In URP

[Rendering A Card In URP 🖌️ | Dawn Of The Cards - Fronkon Games](https://fronkongames.github.io/Dawn-Of-The-Cards/article/rendering_a_card/)

URP（Universal Render Pipeline）を用いてカードをレンダリングするカスタムシェーダーを作成する方法を紹介しています。

### Photon Fusion for UnityのWebGLビルドを1週間ゲームジャムで試して得た知見

[Photon Fusion for UnityのWebGLビルドを1週間ゲームジャムで試して得た知見 - Qiita](https://qiita.com/nimushiki/items/bf5670762624cb4c8ec3)

Photon FusionとWebGLの相性やPhoton Fusionの共有モードにおける権限管理についてそれぞれ紹介しています。

## Repositories

### Compute Shader Based Unity PathTracer

[Pjbomb2/Realtime-Compute-Shader-Unity-PathTracer: A passion projects that has been going on for awhile, finally at a place where I feel comfortable tentatively uploading it to Github for others](https://github.com/Pjbomb2/Realtime-Compute-Shader-Unity-PathTracer)

Compute Shaderを用いたUnityのパストレーサー実装。

### GpuTrail

[fuqunaga/GpuTrail: ComputeShader implementation trails for Unity](https://github.com/fuqunaga/GpuTrail)

Compute Shaderを用いたUnityのトレイル実装。

### tilde

[grahamboree/tilde: A remote developer console for Unity](https://github.com/grahamboree/tilde)

アプリケーションに対してリモートマシンから接続してWebベースのリモートコンソールからゲームの操作コマンドを送信できるパッケージ。

### LocalStorage

[dre0dru/LocalStorage: Configurable generic class for managing local data saved on device.](https://github.com/dre0dru/LocalStorage)

ローカルに任意の型のインスタンスを保存するためのライブラリ。



保存場所をファイルや PlayerPrefs から選択できたり、データの暗号化、シリアライザーのカスタマイズ、UniTaskでの非同期APIもサポートしている。

### Tweening

[zigurous/unity-tweening-system: 🌪️🌀 An animation system for tweening object properties in Unity.](https://github.com/zigurous/unity-tweening-system)

軽量、型安全、最適化済み、メモリ効率のよいTweenライブラリ。

### Unity Build System

[kwnetzwelt/unity-build-system](https://github.com/kwnetzwelt/unity-build-system)

複数のビルドターゲットを追加したり、それらのビルドターゲットに対してバッチビルドを提供するビルドシステム。ビルドプロセスに対してカスタムスクリプトによって前後処理を差し込むこともできる。

### EasyNoise

[AndreaDev3D/EasyNoise: A free unity noise library](https://github.com/AndreaDev3D/EasyNoise)

Unityで利用できるノイズライブラリ。




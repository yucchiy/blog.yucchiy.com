---
type: "unity-weekly"
title: "Unity Weekly 148"
description: "2023/11/20週のUnity Weeklyです。Unite 2023、Unity 6、Unity 2023.2、New Shader Graph Samplesなどについてまとめています。"
tags: ["Unity Weekly","Unity"]
date: "2023-11-20T00:00:01"

---

## Unity Officials

### Unite 2023：ゲーム開発へのコミットメントの深化

[Unite 2023：ゲーム開発へのコミットメントの深化 | Unity Blog](https://blog.unity.com/ja/news/unite-2023-keynote-game-development-unity-6)

Unite 2023の、主にキーノートであった発表をまとめています。
キーノート内で、2024年にリリースされる次の長期サポート（LTS）がUnity 6であることが明かされました。

[Synty Studios](https://assetstore.unity.com/publishers/5217?locale=ja-JP)のアセットを用いて構築されたUnity6向けのスタイライズドな環境デモ「Fantasy Kingdom」やWebGPUサポートについての発表、[StickeyLock Studios](https://www.youtube.com/watch?v=Plb5LlABHhk)によるMultiplayの導入事例、[Safe VoiceとModeration](https://create.unity.com/safety-beta-sign-up)のオープンベータ開始、[Unity Cloud](https://unity.com/ja/products/unity-cloud)の早期アクセス開始、Unity MuseやSantisなどのAI周りの紹介と[Unity Muse](https://unity.com/ja/products/muse)の早期アクセス開始などについて紹介されています。

### Unite 2023: New Unity Industry updates unveiled 

[Unite 2023: New Unity Industry updates unveiled | Unity Blog](https://blog.unity.com/industry/unite-2023-unity-industry-updates-unveiled)

Unite2023のキーノートなどであった発表のうち、[Unity Industry](https://unity.com/products/unity-industry)に関する発表をまとめています。

[Unity Cloud早期アクセス](https://cloud.unity.com/)、Unity DevOps、[Unity Asset Managerベータ版リリース](https://unity.com/products/asset-manager)、Pixyzプラグイン2.0、Unity Santis・Unity Muse、[Unity VisionOSベータ版リリース](https://unity.com/polyspatial-visionos-industry)などについて取り上げています。

### Unity 2023.2 Tech Stream is now available

[Unity 2023.2 Tech Stream is now available | Unity Blog](https://blog.unity.com/engine-platform/2023-2-tech-stream-now-available)

Unity 2023.2がテックストリーム（このバージョンとしての正式版の立ち位置）にリリースされました。また、Unity 6がこのバージョンのLTS（2023.3）としてリリースされることについても触れています。

Scalable renderingやSRP向けのAdaptive Probe Volumesのパフォーマンス改善、GPU LightmapperのアウトオブプレビューとLight Probesのベイク後を操作するためのAPI、HDRPとVFX Graphの機能改善、Shader GraphのUIインテグレーション、パフォーマンス改善、Meta Quest 3サポート、XR Interaction Toolkitのアップデート、MultiplayerのWebGLサポートやネットワークシミュレーションツールの導入、UI Toolkitの機能拡張（Runtime BindingsやUXML Serializationなど）、オーディオに`Audio Random Container`の追加、Profilerに[Highlights module](https://docs.unity3d.com/2023.2/Documentation/Manual/ProfilerHighlights.html)の追加など、このバージョンに入った機能の一部を紹介しています。

### New Shader Graph Node Reference Samples

[New Shader Graph Node Reference Samples | Unity Blog](https://blog.unity.com/engine-platform/new-shader-graph-node-reference-samples)

Shader Graphの新しいサンプルがリリースされました。

このサンプルには140を超えるアセットコレクションが含まれていて、また学習やプロジェクト導入のためにサンプル内のノードにはコメントも記載されています。

また、このサンプルのインストール方法についても触れています。

### Responsible AI and enhanced model training at Unity

[Responsible AI and enhanced model training at Unity | Unity Blog](https://blog.unity.com/engine-platform/responsible-ai-and-enhanced-model-training)

Unity Muse（エディターから利用できる生成AI）について、Museのモデルの学習方法や学習に使ったアセットの安全性、早期アクセスで利用できるテクスチャとスプライトの2つのモデルについての解説しています。

## Articles

### Input Systemのデバイス管理の仕組み

[【Unity】Input Systemのデバイス管理の仕組み | ねこじゃらシティ](https://nekojara.city/unity-input-system-device)

InputSystemの入力デバイスの管理の仕組みから自作の入力デバイスの作成から登録と削除、ローカルマルチプレイなど同じゲームに複数のデバイスを繋いだときの制御、デバイスの入力と入力を受け取るコールバックの扱い、デバイスのスクリプトからの操作についてそれぞれ解説しています。

### そろそろShaderをやるパート91 -URP編- GPU Instancingで大量に草を生やす

[そろそろShaderをやるパート91 -URP編- GPU Instancingで大量に草を生やす](https://zenn.dev/kento_o/articles/4b9166e1ed5fba)

大量の草ポリゴンの描画を行うためのGPU Instancingの利用方法やDrawMeshInstancedの利用方法などについて紹介しています。

### UI Toolkitにて入れ子構造となっているデータをTreeViewで表現する方法(ファイルとディレクトリのような入れ子構造)

[【Unity】UI Toolkitにて入れ子構造となっているデータをTreeViewで表現する方法(ファイルとディレクトリのような入れ子構造) - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2023/11/16/120000)

UI ToolkitでTreeViewを利用する方法について紹介しています。

### USS TransitionでVisual Elementのプロパティが変化した時にアニメーションさせる

[【Unity】【UI Toolkit】USS TransitionでVisual Elementのプロパティが変化した時にアニメーションさせる - LIGHT11](https://light11.hatenadiary.com/entry/2023/11/14/192140)

USS Transitionを用いたUIアニメーションの設定方法について紹介しています。

### SRP Batcherについてまとめる

[SRP Batcherについてまとめる](https://zenn.dev/tuu33/articles/e480af6619e5ad)

SRP Batcherの概要から注意点、対応させるためのシェーダーの書き方、バッチングか効いているかの確認方法についてまとめています。

## Repositories

### Cathode Retro

[DeadlyRedCube/Cathode-Retro: A collection of shaders to emulate the display of an NTSC signal through a CRT TV](https://github.com/DeadlyRedCube/Cathode-Retro)

カラーNTSCテレビ信号の特性やアーティファクト、ブラウン管テレビの視覚的な外観を再現するシェーダーのコレクション。

### DotRecast.Recast

[ikpil/DotRecast: DotRecast - a port of Recast & Detour, navigation mesh toolset for games, Unity3D, servers, C#](https://github.com/ikpil/DotRecast?)

ゲーム向けのナビゲーションメッシュツールセット。

### SplatVFX

[keijiro/SplatVFX: 3D Gaussian Splatting with Unity VFX Graph](https://github.com/keijiro/SplatVFX)

VFX Graphを使った3D Gaussian Splatting実装。

### Burst Wig

[keijiro/BurstWig: "Wig" effect with the C# Job System and the Burst compiler](https://github.com/keijiro/BurstWig)

著者の開発するウィッグエフェクト「[KvantWig](https://github.com/keijiro/KvantWig)」の、JobSystem・Burst・VFX Graphを用いた再実装。

### Trove

[PhilSA/Trove: Collection of tools for Unity DOTS. Including Utility AI, Tweens, attributes and buffs/modifiers, etc...](https://github.com/PhilSA/Trove)

AIユーティリティやTweenなどを含んだUnity DOTS向けのツールコレクション。
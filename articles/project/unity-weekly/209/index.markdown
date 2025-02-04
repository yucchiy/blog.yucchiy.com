---
type: "unity-weekly"
title: "Unity Weekly 209"
description: "2025/02/03週のUnity Weeklyです。ECS、タイルベースレンダリング、ライブ照明システム、MagicOnion v7などについて取り上げています。"
tags: ["Unity Weekly", "Unity"]
date: "2025-02-03T00:00:01"
---

## Articles

### Unity 6 + ECS 1.3 で Boids シミュレーションを書き直してみた

[Unity 6 + ECS 1.3 で Boids シミュレーションを書き直してみた - 凹みTips](https://tips.hecomi.com/entry/2025/01/30/235143)

Unity 6 における ECSベースな実装やオーサリングの基本からBoidsアルゴリズムをECS上で実装する方法、ベイク済みのパラメータをリアルタイムに更新する手法やBoidsアルゴリズムの高速化手法の検討など、ECSを用いた実装について詳細を解説しています。

### シェーダー最適化入門　第２回目　「タイルベースレンダリングのGPUとは？」

[シェーダー最適化入門　第２回目　「タイルベースレンダリングのGPUとは？」 - CORETECH ENGINEER BLOG](https://blog.sge-coretech.com/entry/2025/01/27/145242)

スマートフォン向けGPUで主流のタイルベースレンダリングによる描画の最適化の仕組みからレンダーバッファのロード・ストアを減らすためのフレームバッファフェッチとVulkan・Metalなどの低レベルAPIとの関係性、Unity上でこれを活用して描画を最適化するための手法について、Render Graphを用いる場合と用いない場合でそれぞれ解説しています。

### 星街すいせいや宝鐘マリンのライブを彩った照明システム

[星街すいせいや宝鐘マリンのライブを彩った照明システム｜カバー株式会社　公式note](https://note.cover-corp.com/n/nacc86fff5c36)

VTuberのライブにおける照明システムのために取り組んだ照明システムについて解説しています。

独自のライトコンポーネントによるDMXプロトコルのサポートやMirrorを用いた複数PC間のライト情報の同期、ライトのシェーダー実装についての説明や、影の表現として実際に利用したシャドウマップやレイトレーシングによる影表現など、それぞれ解説しています。

### MemoryPackでゲームのリプレイデータを作った話

[MemoryPackでゲームのリプレイデータを作った話 - Mirrativ Tech Blog](https://tech.mirrativ.stream/entry/2025/01/31/100000)

MemoryPackを用いたリプレイログの実装方法から、リプレイ機能やゲームの途中復帰などの活用方法を紹介しています。

### [Unity][SRP]レンダーパイプラインを自作する その1

[[Unity][SRP]レンダーパイプラインを自作する その1](https://zenn.dev/nithink/articles/3810a563f2e2d6)

Unity 6におけるSRP（Scriptable Render Pipeline）を用いたレンダーパイプラインの自作のための前提知識や参考資料、実際にコーディングする際のBlitterクラスやRTHandlesの使い方、uGUIの描画やNRP（Native Render Pass）対応などについて解説しています。

### Unity OpenXR: Android XR を触ってみた

[Unity OpenXR: Android XR を触ってみた｜アップフロンティア株式会社](https://note.com/upfrontier/n/n8b2d4bdb41a9)

Unity OpenXRによるAndroid XRプロジェクトのセットアップ方法について紹介しています。

### UnityでmacOSのファイルパーミッションを取得する

[UnityでmacOSのファイルパーミッションを取得する](https://zenn.dev/shiena/articles/unity-mac-stat)

`stat(2)` システムコールを直接叩くことで、Unityアプリ上でmacOSのファイルパーミッションを取得する方法について紹介しています。

### Asset Managerで実現！プロジェクト間でアセット共有ライフ

[Asset Managerで実現！プロジェクト間でアセット共有ライフ【Unity Cloud入門】 - 渋谷ほととぎす通信](https://shibuya24.info/entry/unity-cloud-assetmanager)

Unity Cloud上で提供される「Asset Manager」を用いたアセット管理の基本的な手順について紹介しています。

### MonoBehaviour ライフサイクルの実行条件

[【Unity 6 対応】MonoBehaviour ライフサイクルの実行条件 #Unity6 - Qiita](https://qiita.com/sator_imaging/items/70e1db541605f6cc49e8)

`MonoBehaviour` の `Awake` や `OnDestroy` が実行される条件を、いくつかのケースに分けて紹介しています。

また、`Awake` が実行されないケースを検知する方法についても言及しています。

### 大規模VR空間でのデバッグにGizmosを活用しよう

[大規模VR空間でのデバッグにGizmosを活用しよう](https://zenn.dev/ryuryu_game/articles/058366004254eb)

シーンビュー上で図形やテキストを描画できる `Gizmoz` の基本的から活用事例、Gizmozを用いたデバッグ機能実装のヒントを紹介しています。

また、物理挙動の可視化を行う標準機能である「Physics Debug Visualization」や、Meta Horizon向けのDebugGizmozの活用などについても言及しています。

### シリアライズされた情報を維持しつつコンポーネント差し替えをコード上から実行する方法 

[【Unity】シリアライズされた情報を維持しつつコンポーネント差し替えをコード上から実行する方法 - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2025/01/23/120000)

シリアライズされたフィールドの情報を維持しつつ、そのスクリプトのみの切り替えについて、これをコード上で実現する方法について紹介しています。

### 知ってるとちょっと便利な「Constraint」の機能

[知ってるとちょっと便利な「Constraint」の機能](https://zenn.dev/happy_elements/articles/22cbed967b2bfa)

Unity 2018から追加された、 `ParentConstraint` や `LookAtConstraint` をはじめとした「Constraint」コンポーネントについて、その機能概要から活用事例を紹介しています。

### InterleavedGradientNoiseでディザ抜きを作ってみた

[【Unity】InterleavedGradientNoiseでディザ抜きを作ってみた #Shader - Qiita](https://qiita.com/ayaha401/items/66cdae83ff24ac5269bc)

InterleavedGradientNoise ベースのディザ抜きの実装と、一般的なディザ抜きとの違いについて紹介しています。

### そろそろ始めないか？Playable API入門

[そろそろ始めないか？Playable API入門【Unity】 - 渋谷ほととぎす通信](https://shibuya24.info/entry/unity-playable-start)

Playable APIの概要から簡単な Playable の実装について紹介しています。

### オブジェクトをエディタ専用(ビルド時は自動で消える)に出来る、EditorOnlyタグの使い方と注意点

[オブジェクトをエディタ専用(ビルド時は自動で消える)に出来る、EditorOnlyタグの使い方と注意点【Unity】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/Tag_EditorOnly)

エディター上でのみ存在し、アプリをビルドした際にオブジェクトを消す事のできる `EditorOnly` タグについての紹介と利用する際の注意点、開発時ビルドでのみ利用したい（リリースビルドでは消したい）処理に利用できるシンボルについて紹介しています。

### ReactアプリでFigmaデザインからUnityゲームを起動

[ReactアプリでFigmaデザインからUnityゲームを起動](https://zenn.dev/dsgarage/articles/0175bc0a8c8144)

Figmaのデザインから書き出されたReact Nativeのアプリに対して、UaaL（Unity as a Library）という形でUnityを組み込み、ブリッジコードを介して双方向に通信する方法を紹介しています。

## Repositories

### MagicOnion 7.0.0

[Release 7.0.0 · Cysharp/MagicOnion](https://github.com/Cysharp/MagicOnion/releases/tag/7.0.0)

.NETプラットフォーム向け双方向リアルタイム通信フレームワーク「[MagicOnion](https://github.com/Cysharp/MagicOnion)」の v7.0.0 がリリースされました。

このリリースでは、グループ関連の刷新と組み込みハートビートの追加、MessagePack v3などの対応が含まれており、Unityクライアント側も自動生成がSource Generatorベースに置き換わりました。

また、このリリースに合わせてドキュメントページがREADMEから[専用のページ](https://cysharp.github.io/MagicOnion/ja/)に移行され、日本語版のドキュメントも提供されるようになりました。
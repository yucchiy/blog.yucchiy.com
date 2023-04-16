---
type: "unity-weekly"
title: "Unity Weekly 117"
description: "2023/04/17週のUnity Weeklyです。Unity Physics、GDC 2023のUnityセッション日本語吹き替え、Meshクラスなどについてまとめています。"
tags: ["Unity Weekly","Unity"]
date: "2023-04-17T00:00:01"

---

## Unity Officials

### Motors in Unity Physics 

[Motors in Unity Physics | Unity Blog](https://blog.unity.com/engine-platform/motors-in-unity-physics)

Unity PhysicsでサポートされているMotorsについて、その機能の概要からビルドイン

また、今後のUnity Physicsのワークフローの改善について、Motors含め言及しています。


### GDC 2023 Unityセッション Recap & 日本語吹き替え

GDC 2023のいくつかのUnityセッションが、4/14 ~ 4/24にかけて日本語吹き替え付きでUnity Learning Materialsに公開されます。また、Unityアドボケイトメンバーによるによる解説動画も合わせて公開されます。

- 4/14: [最新ロードマップ 2023 | Unity Learning Materials](https://learning.unity3d.jp/9656/)
- 4/17: [GDC 2023 ハイライト！注目の講演を一挙紹介 | Unity Learning Materials](https://learning.unity3d.jp/9676/)
- 4/18:  [Ziva VFX で目指す映画クオリティのキャラクターシミュレーション | Unity Learning Materials](https://learning.unity3d.jp/9679/)
- 4/19: [HDRPで作る、進化した水表現 | Unity Learning Materials](https://learning.unity3d.jp/9684/)
- 4/20: [新しくなった URP サンプルシーン 徹底解剖！ | Unity Learning Materials](https://learning.unity3d.jp/9687/)
- 4/24: [アドボケイトおすすめ！ GDC2023 Unity講演 吹き替え版3本を解説 | Unity Learning Materials](https://learning.unity3d.jp/9691/)


### 太いラインを描きたい！Meshクラス入門・補足動画

[【Unity】太いラインを描きたい！Meshクラス入門・補足動画](https://youtu.be/5cimvhOgzSk)

ライン描画をMesh APIで行うに際して、ラインを太くすることが技術的に難しいことについての補足と、低解像度で描画したラインを引き伸ばすことで太いラインを表現する妥協案についても触れています。


## Unity Repositories

### Release 1.3.1 · Unity-Technologies/com.unity.netcode.gameobjects

[Release 1.3.1 · Unity-Technologies/com.unity.netcode.gameobjects](https://github.com/Unity-Technologies/com.unity.netcode.gameobjects/releases/tag/ngo/1.3.1)

Netcode for GameObjectsのv1.3.1が公開されています。

破損したパケットの検出と適切な処理の追加やNetwork prefabsがNetworkManager間で共有可能なようにScriptableObjectsへ保存されるよう変更、 `NetworkAnimator` のいくつかの不具合が修正されています。


## Articles

### UnityとPythonを連携する

[UnityとPythonを連携する](https://zenn.dev/shiena/articles/unity-python)

[Python.NET](http://Python.NET) とPython Embeddable Packageを用いて、UnityアプリにPythonランタイムを埋め込んでPythonを動作させる方法について紹介しています。


### Mechanics and tricks from Platformers applied to Endless Runners to improve experience

[Mechanics and tricks from Platformers applied to Endless Runners to improve experience](https://arielcoppes.dev/2023/04/10/platformer_techniques_in_endless_runner.html)

横スクロールな2Dゲームのキャラクター挙動の体験を向上させるためのテクニックとして、とくにジャンプ挙動を実装や動画を交えて紹介しています。


### 高速フーリエ変換でやるガウシアンブラーとConvolution Bloom(レンズフレア)

[【Unity】高速フーリエ変換でやるガウシアンブラーとConvolution Bloom(レンズフレア) [URP] - Qiita](https://qiita.com/Red_Black_GPGPU/items/5cb479f8a30f2065d543)

高速フーリエ変換を用いたガウシアンブラー実装についてその原理の解説と、応用としてConvolutions Bloom（レンズフレア）を実装する方法の紹介、複数点のサンプリングブラーと高速フーリエ変換のブラーの速度比較を行っています。


### ゲームで使えるUI素材が売っている場所と、(意外と見つからない)オススメの日本のゲームっぽいUI素材

[ゲームで使えるUI素材が売っている場所と、(意外と見つからない)オススメの日本のゲームっぽいUI素材【ゲーム素材】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/Japanese_game-like_UI_materials)

ゲームで利用できるUI素材が購入できるサービス・サイトについてそれぞれまとめています。


### Decorator design pattern for dynamic game stats

[Decorator design pattern for dynamic game stats](https://pavcreations.com/decorator-design-pattern-for-dynamic-game-stats/)

ゲームでプレイヤーに対して武器や防具を装備した際のステータスへの影響のあたえ方の設計として、「Decorator」パターンを用いてこの管理をおこなう方法を解説しています。


### VOICEVOXのAudioQueryを利用した音声合成に対する非音声ベースのLipSyncシステム

[VOICEVOXのAudioQueryを利用した音声合成に対する非音声ベースのLipSyncシステム](https://zenn.dev/mochineko/articles/d14278b45240da)

VOICEVOXのAudioQueryで得られる音声の解析データのフォーマットとUniVRMでVRMアバターに対してLipSyncを行うための実装について解説しています。


### UnityのPlayAssetDelivaryで暗号化されたアセバンを扱う方法

[UnityのPlayAssetDelivaryで暗号化されたアセバンを扱う方法](https://zenn.dev/waz/articles/b115e491141f5e)

AndroidのPlay Storeが提供するPlayAssetDeliveryのアセットに対して、独自の暗号化処理を差し込む方法を紹介しています。


### WebGLで解像度を変更する

[【Unity】WebGLで解像度を変更する - Qiita](https://qiita.com/kazuki_kuriyama/items/620bdba6ef6a4dea34ea)

WebGLでCanvasへの描画解像度を変更するためのjslibの実装を紹介しています。


### Unityのアニメーションウィンドウで、保存済みカーブデータを使って生産性を上げる拡張

[Unityのアニメーションウィンドウで、保存済みカーブデータを使って生産性を上げる拡張](https://zenn.dev/happy_elements/articles/b6c3a26ba1bff7)

アニメーションウィンドウ上で、独自のアニメーションプリセットを適用するようなエディター拡張を実装するためのヒントを紹介しています。


### Unityでスクリプトからパッケージ依存を削除する方法 

[Unityでスクリプトからパッケージ依存を削除する方法 - きゅぶろぐ](https://blog.kyubuns.dev/entry/2023/04/15/134041)

ビルド時などに特定のパッケージの依存を削除する方法を、UnityEditorで用意されているAPIを利用する方法と、Unity起動前に `manifest.json` で特定行を削除する方法の2つ紹介しています。


### Unityでインタラクティブミュージックを実装 with ADX 実装編 

[Unityでインタラクティブミュージックを実装 with ADX 実装編 - Qiita](https://qiita.com/nimushiki/items/4475710c1b6b3644fb96)

CRI ADXで、ゲームの場面に応じてBGMを切り替える方法を、BGMの切り替えのフェードイン・アウトの方法含めて紹介しています。


### よく使うアセットをまとめた仮想フォルダを作れるOSS『Asset Palette』使い方まとめ 

[【Unity】よく使うアセットをまとめた仮想フォルダを作れるOSS『Asset Palette』使い方まとめ - LIGHT11](https://light11.hatenadiary.com/entry/2023/04/10/192426)

アセットのための仮想フォルダーを構築できるOSS「[Asset Palette](https://github.com/RoyTheunissen/Asset-Palette)」の紹介と、その基本的な利用方法をまとめています。


## Repositories

### Baste-RainGames/PlayerLoopInterface

[Baste-RainGames/PlayerLoopInterface](https://github.com/Baste-RainGames/PlayerLoopInterface)

UnityのPlayerLoopに独自のメソッドを差し込むためのシンプルなAPI実装。


### RoyTheunissen/Asset-Palette
[RoyTheunissen/Asset-Palette: Allows you to quickly organize assets for certain workflows, such as organizing prefabs for level design.](https://github.com/RoyTheunissen/Asset-Palette)

レベルデザイン用のプレハブを独自で管理するためのエディター拡張。
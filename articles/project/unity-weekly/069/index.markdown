---
type: "unity-weekly"
title: "Unity and .NET, what’s next? - Unity Weekly #069"
tags: ["Unity Weekly","Unity"]
date: "2022-05-22T15:00:00"

---

# Unity Official

## Unity と .NET：今後の取り組みについて

[Unity と .NET：今後の取り組みについて | Unity Blog](https://blog.unity.com/ja/technology/unity-and-net-whats-next)

Unityの.NET統合の今後の取り組みについて紹介しています。



* C#開発ワークフローの改善
    * イテレーション時間の改善
    * MSBuildへの移行
    * Burst使用時のC# IDEデバッグ体験の改善
* .NET ランタイム近代化（.NET Core CLRランタイムへの移行）
    * 初段にデスクトッププラットフォームのスタンドアロンプレイヤーを対象に、.NET CoreCLR のサポート
    * 次段にUnity エディターを .NET CoreCLR に移植
* Unity ランタイムの近代化
    * async/await プログラミングモデルの改善
    * Span活用によるメモリ割り当て・コピーの削減


この記事で紹介する内容は、GDC 2022の「[Unity and .NET, what’s next?](https://www.youtube.com/watch?v=3SBP2Gpm97k)」というセッションでも発表されています。

## OSCって何？UnityビジュアルスクリプティングでOSC通信してみよう！

[OSCって何？UnityビジュアルスクリプティングでOSC通信してみよう！ | Unity Learning Materials](https://learning.unity3d.jp/8322/)

ビジュアルスクリプティングを用いて、Unityと外部のデバイスがOpen Sound Countrol（OSC）を介して双方向に通信する方法について紹介しています。



[OscJack](https://github.com/keijiro/OscJack)というパッケージを用いて[TouchOSC](https://hexler.net/touchosc)というアプリからのOSCを受信し、Unityエディター内のGameObjectのTransformの操作や、UnityエディターからOSCを送信してM5StickC PLUSを操作を、ビジュアルスクリプティングのみで実装する方法についてそれぞれ解説しています。

## ⌘Kで瞬間検索！Unity Searchを使いこなそう！

[⌘Kで瞬間検索！Unity Searchを使いこなそう！ | Unity Learning Materials](https://learning.unity3d.jp/8321/)

Unity 2021 LTSからエディターの標準機能として使える Unity Searchの基本的な利用方法からサーチ拡張まで紹介しています。



Unity Searchのショートカット呼び出しからアセット検索や検索画面内蔵のインスペクターでアセットを直接調整する方法、高度な機能の紹介として関数を用いた特定アセットの特定のプロパティでのソート方法（動画ではプロジェクト内のテクスチャアセットをサイズでソートする方法などの紹介）や特定の条件を満たすアセット一覧の抽出方法（動画ではHealthが一定以上のキャラクターデータの抽出方法の紹介）、標準のObjectPickerをUnity Searchに切り替えるプロジェクト設定の紹介やObjectPickerを開いたときのサーチウインドウにデフォルトで入る文字列をカスタマイズする方法、Unity Searchのクエリサンプルなどの参考資料についてそれぞれ解説しています。

# Articles

## iOSネイティブプラグイン開発を完全に理解する - サンプルコードをSwiftだけで完結出来るように置き換える

[【Unity】iOSネイティブプラグイン開発を完全に理解する - サンプルコードをSwiftだけで完結出来るように置き換える - Qiita](https://qiita.com/mao_/items/07466e169d08cbeff221)

この記事の著者が以前執筆した「[iOSネイティブプラグイン開発を完全に理解する](https://qiita.com/mao_/items/07466e169d08cbeff221)」の、UnityのiOSネイティブプラグインの開発を、Swiftのソースコードのみで完結させる方法について紹介しています。



Swiftの `@_cdecl` を用いてSwift上からC互換な関数を定義し、これをC#のメソッド呼び出しにマップして呼び出すことで、SwiftのみでiOSネイティブプラグインを実装する方法と、この方法で[前述の記事](https://qiita.com/mao_/items/07466e169d08cbeff221)の実装をObj-CからSwift実装に置き換える方法を解説しています。

## Finite State Machine for AI Enemy Controller in 2D

[Finite State Machine for AI Enemy Controller in 2D - Pav Creations](https://pavcreations.com/finite-state-machine-for-ai-enemy-controller-in-2d/)

Finite State Machine（FSM）によって敵AIをモデリングする方法と、ScriptableObjectベースなステートや遷移などがアセット化可能なFSMの実装方法、実装したFSMによって2Dプラットフォームなゲームの敵AIを実装する方法についてそれぞれ解説しています。

## Unity上で外部デバイスとの同期処理を行うための考察

[Unity上で外部デバイスとの同期処理を行うための考察(デバイスセットアップ編) - Synamon’s Engineer blog](https://synamon.hatenablog.com/entry/2022/04/27/183000)

[Unity上で外部デバイスとの同期処理を行うための考察(タイムコード読み取り編) - Synamon’s Engineer blog](https://synamon.hatenablog.com/entry/2022/05/18/000000)

デバイス間での同期処理を行うためのタイムコードについての紹介と、Unity上でマイク入力を受け付け、タイムコードをデコードすることで、外部デバイス（記事内ではTimeCode Generatorというアプリ）の時間とUnityエディターで動くアプリケーションの時間を同期する方法についてそれぞれ解説しています。

## URPで出来るだけシンプルなコードでPostProcess【SwapBuffer編】

[URPで出来るだけシンプルなコードでPostProcess【SwapBuffer編】 - Qiita](https://qiita.com/ScreenPocket/items/b45100d6262c9b005a14)

Universal Render Pipeline（URP） 12で実装されたSwapBufferによって、画面全体の描画結果を格納したレンダーテクスチャの管理やポストプロセッシングが簡単にかけるようになった件についての言及と、この機能を用いた画面全体のモノクロ化処理の実装方法について解説しています。

## 効率的なスクロールビューを実装するためのOSS『Loop Scroll Rect』使い方まとめ

[効率的なスクロールビューを実装するためのOSS『Loop Scroll Rect』使い方まとめ - LIGHT11](https://light11.hatenadiary.com/entry/2022/05/16/201949)

Scroll Rectの再利用などの実装によって、大量の要素があっても効率的なスクロールビューの実装をサポートする「[Loop Scroll Rect](https://github.com/qiankanglai/LoopScrollRect)」の紹介とこの使い方についてまとめています。

## Unity as a Library のハマりポイント集

[Unity as a Library のハマりポイント集 - Qiita](https://qiita.com/warapuri/items/1353c60eb615b4974e88)

iOSアプリ開発で、Unity as a LibraryによってUnityが出力したライブラリを使う際（この記事では Unity + SwiftUIによるアプリ開発）のハマりポイントについてQ&A方式で紹介しています。

## URP対応の2Dプロジェクトを作成する方法と既存2DプロジェクトをUPRに移行する方法【Unity】【URP】

[URP対応の2Dプロジェクトを作成する方法と既存2DプロジェクトをUPRに移行する方法【Unity】【URP】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/URP_2D?utm_source=feed)

新規で作成した2DプロジェクトのレンダリングパイプラインをURPに設定する方法と、既存の（ビルトインレンダーパイプラインで実装された）2DプロジェクトをURPに移行するための「Convert Built-in to 2D（URP）」というツールの使い方についてそれぞれ紹介しています。


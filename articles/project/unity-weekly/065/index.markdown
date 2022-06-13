---
type: "unity-weekly"
title: "Lua、UI Toolkit、Shader Graphでポストエフェクト、Metatex/Metamesh、async/await、Rider 2022.1 - Unity Weekly #065"
date: "2022-04-25T08:00:00+09:00"
draft: false
tags: ["Unity", "Unity Weekly"]

---

# Unity Official

## Luaと自作ビューアで作り込んだ『ヘブンバーンズレッド』の裏側──Unityの拡張性を活かすWright Flyer Studiosの開発メソッド

[Luaと自作ビューアで作り込んだ『ヘブンバーンズレッド』の裏側──Unityの拡張性を活かすWright Flyer Studiosの開発メソッド – Unity for Pro](https://forpro.unity3d.jp/case_study/wright-flyer-studios/)

Wright Flyer Studioが提供する「[ヘブンバーンズレッド](https://heaven-burns-red.com/)」についての開発者インタビュー記事です。

本ゲームのプロトタイプ開発とUnity採用した理由としての拡張性の高さ、少ないデータ量でバリエーションを出すためのマルチシーン利用とフィールド編集ツール、ゲームシステム構築を支えるLuaとイテレーション高速化のための自作ビューワーなどについてそれぞれ解説しています。

## UI ToolKitを導入して効率よくUIを構築する

[UI ToolKitを導入して効率よくUIを構築する – Unity for Pro](https://forpro.unity3d.jp/unity_pro_tips/2022/04/21/3629/)

UI Toolkitを用いたUI構築についてuGUIでのUI実装と比較しつつ紹介しています。

UI ToolkitがuGUIと比べてどのように違うのか、ウェブ（HTMLとCSS）でのUI構築を参照しつつ説明し、またUI Toolkitを導入するメリットとデメリットをuGUIによる構築と比較しつつ紹介しています。

また、UI Toolkitを用いてどのようにUIを構築するのかを実装を踏まえながら紹介しつつ、uGUIの構築フローと比較しています。

UI ToolkitとuGUIを共存させる方法についても言及しています。

## Unityとシェーダーグラフで簡単なポストエフェクトを作ってみよう！

[Unityとシェーダーグラフで簡単なポストエフェクトを作ってみよう！（チュートリアル動画 #1） - YouTube](https://www.youtube.com/watch?v=AQGgwgo51lo)

[Unityとシェーダーグラフで凝ったポストエフェクトを作る！（チュートリアル動画 #2） - YouTube](https://www.youtube.com/watch?v=Ylq2y6Qez3s)

[Unityとビジュアルスクリプトを使ってポストエフェクトを組み込んでみる！（チュートリアル動画 #3） - YouTube](https://www.youtube.com/watch?v=E_oDKQU3e94&t=758s)

簡単なポストエフェクトをシェーダーグラフで実装する方法を紹介するチュートリアル動画シリーズです。

簡単なポストエフェクト実装としてネガ（入力画像を反転させる）と二値化（入力画像を白黒にする）、もう少し凝った例としてアナログテレビにあるような走査線・歪みエフェクトの実装、ポストプロセスをビジュアルスクリプティング経由で呼び出す方法についてそれぞれ解説しています。

## Unity上で素材をサクッと作成！Metatex/Metameshの紹介

[Unity上で素材をサクッと作成！Metatex/Metameshの紹介 - YouTube](https://www.youtube.com/watch?v=lemFm63bwSc)

UVCheckerやグラデーションテクスチャなどのテクスチャや、調整可能なプリミティブ形状などのメッシュをunity上で生成する[Metatex](https://github.com/keijiro/Metatex)と[Metamesh](https://github.com/keijiro/Metamesh)について紹介しています。

MetatexとMetameshを使って、エフェクト素材などを作るアイデアやパラメーターなどにも言及しています。

# Articles

## Unityの機能をawait可能にしてasync / awaitについて学ぶ

[Unityの機能をawait可能にしてasync / awaitについて学ぶ](https://zenn.dev/meson/articles/implement-awaiter-for-unity)

C#のasync/awaitの処理メカニズムを、Unityの `UnityWebRequest` や `AsyncReadManager` をAwaitableしつつ解説しています。

async/awaitのコンパイル後のコードを見ながら、非同期処理を実現するためのステートマシン `AsyncVoidMethodBuilder` 、 `Awaiter` の仕組みや `Awaiter` を自作するために必要な実装について解説しています。

また、Unityの `UnityWebRequest` （具体的には `UnityWebRequestAsyncOperation` ）や `AsyncReadManager` を Awaitableにしつつ、自作のAwaitableを実装する方法についても紹介しています。

## Mirrativでのビジュアルスクリプティング（Bolt）活用事例とテクニック

[Mirrativでのビジュアルスクリプティング（Bolt）活用事例とテクニック - Mirrativ Tech Blog](https://tech.mirrativ.stream/entry/2022/04/18/180029)

ミラティブアプリ内で遊べるランゲームのBolt活用事例について紹介しています。

Boltの特徴とゲーム開発に採用した経由、Boltを用いたゲーム開発の流れとC#・Bolt間の連携、トラブルシューティング（AOTプレビルドやUnitOption.dbの肥大化問題など）についてそれぞれ解説しています。

## URPでカメラを分けずに任意のオブジェクトにポストプロセッシングをかける

[【Unity】URPでカメラを分けずに任意のオブジェクトにポストプロセッシングをかける – 株式会社ロジカルビート](https://logicalbeat.jp/blog/10653/)

Universal Render Pipeline（URP）で追加のカメラを用意せずに、ステンシルバッファを用いて特定のオブジェクトのみにポストプロセッシングをかける方法を紹介しています。

ステンシルバッファを用いて特定のオブジェクトのみにポストプロセッシングをかける仕組みと、 `ScriptableRenderPass` を用いてステンシルバッファ描画用のパスの追加、シェーダー内でのステンシルリファレンスの記述、カスタムエフェクトの描画処理分けの方法ついてそれぞれ解説しています。

## REALITYの配信中に視聴者にメッセージを常に表示できる機能を支える技術

[REALITYの配信中に視聴者にメッセージを常に表示できる機能を支える技術｜REALITY｜note](https://note.com/reality_eng/n/n050393e31cc8)

REALITYの配信ボードを開発する際の開発環境やUXを向上させる上での実装の工夫について紹介しています。

マルチプレイテストをUnityEditor上で行うのに便利な、[ParrelSync](https://github.com/VeriorPies/ParrelSync)というアセットとこのアセットが複数のエディターを立ち上げるのデータの保存方法（特にユーザー認証情報など）やサーバー接続（同一IPからの接続になるため）の注意点の紹介、UX改善のためのドラッグ可能なuGUIコンポーネントの実装・InputFieldタップ時にOSキーボードを表示させる方法、可変サイズのInputFieldの実装方法などについて解説しています。

## Use style transitions to animate a menu with UI Toolkit

[Use style transitions to animate a menu with UI Toolkit - GameDev Resources](https://gamedev-resources.com/use-style-transitions-to-animate-a-menu/)

メニューUIのトランジションアニメーションをUI Toolkitで実装する方法について紹介しています。

USSのtransitionプロパティを用いて、メニューのホバーアニメーションやメニューコンテンツのフェードインアニメーションを実装する方法を紹介しています。

また、C#スクリプトでプロパティを操作して、メニューの各コンテンツのフェードイン時間をずらす実装についても言及しています。

## URPでレンズフレア(Lens Flare)を実装する(Unity2021.2以降利用可)

[【Unity】URPでレンズフレア(Lens Flare)を実装する(Unity2021.2以降利用可) - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2022/04/07/120000)

Unity 2021.2以降で利用できるURPのレンズフレアについて紹介しています。

レンズフレアのコンポーネントと各種パラメーターの説明と、サンプルプロジェクトのレンズフレアアセットを活用してゲーム中にレンズフレアを描画する方法を解説しています。

## TextやTextMeshProのフォントに指定した文字が含まれているか(表示できるか)

[TextやTextMeshProのフォントに指定した文字が含まれているか(表示できるか)【Unity】【uGUI】【TextMesh Pro】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/Font_HasCharacter?utm_source=feed)

uGUIでテキストを扱うText や TextMeshPro で、そのクラスが利用しているフォントに、指定した文字が含まれているかを判定する方法について紹介しています。

また、TextMeshProの場合にフォールバックを考慮して判定する方法ともし文字がない場合に追加するオプションについても言及しています。

# Other

## Rider 2022.1 is here!

[https://twitter.com/jetbrainsrider/status/1516399754850312193](https://twitter.com/jetbrainsrider/status/1516399754850312193)

Rider 2022.1がリリースされました。

Unity開発に関連する機能として、「Full-text Search in Search Everywhere」（ソリューション内のテキスト検索）や「別プロジェクトの型を自動で.asmdefに参照追加とインポート」、「.asmref編集時の補完機能」などが追加されています。

2022.1のCHANGELOGは[こちら](https://github.com/JetBrains/resharper-unity/blob/net221/CHANGELOG.md)から確認できます。
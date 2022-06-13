---
type: "unity-weekly"
title: "Burst 新機能、カメラワーク、Blurアルゴリズム - Unity Weekly #070"
tags: ["Unity Weekly","Unity"]
date: "2022-05-29T21:00:00"

---

# Unity Officials

## "[BurstCompile]" を付けるだけでUnityが爆速って本当ですか！？ Burst Direct Call など新機能紹介！

["[BurstCompile]" を付けるだけでUnityが爆速って本当ですか！？ Burst Direct Call など新機能紹介！ - YouTube](https://www.youtube.com/watch?v=5BKrdBph4DU&t=6s)

この動画ではBurstの新機能について紹介しています。



ノイズ関数を題材に、ノイズ生成メソッドをBurstでコンパイルし、そのメソッドをBurst Direct Callによって呼び出すことで、通常のメソッド呼び出しと比べてどの程度高速化するのかについて解説しています。



また、Burst Direct Call以外にも `Span<T>` 構造体対応や Intrinsics（組み込み関数）などの機能についても触れています。

# Articles

## Cinemachineを使わないお手軽なカメラワーク設計

[[Unity]Cinemachineを使わないお手軽なカメラワーク設計 - Qiita](https://qiita.com/flankids/items/0a4f70c9bfb6d20f20eb)

キャラクターを追従するカメラや２つのカメラワーク間をなめらかに切り替えるようなカメラワークを、Cinemachineを用いずに独自に実装する方法について紹介しています。



また、キャラクターを追従する際に、より自然に追いかけるような挙動をどう実現するのかについても触れています。

## 理想のスカート表現を求めて

[理想のスカート表現を求めて｜ろじっく｜note](https://note.com/logilabo/n/ndf254e670240)

VRChatアバターのスカートの、Clothコンポーネントでの物理アニメーションをよりきれいに見せるためのtipsを紹介しています。



ConstraintsのSurface Penetrationによるスカートのシルエット維持や法線編集による球判定の制御、コライダーめり込み対策とClothシミュレーションが破綻したときのリセット機構自動起動、DCCツール（Blender）とUnity間のやり取り効率化、着座時のスカート挙動改善のためのPhysBoneによる補助ボーン制御、スカートを掴むためのコライダーとPhysBoneの配置についてそれぞれ解説しています。

## Blur

[Gaussian Blur - Qiita](https://qiita.com/UWATechnology/items/9a92f3c1430d5fb5f280)

[Box Blur - Qiita](https://qiita.com/UWATechnology/items/c63032f0770bdaff2e24)

[Kawase Blur - Qiita](https://qiita.com/UWATechnology/items/4a7b6c72335a902103ba)

[Dual Blur - Qiita](https://qiita.com/UWATechnology/items/8b0eff5650d2c659c019)

画像のぼかしアルゴリズムについて４種類のそれぞれのアルゴリズムの計算方法とUnity実装について紹介しています。



また、パラメータと出力ぼかし画像との関係や、それぞれのアルゴリズムのパフォーマンスについても考察しています。

## C#からAndroid(Google Play Console)の実績を登録する

[C#からAndroid(Google Play Console)の実績を登録する - きゅぶろぐ](https://blog.kyubuns.dev/entry/2022/05/28/103853)

Google Play Games Services Publishing APIを用いて、Google Play Console上の実績の登録を自動化するための方法について紹介しています。

## CodemagicでOculus用VR Unityゲームを作って公開！

[CodemagicでOculus用VR Unityゲームを作って公開！ - Qiita](https://qiita.com/liina/items/600970102df4921c6a02)

[Codemagic](https://codemagic.io/)というCIサービスを用いて、UnityのVR向けのアプリのアプリビルドとOculus CLIを利用してストアへのアップロードを自動化する方法について解説しています。

## シリアライズ対象の値を直接編集する際の挙動をちゃんと理解する

[【Unity】【エディタ拡張】シリアライズ対象の値を直接編集する際の挙動をちゃんと理解する - LIGHT11](https://light11.hatenadiary.com/entry/2022/05/25/193411)

`SerializedObject` を用いて `MonoBehaviour` や `ScriptableObject` のシリアライズ可能な値を更新して保存する際注意点として、DirtyフラグやUndo対応などについてまとめています。

## シェーダーでひびを入れる［その1：フラグメントシェーダー編］

[【Unity】シェーダーでひびを入れる［その1：フラグメントシェーダー編］ - Qiita](https://qiita.com/masamin/items/6e2d2b9e7ff5bb373460)

テクスチャなどを用いずにシェーダーの処理のみで、モデルに「ひび」を入れるような表現を、ボロノイパターンをベースに実装する方法について紹介しています。



ボロノイパターンによる「ひび」パラメータ調整による見た目の変化や、陰影の付け方についても触れています。

## Photon Fusion for Unityの導入手順とPUN2との機能比較

[Photon Fusion for Unityの導入手順とPUN2との機能比較 - Qiita](https://qiita.com/nimushiki/items/d6fe4f0cbe0437677fa8)

Exit Games社が提供するマルチプレイヤーエンジン「Photon」の新製品「Photon Fusion」についてその概要や、物理挙動の同期などの新機能、導入方法について紹介しています。



また「PUN2」と「Fusion」について同期頻度の切り口での機能比較も行っています。

## UnityとFirebaseで出来ること2022

[UnityとFirebaseで出来ること2022](https://zenn.dev/ail/articles/e8decd584be723)

Googleの提供するモバイル向けBaaS（Backend as a Service） のFirebaseについて、そのサービスの概要から導入方法、Unityで利用できるサービスについてそれぞれ解説しています。

## Unity AndroidでApplication.targetFrameRateが効かないときに見る記事

[Unity AndroidでApplication.targetFrameRateが効かないときに見る記事 - きゅぶろぐ](https://blog.kyubuns.dev/entry/2022/05/28/115725)

Unityで制作したAndroidアプリで `Application.targetFrameRate` が効かないことがある原因として、 `QualitySettings.vSyncCount` と [Frame Pacing](https://developer.android.com/games/sdk/frame-pacing) による最適化設定についてそれぞれ紹介しています。

## TextMeshProのテキストを1文字ずつアニメーション

[TextMeshProのテキストを1文字ずつアニメーション【Unity】【DOTween】【TextMesh Pro】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/DOTweenTMPAnimator?utm_source=feed)

TextMeshProのテキストをDOTweenを用いて１文字づつアニメーションする方法について紹介しています。

## UPM のパッケージを .unitypackage にエクスポートできる「UPM Packages in .unitypackage files」紹介

[【Unity】UPM のパッケージを .unitypackage にエクスポートできる「UPM Packages in .unitypackage files」紹介 - コガネブログ](https://baba-s.hatenablog.com/entry/2022/05/26/090000?utm_source=feed)

UPM（Unity Package Manager）のパッケージを `.unitypackage` データに変換する[ needle-tools/hybrid-packages](https://github.com/needle-tools/hybrid-packages) について、その利用方法を紹介しています。

## Unityのil2cppバイナリを簡易静的解析して対策してみる

[Unityのil2cppバイナリを簡易静的解析して対策してみる](https://zenn.dev/waz/articles/02d9aa5bbda1e7)

il2cppビルドされたAndroidアプリ（apk）を、リバースエンジニアリングツールのGhidraとIl2CppInspectorを用いて簡易的に解析し、またその解析に対しての対策方法について解説しています。



記事中では、SQLCipherによって暗号化されたSQLiteのデータベースの中身を、簡易解析によって取得したデータベースのキーによって取得する方法と、対策としてキー文字列の難読化や「[Obfuscator](https://assetstore.unity.com/packages/tools/utilities/obfuscator-48919?locale=ja-JP)」というアセットを用いたコードシンボルの難読化、データベースをパスを `Application.persistentDataPath` から Androidの内部ストレージのパスに保存することで、adbで簡易的にデータベースを吸い出しにくくする方法などについて紹介しています。





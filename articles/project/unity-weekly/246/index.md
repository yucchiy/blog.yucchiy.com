---
type: unity-weekly
title: Unity Weekly 246
description: >-
  2025/11/03週のUnity
  Weeklyです。Unity6.4のAsssetDatabaseの破壊的変更、Play-to-Deviceパッケージの対応プラットフォーム拡大などを紹介しています。
pubDatetime: 2025-11-02T15:00:01.000Z
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Changes to Assetdatabase APIs when called during import

[Changes to Assetdatabase APIs when called during import - Unity Engine - Unity Discussions](https://discussions.unity.com/t/changes-to-assetdatabase-apis-when-called-during-import/1689358)

Unity 6.4で変更が行われる予定の、インポート時のAssetDatabase APIの利用の制限について紹介するディスカッションです。

ディスカッション上にリストされたAssetDatabaseのAPIは、アセットのインポート中に呼び出すと、Unity 6.3から制限されている旨の警告が表示されるように変更されました。
Unity 6.4からはこの制約がさらに厳しくなり、原則例外の送出として扱われるように変更されるとのことです。

ディスカッションでは、この対応の経緯や挙動の詳細について説明しています。

### Unity Play-to-Device Expansion - looking for developers who are interested in early access

[Unity Play-to-Device Expansion - looking for developers who are interested in early access - Unity Engine - Unity Discussions](https://discussions.unity.com/t/unity-play-to-device-expansion-looking-for-developers-who-are-interested-in-early-access/1692873)

visionOS向けに配布されていた（PolySpatial VisionOSパッケージに含まれていた）「[Play-to-Device](https://docs.unity3d.com/Packages/com.unity.polyspatial.visionos@2.4/manual/PlayToDevice.html)」が、プラットフォームを拡大して提供されることを視野に入れて動いていることをアナウンスするディスカッションです。

この取り組みは、デバイス固有の入出力の確認を主なユースケースとして注力するとのことで、次のステップとしてプロダクションレベルのプロジェクトでの検証を予定しているとのことです。
また、Unityスタッフ（ディスカッションに連絡先が記載）に連絡することで、検証に参加できるようです。

ディスカッションでは、この取り組みの詳細や注意点、機能の制約について説明しています。

## Articles

### Unity　Photon Fusion入門

- [Unity　Photon Fusion入門　前編(サンプルプロジェクト付き) #初心者 - Qiita](https://qiita.com/kig/items/07b2d5b7d03fdf9ecb93)
- [Unity　Photon Fusion入門　後編 #初心者 - Qiita](https://qiita.com/kig/items/fe93305f68720bbb3a57)

2Dマルチプレイヤーゲームの実装を題材に、Photon Fusionの設定から導入方法、「共有モード」ベースのマルチプレイのゲームの実装をコード付きで解説しています。

### Addressables のアドレスを定数として出力できるライブラリを公開しました

[Addressables のアドレスを定数として出力できるライブラリを公開しました - CORETECH ENGINEER BLOG](https://blog.sge-coretech.com/entry/2025/10/31/120324)

株式会社サイバーエージェントのコアテクが開発する、Addressablesのアドレスをコード上で扱えるように定数として書き出すライブラリ「[Address Definition Generator](https://github.com/CyberAgentGameEntertainment/AddressDefinitionGenerator)」について、
導入方法から提供する機能一覧の紹介、便利に利用するためのTipsを紹介しています。

### UnityでProduction時に含めないコードをどうやって作るか

[UnityでProduction時に含めないコードをどうやって作るか](https://zenn.dev/izm/articles/72905d206bc800)

本番向けのビルドに含めたくないコードを、Assembly DefinitionのDefinie Constraintsによって省く方法を紹介しています。

### Unity 6.3の「Rendering 3D as 2D」を試してみる

[Unity 6.3の「Rendering 3D as 2D」を試してみる #Unity3D - Qiita](https://qiita.com/RyotaMurohoshi/items/2fbd8bd07e94ab9a0ab8)

Unity 6.3から追加された、3Dオブジェクトを2D空間にレンダリングする機能について、3Dオブジェクトに2Dライトと2Dマスクの適用を検証しています。

### ランタイムで生成したテクスチャを圧縮して保存・ロードする

[【Unity】ランタイムで生成したテクスチャを圧縮して保存・ロードする - LIGHT11](https://light11.hatenadiary.com/entry/2025/10/30/201015)

事前にプラットフォームの圧縮を行ったテクスチャを、ランタイムでロードするための `Texture2D.LoadRawTextureData` の使い方について紹介しています。

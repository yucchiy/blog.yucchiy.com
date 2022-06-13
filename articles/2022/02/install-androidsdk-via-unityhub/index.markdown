---
type: "memo"
title: "UnityHub (v3) 経由でUnityが使うAndroid SDKおよびNDK、OpenJDKをインストールする"
date: "2022-02-23T09:00:00+09:00"
draft: false
tags: ["Android", "Unity", "Unity Hub"]

---

UnityでAndroidビルドを行う場合、最近の（確か 2019以降）UnityとUnityHubでは、Unityをインストール時に追加モジュールとしてAndroid SDKとNDK、OpenJDKをインストールすることができます。

UnityHub v3を利用している場合、「Installs」を選択してモジュールをインストールしたいUnityバージョンの右上の歯車ボタンをクリックすると、下図のように「Add modules」が表示されるのでクリックします。

![「Add modules」は、「Installs」画面で右上の歯車ボタンをクリックするとあらわれる。](./01.png)


すると、下図のようにモジュールのインストール画面が出てくるので、「Android Build Support」の「Android SDK & NDK Tools」にチェックを入れて「Install」ボタンを押すとAndroid SDKとNDKがインストールされます。「OpenJDK」もインストールしておくと適切なJavaも自動でインストールしてくれます。

![モジュールインストールポップアップ](./03.png)


また、モジュールインストール後に「Preferences > External Tools」のAndroidのビルド設定を自動で行ってくれます。

下図のように、「XXX installed with Unity (recommended)」にチェックが入っていれば、追加モジュールがそのUnityで利用されています。

![「Preference > External Tools」のAndroid設定項目](./02.png)

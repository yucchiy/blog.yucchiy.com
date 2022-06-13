---
type: "memo"
title: "UnityがインストールしたAndroid SDKをそのまま使う"
date: "2022-02-23T09:00:00+09:00"
draft: false
tags: ["Android", "Unity", "Unity Hub"]

---

Unity Hubを用いると、Unityで利用するAndroid SDKをかんたんにインストールできます。

[UnityHub (v3) 経由でUnityが使うAndroid SDKおよびNDK、OpenJDKをインストールする](https://blog.yucchiy.com/2022/02/install-androidsdk-via-unityhub/) 

UnityでAndroidアプリを実機でビルドすると、デバッグ実行する際に[adb](https://developer.android.com/studio/command-line/adb)（Android Debug Bridge）やビルドしたapkの内容を確認するために[aapt](https://developer.android.com/studio/command-line/aapt2)（Android Asset Packaging Tool）などのコマンドラインツールが使いたいときがあります。

adbやaaptなどのツールはAndroid SDKに内包されているのでAndroid SDKをインストールする必要があります。

「Android Unity adb」などで調べると、たまにAndroid SDKを自分でインストールする記事が出てきますが、UnityがインストールしたAndroid SDKをそのまま使えます。（昔のUnityではAndroid SDKを追加インストールする機能がなかったので仕方がないのですが）

Android SDKを自分でインストールために、あわせてJavaのインストールなどもあり地味に大変なので、Unityをインストールしている場合は、**UnityのインストールしたAndroid SDKを利用するのが楽**です。

UnityがインストールしたAndroid SDKは、下記のパスにインストールされます。 `{UNITY_VERSION}` にはUnityのバージョン文字列が入ります。（たとえば `2019.4.11f1`）　

```
# Mac
/Applications/Unity/Hub/Editor/{UNITY_VERSION}/PlaybackEngines/AndroidPlayer/SDK

# Windows
C:\Program Files\Unity\Hub\Editor\{UNITY_VERSION}\Editor\Data\PlaybackEngines\AndroidPlayer\SDK
```

先程紹介したadbおよびaaptは下記のパスに入っています。`{BUILD_TOOL_VERSION}`はインストールしたUnityのバージョンなどで若干違いがあります。

```
# Mac

## adb
/Applications/Unity/Hub/Editor/{UNITY_VERSION}/PlaybackEngines/AndroidPlayer/SDK//platform-tools/adb
## aapt
/Applications/Unity/Hub/Editor/{UNITY_VERSION}/PlaybackEngines/AndroidPlayer/SDK/build-tools/{BUILD_TOOL_VERSION}/aapt

# Windows
## adb
C:\Program Files\Unity\Hub\Editor\{UNITY_VERSION}\Editor\Data\PlaybackEngines\AndroidPlayer\SDK\platform-tools\adb.exe
## aapt
C:\Program Files\Unity\Hub\Editor\2020.3.12f1\Editor\Data\PlaybackEngines\AndroidPlayer\SDK\build-tools\{BUILD_TOOL_VERSION}\aapt.exe
```

上記のパスを叩けば、adbやaaptをそのまま利用できます。
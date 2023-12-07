---
type: "tech"
title: "Unity 2023.1 から入った Android Project Configuration Managerについて理解する"
description: "Unity 2023.1からUnityが出力するAndroidプロジェクトを更新するためのAPIである「Android Project Configuration Manager」が導入されました。この機能の概要や利用方法について紹介します。"
tags: ["Unity", "Android", "Unity 2023", "Advent Calendar 2023", "Android Project Configuration Manager"]
date: "2023-12-08T00:00:00"

---

これは[Unity Advent Calendar 2023](https://qiita.com/advent-calendar/2023/unity)の8日目の記事です。

Unity 2023.1からUnityが出力するAndroidプロジェクトの、各種Gradleファイルや `AndroidManifest.xml` を、スクリプトから更新する「[Android Project Configuration Manager](https://docs.unity3d.com/2023.2/Documentation/Manual/android-modify-gradle-project-files-methods.html)」という機能が導入されました。

この機能は、現状のUnityで提供されている「Gradle template files」や `IPostGenerateGradleAndroidProject` の置き換えを想定して実装されています。

本記事では「Android Project Configuration Manager」について、その機能の概要から利用方法、既存機能との関係や移行方法を紹介します。

## Android Project Configuration Manager とは

「Android Project Configuration Manager」は、Unityが出力するAndroidプロジェクトの各種Gradleファイル（`build.gradle`や`setting.gralde`など）と `AndroidManifest.xml` をC#で操作するためのクラス群と、ビルドして出力されたAndroidプロジェクトの各種ファイルを更新するためのコールバックを提供します。

この機能を用いてAndroidアプリのビルド時に、各種Gradleファイルや `AndroidManifest.xml` を更新できます。

具体的には下記コードのように`AndroidProjectFilesModifier`を継承したクラスの `OnModifyAndroidProjectFiles` 内でAndroidプロジェクトの更新処理を記述します。この引数で渡される `AndroidProjectFiles` がUnityが出力するAndroidプロジェクトの各種Gradleファイルや`AndroidManifest.xml`を表す変数で、この変数を用いてAndroidプロジェクトの更新を行います。

```cs
using System.IO;
using UnityEditor.Android;
using Unity.Android.Gradle;

public class ModifyProjectScript : AndroidProjectFilesModifier
{
    public override void OnModifyAndroidProjectFiles(AndroidProjectFiles projectFiles)
    {
        // Set minSdkVersion to 28
        projectFiles.UnityLibraryBuildGradle.Android.DefaultConfig.MinSdkVersion.Set(28);

        // Set android:enabled attribute to 'true' for all launcher activities
        var launcherActivities = projectFiles.UnityLibraryManifest.Manifest.GetActivitiesWithLauncherIntent();
        foreach (var activity in launcherActivities)
        {
            activity.Attributes.Enabled.Set(true);
        }
    }
}
```

たとえば上記コードでは、UnityLibrary側の `build.gradle` の `minSdkVersion` を `28` に設定し、さらに `AndroidManifest.xml` 内のすべてのアクティビティの `android:enabled` 属性を `true` に設定しています。

C#のクラスで表現されているので、各種設定ファイルの変更がC#上で簡単に行えるようになりました。

## なぜ Android Project Configuration Manager なのか

現状の「Gradle template files」や `IPostGenerateGradleAndroidProject` が提供されているなかで、なぜ「Android Project Configuration Manager」が導入されのか、について触れておきます。

まず、「Gradle template files」についての課題としてアップデート可能性（Upgradability）が挙げられます。

Unityのバージョンアップで内部で利用しているGradleそのものの更新が行われたり、機能追加や変更によって、期待するGraldeのテンプレートが変わることがあります。
具体的には、`build.grale` などの記述方法が変更されたり、テンプレートファイルへの[変数の埋め込み](https://docs.unity3d.com/Manual/gradle-templates.html)が変わったりします。

このような変更があると、あわせてテンプレートファイルをメンテナンスする必要があります。
どのタイミングでテンプレートを更新すべきか、どのようにテンプレートを更新すべきかの判断を開発者が行う必要があり、これがAndroidのビルドパイプラインのメンテナンスコストを増加させる要因になっていました。
また、テンプレートファイルの齟齬による意図しない挙動やビルドエラーは気づきにくい、または対応の難易度が高いという問題もあります。

メンテナンス性や安定性を考えると、テンプレートとなる設定ファイルは露出させずにUnity側で管理し、出力されたAndroidプロジェクトに対して追記や変更を行う方式のほうが好ましく、このような機能が追加されたと考えられます。

このような課題の打ち手として `IPostGenerateGradleAndroidProject` が提供されていましたが、出力されたAndroidプロジェクトのルートパスが直接返却されるのみなので、Gradleファイルや `AndroidManifest.xml` を更新するためには独自のパーサーなどを用意する必要があるため、こちらも対応コストが高いという問題がありました。
そのため `AndroidProjectFilesModifier` の `OnModifyAndroidProjectFiles` では、`AndroidProjectFiles` というAndroidプロジェクトを更新するためのクラスが提供して、API経由で各種設定の変更や更新が簡単に行えるようになりました。

これ以外にも、Unityが提供する、前回のビルド結果から変更点のみ更新してビルドを行うことでビルドの高速化を図る[インクリメンタルビルドパイプライン](https://docs.unity3d.com/2023.2/Documentation/Manual/incremental-build-pipeline.html)の[互換性のための仕組みも用意されています](https://docs.unity3d.com/2023.2/Documentation/ScriptReference/Android.AndroidProjectFilesModifier.Setup.html)。

## IPostGenerateGradleAndroidProject のあつかい

「Android Project Configuration Manager」が登場する以前から、Unityには `IPostGenerateGradleAndroidProject` というインターフェイスがあります。
`IPostGenerateGradleAndroidProject` を実装したクラスを用意することで、このインターフェイスが実装を要求する `OnPostGenerateGradleAndroidProject` メソッドがAndroidプロジェクト作成後に呼び出されます。

`OnPostGenerateGradleAndroidProject` の第1引数の `path` は、Unityの出力するAndroidプロジェクトのルートパスです。
実質「Android Project Configuration Manager」の提供する `AndroidProjectFilesModifier` の下位互換なため、**Unity 2023.2からは `IPostGenerateGradleAndroidProject` インターフェイスの `OnPostGenerateGradleAndroidProject` メソッドは非推奨となっています**。

[Unity - Scripting API: Android.IPostGenerateGradleAndroidProject.OnPostGenerateGradleAndroidProject](https://docs.unity3d.com/2023.2/Documentation/ScriptReference/Android.IPostGenerateGradleAndroidProject.OnPostGenerateGradleAndroidProject.html)

`IPostGenerateGradleAndroidProject` は将来的には呼び出されなくなる可能性があるため、`IPostGenerateGradleAndroidProject` は `AndroidProjectFilesModifier` を用いた実装に置き換えていく必要があります。

## Gradle template files の移行と Android Templates Upgrader

「Android Project Configuration Manager」の導入で、テンプレートファイルを用いてGradleファイルを編集する「[Gradle template files](https://docs.unity3d.com/2023.2/Documentation/Manual/android-templates-upgrader-window.html)」は、**テンプレートを用意しても出力されるAndroidプロジェクトには反映されなくなりました**。
そのため「Gradle template files」でのGradleファイルの更新についても、`AndroidProjectFilesModifier` を用いた実装に置き換える必要があります。

Unity 2023ではこの移行を支援するために「[Android Templates Upgrader](https://docs.unity3d.com/2023.2/Documentation/Manual/android-templates-upgrader-window.html)」というウィンドウが用意されています。

ためしに下記のような `minSdkVersion` を `28` に明記した `launcherTemplate.gradle` を `AndroidProjectFilesModifier` を用いた実装に移行してみます。

```gradle
apply plugin: 'com.android.application'

dependencies {
    implementation project(':unityLibrary')
    }

android {
    ndkPath "**NDKPATH**"
    namespace "**NAMESPACE**"

    compileSdkVersion **APIVERSION**
    buildToolsVersion '**BUILDTOOLS**'

    compileOptions {
        sourceCompatibility JavaVersion.VERSION_11
        targetCompatibility JavaVersion.VERSION_11
    }

    defaultConfig {
        // minSdkVersionを28に明示的に指定している
        minSdkVersion 28
        targetSdkVersion **TARGETSDKVERSION**
        applicationId '**APPLICATIONID**'
        ndk {
            abiFilters **ABIFILTERS**
        }
        versionCode **VERSIONCODE**
    }

    aaptOptions {
        noCompress = **BUILTIN_NOCOMPRESS** + unityStreamingAssets.tokenize(', ')
        ignoreAssetsPattern = "!.svn:!.git:!.ds_store:!*.scc:!CVS:!thumbs.db:!picasa.ini:!*~"
    }**SIGN**

    lintOptions {
        abortOnError false
    }

    buildTypes {
        debug {
            minifyEnabled **MINIFY_DEBUG**
            proguardFiles getDefaultProguardFile('proguard-android.txt')**SIGNCONFIG**
            jniDebuggable true
        }
        release {
            minifyEnabled **MINIFY_RELEASE**
            proguardFiles getDefaultProguardFile('proguard-android.txt')**SIGNCONFIG**
        }
    }**PACKAGING_OPTIONS****PLAY_ASSET_PACKS****SPLITS**
**BUILT_APK_LOCATION**
    bundle {
        language {
            enableSplit = false
        }
        density {
            enableSplit = false
        }
        abi {
            enableSplit = true
        }
        texture {
            enableSplit = true
        }
    }

	**GOOGLE_PLAY_DEPENDENCIES**
}**SPLITS_VERSION_CODE****LAUNCHER_SOURCE_BUILD_SETUP**
```

このテンプレートファイルを `AndroidProjectFilesModifier` に移行するには、_Player Settings > Project Settings > Publishing Settings_ を開き、Build下の「Upgrade templates to C#...」というボタンを押します。
下図のように「Android Templates Upgrader」というウィンドウが開くので、「Custom Launcher Gradle Template」をチェックして「Upgrade Templates」ボタンを押します。

![Android Tempates Upgrader](./image.png)

すると、下記のようなコードが `Assets/Editor/Android/ModifyProjectScript.cs` に生成されます。`AndroidProjectFilesModifier` で `minSdkVersion` が正しく `28` に指定されていることが確認できます。

```cs
using System.Linq;
using UnityEditor;
using UnityEditor.Android;
using Unity.Android.Gradle;
using Unity.Android.Gradle.Manifest;
public class ModifyProjectScript : AndroidProjectFilesModifier
{
    public override void OnModifyAndroidProjectFiles(AndroidProjectFiles projectFiles)
    {
        projectFiles.LauncherBuildGradle.Android.DefaultConfig.VersionName.Remove();
        projectFiles.LauncherBuildGradle.Android.DefaultConfig.MinSdkVersion.Set(28);

    }
}
```

## おわりに

Unity 2023.1から導入された「Android Project Configuration Manager」について、この概要から利用方法、既存機能からの移行について紹介しました。

既存の「Gradle template files」や `IPostGenerateGradleAndroidProject` を置き換えのための機能なため、移行が必要になります。
気になるのはサードパーティーライブラリで、個人的にはとくに [External Dependency Manager for Unity](https://github.com/googlesamples/unity-jar-resolver) あたりが気になっています。このあたりは後日、時間があれば確認して記事に出来ればと思います。

また、この機能した実例についても、そのうち取り上げられれば、と。（時間があれば...）

## 参考

* [Unity - Manual: How Unity builds Android applications](https://docs.unity3d.com/2023.2/Documentation/Manual/how-unity-builds-android-applications.html)
* [Unity - Manual: Modify the Gradle project files for a Unity application](https://docs.unity3d.com/2023.2/Documentation/Manual/android-modify-gradle-project-files-methods.html)
* [Unity - Manual: Android Templates Upgrader window reference](https://docs.unity3d.com/2023.2/Documentation/Manual/android-templates-upgrader-window.html)
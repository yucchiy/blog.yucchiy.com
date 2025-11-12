---
title: .unitypackageを介してコード共有をおこなう、または.unitypackageのエクスポート・インポートをスクリプト・CLIで行う方法
description: ''
pubDatetime: 2021-10-12T01:00:00.000Z
tags:
  - Unity
  - unitypackage
  - UnityEditor
---

Unityでコードを共有する方法として、最近ではPackage Managerを用いる方法が主流ですが、
`.unitypackage`を利用すると気軽にコードが共有でき、アセットやメタ情報も正しく共有できるので便利だなって感じたので、
メモとして`.unitypackage`のエクスポートやインポートをスクリプトやコマンドラインで行う方法をブログに残しておきます。

## .unitypackageのエクスポートをスクリプト経由で行う

`AssetDatabase`には`ExportPackage`というメソッドがあり、これをもちいることで`.unitypackage`を出力できます。

[Unity - Scripting API: AssetDatabase.ExportPackage](https://docs.unity3d.com/ScriptReference/AssetDatabase.ExportPackage.html)

```cs
AssetDatabase.ExportPackage(
    new string[]
    {
        "Assets/Plugins",
        "Assets/Prefabs",
        "Assets/Scripts/Runtime",
        "Assets/TextMesh Pro",
    },
    "ShareShitaiCode.unitypackage",
    ExportPackageOptions.Recurse |
    ExportPackageOptions.IncludeDependencies
);
```

第１引数はパッケージに書き出すパスの一覧。後述する `ExportPackageOptions.Recurse` を用いることで、パスにフォルダを指定すると配下のデータをまとめて書き出すこともできます。
また、`ExportPackageOptions.IncludeDependencies` を指定すると、例えば `.prefab` を指定したらそのプレハブが内部で利用しているアセットもまとめて書き出せます。

第２引数は出力するパッケージ名です。

第３引数はパッケージ書き出しのオプションで、フラグなのでORで結合して複数指定できます。指定できるオプションは下記のとおりです。

- `Default`: 省略した場合のデフォルト挙動。指定したファイルのみを含める。依存やサブディレクトリ、ライブラリの設定などを含めない。
- `Recurse` 指定したパスのサブディレクトリおよびそのディレクトリ内部のすべてのアセットをパッケージに含める。
- `IncludeDependencies` 指定したファイルが依存しているアセットも含める。
- `IncludeLibraryAssets` プロジェクト設定やライブラリフォルダなどのライブラリアセットも含める。

所管としては、単純なコードやアセット共有では`ExportPackageOptions.Recurse`と`ExportPackageOptions.IncludeDependencies`を指定することが多そうと感じました。


## unitypackageのインポートをスクリプト経由で行う

次に書き出した`.unitypackage`のインポートです。`.unitypackage`のインポートはスクリプト経由からも行えます。

[Unity - Scripting API: AssetDatabase.ImportPackage](https://docs.unity3d.com/ScriptReference/AssetDatabase.ImportPackage.html)

```cs
using UnityEditor;
using UnityEngine;

public class AssetDatabaseExamples : MonoBehaviour
{
    [MenuItem("Window/ImportBenriPackage")]
    static void ImportPackageExample()
    {
        AssetDatabase.ImportPackage("BenriCode.unitypackage", false);
    }
}
```

第１引数にインポートする対象のパッケージのパスを、第２引数には`interactive`オプションを指定します。
`true`の場合、GUI経由でパッケージインポートする際にでてくるアセットリストの選択ウインドウ等が表示されます。（つまりGUI経由でのパッケージインポートと同じ挙動となります）


### インポート時のコールバック

ちなみにパッケージのインポート前後になにか処理を差し込みたい場合は、下記のコールバックが利用できます。

- [AssetDatabase.importPackageCancelled](https://docs.unity3d.com/ScriptReference/AssetDatabase-importPackageCancelled.html)
- [AssetDatabase.importPackageCompleted](https://docs.unity3d.com/ScriptReference/AssetDatabase-importPackageCompleted.html)
- [AssetDatabase.importPackageFailed](https://docs.unity3d.com/ScriptReference/AssetDatabase-importPackageFailed.html)
- [AssetDatabase.importPackageStarted](https://docs.unity3d.com/ScriptReference/AssetDatabase-importPackageStarted.html)

```cs
// from: https://docs.unity3d.com/ScriptReference/AssetDatabase-importPackageStarted.html
using UnityEditor;
using UnityEngine;

// この属性をつけないとコールバックの登録がされないので注意
[InitializeOnLoad]
public class AssetDatabaseExamples
{
    static AssetDatabaseExamples()
    {
        AssetDatabase.importPackageStarted += OnImportPackageStarted;
        AssetDatabase.importPackageCompleted += OnImportPackageCompleted;
        AssetDatabase.importPackageFailed += OnImportPackageFailed;
        AssetDatabase.importPackageCancelled += OnImportPackageCancelled;
    }

    private static void OnImportPackageCancelled(string packageName)
    {
        Debug.Log($"Cancelled the import of package: {packageName}");
    }

    private static void OnImportPackageCompleted(string packagename)
    {
        Debug.Log($"Imported package: {packagename}");
    }

    private static void OnImportPackageFailed(string packagename, string errormessage)
    {
        Debug.Log($"Failed importing package: {packagename} with error: {errormessage}");
    }

    private static void OnImportPackageStarted(string packagename)
    {
        Debug.Log($"Started importing package: {packagename}");
    }
}
```

## .unitypackageのインポートをコマンドライン経由で行う

`.unitypackage`はコマンドライン経由でインポートを行うこともできます。

```
$ /path/to/unity -projectPath /path/to/targetproject -importPackage /path/to/unitypackage -logFile /path/to/logfile -batchmode -nographics -quit
```

`/path/to/*`にはそれぞれのパスがはいります。GUI経由だとパッケージのインストール時にどのスクリプトをインストールするか選択できますが、コマンドライン経由の場合はパッケージングされているすべてのデータが自動的にインポートされるようです。

## 参考

- [Unitypackageの使い方(インポート)や作り方(エクスポート)、プログラムでの操作方法【Unity】【エディタ拡張】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/Unitypackage)
- [Unity - Scripting API: AssetDatabase.ExportPackage](https://docs.unity3d.com/ScriptReference/AssetDatabase.ExportPackage.html)
- [AssetDatabase.importPackageStarted](https://docs.unity3d.com/ScriptReference/AssetDatabase-importPackageStarted.html)
- [Unity - Scripting API: AssetDatabase.ImportPackage](https://docs.unity3d.com/ScriptReference/AssetDatabase.ImportPackage.html)

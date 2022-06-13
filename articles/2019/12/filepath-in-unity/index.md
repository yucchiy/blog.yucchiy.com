---
date: "2019-12-27T07:00:00+09:00"
draft: false
title: "Unityでファイルパスを扱う上での注意点"
tags: ["Tips", "C#", "Unity"]

---

## TL;DR

Unityでファイルパスを扱う場合は、そのファイルパスがAssetDatabaseのファイルパスなのか、OS依存なファイルパスなのか意識するとよい。

## Unityでのアセットのファイルパスについて

Unityでは、エディタ拡張などでアセットを操作する場合、データをバイナリやテキストで直接読み込んだり、加工することは少なく、
[AssetDatabase](https://docs.unity3d.com/ScriptReference/AssetDatabase.html)を用いてデータを処理することが多いです。

ちなみに[AssetDatabase](https://docs.unity3d.com/ScriptReference/AssetDatabase.html)のファイルパスは**OSに依存しない**設計になっていて、
`Assets`ファルダを起点とした相対パスで表現されます(ex: `Assets/Scene/SampleScene.unity`)。

ただし、例えば独自フォーマットのファイルを読み込みたい場合などは、`System.IO`系のメソッドを利用する必要がありますが、こちらのファイルパスは、**OSに依存しています**。

具体的には、Macではディレクトリセパレータは`/`で表されますし(ex: `~/Document/hoge.dat`)、Windowsでは同じフォルダはディレクトリセパレータは`\`で表されます。

なので、AssetDatabaseで取得できるファイルパスは、Windowsではそのまま利用できず、以下の処理を用いてファイルパスをOS依存のものに変換してやる必要があります。

```cs
// これは本来やらないほうがいい（後述）

// AssetDatabaseのディレクトリセパレータ
const string kAssetDatabaseDirectorySeparatorChar = '/';

// .datとつくファイルをAssets/Settingsから取得する
string[] guids = UnityEditor.AssetDatabase.FindAssets(".dat", new string[] { "Assets/Settings" });
foreach (string guid in guids)
{
    // ここで取得できるfilepathは、AssetDatabaseでのファイルパス
    string filepath = UnityEditor.AssetDatabase.GUIDToAssetPath(guid);

    // OS依存なファイルパスに変換する
    filepath = filepath.Replace(
        kAssetDatabaseDirectorySeparatorChar,
        // https://docs.unity3d.com/ScriptReference/Path.DirectorySeparatorChar.html
        // OSのディレクトリセパレータを返してくれる
        System.IO.Path.DirectorySeparatorChar
    );

    // .dat拡張子ファイル以外は無視する
    if (System.IO.Path.GetExtension(filepath) != ".dat")
    {
        continue;
    }

    using (var stream = new System.IO.FileStream(
            filepath,
            System.IO.FileMode.Create
    ))
    {
        // ここで読み込んだファイルの処理をする
    }
}
```

ただし、個人的には上記に示したコードサンプルはあまり良い実装ではなく、`AssetDatabase`で取得したパスは`AssetDatabase`のAPIのみで利用し、
`System.IO`で取得できるパスは`System.IO`のみで利用するのが望ましいです。つまり、**2つのファイルパスが混ざるような実装はできればしない方が良いです**。

例えば、上記の実装は下記の実装に置き換えてもいいかもしれません。

```cs
// .datとつくファイルをAssets/Settingsから取得するが、
// System.IO.Directory.GetFilesメソッドでそもそも取得する。
string[] filepaths = System.IO.Directory.GetFiles("Assets/Settings", "*.dat");
foreach (string filepathin filepaths)
{
    // .dat拡張子ファイル以外は無視する
    if (System.IO.Path.GetExtension(filepath) != ".dat")
    {
        continue;
    }

    using (var stream = new System.IO.FileStream(
            filepath,
            System.IO.FileMode.Create
    ))
    {
        // ここで読み込んだファイルの処理をする
    }
}
```

## うまく行かないケース

例えば、エディタ拡張でプロジェクトビューで選択したファイルに対して、右クリックでファイルフォーマットチェックをする機能を実装したい場合などです。

選択中のファイルを取得するには、[UnityEditor.Selection.assetGUIDs](https://docs.unity3d.com/ScriptReference/Selection-assetGUIDs.html)を用いますが、
取得できる値がGUIDなため、ファイルパスを取得するにはやはり[UnityEditor.AssetDatabase.GUIDToAssetPath](https://docs.unity3d.com/ScriptReference/AssetDatabase.GUIDToAssetPath.html)メソッドを用いてAssetDatabaseのファイルパスを取得し、
そこからOS依存なファイルパスに変換が必要になります。

なのでUnityでファイルパスを扱う場合は、常に**AssetDatabaseのファイルパス**なのか、**OS依存なファイルパス**なのかを意識できると、ミスが少なくなるのかなと思います。

---
type: "tech"
title: "Unity パッケージにおけるパスの扱いについて"
description: "Unityでパッケージ開発をする際のパスの扱い方や、パッケージ内のアセットにアクセスする方法についてまとめます。"
tags: ["Unity","パッケージ開発"]
date: "2022-06-18T07:00:00"

---

Unityでパッケージ開発を行っている際に、「パッケージ内で管理しているアセットをロードしたい、コピーしてきたい」と思ったとき、そもそもパッケージ内のアセットのパスの扱いってどうなっているんだっけ…？ってのが分からなかったので、調べたついでにメモとして残しておきます。

## パッケージの（アセットデータベースの）パス

プロジェクト内のアセットは、下記のパススキームで参照できます。

```plain text
Assets/PATH/TO/ASSET
```


一方で、たとえば `com.yucchiy.benri-tool` というパッケージ名の、パッケージ内のアセットは、下記のパススキームで参照します。

```plain text
Packages/com.yucchiy.benri-tool/PATH/TO/ASSET
```


ちなみにパッケージ名は、 `package.json` の `name` を指します。下図の `package.json` の場合、 `com.yucchiy.benri-tool` がパッケージ名です。

![](./C4F67F2500A152DE16762C79A91B5775.png)

パッケージ内のアセットのロードに話を戻します。具体的に、下図の `TestPrefab.prefab` があるとして、

![](./90E878DED317F471781CF4A762C3F5FE.png)

このプレハブを**アセットデータベース経由で**ロードしてインスタンス化するには、下記のコードで実現できます。

```csharp
var prefab = AssetDatabase.LoadAssetAtPath<GameObject>(
    "Packages/com.yucchiy.benri-tool/TestPrefab.prefab");
var obj = GameObject.Instantiate(prefab);
```


また、記事冒頭の要件である、パッケージ内のアセットをプロジェクト配下へコピーするには、アセットデータベース経由では、下記コードで実現できます。

```csharp
// 上記プレハブをプロジェクトのAssetsフォルダ直下にコピー！
AssetDatabase.CopyAsset(
    "Packages/com.yucchiy.benri-tool/TestPrefab.prefab",
    "Assets/TestPrefab.prefab"
);
```


アセットデータベース経由ということは、つまりパッケージ内のアセットに `.meta` が作成されていて、かつ、コピー先のフォルダも、 `Assets` 配下など、アセットデータベースによって管理されている必要があります。

大抵のケースは事足りるのですが、稀にアセットデータベース管理外のファイルをコピーなどしたい場合があるかもしれません。そういうときは、パッケージ内のファイルを（そのOSの）フルパスで参照し、 `System.IO` に提供されるAPIでファイル操作すると良いでしょう。

パッケージ内のファイルのフルパスを取得するには `Path.GetFullPath` を利用します。

```csharp
// 末尾にチルダ(~)をつけたファイル・フォルダは
// アセットデータベースの管理から外れる（.metaがつかない）
string path = Path.GetFullPath("Packages/com.yucchiy.benri-tool/benri.txt~");
// プロジェクト配下にコピー
File.Copy(path, Path.Combine(Application.dataPath, "..", "benri.txt"), true);
```


### 余談: Resourcesフォルダの扱い

ここまで調べてみて`Packages/{パッケージ名}` がプレフィックスになり、それ以外は通常のUnityプロジェクトにおけるパスの扱いと変わらないのかな？と思い、たとえば `Resources` の扱いはどうなるんだろう？と気になりました。

そこで、`Packages/{パッケージ名}` 以下に `Resources` フォルダを作成し、 `Resources.Load` 経由でアセットをロードしてみました。

```csharp
var prefabInResources = Resources.Load(
    "Packages/com.yucchiy.benri-tool/Resources/TestPrefabInResources.prefab");
var obj2 = GameObject.Instantiate(prefabInResources);
```


結果として、正しくプレハブをロードできない結果となりました。ちなみにパッケージ下に `Assets/Resources` を掘って、その中にプレハブを置いてロードしてもダメでした。どうやら `Resources` フォルダの展開は**プロジェクト内だけ**のようです。（迂闊に展開されちゃうと、パッケージ内に `Resources` フォルダがありその中にデータがあると起動時間等が懸念されるのでこれはこれでよいのですが）

## まとめ

Unityのパッケージ内のアセットのパスの扱いと、パッケージ内のアセットをプロジェクトにコピーする方法、余談ではありますがパッケージにおける `Resources` フォルダの扱いについてまとめました。

## 参考

* [パッケージアセットへのアクセス - Unity マニュアル](https://docs.unity3d.com/ja/2020.3/Manual/upm-assets.html)



---
type: "tech"
title: "Unityで一時的な作業用パスを作成する"
description: "Unityで一時的なファイル作業を行う際などに利用できる、一時的なパスを生成する　FileUtil.GetUniqueTempPathInProject について紹介します。"
tags: ["Unity"]
date: "2022-06-14T00:00:00"

---

Unityで、例えばファイルの生成が絡むようなテストを行いたいとき、一時的な作業用のディレクトリを作成して、その中でファイルの操作を行って終わったら削除、とすると何かとスッキリします。



Unityでは `FileUtil.GetUniqueTempPathInProject` というメソッドを利用して、一時的なパスを生成できます。

[https://docs.unity3d.com/ScriptReference/FileUtil.GetUniqueTempPathInProject.html](https://docs.unity3d.com/ScriptReference/FileUtil.GetUniqueTempPathInProject.html)

```csharp
var path = FileUtil.GetUniqueTempPathInProject();
```




このメソッドはUnityのプロジェクトルートを起点として、 `Temp/UnityTempFile-{uniqueID}`  というパスを返却します。 `{uniqueID}` は、そのプロジェクトでユニークな値が返却されます。



返却されるのは単にパスなので、そのパスに拡張子をつけて作業用のファイル名にしたり、そのパスでディレクトリを掘って作業用ディレクトリとする、などはユーザー側に委ねられています。

（あくまでもパスを返すだけで、ディレクトリを作成するなどはしません。）



このメソッドを使って、記事冒頭であげた例のような一時的な作業用ディレクトリを作成は、下記コードで実装できます。



```csharp
// 受け取ったパスを、そのまま作業用ディレクトリのパスとして利用する
var workDirectoryPath = FileUtil.GetUniqueTempPathInProject();

// 作業用ディレクトリ作成
Directory.CreateDirectory(workDirectoryPath);

// ここでなにか作業する
// 〜
// 作業終了

// 諸々作業が終わったら、作業用ディレクトリを削除しておく
Directory.Delete(workDirectoryPath, true);
```




作成したパスはUnityが管理しているわけではないので、作業後に掃除等も自動では行われません。そのため、作ったら削除しておきます。


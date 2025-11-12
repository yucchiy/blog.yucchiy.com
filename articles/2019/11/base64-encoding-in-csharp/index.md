---
title: Base64 Encoding in C#
description: ''
pubDatetime: 2019-11-26T00:00:00.000Z
tags:
  - Tips
  - C#
---

C#でBase64エンコーディングを行う場合、[`System.Convert`](https://docs.microsoft.com/en-us/dotnet/api/system.convert)クラスを利用する。

## Convert string to Base64String

文字列からBase64エンコーディングされた文字列を取得する場合は、[`Convert.ToBase64String`](https://docs.microsoft.com/en-us/dotnet/api/system.convert.tobase64string)メソッドを用いる。
ただし、入力が`byte[]`なので、入力文字列のエンコードがUTF8であれば、[`Encoding.GetBytes`](https://docs.microsoft.com/en-us/dotnet/api/system.text.encoding.getbytes)を用いて、`string`を`byte[]`に変換してやる。

```csharp
// inputが入力文字列
var bytes = System.Text.Encoding.UTF8.GetBytes(input);
// resultにBase64エンコーディングされた文字列が格納される
var result = System.Convert.ToBase64String(bytes);
```

## Convert Base64String to string

Base64エンコーディングされた文字列をデコードするには、[`Convert.FromBase64String`](https://docs.microsoft.com/en-us/dotnet/api/system.convert.frombase64string?view=netframework-4.8)メソッドを用いる。
出力が`byte[]`なので、`string`で受け取りたい場合は、[`Encoding.GetString`](https://docs.microsoft.com/en-us/dotnet/api/system.text.encoding.getstring?view=netframework-4.8)を用いて、`bytes[]`を`string`に変換する。

```csharp
// Base64エンコーディングされた文字列をデコードし、`byte[]`として受け取る
// inputが、Base64エンコーディングされた文字列
var bytes = System.Convert.FromBase64String(input);
// stringに変換
var result = System.Text.Encoding.UTF8.GetString(bytes);
```

## Reference

- [Base64 Encoding - Convert Class (System) | Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/api/system.convert?view=netframework-4.8#base64-encoding)

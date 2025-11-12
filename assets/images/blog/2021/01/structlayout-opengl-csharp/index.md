---
title: C#の構造体のメモリレイアウトとインターリーブ配列
description: ''
pubDatetime: 2021-01-07T00:00:00.000Z
tags:
  - C#
  - OpenGL
  - OpenTK
---

ポリゴンの描画において、それぞれの頂点は位置や法線、テクスチャ座標など複数の属性を持ちます。
それらの頂点配列(VBO)のメモリレイアウトをインターリーブ形式にすることで描画を高速に行うテクニックがあります。

具体的には下記のような配列をGPUに転送します。(コードはOpenTK)

```csharp
// vboを生成
var vbo = GL.GenBuffer();

// 頂点カラーを持つ頂点
var positionColorVertices = new float[]
{
     // 位置             // 色
     -0.5f, -0.5f, 0.0f, 1.0f, 0.0f, 0.0f, // 左下
      0.5f, -0.5f, 0.0f, 0.0f, 1.0f, 0.0f, // 右下
      0.0f,  0.5f, 0.0f, 0.0f, 0.0f, 1.0f, // 上
};

// 頂点配列に上記のvboをバインド
GL.BindBuffer(BufferTarget.ArrayBuffer, vbo);
// GPUに配列を転送。
GL.BufferData(BufferTarget.ArrayBuffer, 72, positionColorVertices, BufferUsageHint.StaticDraw); 

// positionLocationは事前に計算しているものとする
GL.EnableVertexAttribArray(positionLocation);
GL.VertexAttribPointer(positionLocation, 3, GL_FLOAT, GL_FALSE, 32, 0);

// positionLocationは事前に計算しているものとする
GL.EnableVertexAttribArray(colorLocation);
GL.VertexAttribPointer(colorLocation, 3, GL_FLOAT, GL_FALSE, 32, 12);

// 3頂点をGL_TRIANGLESで描画
GL.DrawElements(PrimitiveType.Triangles, 0, 3);
```

![描画した色付き三角形](./colored-triangle.png)

ただ、これだと配列のどの要素が位置で、どこが色だっけ... となるので、頂点を構造体の配列で管理したくなります。

```csharp
// 頂点カラー付き頂点情報の構造体
[StructLayout(LayoutKind.Sequential)]
public struct PositionColor
{
    public Vector3 Position;
    public Vector3 Color;

    public PositionColor(Vector3 position, Vector3 color)
    {
        Position = position;
        Color = color;
    }
}

// このように定義すると管理しやすい
var positionColorVerticesWithStruct = new PositionColor[]
{
    new PositionColor(new Vector3(-0.5f, -0.5f, 0.0f), new Vector3(1f, 0f, 0f)),
    new PositionColor(new Vector3( 0.5f, -0.5f, 0.0f), new Vector3(0f, 1f, 0f)),
    new PositionColor(new Vector3( 0.0f,  0.5f, 0.0f), new Vector3(0f, 0f, 1f)),
};
```

C#の構造体はそれぞれの要素が素直にメモリ上に並びます。なのでこのまま`BufferData`で転送すれば、GPU上は前述した`float`の配列と同様のメモリアライメントとなり、上記のコードがそのまま動きます。

```csharp
// GPUに配列を転送。
GL.BufferData(BufferTarget.ArrayBuffer, 72, positionColorVerticesWithStruct, BufferUsageHint.StaticDraw); 
```

ただし、要素が確実に定義順に並ぶように、`StructLayoutAttribute`で`LayoutKind.Sequential`を設定しました。（どの位置にどの要素が来るかを指定しないといけないため。）

## 参考

- [GPU本来の性能を引き出すWebGL頂点データ作成法 - Qiita](https://qiita.com/emadurandal/items/0bb83b545670475f51a3)
- [wgld.org | WebGL: インターリーブ配列 VBO |](https://wgld.org/d/webgl/w088.html)
- [StructLayoutAttribute Class (System.Runtime.InteropServices) | Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/api/system.runtime.interopservices.structlayoutattribute?view=net-5.0)
- [複合型のレイアウト - C# によるプログラミング入門 | ++C++; // 未確認飛行 C](https://ufcpp.net/study/csharp/interop/memorylayout/)

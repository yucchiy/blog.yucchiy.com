---
date: "2021-01-28T10:00:00+09:00"
draft: true
title: "AssimpNetを使ったC#でのモデルインポート - Vol1. Assimp概要とモデルロード編"
tags: ["Assimp", "OpenGL", "OpenTK", "C#"]

---

この記事ではAssimpの概要と、C#でAssimpを利用することができるAssimpNetの紹介、そして実際にモデルをロードする方法を紹介します。

AssimpNetを扱ったモデルロードについては、この後いくつかのトピックを連載したいと思います。この記事は「Vol1. Assimp概要とモデルロード編」という立ち位置となります。

## Assimpとは

[assimp/assimp: The official Open-Asset-Importer-Library Repository. Loads 40+ 3D-file-formats into one unified and clean data structure.](https://github.com/assimp/assimp)

Assimpはオープンソースの3Dフォーマットファイルのインポートライブラリです。Assimp自体はOpen-Asset-Importer-Libraryの略称のようです。（たぶんOpen-**Ass**et-**Imp**orter-Libraryからとっている）

3Dモデルを扱うファイルフォーマットは様々な種類があり（といっても自分はゲーム関係のことぐらいしかわからないですが...）、またその表現方法も多様です。

Assimpは、複数のファイルフォーマットを読み込み、それらのデータをゲーム開発のシナリオにおいて扱いやすいような独自のデータ表現としてインポートする機能を提供します。
また、インポートしたデータに対して様々な後処理（座標系の変換やインデックス付きメッシュへの変換、法線や接線の計算など）が用意されています。

これによりアプリケーションをAssimpがサポートするファイルフォーマットのロードを簡単に実装することができます。

また、Assimpのデータを各種3Dモデルファイルにエクスポートすることも可能です。

## AssimpNetの導入

OpenTK（C#でOpenGLを扱うライブラリ）でAssimpを用いてモデルを描画することを考えます。

C#では[AssimpNet](https://www.nuget.org/packages/AssimpNet/)を用いると簡単にAssimpを利用することができます。

[NuGet Gallery | AssimpNet 4.1.0](https://www.nuget.org/packages/AssimpNet/)

AssimpNetはAssimpのC#ラッパーライブラリです。P/Invoke経由でAssimpのC-APIをコールすることでその機能を利用します。

AssimpNetはNuGetでインストールできます。プロジェクト下で下記のコマンドを実行することでインストールできます。

```
$ dotnet add package AssimpNet --version 4.1.0
```

ちなみにAssimpNetのバージョンは原則Assimpのバージョンと一致しているようです。このブログを執筆時(2021/01/27)に最新版は4.1.0で、ベータ版として5.0.0をサポートしています。

## AssimpNetを用いてモデルをロードする

それでは実際にモデルをロードしてみます。読み込み自体は下記のコードで実現できます。

```cs
// このファイルパスは読み込みたいモデルのファイルパス
var filepath = "/path/to/teapot.obj";
var importer = new AssimpContext(filepath);
var scene = importer.ImportFile(filepath,
    PostProcessSteps.CalculateTangentSpace |
    PostProcessSteps.GenerateSmoothNormals |
    PostProcessSteps.JoinIdenticalVertices |
    PostProcessSteps.LimitBoneWeights |
    PostProcessSteps.RemoveRedundantMaterials |
    PostProcessSteps.SplitLargeMeshes |
    PostProcessSteps.Triangulate |
    PostProcessSteps.GenerateUVCoords |
    PostProcessSteps.SortByPrimitiveType |
    PostProcessSteps.FindDegenerates |
    PostProcessSteps.FindInvalidData
);
```

モデルのロード自体ははとても簡単で、`AssimpContext`をインスタンス化し、`ImportFile`を呼び出すだけです。
ちなみに[`ImportFile`](https://bitbucket.org/Starnick/assimpnet/src/6fb9a0d01123b2ddfb18feec502bcc3bdfa593d2/AssimpNet/AssimpContext.cs#lines-256)はファイルパスを渡しますが、ストリームから読み込む[`ImportFileFromStream`](https://bitbucket.org/Starnick/assimpnet/src/6fb9a0d01123b2ddfb18feec502bcc3bdfa593d2/AssimpNet/AssimpContext.cs#lines-191)が存在します。

`ImportFile`の第2引数には後処理の一覧を渡します。後処理一覧は[`PostProcessSteps`という列挙型で定義されます](https://bitbucket.org/Starnick/assimpnet/src/6fb9a0d01123b2ddfb18feec502bcc3bdfa593d2/AssimpNet/Enums.cs#lines-74)。
ただし後処理の一覧を列挙するのは大変なので、[`PostProcessPreset`というプリセットクラス](https://bitbucket.org/Starnick/assimpnet/src/master/AssimpNet/PostProcessPreset.cs)が定義されています。

```cs
// PostProcessPresetを用いて上記の処理をよりシンプルに記述する
var scene = importer.ImportFile(filepath, PostProcessPreset.TargetRealTimeQuality);
```

後述しますが、多くのグラフィックスAPIでメッシュを描画するときは三角形で扱いたいが多いため、メッシュのFaceを三角形に変換する`PostProcessSteps.Trianglate`を指定したほうが良いです。

## 読み込んだモデルを描画する

今回は読み込んだモデルのうち、頂点と頂点インデックス、法線情報を用いてモデルを描画してみます。(正しい描画を行うにはマテリアル情報やテクスチャが必要になりますが、それは次の記事で。)

### SceneクラスとMeshクラス

`ImportFile`によって返却される戻り値は`Scene`クラスのインスタンスです。

「直接モデルクラスを返さないのか？」と疑問に思う方もおられるかもしれませんが、例えばBlenderやMayaで制作したアニメーションやカメラワーク、ライト情報をfbxとしてエクスポートして、それをゲーム内に取り込んで利用するといったケースもあります。
つまり、いくつかの3Dフォーマットファイルは**モデルだけでなく、そのモデルをどのように表示するのか**、などの情報を含めることができるよう汎用的に作られてるものもあるので、シーンという1段抽象的なデータ表現をしているのではないかと考えられます。

[`Scene`クラス](https://bitbucket.org/Starnick/assimpnet/src/1eef562da794e681ad7cd4b9f6f1d47766ae0ffa/AssimpNet/Scene.cs?at=release%2F4.1.0)には、読み込んだデータが`Meshes`や`Materials`など用途ごとにプロパティに格納されています。また、そのデータがファイル上に存在したかどうかという`HasXXX`プロパティであわせて用意されています。

`Meshes`は[`Mesh`](https://bitbucket.org/Starnick/assimpnet/src/1eef562da794e681ad7cd4b9f6f1d47766ae0ffa/AssimpNet/Mesh.cs?at=release%2F4.1.0)クラスのインスタンスがリスト形式で格納されています。

それぞれのメッシュには面(`Faces`)や法線(`Normals`)、UV情報(`TextureCoordinateChannels`)、利用するマテリアルのインデックス(`MaterialIndex`)、頂点情報(`Vertices`)など様々な情報が格納されています。

### Assimpの3Dのデータ表現について

[Importing Data — Asset-Importer-Lib December 2020 documentation](https://assimp-docs.readthedocs.io/en/latest/usage/use_the_lib.html#data-structures)

頂点を扱う前に、Assimpの3Dのデータ表現について触れておきます。

Assimpはモデルをロードする際に、デフォルトではOpenGLと同様に**右手座標系**で頂点情報を表現しています。つまり、+Xは右方向、+Yは上方向、+Zはスクリーンに対して手前方向になります。
ただしDirectXなどでも扱いやすいように、後処理で`PostProcessSteps.MakeLeftHanded`を指定することで左手座標系に変換して読み込むオプションもサポートしています。

また、面の向きは下記の通りデフォルトでは**反時計回り(Counter ClockWise: CCW)**が表向きになります。これも時計回りにしたければ、`PostProcessSteps.FlipWindingOrder`で切り替えることができます。

```
x2

            x1
    x0
```

最後に(ここでは利用しませんが)テクスチャのUV座標系は**左下が原点**です。こちらも`PostProcessSteps.FlipUVs`で左上原点に切り替えることができます。

```
0x|1y ---------- 1x|1y
 |                |
 |                |
 |                |
0x|0y ---------- 1x|0y
```

### メッシュの描画

シーンにはメッシュが複数個存在するので、下記の実装をメッシュ個分行うことで描画します。

まずはMeshクラスから頂点と法線、頂点インデックスを取得し、GPUに転送まで行います。

また、描画時のプリミティブは`PrimitiveType.Triangles`で行うものとします。`PrimitiveType.Triangles`で描画を行うためには、頂点インデックスの配列から3つずつ、それぞれ三角形を形成する必要があります。
そのような頂点インデックスを作るには、`ImportFile`の後処理に`PostProcessSteps.Trianglate`を指定します。

ちなみに頂点座標は`Mesh.Vertices`に、法線は`Mesh.Normals`プロパティに格納されています。頂点インデックスは`Mesh.GetUnsignedIndices()`メソッドで計算できます。

```cs
// mesh: Assimp.Mesh

// positionsに頂点座標を[x0, y0, z0, x1, x2, ...]という配置で格納する
var positions = new float[mesh.Vertices.Count * 3];
for (var vertexIndex = 0; vertexIndex < mesh.Vertices.Count; ++vertexIndex)
{
    var vertex = mesh.Vertices[vertexIndex];
    positions[3 * vertexIndex + 0] = vertex.X;
    positions[3 * vertexIndex + 1] = vertex.Y;
    positions[3 * vertexIndex + 2] = vertex.Z;
}

// positionと同様に[x0, y0, z0, x1, x2, ...]という配置で格納する
var normals = new float[mesh.Normals.Count * 3];
for (var normalIndex = 0; normalIndex < mesh.Normals.Count; ++normalIndex)
{
    var normal = mesh.Normals[normalIndex];
    normals[3 * normalIndex + 0] = normal.X;
    normals[3 * normalIndex + 1] = normal.Y;
    normals[3 * normalIndex + 2] = normal.Z;
}

// 頂点インデックスの取得
// PostProcessSteps.Trianglateを指定している場合、
// この頂点インデックスは三角形となる
var indicies = mesh.GetUnsignedIndices();

// 頂点を格納するバッファ
var buffers = new int[3];
GL.GenBuffers(3, buffers);

// 頂点座標をGPUに転送
GL.BindBuffer(BufferTarget.ArrayBuffer, buffers[0]);
GL.BufferData(BufferTarget.ArrayBuffer, 4 * positions.Length, positions, BufferUsageHint.StaticDraw);
// 法線をGPUに転送
GL.BindBuffer(BufferTarget.ArrayBuffer, buffers[1]);
GL.BufferData(BufferTarget.ArrayBuffer, 4 * normals.Length, normals, BufferUsageHint.StaticDraw);
// バッファを紐付け解除
GL.BindBuffer(BufferTarget.ArrayBuffer, 0);

// 頂点インデックスをGPUに転送
GL.BindBuffer(BufferTarget.ElementArrayBuffer, buffers[2]);
GL.BufferData(BufferTarget.ElementArrayBuffer, 4 * indices.Length, indices, BufferUsageHint.StaticDraw);
// バッファを紐付け解除
GL.BindBuffer(BufferTarget.ElementArrayBuffer, 0);

// 頂点配列
var vertexArrays = new int[1];

GL.GenVertexArrays(1, vertexArrays);
GL.BindVertexArray(vertexArrays[0]);

// 頂点座標の頂点属性設定。シェーダでlayout(location = 0)を指定していると想定
const int VertexLocation = 0;
GL.EnableVertexAttribArray(VertexLocation);
GL.VertexAttribPointer(
    VertexLocation, 3, VertexAttribPointerType.Float, false, 12, 0);

// 法線の頂点属性設定。シェーダでlayout(location = 1)を指定していると想定
const int NormalLocation = 1;
GL.EnableVertexAttribArray(NormalLocation);
GL.VertexAttribPointer(
    NormalLocation, 3, VertexAttribPointerType.Float, false, 12, 0);

GL.EnableVertexAttribArray(0);
GL.BindVertexArray(0);
```

あとは、上記で生成したバッファと頂点配列を用いて描画を行います。

```cs
// ...この手前で、gl.UserProgramを呼んで、該当のシェーダーを呼び出しておく。

// 頂点配列をバインド
GL.BindVertexArray(vertexArrays[0]);
// 頂点インデックスをバインド
GL.BindBuffer(buffers[2]);
// 頂点インデックスを用いて描画
GL.DrawElements(PrimitiveType.Triangles,
    indices.Length, DrawElementsType.UnsignedInt, 0);

// バインド解除
GL.EnableVertexAttribArray(0);
GL.BindVertexArray(0);
```

試しにUtah teapotを、Phong Shading（Ambient + Diffuse + Specular）で描画した様子を示します。

![Utah teapotを描画した様子](./teapot.png)

上記の実装は、モデルのロードと読み込んだ頂点やインデックスのバッファ転送、描画コマンドのみをピックアップしているので、そのままでは動きません。
上記実装そのままではないですが(上記の実装をクラス化したりなどをしていますが)、上記画像を描画したシェーダー生成などを含めたプログラムは[こちら](https://github.com/yucchiy/OpenTKTutorial/blob/88a461fb209621dc1b876bdec55b08089a9f23d8/OpenTKTutorial/Scene/ModelLoading/ModelLoadingScene.cs)になります。

## まとめ

Assimpの概要と、C#でAssimpを利用することができるAssimpNetの紹介、読み込んだモデルの頂点と法線を用いてモデルの描画までを行いました。
次はマテリアルの読み込み、テクスチャをロードしてテクスチャマッピングを実装したいと思います。

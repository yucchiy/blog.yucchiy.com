---
date: "2020-11-07T19:00:00+09:00"
draft: false
title: "C#のアプリケーションにリソースを埋め込み、利用する"
tags: ["C#", ".NET"]

---

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">待ちきれずビルドして試してみた<br>Goで //go:embed file ってコメントに書くと、ファイルの中身が変数に入るようになったので、とてもありがたい<br>これで、フォントの埋め込みなどはサードパーティ製のライブラリでコードを生成しなくて済む <a href="https://t.co/TL43HAziiL">https://t.co/TL43HAziiL</a> <a href="https://t.co/0F5edNSpOJ">pic.twitter.com/0F5edNSpOJ</a></p>&mdash; 鬼滅のゴリラ@無限レビュー編 (@gorilla0513) <a href="https://twitter.com/gorilla0513/status/1321948482433736704?ref_src=twsrc%5Etfw">October 29, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

[巷でとある言語がバイナリにアセットを埋め込めるようになったと話題](https://mattn.kaoriya.net/software/lang/go/20201030092005.htm)ですが、C#でも同じようなことができそうなので共有したいと思います。

## リソースを埋め込み、読み込む

まずリソースを埋め込むには、プロジェクトファイル(`csproj`)の`<ItemGroup>`内に`<EmbeddedResource>`で、埋め込みたいリソースを定義します。
例えば、`sample.csproj`と同じフォルダ内にある`example.txt`を埋め込みたい場合は、下記のように書きます。

```xml
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>netcoreapp3.1</TargetFramework>
    <RootNamespace>sample</RootNamespace>
  </PropertyGroup>

  <ItemGroup>
    <!-- example.txtを埋め込む -->
    <EmbeddedResource Include="./example.txt" />
  </ItemGroup>

</Project>
```

これでこのプロジェクトの生成する実行ファイル(OutputTypeがLibraryの場合はdll)に指定したアセットが埋め込まれます。

次に、[Assembly.GetManifestResourceStream](https://docs.microsoft.com/en-us/dotnet/api/system.reflection.assembly.getmanifestresourcestream?view=netcore-3.1)メソッドを利用して埋め込まれたファイルを読み込みます。これは`System.Reflection.Assembly`クラスのメソッドです。
つまり、そのファイルが埋め込まれたAssemblyインスタンスを[Assembly.GetExecutingAssembly](https://docs.microsoft.com/en-us/dotnet/api/system.reflection.assembly.getexecutingassembly?view=netcore-3.1)などで取得して、そのインスタンスで実行しないと期待した動作をしません。

```cs
var assembly = Assembly.GetExecutingAssembly();
// またはそのアセンブリに所属するクラス情報から参照する
// こちらのほうがコンテキストに依存しないから確実かも
// var type = typeof(Program);
// var assembly = type.Assembly;
var stream = assembly
  .GetManifestResourceStream("sameple.example.txt");
var streamReader = new StreamReader(stream);
var text = streamReader.ReadToEnd();
// example.txtの中身を表示
System.Console.WriteLine(text); 
```

上記のコードで`example.txt`のテキストを取得できます。

## リソース埋め込み詳細

リソースの埋め込み方について、もう少し深ぼります。

まず、先述のとおりですが、`EmbeddedResource`タグでリソースを埋め込みます。埋め込むデータは `Include`属性で指定します。
パスは、プロジェクトルート(特に指定しなければcsprojが配置されている箇所)からの相対パスで指定します。

```xml
<EmbeddedResource Include="./example.txt" />
```

いわゆるglob指定も行うことができます。下記は、プロジェクトファイルがあるディレクトリにある全ての`txt`拡張子のファイルをすべて埋め込みます。

```xml
<EmbeddedResource Include="./*.txt" />
```

ディレクトリ階層にもglob指定が適用できます。下記は`./resources`下の任意のディレクトリ内の`txt`拡張子のファイルをすべて埋め込みます。

```xml
<EmbeddedResource Include="./resources/**/*.txt" />
```

詳細は後述しますが、リソース名は明示的に指定することができます。指定には `LogicalName` 属性を指定します。
下記では、`example_with_logical_name.txt` を埋め込み、そのリソース名を `logical_name_test` とします。

```xml
<EmbeddedResource Include="./example_with_logical_name.txt" LogicalName="logical_name_test" />
```

## リソース名のルールについて

`Assembly.GetManifestResourceStream`メソッドには埋め込んだリソースの名前を渡しますが、リソース名は具体的に`<RootNamespace>`.`<ResourceFilePathFromProjectRoot>`となります。
`<RootNamespace>`は、プロジェクトファイルの `<PropetyGroup>` 項目の、 `<RootNamespace>` で指定している場合はその値が、指定していない場合は プロジェクトファイルの拡張子を除いたファイルが利用されます。

`<ResourceFilePathFromProjectRoot>`は、プロジェクトルートを起点としたリソースファイルへの相対パスになります。ただし、ファイルパスがそのままではなく、下記のルールが適用されます。

- ディレクトリセパレーター( `/`や`\`)は `.` (ドット)に置き換えます
- ディレクトリ名の頭が数字の場合は、接頭に `_` (アンダーバー)を挿入します

いくつか例を示します。コメントに実際のリソース名を記載しました。

```xml
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>netcoreapp3.1</TargetFramework>
    <RootNamespace>MySample</RootNamespace>
  </PropertyGroup>

  <ItemGroup>
    <!-- MySample.example.txt -->
    <EmbeddedResource Include="./example.txt"/>
    <!-- MySample.resource.example_in_resource_directory.txt -->
    <EmbeddedResource
      Include="./resource/example_in_resource_directory.txt"/>
    <!-- MySample.resource._01.01_example.txt -->
    <EmbeddedResource Include="./resource/01/01_example.txt"/>
  </ItemGroup>
</Project>
```

ただし上記の例外として、`LogicalName` を指定した場合は、その名前がそのままリソース名となります。

```xml
<!-- example_with_logical_name -->
<EmbeddedResource Include="./example_with_logical_name.txt"
  LogicalName="example_with_logical_name"/>
```

## 埋め込まれたリソース一覧の取得方法

[Assembly.GetManifestResourceNames](https://docs.microsoft.com/en-us/dotnet/api/system.reflection.assembly.getmanifestresourcenames?view=netcore-3.1)で埋め込まれたリソース名の一覧を取得できます。にデバッグなどにも便利です。

下記は、すべての埋め込まれたアセットと、そのコンテンツを表示するプログラムです。

```cs
using System;
using System.Reflection;
using System.IO;
class Program
{
    static void Main(string[] args)
    {
        var assembly = Assembly.GetExecutingAssembly();
        foreach (var name in assembly.GetManifestResourceNames())
        {
            Console.WriteLine($"Name: {name}");
            Console.WriteLine($"Content:");
            var stream = assembly.GetManifestResourceStream(name);
            var streamReader = new StreamReader(stream);
            var text = streamReader.ReadToEnd();
        }
    }
}
```

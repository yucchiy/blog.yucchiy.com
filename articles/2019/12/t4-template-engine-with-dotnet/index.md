---
date: "2019-12-07T19:00:00+09:00"
draft: false
title: ".NET CoreでのT4の利用と、実行時テキスト生成の挙動を追ってみる"
tags: ["Tips", "C#", ".NET Core", "Template Engine"]

---

## 概要

- .NET CoreでT4を利用して実行時テキスト生成を行う
- どのようにテンプレートエンジンが動作しているかを確認する

## セットアップ

T4をセットアップし、簡単なテンプレートによるテキスト生成を行ってみます。
.NET Coreでは、[Mono.TextTemplating](https://github.com/mono/t4)を利用します。

```
$ dotnet new console
$ dotnet add package Mono.TextTemplating
```

これで、T4テンプレートを利用できます。
`SampleTemplating.tt`というテンプレートファイルを作成してみます。

```
<#@ template language="C#" #>
<#@ assembly name="System.Core" #>
<#@ import namespace="System.Linq" #>
<#@ import namespace="System.Text" #>
<#@ import namespace="System.Collections.Generic" #>

Hello t4 template!
```

また、ランタイム時テキスト生成のために、下記の設定を`.csprroj`に追加します。
下記は、Visual Studio for Macが生成した設定を抜粋しています。

```
  <ItemGroup>
    <Compile Update="SampleTemplating.cs">
      <DependentUpon>SampleTemplating.tt</DependentUpon>
    </Compile>
  </ItemGroup>
  <ItemGroup>
    <None Update="SampleTemplating.tt">
      <Generator>TextTemplatingFilePreprocessor</Generator>
      <LastGenOutput>SampleTemplating.cs</LastGenOutput>
    </None>
  </ItemGroup>
```

この設定の場合は、Visual Studioのファイル保存のタイミングで実施されるようなので、
もしVisual Studio以外で開発していたり、コマンドライン実行のタイミングなどでテンプレートを動的につくりたい場合は、dotnet-t4-project-tool](https://www.nuget.org/packages/dotnet-t4-project-tool/)を利用すると良いでしょう。

```
  <ItemGroup>
    <DotNetCliToolReference Include="dotnet-t4-project-tool" Version="2.0.5" />
  </ItemGroup>
```

`DotNetCliToolReference`を追加すると、dotnetのサブコマンドとして`t4`が生えます。

```
$ dotnet restore
$ dotnet t4 --help
T4 text template processor version 2.0.5+gb7c3b777e4
Usage: dotnet-t4 [options] input-file

Options:

  -o, --out=<file>           Name or path of the output <file>. Defaults to
                               the input filename with its extension changed to
                               `.txt'. Use `-' to output to stdout.
  -r=<assembly>              Name or path of an <assembly> reference.
                               Assemblies will be resolved from the framework
                               and the include folders
  -u, --using=<namespace>    Import a <namespace>' statement with a `using
  -I=<directory>             Search <directory> when resolving file includes
  -P=<directory>             Search <directory> when resolving assembly
                               references
  -c, --class=<name>         Preprocess the template into class <name>
  -p[=VALUE1=VALUE2]         Add a <name>=<value> key-value pair to the
                               template's `Session' dictionary. These can also
                               be accessed using strongly typed properties
                               declared with `<#@ parameter name="<name>"
                               type="<type>" #> directives.
      --debug                Generate debug symbols and keep temp files
  -v, --verbose              Generate debug symbols and keep temp files
  -h, -?, --help             Show help

TextTransform.exe compatibility options (deprecated):

      --dp=VALUE             Directive processor (name!class!assembly)
  -a=VALUE                   Parameters (name=value) or
                               ([processorName!][directiveName!]name!value)
```

ビルド前にT4のテンプレート生成を行っておくと便利です。`.csproj`を下記のように編集します。　

```
  <ItemGroup>
    <DotNetCliToolReference Include="dotnet-t4-project-tool" Version="2.0.5" />
    <PackageReference Include="Mono.TextTemplating" Version="2.0.5" />

    <TextTemplate Include="**\*.tt" />
    <Generated Include="**\*.Generated.cs" />
  </ItemGroup>

  <Target Name="TextTemplateTransform" BeforeTargets="BeforeBuild">
    <Exec WorkingDirectory="$(ProjectDir)" Command="dotnet t4 %(TextTemplate.Identity) -c $(RootNameSpace).%(TextTemplate.Filename) -o %(TextTemplate.Filename).Generated.cs" />
  </Target>
```


最後に`Program.cs`で、テンプレートから生成したテキストを表示してみます。

```cs
using System;

namespace T4RuntimeTextGeneration
{
    class Program
    {
        static void Main(string[] args)
        {
            var template = new SampleTemplating();
            Console.WriteLine(template.TransformText());
        }
    }
}
```

実行すると、下記のようになり、テキストが生成できていることが確認できます。

```
$ dotnet run
Hello T4 Template!
```

## 生成されたクラスを追ってみる

T4がどのように動作しているか追ってみます。まずは、`SampleTemplating.tt`により生成されたクラスの一部を抜粋します。

```cs
namespace T4RuntimeTextGeneration {
    using System.Linq;
    using System.Text;
    using System.Collections.Generic;
    using System;
    
    
    public partial class SampleTemplating : SampleTemplatingBase {
        
        public virtual string TransformText() {
            this.GenerationEnvironment = null;
            
            #line 6 "SampleTemplating.tt"
            this.Write("Hello T4 Template!\n");
            
            #line default
            #line hidden
            return this.GenerationEnvironment.ToString();
        }
        
        public virtual void Initialize() {
        }
    }
}
```

`GenerationEnvironment`は`System.Text.StringBuilder`で、テンプレート内の文字列を連結して、文字列を生成しているようです。

### 変数を埋め込む

では、テンプレートに対して、そとから与えらた変数を埋め込む場合はどうするのでしょうか。
具体的にはテンプレートを下記のように修正します。

```
<#@ template language="C#" #>
<#@ assembly name="System.Core" #>
<#@ import namespace="System.Linq" #>
<#@ import namespace="System.Text" #>
<#@ import namespace="System.Collections.Generic" #>

Hello t4 template!

Assigned value is <#= {Value} =>.
```

生成されるクラスの`TransformText`メソッドは以下のとおりです。

```
        public virtual string TransformText() {
            this.GenerationEnvironment = null;

            #line 6 "SampleTemplating.tt"
            this.Write("Hello T4 Template!\n\nAssigned value is ");

            #line default
            #line hidden

            #line 8 "SampleTemplating.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture( Value ));

            #line default
            #line hidden

            #line 8 "SampleTemplating.tt"
            this.Write("\n");

            #line default
            #line hidden
            return this.GenerationEnvironment.ToString();
        }
```

テンプレート変数として定義した`Value`を`SampleTemplating`クラスのプロパティとして展開しています。
また、テンプレートから生成されたクラスは、partialで定義されているため、`SampleTemplating.cs`を下記のように定義することで、
変数を外から渡すことができます。

```cs
namespace T4RuntimeTextGeneration
{
    partial class SampleTemplating
    {
        public string Value { get; set }
    }
}
```

```cs
using System;

namespace T4RuntimeTextGeneration
{
    class Program
    {
        static void Main(string[] args)
        {
            var template = new SampleTemplating();
            template.Value = "Hoge";
            Console.WriteLine(template.TransformText());
        }
    }
}
```

`dotnet run`を実行することで、外から渡した`"Hoge"`が埋め込まれていることが確認できます。

```
$ dotnet run
Hello T4 Template!

Assigned value is Hoge
```

### 制御構文を使ってみる

ここまでくると、だいたい想像がつくかと思いますが、`foreach`を利用してみて、制御構文がどう展開されているか確認してみます。
`SampleTemplating.tt`に下記のようなテンプレートを記載します。

```
<#
foreach (var val in Ary)
{
#>

<#= val #>

<#
}
#>
```

`SampleTemplating.Generated.cs`の`foreach`部は以下のように展開されていました。
わりとそのままテンプレート部が展開されているのが分ります。

```cs
            #line 10 "SampleTemplating.tt"

foreach (var val in Ary)
{

            
            #line default
            #line hidden
            
            #line 14 "SampleTemplating.tt"
            this.Write("\n");
            
            #line default
            #line hidden
            
            #line 15 "SampleTemplating.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture( val ));
            
            #line default
```

`SampleTemplating.cs`と`Program.cs`を下記のように修正し、実行することで、繰り返し構文の動作が確認できます。

```cs

// SampleTemplating.cs
namespace T4RuntimeTextGeneration
{
    partial class SampleTemplating
    {
        public string Value { get; set; }
        public string[] Ary { get; set; }
    }
}

// Program.cs
using System;

namespace T4RuntimeTextGeneration
{
    class Program
    {
        static void Main(string[] args)
        {
            var template = new SampleTemplating();
            template.Value = "Hoge";
            template.Ary = new string[]
            {
                "first",
                "second",
                "third",
            };

            Console.WriteLine(template.TransformText());
        }
    }
}
```

```
$ dotnet run
Hello T4 Template!

Assigned value is Hoge


first


second


third
```

## まとめ

テンプレートエンジンであるT4を.NET Coreで動かし、ランタイム時テキスト生成を試しました。
また、生成されるクラスの中を読み解き、テンプレートエンジンの動作を確認しました。

## 参考

- [T4 テキスト テンプレートを使用した実行時テキスト生成](https://docs.microsoft.com/ja-jp/visualstudio/modeling/run-time-text-generation-with-t4-text-templates?view=vs-2019)
- [.NET Core+VS CodeでもT4 テンプレートエンジンでコード生成したい！](https://qiita.com/nogic1008/items/2c4049d43a11e83df15b)
- [.NET Core時代のT4によるC#のテキストテンプレート術](http://neue.cc/2019/12/06_585.html)


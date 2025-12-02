---
title: Project Auditorでカスタムアナライザーを実装する
description: Project Auditorのカスタムアナライザーの実装方法について紹介します。プロジェクト固有のコーディング規約やルールに基づいた静的解析を実装できます。
pubDatetime: 2025-12-02T00:00:00+09:00
tags:
  - Unity
  - Project Auditor
  - 静的解析
  - Advent Calendar
---

[Unity - Qiita Advent Calendar 2025](https://qiita.com/advent-calendar/2025/unity) の3日目の記事です。

この記事では、[Project Auditor](https://docs.unity3d.com/Packages/com.unity.project-auditor@1.0/manual/index.html)のカスタムアナライザーの実装方法について紹介します。

## はじめに

[前回の記事](https://blog.yucchiy.com/2025/12/project-auditor-intro)では、Project Auditorの概要から導入方法、基本的な使い方について紹介しました。

Project Auditorにはビルトインで多くの解析項目が実装されていますが、カスタムアナライザーを実装することで、プロジェクト固有のコーディング規約やルールに基づいた解析も可能です。

この記事では、カスタムアナライザーの実装方法について紹介します。

### 検証環境

下記のバージョンを用いて検証を行いました。

- Unity: 6000.2.13f1
- Project Auditor: 1.0.2

## カスタムアナライザーの概要

Project Auditorのカスタムアナライザーは、ビルトインのアナライザーと同様の仕組みで動作します。解析対象に応じた基底クラスを継承し、検出ルールを定義することで、独自の静的解析を実装できます。

カスタムアナライザーを実装することで、以下のような用途に活用できます。

- **プロジェクト固有のコーディング規約のチェック**: 例えば、特定の命名規則に従っていないアセットを検出する
- **チーム独自のベストプラクティスの適用**: 例えば、テクスチャサイズの上限をプロジェクトごとに設定してチェックする
- **特定のアセット設定の強制**: 例えば、モバイル向けテクスチャには必ずプラットフォーム固有の設定を要求する


## カスタムアナライザーの実装

カスタムアナライザーは、解析対象に応じた基底クラスを継承して実装します。
テクスチャのサイズをチェックするアナライザーを例に、カスタムアナライザーの実装方法を紹介します。

### Descriptorの定義

まず、アナライザーが検出する問題を表す `Descriptor` を作成します。
`Descriptor` には、ルールを一意に識別するIDと、問題の説明や推奨対処法などを設定します。

例えば、今回のアナライザーでは、下記のように `Descriptor` を定義します。

```csharp
const string k_Id = "PAA9000";
const int k_MaxTextureSize = 128;

private static readonly Descriptor k_Descriptor = new Descriptor(
    k_Id,                                // ID
    "Texture: Exceeds Maximum Size",      // タイトル
    Areas.Memory | Areas.Quality,        // 影響領域
    "テクスチャが最大サイズを超えています", // 説明
    $"Max Sizeを{k_MaxTextureSize}以下にしてください"  // 推奨対処法
)
{
    MessageFormat = "Texture '{0}' size is {1}x{2}",
    DocumentationUrl = "https://yucchiy.com/path/to/documentation.html"
};
```

Descriptorのコンストラクタで指定できるパラメータは以下の通りです。

| パラメータ       | 説明                                                                         |
|------------------|------------------------------------------------------------------------------|
| `id`             | ルールを一意に識別する文字列                                                 |
| `title`          | 問題の簡潔なタイトル。Project Auditorのリストに表示される。                  |
| `areas`          | 問題が影響する領域。複数指定する場合は、ビット演算で組み合わせて指定する。　 |
| `description`    | 問題の詳細な説明                                                             |
| `recommendation` | 問題を解決するための推奨アクション                                           |


`id` は `PAA0000-PAA9999` のような形式で指定します。Project Auditorの実装を確認すると、問題のカテゴリに応じて以下のプレフィックスが使われています。

| プレフィックス | カテゴリ      | 用途                    |
|----------------|---------------|-------------------------|
| `PAC`          | Code          | コード解析の問題        |
| `PAS`          | Settings      | プロジェクト設定の問題  |
| `PAA`          | Assets        | アセットの問題          |
| `UDR`          | Domain Reload | Domain Reload関連の問題 |

そのため、基本的にはカテゴリに応じて上記のプレフィックスを採用するのが良いかと思います。

今回はアセットに対してのカスタムアナライザーを実装するため `PAA` を使用します。

番号は、ビルトインのアナライザーが `PAA0000-PAA3002` 付近を使用しているため、衝突を避けるためにそれ以降の離れた番号を使用するのが良いでしょう。
（公式ドキュメントのサンプルでも `PAA9000` が使われています）

また、オブジェクト初期化子などを用いて、以下のプロパティを追加で設定できます。

| プロパティ           | 説明                                                                                                                                 |
|----------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| `MessageFormat`      | 問題のメッセージフォーマット。`{0}` や `{1}`などのプレースホルダーを使用すると、後述する `CreateIssue` の引数で置換される。          |
| `DocumentationUrl`   | 問題に関するドキュメントのURL。設定しておくと、Project Auditorウィンドウからリンクとして表示される。                                 |
| `DefaultSeverity`    | デフォルトの重要度。後述する `CreateIssue` でこの指定を省略した場合にこの値が利用される。デフォルト値は `Severity.Moderate` となる。 |
| `IsEnabledByDefault` | デフォルトで有効にするかどうか。デフォルトは `true`。                                                                                |
| `Platforms`          | 対象プラットフォームを `BuildTarget[]` で指定。`null`の場合は全プラットフォームが対象。                                              |
| `MinimumVersion`     | このルールが適用される最小Unityバージョン                                                                                            |
| `MaximumVersion`     | このルールが適用される最大Unityバージョン                                                                                            |
| `Fixer`              | 自動修正機能。`Action<ReportItem, AnalysisParams>` で修正ロジックを定義する（後述）。                                                |

### Initializeメソッドの実装

Descriptorを定義したら、`Initialize` メソッドでDescriptorを登録します。`Initialize`メソッドは、アナライザーが初期化される際に呼び出され、引数の `registerDescriptor` に Descriptor を渡すことで登録します。

```csharp
public override void Initialize(Action<Descriptor> registerDescriptor)
{
    registerDescriptor(k_Descriptor);
}
```

### Analyzeメソッドの実装

`Analyze` メソッドで解析ロジックを実装します。このメソッドは各アセットに対して呼び出され、そのアセット情報は `Analyze` メソッドの引数で渡されるコンテキストに格納されます。

今回は、テクスチャのサイズを検証するので、 `TextureAnalysisContext.Texture` を参照します。問題を検出した場合は `context.CreateIssue` で ReportItem を生成して `yield return` で返します。

```csharp
public override IEnumerable<ReportItem> Analyze(TextureAnalysisContext context)
{
    // テクスチャのサイズをチェック
    if (context.Texture.width > k_MaxTextureSize ||
        context.Texture.height > k_MaxTextureSize)
    {
        yield return context.CreateIssue(
                IssueCategory.AssetIssue,
                k_Id,
                context.Name,
                context.Texture.width,
                context.Texture.height
            )
            .WithSeverity(Severity.Minor)
            .WithLocation(context.Importer.assetPath);
    }
}
```

#### CreateIssueメソッドの引数

`CreateIssue`メソッドには、以下に示す引数を渡すことができます。

| パラメータ | 説明                                                                                                                                                             |
|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `category` | 問題のカテゴリ。`IssueCategory.AssetIssue`（アセットの問題）、`IssueCategory.ProjectSetting`（設定の問題）、`IssueCategory.Code`（コードの問題）などを指定する。 |
| `id`       | Descriptorで定義したルールID                                                                                                                                     |
| `args`     | `MessageFormat`のプレースホルダーに対応する値。上記のコードでは`{0}`にテクスチャ名、`{1}`に幅、`{2}`に高さが入る。                                               |

`CreateIssue`の戻り値は `ReportItemBuilder` になります。

#### ReportItemBuilder

`ReportItemBuilder` は文字通り `ReportItem` のビルダークラスとなっており、このクラスを用いて、Issueに対して追加の情報を設定できます。

下記に、設定できる情報とそのメソッドを示します。

| メソッド                           | 説明                                                                                                              |
|------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| `WithSeverity(Severity)`           | 問題の重要度を設定。`Severity.Critical`、`Severity.Major`、`Severity.Moderate`、`Severity.Minor`から選択          |
| `WithLocation(string, int)`        | 問題が発生しているファイルパスと行番号を設定。Project Auditorウィンドウでダブルクリックした際のジャンプ先になる   |
| `WithDescription(string)`          | 問題の説明文を設定                                                                                                |
| `WithCustomProperties(object[])`   | カスタムプロパティを設定。Project Auditorのテーブルに追加のカラムとして表示される                                 |
| `WithDependencies(DependencyNode)` | 依存関係ツリーを設定。Build Reportなどで依存関係を可視化する際に使用                                              |
| `WithLogLevel(LogLevel)`           | ログレベルを設定。`LogLevel.Error`、`LogLevel.Warning`、`LogLevel.Info`から選択。内部的には`Severity`に変換される |

上記のメソッドは、全て自分自身のインスタンスを返却するため、下記に示すようにメソッドチェーンを用いて情報を設定できます。

```csharp
yield return context.CreateIssue(
        IssueCategory.AssetIssue,
        k_Id,
        context.Name,
        context.Texture.width,
        context.Texture.height
    )
    // このようにメソッドチェーンで設定できる
    .WithSeverity(Severity.Minor)
    .WithLocation(context.Importer.assetPath);
```

### 動作確認

上記の実装して、解析を行うことで、下図のように独自の解析が行えることが確認できます。

![](./project-auditor-mytexture-analyzer.png)


### 実装の全体像

以下がテクスチャサイズをチェックするアナライザーの実装の全文です。

```csharp
using System;
using System.Collections.Generic;
using Unity.ProjectAuditor.Editor;
using Unity.ProjectAuditor.Editor.Core;

class MyTextureSizeAnalyzer : TextureModuleAnalyzer
{
    const string k_Id = "PAA9000";
    const int k_MaxTextureSize = 128;

    private static readonly Descriptor k_Descriptor = new Descriptor(
        k_Id,
        "Texture: Exceeds Maximum Size",
        Areas.Memory | Areas.Quality,
        "テクスチャが最大サイズを超えています",
        $"Max Sizeを{k_MaxTextureSize}以下にしてください"
    )
    {
        MessageFormat = "Texture '{0}' size is {1}x{2}",
        DocumentationUrl = "https://yucchiy.com/path/to/documentation.html"
    };

    public override void Initialize(Action<Descriptor> registerDescriptor)
    {
        registerDescriptor(k_Descriptor);
    }

    public override IEnumerable<ReportItem> Analyze(TextureAnalysisContext context)
    {
        if (context.Texture.width > k_MaxTextureSize ||
            context.Texture.height > k_MaxTextureSize)
        {
            yield return context.CreateIssue(
                    IssueCategory.AssetIssue,
                    k_Id,
                    context.Name,
                    context.Texture.width,
                    context.Texture.height
                )
                .WithSeverity(Severity.Minor)
                .WithLocation(context.Importer.assetPath);
        }
    }
}
```


## 自動修正機能（Fixer）の実装

Descriptorに `Fixer` プロパティを設定することで、検出された問題を自動修正する機能を追加できます。

例として、UIテクスチャにMipmapが有効になっている問題を検出し、自動で無効化するアナライザーを実装してみます。
`/UI/` パス配下のテクスチャを対象に、Mipmapが有効な場合に警告を出し、Fixerで自動的に無効化します。

```csharp
class UITextureMipmapAnalyzer : TextureModuleAnalyzer
{
    const string k_Id = "PAA9001";

    static readonly Descriptor k_Descriptor = new Descriptor(
        k_Id,
        "Texture: UI Texture Has Mipmap Enabled",
        Areas.Memory,
        "UIテクスチャにMipmapが有効になっています。UIは拡大縮小されることが少ないため、Mipmapは不要でメモリの無駄になります。",
        "Mipmapを無効にしてください。"
    )
    {
        MessageFormat = "UI Texture '{0}' has Mipmap enabled",
        Fixer = (issue, analysisParams) =>
        {
            var importer = AssetImporter.GetAtPath(issue.RelativePath) as TextureImporter;
            if (importer != null)
            {
                importer.mipmapEnabled = false;
                importer.SaveAndReimport();
            }
        }
    };

    public override void Initialize(Action<Descriptor> registerDescriptor)
    {
        registerDescriptor(k_Descriptor);
    }

    public override IEnumerable<ReportItem> Analyze(TextureAnalysisContext context)
    {
        // /UI/ パス配下のテクスチャかつ、Mipmapが有効な場合に警告
        if (context.Importer.assetPath.Contains("/UI/") &&
            context.Importer.mipmapEnabled)
        {
            yield return context.CreateIssue(
                    IssueCategory.AssetIssue,
                    k_Id,
                    context.Name
                )
                .WithLocation(context.Importer.assetPath);
        }
    }
}
```

`Fixer` が設定されたルールによって検知された問題は、下図に示すように「Quick Fix」ボタンが表示されます。

![](./project-auditor-quick-fix.png)

このボタンをクリックすると `Fixer` で設定した処理が実行され、上記の場合は Mipmap 設定が無効になります。


## 他のアセットタイプを解析する

テクスチャ以外にも、オーディオやメッシュなど様々なアセットタイプを解析できます。Project Auditorでは、解析対象に応じて以下の基底クラスが用意されています。

| 基底クラス                      | 解析対象           | 主な用途                                            |
|---------------------------------|--------------------|-----------------------------------------------------|
| `TextureModuleAnalyzer`         | テクスチャ         | テクスチャのサイズ制限、圧縮設定の検証              |
| `AudioClipModuleAnalyzer`       | オーディオクリップ | Load Type設定、圧縮形式のチェック                   |
| `MeshModuleAnalyzer`            | メッシュ           | 頂点数制限、Read/Write設定の検出                    |
| `ShaderModuleAnalyzer`          | シェーダー         | シェーダーバリアント数のチェック                    |
| `SpriteAtlasModuleAnalyzer`     | スプライトアトラス | 空きスペースの検証、パッキング効率のチェック        |
| `SettingsModuleAnalyzer`        | プロジェクト設定   | Quality Settings、Player Settingsの検証             |
| `AssetsModuleAnalyzer`          | 汎用アセット       | ファイル命名規則、アセット配置ルールの検証          |
| `PackagesModuleAnalyzer`        | Unityパッケージ    | パッケージバージョン、依存関係の検証                |
| `CodeModuleInstructionAnalyzer` | C#コード（IL）     | 特定APIの呼び出しチェック、パフォーマンス問題の検出 |

各基底クラスの `Analyze` メソッドに渡されるContextには、対象を解析に必要な情報が含まれています。

例えば `AudioClipAnalysisContext` には、解析対象の `AudioClip` オブジェクトそのものや、そのオーディオを処理した `AudioImporter`、そのオーディオのメモリ使用量を推定した `RuntimeSize` などが含まれます。


### 実例: CodeModuleInstructionAnalyzerを用いたコード解析

`TextureModuleAnalyzer` とは別の解析の実装として、`CodeModuleInstructionAnalyzer` を継承することで、C#コードをIL（中間言語）レベルで解析する例を示します。

例えば、`Resources.Load` の呼び出しを検出するアナライザーは以下のように実装できます。

```csharp
using System;
using System.Collections.Generic;
using Mono.Cecil;
using Mono.Cecil.Cil;
using Unity.ProjectAuditor.Editor;
using Unity.ProjectAuditor.Editor.Core;

class ResourcesLoadAnalyzer : CodeModuleInstructionAnalyzer
{
    const string k_Id = "PAC9000";

    static readonly Descriptor k_Descriptor = new Descriptor(
        k_Id,
        "Resources.Load Usage",
        Areas.Memory | Areas.BuildSize,
        "Resources.Loadを使用しています。",
        "Addressablesの使用を検討してください。"
    )
    {
        MessageFormat = "Resources.{0} called in '{1}'"
    };

    // 解析対象のOpCodeを指定
    readonly OpCode[] m_OpCodes = { OpCodes.Call };

    public override IReadOnlyCollection<OpCode> opCodes => m_OpCodes;

    public override void Initialize(Action<Descriptor> registerDescriptor)
    {
        registerDescriptor(k_Descriptor);
    }

    public override ReportItemBuilder Analyze(InstructionAnalysisContext context)
    {
        // ここではプロジェクト中のコードの内、opCodesで指定した呼び出し命令の一覧が順繰り渡ってくる

        // 呼び出し先のメソッド情報を取得
        var callee = (MethodReference)context.Instruction.Operand;

        // UnityEngine.Resources クラスのメソッドかどうかをチェック
        if (callee.DeclaringType.FullName != "UnityEngine.Resources") return null;

        // Loadメソッドの呼び出しを検出
        if (!callee.Name.StartsWith("Load")) return null;

        return context.CreateIssue(
            IssueCategory.Code,
            k_Id,
            callee.Name,
            context.MethodDefinition.Name
        );
    }
}
```

`CodeModuleInstructionAnalyzer` を継承する場合、アセットアナライザーといくつか異なる点があります。

- `opCodes` プロパティで解析対象のOpCodeを指定する必要がある。メソッド呼び出しを検出する場合は `OpCodes.Call` や `OpCodes.Callvirt` を指定する。
- `Analyze` メソッドの戻り値は `IEnumerable<ReportItem>` ではなく `ReportItemBuilder` となる。問題がなければ `null` を返す。
- `InstructionAnalysisContext` には、現在解析中のメソッド（`MethodDefinition`）とIL命令（`Instruction`）が格納されている。

OpCodeについては [Mono.CecilのGitHubリポジトリ](https://github.com/jbevain/cecil/blob/master/Mono.Cecil.Cil/OpCodes.cs) などを参照してください。


## 終わりに

この記事では、Project Auditorのカスタムアナライザーの実装方法について紹介しました。

プロジェクトで本格的にProject Auditorを導入するには、解析の拡張は重要な機能だと思っているので、このような機能が標準で提供されているのは良いな、と感じました。

一方で、コードの解析については、ILでの解析がベースというところもあり、複雑な解析はRoslyn Analyzerの実装を検討しても良いのかなと思いました。
プロジェクトで本格的に独自のRoslyn Analyzerを実装する環境が整備してなかったり、簡易的な解析であればサクッと解析が実現できるので、そういう使い分けになるのかな、という所感です。
（[ドキュメントを見る限り](https://docs.unity3d.com/Packages/com.unity.project-auditor@1.0/manual/code-view-reference.html#compiler-messages)は、Roslyn Analyzerの解析結果も表示されそうなのですが、試しに[Microsoft.Unity.Analyzer](https://github.com/microsoft/Microsoft.Unity.Analyzers)を設定して、Unityのコンソールログ上でログが出る状態でも、手元ではProject Auditor上で表示させることができませんでした。）

Project Auditorのカスタムアナライザーの実装の参考になれば幸いです。

## 参考

- [Project Auditor package | Project Auditor | 1.0.2](https://docs.unity3d.com/Packages/com.unity.project-auditor@1.0/manual/index.html)
- [Creating custom analyzers | Project Auditor | 1.0.2](https://docs.unity3d.com/Packages/com.unity.project-auditor@1.0/manual/custom-analyzers.html)
- [Code view reference | Project Auditor | 1.0.2](https://docs.unity3d.com/Packages/com.unity.project-auditor@1.0/manual/code-view-reference.html)
- [Roslyn analyzers | Unity Manual](https://docs.unity3d.com/Manual/roslyn-analyzers.html)
- [Microsoft.Unity.Analyzers | GitHub](https://github.com/microsoft/Microsoft.Unity.Analyzers)

---
date: "2021-03-30T07:00:00+09:00"
draft: false
title: "System.Diagnostics.Processを用いてコマンドラインを実行する"
tags: ["C#"]

---

`System.Diagnostics.Process`を利用するとプロセスを新たに実行したり、すでに実行中のプロセスに対してなにか処理を行うことができます。

例として`git pull`をC#プログラム上から実行してみます。

まずはプロセスを実行する準備を行います。`System.Diagnostics.Process`をnewして`Process.StartInfo`に情報を埋めていきます。

```cs
var process = new System.Diagnostics.Process();
// 作業ディレクトリの指定。指定しないとEnvironment.CurrentDirectoryになる
process.StartInfo.WorkingDirectory = "/tmp/git-repository";
process.StartInfo.FileName = "git";
process.StartInfo.Arguments = "pull";
// OSのシェルを利用するかどうか
process.StartInfo.UseShellExecute = false;
// Windowを生成しない
process.StartInfo.CreateNoWindow = true;
// 上記をfalseにした場合標準入力、標準出力、標準エラー出力
// をストリームにリダイレクトすることができる
// こちらは用途に応じて
process.StartInfo.RedirectStandardInput = true;
process.StartInfo.RedirectStandardOutput = true;
process.StartInfo.RedirectStandardError = true;
```

`StartInfo.WorkingDirectory`はそのプロセスを実行するディレクトリになります。
指定しない場合は`Environment.CurrentDirectory`になります。
この`CurrentDirectory`はプログラムを実行する状況によって異なる可能性があるため、場合によっては明示的に指定するほうが良いです。

`StartInfo.UseShellExecute`はOSのシェルを経由してプロセスを実行するかを指定します。外部プロセスでコマンドを実行したい場合はこれを`false`にします。
大抵のコマンドラインアプリケーションの場合はウインドウを生成することはないので念の為`StartInfo.CreateNoWindow`もあわせて指定しておきます。（もちろんウインドウアプリケーションを起動する場合は別です。）

`StartInfo.FileName`は実行するプログラムのファイルパス、`StartInfo.Arguments`はそのコマンドラインの引数です。

`StartInfo.RedirectStandardOutput`は、通常そのまま標準出力に出力される文字列を`Process.StandardOutput`へリダイレクトします。
主に標準出力をプログラムで扱いたい場合や、標準出力へ出力したくない場合などに利用できるでしょう。

```cs
// 現在標準出力にリダイレクトされてる文字列を最後まで取得する
var stdOut = await process.StandardOutput.ReadToEndAsync();
```

ちなみに[ユーザー名](https://docs.microsoft.com/en-us/dotnet/api/system.diagnostics.processstartinfo.username?view=net-5.0)や[パスワード](https://docs.microsoft.com/en-us/dotnet/api/system.diagnostics.processstartinfo.password?view=net-5.0)を指定するプロパティも存在します。適宜利用しましょう。

`StartInfo`に実行情報を埋めたらいよいよプロセスを実行します。

```cs
// プロセスのスタート
process.Start();
// プロセスの実行完了待ち
await _process.WaitForExitAsync(token);
```

`Process.Start()`を呼び出すとプロセスが実行されます。そのままプロセスの終了を待ちたい場合は、`Process.WaitForExit`を実行し終了を待ちます。ちなみに非同期版の`Process.WaitForExitAsync`も存在します。

実行後にそのプロセスの終了コードを取得したい場合は`Process.ExitCode`で取得できます。

最後に、自作のメモ管理コマンドの[memo-cli](https://github.com/yucchiy/memo-cli/)で利用したGitコマンドを実行するクラスを示します。

```cs
private class GitCommand : System.IDisposable
{
    public const int SuccessExitCode = 0;
    public GitCommand(CommandConfig config, string arguments)
    {
        _process = new System.Diagnostics.Process();
        _process.StartInfo.WorkingDirectory = config.HomeDirectory.FullName;
        _process.StartInfo.FileName = config.GitPath;
        _process.StartInfo.Arguments = arguments;
        _process.StartInfo.CreateNoWindow = true;
        _process.StartInfo.UseShellExecute = false;
        _process.StartInfo.RedirectStandardInput = true;
        _process.StartInfo.RedirectStandardOutput = true;
        _process.StartInfo.RedirectStandardError = true;
    }

    public async Task<int> Execute(CancellationToken token)
    {
        _process.Start();
        await _process.WaitForExitAsync(token);
        return _process.ExitCode;
    }

    public async Task<string> CollectStandardError()
    {
        return await _process.StandardError.ReadToEndAsync();
    }

    public void Dispose()
    {
        _process?.Dispose();
    }

    private System.Diagnostics.Process _process = null;
}
```

このクラスを用いてpullを実行する例を示します。（ちなみに`UseColor`は独自のコマンドライン装飾クラスです）

```cs
private async Task<bool> Pull(CancellationToken token)
{
    using var git = new GitCommand(CommandConfig, "pull");
    switch (await git.Execute(token))
    {
        case GitCommand.SuccessExitCode:
            return true;
        default:
            using (var _ = new UseColor(System.ConsoleColor.Red))
            {
                await Output.WriteLineAsync("Failed to execute pull command following reason.");
            }

            using (var _ = new UseColor(System.ConsoleColor.Yellow))
            {
                await Output.WriteLineAsync(await git.CollectStandardError());
            }
            return false;
    }
}
```

## Reference

- [Process Class (System.Diagnostics) | Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/api/system.diagnostics.process?view=net-5.0)

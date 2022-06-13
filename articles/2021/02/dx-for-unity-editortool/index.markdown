---
date: "2021-02-06T10:00:00+12:00"
draft: false
title: "Unityでツールを作るときに個人的に気をつけていること。またはEditorUtilityについて。"
tags: ["Unity", "UnityEditor", "EditorUtility"]

---

Unityでツールを実装するとき、個人的に気をつけていることと、それを実現するためのAPIについて紹介します。

## 使いやすいツールとは

Unityにおいてツールを作る目的は、主にゲームを作るときの効率化であることが多いと思います。

ツールはプログラマだけではなく、デザイナーさんやプランナーさんなど、様々な方が使うことが想定されます。
そのため**プログラマ以外の方たちにも使いやすいツール**であることが望ましいです。

ツールを実行している際に、何を実行しているかわからなかったり、その状態で長い間なにも反応がないと、
使い手は「正常にツールが実行されているのだろうか？」と不安になると思います。

そこでツールを実装する際に、下記のことを気をつけています。

- 何をやってるかがわかる
- あとどのぐらいで終わるかがわかる
- なにが起こったかがわかる

要には不安を解消できるよう、**適切に情報を提供する**ように心がけています。

## EditorUtilityを用いる

上記を解消するのに [`EditorUtility`](https://docs.unity3d.com/ScriptReference/EditorUtility.html)というAPIが便利です。

### 進捗を表示する

「一括でデータを変換したい」または「重たい処理が処理が複数からなる」場合、ユーザーはその処理がどれだけ時間が必要なのか知りたくなります。
その場合はプログレスバーなので進捗を表示するのが親切です。

`EditorUtility`の[`DisplayProgressBar`](https://docs.unity3d.com/ScriptReference/EditorUtility.DisplayProgressBar.html)というメソッドを用いると簡単にプログレスバーを表示できます。

```cs
var total = 1000000;
for (var i = 0; i < total; ++i)
{
    // プログレスバー描画
    EditorUtility.DisplayProgressBar(
        "テストツール",
        $"重たい処理の{(i + 1)}番目を実行しています",
        (float)i / (float)total);

    // ここで処理を行う
    DoProcess(i);
}

// プログレスバーのクリア
EditorUtility.ClearProgressBar();
```

上記の実装で下図のようなプログレスバーが表示されます。

![DisplayProgressBarで表示されるプログレスバー](./displayprogressbar.png)

`DisplayProgressBar`の第１引数にウインドウのタイトルを、第２引数にメッセージを表示します。第３引数には進捗を0.0 ~ 1.0で渡します。だいたい、`処理済みのタスク数 / タスク総数`を渡せばOKです。

ただし１つ注意点として、処理の最後に[EditorUtility.ClearProgressBar](https://docs.unity3d.com/ScriptReference/EditorUtility.ClearProgressBar.html)を**必ず呼ぶ必要があります**。呼ばないとツールが終了した後もプログレスバーが残り続け、エディタのUIをロックしてしまいます。

そこで処理の途中で例外が発生しても確実に`ClearProgressBar`を呼べるように、処理全体を`try`句で囲った上で、`finally`句の中でこのメソッドを呼ぶと楽です。

```cs
try
{
    var total = 1000000;
    for (var i = 0; i < total; ++i)
    {
        // プログレスバー描画
        EditorUtility.DisplayProgressBar(
            "テストツール",
            $"重たい処理の{(i + 1)}番目を実行しています",
            (float)i / (float)total);

        // ここで処理を行う
        DoProcess(i);
    }
}
catch (System.Exception e)
{
    UnityEngine.Debug.LogException(e);
}
finally
{
    // DoProcessメソッド内で例外などを吐いても
    // Unityが落ちない限りはこの処理を通る

    // 確実にプログレスバーをクリアするようにする
    EditorUtility.ClearProgressBar();
}
```

また、途中で処理を中断することをサポートできる場合は、[EditorUtility.DisplayCancelableProgressBar](https://docs.unity3d.com/ScriptReference/EditorUtility.DisplayCancelableProgressBar.html)を利用するとより親切です。

```cs
try
{
    var total = 10000000;
    for (var i = 0; i < total; ++i)
    {
        // プログレスバー描画
        if (EditorUtility.DisplayCancelableProgressBar(
            "テストツール",
            $"重たい処理の{(i + 1)}番目を実行しています",
            (float)i / (float)total))
        {
            // 処理が途中でキャンセルされるとこちらにはいる
            break;
        }

        // ここで処理を行う
        DoProcess(i);
    }
}
catch (System.Exception e)
{
    UnityEngine.Debug.LogException(e);
}
finally
{
    // 確実にプログレスバーをクリアするようにする
    EditorUtility.ClearProgressBar();
}
```

## ダイアログを表示する

処理が終わった後そのままツールを終了すると、ユーザーはそれが正常に終わったのか、それともどこか途中で処理が失敗したのかわかりません。

`Debug.Log`でコンソールにログを出力するでも良いのですが、他のログによって該当ログが発見しづらかったり、
そもそも、コンソールログがプログラマ以外にあまり馴染みがなかったりと、ツールを使うユーザーへの通知としては不適切に感じています。
(もちろんエラーログを吐いておくことで、何かエラーが発生した際にエディターログを送ってもらうことで、トラブルシューティングに役立ちます。)

ユーザーへの通知を行うときにはダイアログを表示するのが便利です。`EditorUtility`には[EditorUtility.DisplayDialog](https://docs.unity3d.com/ScriptReference/EditorUtility.DisplayDialog.html)というメソッドが用意されています。
例えば先程のツールでは下記のようにダイアログを表示すると、ユーザーにとってツールの状態がわかりやすくなるかと思います。

```cs
try
{
    var total = 10000000;
    for (var i = 0; i < total; ++i)
    {
        // プログレスバー描画
        if (EditorUtility.DisplayCancelableProgressBar(
            "テストツール",
            $"重たい処理の{(i + 1)}番目を実行しています",
            (float)i / (float)total))
        {
            // 処理が途中でキャンセルされるとこちらにはいる
            break;
        }

        // ここで処理を行う
        DoProcess(i);
    }

    EditorUtility.DisplayDialog(
        "テストツール", 
        "処理がすべて正常に終わりました。",
        "OK");
}
catch (TestToolException knownException)
{
    // DoProcess中のエラー処理のうち、
    // その後処理を継続できない場合は
    // ユーザー定義の例外を吐いてそれをキャッチするとエラー処理が楽。
    EditorUtility.DisplayDialog(
        "テストツール",
        $"エラーが発生しました。{knownException.Message}", 
        "OK");
}
catch (System.Exception exception)
{
    // それ以外の予期しない例外の場合は、
    // 素直にコンソールログに情報を吐き出しておき
    // トラブルシューティングのためにプログラマに
    // 問い合わせてくれというメッセージを書いておくと良いかも
    UnityEngine.Debug.LogException(e);
    EditorUtility.DisplayDialog(
        "テストツール",
        "予期しないエラーが発生しました。",
        "OK");
}
finally
{
    // 確実にプログレスバーをクリアするようにする
    EditorUtility.ClearProgressBar();
}
```

![DisplayDialogで表示されるダイアログ。OS標準のUIが呼び出される。](./displaydialog.png)

１点注意点として`DisplayDialog`はそれを呼び出した時点でその行で停止し、
ユーザーがダイアログに反応しないと次の処理を実行しません。

一括で処理を行うようなツールの場合に途中で`DisplayDialog`を呼び出すと処理を止めてしまうことに注意しましょう。
その場合は、結果をとりあえずリスト溜め込んでおき、すべての処理が終了後に結果を確認できるウインドウを表示すると親切です。

## まとめ

個人的にツール作りにおいて、特にプログラマ以外のことが利用すること想定して大事にしていることと、
それを実現するために便利な`EditorUtility`のAPIを紹介しました。


余談ですが`EditorUtility`には他にも、ファイル読み込みや保存の際に、
そのファイルパスを選択させる[EditorUtility.OpenFilePanel](https://docs.unity3d.com/ScriptReference/EditorUtility.OpenFilePanel.html)や
[EditorUtility.SaveFilePanel](https://docs.unity3d.com/ScriptReference/EditorUtility.SaveFilePanel.html)など便利なAPIがたくさんあります。

ツール実装を行う際に、一度API一覧を軽く目を通すと良いかもしれません。

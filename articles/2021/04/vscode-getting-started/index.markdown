---
date: "2021-04-27T09:00:00+09:00"
draft: false
title: "Visual Studio Codeの拡張機能を開発する - テンプレートの作成方法とその解説"
tags: ["Visual Studio Code", "VSCode Extension", "TypeScript", "ツール開発"]

---

この記事ではVisual Studio Code（以下VSCode）の拡張機能の開発方法について、その環境構築およびテンプレートの作成方法と、簡単にそのコードの解説を行います。

## 開発に必要な環境

VSCodeの拡張機能の開発を行うには下記環境が必要になります。

- Node.jsおよびnpm
- Visual Studio Code

## VS Code Extension Generatorによるテンプレートの作成

[公式では](https://code.visualstudio.com/api/get-started/your-first-extension)、拡張機能のテンプレートは[Yaoman](https://yeoman.io/)と[VS Code Extension Generator](https://www.npmjs.com/package/generator-code)を用いて作成することを推奨しています。

まず、上記のソフトウェアをインストールします。

```
$ npm install -g yo generator-code
```

インストール後、下記のコマンドを実行してテンプレートを作成します。コマンドを実行後はいくつか拡張機能のプロジェクト設定について確認がされるので、それに答えていきます。

```
$ yo code
yo code

     _-----_     ╭──────────────────────────╮
    |       |    │   Welcome to the Visual  │
    |--(o)--|    │   Studio Code Extension  │
   `---------´   │        generator!        │
    ( _´U`_ )    ╰──────────────────────────╯
    /___A___\   /
     |  ~  |     
   __'.___.'__   
 ´   `  |° ´ Y ` 

? What type of extension do you want to create? New Extension (TypeScript)
? What's the name of your extension? HelloWorld
? What's the identifier of your extension? helloworld
? What's the description of your extension? My first extension
? Initialize a git repository? Yes
? Bundle the source code with webpack? No
? Which package manager to use? npm

Writing in /Users/yucchiy/helloworld...
   create .vscode/extensions.json
   create .vscode/launch.json
   create .vscode/settings.json
   create .vscode/tasks.json
   create src/test/runTest.ts
   create src/test/suite/extension.test.ts
   create src/test/suite/index.ts
   create .vscodeignore
   create .gitignore
   create README.md
   create CHANGELOG.md
   create vsc-extension-quickstart.md
   create tsconfig.json
   create src/extension.ts
   create package.json
   create .eslintrc.json
```

上記の質問では

- ? What type of extension do you want to create?
    - `New Extension (TypeScript)`
    - TypeScriptベースで拡開発を行うために`TypeScript`を選択。（他にもJavaScriptベースでの拡張開発や、カラーテーマの作成など種類がある）
    - 好みでJavaScriptでもよい。
- ? What's the name of your extension?
    - `HelloWorld`
    - 拡張名の設定。[Marketplace](https://marketplace.visualstudio.com/vscode)や拡張一覧などででてくる名前表示に利用される。
- ? What's the identifier of your extension?
    - `helloworld`
    - 拡張のID。適宜変更する。
- ? What's the description of your extension?
    - `My first extension`
    - 拡張の説明文。
- ? Initialize a git repository?
    - `Yes`
    - Gitレポジトリを初期化するかどうか。基本OKで良さそう。
- ? Bundle the source code with webpack?
    - `No`
    - Webpackでソースコードをバンドルするかどうか。お好みですがなくても開発できそうなので今回はオフで。
    - WebViewベースのアプリを作りたいならいれたほうがいい？
- ? Which package manager to use?
    - `npm`
    - パッケージマネージャーの選択。現在ではnpmとyarnが選択できる。今どきならyarn？（といいつつ今回はnpmを選択）

について答えています。

質問に答えると拡張のテンプレートがカレントディレクトリに作成されます。IDを`helloworld`としたので、`helloworld`という名前のディレクトリが作成されているはずです。

### テンプレートの動作確認とデバッグ方法について

テンプレートが作成できたのでとりあえず動かしてみましょう。まず作成されたテンプレートである`helloworld`ディレクトリをVSCodeで開きます。

ひらいたら、`F5`を押して拡張をデバッグ実行します。すると拡張のコンパイルなどがはじまり、それが終わると今開いているVSCodeのウインドウとは別に`[Extension Development Host]`という名前のついたVSCodeが起動します。

![F5を押して拡張をデバッグ実行している様子](./open-extension-development-host.png)

こちらのウインドウは拡張をインストール済みのウインドウで、こちらで拡張の動作確認を行うことができます。試しにテンプレートで実装されているコマンドを呼び出してみます。

![実装されているコマンドを呼び出す様子。実行後右下にメッセージウインドウが表示されていることがわかる。](./vscode-helloworld.gif)

デバッグ実行時にはソースコード中にブレークポイントを貼ったり、コードをステップ実行できます。

![ブレークポイントを貼ってデバッグを行う様子](./debugger-breakpoint.gif)

## 作成されたテンプレートの構成

作成されたテンプレートの中身をのぞいて構成について把握します。作成されたテンプレートは（2021/04/27現在では）下記の構成になっています。

```
$ tree -L 1
.
├── CHANGELOG.md
├── README.md
├── node_modules
├── package-lock.json
├── package.json
├── src
├── tsconfig.json
└── vsc-extension-quickstart.md
```

上記からわかるように、VSCode拡張はnpmのパッケージとして管理されています。（テンプレート作成時にパッケージマネジャーとしてnpmを選択したので当然といえば当然ですが）

更に`src`以下は下記のようになっています。

```
$ tree ./src    
./src
├── extension.ts
└── test
    ├── runTest.ts
    └── suite
        ├── extension.test.ts
        └── index.ts
```

拡張の開発において、特に重要なのが下記です。

- `package.json`
- `src/extension.ts`

## src/extension.ts

`src/extension.ts`は、拡張のエントリーポイントとなるファイルです。中身は下記のようになっています。

```ts
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "helloworld" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('helloworld.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from HelloWorld!');
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
```

`activate`と`deactivate`が定義されていますが、これらはそれぞれ拡張をロードおよびアンロードするときに呼び出される関数になっています。つまりこのなかで拡張の初期化および破棄を記述することになります。

前述の通りこの拡張では`Hello World`というコマンドを実行するとメッセージが表示されましたが、その処理を行っているのが下記になります。

```ts
// The command has been defined in the package.json file
// Now provide the implementation of the command with registerCommand
// The commandId parameter must match the command field in package.json
let disposable = vscode.commands.registerCommand('helloworld.helloWorld', () => {
	// The code you place here will be executed every time your command is executed

	// Display a message box to the user
	vscode.window.showInformationMessage('Hello World from HelloWorld!');
});
```

`vscode.commands.registerCommand`というメソッドで`helloworld.helloWorld`というコマンド名に対して、無名関数で定義した処理を呼び出すように登録しています。

関数内部では[vscode.window.showInformationMessage](https://code.visualstudio.com/api/references/vscode-api#vscode.window.showInformationMessage)を呼び出しています。これにより右下にポップアップでメッセージを出力できます。

コマンド実装の説明はこれだけと、とてもシンプルなのですが、[vscode.commands.registerCommand](https://code.visualstudio.com/api/references/vscode-api#commands.registerCommand)の戻り値について補足しておきます。

この関数の戻り値は[Disposable](https://code.visualstudio.com/api/references/vscode-api#Disposable)になっています。`Disposable`は**なにかの破棄の処理を行う`dispose`メソッドを持つインターフェイス**で、これを呼び出すことでリソースの開放やイベントの購読解除を行います。（具体的な`dispose`の実装はそのオブジェクトの用途次第です。）

`vscode.commands.registerComman`の戻り値ではこのコマンド登録を解除するための`Disposable`が返却されます。つまり、この`Disposable`を適切なタイミングで呼んであげないとコマンドの解除ができないわけですが、VSCodeでは`activate`関数で引数として受け取ることのできる`context`というオブジェクトに`subscriptions`という配列が存在していて、その中に戻り値を追加しておくことで、その**拡張が無効になったときに追加したオブジェクトの`dispose`が自動で呼び出す**ようになっています。

このようにVSCodeの拡張実装のためのAPIの多くは、各種登録API呼び出しの際に`Disposable`を戻り値として返すので、`context.subscriptions`に登録しておくことで破棄を実装することが多いようです。
こうすることで、初期化に対する破棄の処理がコード中で近い位置に配置できるため、破棄わすれによるリソース開放や購読解除わすれを阻止するのが狙いなのかなと感じています。

上記の理由により、VSCodeの拡張実装の多くでは`deactive`の実装が空ないし定義しないものが多い印象です。（例: [omnisharp-vscodeのactivate実装](https://github.com/OmniSharp/omnisharp-vscode/blob/1b7e1b8fde100276967a34a556b818a037a92e22/src/omnisharp/extension.ts#L56)）

## package.json

次に`package.json`について触れておきます。この中でも特に拡張に関わる項目は下記になります。

- `main`
- `activationEvents`
- `contributes.commands`

まず`main`についてですが、これは拡張のエントリーポイントを定義しています。デフォルトでは下記となっています。

```json
	"main": "./out/extension.js",
```

これは先ほど紹介した`src/extension.ts`をコンパイルしたJavaScriptファイルを参照しています。このように`activate`（と`deactivate`）を実装したモジュールを指定します。
この項目は特に変更する必要はないですが、プロジェクトの配置上変更したいなどある場合に、適宜変更することができます。

次に`activationEvents`および`contributes.commands`についてですが、事前にその拡張が利用するコマンドを`package.json`に指定する必要があり、
コマンドを追加・変更する際それぞれ`activationEvents`と`contributes.command`に登録する必要があります。

```json
	"activationEvents": [
		"onCommand:helloworld.helloWorld"
	],
	"contributes": {
		"commands": [
			{
				"command": "helloworld.helloWorld",
				"title": "Hello World"
			}
		]
	},
```

ここで登録を忘れると`src/extension.ts`で`registerCommand`を行ってもコマンドを実行することができないので、その点に注意が必要です。

## まとめ

VSCodeの拡張についてその環境の構築方法と、テンプレートが生成するコマンドについて解説しました。

## 参考

- [Your First Extension | Visual Studio Code Extension API](https://code.visualstudio.com/api/get-started/your-first-extension)
- [VS Code API | Visual Studio Code Extension API](https://code.visualstudio.com/api/references/vscode-api)
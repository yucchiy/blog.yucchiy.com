---
date: "2016-05-05T09:00:00+09:00"
title: "VimでUnity C#のコーディングをするための設定"
description: "最近Unityを触ることになったので, せっかくなのでVimで開発できないかなと思い,
C#のコーディング環境をVimで整えてみたらかなり快適だった. 主にOmniSharpについての備忘録."
tags: [Unity,Vim,C#,OmniSharp]

---

最近Unityプログラマにジョブチェンジしたのだが, MonoDevelopが地味に使いづらいので, Vim + OmniSharpで環境を構築してみたら, 思った以上に良かったので, メモ代わりにブログに書いた.
地味にハマりどころは多かったので, 参考になればと思う. 

前提として, monoの3系以降をインストールする必要がある. brewを使っていれば, `brew install mono`でさくっとインストールできるはずだ.

### インストール

今回C#の環境を構築するにあたって利用したのは[omnisharp-vim](https://github.com/OmniSharp/omnisharp-vim)だ.

omnisharp-vimは, [OmniSharp Server](https://github.com/OmniSharp/omnisharp-server)を介して補完や検索・リファクタリングといった機能を提供する.
クライアント・サーバーモデルを採用しているため, サーバーと通信できるエディタであれば同じように機能を利用できる.

[NeoBundle](https://github.com/Shougo/neobundle.vim)をインストールしていれば, 以下を`.vimrc`に足すだけでインストールできる.

```
NeoBundleLazy 'OmniSharp/omnisharp-vim', {
      \   'autoload': { 'filetypes': [ 'cs', 'csi', 'csx' ] },
      \   'build': {
      \     'windows' : 'msbuild server/OmniSharp.sln',
      \     'mac': 'xbuild server/OmniSharp.sln',
      \     'unix': 'xbuild server/OmniSharp.sln',
      \   },
      \ }
```

OmniSharpは, 前述のとおりクライアント・サーバーモデルとして動作するため, サーバーのビルドする必要がある.
そのため, buildの項目でサーバーをビルドするためのコマンドを記述している.

しかし, 2016/05/05時点で, OSX 10.10.5 + mono 4.2.3 の環境でビルドに失敗したため, サブモジュールを最新にして, サーバーを最新にしてビルドが通るように[修正した](https://github.com/yucchiy/omnisharp-vim). 

OmniSharpが動作するためにはpythonが必要である. Vimがpythonをサポートしているかどうかは以下のコマンドで確認できる.

```
:echo has('python')
```

必須ではないが, 他にもいくつかプラグインをインストールすることで, より便利に利用することができる.

- [NeoComplete](https://github.com/Shougo/neocomplete.vim)
- [vim-dispatch](https://github.com/tpope/vim-dispatch)
- [unite.vim](https://github.com/Shougo/unite.vim)

[vim-dispatch](https://github.com/tpope/vim-dispatch)は, インストールしておくことで, OmniSharpサーバーを自動で起動してくれるようになる.
もし自動的にサーバーを起動する設定を切りたければ, `let g:OmniSharp_start_server = 0`を設定しておけば良い.

また[unite.vim](https://github.com/Shougo/unite.vim)か, [ctrlp.vim](https://github.com/ctrlpvim/ctrlp.vim)をインストールし, `g:OmniSharp_selector_ui`で設定しておくことで, それらを選択時UIに利用できる.

```
let g:OmniSharp_selector_ui = 'unite'
let g:OmniSharp_selector_ui = 'ctrlp'
```

## 使い方

基本的に, サーバーを起動している状態で, コマンドを発行することで各種機能を利用できる.

`:OmniSharpStartServer`コマンドを実行すると, 現在開いているファイルパスから[いい感じに](https://github.com/OmniSharp/omnisharp-vim/blob/3e6670a84976e697481c7784a1116ab0cbd8459a/autoload/OmniSharp.vim#L454)(?)プロジェクトファイル(`*.sln`)を探してきて,
サーバーの起動オプションに指定してくれる. そのため, Unityのプロジェクトを開いていれば, `UnityEngine`などのUnity関係のクラスも補完の対象に入る. これはとても便利.

以下に, よく使いそうなコマンドを紹介する.

| コマンド                        | 説明                                           |
|:--------------------------------|:-----------------------------------------------|
| `:OmniSharpGotoDefinition`      | コードの定義元へジャンプする                   |
| `:OmniSharpRename`              | カーソル位置にある変数やクラス名をリネームする |
| `:OmniSharpCodeFormat`          | コードフォーマットを行う                       |
| `:OmniSharpFindImplementations` | 実装の一覧を表示する                           |
| `:OmniSharpFindUsages`          | 呼び出し元の一覧を検索して表示する             |
| `:OmniSharpGetCodeActions`      | カーソル位置にあわせて様々なアクションを行う   |
| `:OmniSharpReloadSolution`      | ソリューションの再読み込みを行う               |
| `:OmniSharpBuild`               | 現在ひらいているファイルをビルドする           |
| `:OmniSharpRunTests`            | テストを実行する                               |

コマンドを直打ちすると大変なので, よく使うものはショートカットに登録しておくと良い.

```
autocmd FileType cs nnoremap gd :OmniSharpGotoDefinition<cr>
autocmd FileType cs nnoremap <leader>fi :OmniSharpFindImplementations<cr>
autocmd FileType cs nnoremap <leader>ft :OmniSharpFindType<cr>
autocmd FileType cs nnoremap <leader>fs :OmniSharpFindSymbol<cr>
autocmd FileType cs nnoremap <leader>fu :OmniSharpFindUsages<cr>
autocmd FileType cs nnoremap <leader>fm :OmniSharpFindMembers<cr>

autocmd FileType cs nnoremap <leader>x  :OmniSharpFixIssue<cr>
autocmd FileType cs nnoremap <leader>fx :OmniSharpFixUsings<cr>
autocmd FileType cs nnoremap <leader>tt :OmniSharpTypeLookup<cr>
autocmd FileType cs nnoremap <leader>d  :OmniSharpDocumentation<cr>

autocmd FileType cs nnoremap <C-K> :OmniSharpNavigateUp<cr>
autocmd FileType cs nnoremap <C-J> :OmniSharpNavigateDown<cr>

autocmd FileType cs nnoremap <leader>rn :OmniSharpRename<cr>
autocmd FileType cs nnoremap <leader>cf :OmniSharpCodeFormat<cr>
autocmd FileType cs nnoremap <leader>rl :OmniSharpReloadSolution<cr>
```

NeoCompleteを入れている場合は, オムニ補完を有効にしておくとコーディングが捗る.

```
autocmd FileType cs setlocal omnifunc=OmniSharp#Complete

if !exists('g:neocomplete#sources#omni#input_patterns')
  let g:neocomplete#sources#omni#input_patterns = {}
endif

let g:neocomplete#sources#omni#input_patterns.cs = '.*[^=\);]'
```

### OmniSharpサーバーの設定

OmniSharpサーバーの設定を弄りたくなる時があると思う.
例えば `:OmniSharpCodeFormat`は, 現在開いているファイルのコードフォーマットを行ってくれるが, このフォーマットのルールを変更したい時などだ.

OmniSharpサーバーでは, デフォルトで`OmniSharp.exe`と同じファイルパス以下の`config.json`に設定が記述されている.
また, サーバー起動オプションで`-config <path/to/config.json>`を指定することで設定を変更するすることもできる.

omnisharp-vimでは, ソリューションファイル以下に, デフォルトで`omnisharp.json`というJSONファイルが存在すれば, 上記のオプションへそのファイルを指定してくれる.
このファイル名は, `g:Omnisharp_server_config_name`により[変更できる](https://github.com/OmniSharp/omnisharp-vim#how-to-use).

[設定ファイル](https://github.com/OmniSharp/omnisharp-server/blob/2d35d0b14d6b0973d72dfe0eb78a8121055bf0b6/OmniSharp/config.json)では, 今のところテキストエディタの設定やテストランナー・コードフォーマットについて設定できるようだ.

### `:OmniSharpCodeFormat`の挙動を変更してみる

試しに, `:OmniSharpCodeFormat`の挙動を変更してみる. デフォルトの設定は[ここで確認できる](https://github.com/OmniSharp/omnisharp-server/blob/2d35d0b14d6b0973d72dfe0eb78a8121055bf0b6/OmniSharp/config.json#L52).

この設定は, OmniSharpが利用している[NRefactory](https://github.com/icsharpcode/NRefactory/)の[Formatter/CSharpFormattingOptions.cs](https://github.com/icsharpcode/NRefactory/blob/79f9a95f93003ad77214be22a1c31387d24e5491/ICSharpCode.NRefactory.CSharp/Formatter/CSharpFormattingOptions.cs)に, JSONのキーの頭文字を大文字にしたプロパティ名に対してマッピングが行われる.

ここで, 対応するプロパティがEnumの場合は, 整数値がEnumにマッピングされる. Enumは値の指定がなければ最初に定義されている列挙を`0`として, 順番に`1`ずつ足された値を取る. 
例えば`arrayInitializerWrapping`に, `2`が指定されている場合は, `Wrapping`の定義が以下のとおりなので, `WrapAlways`として解釈される.


```csharp
// https://github.com/icsharpcode/NRefactory/blob/79f9a95f93003ad77214be22a1c31387d24e5491/ICSharpCode.NRefactory.CSharp/Formatter/CSharpFormattingOptions.cs#L51
public enum Wrapping {
    DoNotChange,
    DoNotWrap,
    WrapAlways,
    WrapIfTooLong
}
```

なので, `arrayInitializerWrapping`の設定で, 長すぎる場合に改行を挿入したい場合はこの値を`3`にするとよい.

## まとめ

Unity C# コーディング環境は, 少々ハマリポイントはあるものの便利そう.


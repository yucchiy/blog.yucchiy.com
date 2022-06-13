---
date: "2018-07-01T00:00:00+09:00"
draft: false
title: "RoslynベースのOmniSharp/omnisharp-vimをMacで試す"
tags: ["Unity", "C#", "Vim"]

---

久々にOmniSharpを更新しようとしたら、[昔セットアップした頃](http://blog.yucchiy.com/2016/05/05/unity-vim-omnisharp/)に比べて、構成等がいろいろ変わっていたので、メモがてらにブログを書く。
詳細は[こちら](https://github.com/OmniSharp/omnisharp-vim/blob/96ec4327f1756f3090e4576749a9cc0ae0c5379c/README.md)を参照されたい。

## Installation

OmniSharp-vimの利用には以下が必要になる。

- Server
    - [OmniSharp-Roslyn](https://github.com/OmniSharp/omnisharp-roslyn)
    - [OmniSharp-server](https://github.com/OmniSharp/omnisharp-server)
        - レガシーサーバー
- Python
- Asynchronous command execution
    - Vim with job control API is used (8.0+)
    - neovim
    - [vim-dispatch](https://github.com/tpope/vim-dispatch)
    - [vimproc.vim](https://github.com/Shougo/vimproc.vim)
- Selector UI
    - [fzf.vim](https://github.com/junegunn/fzf.vim)
    - [CtrlP](https://github.com/ctrlpvim/ctrlp.vim)
    - [unite.vim](https://github.com/Shougo/unite.vim)

### Server

OmniSharp-vimには[OmniSharp/omnisharp-roslyn](https://github.com/OmniSharp/omnisharp-roslyn)が必要となる。

OmniSharp-roslynは、名前の通りRoslynベースの言語サーバーである。

パッケージは、[こちら](https://github.com/OmniSharp/omnisharp-roslyn/releases)にビルド済みのものが配布されているが、今回は自分でビルドすることにする。
詳細は[こちら](https://github.com/OmniSharp/omnisharp-roslyn/blob/master/BUILD.md)が参考にするとよい。

ビルドするためには、.NET 4.6なので、事前にインストールしておく必要がある。

またmacOSでビルド・実行するにはMono5.2.0が必要である。インストールは[.pkg](http://www.mono-project.com/download/stable/)か、Homebrewを用いるとよい。

```
brew update
brew install mono
brew install caskroom/cask/mono-mdk
```

ソースをビルドするには、[OmniSharp/omnisharp-roslyn](https://github.com/OmniSharp/omnisharp-roslyn)レポジトリを落としてきて、`build.sh`を実行する。

```
cd Path/To/omnisharp-roslyn
./build.sh
```

ビルドが成功すると、`artifacts/publish/OmniSharp.Http.Driver/OmniSharp.exe`が生成される。

### Python

Pythonが利用可能かどうかは以下のコマンドを実行する

```
:echo has('python')
```

### Asynchronous command execution

OmniSharp-vimは、次の条件を満たしている場合のみ、サーバーをの起動、非同期ビルドを実行できる。

- Vim with job control API is used (8.0+)
- neovim
- [vim-dispatch](https://github.com/tpope/vim-dispatch)
- [vimproc.vim](https://github.com/Shougo/vimproc.vim)

Vim 8.0以上であれば、Job control APIを利用し、またneovimを利用していれば特になにもしなくて良さそう。
この条件に当てはまらなければ、vim-dispatchかvimproc.vimをインストールすればよい。


## How to Use

まずはOmniSharp-vimはインストールする。`NeoBundle`からインストールするには、以下を`.vimrc`に記述する

```
NeoBundleLazy 'OmniSharp/omnisharp-vim', {
      \   'autoload': { 'filetypes': [ 'cs', 'csi', 'csx' ] },
      \ }
```

Roslynを言語サーバーとして利用するには以下のように設定する。

`OmniSharp_server_type`は、[2018/07/01現在のレポジトリ](https://github.com/OmniSharp/omnisharp-vim/tree/96ec4327f1756f3090e4576749a9cc0ae0c5379c)では`roslyn`になっているが、念の為指定する。
`OmniSharp_server_path`には、先程作成した`OmniSharp.exe`のパスを指定する。

また、MacOSで実行するにはMonoが必要になる。そのため`OmniSharp_server_use_mono`を`1`として、monoで実行するようにする。

```
let g:OmniSharp_server_type='roslyn'
let g:OmniSharp_server_path = '/Path/To/OmniSharp.exe'
let g:OmniSharp_server_use_mono = 1
```

OmniSharp-Roslynには[libuv](http://libuv.org/)が必要になる。
MacであればHomebrew経由で、`brew install libuv`でインストールできる。

以上。


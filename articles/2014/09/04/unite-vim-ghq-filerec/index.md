---
title: unite-ghqとfile_recが便利
description: ''
pubDatetime: 2014-09-03T23:49:00.000Z
tags: []
---

レポジトリの管理とか自分の中ではうまい解決がなくて, 昔はプロジェクトにジャンプするzsh関数書いてたりした.


最近ではghqとpecoを使って便利ってなってたところに, たまたまTL上で[unite-ghq](https://github.com/sorah/unite-ghq)の存在を知って, 使ってみたらしっくりきたのでブログ書いた.


.vimrcに以下のように記述する. ただし[ghq](https://github.com/motemen/ghq)のインストールは予め済ませておき, .vimrcに[ghqへのパスを通す必要がある](https://github.com/sorah/unite-ghq/issues/1).

```vim
NeoBundle 'sorah/unite-ghq'

noremap [unite] <Nop>
map     <Leader>u [unite]

nnoremap <silent>[unite]p         :<C-u>Unite file_rec/async<CR>
nnoremap <silent>[unite]g         :<C-u>Unite ghq<CR>
```

プロジェクトディレクトリ移動は`,ug`で行って, プロジェクト内でのファイル検索は`,up`で行う. 便利.


今までは[ghqとpecoを組み合わせて](https://github.com/yucchiy/dotfiles/blob/master/zsh/zsh/sources/peco/src.zsh)プロジェクトディレクトリに移動し, そこでvimを開くみたいな感じだったが, これだとすべてvimで完結してよいと思った.

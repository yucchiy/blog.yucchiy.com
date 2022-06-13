---
date: "2019-01-04T00:04:00+09:00"
draft: false
title: "u3dを用いてUnityをコマンドライン経由でインストールする"
tags: ["Unity", "CI"]

---

[u3d](https://github.com/DragonBox/u3d)は、コマンドライン経由でUnityを操作するためのツールです。WindowsやMacOS、Linuxに対応しています。

このu3dには、下記の機能が実装されています。

- 各バージョンのUnityのインストール・アンインストール・確認 (`available, install, uninstall, list`)
  - 複数バージョンの管理
  - Unity単体だけでなく、iOSやAndroidなどのビルドツールのインストールもサポート
- Linux上でUnityを実行するために必要な各種パッケージのインストール (`dependencies`)
- Unityの実行 (`run`)
- インストールされているUnityライセンスの一覧を表示 (`licenses`)
- Mac OSX限定でKeyChainの管理 (`credentials`)

特に一番上は、Unity Hubが管理したいんですが…(こちらのツールのほうが先にリリースされた兼ね合いで、パスなどの管理はHub基準じゃないし。しかしこのへんは[Issue](https://github.com/DragonBox/u3d/issues)や[PR](https://github.com/DragonBox/u3d/pulls)を見てるといつか対応されそうな)。CI環境を自動で構築したい時などに、この辺の機能がコマンドライン経由で呼び出したくなります。

Unityだと、開発しているプラットフォームがiOSやAndroidの事が多く、ビルドからその先の配信のことも考えないと行けないのですが、今やこの辺のツールとしてデファクトの(?)[fastlane](https://fastlane.tools/)のプラグインがセットでついてきます(u3dの機能をfastlaneから実行できるようになるものです)。このへんも地味に便利かなと。

## u3dをインストールする

実際に、Unityのビルド環境をLinux (Ubuntu 18.04)で作ってみます。詳細は[README](https://github.com/DragonBox/u3d/blob/master/README.md)を見るよ良いです。このツールはgemは配信されているので、rubyをインストールします。

```
ubuntu@build-unity:~$ sudo apt-get -y ruby
```

これで、gemコマンドが利用できるようになります。なので、インストールします。

```
ubuntu@build-unity:~$ sudo gem install u3d
```

ロケール設定は、UTF-8で設定してやる必要があります。Bashの場合は下記の設定を`~/.bashrc`や`~/.bash_profile`に追記します。

```sh
export LC_ALL=en_US.UTF-8
export LANG=en_US.UTF-8
```

あと、ドキュメントに書いてなくて少しハマった点として、`u3d list`と`u3d install`で`strings`コマンドを利用するため、`binutils`が必要になります(Ubuntuだと、標準で`strings`コマンドが入っていないため)。

```
ubuntu@build-unity:~$ sudo apt-get -y install binutils
```

ちなみにインストールしていない状態だと、以下のエラーが発生します。

```
ubuntu@build-unity:~$ u3d list --trace
"strings /opt/unity-editor-2018.2.7f1/Editor/BugReporter/unity.bugreporter"
Traceback (most recent call last):
        20: from /usr/local/bin/u3d:23:in `<main>'
        19: from /usr/local/bin/u3d:23:in `load'
        18: from /var/lib/gems/2.5.0/gems/u3d-1.1.2/exe/u3d:7:in `<top (required)>'
        17: from /var/lib/gems/2.5.0/gems/u3d-1.1.2/lib/u3d/commands_generator.rb:40:in `start'
        16: from /var/lib/gems/2.5.0/gems/u3d-1.1.2/lib/u3d/commands_generator.rb:260:in `run'
        15: from /var/lib/gems/2.5.0/gems/commander-4.4.7/lib/commander/delegates.rb:15:in `run!'
        14: from /var/lib/gems/2.5.0/gems/commander-4.4.7/lib/commander/runner.rb:68:in `run!'
        13: from /var/lib/gems/2.5.0/gems/commander-4.4.7/lib/commander/runner.rb:446:in `run_active_command'
        12: from /var/lib/gems/2.5.0/gems/commander-4.4.7/lib/commander/command.rb:153:in `run'
        11: from /var/lib/gems/2.5.0/gems/commander-4.4.7/lib/commander/command.rb:182:in `call'
        10: from /var/lib/gems/2.5.0/gems/u3d-1.1.2/lib/u3d/commands_generator.rb:109:in `block (2 levels) in run'
         9: from /var/lib/gems/2.5.0/gems/u3d-1.1.2/lib/u3d/commands.rb:53:in `list_installed'
         8: from /var/lib/gems/2.5.0/gems/u3d-1.1.2/lib/u3d/commands.rb:53:in `each'
         7: from /var/lib/gems/2.5.0/gems/u3d-1.1.2/lib/u3d/commands.rb:56:in `block in list_installed'
         6: from /var/lib/gems/2.5.0/gems/u3d-1.1.2/lib/u3d/installation.rb:244:in `build_number'
         5: from /var/lib/gems/2.5.0/gems/u3d-1.1.2/lib/u3d/installation.rb:199:in `find_build_number'
         4: from /var/lib/gems/2.5.0/gems/u3d-1.1.2/lib/u3d/installation.rb:199:in `each'
         3: from /var/lib/gems/2.5.0/gems/u3d-1.1.2/lib/u3d/installation.rb:200:in `block in find_build_number'
         2: from /var/lib/gems/2.5.0/gems/u3d-1.1.2/lib/u3d/installation.rb:224:in `find_build_number_in'
         1: from /var/lib/gems/2.5.0/gems/u3d-1.1.2/lib/u3d/installation.rb:211:in `strings'
/var/lib/gems/2.5.0/gems/u3d-1.1.2/lib/u3d/installation.rb:211:in ``': No such file or directory - strings (Errno::ENOENT)
```

また、Linux環境でUnityを実行するために、各種ライブラリが必要になります。

```
ubuntu@build-unity:~$ apt-get -y install binutils
ubuntu@build-unity:~$ apt-get -y install libgtk-3-dev libglu1-mesa libxi-dev libxmu-dev libglu1-mesa-dev libnss3-dev libsound2-dev libgconf2-dev
```

と思っていたけど、やっているうちに `u3d dependencies`というコマンドが用意されていることがわかった…

```
ubuntu@build-unity:~$ u3d dependencies
Install dependencies? (38 dependency(ies) to install) (y/n)
y
$ apt-get -y install gconf-service lib32gcc1 lib32stdc++6 libasound2 libc6 libc6-i386 libcairo2 libcap2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libfreetype6 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libgl1-mesa-glx libglib2.0-0 libglu1-mesa libgtk2.0-0 libnspr4 libnss3 libpango1.0-0 libstdc++6 libx11-6 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxtst6 zlib1g debconf npm libpq
```

## Unityをインストールする

u3dがインストールできたので、次はUnityをインストールしてみます。`u3d available`でインストール可能なバージョンの一覧を表示できます。

```
ubuntu@build-unity:~$ u3d available
Version 5.1.0f3: http://download.unity3d.com/download_unity/unity-editor-installer-5.1.0f3+2015091501.sh
# ...
Version 2018.2.5f1: https://beta.unity3d.com/download/88f43da96871/
Version 2018.2.6f1: https://beta.unity3d.com/download/793261fe3e9a/
Version 2018.2.7f1: https://beta.unity3d.com/download/dad990bf2728/
```

この中から、適当なバージョンを選んでインストールします。インストールには`u3d install`を用います。下記の例では、Unity本体とドキュメント、iOSとAndroidのビルド環境も合わせてインストールしています。

```
ubuntu@build-unity:~$ sudo u3d install 2018.2.7f1 --packages Unity,Documentation,Android,iOS
```

`--packages` オプションの代わりに `--all` オプションを指定すると、すべてのパッケージをインストールできます。が、だいたい不必要だと思うので(?)指定するのが吉かと思います。

その他にも、インストールパスを変更するオプションなどがあります。`--help`を叩いてみると一覧を確認できます。

```
ubuntu@build-unity:~$ u3d install --help
  NAME:

    install

  SYNOPSIS:

    u3d install \[<version>\] [ [-p | --packages <package1>,<package2> ...] | \[-o | --operating_system <OS>\] [-a | --all] ] \[--[no-]download\] [ [--[no-]install] [-i | --installation_path <path>] ]
# ...
```

## Unityインストールでいくつかハマったこと

Unityのインストールをする上で、いくつかハマったことを紹介します。

### Androidのパッケージインストールでコケる場合の対処

上記の例でAndroidパッケージインストールの例を示していますが、実際にインストールするには7zコマンドが必要になります。ないと下記のエラーで怒られます。

```
--------------------------------------------------
--- Installing Android Build Support (Android) ---
--------------------------------------------------
Installing with /root/Downloads/Unity_Packages/2018.2.7f1/UnitySetup-Android-Support-for-Editor-2018.2.7f1.pkg
Failed to install pkg file /root/Downloads/Unity_Packages/2018.2.7f1/UnitySetup-Android-Support-for-Editor-2018.2.7f1.pkg at /opt/unity-editor-2018.2.7f1: Missing 7z
```

pkg拡張子ファイルの展開に7zが必要そうで。なので、インストールします。

```
ubuntu@build-unity:~$ sudo apt-get -y install p7zip-full
```

再度インストールを試みると、今度は下記のエラーで怒られます。

```
--------------------------------------------------
--- Installing Android Build Support (Android) ---
--------------------------------------------------
Installing with /root/Downloads/Unity_Packages/2018.2.7f1/UnitySetup-Android-Support-for-Editor-2018.2.7f1.pkg
$ 7z -aos -o/tmp/d20190103-18651-nh3w48 e /root/Downloads/Unity_Packages/2018.2.7f1/UnitySetup-Android-Support-for-Editor-2018.2.7f1.pkg
Failed to install pkg file /root/Downloads/Unity_Packages/2018.2.7f1/UnitySetup-Android-Support-for-Editor-2018.2.7f1.pkg at /opt/unity-editor-2018.2.7f1: PackageInfo not found under /tmp/d20190103-18651-nh3w48/PackageInfo
```

[Issueで上がっている](https://github.com/DragonBox/u3d/issues/310)のですが、コマンドを変更すればいいとのこと。[こちらの行](https://github.com/DragonBox/u3d/blob/master/lib/u3d/installer.rb#L288)を下記に変更するとうまく動きました。


```ruby
command = "7z -aos -t* -o#{tmp_dir.shellescape} e #{file.shellescape}"
```

しかし、PRがでていない… これはPRチャンスなのか。

## 最新のUnityがインストールできない不具合について

`u3d available`で気になったのが、Hubで落とせるバージョン(Unity2018.3や2019)が存在しなかったことです。どういうふうにバージョン一覧を取得しているのかなぁと思い、実装を追ってみました。

`u3d available`の実装は、[lib/u3d/commands.rbの106行目](https://github.com/DragonBox/u3d/blob/197709cd09decf9b61e3853153456d3ff51e14b8/lib/u3d/commands.rb#L106)の`list_available`メソッドであり、バージョンの一覧は[cache_versionsメソッドを呼び出して取得](https://github.com/DragonBox/u3d/blob/197709cd09decf9b61e3853153456d3ff51e14b8/lib/u3d/commands.rb#L112)しています。`cache_versions`メソッドは、[同じファイルのL269](https://github.com/DragonBox/u3d/blob/197709cd09decf9b61e3853153456d3ff51e14b8/lib/u3d/commands.rb#L269)にあり、[U3d.Cache](https://github.com/DragonBox/u3d/blob/197709cd09decf9b61e3853153456d3ff51e14b8/lib/u3d/cache.rb)クラスから取得している事がわかります。

で、処理を追ってみると、最終的には[GLOBAL\_CACHE\_URLからデータを取得している](https://github.com/DragonBox/u3d/blob/197709cd09decf9b61e3853153456d3ff51e14b8/lib/u3d/cache.rb#L120)ことがわかります。[GLOBAL\_CACHE\_URLは定数](https://github.com/DragonBox/u3d/blob/197709cd09decf9b61e3853153456d3ff51e14b8/lib/u3d/cache.rb#L40)で、`https://dragonbox.github.io/unities/v1/versions.json` を指しています。ナルホド独自ファイル(変に公式に負荷をかけないようにしてるのかな?)。

確かに上のJSONを見てみると、一部のUnityバージョンが入っていませんでした(というか、`u3d available`の結果と一致していました。当然ですが。)。

おかしいなと思ってPRあさってたら、修正の[PR](https://github.com/DragonBox/u3d/pull/335)は出てました。どうやら、Unityのバージョン一覧取得のJSONが、`Unity 2017.1.5f1`以降から(?)最新変わった模様。
修正を見てみると[Hubが参照しているJSONと同じもの](https://github.com/DragonBox/u3d/pull/335/files#diff-8ff34ad73701028f87b92f81adc294d4R118)を見ていそうな感じ。早くマージされてくれないかな。

## まとめ

u3dの紹介とそのインストール方法、u3dを実際に使ってUnityをインストールする方法と、いくつかのハマりポイントを紹介しました。

次は、上記のLinux環境でサンプルプロジェクトをビルドしてみます。



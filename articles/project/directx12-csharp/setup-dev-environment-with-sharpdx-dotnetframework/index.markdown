---
title: "SharpDXをインストールして、C#でDirectX12開発環境を構築する (.NET Framework コンソールアプリケーション編）"
date: "2021-08-17T00:00:00+09:00"
draft: false
tags: ["DirectX12", "C#", "SharpDX"]

---

[SharpDX](http://sharpdx.org/)というDirextX APIの.NET Wrapperを用いてDirectX12を触ります。

[Home | SharpDX](http://sharpdx.org/)

SharpDXは2019年に開発及びメンテナンスが終了しています。しかし[MonoGame](https://github.com/MonoGame/MonoGame)や[stride](https://github.com/stride3d/stride)というゲームエンジンで利用されており（ただしMonoGameはSharpDX.Direct3D12は利用していない）、一旦やりたいことはやれそうという判断でしばらくSharpDXを用いて進めていきます。もしかすると、どこかでライブラリなどを変更する可能性があります。

## プロジェクトの作成

C#でDirectX12でグラフィックスプログラミングを行うための環境を構築していきます。具体的には下記のような環境を構築します。

- .NET Frameworkベースのコンソールアプリケーションを作成して、`System.Window.Forms`を用いてウインドウを作成できるようにします
- NuGet経由でSharpDX関連のパッケージをインストールして、DirectX12のAPIを呼び出し可能にします


### 開発環境について

Windows 10およびVisual Studio（執筆時は2022 Preview 3）を用いて開発を行います。

また AMD Ryzen 7 5800Xを、GPUはNVIDIA GeForce RTX 3060を用いて検証を行っています。


### csprojの作成

まず、C#のプロジェクト（`.csproj`）を作成します。「Console App（.NET Framework）」を選択して.NET Frameworkのアプリケーションを作成します。

![](2021-08-16-05-52-47.png)

Project nameおよびLocationは任意です。Frameworkのバージョンは「.NET Framework 4.8」としています。

![](2021-08-16-05-58-14.png)

### フォームをReference Managerで利用可能にする

前述の通りDirectX12で描画した内容をウインドウに描画するために、Windowsのフォーム（`System.Windows.Forms.Form`）を利用します。

利用するにはプロジェクトのReference Managerの設定で、`System.Windows.Forms`および`System.Drawing`を追加します。

Reference Managerは、下図のようにSolution Explorer（Visual Studioを開くと標準で右側に出ているウインドウ）で対象のプロジェクトの「References」を右クリックし、メニューの「Add Reference...」をクリックすると開けます。

![](2021-08-16-06-08-11.png)

あとは下図のように`System.Windows.Forms`および`System.Drawing`を選択して、右下の「OK」ボタンをクリックすることで、フォームを利用できます。

![](2021-08-16-06-12-23.png)


### NuGet経由でSharpDXをインストールする

SharpDXライブラリはNuGet経由でインストールできます。下記のパッケージをインストールします。

- [SharpDX](https://www.nuget.org/packages/SharpDX)
    - SharpDX本体
- [SharpDX.Direct3D12](https://www.nuget.org/packages/SharpDX.Direct3D12/)
    - DirectX12のAPIを利用するために必要
- [SharpDX.DXGI](https://www.nuget.org/packages/SharpDX.DXGI/)
    - DXGI（Microsoft DirectX Graphics Infrastructure）を利用するために必要
- [SharpDX.D3DCompiler](https://www.nuget.org/packages/SharpDX.D3DCompiler/)
    - シェーダのコンパイルに使う
- [SharpDX.Mathematics](https://www.nuget.org/packages/SharpDX.Mathematics/)
    - グラフィックスの計算で利用する数学系のAPIが入っている

NuGetは下図のようにSolution Exprolerで該当プロジェクトにカーソルを当てて右クリックし、「Manage NuGet Packages...」から起動します。

![](2021-08-16-06-00-16.png)

すると下図のようなウインドウが立ち上がるので、「SharpDX」などで検索して上記の5パッケージを探して、インストールします。

![](2021-08-17-04-21-00.png)

また、今回利用するパッケージはすべて`4.2.0`としています。
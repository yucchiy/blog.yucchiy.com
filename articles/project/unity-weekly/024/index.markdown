---
type: "unity-weekly"
title: "Unity Weekly #024"
date: "2021-07-26T09:00:00+09:00"
draft: false
tags: ["Unity", "Unity Weekly"]

---

## Unity で URP 向けのファーシェーダを書いてみた（フィン法） 

![](./20210724004425.gif)

[Unity で URP 向けのファーシェーダを書いてみた（フィン法） - 凹みTips](https://tips.hecomi.com/entry/2021/07/24/121420)

- この記事ではUniversal Render Pipeline（URP）でフィン法によるファーシェーダの実装方法について紹介しています。
- フィン法の説明から実装、ポリゴン形状によって見た目が左右される問題に対してUV座標均一化やジオメトリシェーダによって元ポリゴンに対して動的に頂点を増やしてフィンを増やす方法、テッセレーションでPN Triangleによってポリゴンを増やしてフィンを密にする方法、ライティング、フィンの法線についてそれぞれ解説しています。

## Dynamic destruction in Radio Viscera

![](./header.png)

[Gamasutra: Owen Deery's Blog - Dynamic destruction in Radio Viscera](https://www.gamasutra.com/blogs/OwenDeery/20210721/377724/Dynamic_destruction_in_Radio_Viscera.php)

- この記事では、[Radio Viscera](https://store.steampowered.com/app/1303480/Radio_Viscera/)というゲームで採用されている動的な損傷システムについて紹介しています。
- レイキャストによる損傷部を特定とダメージバッファと呼ばれるテクスチャへの書き込み、ダメージバッファを考慮した損傷部の描画方法、ダメージバッファからマーチングスクエア法にを用いた輪郭線の抽出とコリジョンへの反映、ストールせずにVRAMからダメージバッファを取得する方法、損傷を考慮したナビゲーションについてそれぞれ解説しています。


## How to zoom a camera in Unity 

[How to zoom a camera in Unity (3 methods with examples) - Game Dev Beginner](https://gamedevbeginner.com/how-to-zoom-a-camera-in-unity-3-methods-with-examples/)

![](./ZOOM-FEATURE-2.jpg)

- この記事では、Unityでカメラをズームさせる方法を3種類、サンプル付きで紹介しています。
- `Camera.fieldOfView`を調整する方法とズーム間の補間方法、実際にカメラを近づけてズームする方法とオブジェクトのめり込みを考慮したズームアウトの実装、2D（正投影）におけるズーム方法についてそれぞれ解説しています。

## Accessing struct fields using reflection without producing garbage

[Accessing struct fields using reflection without producing garbage – COFFEE BRAIN GAMES](https://coffeebraingames.wordpress.com/2021/07/19/accessing-struct-fields-using-reflection-without-producing-garbage/)

- この記事では、構造体のフィールドへのリフレクションを用いてアクセスをガベージなしで行う方法について紹介しています。
- `FieldInfo.SetValue`メソッドはオブジェクトパラメータを要求するためBoxingによるガベージが発生しますが、`UnsafeUtility.GetFieldOffset`や`UnsafeUtility.AddressOf`を用いて、値が格納されているアドレスを取得して、そこに直接値を書き込むことで、ガベージなしで構造体のフィールドを更新する方法を説明しています。また、この仕組みを用いて構造体のXMLシリアライザを実装する方法を解説しています。


## Compute Shader Interactive Grass + Updated Painter Tool

![](./2021-07-12-18-09-23.gif)

[Compute Shader Interactive Grass + Updated Painter Tool | Minions Art on Patreon](https://www.patreon.com/posts/compute-shader-53587750)

- この記事では、Compute Shaderでインタラクティブな草を描画するための実装およびそれを編集するためのペイントツールを紹介しています。この記事はビルトインシェーダーで実装されていますが、URPバージョンも近日公開とのことです。
- [ジオメトリシェーダーによるインタラクティブな草の実装は以前に公開されています](https://www.patreon.com/posts/grass-geometry-1-40090373)が、クロスプラットフォーム対応のためにコンピュートシェーダーに書き直しています。またペイントツールには色のブレンドや草の長さ、幅のフェードの編集をしやすいようにブラシに２つの半径を用意するなどの更新があります。


---
title: UnityのCompute shaderについて理解してみる
description: ''
pubDatetime: 2019-01-02T15:07:00.000Z
tags:
  - Unity
  - Compute shader
  - C#
  - Tutorial
---

演出で使われるようなシミュレーションをGPUで行いたいなと思い、UnityでCompute shaderを扱う方法について調べてみた。

# Compute shaderとは
> Compute shaders are programs that run on the graphics card, outside of the normal rendering pipeline. They can be used for massively parallel GPGPU algorithms, or to accelerate parts of game rendering.

https://docs.unity3d.com/Manual/class-ComputeShader.html より。

通常のレンダリングパイプラインとは異なり、GPU上で実行するプログラムのことである。
これは、GPGPUによる並列アルゴリズムやゲームのレンダリングの一部を加速させるために使用できる。

Compute shaderは、[DX11 HLSL](https://docs.unity3d.com/ja/current/Manual/SL-ShadingLanguage.html)で記載されます。

# Compute shaderの基礎
## Kernel

Kernelは、GPUで実行される処理の単位を指します。シェーダー上では、1つの関数として扱われます。

例として、2次元の放物線を計算するKernelです。
`#pragma kernel KernelName`構文で、シェーダー内の関数がKernelであることを伝えます。
ちなみに、Kernelは1つのシェーダーファイル内に、複数書くことができます。

```hlsl
#pragma kernel CalculateParabolaCurve

RWStructuredBuffer<float> buffer;
float a, p, q;

[numthreads(4, 1, 1)]
void CalculateParabolaCurve(uint3 dispatchThreadID : SV_DispatchThreadID)
{
    buffer[dispatchThreadID.x] = a * (dispatchThreadID.x - p) * (dispatchThreadID.x - p) + q;
}
```

## Thread

KernelはThreadによって実行されます。Threadは、3次元で指定します（上記の`numthreads`の指定がそれ）。
上記の場合、`4 * 1 * 1 = 4` Threadが同時に実行されます。

## Group

GroupはThreadを実行する単位です。Groupが持つThreadのことを、Group threadと呼びます。
このGroupも、3次元で表されます。Groupは、下記のように、Compute shaderを実行するときに指定します。


```csharp
Shader.Dispatch(kernelIndex, 2, 1, 1);
```

Threadが`(4, 1, 1)`、Groupが`(2, 1, 1)`の場合、合計のスレッド数は、`(4 * 1 * 1) * (2 * 1 * 1) = 8` となります。

## Computer shaderを用いて放物線を求める方針

上記の`CalculateParabolaCurve`では、与えられた x に対して、y を求めています。xは、1次元配列のインデックスで表されています。

ここで放物線の y の値を 0 <= x < N まで求めたい場合は、このスレッド数がNになるようにしなければ、すべての値を計算できません(当然ですが…)。

`CalculateParabolaCurve`をCompute shaderで計算するときには、下記の図のようにThreadとGroupを割り当てて計算します。

![](https://d2mxuefqeaa7sj.cloudfront.net/s_4724A288696BE9EFDEA1D6D344F94735D0F1D06506938994AA0CED4AC2D63D5F_1546454388167_Compute_shader.jpg)


上記の方針で計算するとして、そのThreadがKernelで計算した結果を書き込む先のバッファの要素を決めるには、そのスレッドIDを用います(バッファの各要素にスレッドが割り当てられている前提なので、バッファの各要素にユニークなスレッドIDが割り当てられている為）。

スレッドIDを取得するには、Kernelの引数に、`uint3 dispatchThreadID : SV_DispatchThreadID`と指定します。`uint3`なのは、Threadが3次元で表現されているからです。

上記を踏まえて、放物線の計算には、下記のようにしています。

```hlsl
void CalculateParabolaCurve(uint3 dispatchThreadID : SV_DispatchThreadID)
{
    // 今回y, zは分割をしていないため
    buffer[dispatchThreadID.x] = a * (dispatchThreadID.x - p) * (dispatchThreadID.x - p) + q;
}
```

ちなみに、`SV_DispatchThreadID`は、DirectX HLSLのセマンティクスで、GroupIDやGroupThreadIDなど、様々な値を取ることができます（参考: [SV_GroupID](https://msdn.microsoft.com/ja-jp/library/ee422449(v=vs.85).aspx)、[SV_GroupThreadID](https://msdn.microsoft.com/ja-jp/library/ee422451(v=vs.85).aspx)）。

まだ勉強不足なので、それらの値を利用したいケースが思い浮かんでないのですが、バッファ先を特定する場合は、たいてい`SV_DispatchThreadID`で済む気がします。

これらの値の算出については、MSDN公式の図及びドキュメントが参考になります。

![](https://d2mxuefqeaa7sj.cloudfront.net/s_4724A288696BE9EFDEA1D6D344F94735D0F1D06506938994AA0CED4AC2D63D5F_1546455517147_IC340506.png)


この例では1次元利用するだけで十分でしたが、用途に合わせてThreadとGroupをうまく指定します。
例えば画像処理をCompute shaderで行いたい場合は、2次元をうまく使うと効率よく計算することができます。

# Compute shaderをスクリプトから実行する

`CalculateParabolaCurve`を例に、実際にCompute shaderを実行してみます。

```hlsl
#pragma kernel CalculateParabolaCurve

RWStructuredBuffer<float> buffer;
float a, p, q;

[numthreads(4, 1, 1)]
void CalculateParabolaCurve(uint3 dispatchThreadID : SV_DispatchThreadID)
{
    buffer[dispatchThreadID.x] = a * (dispatchThreadID.x - p) * (dispatchThreadID.x - p) + q;
}
```

上記のShaderでは、結果を保存するための`buffer`と、パラメータ`a, p, q`が変数として定義されています。

まず、上記のShaderを実行するスクリプトは下記となります。


```csharp
using UnityEngine;

namespace Yucchiy.Sandbox.SimpleComputeShader
{
    public class  ParabolaCurveCalculator : MonoBehaviour
    {
        public ComputeShader Shader;
        public float a, p, q;
        public uint CurveLength = 32;
        ComputeBuffer Buffer;

        private void Start()
        {
            var kernelIndex = Shader.FindKernel("CalculateParabolaCurve");

            Buffer = new ComputeBuffer((int)CurveLength, sizeof(float));
            Shader.SetBuffer(kernelIndex, "buffer", Buffer);

            Shader.SetFloat("a", a);
            Shader.SetFloat("p", p);
            Shader.SetFloat("q", q);

            uint sizeX, sizeY, sizeZ;
            Shader.GetKernelThreadGroupSizes(
                kernelIndex,
                out sizeX,
                out sizeY,
                out sizeZ
            );

            Shader.Dispatch(kernelIndex, (int)(CurveLength / sizeX), 1, 1);

            var result = new float[CurveLength];
            Buffer.GetData(result);
            foreach (var eachResult in result)
            {
                Debug.Log(eachResult);
            }
        }

        private void OnDestroy()
        {
            Buffer.Release();
            Buffer = null;
        }
    }
}
```

## Compute shaderをスクリプトから参照する

スクリプトからCompute shader内のKernelにアクセスするには、`ComputeShader.FindKernel`で取得できるインデックスを用います。`FindKernel`の引数は文字列で、シェーダー内で定義されたKernel名を指定します(Kernel名は`#pragma kernel KernelName`の`KernelName`部分)。

```csharp
var kernelIndex = Shader.FindKernel("CalculateParabolaCurve");
```

## Compute buffer

先程の図で述べたとおり、Compute shaderでは、計算結果をCompute bufferと呼ばれる専用バッファを介してやりとりします。このCompute bufferは、スクリプト側で定義して、`ComputeShader.SetBuffer`によってCompute shaderに渡してやります。

```csharp
Buffer = new ComputeBuffer((int)CurveLength, sizeof(float));
Shader.SetBuffer(kernelIndex, "buffer", Buffer);
```

`ComputeBuffer`コンストラクタの第1引数にはバッファサイズを、第2引数にはバッファ1つあたりのサイズを指定します。今回は、計算結果を`float`で扱うため、`sizeof(float)`の結果を渡しています。

作成したバッファを`ComputeShader.SetBuffer`で渡してやります。第1引数には、Kernelインデックスを渡します。第2引数には、Shader内で定義された変数のうち、バインドしたい変数名を指定します。今回は`RWStructuredBuffer<float> buffer;`に渡してやりたいので、`"``buffer``"`としています。第3引数には作成したバッファを指定します。


## Compute shaderへの変数の渡し方

今回の例だと`a, p, q`が、放物線のパラメータとなっていて、Compute shader内では、変数として定義しており、様々な放物線を計算できるようにしています。

このShader内の変数に、スクリプトから値を渡すには、各種型(`Int`や`Float`、`Matrix`や各種配列)に対して、Setメソッドが用意されています(参考: [ComputeShader - Unity Documentation](https://docs.unity3d.com/ScriptReference/ComputeShader.html))。

どのSetメソッドも、第1引数にはKernelインデックスを、 第2引数には値や参照を渡します。


```csharp
Shader.SetFloat("a", a);
Shader.SetFloat("p", p);
Shader.SetFloat("q", q);
```

## Compute shaderを実行する

バッファや変数の設定が終わったら、いよいよShaderを実行します。実行には、`ComputeShader.Dispatch`を呼び出します(参考: [ComputeShader.Dispatch - Unity Documentation](https://docs.unity3d.com/ScriptReference/ComputeShader.Dispatch.html))。

第1引数には、Shader内の、実行したいKernelのインデックスを指定し、第2 〜 4引数にはそれぞれ、(x, y, z)のGroup数を指定します。

```csharp
uint sizeX, sizeY, sizeZ;
Shader.GetKernelThreadGroupSizes(
    handler,
    out sizeX,
    out sizeY,
    out sizeZ
);

Shader.Dispatch(kernelIndex, (int)(CurveLength / sizeX), 1, 1);
```

先程の例で、スレッド数とバッファサイズを一致させる必要があると述べました。上記の例だと、Thread * Group で計算される合計スレッド数と、`CurveLength`のサイズが一致する必要があります。

アプリケーションとして、`CurveLength`はユーザ入力として動的に変わります。しかし、Compute shaderの`numthreads`は、動的に変更することができません。なので、一致させるためには、このGroup数を動的に調整してやる必要があります。

求めたいGroup数は、合計スレッド数をThread数で割ってやればよいです。KernelのThread数(`numthreads`で指定されている値)は、`ComputeShader.GetKernelThreadGroupSizes`によって取得できるため、Group数は、`((int)(CurveLength / sizeX), 1, 1)`で計算して渡してやります。

## Compute shaderの計算結果を受け取る

Compute shader計算後に、その結果を取り出すには、`ComputeShader.GetData`を利用します。
引数には、バッファの結果を書き出す先の配列を指定します。当然ですが、バッファとこの配列のサイズと要素の型は一致させる必要があります(もしかしたらあっていなくても問題ないケースもありそうだけど…。当然期待した結果にはならないはず)。

```csharp
var result = new float[CurveLength];
Buffer.GetData(result);
foreach (var eachResult in result)
{
    Debug.Log(eachResult);
}
```

`CurveLength=8, a = 2, p = 0, q = 0`の時、結果は以下のようになることが確認できます。

![](https://d2mxuefqeaa7sj.cloudfront.net/s_4724A288696BE9EFDEA1D6D344F94735D0F1D06506938994AA0CED4AC2D63D5F_1546453285963_Screen+Shot+2019-01-03+at+3.20.50.png)

# まとめ

簡単な計算を通して、Compute shaderの概念・Unityでの使い方について勉強してみました。
次は、実際に演出などのシミュレーションの計算の実装に使ってみたり、効率の良いGroup・Threadの指定について調べてみたいと思う。

# Reference
- [Compute shaders - Unity Documentation](https://docs.unity3d.com/Manual/class-ComputeShader.html)
- [ComputeShader - Unity Documentation](https://docs.unity3d.com/ScriptReference/ComputeShader.html)
- [ComputeBuffer - Unity Documentation](https://docs.unity3d.com/ScriptReference/ComputeBuffer.html)
- [ComputeShaderを触ってみる その1 ～スレッド編～](http://edom18.hateblo.jp/entry/2017/05/10/083421)
- [kenjiro/Swarm - Github](https://github.com/keijiro/Swarm)


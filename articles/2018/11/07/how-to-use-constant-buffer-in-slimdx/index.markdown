---
date: "2018-11-06T08:01:33"
draft: false
title: "SlimDXでConstantBufferを使ってシェーダーに定数を渡す"
tags: ["SlimDX", "C#", "DirectX"]

---

DirectXで、例えば以下の頂点シェーダーのようにその頂点の変換行列を渡して、シェーダー内で変換を行いたいとする。

```hlsl
matrix ModelViewProjection;

struct VertexPositionColor
{
	float4 Position : SV_Position;
	float4 Color : COLOR;
};

VertexPositionColor VShader(VertexPositionColor input)
{
	input.Position = mul(input.Position, ModelViewProjection);
	return input;
}
```

DirectXの[Effects](https://docs.microsoft.com/en-us/windows/desktop/direct3d11/d3d11-graphics-programming-guide-effects)の場合、SlimDXでは`SlimDX.Direct3D11.Effect.GetVariableBy(Name|Index)`メソッドを経由して、`SlimDX.Direct3D11.EffectVariable`を取得でき、このインスタンスを経由して、変数を設定したりできます。

```cs
effect.GetVariableByName("ModelViewProjection")
    .AsMatrix()
    .SetMatrix(modelMatrix * viewMatrix * projectionMatrix);
```

ただし、下記のように、各シェーダーを個々で生成し、DeviceContextにそれぞれのシェーダーを設定する方式をとっていたので、
その場合に、どのように変数を渡せばいいかわからなかったので、調べてみました。

```
using (var bytecode = ShaderBytecode.CompileFromFile("triangle.fx", "VShader", "vs_4_0", ShaderFlags.None, EffectFlags.None))
    vertexShader = new VertexShader(device, bytecode);

// load and compile the pixel shader
using (var bytecode = ShaderBytecode.CompileFromFile("triangle.fx", "PShader", "ps_4_0", ShaderFlags.None, EffectFlags.None))
    pixelShader = new PixelShader(device, bytecode);
```

## ConstantBuffer

シェーダーに定数を渡してやるには、`ConstantBuffer`を利用してやるとよさそう。
`ConstantBuffer`は名前の通り定数を渡してやるバッファで、シェーダーに定数を渡す用途に利用できます。

### 使い方

基本は頂点バッファを作成するときと同じ要領で、まずはバッファに突っ込むデータ`SlimDX.DataStream`で用意します。

```cs
// 64は`SlimDX.Matrix`のサイズ
var stream = new SlimDX.DataStream(64, true, true);
// 事前に生成した、`SlimDX.Matrix`型の変数を渡す
stream.Write(matrix);
stream.Position = 0;
```

`ConstantBuffer`としてバッファを確保し、頂点シェーダーに渡してみます。Descriptionに、`ConstantBuffer`を作成することを指定してやります。

```cs
using (var buffer = new SlimDX.Direct3D11.Buffer(
    deviceContext, // 書き込み対象の`SlimDX.Direct3D11.DeviceContext`
    stream,
    64,
    SlimDX.Direct3D11.ResourceUsage.Dynamic,
    SlimDX.Direct3D11.BindFlags.ConstantBuffer, // ConstantBufferであることを指定
    SlimDX.Direct3D11.CpuAccessFlags.Write,
    SlimDX.Direct3D11.ResourceOptionFlags.None, 4))
{
    deviceContext.VertexShader.SetConstantBuffer(buffer, 0);
}
```

頂点シェーダーは以下になります。

```hlsl
cbuffer c0
{
    matrix ModelViewProjection;
}

struct VertexPositionColor
{
	float4 Position : SV_Position;
	float4 Color : COLOR;
};

VertexPositionColor VShader(VertexPositionColor input)
{
	input.Position = mul(input.Position, ModelViewProjection);
	return input;
}
```

これで、頂点バッファに定数が渡せました。
余談ですが、`cbuffer`はごっそり削除しても、[$Globalsという名前のConstantBufferとして認識されるよう](https://qiita.com/ousttrue/items/a82bfe2135596fcda74b)です。

DirectX、まだまだ触り始めたばかりなので、間違っている箇所等、[@yucchiy_](https://twitter.com/yucchiy_)までご連絡いただけると幸いです。

## 参考

- [Apparat - Engineering a 3D Engine with C# and SlimDX](http://apparat-engine.blogspot.com/2012/11/setting-transformations-in-shader-with.html)
- [DirectX(D3D11.1)再入門 ConstantBuffer](https://qiita.com/ousttrue/items/a82bfe2135596fcda74b)
- [Introduction to Buffers in Direct3D 11](https://docs.microsoft.com/en-us/windows/desktop/direct3d11/overviews-direct3d-11-resources-buffers-intro#vertex-buffer)
- [Shader Constants](https://docs.microsoft.com/en-us/windows/desktop/direct3dhlsl/dx-graphics-hlsl-constants)

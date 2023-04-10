---
type: "tech"
title: "AsyncOperationAwaitableExtensionsで、AsyncOperationをawaitableにする"
description: "AsyncOperationは標準でawaitできませんが、Unity 2023ではAsyncOperationAwaitableExtensionsによってAsyncOperationがAwaitableに変換され、これによりawaitできるようになります。これについてその動作原理を説明します。"
tags: ["Unity", "Awaitable API", "Unity 2023"]
date: "2023-04-10T00:00:00"

---

keijiroさんの[AsyncAwaitTest](https://github.com/keijiro/AsyncAwaitTest)レポジトリをのぞいていると、下記のようにUnityWebRequestのHTTPリクエストなどの非同期処理がawait可能なことに気づきました。

[AsyncAwaitTest/WebRequestSample.cs at main · keijiro/AsyncAwaitTest · GitHub](https://github.com/keijiro/AsyncAwaitTest/blob/main/Assets/WebRequestSample.cs)

```csharp
using UnityEngine;
using UnityWebRequest = UnityEngine.Networking.UnityWebRequest;

public sealed class WebRequestSample : MonoBehaviour
{
    [SerializeField] string _uri = "https://unity.com";

    async void Start()
    {
        using var req = UnityWebRequest.Get(_uri);
        await req.SendWebRequest();
        Debug.Log($"{req.result}: {req.downloadedBytes} bytes");
    }
}
```

標準でかなりスッキリとasync/awaitの処理がかけるようになったんだと思いつつ、これがどう実装されているんだろうと気になり、その動作原理（というほどたいそうなものではないけど）を調べてみました。

## Unityの非同期処理とAsyncOperation

Unityで非同期処理を行うメソッドの多くは`AsyncOperation`か、それを継承した型の戻り値を返します。
処理は非同期で行われますが、この型の`isDone`というプロパティを監視し続けることで、処理の終了タイミングがわかります。

たとえばコルーチンを用いてUnityWebRequestのリクエストを非同期で行うには、下記のように記述できます。

```csharp
IEnumerator Start()
{
    using var request = UnityWebRequest.Get(_uri);
    AsyncOperation operation = request.SendWebRequest();
    while (!operation.isDone)
    {
        // 処理実行中
        yield return null;
    }

    // 処理完了
    Debug.Log($"{request.result}: {request.downloadedBytes} bytes");
}
```

ただし、**`AsyncOperation`はawaitできません**。

## AwaitableとAsyncOperationAwaitableExtensions

では、はじめに紹介したUnityWebRequestのawaitはどのように実現しているのかというと、下記のようなUnity 2023.1には`AsyncOperationAwaitableExtensions.GetAwaiter`という`AsyncOperation`に対する拡張メソッドが`UnityEngine`名前空間内に実装されているためです。

```csharp
namespace UnityEngine
{
    public static class AsyncOperationAwaitableExtensions
    {
        [ExcludeFromDocs]
        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public static Awaitable.Awaiter GetAwaiter(this AsyncOperation op)
             => Awaitable.FromAsyncOperation(op).GetAwaiter();
    }
}
```

この拡張メソッドでは`AsyncOperation`を`Awaitable`型に変換しています。
`Awaitable`はUnity 2023.1で実装された、メインスレッド上で非同期処理を行うためのAPIですが、この型が`GetAwaiter`メソッドを実装しているためawait可能です。（参考: [非同期メソッドの内部実装 - C# によるプログラミング入門 | ++C++; // 未確認飛行 C](https://ufcpp.net/study/csharp/sp5_awaitable.html)）

これにより、間接的に**`AsyncOperation`がawait可能になったということです**。

先述の通りUnityの非同期処理の多くは`AsyncOperation`か、それを基底にした型を返す（UnityWebRequestなら`UnityWebRequestAsyncOperation`を、`SceneManager.LoadSceneAsync`は直接`AsyncOperation`を返す）ので、標準APIの非同期処理の多くはawait可能になったといえます。

ちなみに余談ですが、GPU処理を非同期に実行する`AsyncGPUReadback`は、下記のように`Awaitable<AsyncGPUReadbackRequest>`を返却する`RequestAsync`メソッドが新設されているようです。

* [Rendering.AsyncGPUReadback-RequestAsync - Unity スクリプトリファレンス](https://docs.unity.cn/ja/2023.2/ScriptReference/Rendering.AsyncGPUReadback.RequestAsync.html)
* [AsyncAwaitTest/AsyncReadbackSample.cs at main · keijiro/AsyncAwaitTest · GitHub](https://github.com/keijiro/AsyncAwaitTest/blob/main/Assets/AsyncReadbackSample.cs#L24)

```csharp
async void Start()
{
    var frameCount = Time.frameCount;
    var req = await AsyncGPUReadback.RequestAsync(_texture, 0);

    Debug.Log(frameCount);
    Debug.Log(req.GetData<Color32>()[0]);
}
```

この実装から、今後実装されるUnityの非同期処理については`Awaitable`を直接返却するAPIも合わせて提供される可能性がありそうです。

## AsyncOperationにCancellationTokenを渡す

`AsyncOperationAwaitableExtensions`経由で`AsyncOperation`を直感的にawaitできることがわかりましたが、注意点としては`CancellationToken`を渡すことができていない点です。

これは、`AsyncOperationAwaitableExtensions.GetAwaiter(this AsyncOperation op)`が内部で呼び出している`Awaitable.FromAsyncOperation`が下記のように第2引数で`CancellationToken`を受け取るため、こちらを直接呼び出すことで実現できます。

```csharp
/// <summary>
///   <para>Creates an Awaitable from an existing AsyncOperation object.</para>
/// </summary>
/// <param name="op">Async operation object.</param>
/// <param name="cancellationToken">Optional cancellation token.</param>
[MethodImpl(MethodImplOptions.AggressiveInlining)]
public static Awaitable FromAsyncOperation(
  AsyncOperation op,
  CancellationToken cancellationToken = default (CancellationToken))
{
  cancellationToken.ThrowIfCancellationRequested();
  return Awaitable.FromNativeAwaitableHandle(Awaitable.FromAsyncOperationInternal(op.m_Ptr), cancellationToken);
}
```

具体的には下記のように記述します。

```csharp
async void Start()
{
    using var request = UnityWebRequest.Get("https://unity.com");
    // たとえばゲームオブジェクトのライフサイクルに紐付いたCancellationTokenを渡す
    await Awaitable.FromAsyncOperation(
        request.SendWebRequest(), destroyCancellationToken);
}
```

## 余談: UniTaskでのGetAwaiter

UniTaskでもUnityWebRequestを下記のようにawaitできます（参考: [Basics of UniTask and AsyncOperation](https://github.com/Cysharp/UniTask#basics-of-unitask-and-asyncoperation)）。

```csharp
var txt = (await UnityWebRequest.Get("https://...").SendWebRequest())
    .downloadHandler.text;
```

これもAwaitable APIと同様、下記の`UnityAsyncExtensions.GetAwaiter`という拡張メソッドが用意されています。これにより`AsyncOperation`から`UniTask`への変換が行われます。

[UniTask/UnityAsyncExtensions.cs at master · Cysharp/UniTask · GitHub](https://github.com/Cysharp/UniTask/blob/master/src/UniTask/Assets/Plugins/UniTask/Runtime/UnityAsyncExtensions.cs#L21)

```csharp
namespace Cysharp.Threading.Tasks
{
    public static partial class UnityAsyncExtensions
    {
#if !UNITY_2023_1_OR_NEWER
        // from Unity2023.1.0a15, AsyncOperationAwaitableExtensions.GetAwaiter is defined in UnityEngine.

        public static AsyncOperationAwaiter GetAwaiter(this AsyncOperation asyncOperation)
        {
            Error.ThrowArgumentNullException(asyncOperation, nameof(asyncOperation));
            return new AsyncOperationAwaiter(asyncOperation);
        }
#endif
```

## まとめ

`AsyncOperation`を`Awaitable`に変換することでawait可能にする`AsyncOperationAwaitableExtensions.GetAwaiter`メソッドの紹介と、その動作について解説しました。

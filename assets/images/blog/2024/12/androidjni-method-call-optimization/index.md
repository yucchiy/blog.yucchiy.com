---
title: AndroidJNIクラスとstackallocを用いたAndroidメソッド呼び出しのGC.Alloc削減について
description: AndroidJNIクラスとstackallocを用いて、Androidネイティブメソッド呼び出し時のGC.Allocを削減する方法について紹介しています。
pubDatetime: 2024-12-01T15:00:00.000Z
tags:
  - Unity
  - Android
  - Advent Calendar 2024
---

この記事は[Applibot Advent Calendar 2024](https://qiita.com/advent-calendar/2024/applibot) の2日目の記事です。

この記事ではAndroid向けにビルドしたUnityアプリのネイティブメソッド呼び出しの最適化について触れます。

たとえば下記のようにAndroidのHapticFeedbackを呼び出すような実装の場合、

```csharp
// Viw.performHapticFeedback経由でHapticFeedbackを操作
public void PerformHapticFeedback(int feedbackConstant)  
{  
    // _viewにはUnityPlayerが内部的に所持するandroid.view.Viewの
    // AndroidJavaObjectが代入されているものとします
    _view.Call<bool>("performHapticFeedback", feedbackConstant);  
}
```

プロファイラーで計測すると下記のGC.Allocが発生していることが確認できます。

![最適化前のメソッド呼び出しのプロファイリング結果](./call-normal.png)

これには主に下記の原因があげられます。

- `AndroidJavaObject.Call` 呼び出しごとにJNI上のメソッドIDやなどを取り直しているため
- `AndroidJavaObject.Call` の引数の受け取りが `params object[] args` であるため

とくにHapticFeedbackのように呼び出し頻度の高い可能性のあるメソッドでは、このGC.Allocが気になるところです。

本記事ではメソッド呼び出しを工夫することで、Androidのメソッド呼び出しにおけるGC Allocを削減する方法について紹介します。

## AndroidJavaObjectでのメソッド呼び出しの実装の確認

先述したHapticFeedback呼び出しを例に、`AndroidJavaObject` におけるメソッド呼び出しが具体的にどのように行われているかを確認します。

```csharp
// こちらの例を題材に呼び出しを確認する
_view.Call<bool>("performHapticFeedback", feedbackConstant);  
```

上記のメソッド呼び出しでは、具体的に下記のメソッドが呼び出されます。

``` csharp
public ReturnType Call<ReturnType>(string methodName, params object[] args)  
{  
    return this._Call<ReturnType>(methodName, args);  
}
```

このように、メソッドの引数は可変長引数で `object[] args` として渡されます。

引数を渡す際にヒープに `object[]` が確保されるため、 **メソッドを呼び出す都度 GC.Alloc が発生します**。

次に `this._Call<ReturnType>(methodName, args)` を確認します。

```csharp
protected ReturnType _Call<ReturnType>(string methodName, params object[] args)  
{  
    return this._Call<ReturnType>(
        // メソッドIDを検索している
        AndroidJNIHelper.GetMethodID<ReturnType>(
            (IntPtr) this.m_jclass,
            methodName,
            args,
            false),
        args
    );  
}
```

 `AndroidJNIHelper.GetMethodID` を介して `methodName` および `args` からメソッドIDを**都度取得しています**。

最後に `this._Call<ReturnType>(methodID, args)` の処理は下記のとおりです。　

```csharp
protected ReturnType _Call<ReturnType>(IntPtr methodID, params object[] args)  
{  
  Span<jvalue> span = args == null || args.Length == 0 ? new Span<jvalue>() : stackalloc jvalue[args.Length];  
  AndroidJNI.PushLocalFrame(span.Length + 1);  
  AndroidJNIHelper.CreateJNIArgArray(args, span);  
  try  
  {  
    if (AndroidReflection.IsPrimitive(typeof (ReturnType)))  
    {
      if (typeof (ReturnType) == typeof (int))  
        return (ReturnType) (ValueType) AndroidJNISafe.CallIntMethod((IntPtr) this.m_jobject, methodID, span);  
      if (typeof (ReturnType) == typeof (bool))  
        return (ReturnType) (ValueType) AndroidJNISafe.CallBooleanMethod((IntPtr) this.m_jobject, methodID, span);  

      // ...
      // 引数と戻り値に対応したメソッド呼び出しを行う
      // ...

      throw new Exception("JNI: Unknown return type '" + typeof (ReturnType)?.ToString() + "'");
    }
  } finally {
    AndroidJNI.PopLocalFrame(IntPtr.Zero);
  }
}
```

引数の `methodID` と `args` に対応するメソッド呼び出しを行っています。

## メソッド呼び出しの最適化

メソッド呼び出しの方法について確認できましたが、最適化のためには下記がポイントになります。

- メソッドIDなど、メソッド呼び出しに必要なIDをキャッシュする
- 可変長引数による配列のヒープ確保をやめる

上記のポイントを抑えて、下記の実装を最適化してみたいと思います。

```csharp
// Viw.performHapticFeedback経由でHapticFeedbackを操作
public void PerformHapticFeedback(int feedbackConstant)  
{  
    // _viewにはUnityPlayerが内部的に所持するandroid.view.Viewの
    // AndroidJavaObjectが代入されているものとします
    _view.Call<bool>("performHapticFeedback", feedbackConstant);  
}
```

### メソッドIDのキャッシュ

Androidのメソッド呼び出しは、 `AndroidJavaObject.Call` を用いる以外に `AndroidJNI.CallXXXMethod` というメソッドを介して呼び出す事ができます。

`View.performHapticFeedback` は 引数に `int` を取り、戻り値に `boolean` を返却するメソッドですが、下記を呼び出すためには、`AndroidJNI.CallBooleanMethod` が利用できます。

```csharp
AndroidJNI.CallBooleanMethod(  
    // インスタンスメソッド呼び出しのための
    // インスタンスそのもののアドレスを表すIntPtr
    _view.GetRawObject(),  
    // メソッドIDを表すIntPtr
    _performHapticFeedbackMethodId,  
    // このメソッド呼び出しのための配列（jvalue[]）
    args
);
```

`_view` は Unityが内部で所持するViewクラスのインスタンスです。 Unity 6の場合、[AndroidApplication](https://docs.unity3d.com/ScriptReference/Android.AndroidApplication.html) を介して下記のように取得できます。

```csharp
private readonly AndroidJavaObject _view =  
    AndroidApplication  
        // Unity 6から、AndroidApplication.unityPlayer経由で  
        // UnityPlayerを取得できるようになった  
        .unityPlayer  
        // UnityPlayerが直接Viewを継承しなくなったなど  
        // 変更点もいくつか存在する  
        .Call<AndroidJavaObject>("getView");
```

メソッドIDはUnityアプリを起動中は動的に変更されないため、事前に取得しておいて再利用します。

今回は `HapticFeedbackPlayer` という HapticFeedback を扱うための専用クラスを作るとして、このメンバーとして保持しておくことにします。

```csharp
using System;  
using UnityEngine;  
using UnityEngine.Android;

public class HapticFeedbackPlayer : IDisposable
{
    private readonly AndroidJavaObject _view =
        AndroidApplication.unityPlayer.Call<AndroidJavaObject>("getView");
  
    private readonly IntPtr _performHapticFeedbackMethodId =
        AndroidJNIHelper.GetMethodID(
            // メソッドが所属するクラスID（これも使いまわしても良い）
            AndroidJNI.FindClass("android/view/View"),
            // メソッド名
            "performHapticFeedback",
            // メソッドのシグネチャ
            // intを引数にとり、戻り値にbooleanを返すメソッドのシグネチャを表す
            "(I)Z",  
            // 静的メソッドかどうか。インスタンスメソッドなのでfalse
            false
        );

    public void Dispose()
    {
        _view.Dispose();
    }

    // ...
}
```

これで `HapticFeedbackPlayer` が生存する間は メソッドIDをキャッシュすることができました。
### メソッド呼び出しの最適化

`AndroidJavaObject` のメソッド呼び出しでは可変長引数で引数が渡ってしまうため、呼び出しごとに`object[]` のヒープ確保が行われていましたが、これを最適化します。

具体的には、今回は `stackalloc` で引数を渡すときに必要な `jvalue[]` を**スタック上確保することで** ヒープ上への配列確保を回避します。

メソッド呼び出しの全体を示します。

```csharp
public void PerformHapticFeedbackOptimized(int feedbackConstant)  
{  
    // 引数一覧をstackallocで渡す  
    // 今回渡す引数の個数は1個なので、配列を長さ1で確保する
    Span<jvalue> args = stackalloc jvalue[1];  

    // 引数の型に合わせて値を設定。intの場合はiというプロパティに値を設定  
    args[0].i = feedbackConstant;  

    AndroidJNI.CallBooleanMethod(  
        _view.GetRawObject(),  
        _performHapticFeedbackMethodId,  
        args
    ); 
};
```

`jvalue` は JNI上での値を表す構造体で、下記のように定義されています。

```csharp
namespace UnityEngine  
{  
  [NativeType(CodegenOptions.Custom, "ScriptingJvalue")]  
  [StructLayout(LayoutKind.Explicit)]  
  public struct jvalue  
  {  
    [FieldOffset(0)]  
    public bool z;  
    [FieldOffset(0)]  
    public sbyte b;  
    [FieldOffset(0)]  
    public char c;  
    [FieldOffset(0)]  
    public short s;  
    [FieldOffset(0)]  
    public int i;  
    [FieldOffset(0)]  
    public long j;  
    [FieldOffset(0)]  
    public float f;  
    [FieldOffset(0)]  
    public double d;  
    [FieldOffset(0)]  
    public IntPtr l;  
  }
}
```

渡す引数の型に応じて `jvalue` 構造体の適切なフィールドに値を設定します。（たとえば `int` の場合は `i` というフィールドに値を設定します。）

```csharp
// 引数一覧をstackallocで渡す  
// 今回渡す引数の個数は1個なので、配列を長さ1で確保する
Span<jvalue> args = stackalloc jvalue[1];  

// 引数の型に合わせて値を設定。intの場合はiというプロパティに値を設定  
args[0].i = feedbackConstant;  
```

これらの実装を行うことで、プロファイラー上メソッド呼び出し時のGC.Allocを削減することが確認できました。

![最適化を行ったメソッド呼び出しのプロファイリング結果](./call-optimized.png)

## まとめ

Androidのメソッド呼び出しを、AndroidJNIクラスとstackallocを用いてGC.Allocを削減する方法について紹介しました。

すこしニッチな内容でしたが、これらのメソッドの利用方法はネット上に資料が少ないと思うので、この記事が少しでも役に立つと幸いです。

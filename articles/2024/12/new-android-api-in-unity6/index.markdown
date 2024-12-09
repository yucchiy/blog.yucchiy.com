---
type: "tech"
title: "Unity 6から追加されたAndroidに関するAPIの紹介"
description: "Unity 6から追加されたAndroidに関するAPIについて紹介しています。"
tags: ["Unity", "Android", "Advent Calendar 2024"]
date: "2024-12-09T00:00:00"

---

この記事は、[Unity Advent Calendar 2024](https://qiita.com/advent-calendar/2024/unity)の9日目の記事となります。

先週、[AndroidJNIクラスとstackallocを用いたAndroidメソッド呼び出しのGC.Alloc削減について | Yucchiy's Note](https://blog.yucchiy.com/2024/12/androidjni-method-call-optimization/)という記事を書いた際に、Unity 6から[AndroidApplication](https://docs.unity3d.com/ScriptReference/Android.AndroidApplication.html)というクラスが追加されていることに気づき、ふとUnity 6でAndroidに関するAPIについてどのようなクラスやメンバーが増えたのかが気になりました。

そこでこの記事では、Unity 6で追加されたAndroidで利用できるAPIについて紹介します。

## Unity 6で増えたAndroidに関するAPI

Unity 6ではUnityEngine名前空間配下、つまりランタイムで利用できるクラスとして下記が追加されています。

- [UnityEngine.Android.AndroidApplication](https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Android.AndroidApplication.html)
- [UnityEngine.Android.AndroidConfiguration](https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Android.AndroidConfiguration.html)
- [UnityEngine.Android.AndroidGame](https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Android.AndroidGame.html)
- [UnityEngine.Android.AndroidLocale](https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Android.AndroidLocale.html)
- [UnityEngine.Android.ApplicationExitInfoProvider](https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Android.AndroidApplicationExitInfoProvider.html)

それぞれのAPIについてかんたんに説明します。

## AndroidApplication

[Unity - Scripting API: AndroidApplication](https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Android.AndroidApplication.html)

AndroidApplicationは、Androidアプリケーションにランタイム中にデータにアクセスできるクラスで、Unityアプリケーションを構築するAndroidのActivityやContextにアクセスするためのAPIや、AndroidのUIスレッド上で処理を実行するためのAPIなどが提供されます。

これらのAPIはAndroidのネイティブプラグインを実装する際にほぼ必須でアクセスすることになるインスタンスやメソッドなので、Androidのネイティブプラグインの開発者からすると「やっと標準で用意されたか」という感じかもしれません。

追加されたAPIの中からいくつか紹介します。

### currentActivity

[Unity - Scripting API: Android.AndroidApplication.currentActivity](https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Android.AndroidApplication-currentActivity.html)

UnityのAndroidアプリケーションは原則として1つのActivity上で実装されています。
`AndroidApplication.currentActivity` ではこのUnityが用意したActivityを取得するためのプロパティです。

Androidのネイティブプラグインを開発する際には下記のようなコードをほぼ必ずと言っていいほど実装することになるのですが、これが標準で用意されたかたちとなります。

```csharp
using var unityPlayerClass = new AndroidJavaClass("com.unity3d.player.UnityPlayer");
var currentActivity = UnityPlayer.GetStatic<AndroidJavaObject>("currentActivity");
```

Activityの用途はさまざまですが、その用途の1つはIntentの呼び出しです。

たとえばアプリチューザーを用いてテキストを別アプリへシェアする機能は、下記のように実装できます。

```csharp

public static class NativeShare
{
    public static void ShareText(string text, string shareDialogBoxText)
    {
        using var intent = new AndroidJavaObject("android.content.Intent");
        intent.Call<AndroidJavaObject>("setAction", "android.intent.action.SEND");
        intent.Call<AndroidJavaObject>("setType", "text/plain");
        intent.Call<AndroidJavaObject>("putExtra", "android.intent.extra.TEXT", text);
        using var shareIntent = intent.CallStatic<AndroidJavaObject>("createChooser", intent, shareDialogBoxText);
        
        AndroidApplication.currentActivity.Call("startActivity", shareIntent);
    }
}

// 呼び出し方
NativeShare.ShareText("共有するテキスト", "共有するアプリを選択してください");
```

Intentの生成については詳細を割愛しますが、Intentを送信するためにはActivityが必要になるため、
上記の例では `AndroidApplication.currentActivity` 経由でUnityが所持するActivityを取得し、それを利用して下記のようにIntentを送信しています。

```csharp
AndroidApplication.currentActivity.Call("startActivity", shareIntent);
```

注意点として `AndroidApplication.currentActivity` は`AndroidJavaObject` ですがUnityが管理するオブジェクトのため、`System.IDisposable.Dispose` を呼んではいけません。
（これは以後紹介する `AndroidApplication.currentContext` なども同様です。）

### currentContext

[Unity - Scripting API: Android.AndroidApplication.currentContext](https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Android.AndroidApplication-currentContext.html)

`AndroidApplication.currentContext` はUnityのAndroidアプリケーション上の [Context](https://developer.android.com/reference/android/content/Context) クラスを取得するためのプロパティです。

Contextの `getSystemService` メソッドからOSが管理する各サービスにアクセスできるため、`AndroidApplication.currentActivity` と同様にネイティブプラグインの開発ではほぼ必須のプロパティです。

たとえば、Androidのシステムサービスである [Vibrator](https://developer.android.com/reference/android/os/Vibrator) を利用する場合は下記のように実装できます。

```csharp
public static class VibratorPlayer
{
    public static void Vibrate(long milliseconds)
    {
        // 簡単のために Vibrator クラスを扱いますが、
        // Vibratorは API Level 31 から非推奨のため、
        // 実用では VibratorManager クラスを使ってください
        using var vibrator = AndroidApplication
          // Contextがプロパティで取得できるので、ここからgetSystemServiceを呼び出す
          .currentContext.Call<AndroidJavaObject>(
            "getSystemService",
            // Context.VIBRATOR_SERVICEの定数値を直接指定しています
            "vibrator"
        );

        vibrator.Call("vibrate", milliseconds);
    }
}

// 呼び出し方
ViabratorPlayer.Vibrate(200);
```

AndroidManifest.xmlに下記のパーミッションを追加します。

```xml
<uses-permission android:name="android.permission.VIBRATE"/>
```

### InvokeOnUIThread

[Unity - Scripting API: Android.AndroidApplication.InvokeOnUIThread](https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Android.AndroidApplication.InvokeOnUIThread.html)

AndroidのUIスレッド上で処理を実行するためのメソッドが追加されました。

Androidでは下記に示すビューの追加など、特定の処理を行う場合はUIスレッド上で行う必要があります。

```csharp
// https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Android.AndroidApplication.InvokeOnUIThread.html
// のサンプルコードをそのまま抜粋しています。
public class JavaThreads: MonoBehaviour
{
    public void Start()
    {
          // Unityアプリケーション上にAndroidのButtonを追加する例
          // この処理はUIスレッド上じゃないと実行できない
          using var button = new AndroidJavaObject("android.widget.Button", AndroidApplication.currentActivity);
          button.Call("setText", "Hello World");
          using var layoutParams = new AndroidJavaObject("android.widget.LinearLayout$LayoutParams", 500, 100);
          button.Call("setLayoutParams", layoutParams);
          AndroidApplication.unityPlayer
              .Call<AndroidJavaObject>("getFrameLayout")
              .Call("addView", button);
    }
}
```

上記の処理はUnityのメインスレッド上で実行されることになるので、下記のような例外が発生します。

```
AndroidJavaException: android.view.ViewRootImpl$CalledFromWrongThreadException: Only the original thread that created a view hierarchy can touch its views. Expected: main Calling: Thread-2
```

これを回避するためには `AndroidApplication.InvokeOnUIThread` を利用します。
このメソッドに渡した `System.Action` はAndroidのUIスレッド上で実行されます。

このメソッドを用いて下記のように修正することで、ビューの追加をAndroidのUIスレッドで実行できるため、正しくビューが追加できます。

```csharp
AndroidApplication.InvokeOnUIThread(() =>
{
    // AndroidのUIスレッド上で実行される
    using var button = new AndroidJavaObject("android.widget.Button", AndroidApplication.currentActivity);
    button.Call("setText", "Hello World");
    using var layoutParams = new AndroidJavaObject("android.widget.LinearLayout$LayoutParams", 500, 100);
    button.Call("setLayoutParams", layoutParams);
    // unityPlayerがUnityの描画を行うビュークラスなので、
    // そのビューを介して独自のビューを上乗せしている
    AndroidApplication.unityPlayer
        .Call<AndroidJavaObject>("getFrameLayout")
        .Call("addView", button);
});
```

### InvokeOnUnityMainThread

[Unity - Scripting API: Android.AndroidApplication.InvokeOnUnityMainThread](https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Android.AndroidApplication.InvokeOnUnityMainThread.html)

さきほどの `InvokeOnUIThread` はAndroidのUIスレッド上で処理を実行するためのメソッドでしたが、`InvokeOnUnityMainThread` はUnityのメインスレッド上で処理を実行するためのメソッドです。

AndroidのシステムやUIに処理をリクエストしてその戻りをコールバックで受け取る場合、大抵の場合はUnityのメインスレッド以外からそのコールバックが呼び出されます。
UnityのAPIの多くはUnityのメインスレッド上でしか呼び出せないため、コールバックの処理はUnityのメインスレッド上で実行したいことが大半です。

そこでコールバックの実行をUnityのメインスレッドに戻してやるために `InvokeOnUnityMainThread` が利用できます。

```csharp
// https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Android.AndroidApplication.InvokeOnUnityMainThread.html
// のサンプルを抜粋しています
using System.Threading;
using UnityEngine;
using UnityEngine.Android;

public class JavaThreads : MonoBehaviour
{
    private MyButtonListener _listener = new();

    public void Start()
    {
        _listener.OnClick += OnClickButton;

        // 先ほどの InvokeOnUIThread のビュー追加に
        // ボタンクリック時の処理を追加する
        AndroidApplication.InvokeOnUIThread(() =>
        {
            // Button can only be added on UI thread
            using var button = new AndroidJavaObject("android.widget.Button", AndroidApplication.currentActivity);
            button.Call("setText", "Hello World");
            using var layoutParams = new AndroidJavaObject("android.widget.LinearLayout$LayoutParams", 500, 100);
            button.Call("setLayoutParams", layoutParams);
            // 追加されたビューをクリックされたときの処理を追加
            button.Call("setOnClickListener", _listener);

            AndroidApplication.unityPlayer
                .Call<AndroidJavaObject>("getFrameLayout")
                .Call("addView", button);
        });
    }

    private void OnClickButton()
    {
        // この呼び出しはUnityのメインスレッド上で実行される
        Debug.Log("Native Button Clicked")
    }

    private void OnDestroy()
    {
        if (_listener != null)
        {
            _listener.OnClick -= OnClickButton;
        }
    }

    // ビュークリック時のコールバック
    public class MyButtonListener : AndroidJavaProxy
    {
        // onClickを外に伝えるアクション
        public Action OnClick;

        public MyButtonListener()
            : base("android.view.View$OnClickListener") { }

        public void onClick(AndroidJavaObject view)
        {
            // このonClickはAndroidのUIスレッド上で実行される
            AndroidApplication.InvokeOnUnityMainThread(() =>
            {
                // InvokeOnUnityMainThread でUnityメインスレッドに戻すことができる
                OnClick?.Invoke();
            });

            view.Dispose();
        }
    }
}
```

`MyButtonListener` の `onClick` はAndroidの `View.OnClickListener` として直接呼び出されるため、AndroidのUIスレッド上でこのコールバックが呼び出されることになります。
`AndroidApplication.InvokeOnUnityMainThread` を利用することでコールバックの実行（`MyButtonListener.OnClick`）をUnityのメインスレッドに処理を戻しています。

```csharp
// ビュークリック時のコールバック
public class MyButtonListener : AndroidJavaProxy
{
    public MyButtonListener()
        : base("android.view.View$OnClickListener")
    {
    }

    // onClickを外に伝えるアクション
    public Action OnClick;

    public void onClick(AndroidJavaObject view)
    {
        // このonClickはAndroidのUIスレッド上で実行される
        AndroidApplication.InvokeOnUnityMainThread(() =>
        {
            // InvokeOnUnityMainThread でUnityメインスレッドに戻すことができる
            OnClick?.Invoke();
        });

        view.Dispose();
    }
}
```

### onConfigurationChanged / currentConfiguration

- [Unity - Scripting API: Android.AndroidApplication.onConfigurationChanged](https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Android.AndroidApplication-onConfigurationChanged.html)
- [Unity - Scripting API: Android.AndroidApplication.currentConfiguration](https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Android.AndroidApplication-currentConfiguration.html)

`AndroidApplication.onConfigurationChanged` は、Androidの構成が変化されたときに呼び出されるコールバックで、おもに下記が発生した際に呼び出されます。

- 画面の回転によりオリエンテーションが変化したとき
- キーボードの表示・非表示が切り替わったとき
- ダークテーマの設定が切り替わったとき
- スクリーンサイズやレイアウトが変更されたとき

```csharp
// https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Android.AndroidApplication-onConfigurationChanged.html
// を抜粋しています

public class MyApplication : MonoBehaviour
{
    AndroidConfiguration m_PrevConfig;

    public void Start()
    {
        m_PrevConfig = new AndroidConfiguration(AndroidApplication.currentConfiguration);
        AndroidApplication.onConfigurationChanged += OnConfigurationChanged;
    }

    public void OnDisable()
    {
        AndroidApplication.onConfigurationChanged -= OnConfigurationChanged;
    }

    private void OnConfigurationChanged(AndroidConfiguration newConfig)
    {
        // 以前の構成と比較して、変更があったものだけ個別にコールバックを呼び出す

        if (m_PrevConfig.orientation != newConfig.orientation ||
            m_PrevConfig.screenLayoutSize != newConfig.screenLayoutSize)
        {
            ApplyUIChanges(newConfig.orientation, newConfig.screenLayoutSize);
        }

        if (m_PrevConfig.uiModeNight != newConfig.uiModeNight)
        {
            ApplyUINightMode(newConfig.uiModeNight);
        }

        if (m_PrevConfig.screenHeightDp != newConfig.screenHeightDp ||
            m_PrevConfig.screenWidthDp != newConfig.screenWidthDp)
        {
            ApplyScreenSizeChanges();
        }

        m_PrevConfig.CopyFrom(newConfig);
    }

    private void ApplyUIChanges(AndroidOrientation orientation, AndroidScreenLayoutSize layoutSize)
    {
        // UIのオリエンテーションかスクリーンレイアウトが変更されたときに呼び出される
    }

    private void ApplyUINightMode(AndroidUIModeNight nightMode)
    {
        // ナイトモード（ダークテーマ）の設定が切り替わったときに呼び出される
    }

    private void ApplyScreenSizeChanges()
    {
        // スクリーンサイズが変更されたときに呼び出されます
    }
}
```

また、現在の構成は `AndroidApplication.currentConfiguration` から取得できます。


```csharp
// https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Android.AndroidApplication-currentConfiguration.html
// から抜粋
using UnityEngine;
using UnityEngine.Android;

public class ShowConfiguration : MonoBehaviour
{
    public void Start()
    {
        var contents = new System.Text.StringBuilder();
        var c = AndroidApplication.currentConfiguration;
        contents.AppendLine($"* ColorMode, Hdr: {c.colorModeHdr}");
        contents.AppendLine($"* ColorMode, Gamut: {c.colorModeWideColorGamut}");
        contents.AppendLine($"* DensityDpi: {c.densityDpi}");
        contents.AppendLine($"* FontScale: {c.fontScale}");
        contents.AppendLine($"* FontWeightAdj: {c.fontWeightAdjustment}");
        contents.AppendLine($"* Keyboard: {c.keyboard}");
        contents.AppendLine($"* Keyboard Hidden, Hard: {c.hardKeyboardHidden}");
        contents.AppendLine($"* Keyboard Hidden, Normal: {c.keyboardHidden}");
        contents.AppendLine($"* Mcc: {c.mobileCountryCode}");
        contents.AppendLine($"* Mnc: {c.mobileNetworkCode}");
        contents.AppendLine($"* Navigation: {c.navigation}");
        contents.AppendLine($"* NavigationHidden: {c.navigationHidden}");
        contents.AppendLine($"* Orientation: {c.orientation}");
        contents.AppendLine($"* ScreenHeightDp: {c.screenHeightDp}");
        contents.AppendLine($"* ScreenWidthDp: {c.screenWidthDp}");
        contents.AppendLine($"* SmallestScreenWidthDp: {c.smallestScreenWidthDp}");
        contents.AppendLine($"* ScreenLayout, Direction: {c.screenLayoutDirection}");
        contents.AppendLine($"* ScreenLayout, Size: {c.screenLayoutSize}");
        contents.AppendLine($"* ScreenLayout, Long: {c.screenLayoutLong}");
        contents.AppendLine($"* ScreenLayout, Round: {c.screenLayoutRound}");
        contents.AppendLine($"* TouchScreen: {c.touchScreen}");
        contents.AppendLine($"* UiMode, Night: {c.uiModeNight}");
        contents.AppendLine($"* UiMode, Type: {c.uiModeType}");

        contents.AppendLine($"* Locales ({c.locales.Length}):");
        for (int i = 0; i < c.locales.Length; i++)
        {
            var l = c.locales[i];
            contents.AppendLine($"* Locale[{i}] {l.country}-{l.language}");
        };

        Debug.Log($"Current Config:\n{contents}");
    }
}
```

このプロパティは `AndroidConfiguration` という型のインスタンスを返しますが、内部的には `android.content.res.Configuration` のラッパー型となります。

[Configuration  |  Android Developers](https://developer.android.com/reference/android/content/res/Configuration)

## AndroidLocale

[UnityEngine.Android.AndroidLocale](https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Android.AndroidLocale.html)

`AndroidLocale` は、Android端末の言語設定を参照するためのクラスです。

端末に設定されている言語情報の一覧は、先ほどの `AndroidApplication.currentConfiguration` の `locales` プロパティから参照できます。
内部的には、Androidの `Configuration` の `getLocales()` メソッドの戻り値が取得できます。

## AndroidGame

`AndroidGame` は、AndroidゲームAPIへアクセスするためのクラスです。

このAPIを用いて、ユーザー設定やゲーム固有の構成に基づいてパフォーマンスやバッテリー駆動時間などの特性を優先することでゲームプレイを最適化できます。

[ゲームモード  |  Android game development  |  Android Developers](https://developer.android.com/games/optimize/adpf/gamemode/about-API-and-interventions)

現在は、[Game Mode API](https://developer.android.com/games/optimize/adpf/gamemode/gamemode-api) のユーザーの設置値を取得するための[AndroidGame.GameMode](https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Android.AndroidGame.GameMode.html)プロパティと、
[Game State API](https://developer.android.com/games/optimize/adpf/gamemode/gamestate-api) でゲームの状態をOS側に設定するための[AndroidGame.SetGameState](https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Android.AndroidGame.SetGameState.html)をサポートしています。

## ApplicationExitInfoProvider

`ApplicationExitInfoProvider` は、Androidのアプリ終了の理由に関する情報を取得するためのクラスです。

これを用いて、ANRやメモリ不足、アプリクラッシュなどの状況も含めたAndroidのアプリ終了の情報を詳細に取得できます。

[GetHistoricalProcessExitInfo](https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Android.ApplicationExitInfoProvider.GetHistoricalProcessExitInfo.html) メソッドを利用することで、直近のアプリの終了情報の一覧を取得できます。

```csharp
var exitInfos = ApplicationExitInfoProvider.GetHistoricalProcessExitInfo(
    // パッケージ名を渡す必要がある
    AndroidApplication.currentContext.Call<string>("getPackageName")
);
foreach (var exitInfo in exitInfos)
{
    var builder = new StringBuilder();
    builder.AppendLine($"Description: {exitInfo.description}");
    builder.AppendLine($"Importance: {exitInfo.importance}");
    builder.AppendLine($"Status: {exitInfo.status}");
    builder.AppendLine($"Reason: {exitInfo.reason}");
    builder.AppendLine($"Pss: {exitInfo.pss}");
    builder.AppendLine($"Rss: {exitInfo.rss}");
    builder.AppendLine($"Trace: {exitInfo.traceAsString}");
    
    Debug.Log(builder.ToString());
}
```

下記のように、クラッシュするまでメモリを確保するコードを実行すると

```csharp
private readonly List<byte[]> _memory = new();

private System.Collections.IEnumerator ConsumeMemory()
{
    while (true)
    {
        // 10MBづつメモリを確保
        byte[] block = new byte[1024 * 1024 * 10];
        _memory.Add(block);

        // 適当に初期化
        for (int i = 0; i < block.Length; i++)
        {
            block[i] = 0xFF;
        }

        Debug.Log($"Allocated {_memory.Count * 10} MB");

        // 少し待機して次のメモリ確保
        yield return null;
    }
}
```

下記のようにメモリ不足の旨のログが出力されることが確認できました。

```
Description: 
Importance: Foreground
Status: 0
Reason: LowMemory
Pss: 0
Pss: 5351504
Trace: 
```

また、[ApplicationExitInfoProvider.SetProcessStateSummary](https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Android.ApplicationExitInfoProvider.SetProcessStateSummary.html) を用いることで、Unityアプリ側から`ApplicationExitInfo` の追加情報を設定できます。

## まとめ

Unity 6で追加されたAPIのうち、Androidに関するものを簡単に紹介しました。

個人的な印象として、Androidネイティブプラグインを書く際にほぼ必須であった基本的なAPIが提供されたり、GameModeをはじめとするAndroidにおけるゲーム周辺の対応が手厚くなっている印象を感じました。

Unity 2022LTSがまだ現役なので、たとえば `AndroidApplication.currentActivity` を使いたくてもライブラリ上は2つコードを混在させないといけない、といったもどかしさはありますが、
標準でちゃんとこの辺の下回りが対応されたのは個人的には好印象でした。

またまたニッチな記事となってしまいましたが、なにかのお役に立てると幸いです。
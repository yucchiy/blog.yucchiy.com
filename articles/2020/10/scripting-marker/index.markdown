---
date: "2020-10-05T09:00:00+09:00"
draft: false
title: "Timeline Signalsをスクリプトから追加する"
tags: ["Unity", "Timeline", "Signal", "エディタ拡張"]

---

Unity 2019.1から、Timelineで任意のメソッドを呼び出すSignalsという仕組みが導入されました。
開発中に、これスクリプトで追加したくなったので、その方法について記載します。

## Signalsとは？

SignalsはTimelineから指定したフレームにTimeline外の特定の処理を行うための機能です。Animationについて知見のある方は、Timelineにおける[AnimationEvent](https://docs.unity3d.com/Manual/script-AnimationWindowEvent.html)という理解で概ね問題ないと思います。

下図の赤枠内にマークが設定されてますが、これがSignalです。タイムライン中にSignalを仕込むことができます。そのSignalから任意のメソッドを呼び出したり、Receiverを用意することで、Signalの発火タイミングを受け取ることができます。

![Timeline Marker](./marker-in-timeline.png)

Timelineを使っているとAnimationEventに相当する機能を実装したくなることがありますが、これを実現するために独自のTrack実装することになります。ただ任意のメソッドを呼び出すために独自Trackを実装するのは地味に大変なので、個人的にはこのような用途では有用だと感じています。

## Signalsをスクリプトから追加する

今回は、下記のSignalクラスを**スクリプトからTimelineに追加する**ことをゴールとします。

```cs
using System;
using UnityEngine;
using UnityEngine.Playables;
using UnityEngine.Timeline;

[Serializable]
public class MyNotification : Marker, INotification
{
    public PropertyName id { get; }
}
```

作成するエディタ拡張は下記動画の通りです。

![Signalをスクリプトから追加する様子](./signal-editor.gif)

### MarkerTrack

Signalを追加するには、まずタイムラインにMarkerTrackを作成する必要があります。MarkerTrackはエディター中のTimelineビューの下図赤枠のことを指します。

![Timeline AssetのMarker Track](./marker-track.png)

Marker TrackはTimeline Asset作成直後には作成されていません。この状態でスクリプトからSignalを追加しようとすると、null reference exceptionを吐くため、事前に作成しておく必要があります。

Trackは、上図の上中央のピンのアイコンをクリックしてはじめてMarker Trackを表示した際に作成されます。また、スクリプトでも下記のように追加できます。

```cs
// assetはTimelineAsset
var timelineAsset = asset as TimelineAsset;
Assert.IsNotNull(timelineAsset);

// Marker Trackを追加する
timelineAsset.CreateMarkerTrack();
```

作成済みの状態で`CreateMarkerTrack`呼び出すと2重にTrackを作成しそうですが、Marker Trackは、Timeilne Asset中で1つ保持するような仕組みになっているため問題ありません。
具体的には、`CreateMarkerTrack`は下記のような実装になっています。

```cs
public void CreateMarkerTrack()
{
    // メンバー変数で1つMarkerTrackを保持している
    if (m_MarkerTrack == null)
    {
        m_MarkerTrack = CreateInstance<MarkerTrack>();
        TimelineCreateUtilities.SaveAssetIntoObject(m_MarkerTrack, this);
        m_MarkerTrack.parent = this;
        // This name will show up in the bindings list if it contains signals
        m_MarkerTrack.name = "Markers";
        Invalidate();
    }
}
```

### Signalを追加する

あとは、Signalをスクリプトで追加します。具体的には、上記で作成したMarker Trackの`CreateMarker<T>`を呼び出します。
Timeline Asset内のMarker Trackは`markerTrack`プロパティでアクセスできます。（参考: [Class TimelineAsset | Package Manager UI website](https://docs.unity3d.com/Packages/com.unity.timeline@1.0/api/UnityEngine.Timeline.TimelineAsset.html#UnityEngine_Timeline_TimelineAsset_markerTrack)）

```cs
// 戻り値は追加したマーカー
timelineAsset.markerTrack.CreateMarker<MyNotification>(time);
```

引数にはSignalをタイムライン中のどこに追加するかを秒数を指定します。
前述した通り、Marker Trackを作成してない場合は`markerTrack`が**nullになっているので注意が必要です**。

## まとめ

Signalをスクリプトから追加する方法を紹介しました。最後に、今回実装したコードの全容を示します。

```cs
using System;
using UnityEditor;
using UnityEngine;
using UnityEngine.Assertions;
using UnityEngine.Playables;
using UnityEngine.Timeline;

namespace Editor
{
    public class MyNotificationEditor : EditorWindow
    {
        [MenuItem("Window/MyNotification Editor")]
        public static void Open()
        {
            var window =
                (MyNotificationEditor) EditorWindow.GetWindow(
                    typeof(MyNotificationEditor));
            window.Show();
        }

        private void OnGUI()
        {
            _asset =
                (PlayableAsset) EditorGUILayout.ObjectField("target",
                    _asset,
                    typeof(PlayableAsset), true);
            if (_asset != null)
            {
                _time = EditorGUILayout.DoubleField("time", _time);
                if (GUILayout.Button("Add a marker"))
                {
                    AddMyNotificationMarker(_asset, _time);
                }
            }
        }

        private void AddMyNotificationMarker(PlayableAsset asset, double time)
        {
            var timelineAsset = asset as TimelineAsset;
            Assert.IsNotNull(timelineAsset);

            if (timelineAsset.markerTrack == null)
                timelineAsset.CreateMarkerTrack();

            // 戻り値は追加したマーカー
            timelineAsset.markerTrack.CreateMarker<MyNotification>(time);
        }

        private PlayableAsset _asset = null;
        private double _time = 0.0;
    }
}
```

### 参考

- [Class MarkerTrack | Package Manager UI website](https://docs.unity3d.com/Packages/com.unity.timeline@1.0/api/UnityEngine.Timeline.MarkerTrack.html)
    - MarkerTrackの公式ドキュメント
- [【Unity】Timelineからメソッドを呼ぶ新機能 「Marker」と「Signal、Signal Receiver」 - テラシュールブログ](http://tsubakit1.hateblo.jp/entry/2018/12/10/233146)
    - テラシュールブログさんによるSignalの解説ブログ
- [[Unity] 分かった気になる! Timeline Signals / Timeline Signals Tutorial](https://speakerdeck.com/lycoris102/timeline-signals-tutorial)
    - 青木ととさんによるSignalの解説スライド

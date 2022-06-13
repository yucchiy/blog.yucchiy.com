---
date: "2019-11-30T09:00:00+09:00"
draft: false
title: "UnityのタイムラインでPlayableBehaviour内でクリップタイミングを取得する方法"
tags: ["Tips", "Unity", "Timeline", "C#"]

---

Unityのタイムラインのカスタムトラックを実装する際に、`PlayableBehaviour`内(特にTrackMixer内)でクリップの開始時間や終了時間を取得したくなったが、
簡単に取得できなかったので、メモがてらにブログに残すことにします。

## `PlayableBehaviour`内でクリップタイミングを取得する

こちらのフォーラムの情報を参考にしました。

https://forum.unity.com/threads/how-to-access-the-clip-timing-start-end-time-in-playablebehaviour-functions.494344/

まず、お目当てのクリップのタイミングは、`TimelineClip`のプロパティより取得できます。

https://docs.unity3d.com/Packages/com.unity.timeline@1.0/api/UnityEngine.Timeline.TimelineClip.html

具体的には、あるクリップの開始フレームが取得したければ、[`start`プロパティ](https://docs.unity3d.com/Packages/com.unity.timeline@1.0/api/UnityEngine.Timeline.TimelineClip.html#UnityEngine_Timeline_TimelineClip_start)から取得できます。

今回実現したいことへの課題は、TrackMixerから`TimelineClip`を参照できない点です。

ですが、TrackMixerを作成する際に通る`TrackAsset.CreateTrackMixer`内で`GetClips`メソッドを利用することで、
各クリップの`TimelineClip`インスタンスを取得できます。

```cs
// https://forum.unity.com/threads/how-to-access-the-clip-timing-start-end-time-in-playablebehaviour-functions.494344/
public class LoopTrack : TrackAsset
{
    public override Playable CreateTrackMixer(PlayableGraph graph, GameObject go, int inputCount)
    {
        var clips = GetClips();
        foreach(var clip in clips)
        {
            // clipがお目当てのインスタンス
        }
 
        return ScriptPlayable<LoopMixer>.Create(graph, inputCount);
    }
}
```

TrackMixer内(この例では`LoopMixer`)で触ることができるのは各クリップの`PlayableBehaviour`なので、
下記の`LoopData`に示すように、`Clip`を定義します。

```cs
// https://forum.unity.com/threads/how-to-access-the-clip-timing-start-end-time-in-playablebehaviour-functions.494344/
public class LoopData : PlayableBehaviour
{
    // PlayableBehaviour内にクリップ情報を保持する変数を定義しておく
    [NonSerialized]public TimelineClip Clip;
}
```

では、`CreateTrackMixer`メソッド内で取得した`TimelineClip`をどうやって渡すかというと、
下記に示すように、クリップアセットである`PlayableAsset`(この例では`LoopClip`)に一度`TimelineClip`を渡してやり、
その後、クリップアセットから`PlayableBehaviour`を生成する`PlayableAsset.CreatePlayable`メソッド内で、
保持していた`TimelineClip`を渡すことで実現できます。

```cs
// https://forum.unity.com/threads/how-to-access-the-clip-timing-start-end-time-in-playablebehaviour-functions.494344/
[Serializable]
public class LoopClip : PlayableAsset, ITimelineClipAsset
{
    [NonSerialized]public TimelineClip clipPassthrough = null;
    public LoopData template = new LoopData ();
 
    public ClipCaps clipCaps
    {
        get { return ClipCaps.None; }
    }
 
    public override Playable CreatePlayable(PlayableGraph graph, GameObject owner)
    {
        // 保持しているTimelineClipをPlayableBehaviourに渡す
        template.Clip = clipPassthrough;
        var playable = ScriptPlayable<LoopData>.Create (graph, template);
   
        return playable;
    }
}
```

```cs
public class LoopTrack : TrackAsset
{
    public override Playable CreateTrackMixer(PlayableGraph graph, GameObject go, int inputCount)
    {
        var clips = GetClips();
        foreach(var clip in clips)
        {
            // CreateTrackMixer内で、各クリップの自身のTimelineClipをPlayableAssetに渡す
            var loopClip = clip.asset as LoopClip;
            loopClip.clipPassthrough = clip;
        }
 
        return ScriptPlayable<LoopMixer>.Create(graph, inputCount);
    }
}
```

こうすることで各々のクリップの`TimelineClip`に、トラックの`PlayableBehaviour`からアクセスすることができます。

```cs
// https://forum.unity.com/threads/how-to-access-the-clip-timing-start-end-time-in-playablebehaviour-functions.494344/

public class LoopMixer
{
    public override void ProcessFrame(Playable playable, FrameData info, object playerData)
    {
        var selectedPlayable = (ScriptPlayable<LoopData>)playable.GetInput(0);
        LoopData selectedPlayer = selectedPlayable.GetBehaviour();
        // indexが0のクリップのクリップタイミングを取得している
        // 先程定義したClipプロパティにTimelineClipが渡っている
        Debug.Log("Clip Start: " + selectedPlayer.Clip.start);
    }
}
```

## まとめ

- `PlayableBehaviour`内では`TimelineClip`インスタンスを取得できないため、クリップの開始や終了タイミングを取得することができない
- `TrackAsset`内で`GetClips`メソッドにより`TimelineClip`が取得できるので、取得したクリップを`PlayableBehaviour`にわたすことで実現ができる


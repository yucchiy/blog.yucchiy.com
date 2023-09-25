---
type: "unity-weekly"
title: "Unity Weekly 140"
description: "2023/09/25週のUnity Weeklyです。Unity Runtime Fee、、アウトゲーム設計、SemaphoreSlimなどについて取り上げています。"
tags: ["Unity Weekly","Unity"]
date: "2023-09-25T00:00:01"

---

## Unity Officials

### An open letter to our community | Unity Blog

- [An open letter to our community | Unity Blog](https://blog.unity.com/news/open-letter-on-runtime-fee)
- [コミュニティへのご報告 | Unity Blog](https://blog.unity.com/ja/news/open-letter-on-runtime-fee)

9/12にアナウンスされた新料金体系（Unity Runtime Fee）について、変更点がアナウンスされました。要点は下記のとおりです。

- Personal版への料金体系の導入は撤廃となり、継続して無料で利用が可能。このライセンスの適用可能条件である過去12ヶ月収益10万ドルが20万ドルへ引き上げられた。さらにスプラッシュスクリーン表示要件が取り下げられる。
- Runtime Feeの適用が、2024年以降にリリースされる次の LTSバージョンから適用される。新しいLTSバージョンへアップグレードしない限り、新料金体系の適用はされない。
- Runtime Feeの支払いを、2.5%の収益分配か、各月の新規エンゲージメント数に基づいて計算される金額のどちらかを選ぶことができる。またそれらの支払いに利用されるデータは自己申告制となる。

今回の変更に合わせて突如削除されていた[GitHub上の利用規約レポジトリ](https://github.com/Unity-Technologies/TermsOfService)は復活しています。

また、本記事とは別にまとめられた[Q&A](https://unity.com/pricing-updates)にて、将来的なPro/Enterpriseライセンスの値上げについても言及されています。

参考

- [Unity、大きな批判受けた新料金システムの規定を変更。無料のPersonalプランへの導入を取りやめ、支払いは自己申告制に - AUTOMATON](https://automaton-media.com/articles/newsjp/20230923-265686/)
- [Unityが新料金体系の一部撤回を発表。ランタイムフィーに収益2.5%の上限がつき、自己申告制へ、適用はUnity2023LTS以降から。Pro/Enterpriseは値上げへ – IndieGamesJp.dev](https://indiegamesjp.dev/?p=8413)

### グラフィックスとパフォーマンスのアップデートを盛り込んだ Unity 2023.3 が 2024 年 4 月に公開されます | Unity Blog

[グラフィックスとパフォーマンスのアップデートを盛り込んだ Unity 2023.3 が 2024 年 4 月に公開されます | Unity Blog](https://blog.unity.com/ja/engine-platform/2023-3-coming-april-2024-with-updates)

[Unity 2023.3 coming April 2024 with updates for graphics and performance](https://blog.unity.com/engine-platform/2023-3-coming-april-2024-with-updates) の日本語訳記事です。

Unity 2023のLTSに関するアナウンスです。

Unity 2023は現状のUnity LTSのリリースサイクルのように .2が出たあとにLTSがリリースされるのではなく、2023.3がテックストリームにリリースされ、そのあと2023 LTSがリリースされる予定とのことです。 2023.3は 2024/04 頃に、LTSは 2024年の終わり頃にリリースされる予定です。

この記事では、そのようなリリースサイクルに変更された経緯や、Unity 2023.3 のアップデート内容の概要について紹介しています。

### Unity 2023 におけるクロスプラットフォームの HDR ディスプレイサポート | Unity Blog

[Unity 2023 におけるクロスプラットフォームの HDR ディスプレイサポート | Unity Blog](https://blog.unity.com/ja/engine-platform/cross-platform-hdr-display-support)

[Cross-platform HDR display support in Unity 2023](https://blog.unity.com/engine-platform/cross-platform-hdr-display-support) の日本語訳記事です。

Unity 2023の、各プラットフォームのHDR出力の対応状況や設定方法について解説しています。

## Articles

### ミラティブでのアウトゲーム設計の紹介 - Mirrativ Tech Blog

[ミラティブでのアウトゲーム設計の紹介 - Mirrativ Tech Blog](https://tech.mirrativ.stream/entry/2023/09/22/112042)

ミラティブでのアウトゲームの設計思想や開発に利用しているライブラリの紹介、アウトゲームの開発をサンプル実装を交えつつ解説しています。

### lockObjectとSemaphoreSlimの使い分け - MRが楽しい

[lockObjectとSemaphoreSlimの使い分け - MRが楽しい](https://bluebirdofoz.hatenablog.com/entry/2023/09/19/215027)

lockとSemaphoreSlimの紹介と、非同期処理の中で同時にアクセスできるスレッド数を制限するような排他処理をSemaphoreSlimを用いて実装する方法を紹介しています。
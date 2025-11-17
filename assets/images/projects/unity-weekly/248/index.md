---
type: unity-weekly
title: Unity Weekly 248
description: >-
  2025/11/17週のUnity Weeklyです。Unity Pro・Enterpriseの価格・パッケージ変更、Graphics device filtering、Unity Ads Legacy package Issue impacting、Unity IAP Updatesなどを紹介しています。
pubDatetime: 2025-11-17T00:00:00+09:00
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Unity Pro および Unity Enterprise の価格およびパッケージの変更について

[Unity Pro および Unity Enterprise の価格およびパッケージの変更について](https://unity3d.jp/news/2025-nov-pricing-update/)

Unity Pro・Enterpriseの価格が約5%引き上げられることがアナウンスされています。

また、パッケージの変更点として、2026年以降のUnity DevOps無料プランのアクセス枠の拡大や、Unity 6.3正式リリース以降にHavok Physics for Unityが含まれなくなる点についても合わせて紹介しています

### Graphics device filtering for Vulkan and DX12

[Graphics device filtering for Vulkan and DX12 - Technical Articles - Unity Discussions](https://discussions.unity.com/t/graphics-device-filtering-for-vulkan-and-dx12/1693219)

UnityにあるデバイスごとにグラフィックスAPIを自動で選択する機能の重要性や、Unityに6.1から追加されたVulkan向けの新しいデバイスフィルタリングとUnty6.3（とUnity6.2にバックポート予定）に対して、DirectX12へのこの機能が拡張されることが紹介されています。

また、このデバイスフィルタリングのルールや独自のデバイスフィルタリングを設定する方法についても合わせて説明しています。

### Issue impacting Legacy package for Unity Ads

[Issue impacting Legacy package for Unity Ads - Unity Services - Unity Discussions](https://discussions.unity.com/t/issue-impacting-legacy-package-for-unity-ads/1695089)

Unity Ads とメディエーションサービスの連携方法に最近加えられた変更によって、Unity Ads の Advertisement Legacy パッケージのみをご利用のユーザーに予期せぬ影響が発生している件をアナウンスしています。

影響が出ている組織は、[サポート経由](https://support-ads.unity.com/s/ContactUs)でOrganization IDを伝えることでこの不具合の短期的な対応が行える旨や、また影響が出ているゲームを特定して修正する対応に着手中とのことです。

一方で、レガシーパッケージは定期的な更新を行わなくなっているので長期的にはLevel Playへのアップグレードを検討してほしいとのことで、この[アップグレード方法を案内しています](https://developers.is.com/ironsource-mobile/unity/unity-plugin/)。

### Unity IAP package - November 2025 Update

[Unity IAP package - November 2025 Update - Unity Services - Unity Discussions](https://discussions.unity.com/t/unity-iap-package-november-2025-update/1694712)

Unity IAPの11月のアップデートについてアナウンスするディスカッションです。

11月は、Google Play Billing Library v8 をサポートする 4.14.0と、iOS 14以前のバージョンに対するStoreKit v1の下位互換性を維持する対応や、Appleの`SubscriptionInfo`が修正された5.1.0がリリースされる予定とのことです。

また、[D2C決済オプションへの早期アクセスが開始の案内](https://discussions.unity.com/t/announcing-unity-commerce-management-platform-for-iap-early-access/1691594)と、2026年第1四半期には、新しい直接消費者向けオプションへのアクセスを拡大し、より詳細なストア固有の機能のサポートとして、アップルの買い戻しオファーやGoogleのサブスクリプションプラン、Google の複数数量購入などを実装することを予定している旨にも言及しています。

### Deprecation Notice: Unity Support for Facebook Instant Games

[Deprecation Notice: Unity Support for Facebook Instant Games - Unity Engine - Unity Discussions](https://discussions.unity.com/t/deprecation-notice-unity-support-for-facebook-instant-games/1694214)

UnityのFacebook Instant Game対応が、6.3から非推奨に、6.4からは削除されることが発表されています。

またこの記事では、この機能を今後も利用する開発者向けに、Facebookが2026/09/30までに[ゼロパーミッションモデル採用を要求していること](https://developers.facebook.com/blog/post/2025/07/31/web-and-instant-games-changes/)に言及しています。

### Free Webinar – "Advanced Addressable Tools and Management"

[Free Webinar – "Advanced Addressable Tools and Management" - Unity Engine - Unity Discussions](https://discussions.unity.com/t/free-webinar-advanced-addressable-tools-and-management/1695074)

大規模なAddressablesを扱っている、または複雑な設定をよりスマートに管理する方法を探している中級から上級の開発者を対象とした無料のウェビナーが11/20に開催される予定です。

登録は[こちら](https://unity3d.zoom.us/webinar/register/6717625195546/WN_Ka3x7NnQRUOJq9j_06CEQQ)から行えます。

### New Unity Build Automation Documentation Page

[New Unity Build Automation Documentation Page - Unity Services - Unity Discussions](https://discussions.unity.com/t/new-unity-build-automation-documentation-page/1695106)

Unity Build Automationのドキュメントが、[新しい場所](https://docs.unity.com/en-us/build-automation)に移動したことをアナウンスしています。

## Articles

### GTFSを用いた交通情報表示アプリケーションを開発してみた【Unity+ARCore】

- [【前編】GTFSを用いた交通情報表示アプリケーションを開発してみた【Unity+ARCore】 #Unity - Qiita](https://qiita.com/Kazuki_Miya/items/97dffb454f7d548c1492)
- [【中編】GTFSを用いた交通情報表示アプリケーションを開発してみた【Unity+ARCore】 #Unity - Qiita](https://qiita.com/Kazuki_Miya/items/78a590e856b0a91ac890)
- [【後編】GTFSを用いた交通情報表示アプリケーションを開発してみた【Unity+ARCore】 #Unity - Qiita](https://qiita.com/Kazuki_Miya/items/ba3f77fe64b69d1de019)

GTFS（General Transit Feed Specification）で取得できる交通機関情報を、ARCore Geospatialを用いて表示するARアプリケーションについて、GTFSを用いた最寄駅や時刻表などの取得から、表示方法について解説しています。

### Dither11種を比較してみた

[[Unity] Dither11種を比較してみた #Shader - Qiita](https://qiita.com/mu5dvlp/items/b791b88bd111aeac8471)

Ditherの必要性から、これを実現する手法を11種類実装して、その見た目を比較・評価しています。

また、自作のDitherを実装する際のポイントについても言及しています。
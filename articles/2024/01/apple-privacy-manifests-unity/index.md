---
title: UnityアプリでのApple Privacy Manifests対応まわりについて
description: Unityアプリ向けのApple Privacy Manifests対応についてのまとめます
pubDatetime: 2024-01-23T15:00:00.000Z
tags:
  - Unity
  - iOS
  - Apple
  - Privacy Manifests
---

仕事でもApple Privacy Manifestsの対応周りがホットなので、個人的なUnityアプリ向けのApple Privacy Manifests対応についてのメモ代わりに記事として放流します。

もし間違い等あれば、[@yuccchiy_](https://twitter.com/yucchiy_)までご連絡いただけるとたすかります。

UnityにおけるPrivacy Manifestsのための対応方針は下記ドキュメントから確認できます。

[Unity - Manual: Apple’s privacy manifest policy requirements](https://docs.unity3d.com/2021.3/Documentation/Manual/apple-privacy-manifest-policy.html)

[今週のUnity Weekly](https://blog.yucchiy.com/project/unity-weekly/156/)でも触れていますが、UnityのPrivacy Manifestsの対応は現在も進行中で、下記フォーラムにて詳細を確認できます。

[Official - Apple privacy manifest updates for Unity Engine - Unity Forum](https://forum.unity.com/threads/apple-privacy-manifest-updates-for-unity-engine.1529026/)

基本的にはこのフォーラムの情報を参考にしつつ対応するのが良さそうです。

## やることのまとめ

まずはじめに、Privacy Manifestsで、アプリ側での対応をまとめます。

- Xcode15で `PrivacyInfo.xcprivacy` を用意し、`Assets/Plugins/iOS` などに配置して、アプリに `PrivacyInfo.xcprivacy` を含めるようにする
    - 参考: [Unity - Manual: Apple’s privacy manifest policy requirements](https://docs.unity3d.com/2021.3/Documentation/Manual/apple-privacy-manifest-policy.html)
    - ただし、Unityエンジン側のアップデートで、この対応に対するソリューションが提供されるかも？（[Official - Apple privacy manifest updates for Unity Engine - Unity Forum](https://forum.unity.com/threads/apple-privacy-manifest-updates-for-unity-engine.1529026/)）
- 自身のアプリ内のコードで、[Required Reason API](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_use_of_required_reason_api)を利用しているものは、`PrivacyInfo.xcprivacy` に記述する
    - 参考: [Unity - Manual: Apple’s privacy manifest policy requirements](https://docs.unity3d.com/2021.3/Documentation/Manual/apple-privacy-manifest-policy.html)
    - ただし、Unityエンジン側のアップデートで、この対応に対するソリューションが提供されるかも？（[Official - Apple privacy manifest updates for Unity Engine - Unity Forum](https://forum.unity.com/threads/apple-privacy-manifest-updates-for-unity-engine.1529026/)）
- トラッキングを行っている場合は、`PrivacyInfo.xcprivacy` にトラッキングに用いるドメインを記述する
- [Privacy-Impacting SDKs](https://developer.apple.com/support/third-party-SDK-requirements/)に指定されているSDKの、Privacy Manifests対応が行われたバージョンへのアップデートを行う
    - UnityFrameworkもSDKに指定されているため、*Unity 2021 LTS以降の最新版にアップデートを行う必要がある*（かも）

個人的に対応が重たいと感じるのは[Privacy-Impacting SDKs](https://developer.apple.com/support/third-party-SDK-requirements/)で、基本的には**UnityやサードパーティSDKの対応を待ってアプデが必要な点**です。

## Apple Privacy Manifestsの概要

2024/04までに、下記項目の対応が必要になります。

- Privacy Manifest 
- Required Reason API
- Tracking Domain
- Code sign

|        項目         |                           アプリ開発者                            |                    SDK開発者                     |
| ------------------- | ----------------------------------------------------------------- | ------------------------------------------------ |
| Privacy Manifest    | Appleが定めるプライバシーデータをアプリ上で扱う場合は記述が必要 | Privacy-Impacting SDKsに該当する場合は対応が必要 |
| Required Reason API | Required Reason APIを使う場合は対応が記述が必要                   | Required Reason APIを使う場合は対応が記述が必要  |
| Tracking Domain     | トラッキングを行う場合は対応が必要                                | トラッキングを行う場合は対応が必要               |
| コード署名          | 対応不要                                                          | Privacy-Impacting SDKsに該当する場合は対応が必要 |

- [Privacy-Impacting SDKs](https://developer.apple.com/support/third-party-SDK-requirements/)
- [Required Reason API](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_use_of_required_reason_api)
- [Appleが定めるプライバシーデーター](https://developer.apple.com/app-store/app-privacy-details/)

アプリ開発者側は、主に「Privacy Manifest」と「Required Reason API」の対応を行います。

また、「Privacy-Impacting SDK」に指定されたSDKを利用している場合は、そのSDKがこれらの対応を行っているかの確認を行い、対応が完了したバージョンのSDKにアップデートが必要です。

## Privacy Manifest

アプリやSDKがAppleの定めるデータを扱う場合に、データを扱う旨をマニフェストに定義が必要になりました。対象になるデータは下記リンクに記載されています。

[Describing data use in privacy manifests | Apple Developer Documentation](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests)

アプリ開発者（つまり我々ゲーム開発者）は対応が必須で、サードパーティSDKについてはAppleがリストアップするSDKは対応されている必要があります。このリストは2023/12/29現在では下記ページから確認できます。

[Upcoming third-party SDK requirements - Support - Apple Developer](https://developer.apple.com/support/third-party-SDK-requirements/)

### Privacy Manifestの対応方法

具体的な対応としては、アプリ配下に `PrivacyInfo.xcprivacy` を配置して、下記を設定します。ちなみに `PrivacyInfo.xcprivacy` は、Xcode15以降で作成できます。

|             キー              |                                                       説明                                                        |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `NSPrivacyTracking`           | App Tracking Transparencyフレームワークの下で定義された、トラッキングのためにデータを利用するかどうか。           |
| `NSPrivacyTrackingDomains`    | トラッキングを行う際のドメインのリスト。                                                                          |
| `NSPrivacyCollectedDataTypes` | 収集するデータの一覧と用途。                                                                                      |

`NSPrivacyCollectedDataTypes` は、収集するデータごとに下記のプロパティを設定します。

|                 キー                 |                       説明                       |
| ------------------------------------ | ------------------------------------------------ |
| `NSPrivacyCollectedDataType`         | 収集するデータの種類。                           |
| `NSPrivacyCollectedDataTypeLinked`   | このデータを用いてユーザーの特定を行うかどうか。 |
| `NSPrivacyCollectedDataTypeTracking` | このデータをトラッキングに利用するかどうか。     |
| `NSPrivacyCollectedDataTypePurposes` | このデータを収集する理由の一覧。                 |

このデータの詳細は、下記リンクから確認できます。

[Describing data use in privacy manifests | Apple Developer Documentation](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests)

## Required Reason API

Appleが定めるAPIを利用する場合に、その理由の記載が必要になりました。APIの一覧は下記ページから確認できます。

[Describing use of required reason API | Apple Developer Documentation](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_use_of_required_reason_api)

### Required Reason APIの対応方法

Privacy Manifestと同様に `PrivacyInfo.xcprivacy` に、利用しているAPIとその理由を記載します。

|            キー             |                  説明                   |
| --------------------------- | --------------------------------------- |
| `NSPrivacyAccessedAPITypes` | 対象のAPIとその利用用途を記述した辞書。 |

Unityが出力するプロジェクトには `PrivacyInfo.xcprivacy` が存在しないので、アプリ開発者の対応が必要です。
Unity公式による対応方針は下記ドキュメントに記載されています。

[Unity - Manual: Apple’s privacy manifest policy requirements](https://docs.unity3d.com/2021.3/Documentation/Manual/apple-privacy-manifest-policy.html)

対応方法としては、上記ドキュメントの「C# .Net framework APIs in Unity」または「Unity Engine privacy manifest」のAPIをUnityで利用している場合に、`PrivacyInfo.xcprivacy` を用意し、適切な設定を行います。

（API利用は静的解析によって検知される可能性があるため、もしかすると利用の有無にかかわらずマニフェストを用意したほうがいいかもしれません。）

`PrivacyInfo.xcprivacy` を用意する方法はいくつかありますが、UnityとしてはXcodeで `PrivacyInfo.xcprivacy` を作成と設定を行った後にそのファイルを `Assets/Plugins` 配下に配置し、インスペクター上でプラットフォーム設定を「iOS」に設定する方法を紹介しています。

### Unityエンジン側の対応

ドキュメントには上記の対応方針で記載されていますが、Required Reason APIへのエンジン側の対応は、現在進行形で行われているようです。下記フォーラムにて確認ができます。

[Official - Apple privacy manifest updates for Unity Engine - Unity Forum](https://forum.unity.com/threads/apple-privacy-manifest-updates-for-unity-engine.1529026/)

具体的には、下記の実装がエンジン側で行われる＆対応予定で、これを利用するには *Unity 2021 LTS* 以降の最新版へのアップデートが必要になります。

- Unity Engine側のRequired Reasonsの対応は2021.3.34f1、2022.3.16f1、2023.2.5f1にリリース予定
- Unityプラグインやパッケージ、プロジェクトのPrivacy Manifestsを取り込むソリューションが2021.3.35f1、2022.3.18f1、2023.2.7f1にリリース予定。リリースノートには「Add Apple Privacy Manifest support」と記載される

## Tracking Domain

アプリやSDKユーザーのトラッキングを行う場合は、トラッキングに用いるドメインの一覧を列挙する必要があります。

### Tracking Domainの対応方法

 `PrivacyInfo.xcprivacy` を配置して、下記を設定します。

|             キー              |                                                       説明                                                        |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `NSPrivacyTracking`           | App Tracking Transparencyフレームワークの下で定義された、トラッキングのためにデータを利用するかどうか。           |
| `NSPrivacyTrackingDomains`    | トラッキングを行う際のドメインのリスト。                                                                          |

## コード署名

SDKの正当性を証明するために、Privacy-Impacting SDKに指定されたSDKは、コード署名が必要になりました。

### コード署名の対応方法

基本的にアプリ開発者側での対応はないのですが、Privacy-Imacting SDKに指定されているSDKのうち、自身が利用しているSDKがコード署名を行っているかの確認が必要です。

### UnityFrameworkのコード署名

UnityFrameworkが[Privacy-Impacting SDKs](https://developer.apple.com/support/third-party-SDK-requirements/)が指定されているため、UnityとしてはUnityFrameworkに対してコード署名を行うという方針で対応が進められているようです。詳細についてはフォーラムにて確認できます。

[Official - Apple privacy manifest updates for Unity Engine - Unity Forum](https://forum.unity.com/threads/apple-privacy-manifest-updates-for-unity-engine.1529026/)

この作業は現在作業中で、この対応を取り込むには **Unity 2021 LTS** 以降の最新版へのアップデートが必要になることが告知されています。

## 各種SDKの対応状況

ゲーム開発でよく利用するSDKのうち、「Privacy-Impacting SDK」に指定されているものと、対応状況をまとめます。

- Facebook SDK
    - 該当SDK
        - FBAEMKit
        - FBSDKCoreKit
        - FBSDKCoreKit
        - FBSDKCoreKit_Basics
        - FBSDKLoginKit
        - FBSDKShareKit
    - 対応: x
        - [Feature Request: Support App Privacy Manifest · Issue #2264 · facebook/facebook-ios-sdk](https://github.com/facebook/facebook-ios-sdk/issues/2264)
            - 一部SDKは対応している？（[https://github.com/facebook/facebook-ios-sdk/issues/2264#issuecomment-1867928714](https://github.com/facebook/facebook-ios-sdk/issues/2264#issuecomment-1867928714)）
- Firebase
    - 該当SDK
        - FirebaseABTesting
        - FirebaseAuth
        - FirebaseCore
        - FirebaseCoreDiagnostics
        - FirebaseCoreExtension
        - FirebaseCoreInternal
        - FirebaseCrashlytics
        - FirebaseDynamicLinks
        - FirebaseFirestore
        - FirebaseInstallations
        - FirebaseMessaging
        - FirebaseRemoteConfig
    - 対応: x
        - [[FR]: Support App Privacy Manifest · Issue #11490 · firebase/firebase-ios-sdk](https://github.com/firebase/firebase-ios-sdk/issues/11490)
            - 対応中
            - ~~Firebase 10のマイナーバージョン以降での対応を予定しているが、場合によっては11以降のみの対応になる可能性がある。~~
            - Firebase 10のマイナーバージョンでの対応を予定している。
- FBLPromises
    - 対応: ?
        - [Privacy manifest for sensitive APIs · Issue #225 · google/promises](https://github.com/google/promises/issues/225)
            - Issueだけ上がっている

## おわりに

Apple Privacy Manifestsの、とくにUnityアプリでの対応をまとめてみました。

サードパーティSDK側の対応が後手に回っていて、本当に大丈夫なのか...？ とおもいつつ、できるところからこまめに対応していこうと思っています。

間違い等あればご指摘いただだけると幸いです。この情報がなにかの参考になれば幸いです。

## 参考

- 公式ドキュメント
    - [Describing data use in privacy manifests | Apple Developer Documentation](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests)
    - [Get started with privacy manifests - WWDC23 - Videos - Apple Developer](https://developer.apple.com/videos/play/wwdc2023/10060/)
    - [Upcoming third-party SDK requirements - Support - Apple Developer](https://developer.apple.com/support/third-party-SDK-requirements/)
- ニュース
    - [App Storeのプライバシーに関する最新情報 - 最新ニュース - Apple Developer](https://developer.apple.com/jp/news/?id=av1nevon)
- 参考記事
    - [【WWDC23】2024年春以降に Apple 審査を通過するために対応すべきプライバシーの変更点](https://zenn.dev/kamimi01/articles/f8acb9cf2a8461)
    - [[WWDC23] Xcode15からPrivacy Manifestsが導入 #Swift - Qiita](https://qiita.com/YokohamaHori/items/f54e9f2c74f7f6bfe268)
- Unity側の対応
    - [Unity - Manual: Apple’s privacy manifest policy requirements](https://docs.unity3d.com/2021.3/Documentation/Manual/apple-privacy-manifest-policy.html)
    - [Official - Apple privacy manifest updates for Unity Engine - Unity Forum](https://forum.unity.com/threads/apple-privacy-manifest-updates-for-unity-engine.1529026/)
- 対応事例
    - [プライバシーマニフェスト対応　Appleの審査が通ったのでまとめてみた - OpenWork Tech Blog](https://techblog.openwork.co.jp/entry/ios-privacymanifest)

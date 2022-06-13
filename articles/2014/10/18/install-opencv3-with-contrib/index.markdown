---

title: "OpenCV3をSIFT・SURFを使えるようにインストールして使ってみる"
date: 2014-10-18T16:41:00+09:00
comments: true
categories: opencv c++

---

OpenCV3-alphaが公開されて, せっかくだしアップデートして使ってみようと思ったらSIFT/SURFなどの局所特徴のモジュールが入っておらず,
どうやらopencvのレポジトリとは別に[opencv_contrib](https://github.com/Itseez/opencv_contrib)というレポジトリで管理されていたので,
OpenCV3にopencv_contribモジュールを取り込んでインストールし, SURFを使うところまでを備忘録がわりにブログに書いた.

検証環境はUbuntu14.04でgcc4.8.

インストール
------------

まずはOpenCVをコンパイルする. OpenCV3のコンパイルにはCMakeの2.8.8以降が必要. Ubuntu14.04 だとデフォルトで2.8.8以降をaptでインストールできる.

徐ろにgithubから[Itseez/opencv](https://github.com/Itseez/opencv/)と[Itseez/opencv_contrib](https://github.com/Itseez/opencv_contrib/)をダウンロードしてくる.

```
mkdir tmp
cd tmp
git clone https://github.com/Itseez/opencv.git
git clone https://github.com/Itseez/opencv_contrib.git
```

次にCMakeを使ってMakefileを生成, コンパイルしてインストール.

```
cd opencv
mkdir release && cd release
cmake -DOPENCV_EXTRA_MODULES_PATH=../../opencv_contrib/modules -DWITH_TBB=YES -DWITH_EIGEN=YES ../
make -j5
sudo make install
```

ポイントは`OPENCV_EXTRA_MODULES_PATH`に`opencv_contrib/modules`を指定しているところで, これで勝手にopencv_contribも取り込んでくれる. 便利.
あとお好みに合わせてオプションを指定する. 上記だと, Intel TBBとEigenを利用できるようにしてる.


利用する
--------

これでSIFTやSURFなどの局所特徴が利用できる. 注意点として, OpenCVにある`opencv2/features2d.hpp`をインクルードするだけではSIFTやSURFを利用できず,
`opencv2/xfeatures2d/nonfree.hpp`をインクルードする必要がある. また, `cv::nonfree::initModule_xfeatures2d`を(`cv::initModule_features2d`ではなく)
よんでやらないと, `cv::FeatureDetector::create`の呼び出しが失敗し, nullが返ってくるので注意.

```cpp
#include <iostream>
#include <vector>

#include <opencv2/core.hpp>
#include <opencv2/imgcodecs.hpp>
#include <opencv2/xfeatures2d.hpp>

int main() {

    cv::Mat image = cv::imread("lena.png");
    if (!image.data) {
        std::cout << "No image data" << std::endl;
        return -1;
    }

    cv::xfeatures2d::initModule_xfeatures2d();

    cv::Ptr<cv::FeatureDetector> detector = cv::FeatureDetector::create("SURF");↲
    cv::Ptr<cv::DescriptorExtractor> extractor = cv::DescriptorExtractor::create("SURF");↲

    std::vector<cv::KeyPoint> keypoints;
    cv::Mat descriptor;

    detector->detect(image, keypoints);
    extractor->compute(image, keypoints, descriptor);

    cv::Mat output;
    cv::drawKeypoints(image, keypoints, output);

    cv::imwrite("output.png", output);

    return 0;
}
```


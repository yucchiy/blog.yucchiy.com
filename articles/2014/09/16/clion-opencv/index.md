---
title: CLionでOpenCV
description: ''
pubDatetime: 2014-09-15T16:00:00.000Z
tags: []
---

JetBrainsが最近C/C++用のIDEである[CLion](http://www.jetbrains.com/clion/)をリリースしてて, いままでMac&C++(主に研究でOpenCVを使う都合)の環境に困ってた僕に朗報だったので早速導入した.
今回は, CLionでOpenCVを動かしてみたのでそのメモを備忘録代わりにブログに書いてみた.

ちなみに動作環境は, Mac OS X Mavericks.

インストール
------------

### OpenCVのインストール


OpenCVは, ビルドにCMakeを要するので, Homebrewとかでインストールしておく. 最近だと3.0.xが入るっぽい.

```
brew install cmake
```

次にOpenCVをインストールする.

```
mkdir tmp
git clone git@github.com:Itseez/opencv.git
cd opencv
git checkout 2.4.9
mkdir release
cd release
cmake  ../
make
make install
```

CLionからOpenCVを利用する
-------------------------

まずおもむろにCLionからNew Projectを作成する. すると, `CMakeLists.txt`と`main.cpp`が作成される. OpenCVを上記の通りにビルドしている場合は,
`CMakeLists.txt`で, `find_package(OpenCV)`を呼び出し, `target_link_libraries`で, OpenCVのライブラリを読み込むことで利用できる.


```
cmake_minimum_required(VERSION 3.0.0)
project(sample_clion_opencv)

find_package(OpenCV REQUIRED)

set(SOURCE_FILES main.cpp)
add_executable(sample_clion_opencv ${SOURCE_FILES})
target_link_libraries(sample_clion_opencv ${OpenCV_LIBS})
```

試しに, SURF特徴を抽出して表示するサンプルを書いてみた.

```cpp
#include <iostream>
#include <opencv2/opencv.hpp>
#include <opencv2/nonfree/nonfree.hpp>

int main() {

    cv::Mat image = cv::imread("lena.png");
    if (!image.data) {
        std::cout << "No image data" << std::endl;
        return -1;
    }

    cv::initModule_features2d();

    cv::Ptr<cv::FeatureDetector> detector = cv::FeatureDetector::create("SURF");
    cv::Ptr<cv::DescriptorExtractor> extractor = cv::DescriptorExtractor::create("SURF");

    vector<cv::KeyPoint> keypoints;
    cv::Mat descriptor;

    detector->detect(image, keypoints);
    extractor->compute(image, keypoints, descriptor);

    cv::Mat output;
    drawKeypoints(image, keypoints, output);

    imwrite("output.png", output);

    return 0;
}
```

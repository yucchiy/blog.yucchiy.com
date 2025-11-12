#!/bin/bash
set -e

echo "Setting up local development environment..."

# blogv4が存在しない場合はclone
if [ ! -d "system" ]; then
    echo "Cloning blogv4..."
    git clone git@github-personal:yucchiy/blogv4.git system
fi

cd system

# src/data にコピー
echo "Copying articles to src/data..."
rm -rf src/data
mkdir -p src/data/blog

# ブログ記事をコピー（projectディレクトリを除く）
cp -r ../articles/* src/data/blog/
rm -rf src/data/blog/project

# プロジェクト記事をコピー
mkdir -p src/data/projects
if [ -d "../articles/project" ]; then
    cp -r ../articles/project/* src/data/projects/
fi

# public/assets にコピー
echo "Copying assets to public/assets..."
rm -rf public/assets
mkdir -p public/assets/images

# 記事の画像をコピー
cp -r ../articles public/assets/images/blog

# プロジェクトの画像をコピー
if [ -d "../articles/project" ]; then
    cp -r ../articles/project public/assets/images/projects
fi

echo "✓ Local development environment setup complete!"

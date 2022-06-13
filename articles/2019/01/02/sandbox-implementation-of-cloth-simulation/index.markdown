---
date: "2019-01-02T00:04:00+09:00"
draft: false
title: "2019/01/02 進捗 (Cloth Simulation)"
tags: ["Diary", "Unity", "C#"]

---

あけましておめでとうございます。今年もよろしくおねがいします。

最近、揺れモノとか演出に関わる技術に興味があって、そのへんの仕組みをまず知っておこうかなと思い、正月で時間もあるし、Cloth Simulationを実装しています。

まだ実装途中なのですが、今年はやっていることをちゃんとアウトプットしていこうと決意したので、やっていることを少しでも多くアウトプットできればと思っています。

まず、進捗がこちら。

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">前々から興味あった揺れもの系の勉強しようかなぁと思って、新年早々ClothSimulationを勉強しようと思って、Mass-spring model をベルレ法で実装してみてるんだけど、なんか左端がうまくいってなさそう  <a href="https://t.co/vKV8hoFG5r">https://t.co/vKV8hoFG5r</a></p>&mdash; ゆっち〜 (@yucchiy_) <a href="https://twitter.com/yucchiy_/status/1080138922384973824?ref_src=twsrc%5Etfw">2019年1月1日</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

なんとなく動いてそうだけど、まだバグがありそう。特に布の端がギザギザしているのは...。

ウェブをあさっていると、Mass-spring model(日本語だと質点バネモデル?)が有名そうで、そちらを実装してみました。

ざっくりいうと、布の形状にあわせて質点を均一に(だいたい格子状に)配置して、その質点に対して与えた力と、質点同士が相互に干渉し合う力を計算することで、布の近似計算を行う手法とのこと。このへんは後日落ち着いたら記事を書く。

ちなみに、海外の記事だと、質点をパーティクルと表現していることが多そう(?)。
日本の記事だと、この[WebGLでの実装の記事](https://qiita.com/yunta_robo/items/0b468b65f3412554400a)がわかりやすかった。

実装のアウトラインは以下の通り。

1. 布の初期化 (`Start`)
    1. Meshの生成
    2. 布の質点の生成
    3. 布の制約の生成
2. 布のシミューレーションの定期更新 (`FixedUpdate`)
    1. 積分フェーズ (外力などの力を各質点に適用)
    2. 制約充足フェーズ (バネによる制約の適用)
    3. 衝突判定フェーズ (球との衝突判定と質点の押し出し)

2.1と2.2のフェーズは、どちらもベルレ積分により求めている。その兼ね合いで2.3の計算は、球にめり込んでいる場合は、球の外側まで押し出せば問題ないらしい。
これの理由はまだあまりわかっていないので、あとでちゃんと調べる。

```csharp
using UnityEngine;
using System.Collections.Generic;

[RequireComponent(typeof(MeshFilter), typeof(MeshRenderer))]
public class ClothSimulationController : MonoBehaviour
{
    // 質点を表す構造体
    public struct Point
    {
        public int MeshVertexIndex;
        public Vector3 Position;
        public Vector3 PreviousPosition;
        public float Weight;
    }

    // 制約を表す構造体
    public struct Constraint
    {
        public int PointIndex1;         // 制約の2点
        public int PointIndex2;         // 制約の2点
        public float EquilibriumLength; // 自然長
        public ConstraintType Type;     // 制約の種類
    }

    public enum ConstraintType
    {
        Structural, // Structural spring
        Shear,      // Shear spring
        Bending,    // Bending spring
    }

    public int VerticalDevide;
    public int HorizontalDevide;
    public Vector3 WindVelocity;

    public float Resistance = 1f;       // 抵抗
    public float Mass = 1f;             // 質点の質量
    public int RelaxationCount = 16;    // Relaxationの反復回数
    public float SpringConstant = 4000; // バネ定数

    public float StructuralShrink;  // Structural springの縮み定数
    public float StructuralStretch; // Structural springの伸び定数
    public float ShearShrink;       // Shear springの縮み定数
    public float ShearStretch;      // Shear springの伸び定数
    public float BendingShrink;     // Bending springの縮み定数
    public float BendingStretch;    // Bending springの伸び定数

    public Vector3 CollisionOrigin;
    public float CollisionRadius;

    private Vector3[] _vertices;
    private Point[] _points;
    private Constraint[] _constraints;
    private Mesh _mesh;


    private void GenerateClothMesh()
    {
        var mesh = new Mesh();
        var filter = GetComponent<MeshFilter>();

        mesh.Clear();

        var vertices =
            new Vector3[(VerticalDevide + 1) * (HorizontalDevide + 1)];
        var uv = new Vector2[(VerticalDevide + 1) * (HorizontalDevide + 1)];
        {
            float verticalStep = 1f / VerticalDevide;
            float horizontalStep = 1f / HorizontalDevide;
            float offsetX = -1f / 2;
            float offsetY = -1f / 2;
            for (int y = 0; y < VerticalDevide + 1; ++y)
            {
                for (int x = 0; x < HorizontalDevide + 1; ++x)
                {
                    int cursor = GetIndex(x, y);
                    vertices[cursor] = new Vector3(
                        x * horizontalStep + offsetX,
                        0f,
                        // TODO: 実験のため
                        y * verticalStep + offsetY
                    );

                    uv[cursor] = new Vector2(
                        1f - (float)x / HorizontalDevide,
                        (float)y / VerticalDevide
                    );
                }
            }
        }
        mesh.vertices = vertices;
        mesh.uv = uv;

        int[] triangles = new int[VerticalDevide * HorizontalDevide * 6];
        {
            for (int y = 0; y < VerticalDevide; ++y)
            {
                for (int x = 0; x < HorizontalDevide; ++x)
                {
                    int cursor = (VerticalDevide * y + x) * 6;

                    int leftTop = GetIndex(x, y);
                    int leftBottom = GetIndex(x, y + 1);
                    int rightTop = GetIndex(x + 1, y);
                    int rightBottom = GetIndex(x + 1, y + 1);

                    triangles[cursor + 0] = leftTop;
                    triangles[cursor + 2] = rightBottom;
                    triangles[cursor + 1] = leftBottom;
                    triangles[cursor + 3] = rightBottom;
                    triangles[cursor + 5] = leftTop;
                    triangles[cursor + 4] = rightTop;
                }
            }
        }
        mesh.triangles = triangles;
        mesh.RecalculateNormals();

        filter.mesh = mesh;
        _mesh = mesh;
        _vertices = vertices;
    }

    private void SetupClothPoints()
    {
        _points = new Point[_mesh.vertices.Length];
        for (int vertexIndex = 0; vertexIndex < _mesh.vertices.Length;
            ++vertexIndex)
        {
            _points[vertexIndex] = new Point();
            _points[vertexIndex].MeshVertexIndex = vertexIndex;
            _points[vertexIndex].Position = _mesh.vertices[vertexIndex];
            _points[vertexIndex].PreviousPosition = _mesh.vertices[vertexIndex];

            // TODO: 端を固定しているので、パラメータで指定できるようにする
            _points[vertexIndex].Weight =
                (vertexIndex >= VerticalDevide * (HorizontalDevide + 1)) ?
                // (vertexIndex % HorizontalDevide == 0) ?
                0f : 1f;
        }
    }

    private void SetupClothConstraints()
    {
        var constraints = new List<Constraint>();

        for (int y = 0; y < VerticalDevide; ++y)
        {
            for (int x = 0; x < HorizontalDevide; ++x)
            {
                AddConstraint(
                    x,
                    y,
                    x + 1,
                    y,
                    ConstraintType.Structural,
                    constraints
                );
                AddConstraint(
                    x,
                    y,
                    x,
                    y + 1,
                    ConstraintType.Structural,
                    constraints
                );

                AddConstraint(
                    x,
                    y,
                    x + 1,
                    y + 1,
                    ConstraintType.Shear,
                    constraints
                );
                AddConstraint(
                    x,
                    y,
                    x - 1,
                    y + 1,
                    ConstraintType.Shear,
                    constraints
                );

                AddConstraint(
                    x,
                    y,
                    x + 2,
                    y,
                    ConstraintType.Bending,
                    constraints
                );
                AddConstraint(
                    x,
                    y,
                    x,
                    y + 2,
                    ConstraintType.Bending,
                    constraints
                );
            }
        }

        _constraints = constraints.ToArray();
    }

    private int GetIndex(int x, int y)
    {
        return (VerticalDevide + 1) * y + x;
    }

    private void AddConstraint(
        int x1,
        int y1,
        int x2,
        int y2,
        ConstraintType type,
        List<Constraint> constraints)
    {
        if (IsInField(x1, y1) && IsInField(x2, y2))
        {
            int index1 = GetIndex(x1, y1);
            int index2 = GetIndex(x2, y2);
            
            constraints.Add(
                new Constraint()
                {
                    PointIndex1 = index1,
                    PointIndex2 = index2,
                    Type = type,
                    EquilibriumLength = 
                        (_points[index1].Position - _points[index2].Position)
                            .magnitude,
                }
            );
        }
    }

    private bool IsInField(int x, int y)
    {
        return (
            x >= 0 && x <= HorizontalDevide &&
            y >= 0 && y <= VerticalDevide
        );
    }

    private void ProcessIntegrationPhase(float deltaTime)
    {
        var force = Vector3.zero;
        force += Physics.gravity;
        force += WindVelocity;
        force *= deltaTime * deltaTime * 0.5f;

        var acceleration = force / Mass;

        for (int pointIndex = 0; pointIndex < _points.Length; ++pointIndex)
        {
            var velocity =
                _points[pointIndex].Position
                - _points[pointIndex].PreviousPosition;

            var displacement = (velocity + acceleration) * Resistance;

            _points[pointIndex].PreviousPosition = _points[pointIndex].Position;
            _points[pointIndex].Position +=
                displacement * _points[pointIndex].Weight;
        }
    }

    private void ProcessConstraintPhase(float deltaTime)
    {
        for (int constraintIndex = 0; constraintIndex < _constraints.Length;
            ++constraintIndex)
        {
            var constraint = _constraints[constraintIndex];

            var point1 = _points[constraint.PointIndex1];
            var point2 = _points[constraint.PointIndex2];

            const float kEpsillon = 1e-6f;
            if ((point1.Weight + point2.Weight) < kEpsillon)
            {
                return;
            }

            float shrink = 0f;
            float stretch = 0f;
            switch (constraint.Type)
            {
                case ConstraintType.Structural:
                    shrink = StructuralShrink;
                    stretch = StructuralStretch;
                    break;
                case ConstraintType.Shear:
                    shrink = ShearShrink;
                    stretch = ShearStretch;
                    break;
                case ConstraintType.Bending:
                    shrink = BendingShrink;
                    stretch = BendingStretch;
                    break;
            }

            var distance = (point1.Position - point2.Position).magnitude;
            var force =
                (distance - constraint.EquilibriumLength) * SpringConstant;

            force = (force > 0f) ? force * shrink : force * stretch;
            force *= deltaTime * deltaTime * 0.5f;

            var acceleration = force / Mass;

            var direction = (point2.Position - point1.Position).normalized;
            var displacement = acceleration * direction;

            float totalWeight = point1.Weight + point2.Weight;
            _points[constraint.PointIndex1].Position +=
                displacement * point1.Weight / totalWeight;
            _points[constraint.PointIndex2].Position -=
                displacement * point2.Weight / totalWeight;
        }
    }

    private void ProcessCollisionPhase(float deltaTime)
    {
        for (int pointIndex = 0; pointIndex < _points.Length; ++pointIndex)
        {
            var sphereOriginToPoint =
                _points[pointIndex].Position - CollisionOrigin;
            var distance = sphereOriginToPoint.magnitude;
            if (distance < CollisionRadius)
            {
                const float kEpsillon = 1e-6f;
                _points[pointIndex].Position = CollisionOrigin
                    + sphereOriginToPoint.normalized * (CollisionRadius + kEpsillon);
            }
        }
    }

    private void Start()
    {
        GenerateClothMesh();

        SetupClothPoints();
        SetupClothConstraints();
    }

    private void FixedUpdate()
    {
        float deltaTime = Time.deltaTime;

        ProcessIntegrationPhase(deltaTime);

        for (int iteration = 0; iteration < RelaxationCount; ++iteration)
        {
            ProcessConstraintPhase(deltaTime);
        }

        ProcessCollisionPhase(deltaTime);
    }

    private void LateUpdate()
    {
        foreach (var point in _points)
        {
            _vertices[point.MeshVertexIndex] = point.Position;
        }

        _mesh.vertices = _vertices;
    }
}
```

次回は、この計算をGPUで並列計算したいのと、これ以外のアルゴリズムについてもいろいろ調べる。

---
date: "2015-11-10T10:00:00+09:00"
title: "GolangでOpenGLで工作はじめた"
description: "普段はサーバーサイドエンジニアをしているが, 工作と題してOpenGLをGolangでさわりだした"

tags: ["OpenGL", "CG", "Golang"]
---

普段は業務でゲームのプロジェクトでサーバーサイドエンジニアとしてJavaを書いているのだけれど,
プロジェクトのネイティブエンジニアがワイワイ楽しそうに話しているのを聞いていて楽しそう, 
というのと少しUnityを触る機会ができたので, 自分もCGとかやってワイワイやろうと思って, 暇な時にOpenGLを触りだした. 

しかし, ただCとかで書いても面白く無い(?)かなと思って, 最近ハマっているGolangで書き始めた.

## GL

Golangには, [GL](https://github.com/go-gl/gl)という, OpenGLのバインディングライブラリが存在していて,
これを使うとわりと簡単にOpenGLを触ることができる.

最近のMacだとはじめからOpenGLが入っているので, インストールは簡単で`go get`でインストールするだけ.
下記のコマンドで, v3.2 ~ 4.5あたりのバインディングがまとめてインストールされる. 便利.

```
go get github.com/go-gl/gl/v{3.2,3.3,4.1,4.4,4.5}-{core,compatibility}/gl
```

あわせて[GLFW](http://www.glfw.org/)の[バインディング](https://github.com/go-gl/glfw)もインストールしておくと更に便利.

GLFWの詳細は[この辺](http://marina.sys.wakayama-u.ac.jp/~tokoi/?date=20120906)がとても参考になる.

```go
package main

import (
	"fmt"
	"runtime"
	"strings"

	"github.com/go-gl/gl/v3.3-core/gl"
	"github.com/go-gl/glfw/v3.1/glfw"
)

const windowWidth = 800
const windowHeight = 600

func init() {
	// This is needed to arrange that main() runs on main thread.
	// See documentation for functions that are only allowed to be called from the main thread.
	runtime.LockOSThread()
}

func main() {
	// init glfw
	if err := glfw.Init(); err != nil {
		panic(err)
	}

	defer glfw.Terminate()

	glfw.WindowHint(glfw.Resizable, glfw.False)
	glfw.WindowHint(glfw.ContextVersionMajor, 4)
	glfw.WindowHint(glfw.ContextVersionMinor, 1)
	glfw.WindowHint(glfw.OpenGLProfile, glfw.OpenGLCoreProfile)
	glfw.WindowHint(glfw.OpenGLForwardCompatible, glfw.True)

	// make an application window
	window, err := glfw.CreateWindow(windowWidth, windowHeight, "Hello", nil, nil)
	if err != nil {
		panic(err)
	}
	window.MakeContextCurrent()

	// init gl
	if err := gl.Init(); err != nil {
		panic(err)
	}
	fmt.Println("OpenGL version", gl.GoStr(gl.GetString(gl.VERSION)))

	gl.ClearColor(1.0, 1.0, 1.0, 1.0)
	for !window.ShouldClose() {
		gl.Clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

		window.SwapBuffers()
		glfw.PollEvents()
	}
}
```

上のコードを実行すると, 800x600のウインドウが作成できる.

[GL](https://github.com/go-gl/gl)では, `gl`パッケージ以下に, 関数の場合は徐ろにglを,
定数はGLを除いた感じの命名規則で定義されているので, OpenGLを知っている人はそんなに困ることははさそう.

試しにシェーダを利用して, 簡単な図形のxy平面への直行投影図を書くプログラムを書いてみた.

```go
package main

import (
	"fmt"
	"runtime"
	"strings"

	"github.com/go-gl/gl/v3.3-core/gl"
	"github.com/go-gl/glfw/v3.1/glfw"
)

const windowWidth = 800
const windowHeight = 600

var vertexShader = `
#version 330

in vec3 pv;

void main() {
	gl_Position = vec4(pv, 1);
}
` + "\x00"

var fragmentShader = `
#version 330

out vec4 fc;

void main() {
	fc = vec4(1.0, 0.0, 0.0, 1.0);
}
` + "\x00"


func init() {
	// This is needed to arrange that main() runs on main thread.
	// See documentation for functions that are only allowed to be called from the main thread.
	runtime.LockOSThread()
}

func main() {
	// init glfw
	if err := glfw.Init(); err != nil {
		panic(err)
	}

	defer glfw.Terminate()

	glfw.WindowHint(glfw.Resizable, glfw.False)
	glfw.WindowHint(glfw.ContextVersionMajor, 4)
	glfw.WindowHint(glfw.ContextVersionMinor, 1)
	glfw.WindowHint(glfw.OpenGLProfile, glfw.OpenGLCoreProfile)
	glfw.WindowHint(glfw.OpenGLForwardCompatible, glfw.True)

	// make an application window
	window, err := glfw.CreateWindow(windowWidth, windowHeight, "Hello", nil, nil)
	if err != nil {
		panic(err)
	}
	window.MakeContextCurrent()

	// init gl
	if err := gl.Init(); err != nil {
		panic(err)
	}
	fmt.Println("OpenGL version", gl.GoStr(gl.GetString(gl.VERSION)))

	// create vertex & fragment shader
	program, err := newProgram(vertexShader, fragmentShader)
	if err != nil {
		panic(err)
	}
	gl.UseProgram(program)

	gl.BindFragDataLocation(program, 0, gl.Str("fc\x00"))

	points := []float32{
		-0.5, -0.5,
		0.5, 0.5,
		0.5, -0.5,
		-0.5, 0.5,
	}

	vertices := []uint32{
		0, 2, 1, 3,
	}

	// configure the vertex data
	var vao uint32
	gl.GenVertexArrays(1, &vao)
	gl.BindVertexArray(vao)

	defer gl.BindVertexArray(0)

	var vbo uint32
	gl.GenBuffers(1, &vbo)
	gl.BindBuffer(gl.ARRAY_BUFFER, vbo)
	gl.BufferData(gl.ARRAY_BUFFER, len(points)*4, gl.Ptr(points), gl.STATIC_DRAW)

	var ibo uint32
	gl.GenBuffers(1, &ibo)
	gl.BindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibo)
	gl.BufferData(gl.ELEMENT_ARRAY_BUFFER, len(vertices)*4, gl.Ptr(vertices), gl.STATIC_DRAW)

	vertAttrib := uint32(gl.GetAttribLocation(program, gl.Str("pv\x00")))
	gl.EnableVertexAttribArray(vertAttrib)
	gl.VertexAttribPointer(vertAttrib, 2, gl.FLOAT, false, 2*4, gl.PtrOffset(0))

	// global settings
	gl.Enable(gl.DEPTH_TEST)
	gl.DepthFunc(gl.LESS)
	gl.ClearColor(1.0, 1.0, 1.0, 1.0)

	for !window.ShouldClose() {
		gl.Clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

		gl.UseProgram(program)

		gl.BindVertexArray(vao)

		gl.DrawElements(gl.LINE_LOOP, 4, gl.UNSIGNED_INT, gl.PtrOffset(0))

		window.SwapBuffers()
		glfw.PollEvents()
	}
}

func newProgram(vertexShaderSource, fragmentShaderSource string) (uint32, error) {
	vertexShader, err := compileShader(vertexShaderSource, gl.VERTEX_SHADER)
	if err != nil {
		return 0, err
	}

	fragmentShader, err := compileShader(fragmentShaderSource, gl.FRAGMENT_SHADER)
	if err != nil {
		return 0, err
	}

	program := gl.CreateProgram()

	gl.AttachShader(program, vertexShader)
	gl.AttachShader(program, fragmentShader)
	gl.LinkProgram(program)

	var status int32
	gl.GetProgramiv(program, gl.LINK_STATUS, &status)
	if status == gl.FALSE {
		var logLength int32
		gl.GetProgramiv(program, gl.INFO_LOG_LENGTH, &logLength)

		log := strings.Repeat("\x00", int(logLength+1))
		gl.GetProgramInfoLog(program, logLength, nil, gl.Str(log))

		return 0, fmt.Errorf("failed to link program: %v", log)
	}

	gl.DeleteShader(vertexShader)
	gl.DeleteShader(fragmentShader)

	return program, nil
}

func compileShader(source string, shaderType uint32) (uint32, error) {
	shader := gl.CreateShader(shaderType)

	csource := gl.Str(source)
	gl.ShaderSource(shader, 1, &csource, nil)
	gl.CompileShader(shader)

	var status int32
	gl.GetShaderiv(shader, gl.COMPILE_STATUS, &status)
	if status == gl.FALSE {
		var logLength int32
		gl.GetShaderiv(shader, gl.INFO_LOG_LENGTH, &logLength)

		log := strings.Repeat("\x00", int(logLength+1))
		gl.GetShaderInfoLog(shader, logLength, nil, gl.Str(log))

		return 0, fmt.Errorf("failed to compile %v: %v", source, log)
	}

	return shader, nil
}
```

サンプルの概要としては, 頂点情報を頂点配列でGPUに送って, 頂点インデックスオブジェクトで描画を制御し,
特に何もしないバーテックスシェーダと, 図形の線を赤く塗るフラグメントシェーダで表示する単純なものになる.

単純なものだったが, シェーダのコンパイル方法とか, 頂点の転送方法とか図形の描画とか調べてたら結構時間がかかったが, 良い学びになった.

学部時代にOpenGL使った演習は受けたことはあったが, シェーダとか書いたことなかったので, 参考資料として大学時代にお世話になった[先生の資料](https://github.com/tokoik/ggsample02)を漁って書いてた.
(とはいってもほとんどコピペになってしまったが.)

これからもう少し[この資料を読んで](http://www.wakayama-u.ac.jp/~tokoi/lecture/gg/)勉強したい.


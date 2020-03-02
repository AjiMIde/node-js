## Less

#### Introduction
* Css 是静态的、语法上有很多限制，限制即有效，又比较单调、单一
* Alexis Sellier 的开源项目 `LESS` 是用来解决上面这个问题的 
* `LESS` 在现有 CSS 语法之上添加了一些编程语言才有特性，比如变量、`mixins`、运算符和函数。
* 可以浏览器上 `JavaScript` 或通过服务器端 `JavaScript` 工具集的预处理将 LESS 编译到 CSS 中。
* LESS 是为现代网站编写可读性的、可维护的 CSS 的一种方式。


#### WebSite
* [Less 中文网 1024i - 90%](http://www.1024i.com/demo/less/)
* [Less 中文网 lessCN](http://lesscss.cn/)
* [IBM Less 专题](https://www.ibm.com/developerworks/cn/web/1207_zhaoch_lesscss/)
* [BootCss Less](http://www.bootcss.com/p/lesscss/)
* [BootCss Less 2](http://less.bootcss.com/)
* ---
* ---
* [Koala 编译工具](http://koala-app.com/index-zh.html)
* --
* [在线 less 编译](http://www.matools.com/less)


#### 安装(Npm)
```bash
npm i less -g
```


#### 命令行使用
```bash
# 当上面的 less 全局安装后，可使用 lessc 来编辑 .less 文件
lessc a.less a.css
```


#### 严格模式
* 在 less 中开启严格模式后，数字计算需要用 括号包裹、单位计算会受到严格限制等
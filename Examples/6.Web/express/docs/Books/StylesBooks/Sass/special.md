#### 群组选择器带来的 巨大 `css` 文件

* scss 的群组、层级嵌套带来的便利的同时，也造成了生成 大文件 css 文件的缺点，如：
```scss
.foo {
  div, h1, h2, h4 {
    button, a {
      color: red;
    }
  }
}
// 编译成：
.foo div button { color: red;}
.foo div a { color: red;}
.foo h1 button { color: red;}
...
```
* 这样的性能无疑是低下的，且资源损耗巨大

#### 混合器的滥用造成性能低下
* 2018-07 请重复阅读 继承与混合器这一块：https://www.sass.hk/guide/
* 跟混合器相比，继承生成的css代码相对更少。因为继承仅仅是重复选择器，而不会重复属性，所以使用继承往往比混合器生成的css体积更小

#### @import 引用文件及局部引用
```scss
// 使用 @import 命令来引入 scss 文件(可以省略后缀名)
@import "../../styles.scss";
```

* 注意 sass 有个特殊的约定，来约定那些只需要被 import 而不需要被编译的 scss 文件
* 只需要在命名时，使用下划线 `_` 来命令文件，该文件就不会被编译（通常只用来引用）
* files/_variable.scss
* files/_mixins.scss
* files/_skin.scss
* 像这样命名的文件，不会被编译到


#### @import 嵌套导入
```scss
// 假设有一个 a.scss 文件如下：
.foo {
  color: red;
}

// 另一个 b.scss 文件如下：
.bar {
  @import "./a.scss";
}

// 则会编译成：
.bar {
  .foo {
    color: red;
  }
}
```



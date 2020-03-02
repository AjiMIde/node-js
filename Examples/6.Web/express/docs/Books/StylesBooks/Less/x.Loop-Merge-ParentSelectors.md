#### Loop
* 循环能够让你用少量的代码完成一些层级的，或是叠加的样式定义
* 一般结合 mixin 使用

```less
.loop(@counter) when (@counter > 0) {
  .loop((@counter - 1));    // next iteration
  width: (10px * @counter); // code for each iteration
}

div {
  .loop(5); // launch the loop
}

// => 转换成：
div {
  width: 10px;
  width: 20px;
  width: 30px;
  width: 40px;
  width: 50px;
}
```

* 当然，这个用法一般没什么意义，看看一个稍微有意义的用法

```less
.loop(@counter) when (@counter > 0) {
  .loop((@counter - 1));    // next iteration
  .flex-@{counter} {
    flex: @counter;
  }
}

div {
  .loop(5); // launch the loop
}
// => 转换成：
div .flex-1 {
  flex: 1;
}
div .flex-2 {
  flex: 2;
}
div .flex-3 {
  flex: 3;
}
div .flex-4 {
  flex: 4;
}
div .flex-5 {
  flex: 5;
}
```


#### Merge

* merge 特性使得可以将同一个属性的多个值用逗号 `,` 或空格 `space` 连接起来
* 这个特性用在 `transform`, `box-shadow` 等非常有用

```less
.default-shadow {
  box-shadow+: inset 0 0 1px #555;
  transform+_: scale(2);
}
.box-shadow {
  .default-shadow;
  box-shadow+: 0 0 110px #333;
  transform+_: rotate(15deg);
}
// ==> 
.box-shadow {
  box-shadow: inset 0 0 1px #555, 0 0 110px #333;
  transform: scale(2) rotate(15deg);
}
```



#### & 使用
> * & 符号一般代替本身 (this) ，看些例子就懂了

```less
.class {
  &:hover {
    color: #fff;
  }
}
.foo, .bar {
  & span {
    color: #fff
  }
}
// ==> 
.foo span, .bar span { // 这证明, & 符号放在哪里都好
  color: #fff
}
```

* 更简便好看的例子，一看就明：

```less
.button {
  &-ok {
    color: green;
  }
  &-error {
    color: red;
  }
  &Waring {
    color: yellow
  }
}
// ==>
.button-ok {
  color: green;
}
.button-error {
  color: red;
}
.buttonWaring {
  color: yellow;
}
```

* 要注意执行顺序，以及，`&` 符所代表的是：层级接连的选择器（而非最近的那个选择器）

```less
.foo {
  .bar {
    .cat & {
      color: #fff;
    }
  }
}
// ==>
.cat .foo .bar {
  color: #fff;
}
```
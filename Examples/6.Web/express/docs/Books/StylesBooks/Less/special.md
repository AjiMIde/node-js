## 特殊技巧 

#### mixin @arguments变量参数/@rest 变量
```less
.shadow (@x: 0, @y: 0, @blur: 1px, @color: #000) {
  box-shadow: @arguments; // @arguments 表示所有参数
}
.shadow (...) {
  box-shadow: @arguments; // ... 表示，参数变量是无限的
}
.shadow (@x, @y, @rest...) {
  box-shadow: @x, @y, @rest; // @rest 表示其他参数
}
div {
  .shadow !important;         // !important 表示，mixin 的类所有的匹配都设成 important
}
```

#### mixin 模式匹配
```less
.border (left, @borderSize: 1px) {
  text-align:left;
}
.border (right, @borderSize: 1px) {
  text-align:right;
}
.border (@_, @borderSize: 1px) {
  border: @borderSize solid #fff;
}

div {
  .border(left, 2px);
}
```

#### mixin Guard 表达式，匹配表达式
> * Guard 运算符有 > >= =< < 等，注意，相等是 = 
> * 多个 Guard 可以用逗号分隔：(@a > 10), (@ < -10), 还可以使用 and/not 等关键词
> * Guard 表达式可以使用类型判断： when (isnumber(@b))
> * 此外还有 `iscolor/isnumber/isstring/iskeyword/isurl` 等

```less
.mixin (@a) when (lighteness(@a) >= 50%) {
  background-color: black;
}

.mixin (@a) when (lighteness(@a) < 50%) {
  background-color: white;
}

.mixin (@a) {
  color: @a;
}
```



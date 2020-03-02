## 函数 
* less 中的函数，第一感觉上跟 js 差不多，提供以下几个类型
* 数学函数式：`sin/asin/cos/acos/sqrt/abs/round/floor/ceil` 等
* 颜色转换：`rgb/rgba/argb/hsl/hsla/hsv/hsva/hue` 等
* 调整颜色：`saturate/desaturate/lighten/darken/fadein/fadeout/spin/mix` 等
* 判断式：`iscolor/isnumber/isstring/isurl/iskeyword/ispixel/isem/isunit/isurl` 等

#### data-uri
* 将一个资源以 base64 编码嵌入样式文件中，

```less
div {
  background-image: data-uri('a.png');
  // => 
  background-image: url('data:image/jpeg;base64,bm90IGFjdHVhbGx5IGEganBlZyBmaWxlCg==');
}
```

#### lighten/darken 增加、降低亮度
```less
div {
  @c: #fff;
  color: lighten(@c, 10%);
  background-color: darken(@c, 10%);
}
```

#### fade/fadein/fadeout 添加透明度、降低、增高透明度，只对带透明度的颜色有效
```less
div {
  @c: rgba(33, 33, 33, .8);
  color: fade(@c, 10%);
  background-color: fadein(@c, 10%);
  border-color: fadeout(@c, 10%);
}
```
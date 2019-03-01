## 文件操作

#### 同步操作文件(进程阻塞)

```js
const path = ''
const fs = require('fs')
const data = fs.readFileSync(path)
```

#### 异步操作文件(非阻塞)

```js
fs.readFile(path, (err, data) => {
  if (err) {
    return console.error(err)
  }
  console.log(data.toString())
})



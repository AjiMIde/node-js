const express = require('express')
const bodyParser = require('body-parser');
const multer = require('multer');

const fs = require('fs')

const app = express()
const port = 7890

const successOperator = function (data) {
  return {
    code: 0,
    success: true,
    data
  }
}

const failOperator = function (code = -1, msg = '') {
  return {
    code, success: false, data: null, msg
  }
}

// 处理典型的中间件
app.use(bodyParser.json());                         // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// app.use(multer());                               // for parsing multipart/form-data



const callback = (req, res) => {
  res.send('hello node.js')
}

app.get('/', callback)

app.get('/index', callback)

app.get('/key-main-home-nav/:path', (req, res) => {
  // console.log(req.body)
  // console.log(req.params)
  // console.log(req.query)
  if (req.params.path) {
    fs.readFile(req.params.path, (err, data) => {
      if (err) {
        res.send(failOperator(-1, err.toString()))
      } else {
        res.send(successOperator(JSON.parse(data.toString())))
      }
    })
  } else {
    res.send(failOperator())
  }
})

app.post('/key-main-home-nav/:path', (req, res) => {
  // 只有使用了bodyParser中间件，req.body才有正常值
  console.log(req.body)

  const path = req.params.path || ''
  const { content } = req.body

  if (path && content) {
    if (content.length < 100) {
      res.send(failOperator(-1, '参数有误'))
    } else {
      console.log(path, content)
    }
  } else {
    res.send(failOperator(-1, '缺少必要参数'))
  }

  const options = {}

  const callback = (err) => {
    if (err) {
      res.send(failOperator(-1, err.toString()))
    } else {
      res.send(successOperator(JSON.parse(content)))
    }
  }

  fs.writeFile(path, content, options, callback)
})

const server = app.listen(port, () => {
  const host = server.address().address
  const port = server.address().port
  console.log('Now we are service at http://%s:%s', host, port)
})
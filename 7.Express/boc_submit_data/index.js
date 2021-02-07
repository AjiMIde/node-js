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

app.all('/submit', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "*");
  // res.header("Access-Control-Allow-Headers", "X-Requested-With");
  // res.header("Access-Control-Allow-Headers", "X-Requested-With:XMLHttpRequest");
  // res.header("Access-Control-Allow-Headers:x-requested-with,content-type");
  // res.header('Access-Control-Allow-Headers', 'Content-Type:application/json')

  next()
})

app.post('/*', (req, res) => {
  // 只有使用了bodyParser中间件，req.body才有正常值
  console.log(req.body)

  res.send({
    code: '0001',
    success: false,
    message: '会话ID'
  })
  // res.send(successOperator(''))
  // fs.writeFile(path, content, options, callback)
})

app.get('/ss/:data', (req, res) => {
  // console.log(req.body)
  console.log(req.params)

  fs.writeFile('H:\\GitHub\\node-js\\7.Express\\boc_submit_data\\data', req.params.data, {}, () => {})

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


const server = app.listen(port, () => {
  const host = server.address().address
  const port = server.address().port
  console.log('Now we are service at http://%s:%s', host, port)
})
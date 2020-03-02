const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const moment = require('moment')
const multer = require('multer')
// 创建 application/x-www-form-urlencoded 编码解析
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const util = require('util')

const List = require('./List')



const list = new List()

app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Headers", "X-Requested-With")
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS")
  res.header("Access-Control-Allow-Credentials", true)
  res.header("Access-Control-Allow-Origin", "*")
  res.header("X-Powered-By", ' 3.2.1')
  next()
})

app.get('/pay-orders', function (req, res) {
  list.getAll(data => {
    res.end(JSON.stringify(data))
  })
})

app.get('/pay-orders/:id', function (req, res) {
  list.getOne(req.params.id, data => {
    res.end(JSON.stringify(data))
  })
})

app.delete('/pay-orders/:id', function (req, res) {
  list.delOne(req.params.id, data => {
    res.end(JSON.stringify(data))
  })
})

app.post('/pay-orders', urlencodedParser, function (req, res) {
  let id = '' + parseInt(Math.random() * (9999 - 1000 + 1) + 1000, 10)
  list.addOne({...req.body, time: moment().format('YYYY-MM-DD HH:mm:ss'), id}, data => {
    res.end(JSON.stringify(data))
  })
})

//文件上传
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: './tmp/'}).array('image'));

app.post('/upload', function (req, res) {
  console.log(req.files[0])
})

//
var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})

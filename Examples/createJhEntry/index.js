const express = require('express')
const CryptoJs = require('crypto-js/')
const Md5 = require('crypto-js/md5')
const TripleDes = require('crypto-js/tripledes')

console.log(CryptoJs)
console.log(CryptoJs.TripleDES) // encrypt decrypt




const params = {
  certificateType: '', // 证件类型
  certificateNo: '', // 证件号码
  name: '',
  mobilePhone: '',
  authState: '', // 激活状态 1：已授权 2：未授权 3：未激活
  timeStamp: '', // 当前时间,yyyyMMddHHmmss格式
  authDate: '',
  insuAreaCode: '', // 激活时间
  branNo: '', // 用户签约机构号

}

const val = 'mobilePhone=13387009400&authState=1&timeStamp=20200615102310&authDate=2020-11-10 12:03:03&insuAreaCode=330100&branNo=441001012'






const bodyParser = require('body-parser');
const multer = require('multer');

const fs = require('fs')

const app = express()
const port = 7890

// 处理典型的中间件
app.use(bodyParser.json());                         // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// app.use(multer());                                  // for parsing multipart/form-data

const callback = (req, res) => {
  res.send('hello node.js')
}

app.get('/entry', (req, res) => {
  console.log(req)
  res.send('hello node.js')
})

app.get('/index', callback)

app.get('/ab*ef', callback)   // 正则匹配

app.post('/article', (req, res) => {
  // 只有使用了bodyParser中间件，req.body才有正常值
  console.log(req.body)
  const { path, content } = req.body

  const options = {}
  const callback = (err) => {
    console.error(err)
  }

  fs.writeFile(path, content, options, callback)
  res.send('Ok')
})

// const server = app.listen(port, () => {
//   const host = server.address().address
//   const port = server.address().port
//   console.log('Now we are service at http://%s:%s', host, port)
// })
console.log()
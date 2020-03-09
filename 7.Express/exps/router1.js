const express = require('express')
const debug = require('debug')('')
const bodyParser = require('body-parser')
const router2 = require('./router2')

const app = express()
const port = 7890


// 处理典型的中间件
app.use(bodyParser.json());                         // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/bird', router2)

const server = app.listen(port, () => {
  const host = server.address().address
  const port = server.address().port
  console.log('Now we are service at http://%s:%s', host, port)
})
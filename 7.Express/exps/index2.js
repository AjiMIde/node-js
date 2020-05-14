const express = require('express')

const bodyParser = require('body-parser');

const app = express()
const port = 7890

// 处理典型的中间件
app.use(bodyParser.json());                         // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  res.send('index')
})

app.get('/userA', (req, res) => {
  res.send('userA')
})

app.get('/userB', (req, res) => {
  res.send('userB')
})

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

const server = app.listen(port, () => {
  const host = server.address().address
  const port = server.address().port
  console.log('Now we are service at http://%s:%s', host, port)
})
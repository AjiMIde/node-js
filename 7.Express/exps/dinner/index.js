const express = require('express')
const bodyParser = require('body-parser');
const fs = require('fs')

const app = express()
const port = 7890

// 处理典型的中间件
app.use(bodyParser.json())                         // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//

app.route('/dinner/menu1')
  .get(function (req, res) {
    let id = req.params.id
    if (id) {
      // return user[id]
    } else {
      // return all users : res.send(users)
    }
  })
  .post(function (req, res) {
    // push req.body.theContent to users
    res.send('post success')
  })
  .delete((req, res => {
    let id = req.params.id
    if (id) {
      // do delete id
    } else {
      // do nothing
    }
  }))

app.get('/', callback)

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

const server = app.listen(port, () => {
  const host = server.address().address
  const port = server.address().port
  console.log('Now we are service at http://%s:%s', host, port)
})
const connect = require('connect')
const app = connect()
const port = 7890

const header = {
  cl: 'Content-Length',
  ct: 'Content-Type',
  tp: 'text/plain',
  ct_tp: {
    'Content-Type': 'text/plain'
  }
}

let string = 'hello world'

// 第一个中间件
function logger(req, res, next) {
  console.log('%s,  %s', req.method, req.url)
  next()
}

// 第二个中间件
function lucy(req, res, next) {
  string = 'lucy say: ' + string
  next()
}

function admin(req, res, next) {
  switch (req.url) {
    case '/':
      res.end('you are admin')
      break
    case '/one':
      res.end('you are admin one')
      break
  }
}

// 使用挂载的中间，当访问 ip:port/world 时，会返回"world" ，而非hello
function hello(req, res, next) {
  res.setHeader(header.ct, header.tp)
  res.end(string)
}

app.use(logger)
app.use('/lucy', lucy)
app.use('/admin', admin)
app.use(hello)

app.listen(port)
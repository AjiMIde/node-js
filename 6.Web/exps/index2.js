const http = require('http')
const parse = require('url').parse
const join = require('path').join
const fs = require('fs')

const port = 7890
const root = __dirname

const server = http.createServer((req, res) => {
  let url = parse(req.url)
  console.log('url: ', url)
  console.log('pathname: ', url.pathname)
  let path = join(root, url.pathname)
  console.log('path: ', path)

  fs.stat(path, (err, stat) => {
    if (err) {
      if ('ENOENT' === err.code) {
        res.statusCode = 404
        res.end('No Found')
      } else {
        res.statusCode = 500
        res.end('Internal Server Error')
      }
    } else {
      res.setHeader('Content-Length', stat.size)
      const stream = fs.createReadStream(path)
      stream.pipe(res)
      stream.on('error', err => {
        res.statusCode = 500
        res.end('Internal Server Error')
      })
    }
  })
  res.end()
})

server.listen(port)
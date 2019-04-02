const http = require('http')
const fs = require('fs')
const url = require('url')

const head = {
  normal: {'Content-Type': 'text/html'}
}
http.createServer((req, rep) => {
  let pathName = url.parse(req.url).pathname

  fs.readFile('./' + pathName, (err, data) => {
    if (err) {
      console.log(err)
      rep.writeHead(404, head.normal)
    } else {
      rep.writeHead(200, head.normal)
      rep.write(data.toString())
    }
    rep.end()
  })
}).listen(7890)
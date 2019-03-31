const http = require('http')
const url = require('url')

function start (route) {
  http.createServer((req, rep) => {
    const pathname = url.parse(req.url).pathname
    console.log('we get the request url pathname: ' + pathname)
    const content = route(pathname)

    rep.writeHead(200, {'Content-Type': 'text/plain'})
    rep.write(content)
    rep.end()
  }).listen(8888)
  console.log('server start')
}

const server = {
  start
}

module.exports = server

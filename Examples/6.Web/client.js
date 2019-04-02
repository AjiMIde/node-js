const http = require('http')
const options = {
  host: 'localhost',
  port: '7890',
  path: '/index.html'
}

const req = http.request(options, rep => {
  let body = ''
  rep.on('data', data => {
    body += data
  })
  rep.on('end', () => {
    console.log(body)
  })
})
req.end()
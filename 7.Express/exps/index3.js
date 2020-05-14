const express = require('express')

const app = express()
const port = 7890

app.get('/', (req, res) => {
  res.send('...')
})

const server = app.listen(port, () => {
  const host = server.address().address
  const port = server.address().port
  console.log('Now we are service at http://%s:%s', host, port)
})
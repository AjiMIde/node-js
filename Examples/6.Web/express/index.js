const express = require('express')
const fs= require('fs')
const app = express()

// app.use(express.static('./docs'))
app.use(express.static('./test-1'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/test-1/' + 'index.html')
})

const server = app.listen('7890', () => {
  const host = server.address().address
  const port = server.address().port
  console.log('Now we are service at http://%s:%s', host, port)
})

const express = require('express')
const fs= require('fs')
const app = express()

app.use(express.static('../express'))

app.get('/', (req, res) => {
  console.log(__dirname + '/' + 'index.html')
  res.sendFile(__dirname + '/' + 'index.html')
})

const server = app.listen('7890', () => {
  const host = server.address().address
  const port = server.address().port
  console.log('Now we are service at http://%s:%s', host, port)
})

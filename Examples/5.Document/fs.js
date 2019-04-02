const fs = require('fs')
const buffer = new Buffer.alloc(1024)

const path = './life.txt'
const mode = 'r+'
const data = 'Life is difficult\rShow me the light'
const options = {}
const callback = (err) => {
  console.error(err)
}

fs.open(path, mode, (err, fd) => {
  if (err) return console.log(err)

  fs.read(fd, buffer, 0, buffer.length, 0, (err, bytes) => {
    if (err) return console.log(err)

    if (bytes > 0) {
      console.log(buffer.slice(0, bytes).toString())
    }
  })
  fs.close(fd, (err) => {
    if (err) return console.log(err)
  })
})

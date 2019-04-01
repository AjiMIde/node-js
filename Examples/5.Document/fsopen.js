const fs = require('fs')

const path = './life.txt'
const data = 'Life is difficult\rShow me the light'
const options = {}
const callback = (err) => {
  console.error(err)
}

fs.writeFile(path, data, options, callback)

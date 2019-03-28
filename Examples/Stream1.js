const fs = require('fs')

let path = './hello.txt'

const readFormTxt = function (path) {
  let data = ''
  const readStream = fs.createReadStream(path)
  readStream.setEncoding('UTF8')

  readStream.on('data', chunk => {
    console.log('---' + chunk)
    data += chunk
  })

  readStream.on('end', () => {
    console.log(data)
  })

  readStream.on('error', (err) => {
    console.log(err.track)
  })
}

const writeToTxt = function (path) {
  const writeStream = fs.createWriteStream(path)
  let data = 'Ni hao world\rlets go to do it'
  writeStream.write(data, 'UTF8')
  writeStream.end()

  writeStream.on('finish', () => {
    console.log('write success')
  })

  writeStream.on('error', (err) => {
    console.log('write fail', err.track)
  })
}

writeToTxt(path)

// 流 Stream
// Stream 是一个抽象接口，Node 中有很多对象实现了这个接口，如 http 请求发起的 request 对象就是一个流
// Stream 有 4 种类型
// Readable/Writable/Duplex(可读可写)/Transform（操作被写入的数据，然后读出结果）
// ** 所有 Stream 的对象都是 EventEmitter 的实例，故，常用的事件有：
// data 当有数据可读时触发
// end 没有更多数据可读时触发
// error 接收、写入时发生错误时触发
// finish 所有数据写入底层系统时触发
//
var log = (str) => {
  console.log('\r\n' + str)
}

log('Use Stream to read txt Data')

var path = './assets/HelloWorld.txt'
var fs = require('fs')
var readStream = fs.createReadStream(path)
var data = ''

readStream.setEncoding('UTF8')

log('Begin handler Event')

readStream.on('data', (chunk) => {
  log('chunk: -- ' + chunk + '--')
  data += chunk
})

readStream.on('end', () => {
  console.log(data)
})

readStream.on('error', (err) => {
  console.log(err.stack)
})

//
//
log('Use Stream to write sth in txt Data')

path = './assets/HelloNode.txt'
data = 'Hello Node. \r\n What a Rubbish Day!'

var writeStream = fs.createWriteStream(path)
writeStream.write(data, 'UTF8')
writeStream.end()

writeStream.on('finish', () => {
  log('Finish Write')
})

writeStream.on('error', (err) => {
  log(err.stack)
})



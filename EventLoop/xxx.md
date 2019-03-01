// 事件循环

console.log('事件循环，观察者模式 Events 模块 \r\n')

var events = require('events')
var eventEmitter = new events.EventEmitter()
0
// 处理程序
var connectHandler = () => {
  console.log('响应：连接成功。。')
}

eventEmitter.on('connection', connectHandler)

console.log('Begin connect')
console.log('Connecting....')
setTimeout(() => {
  eventEmitter.emit('connection')
}, 3000)


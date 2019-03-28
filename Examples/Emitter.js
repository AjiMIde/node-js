const EventEmitter = require('events').EventEmitter

const event = new EventEmitter()

event.on('eventEat', function (...rest) {
  console.log('event eat be called, eating: ', ...rest)
})

setTimeout(() => {
  let i = Math.floor(Math.random() * 2)
  try {
    if (i === 0) {
      event.emit('eventEat', 'rice', 'meat', 'orange')
    } else {
      event.emit('error', 'your baby is so naughty, it does"t wanna to eat')
    }
  } catch (e) {
    console.error(e)
  }
}, 1000)

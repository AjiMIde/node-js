const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)

var users = []
const UserHandler = {
  add (username, id) {
    users.push({username, id: id})
  },
  remove (id) {
    const index = users.findIndex(item => {
      return item.id === id
    })
    users.splice(index, 1)
  },
  getOne(id) {
    const user = users.find(item => {
      return item.id === id
    })
    return user || {username: 'fzs'}
  },
  getAll () {
    return users
  }
}

io.on('connection', (socket) => {
  console.log('Connected: user connect, id:', socket.id)

  socket.on('login', username => {
    UserHandler.add(username, socket.id)
    io.emit('response-user-add', {username, id: socket.id})
    console.log('Login: username: ', username, '  id: ', socket.id, ' currentUsers: ', users)
  })

  socket.on('send-msg', msg => {
    const user = UserHandler.getOne(socket.id)
    io.emit('response-msg', {username: user.username, msg})
    console.log('Get msg: ', msg, socket.id, user.username)
  })

  socket.on('disconnect', () => {
    const user = UserHandler.getOne(socket.id)
    console.log('Some disconnect: ', ' id: ', socket.id)
    UserHandler.remove(socket.id)
    io.emit('response-leave', {username: user.username})
  })
})

http.listen(3300, () => {
  console.log('Listen at port: 3300')
})

const connect = require('connect')
const parse = require('url').parse
const app = connect()
const port = 7890

const users = ['cat', 'dog', 'fish']
const routers = {
  GET: {
    '/users': (req, res) => {
      res.end(users.join(','))
    },
    '/users/:id': (req, res, id) => {
      res.end(users[id])
    }
  },
  DELETE: {
    '/users/:id': (req, res, id) => {
      let user = users.splice(id, 1)[0]
      res.end(user + ' now list:' + users.join(','))
    }
  }
}

// 构造路由中间件

function routerMid (routers) {
  return function (req, res, next) {
    if (!!routers[req.method] === false) { // 如果请求的http方法中没有在配置路由的方法中
      next()
      return
    }
    let subRouters = routers[req.method]
    let url = parse(req.url)
    let paths = Object.keys(subRouters)
    paths.map(path => {
      let fn = subRouters[path]
    })
  }
}
app.listen(port)

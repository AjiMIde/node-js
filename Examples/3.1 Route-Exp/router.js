const Router = {
  route (pathname) {
    console.log('the request path name is : ' + pathname)
    if (pathname === '/a') {
      return 'The world is running with apple'
    } else if (pathname === '/b') {
      return 'The world is running with banana'
    } else {
      return 'The world is running with nothing'
    }
  }
}

module.exports = Router
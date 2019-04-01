const util = require('util')

function base () {
  this.name = 'base'
  this.hello = () => {
    console.log(this.name)
  }
  this.world = function () {
    console.log(this.name)
  }
}

var b = new base()
console.log(
  util.inspect(b, null, true)
)

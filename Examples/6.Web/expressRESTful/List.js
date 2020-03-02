const fs = require('fs')

class List {
  constructor () {
    this.path = __dirname + '/' + 'list.json'
    this.encode = 'utf8'
  }

  getAll (callback) {
    fs.readFile(this.path, this.encode, (err, data) => {
      const result = {
        code: 0,
        success: true,
        data: JSON.parse(data)
      }
      callback(result)
    })
  }

  getOne (id, callback) {
    fs.readFile(this.path, this.encode, (err, data) => {
      const array = JSON.parse(data)
      const object = array.data.find(item => {
        return item.id === id
      })
      const result = {
        code: 0,
        success: true,
        data: object
      }
      callback(result)
    })
  }

  delOne (id, callback) {
    fs.readFile(this.path, this.encode, (err, data) => {
      const array = JSON.parse(data)
      const index = array.data.findIndex(item => {
        return item.id === id
      })
      if (index !== -1) {
        array.data.splice(index, 1)
      }
      fs.writeFile(this.path, JSON.stringify(array), this.encode, (err, data) => {
        callback({code: 0, success: true, data: []})
      })
    })
  }

  addOne (params, callback) {
    fs.readFile(this.path, this.encode, (err, data) => {
      const array = JSON.parse(data)
      array.data.push(params)
      fs.writeFile(this.path, JSON.stringify(array), this.encode, (err, data) => {
        callback({code: 0, success: true, data: []})
      })
    })
  }

}

module.exports = List
const fs = require('fs-extra')


class fsObj {
  constructor (path) {
    this.path = path
  }
  get () {
    const data = {
      code: 0,
      success: true,
      msg: '',
      data: []
    }
    fs.readJson(path, (err, packageObj) => {
      if (err) {
        data.code = -1
        data.success = false
        if (err.code === 'ENOIENT') {
          data.msg = '找不到文件或没有内容'
        } else {
          data.msg = '系统错误'
        }
      } else {
        data.data = packageObj.data
      }
    })
  },

}
exports.menu1 = {
  get () {

  }
}

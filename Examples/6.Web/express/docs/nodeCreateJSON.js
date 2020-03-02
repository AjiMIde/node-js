// 目录生成器
const fs = require('fs')
const mainSummaryData = ''

// Update the summary to the main summary
const createSummaryJson = (title, content) => {
  let array = title.split('/')
  title = array[1] + ' ' + array[2].replace('\.md', '')
  mainSummaryData += '#### ' + title + '\r\n' + content + '\r\n\r\n'
}

const writeSummary = function (file) {
  fs.readFile(file, (err, data) => {
    if (err) {
      return console.error(err)
    }
    data = data.toString()
    var summary = data.match(/#####.*/g)
    var summaryStr = ''
    var i = 1
    if (summary && summary.length > 0) {
      summary.forEach(item => {
        item = '' + i + '.' + item.replace(/#/g, '')
        summaryStr += (item + '\r\n')
        i++
      })
    }
    // todo 将上面创建好的目录填到文件里面去，并更到主目录
    data = data.replace(/=====summary(\r\n*.*\/*)*=====/, '=====summary\r\n\r\n' + summaryStr + '\r\n=====')

    if (!!data === false || data.length < 30) {
      console.error('some fatal error!!!!!!')
    } else {
      // todo 更新到主目录，由于这里是一个回调的过程，需要使用 promise 或闭包 来做
      writeMainSummary(file, summaryStr)

      fs.writeFile(file, data, (err) => {
        if (err) {
          return console.error(err)
        }
        console.log('写入成功！目录生成成功！')
      })
    }
  })
}

var directoryArray = [
  './css',
  './ffi',
  './html',
  './js',
  './tools',
  './web',
  './wechat'
]

console.log("0. 遍历所有目录，下面的所有文件")
let n = 1
directoryArray.forEach(item => {
  console.log(item)
  n++
  setTimeout(() => {
    //
    fs.readdir(item, function (err, files) {
      if (err) {
        return console.error(err)
      }
      files.forEach(function (file) {
        console.log('文件: ' + item + '/' + file)
        writeSummary(item + '/' + file)
      })
      console.log('------------')
    })
    //
  }, n * 200)
})

// Update the summary to the main summary
setTimeout(() => {
  let mainSummaryUrl = './Summaryyy.md'
  fs.readFile(mainSummaryUrl, (err, data) => {
    if (err) {
      console.error('读主目录文件失败')
      console.error(err)
    } else {
      fs.writeFile(mainSummaryUrl, mainSummaryData, err => {
        if (err) {
          console.error('写主目录文件失败')
          console.error(err)
        } else {
          console.log('写入主目录成功')
        }
      })
    }
  })
}, 2000)

console.log('1, 遍历所有文件 \t\r')

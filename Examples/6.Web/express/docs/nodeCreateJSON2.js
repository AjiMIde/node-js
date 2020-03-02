// 目录生成器
const fs = require('fs')
const dir = 'H:/Aji/My Music'

/**
 * 读取 dir 下面的文件，如果是 directory，则递归，如果是file，则返回，
 * @param dir
 * @returns {Array}
 */
const readDir = (dir) => {
  const dirs = fs.readdirSync(dir)
  const array = []
  if (dirs.length > 0) {
    dirs.forEach(function (file) {
      let filePath = dir + '/' + file
      let sts = fs.statSync(filePath)
      if (sts.isDirectory()) {
        array.push({ text: file, path: filePath, children: readDir(filePath) })
      } else {
        array.push({ text: file, path: filePath })
      }
    })
  }
  return array
}

const content = JSON.stringify(readDir(dir))
console.log(content)

fs.writeFile('./xx.json', content, (err) => {
  if (err) {
    return console.error(err)
  }
  console.log('写入成功！目录生成成功！')
})

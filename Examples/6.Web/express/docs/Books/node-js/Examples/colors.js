var colors = require('colors');

console.log('hello'.green)
console.log('i like cake and pies'.underline.red) // 多重样式重叠
console.log('inverse the color'.inverse)
console.log('OMG Rainbows!'.rainbow.dim)
console.log('Run the trap'.trap.dim)

colors.setTheme({
  aji: ['red', 'bold', 'underline']
});

console.log('This is my private'.dim)
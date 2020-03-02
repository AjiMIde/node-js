function promiseA (value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('???' + value)
    }, 1000)
  })
}

async function getValue () {
  try {
    const value = await promiseA('xxx')
    console.log(value)
    console.log('hello')
    return value
  } catch (e) {
    console.log('???', e)
  }
}
getValue()

// getValue().then(value => {
//   console.log(',,', value)
// }, error => {
//   console.log('vv', error)
// })
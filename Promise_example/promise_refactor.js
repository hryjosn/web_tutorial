let username = 'nothing'
function setName () {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        username = 'Henry'
        console.log('printName time>', new Date().toLocaleTimeString())
        console.log('The user name was set')
        resolve('setName successfully')
      }, 2000)
    } catch (e) {
      reject(e)
    }
  })
}
function printName () {
  console.log('printName time>', new Date().toLocaleTimeString())
  console.log(`Hi, My name is ${username}`)
}
async function init () {
    console.log("init start>>>", new Date().toLocaleTimeString())
  const result = await setName()
  console.log('result>>', result)
  printName()
}
init()

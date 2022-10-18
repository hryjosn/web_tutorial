let username = 'nothing'
const setName = () => new Promise((resolve, reject) => {
    try {
        setTimeout(() => {
          username = 'Henry'
          console.log('setName time>', new Date().toLocaleTimeString())
          console.log('The user name was set')
          resolve('setName successfully')
        }, 2000)
      } catch (e) {
        reject(e)
      }
  })
  

const printName =()=>{
    console.log('printName time>', new Date().toLocaleTimeString())
    console.log(`Hi, My name is ${username}`)
}
const init = async ()=>{
    console.log("init start>>>", new Date().toLocaleTimeString())
    const result = await setName() //receive
    console.log('result>>', result)
    printName()
}

init()

let username = "nothing";
function setName(){
    setTimeout(function(){
        username = "Henry"
        console.log(new Date().toLocaleTimeString())
        console.log("The user name was set")
    },2000)
}
function printName(){
    console.log(new Date().toLocaleTimeString())
    console.log(`Hi, My name is ${username}`)
}
setName()
printName()

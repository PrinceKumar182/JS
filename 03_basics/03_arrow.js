// const user={
//     username:"prince",
//     price:999,

//     welcomeMessage:function(){
//         console.log(`${this.username}, welcome to website`)
//     }
// }

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this)

// this can only be used inside an Object, it can't be used inside a function

// function a(){
//     let username="Pk"
//     console.log(this.username)
// }
// a()

//below is the arrow function
const hc=()=>{
    let username="Pk"
    console.log(this)
}

hc()


// const addTwo=(num1,num2)=>{
//     return num1+num2             // Explicit return
// }

// const addTwo=(num1,num2)=num1+num2       //Implicit

const addTwo=(num1,num2)={(username:"Prince")}
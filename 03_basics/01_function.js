function sayMyName(){
    console.log("prince")
}
sayMyName()

function addTwoNumber(num1,num2){ // in this line num1 and num2 are parameter
    console.log(num1+num2);
}
addTwoNumber(3,5) //here 3 and 5 are arguments

function addTwoNumber(num1,num2){ // in this line num1 and num2 are parameter
    // let result=num1+num2
    // return result

    return num1+num2
}

function loginUserName(username){
    console.log(loginUserName())
}
loginUserName()
loginUserName("Prince")

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,300,300,400))

const user={
    username:"Prince",
    price:199
}
function handleaobject(anyObj){
    console.log(anyObj.username)
}
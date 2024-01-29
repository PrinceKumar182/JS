// Primitive
// 7 types: String, Number , Boolean, null, undefined, Symbol, BigInt

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId)
//Reference (Non Prrimitive)
// Array, Objects, Functions

//Array
const heros=["Prince", "Shakiman"]
//Object
let myObj={
    name: "Prince",
    age:21,
}
//Function
const myFunction=function(){
    console.log("Hello World");
}
// if we check typeof for null, then it will give Object as output
console.log(typeof myFunction)
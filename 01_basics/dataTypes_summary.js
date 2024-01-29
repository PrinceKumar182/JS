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

// ++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap(Non-primitive)


// If we take any value in stack then we gets its copy while in heap we get its reference
let myName="PKumar"

let anotherName=myName
anotherName="Gaurav"
console.log(myName)
console.log(anotherName)

let user={
    email: "prince21182@iiitd.ac.in",
    Name: "Prince"
}
let user2=user
console.log(user2)
user2.email="Prince"
console.log(user2)
console.log(user.email)
console.log(user2.email)

// In the above case we found that when we changed the email id of user 2 the email of user is also changed this shows that it points to the value stored in heap
//singleton
//object.create
//object literals
const mysym=Symbol("key1")
const JsUser={
    name:"Prince",
    age:20,
    location:'Gaya',
    [mysym]:"mykey1",//this is the method to use key as the symbol
    email:"prince21182@iiitd.ac.in"
}
console.log(JsUser.name)
console.log(JsUser["email","age"])
console.log(JsUser[mysym])

JsUser.email="prince@gmail.com"
// Object.freeze(JsUser) //no data will be updated after this


JsUser.greeting=function(){
    console.log("Hello JS user")
}
JsUser.greetingTwo=function(){
    console.log(`Hello JS user,${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())
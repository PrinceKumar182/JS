console.log(2>1)
//or any other comparision


console.log("2">1)  //t because of dataType conversion
console.log(null>0)  //f
console.log(null==0) //f
console.log(null>=0) //true

console.log(undefined>0)  //f

console.log("2"===2) // === is used for strict check, if == it does not check the datatype
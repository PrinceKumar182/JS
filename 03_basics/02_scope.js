var c=100                 //global scope

if(true){            //block scope
    let a=10
    const b=20
    var c=30
}
// console.log(a)
// console.log(b)
console.log(c)


function addone(num){
    return num+1
}
addTwo(6)  // it will give error 

const addTwo=function(num){  //the function value is stored in variable addTwo
    return num+2
}

addTwo(4) // it will run b/c it is calling after assigning value
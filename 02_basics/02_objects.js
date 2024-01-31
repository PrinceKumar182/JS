// const tinderUser=new object()
const tinderUser={}
tinderUser.id="24bg"
tinderUser.name="Aman"
tinderUser.isLoggedIn=false
//console.log(tinderUser)
const regularUser={
    email:"aman@hc.in",
    fullName:{
        userFullName:{
            firstName:"Prince",
            lastName:"Kumar",

        }
    }
}
console.log(regularUser.fullName)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
// const obj3={obj1,obj2}
// console.log(obj3)

console.log(Object.assign({},obj1,obj2))// it is not cumpulsory to use {} , if we use it then all the values are stored in new array. in other cases all data are stored in the first object


// Object.keys()
// Object.values()
// Object.entries()

console.log(tinderUser.hasOwnProperty('isLoggedIn'));//checks for the keyword



//Destructuring
const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"Prince"
}

const {courseInstructor:Instructor}=course
console.log(Instructor)


//Json structure
// {
    
//     "name":"Prince",
//     "coursename":"js in hindi"
    
// }

[
    {},
    {}
]
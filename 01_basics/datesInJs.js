// Dates

let myDate=new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())

// let myCreatedDate=new Date(2023,0,23)
// console.log(myCreatedDate.toLocaleString())

let myCreatedDate=new Date("1-14-2023")

console.log(myCreatedDate.toLocaleString())

let myTimeStamp=Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())
// It gives the tim in milli seconds
console.log(Date.now())

newDate.toLocaleString('default',{
    weekday:"long",
})

// `${newDate.getDay()} an the time`
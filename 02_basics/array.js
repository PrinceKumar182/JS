// arrays

const myArr=[0,1,2,3, true,"Prince"]
// Shallow and deep copy
// shallow capy is like heap if we modify the data in the copy version then the data will also be modified in the main File.

const myArr2=new Array(1,3,4)
console.log(myArr2)
//Array methods
myArr2.push(6)
myArr2.pop()
myArr2.unshift(9)  //It added element at the begining
console.log(myArr2)
myArr2.shift()  //pops 1st element
console.log(myArr2)
console.log(myArr2.includes(9))
console.log(myArr2.indexOf(3))

const newArr=myArr2.join()
console.log(myArr2)
console.log(typeof(newArr))


//slice, splice
//slice
console.log("A",myArr2)
const myn1=myArr2.slice(1,3)
console.log(myn1)
console.log(myArr2)


//splice
console.log("B", myArr2)
const mny2=myArr2.splice(1,3)
console.log(mny2)
console.log(myArr2)

// Splice removes the element permanently

// _________________________________________________________________
const maarble_heros=["thor", "Ironman","Spiderman"]
const dc_heros=["superman","flash","batman"]
// maarble_heros.push(dc_heros)
// console.log(maarble_heros)

const all_hero=maarble_heros.concat(dc_heros)
console.log(all_hero)

//spread operator
const all_new=[...maarble_heros,...dc_heros]
console.log(all_new)

const another_array=[1,2,3,[4,5,6],7,[6,7],9]
const real_another_array=another_array.flat(Infinity )


console.log(Array.isArray("Prince")) //false
console.log(Array.from("Prince")) 

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))
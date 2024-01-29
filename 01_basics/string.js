const name="Prince"
const repoCount=50
console.log(name+repoCount)

// the below is used the most
console.log(`Hello my name is ${name} and my age is ${20}`)

const gameName=new String('Prince')
console.log(gameName)
console.log(gameName)
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('P'))

const newString=gameName.substring(0,5)
console.log(newString)
const anotherString=gameName.slice(-5,-3)
console.log(anotherString)
const newName="          Prince       "
console.log(newName)
console.log(newName.trim())
console.log(newName.replace('e','i'))

// To convert string to array
const gameTheory="Hc-HardwareCacha"
console.log(gameTheory.split('-'))
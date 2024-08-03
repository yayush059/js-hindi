const name = "Ayush"
const repoCount = 50

//console.log(name + repoCount + " Value")


// Another option of string concatenation, is string interpolation,
// which substitutes values of variables into placeholders in a string.
console.log(`my name is ${name} and my repo count is ${repoCount}`)

// how to declare string 

const gamename = new String('bgmi-India')
const oldgamename = "pubg"
console.log(oldgamename[0])
console.log(oldgamename.length)
console.log(oldgamename.endsWith('g'))
console.log(oldgamename.endsWith('f'))
console.log(oldgamename.includes('b'))
const uprcase = oldgamename.toUpperCase()
console.log(oldgamename)
console.log(uprcase)
console.log(oldgamename.charAt(2))
console.log(gamename.indexOf('i'))

const newString = gamename.substring(0,2)   // doesnot follow negative values
console.log(newString)

const anotherString = gamename.slice(-7,6)
console.log(anotherString)

const newString2 = "    ayush yadav       "
console.log(newString2)
console.log(newString2.length)
console.log(newString2.trim().length)
console.log(newString2.trim())

const url = "https://yayush yadav vitap"
console.log(url.replace(' ','-'))

const string3 = "my name is ayush yadav"
console.log(string3.split(" "))


const name="shubhi"
const repoCount=2
// console.log(name+repoCount+"value");

console.log(`hello my name is ${name} & my repo count is ${repoCount}`);

const gameName=new String("shubhi..iii..D.i...")
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName)
console.log(gameName.charAt(2))
console.log(gameName.indexOf('u'))

const newString=gameName.substring(0,5) // index 5 will be excliuded "shubh"
console.log(newString)

const anotherString=gameName.slice(-8,4)
console.log(anotherString)

const newStrOne="    shubhi   "
console.log(newStrOne)
console.log(newStrOne.trim())

const url="https://shubhi.com/shubhi%21D"
const a=url.replace('%21','-')
console.log(a)

console.log(a.includes('dhiman'))

console.log(gameName.split('..'))
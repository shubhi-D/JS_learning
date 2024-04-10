/* Two types of data-
    1)Premitive(call by value):-7 categories- String,Number,Boolean,null,undefined,
    symbol:used to make value unique,BigInt
      
    2)Non-Premitive:-(refrence type):= array,objects,functions


    JavaScript : It is dynamically typed language.


*/

const score=100
const scoreValue=10.3
const isLog=false

let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId)

const no=555555555555555555555555n // by adding n at the last, converted to bigInt as number is very big


const heroes=["shaktiman","naagraj","doga"];

let myObj={
    name: "shubhi",
    age: 21,
}

const myFunction =function(){
    console.log("hello world")
}

console.log(typeof myObj)

console.log(myFunction)
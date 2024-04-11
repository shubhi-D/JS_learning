 const score=100
 console.log(score)
 const balance =new  Number(200) // typecast to Number
console.log(balance)

 console.log(balance.toString().length)
 console.log(balance.toFixed(2))

const otherNum=1123.88888
 console.log(`This is to see precision upto 3 : ${otherNum.toPrecision(3)}`)

 const hundreds=100000;
 console.log(hundreds.toLocaleString())
 console.log(hundreds.toLocaleString('en-IN'))

//************** MATHS *********************/

 const number=1000;
 console.log(Math.abs(-4))
 console.log(Math.round(4.9))
 console.log(Math.ceil(4.2))
console.log(Math.floor(5.9))
 console.log(Math.ceil(5.9))

const arrNum=Number[5,6,1,0]
 console.log(Math.min(4,0,1,5))
 console.log(Math.max(4,0,1,5))
console.log(Math.random()) // gives value between 0 &1
console.log(Math.floor(Math.random()*10) + 1) 

const min=10, max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min)

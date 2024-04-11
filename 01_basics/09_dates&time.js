// Dates

// let date=new Date()
// //console.log(date)
// console.log(date.toString())
// console.log(date.toLocaleDateString())
// console.log(date.toLocaleString())
// console.log(typeof date)

//let myCreatedDate=new Date(2024,0,24)
//let myCreatedDate=new Date("2024-01-15")
// let myCreatedDate=new Date("01-14-2025")
// //console.log(myCreatedDate.toDateString())

// let myTimeStamp=Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(myTimeStamp/1000))

let newDate=new Date()
console.log(newDate.getMonth())
console.log(newDate.getDay())

newDate.toLocaleString('default',{
    weekday:"long",
    timeZone:"en-IN"
})


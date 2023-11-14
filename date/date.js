let myDate = new Date()

console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toTimeString())
console.log(typeof myDate)

let date = new Date(2023,0,23);
let date2 = new Date(2023,0,23,5,3,4);
console.log(date2.toLocaleString())
console.log(date.toDateString())




let myTimeStamp = Date.now()
console.log(myTimeStamp)
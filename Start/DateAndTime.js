// Date and time in js
// Date and declare and store
let presentDate=new Date()
console.log(presentDate)
console.log(presentDate.toString())
console.log(presentDate.toLocaleDateString())
console.log(typeof presentDate);
// object is op
let myCreatedDate=new Date(2024,0,22)
console.log(myCreatedDate.toDateString())
// Mon Jan 22 2024
// month in js starts form 1

// we generally follow the month day year
// console.log(presentDate.getTime())
// console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000))


// mostly used function new
presentDate.toLocaleString('defalut',{
    weekday:"long",
})
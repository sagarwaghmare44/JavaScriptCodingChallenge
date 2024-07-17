// Primitive 
//7 types:String,number,boolean,null,undefined,symbol,BigInt
const score=100
const scoreValue=100.4

const isLoggedIn=false
const outsideTemp=null
let userEmail=undefined

const id=Symbol('123')
const anotherId=Symbol('123')


console.log(id===anotherId);

const bigNumber=345969859843n
console.log(typeof bigNumber)

// Reference (Non primitive)

// Array,objects,Functions

const heros=["IronMan","Hulk","CaptainAmerica","DoctorStrange"]
console.log(heros)
let info={
    name:"Shraddha",
    age:21
}
//info is object

const myFunction=function(){
    console.log("Hello Shraddha")
}
console.log(typeof myFunction)
myFunction()
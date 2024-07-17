// memory work in javascript
//There are two types of memory:
// Stack(primitive) and heap(non-primitive)

let myFullName="SagarSuryakantWaghmare"
let anotherName=myFullName
anotherName="Ultima"

console.log(myFullName)
console.log(anotherName)

let userOne={
    email:"Sagarwaghmare@gmail.com",
    Name:"Sagar"
}
let userTwo=userOne
userTwo.email="Wind@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)
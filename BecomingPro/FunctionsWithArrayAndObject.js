// This ... is called as the rest operator
function calculateCartPrice(...num1){
    // This convert into the array
    return num1
}
console.log(calculateCartPrice(4000,3000,1000,2000))

const user={
    username:"Sagar",
    id:"1"
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and id is ${anyobject.id} `)
}
// handleObject(user)
handleObject({
    username:"shraddha",
    id:"4"
})
const myNewArray=[200,400,100,300]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))
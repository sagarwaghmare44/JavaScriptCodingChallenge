// singleton-using the constructor
// generally there is no singleton

// Object.create-// singleton-using the constructor
// Objects literals
// In the form of the key and values
const mySym=Symbol("key1")
const JsUser={
    name:"Sagar","fullname":"SagarSuryakantWaghmare",
    email:"sagarwaghmare44@gmail.com",
    [mySym]:"key1",
    age:21,
    sem:5,
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
// console.log(JsUser)
// console.log(JsUser.email)
// console.log(JsUser["fullname"])
// console.log(JsUser[mySym])
// // Then not change anything after the freeze
// Object.freeze(JsUser)
// JsUser.email="Shraddha@gmail.com"
// console.log(JsUser.email)

// functions is not discriminated treated as the variable
JsUser.greeting=function(){
    console.log("Hello Js user")
}
console.log(JsUser.greeting())
// This gives the output as undefined and then we treated it properly
// we have to make the function for this
// here we get the output ass the hello js user
console.log(JsUser.greeting)
// [Function (anonymous)]
// This gives the output as the functions asynomus
JsUser.greet=function(){
    console.log(`Hello Js user,${this.name}`);
}
console.log(JsUser.greet())


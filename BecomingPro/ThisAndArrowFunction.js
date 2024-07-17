const user={
    userName:"Sagar",
    price:999,
    welcomeMessage:function(){
        // Then we have to use the this for the current contest
        console.log(`${this.userName} welcome to website.`)
    }
}
// user.welcomeMessage()
// user.username="Shraddha"
// Then it cannot change because we use the this keyword
// user.welcomeMessage()
// function chai(){
//     console.log(this)
// }

// const chai=function(){
//     let username="Sagar"
//     console.log(this.userName)
// }

// const chai=()=>{
//     let username="Sagar"
//     console.log(this.userName)
// }
// chai()

// const addTwo=(num1,num2)=>{
//     return num1+num2 //explicitly
// } 

// we write in the curly brackets the write the return and we are not the simply write in same line
const addTwo=(num1,num2)=>num1+num2

console.log(addTwo(4,2))

const myArray=[2,4,6,8]

function sayMyName(){console.log("S")
console.log("H")
console.log("R")
console.log("A")
console.log("D")
console.log("D")
console.log("H")
console.log("A")
}
// sayMyName()

// Num1 and num2 while defining the 
function addTwoNumbers(num1,num2){
   console.log(num1+num2)
}
addTwoNumbers()//This give the output of the NAN
addTwoNumbers(4,2)
addTwoNumbers(3,"4")//output for this 34
// 8

// wap to squaring the numbers

//Here we simply square the array numbers

function square(x){
    console.log(x*x)
}
square(4)

// Function to greet the user
const user={
    FistName:"Sagar",
    LastName:"Waghmare"
}
function greet(){
    console.log(`Hello ,Welcome to my website ${user.FistName}`)
}
greet()
// We have to use the return data type to store the result

// function addTwoNumbers(num1,num2){
//     let result= num1+num2
//     //we cannot do anything after the return 
//     // not the printing also
//     return result;
//  }
//  const result=addTwoNumbers(4,5)
//  console.log('result:',result);

function loginUserMessage(username){
    if(username===undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage(""))
console.log(loginUserMessage("sagar"))
 
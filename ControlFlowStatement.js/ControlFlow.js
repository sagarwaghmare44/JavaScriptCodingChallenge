// if 
// if(true){
//     console.log("Hello guys")
// }
//simple true in the parentheses then it goes in.
// const isUserLogged=true
// if(isUserLogged){
//     console.log("Your are logged in.")
// }
//There are also many comparision
// <,>,<=,>=,==

// if(2!=3){
//     console.log("Executed")
// }
// const temperature=44;
// if(temperature<50){
//     console.log("Temp is less than 50")
// }
// else{
//     console.log("Temp is greater than 50 or equal to 50")
// }
// const score=101
// if (score>100){
//     const power="fly"
//     console.log(`User power :${power}`);
// }
// console.log(`User power:${power}`)

// const balance=1000
// if(balance>500){
//     console.log('Test');
    
// }


// If we have to check the multiple case then we use the switch case
// and we also use the else if ladder

// const isUserLogged=true;
// const debitCard=true;
// // And we use the && statement as we want
// if(isUserLogged && debitCard){
//     console.log("Then the user can buy the courses")
// }
const loggedInFromGoogle=false;
const loggedInFromMicrosoft=true;
if(loggedInFromGoogle||loggedInFromMicrosoft){
    console.log("User logged In")
}
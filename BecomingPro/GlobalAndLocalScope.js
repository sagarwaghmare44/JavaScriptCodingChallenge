// Global And local Scope
// var c=300
let a=300
if(true){
    let a=10
    const b=20
    var c=30
}
// This gives the error for of the scopes
// console.log(a)

//in this concept of the local and global scope
// console.log(b)
// console.log(c)

// there is also concept of the scope also
function one(){
    const username="Sagar"
    function two(){
        const website="Youtube"
        console.log(username)
    }
    // console.log(website)
    two()
}
one()

if(true){
    const username="Sagar"
    if(username==="Sagar"){
        const website="Youtube"
        console.log(website +username)
    }
}
//we declare a function with the varibale then it give the error when we call first

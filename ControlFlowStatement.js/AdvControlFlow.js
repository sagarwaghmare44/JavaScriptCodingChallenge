// Switch case

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }
// const month = 3
// switch (month) {
//     case 1:
//         console.log("January")
//         break;
//     case 2:
//         console.log("February")
//         break;
//     case 3:
//         console.log("March")
//         break;
//     case 4:
//         console.log("April")
//         break;
//     case 5:
//         console.log("May")
//         break;
//     case 6:
//         console.log("June")
//         break;
//     case 7:
//         console.log("July")
//         break;
//     case 8:
//         console.log("August")
//         break;
//     case 9:
//         console.log("September")
//         break;
//     case 10:
//         console.log("October")
//         break;
//     case 11:
//         console.log("November")
//         break;
//     case 12:
//         console.log("December")
//         break;
//     default:
//         console.log("Invalid month")
// }

// We can also compare the string also in the value

// falsy values

// false,0,-0,Bigint 0n,"",null,undefined,NaN

// Truly values

//"0",'false'," ",[],{},function(){}

// if(userEmail.length==0){
//     console.log("Array is empty")
// }

const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty")
}

// Nullish coalescing operator(??):null undefined

let val1;
// val1=5??10
// val1=null??10
// val1=undefined??15
val1=null??10??20
console.log(val1)

//terniary operator

//condition ?true:false
const ice=10
ice>4?console.log("Ice cream"):console.log("No ice cream")

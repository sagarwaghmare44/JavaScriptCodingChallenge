// IIFE
//Immediately Invoked Function Expressions
// function chai(){
//     console.log(`Db Connected`)
// }
// chai()

(function chai(){
    console.log(`Db Connected`)
})();

// mainly  we use the ';' for the IIFE


(function aurCode(){
 console.log("Db connected two")
})();

((name)=>{
    console.log(`Db connected to ${name}`)
   })('Sagar')
// array of the basics
// const myArr=[0,1,2,4,5,true,"Sagar"];
// Array also have the different data type
const myArr=[0,1,2,4,5];
// Array is zero based indexed
const myHeores=["Iron man","spider-man"]
const myArr2=new Array(1,2,3,4)
console.log(myArr[0])
console.log('Length:'+ myArr.length);

// Array methods

// myArr.push(8)
// myArr.push(18)
// // Array is 8 end
// console.log(myArr)
// myArr.pop()//remove the last element


// myArr.unshift(88)//add at the first
// console.log(myArr)
// myArr.shift()//remove at the first
// console.log(myArr)

// console.log(myArr.includes(4))
// console.log(myArr.indexOf(5))//if not present gives output -1
// console.log(myArr)


// const newArr=myArr.join()//combine and convert to string
// console.log(myArr)
// console.log(newArr)

// slice and splice
console.log("A",myArr)
const my=myArr.slice(1,3)//not manipulate
console.log(my)
console.log("B",myArr)
console.log("A",myArr)
const my1=myArr.splice(1,3)//mulipulate the original array
console.log(my1)
console.log("B",myArr)
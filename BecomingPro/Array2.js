// const myArr=[,2,3,4]
// // [ <1 empty item>, 2, 3, 4 ]
// console.log(myArr)

const marvel_heros=["Thor","Iron man"]
const dc=["superman","Batman"]
// marvel_heros.push(dc)
// // This gives the output of the array into array
// console.log(marvel_heros)
// const allHeroes=marvel_heros.concat(dc)
// console.log(allHeroes)


//This is called as the spread operator
// const all_new_heroes=[...marvel_heros,...dc]
// console.log(all_new_heroes)

const another_array=[1,2,3,4,[5,6],[4,6]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array)
// [
//     1, 2, 3, 4,
//     5, 6, 4, 6
//   ]

console.log(Array.isArray("Sagar"))
console.log(Array.from("Sagar"))

let score1=100;
let score2=44;
let score3=50;
console.log(Array.of(score1,score2,score3))
// [ 100, 44, 50 ]

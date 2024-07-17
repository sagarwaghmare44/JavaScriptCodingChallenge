// const shahu=new Object()
const shasa={}
console.log(shasa)
shasa.id="44"
shasa.name="Sagar"
shasa.isLoggedIn=false;

const regularUser={
    email:"sagarwaghmare@gmail.com",
    fullname:{
        userfullname:{
            firstName:"sagar",
            lastName:"waghmare"
        }
    }
}
console.log(regularUser)
console.log(regularUser.fullname)
console.log(regularUser.fullname.userfullname.firstName)

const obj1={1:"s",2:"a"}
const obj2={3:"s",4:"h"}
// const obj3=Object.assign(obj1,obj2)
// for spreading the object and combining it
const obj3={...obj1,...obj2}
console.log(obj3)


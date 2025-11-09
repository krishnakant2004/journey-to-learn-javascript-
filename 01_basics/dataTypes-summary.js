//primitive
// Number , Boolean , String , BigInt , null , undefine


// Reference (non primitive)
 
//Array , objects , Functions

const myArr = ["krishnakant" , 22 , "App Developer"];
const myObj = {
    name : "krishnakant",
    age : 22,
    profession : "App Developer"
}
console.log(typeof myArr) //object
console.table([typeof myArr , typeof myObj , myArr , myObj])

const myFun = function(){
    console.log("Hello World!")
}
console.log(typeof myFun)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  Stack memory (primitive data type) ,  Heap memory (non - primitive)

let myName = "krishnakant"
let mySecondName = myName; // copy of myName not ref ,because of primitive dt
mySecondName = "chhootu";

console.table([myName , mySecondName]) // both have diff value

let userOne = {
    name : "krishnakant dinkar",
    age : 22
}

let secondUser = userOne; //by ref
secondUser.name = "chhootu"

console.log(userOne)
console.log(secondUser)


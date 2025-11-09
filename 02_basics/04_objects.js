// const person = {
//     name : "Krishnakant Dinkar",
//     age : 22,
//     rollNo : 57,
//     DOB :new Date(2002 , 5 , 17)
// }

// // keys, values , entries

// console.log(Object.keys(person))
// console.log(Object.values(person))
// console.log(Object.entries(person))

// entries = Object.entries(person);
// keys = entries.map((ele , idx) => ele[0]);
// console.log(keys)


// // 5. Nested Objects

// const student = {
//     name : "Krishna",
//     address : {
//         city : "Tikamgarh",
//         state : "Madhya Pradesh",
//         pinCode : "472331"
//     }
// }

// console.log(student.address.city)


// // +++++++++++++++++++++++++ Shorthand and ES6 Features ++++++++++++++++++++++++
// // Property shorthand

// const Username = "krishna"
// const age  = 22
// const person1 = {Username , age } // same as { name: name, age: age }
// console.log(person1)

// +++++++++++++++++++++++++++++++++++++++//Method shorthand

// const person3 = {
//     name : "Aman",
//     age : 22,
//     greeting(){
//         console.log(`hello my self ${this.name}`)
//     },
//     getAge(){
//         return this.age
//     }
// }

// person3.greeting()
// console.log(person3.getAge())


// +++++++++++++++++++++++++++== Object Destructuring==+++++++++++++++

// const p = {name : "Krishna" , age : 22 , city : "Tikamgarh"}
// const {name  , age} = p;
// console.table([name , age])

// // rename while Destructuring

// const {name : fullName  , city} = p;
// console.table([fullName , city])


// +++++++++++++++++++++++++++++++++ Object Copying and Merging +++++++++++++++
// ❌ Wrong Way
let obj1 = [1,2,3,10]
const obj2 = obj1; // references same memory

// ✅ Correct (Clone)
const clone = { ...obj1} // clone is obj
console.log(clone)


//clone of obj
const p = {name : "Krishna" , age : 22 , city : "Tikamgarh"}
const clone_person = { ...p  , country : "India"} //deep copy
console.log(clone_person)

p.greeting = function(){
    console.log(`Hello ${this.name}`)
}
p.greeting()

//++++++++++++++++++++++++++++++++++++new function

const getCity = function(){
    return this.city
}
p.callCity = getCity

console.log(p.callCity())


//+++++++++++++++++++++++++++++++++++++++++++++++
// assign obj
const obj5 = {1 : "a" , 2 : "b"}
const obj6 = {3 : "c" , 4 : "d"}
const obj7 = {5 : "e" , 6 : "f"}

const obj8 = Object.assign({} , obj5 , obj6 , obj7)
console.log(obj8)

//check properties exists
console.log(Object.hasOwn(obj8,"4"))

//from array
const arr = [["a", 1], ["b", 2]];
const obj = Object.fromEntries(arr);
console.log(obj); // { a: 1, b: 2 }

//++++++++++++++++++++++++++++++++++ Deep copy +++++++++++++++
let newObj = { a : 1, b : { c: 4 , d : {e : 3}}}
            // NO DEEP COPY OF NESTED OBJ
let o1 = {...newObj} // no deep copy of nested obj
console.log(o1)
// change in newObj
newObj.b.c = 5
newObj.a = 6
console.log(o1)
        // DEEP COPY
let b2 = structuredClone(newObj)
newObj.b.c = 11
newObj.a = 10
console.log(b2)
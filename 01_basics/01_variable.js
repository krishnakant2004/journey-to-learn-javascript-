// use for printing o console
console.log("hello world!");


// 1. Scope

// var → Function-scoped
// (available inside the whole function, ignores block {})

// let and const → Block-scoped
// (only available inside { } where declared)


// 2. Re-declaration

// var → Can be re-declared in the same scope (dangerous).

// let & const → Cannot be re-declared in the same scope.


// 3. Re-assignment

// var → can re-assign.

// let → can re-assign.

// const → cannot re-assign.


// 4. Hoisting

// All variables are hoisted (moved to the top of scope), but:

// var → hoisted and initialized with undefined.

// let & const → hoisted but kept in Temporal Dead Zone (TDZ) until actual declaration.



// What is Temporal Dead Zone (TDZ)?

// TDZ is the time between hoisting of a variable and its actual declaration in the code.

// In this zone, the variable exists in memory but cannot be accessed → trying to use it will throw a ReferenceError.

// It applies only to let and const (not var).


let a = 5;
let b = 5.5;
let name = 'krishna kant';
let isLoggin = true;

console.log(`x is ${x}`); ///undefine because use before initialization
var x = "IIITDM KURNOOL"
console.log(`x is ${x}`);

var x = 123;
console.log(`x after redeclaration ${x}`);
var y = 5.5;

const c = 34; // can not be redeclared and reassigned
console.log(`a is: ${a} b is:${b} \n name is: ${name} \n isLoggin: ${isLoggin}\n y is: ${y}`);



//null and undefine
//null -> empty

//undefine -> not know what value inside
 

//type of variable
let myName = "krishnakant Dinkar";
console.log(`type of myName ${typeof myName}`);

// non primitive data type
// bigInt and Symbol

let bInt = BigInt("123");
let sym = Symbol("hello!");
// console.log(`bInt is : ${bInt}\n sym is : ${sym}`);

let student = {
    id:57,
    name:"krishnakant Dinkar",
    rollNo : "122cs0057"
}

console.log(`student details \n id: ${student.id} \n name : ${student["name"]} `);




//chai aur code
const accountId = 123
var accountName = "krishnaKant"
let accountCity = "Kurnool"
let accountState

console.table([accountId , accountName , accountCity , accountState]);

/*
prefer not to use var 
because of issue in block and function scope 
*/
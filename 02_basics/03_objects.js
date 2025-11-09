const person = {
    name : "Krishnakant Dinkar",
    age : 22,
    rollNo : 57,
    DOB :new Date(2002 , 5 , 17)
}


//access
console.log(person)

console.log(person.name)
console.log(person["name"])
console.log(person["age"])
console.log(person["rollNo"])

// birth date
console.log(person.DOB.toLocaleDateString("en-IN",{
    day: "numeric",
    month : "long",
    year:"numeric"
}))

// Symbols
let smb1 = Symbol("krishna")
// person.symbol = smb1
console.log(typeof person.symbol)

// or there way

const smb2 = Symbol("krishnakant")

let obj2 = {
    name : "Krishna",
    symbol1 : smb2,
    [smb2] : "key2" //not assign string to a symbol 
}
console.table([typeof obj2.symbol1 , typeof obj2.smb2 ])


// 3. Adding, Updating, and Deleting Properties
person.city = "Tikamgarh"
person.state = "Madhya Pradesh"
console.log(person)
//delete
delete person.city
console.log(person)


//lopping through obj
for(let key in person){
    console.log(`typeof key: ${typeof key}, key is ${key}, and value is: ${person[key]}`)
}


// function treat as variable

person.greeting = function(){
    console.log("hello ,how are you,my self Krishnakant Dinkar")
}

console.log(person.greeting())

//object Freeze ++++++++++++++++++++++++++++++++++++++++++++
// You cannot change existing property values.
// You cannot add new properties.
// You cannot delete properties.
let car = { brand: "Tesla", color: "red" };
Object.freeze(car);

// Trying to change a property
car.color = "blue";       // No effect

// Trying to add a property
car.year = 2024;          // No effect

// Trying to delete a property
delete car.brand;         // No effect

console.log(car); // { brand: "Tesla", color: "red" }


// ===================================== Object.seal()====================
// You CANNOT add new properties to the object.
// You CANNOT delete existing properties.
// BUT you CAN still update (change) the values of existing properties.
let bike = { brand: "Honda", color: "black" };
Object.seal(bike);

bike.color = "silver";     // This will update the color property
bike.year = 2022;          // This will NOT add a new property
delete bike.brand;         // This will NOT delete the property

console.log(bike);
// Output: { brand: "Honda", color: "silver" }
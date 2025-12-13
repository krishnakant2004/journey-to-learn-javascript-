// Used to iterate over the properties of an object.
// Iterates over keys (property names) of an object

const person = { name: "Aman", age: 22, city: "Delhi" };

for(let pro in person){
    console.log(`person ${pro} is ${person[pro]}`)
}


//loop array though index
const arr = ["a", "b", "c"];
for(let idx in arr){
    console.log(`${idx} index value of arr is ${arr[idx]}`)
}
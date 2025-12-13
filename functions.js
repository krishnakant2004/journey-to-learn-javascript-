// Function Declaration
// ✅ Hoisted → you can call it before it’s declared.
// ✅ Most common for reusable logic.

function add(a,b){
    return a+b;
}

//function Expression
// ❌ Not hoisted → must be defined before use.
// ✅ Used when passing a function as an argument or creating callbacks.
const add = function(a,b){
    return a+b;
}

//arrow function

const sub = (a,b)=>{
    return a-b;
}
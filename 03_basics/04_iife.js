// Immediately Invoked Function Expression
// ()() //-> first parentesis for Function Expression and then second parenthisis for imidiate execution

(function() {
  console.log("I run instantly!");
})(); //first for expression , second for immediately invokes it


// An IIFE is a function that runs immediately after it’s created.

// reason to use

// +++++++++++++++ 1. Avoid Global Variable Pollution +++++++++++++++++
// Without IIFE
var count = 10;

function add() {
  var count = 5;
  console.log(count);
}

console.log(count); // 10

// With IIFE
(function() {
  var count = 5;
  console.log(count); // 5
})();

console.log(typeof count); // undefined (not global!)


// +++++++++++++++++++ 2. Execute Code Immediately (Initialization)++++++++++++
(function(){
    console.log("App initialized!")
})(); //dont know where to stop -> so use semicolon

(function greet(){
  console.log("hello world!")
})();

((name)=>{
  console.log(`DB connected to name ${name}`)
})("Krishna"); // -> treated as function fun("Krishna") 


// ++++++++++++++++++++++++++++++ ✅ 3. Create Private Data / Encapsulation

// IIFEs can hide private data and only expose what you want (like a module).
// const counter = (function() {
//   let count = 0; // private variable

//   return {
//     increment: function() { count++; return count; },
//     decrement: function() { count--; return count; },
//   };
// })();

// console.log(counter.increment()); // 1
// console.log(counter.increment()); // 2
// console.log(counter.decrement()); // 1
// console.log(count); ❌ Error: count is not defined

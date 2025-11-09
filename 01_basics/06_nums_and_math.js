let score = 400
score = "hi" //change type
console.log(score)

let balance = new Number(100.654)
console.log(balance);

console.log(balance.toString())
console.log(balance.toFixed(2)) //up to 2 decimal

console.log(balance.toPrecision(4)) // round off
console.log(balance.toPrecision(2))


const hundreds = 100000000;
console.log(hundreds.toLocaleString('en-IN'))

// ++++++++++++++++ Maths ++++++++++++++++++++++
console.log(Math)
console.log(Math.abs(-4))

// rounding functions
console.log(Math.round(445.67))
console.log(Math.floor(445.67))
console.log(Math.ceil(445.17))
console.log(Math.trunc(1213.232)) // remove decimals

// min / max
console.log(Math.min(1,2,3,4,4))
console.log(Math.max(1,2,3,4,4))

//sign
console.log(Math.sign(-12))

// power and root
console.log(Math.pow(2,3))
console.log(Math.sqrt(16))
console.log(Math.cbrt(27))


// random
// value from [0 , 1)  1 is not included
console.log(Math.random()) 

//if value a value btw a to b
const a = 3
const b = 10
console.log(Math.floor(Math.random() * (b - a + 1)) + a);

console.log(Number.MIN_VALUE)

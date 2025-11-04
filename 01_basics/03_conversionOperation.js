let age = "33"

let numberAge = Number(age);
let booleanAge = Boolean(age) //if empty give false

console.table([numberAge , booleanAge]);

let num = "absc737"
let toNumber = Number(num)
console.log(toNumber) // if not convertable give NaN


// -------------------operator------------------
// *,-,+,**,/,%

console.log(1 + 2 + "3") // 33
console.log("3" + 2 + 3) //323
console.log(1 + "2" + 3) //123
console.log(5 + 1 + "2" + 3) //623
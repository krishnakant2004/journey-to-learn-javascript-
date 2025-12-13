//function declaration

function greet(){
    console.log(`Hello World!`)
}

greet()

//take syntax and parameters
function add(a,b){
    return a+b
}

// Rest Parameters & Spread+++++++++++++++++++++++++++++++++++++++++++++++++++++
// Use ... to collect multiple arguments into an array.
function sum(ele1 , ele2 , ...nums){
    return nums.reduce((a, b) => a + b) + ele1 + ele2
}

console.log(sum(1,2,3,4,5,6))


//Function Expressions -> anonymous function+++++++++++++++++++++++++++++++++++++++
// Functions can be assigned to variables

const Multiply = function(a,b){
    console.log(this)
    return a * b
}
console.log(Multiply(2,3))


// diff btw expression function and defined function+++++++++++++++++++++++++++++++++

// function declaration are hosted
sub(10,3) //call before declare (because of hosting)
function sub(a,b){
    console.log(a-b)
}


//function expression are not hosted
// sub1(5,3) //
let sub1 = function(a,b){
    console.log(a-b)
}

// default value+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function fun1(name = "krish"){
    console.log(`my name is: ${name}`)
}
fun1("rohan")
fun1()



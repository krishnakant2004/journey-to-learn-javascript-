// let now = new Date();
// console.log(now);

// console.log(Date.now()) //in millisecond

//change to seconds
console.log(Math.floor(Date.now()/1000))

let d1 = new Date(2022 , 10 , 5 , 22 , 15)
console.log(d1)

// getting date and time part
//day
console.log("+++++++++++++++++++++++++++++++++++++++++++++++")
let date = new Date();
console.log(date.getDay()) //day -> sunday to monday ,0->sunday
console.log(date.getDate()) //date 1-31
console.log(date.getMonth()+1) //month 0-11
console.log(date.getFullYear()) //year 
console.log(date.getHours()) // hours 0-23
console.log(date.getMinutes()) // minutes 0-59
console.log(date.getSeconds()) // seconds 0-59

//setting date and time
let d = new Date()

d.setFullYear(2030)
d.setMonth(0)
d.setDate(23)
d.setHours(0)
d.setMinutes(15)

console.log(`date is ${d.getDate()}-${d.getMonth()+1}-${d.getFullYear()}`)

// date Formatting
let d3 = new Date();
console.log(d3.toDateString())
console.log(d3.toTimeString())
console.log(d3.toLocaleString())
console.log(d3.toLocaleDateString())
console.log(d3.toLocaleTimeString())

//time in millisecond
console.log(Date.now())
let d4 = new Date().getTime()
console.log(d4)

//comparing two times
console.log("++++++++++++++++++++++++++++++++++++++comaring two times")
let start = Date.now();
// ... some code
let end = Date.now();
console.log("Elapsed:", (end - start), "ms");

//Date calculation
console.log("++++++++++++++++++++++++++++++++++++Date Calculation")
let today = new Date();
let tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);
console.log(tomorrow); // next day

console.log("++++++++++++++++++++++++++++++++++++ Diff btw two dates")
let d5 = new Date("2025-11-01")
let d6 = new Date("2025-11-04")

let diff = d6 - d5; // in millisecond
let days = diff / (1000 * 60 * 60 * 24) //convert to day
console.log(days)


console.log("++++++++++++++++++++++++++++ Formatting with Options")

let now = new Date();

console.log(now.toLocaleString("en-IN" , {
    weekday :"long",
    year : "numeric",
    month :"long",
    day:"numeric",
    hour:"2-digit",
    minute:"2-digit"
}))
let name = "Krishnakant Dinkar"
// name = 3 // change the type

//functions
/***************************************************
 🟢 BASIC INFORMATION & CHECKS
***************************************************/
let str = "Krishnakant Dinkar";

console.log(str.length);                // 11
console.log(str.charAt(1));             // 'e'
console.log(str.charCodeAt(0));         // 72
console.log(str.includes("World"));     // true
console.log(str.startsWith("He"));      // true
console.log(str.endsWith("ld"));        // true


console.table([str.length , str.charAt(1) , str.indexOf('k') , str.lastIndexOf('k') , str.charCodeAt(0) , str.includes("krish") , str.startsWith("kri") , str.endsWith("kar")])


/***************************************************
 🟡 STRING MANIPULATION
***************************************************/
let msg = "  hello world  ";

console.log(msg.toUpperCase());          // "  HELLO WORLD  "
console.log(msg.toLowerCase());          // "  hello world  "
console.log(msg.trim());                 // "hello world"
console.log(msg.trimStart());            // "hello world  "
console.log(msg.trimEnd());              // "  hello world"
console.log("apple".replace("a", "A"));  // "Apple"
console.log("a-a-a".replaceAll("a", "b"));// "b-b-b"
console.log("Hello".concat(" ", "JS" , "JS"));  // "Hello JS"
console.log("ha".repeat(3));             // "hahaha"



/***************************************************
 🔵 SUBSTRING EXTRACTION
***************************************************/
console.log("**************************************************string extraction")
let word = "JavaScript";

//index based
console.log(word.slice(0,5)) //javaS (start , endidx) , endIdx not included
console.log(word.slice(5)) //cript  ,up to end
console.log(word.slice(-6,-4)) //Sc ,start from 6 indx from end up to 4 from end (end not includede)

// substr
//treat negative index as 0
console.log(word.substring(0,5))
console.log(word.substring(5,0)) // swap auto matically

/***************************************************
 🟣 SPLITTING & JOINING
***************************************************/
let csv = "red,green,blue";

let colors = csv.split(",");            // ["red", "green", "blue"]
console.log(colors);
console.log(colors.join(" | "));        // "red | green | blue"


/***************************************************
 🔴 SEARCHING
***************************************************/
let text = "banana";

console.log(text.indexOf("a"));         // 1
console.log(text.lastIndexOf("a"));     // 5
console.log("abc123".match(/\d+/));     // ["123"]
console.log(Array.from("a1b2".matchAll(/\d/g))); // ["1", "2"]
console.log("abc123".search(/\d/));     // 3


/***************************************************
 🟤 TEMPLATE & FORMATTING (MODERN JS)
***************************************************/
let user = "Krishnakant";
let age = 21;

console.log(`Hello ${user}, you are ${age} years old.`); 
// "Hello Krishnakant, you are 21 years old."

// Tagged template example
function shout(strings, name) {
  return `${strings[0]}${name.toUpperCase()}!`;
}
console.log(shout`Hey ${user}`);  // "Hey KRISHNAKANT!"


/***************************************************
 ⚡ MOST COMMONLY USED IN PROJECTS
***************************************************/
let sentence = "JavaScript is powerful and fun!";
console.log(sentence.includes("powerful")); // true
console.log(sentence.split(" "));           // ["JavaScript","is","powerful","and","fun!"]
console.log(sentence.replace("fun", "awesome")); // "JavaScript is powerful and awesome!"
console.log(sentence.slice(0, 10));         // "JavaScript"
console.log(sentence.trim());               // (no change, no extra spaces)
console.log(sentence.toLowerCase());        // "javascript is powerful and fun!"
console.log(sentence.indexOf("is"));        // 11


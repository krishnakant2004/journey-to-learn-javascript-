// +++++++++++++++++++++++++++++++++++++++++
// if(condition){

// }

// < , > <= , >= , == ,=== , !==
// / False value -> false, 0, "", null, undefined, NaN


let age = 16;

if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You are too young to vote");
}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

let marks = 85;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}

// +++++++++++++++++++++++ nested if+++++++++++++
let hasID = true;

if (age >= 18) {
  if (hasID) {
    console.log("You can enter");
  } else {
    console.log("You need an ID");
  }
} else {
  console.log("You are underage");
}



let isMember = true;
let hasCoupon = false;

if (isMember || hasCoupon) {
  console.log("You get a discount!");
}


let arr1 = ["banana" ,"apple" , 1 , 2 , 3.6 , true]
let arr2 = new Array(1,2,3,4,4)
//access
console.log(arr1[1])
console.log(arr1)

//push and pop _> end operation

arr2.push("krishnakant Dinakar");
console.log(arr2[arr2.length-1])

arr2.pop();
console.log(arr2[arr2.length-1])

//operation at front _> shift (remove first ele)
// unshift -> insert at start

arr2.unshift("krishnakant Dinkar")
console.log(arr2[0])

arr2.shift();
console.log(arr2[0])

//using empty
let arr3 = []
arr3[4] = "Krishnakant"
arr3[5] = "Dinakar"
console.log(arr3)

// Loping Through Array ++++++++++++++++++++++++++++++++++++++++++++++++++++
let arr4 = ["JS", "Python", "C++"];

for(let i = 0;i<arr4.length;i++){
    console.log(arr4[i]);
}

// for -- of
for(let val of arr4){
    console.log(val);
}

//forEach
arr4.forEach((item,index) => console.log(index , item))

// array Transformation
let nums1 = [1,2,3,4,5]
let square = nums1.map((ele , idx) => ele * ele)
console.log(`square of num ${square}`) 


let nums2= [1, 2, 3, 4, 5];
let even = nums2.filter((ele , idx) => ele % 2 === 0)
console.log(`even in num2 ${even}`) 

//combine all into single one

let sum = nums2.reduce((acc , currVal , currIdx) => acc + currVal)
console.log(sum)

// 7. Searching and Checking
let arr = [10, 20, 30, 40];

console.log(arr.includes(20));
console.log(arr.indexOf(20));
console.log(arr.find((ele) => ele > 25));
console.log(arr.findIndex((ele) => ele > 25));

// sorting
arr.sort()
arr.reverse()


// Custom sort
let scores = [10, 5, 100, 50];
scores.sort((a, b) => a - b); // ascending

let a = [1, 2];
let b = [3, 4];

let combined = a.concat(b); // [1,2,3,4]
let sliced = combined.slice(1, 3); // [2,3]



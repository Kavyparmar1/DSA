// 🧩 Question 5: Find the Missing Number in an Array
// 🧠 Problem:

// You are given an array containing N distinct numbers taken from the range 1 to N+1.
// Your task is to find the missing number.

// 🧾 Example:
// Input: [1, 2, 4, 5, 6]
// Output: 3


// Here, 3 is missing.

function missingNum(arr){
let n = arr.length + 1
let sum = 0
let total = n*(n+1)/2
 for(i=0;i<arr.length;i++){
    
    sum = sum + arr[i]
 }
 console.log(total-sum)
}

missingNum([1,2])
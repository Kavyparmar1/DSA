// 🧩 STRING — EASY QUESTION 1
// 👉 Reverse a String
// 🧠 Problem:

// Given a string, reverse it without using built-in reverse().

// Example:

// Input: "hello"
// Output: "olleh"

function reverseStr(str){
   
    let reverse = ''
    for(i=str.length -1 ; i>=0;i--){
        reverse = reverse + str[i]
    }
    console.log(reverse);
 
    
    
}
reverseStr('hello')
// 🧩 Question 2: Check if a String is Palindrome

// 🧠 Problem:
// Given a string, check if it reads the same forward and backward.

// Example:

// Input: "madam"
// Output: true

// Input: "kavy"
// Output: false

// 💡 Logic:

// Reverse the string.

// Compare the reversed string with the original one.

// If both are the same → palindrome hai.

// Otherwise → not palindrome.


function isPalindrome(str){
    let reverse = ''
    for(i=str.length-1;i>=0;i--){
         reverse = reverse + str[i]
    }
    if(str == reverse){
        console.log('Palindrome');
        return true
         }
         else{
            console.log("Not Palindrome");
            return false;
         }
}
isPalindrome('0110')
// 🧩 Question 3: Count Vowels in a String

// 🧠 Problem:
// Given a string, count how many vowels (a, e, i, o, u) are present in it — ignore uppercase/lowercase difference.

// Example:

// Input: "Kavy"
// Output: 1

// Input: "Interview"
// Output: 4


function countVowels(str){
   
   str = str.toLowerCase()
   let count = 0 
   for(i=0;i<str.length;i++){
      let ch = str[i]
    if(ch==='a'||ch==='e'||ch==='i'||ch==='o'||ch==='u'){
        count ++
    }
     
   }
   console.log(count);
   return count
   
   
}
countVowels('kavya')
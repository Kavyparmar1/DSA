// 🧩 Question 4: Find the Second Largest Element in an Array

// 🧠 Problem:
// Given an array of integers, find the second largest element (without sorting the array).

// Example:

// Input: [10, 20, 4, 45, 99]
// Output: 45


//dry run 
//let first = - infinity 
//let second = -infinity 
//-infinity ka matlab koi bhi numbher isse  bda hohga 

//let arr = [10,20,30,40,50]
//let num = arr[i]  num > first [yes ] second = first 

function secLarge(arr){
    let first = -Infinity
    let second = -Infinity
    for(i=0;i<arr.length;i++){
        let num = arr[i]
        if(num>first){
            second = first 
            first = num 
        }
        else if(num > second && num < first ){
             second = num 
        }
    }
    console.log(second);
    
}
secLarge([10, 20, 15])
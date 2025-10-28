//Question 1: Find the Maximum and Minimum element in an array
// 🧧 Problem Statement:

// Given an array of numbers, find the maximum and minimum element without using any built-in functions like Math.max() or Math.min().

function findMaxMin(arr){
     if(arr.length == 0){
        return console.log('array is empty');
        
     }
let max = arr[0]
let min = arr[0]
for(i=1;i<arr.length;i++){
   if(arr[i]>max){
      max = arr[i]
   }
   if(arr[i]<min){
    min = arr[i]
 }
}
console.log(max,min);

}

findMaxMin([2,1,20,10,25,0,25.1])
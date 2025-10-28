// 🎯 Question 2: Reverse an Array

// Means: Array ko ulta karna (last element ko first banana, first ko last).

// let arr = [10,20,30,40,50]
//index = [0,1,2,3,4]
//length =[1,2,3,4,5]
function reverseArr(arr){
    let i = 0
    let j = arr.length - 1 
    while (i < j ){
         let temp = arr[i]
         arr[i] = arr[j]
         arr[j] = temp 
         
         i++
         j--
        }
        console.log(arr);
        return arr
        
}
reverseArr([10,20,30])
// same yahi trika 
// let a = 10
// let b =20
// temp = a 
// a=b
// b=temp
// console.log(a,b);

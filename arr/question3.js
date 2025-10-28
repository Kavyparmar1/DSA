// 🧠 Question 3: Find the Sum of All Elements in an Array

function sumOfArr(arr){
    let sum = 0 
    for(i=0;i<arr.length;i++){
        sum = sum + arr[i]
    }
    console.log(sum);
    
}
// ⚙️ Step-by-Step Logic:

// Array = [5, 10, 15, 20]

// Step	Current Element	sum (before)	sum (after adding)
// 1	5	0	5
// 2	10	5	15
// 3	15	15	30
// 4	20	30	50

// ✅ Final sum = 50
sumOfArr([10,20,30,40])
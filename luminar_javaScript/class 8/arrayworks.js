//[]
//dynamic
//any type of data can be stored


var arr=[10,9,11,12,5]

//array index
console.log(arr[0])

//add an element
// arr.push(100)
// console.log(arr)

//for loop

for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}


//question 1. print even numbers in the array

// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         console.log(arr[i])
//     }
// }

//question2. print the sum of elements

let sum=0;
for(let i=0;i<arr.length;i++){
    sum+=arr[i]
}
console.log(sum)
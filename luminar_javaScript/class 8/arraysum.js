//print the sum of array elements

let sum=0
var arr=[10,9,11,12,5]
for(let i=0;i<arr.length;i++){
    sum+=arr[i]
} console.log(sum)

//question 3. largest or maximum value in the array

var maxNum=0;
for(let i=0;i<=arr.length;i++){
   if(arr[i]>maxNum)
   {
       maxNum=arr[i]
   }

}console.log(maxNum)

//question 3. largest or minimum value in the array

var minNum=arr[0];
for(let i=0;i<=arr.length;i++){
   if(arr[i]<minNum)
   {
       minNum=arr[i]
   }

}console.log(minNum)
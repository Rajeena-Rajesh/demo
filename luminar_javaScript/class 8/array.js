
//arrays
//to store data
//medical store
var expenses=[10000,20000,13000,14000,15000]
console.log(expenses[4])

//update [2]=15000

expenses[2]=15000
console.log(expenses)

//june 45000

expenses.push(45000)
console.log(expenses)

var arr=[10,11,13,12,14,"hello",true,undefined,null]
console.log(arr[0])

//update second element to 20
arr[2]=20
console.log(arr)

//insert a neew element 50 to the last position
arr.push(50)
console.log(arr)

//var window={
  //  console:{
    //    log()
    //}
//}

//var Array={
   // lenght:"lenght"//property no () neede
   // push(){ //method

  //  }
//}
var arr1=[10,11,12,13,14,45,67,8,8,9]
console.log(arr.length)
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])

for(let i=0;i<=4;i++){
    console.log(arr[i])
}


//print alleven numbers from array
// var arr11=[10,11,12,13,14,45,67,8,8,9]
// let arr =[]
// for(let i=0;i<=arr11.length;i++)
// {
//   if(arr11[i]%==2){
//     console.log(arr[i])
//   }
// }
//print sum of array

var sum=0
var Arraysum=[10,9,11,12,5]
for(let j=0;j<Arraysum.length;j++){
  sum+=Arraysum[j]
}console.log(sum)
//print largest elelmnt
//print lowest element
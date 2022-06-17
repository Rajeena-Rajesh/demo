var num=10

if(num>0){
    console.log("num is positive")
}else{
    console.log("num is negetive")
}

///if.....else

// if(condition1){
//     stmt1
// }
// else if(condition2) {
//     stmt2
// }else if(condition3){
//     stmt3
// }
///multiple condition

var num1=-9
if(num1>0){
    console.log("number is positive")

}else if(num1<0){
    console.log("number is negetive")
}else{
    console.log("the number is zero")
}

//largest among three number
var n1=10,n2=20,n3=30
//n1 n1>n2 && n1>n3

if(n1>n2 && n1>n3){
    console.log("n1 is largest")
}
else if (n2>n1 && n2>n3){
    console.log("n2 is largest")
}else {
    console.log("n3 is largest")
}

//method to get the largest valueamong three
var m1=10,m2=20,m3=30
var largest=0

if(m1>m2 && m1>m3){
    largest=m1

}else if(m2>m1 && m2>m3){
    largest=m2
}
else if(m3>m1 && m3>m2) {
    largest=m3
}else if(m1==m2 && m1==m3){
    console.log("all numbers are equal")
}
console.log(largest)

//print the second largest number among three number

//sort these three number

//print fizz if num/ 3 print buzz if num /5 print fizzbuzz if num /15
var number=15
if(number%15==0){
    console.log("fizzbuzz")
}else if (number%5==0){
    console.log("buzz")
}else if (number%3){
    console.log("fizz")
}
 
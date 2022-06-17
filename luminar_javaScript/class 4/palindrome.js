var num=1234;
var inp=num;

while(num!=0){
let last_Digit=num%10;
console.log(last_Digit)
num=Math.floor((num/10))
}

if(inp == res){
    console.log("palindrome")
}else{
    console.log("not palindrome")
}
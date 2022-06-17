for(let i=0;i<=3;i++){
    console.log("Hello")
}

for(let j=10;j>=1;j--){
    console.log(j)
}

//print all even numbers from 10 to 25
for(let n=10;n<25;n++){
    if(n%2==0){
        console.log(n)
    }
}


//find the sum of even numbers from 20 to 50
let sum=0;
for (let m=20;m<=50;m++){
    if(m%2==0){
        sum=sum+m;//sum+=i
            }
    }
console.log(sum)
//check whether the number is prime

const num=7
var flag=0
for(let y=2;y<num;y++){
    if(num%y==0){
        flag=1
    }
}
console.log(flag==0 ? "prime":"not prime")



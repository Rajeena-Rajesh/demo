var num=123;
while(num!=0){
    let lastDigit=num %10;
    console.log(lastDigit)
    num=Math.floor((num/10))
}
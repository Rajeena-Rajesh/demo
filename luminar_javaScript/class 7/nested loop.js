//print multiplkication table of 5
var num=5

for(let i=1;i<=15;i++){
   // 1 * 5=5
console.log(`${i} * ${num}=${i*num}`)
}


//print 123 pattern


for(let row=1;row<=3;row++) //row=1 1<=3  2<=3
{
    let str=""
    for(let col=1;col<=3;col++){//col=1 1<=3 col=2  2<=3 col=3 3=3 4<=3
        str+=col  //str=1 2 3
    }
    console.log(str) //123
}


// print the below pattern
//1 1 1
//2 2 2
//3 3 3
for(let row=1;row<=3;row++) //row=1 1<=3  2<=3
{
    let str=""
    for(let col=1;col<=3;col++){//col=1 1<=3 col=2  2<=3 col=3 3=3 4<=3
        str+=row  //str=1 2 3
    }
    console.log(str) //123
}

let array=[
    [11,2],
[12,45],
[56,23],
[8,3],
[12,78]]

for (let subarray of array){
    for(let num of subarray){
        if(num>6){
            console.log(num)
        }
    }
}

//total

let sumArray=[[12,34],[12,12],[2,56],[1,5],[10,0]]
var sum=0;
for(let subArray of sumArray){
    for(let n of subArray){
        sum+=n
    }console.log(sum)
}
var arr=[2,3,4,5]
var inp=8

// o/p (5,3)

// for(i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]+arr[j]==inp){
//             console.log(`${arr[i]},${arr[j]}`)
//             break;
//         }
//     }
// }

//not an efficient program
var cnt=1;
for(i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j]==inp){
            console.log(`${arr[i]},${arr[j]}`)
          
        }cnt++;
    }
}
console.log(cnt)
//when element 2,3 is added execution cnt increases to 16

//t1
//app1(2sec)   app2(5sec)

//better solution


 
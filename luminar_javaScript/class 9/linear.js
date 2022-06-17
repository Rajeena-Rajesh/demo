//linear search
var arr = [10, 11, 12, 2, 3, 4, 5, 6];
//var num = 12;
var num=120
var cnt=1

var flag = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == num) {
    flag = 1;
    break;
  }cnt++
}
console.log(flag == 0 ? "12 is not found" : "12 is found");
console.log(cnt)

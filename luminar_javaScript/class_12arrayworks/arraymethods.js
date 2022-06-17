//array methods=>
//push(), pop() ,sort()

//map(), filter(), reduce(), some(), find(), flat(), forEach()

//length property



//print the squares of the elements
//map()

//print all employees names
//print alll employee salary
//print all employees exp

var arr=[10,9,11,12,5]

//print squares of all numbers


function square(n){
    return n**2
}

var op=arr.map(square)
console.log(op)
//---------------------------------------

var num=[1,2,3,4,5,6]


// function square1(a){
//     return a**2
// }

var square1=a=>a**2

var res=num.map(square1)

console.log(res)
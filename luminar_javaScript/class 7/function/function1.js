//function functionName(parm1,par2)
//function def
//return value


//function for add 2 numbers

function add(n1,n2){
    return n1+n2
}

console.log(add(10,20))

//function for cube
function cube(n){
    return n**3
}

console.log(cube(3))
console.log(cube(4))
//create a function with two parameters which will return max of two numbers

function maxOfTwo(n1,n2){
    if(n1>n2){
        return n1
    }else{
        return n2
    }
}
console.log(maxOfTwo(10,20))
//
function maxOfTwo(n1,n2){
    return n1>n2 ?n1:n2
}
console.log(maxOfTwo(100,20))
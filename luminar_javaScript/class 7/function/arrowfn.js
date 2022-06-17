function isEven(n){
    return n %2==0 ? true:false
}

//arrow fn
let isEven=(n)=>n%2==0 ?true:false
console.log(isEven(10))

//adding two numbers

function add(n1,n2){
    return n1+n2
}

let add=(n1,n2)=>n1+n1

console.log(add(10,30))

//cube of a number
let cube=(n)=>n**3
console.log(cube(3))

//max of two
let maxTwo=(n1,n2)=>n1>n2 ? n1:n2clg
console.log(maxTwo(10,20))


//smartsub arrow fn
let add=(n1,n2)=>n1+n2

let smartSub=(n1,n2)=>n1>n2 ?n1-n2:n2-n1

//chk beginning letter is  a

var name1="ram"
console.log(name1[0])

function isStartWithA(name2){
    if(name2[0]=="a"){
        return true
    }else{
        return false
    }console.log(isStartWithA("ram"))
}

//arrow
let isStartWithA=(name2)=>name2[0]=="a"? true:false
console.log(isStartWithA("ram"))



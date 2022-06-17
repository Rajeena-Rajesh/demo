var n1=10,n2=20,n3=30
var largest=0,second=0,third=0

if(n1>n2 && n1>n3){
    largest=n1

    if(n2>n3){
        second=n2
        third=n3
    }else{
        second=n3
        third=n2
    }
}else if(n2>n1 && n2>n3){
    largest=n2

    if(n1>n3){
        second=n1
        third=n3
    }else{
            second=n3
            third=n1   
        }
  
}else if(n3>n1 && n3>n2){
    largest=n3

    if(n1>n2){
        second=n1
        third=n2
    }else{
            second=n2
            third=n1   
        }
    }
    else if(n1==n1 && n1==n3){
        console.log("all numbers are equal")
    }
    console.log(second)
    //sorted order
    console.log(largest,second,third)
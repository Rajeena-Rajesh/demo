var email="abc@gmail.com"

try{
    if(!(email.endsWith("@gmail.com"))){
        throw new error("invalid email");
    }
}
catch(e){
    console.log(e.message)
}
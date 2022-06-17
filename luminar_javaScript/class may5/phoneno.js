var phone='1234567111'

try{
    if(phone.length!=10 || (isNaN(phone))){
        throw new Error("invalid phone number")
    }
}
catch(e){
    console.log(e.message)
}
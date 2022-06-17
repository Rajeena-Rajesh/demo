//this is data of a bank
var accounts = [
    {
      acno: 1000,
      type: "saving",
      balance: 5000,
      password: "abc123",
      transactions: {
        creditTransactions: [
          { from: 1002, amount: 1000 },
          { from: 1003, amount: 2000 },
        ],
        debitTransactions: [
          { to: 1002, amount: 1000 },
          { to: 1003, amount: 2000 },
        ],
      },
    },
    {
      acno: 1001,
      type: "current",
      balance: 6000,
      password: "Password@123",
      transactions: {
        creditTransactions: [
          { from: 1002, amount: 1000 },
          { from: 1003, amount: 2000 },
        ],
        debitTransactions: [
          { to: 1002, amount: 1000 },
          { to: 1003, amount: 2000 },
        ],
      },
    },
    {
      acno: 1002,
      type: "saving",
      balance: 15000,
      password: "user123",
      transactions: {
        creditTransactions: [
          { from: 1001, amount: 1000 },
          { from: 1003, amount: 2000 },
        ],
        debitTransactions: [
          { to: 1000, amount: 1000 },
          { to: 1003, amount: 2000 },
        ],
      },
    },
  ];

  var session={}
  //user:1000 //if a user login session =1000
  function validateAccountNumber(acno){
      //return value either true or false //find //includes //some
     //some returns a boolean value when the data is in the object else if its a array we use includes 
      return accounts.some(ac=>ac.acno==acno)
      
  }

  function getDatatByAcno(acno){
      return accounts.find(data=>data.acno==acno)

  }

function getBalance(acno){
    return accounts.find(data=>data.acno==acno).balance
}

function getLastTransaction(acno){
    let allDebitTransactions=accounts.find(data=>data.acno==acno).transactions.debitTransactions
    console.log(allDebitTransactions)
}
  function authenticate(acno,password){
    //chk for account number exist
    //return true if the password is correct else return false

    if(validateAccountNumber(acno)){
   let data=getDataByAcno(acno)
   if(data.password==password){
     return true
   }else{
     return false
   }

      }   else{
        return false
      }
    }
    console.log(authenticate(1007,"abc123"))
  //validateAccountNumber(1007)


getDatatByAcno(1000)
 getBalance(1002)
// getLastTransaction(1001)



  //login
  //balanceEnquiry
  //FundTranfer
  //PaymentHistory

  function login(acno,password){
   if( authenticate(acno,password)){
     session["user"]=acno  //key should be added that is user
   }else{
     console.log("invalid user credentials") //username and password
   }
  }

  // console.log(session)
  // login(1000,"abc123 ")
  // console.log(session)

function loginRequired(){
  return "user" in session ? true :false
}
  function balanceEnquiry(){
    if(loginRequired()){
      let logedUser=session.user
      console.log(getBalance(logedUser))

    }else{
      console.log("you must login")
    }

  }
  login(1000,"abc123 ")
  balanceEnquiry()
  5000

  //FundTranfer(toacno,amount)
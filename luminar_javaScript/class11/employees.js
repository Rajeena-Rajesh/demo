var employees=[
    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1989,2005],
    [1002,"akhil",7000,"developer",2000,2010],
    [1003,"nikil",35000,"developer",2010,2015],
    [1004,"ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010],
]

//print the number of employees
console.log(employees.length)

//print names of employees

for (let emp of employees){
    console.log(emp[1])
}
//print the experiences of all employees

for(let exp of employees){
    console.log(exp[5]-exp[4])
}

//print the employee name whose id=1000


   for(let emp1 of employees){
       if(emp1[0]==1000){
           console.log(emp1[1])
       }
   }
//print the developers names

for(let emp2 of employees){
    if(emp2[3]=="developer"){
        console.log(emp2[1])
    }
}

//sort employees based on salary
// employees.sort((e1,e2)=> e2[2]-e1[2])
//     console.log(employees)

//push,find,pop,sort

//push an employee details in the the employees array

var details=[1007,"kiran",12000,"developer",2021,2022]
employees.push(details)

console.log(employees)

//change the salary of ravi from 25000 to 30000
employees[4][2]=30000
console.log(employees)

//sort the employees based on their experience

employees.sort((e1,e2)=> (e2[5]-e2[4])-(e1[5]-e1[4]))
    console.log(employees)

   
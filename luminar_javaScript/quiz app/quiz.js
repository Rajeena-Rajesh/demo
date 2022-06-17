let quizData= [{
    question:"Most popular programming language",
    a:"c++",
    b:"python",
    c:"javascript",
    answer:"c"
}]


//console.log(quizData[0].question)
//get element from DOM
let title =document.querySelector('.title')

//task
//display UI
function displayQuestionAnswers(){
title.innerHTML=quizData[0].question
}

//function invoke
displayQuestionAnswers()
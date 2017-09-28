var quiz = [
{question: "This is question one",
answers:[" answer1 of 1 "," answer2 of 1 "," answer3 of 1 "],
correct:"answer1"},

{question: "This is question two",
answers:[" answer1 of 2 "," answer2 of 2 "," answer3 of 2 "],
correct:"answer1"},

{question: "This is question three",
answers:[" answer1 of 3 "," answer2 of 3 "," answer3 of 3 "],
correct:"answer1"},
]

//When startQuiz button is clicked it will replace the button with the form content and start the timer.
$("#startQuiz").on("click", function(){
  document.getElementById("quizButton").innerHTML= "";
  
    var counter = 10 //Adjust this to increase or decrease time
    setInterval(function(){
      counter --;
        if(counter >= 0){
          document.getElementById("timer").innerHTML = counter;
        }
        if(counter === 0){
          clearInterval(counter);
          alert("game over")
        }
    }, 1000);
   console.log("This function is working, don't mess with it."); 

//This is going to generate our page
   for (var i = 0; i < quiz.length; i++) {
     var newDiv1 = $("<div>")
      newDiv1.text(quiz[i].question)
     
     for (var j = 0; j < quiz[i].answers.length; j++) {
      
      var newbtn2 = $("<input type= radio>");
      newbtn2.append(quiz[i].answers[j]);
      console.log(quiz[i].answers[j]);

     }
    $("#maincontent").append(newDiv1);
    $("#maincontent").append(newbtn2);
   }

   

})


//true or false questions
//questions will be a variable.
//answers will be a variable.

$("#submit").on("click", function(){
  console.log("Im working");
  //When startQuiz button is clicked it will replace the button with the form content.
  document.getElementById("maincontent").innerHTML= "";
  $("#maincontent").hide();
  $("#scorecard").show();
})




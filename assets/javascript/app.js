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
$("#sub").hide();
//When startQuiz button is clicked it will replace the button with the form content and start the timer.
$("#startQuiz").on("click", function(){
  document.getElementById("quizButton").innerHTML= "";
  
    var counter = 1000 //Adjust this to increase or decrease time
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
//This for loop generates the questions
   for (var i = 0; i < quiz.length; i++) {
     var newDiv1 = $("<div>");
      newDiv1.text(quiz[i].question);
      $("#maincontent").append(newDiv1);
//This for loop generates the answers   
     for (var j = 0; j < quiz[i].answers.length; j++) {
        var btn = $("<label><input type=radio name=ans" + i + " value=answer" + i +">");
        btn.append(quiz[i].answers[j]);
        console.log(quiz[i].answers[j]);
        $("#maincontent").append(btn);
        console.log(btn)
        $("#sub").show();
     }

  //Conditions   
    
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




var quiz = [
{question: "This is question one",
answers:[" answer1 of 1 "," answer2 of 1 "," answer3 of 1 "],
correct:"answer1 of 1"},

{question: "This is question two",
answers:[" answer1 of 2 "," answer2 of 2 "," answer3 of 2 "],
correct:"answer2 of 2"},

{question: "This is question three",
answers:[" answer1 of 3 "," answer2 of 3 "," answer3 of 3 "],
correct:"answer3 of 3"},
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
        var btn = $("<label><input id=rad" + i + " type=radio name=ans" + i + " value=" + j + ">");
        btn.append(quiz[i].answers[j]);
        console.log(quiz[i].answers[j]);
        console.log(btn);
        $("#maincontent").append(btn);
        console.log(btn)
        $("#sub").show();
      } 
    }
})  

//----------------------------Dont Touch Above This----------------------------------------------      



//Find the selected answer and store it.

// for(var i = 0; i < quiz[i].length; i++) {
    
//     quiz[i].answers[j].onclick = function() {
      
//     console.log(this.value);
//     }
// // -------------------------<input> values----------------------------------------
// //The name starts at ans0
// //The value starts at answer0
// //The id starts at rad0
// //
// var uGuess = ""; //This variable will store the user input
// var cGuess = 0;//This track correct answers
// var iGuess = 0;//This will track incorrect answers

// //For each question. This will be behind the scenes and will not run until timer runs out or user hits submit.
//   if(uGuess===quiz[i].correct){
//     cGuess++
//   }else if(uGuess!==quiz[i].correct)
//     iGuess++    

//-------------------------------------Dont Touch Below This----------------------------------------------
$("#submit").on("click", function(){
  console.log("Im working");
  //When startQuiz button is clicked it will replace the button with the form content.
  document.getElementById("maincontent").innerHTML= "";
  $("#maincontent").hide();
  $("#scorecard").show();
});




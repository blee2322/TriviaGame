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
$("#subtn").hide();
$("#scorecard").hide();
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
        $("#subtn").show();
      } 
    }
 

//----------------------------Dont Touch Above This----------------------------------------------      


  $("#subtn").on("click", function (){
    //Here we are getting user input
    var totans = 3
    var cGuess = 0 
    var quest1 = document.forms["mainform"]["ans0"].value; 
    var quest2 = document.forms["mainform"]["ans1"].value;
    var quest3 = document.forms["mainform"]["ans2"].value;
    var cAns = ["answer1 of 1", "answer2 of 2", "answer3 of 3"];
    console.log(quest1);

    //Conditions for button to submit. This will make sure that all buttons are answered before submission is valid
    for(var a = 1; a <= totans; a++) {
      if(eval("quest" + a) === null || eval("quest" + a) === "") {
        console.log("you missed question" + a);
        return false;

      }
    }

    //Compare user selection with answers

    for(var a = 1; a <= totans; a++) {
      if(eval("quest" + a)=== cAns[a-1]){
        cGuess++
        console.log(cGuess);
      }
    }
    
    $("#maincontent").hide();
    $("#scorecard").show();
    return false;
  })
 

});




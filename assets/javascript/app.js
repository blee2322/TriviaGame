$(document).ready(function() {

$("#maincontent").hide();
$("#scorecard").hide();


//When startQuiz button is clicked it will replace the button with the form content and start the timer.
$("#startQuiz").on("click", function(){
  document.getElementById("quizButton").innerHTML= "";
  $("#maincontent").show();
  var counter = 10 //Adjust this to increase or decrease time
  setInterval(function(){
    counter --;
      if(counter >= 0){
        document.getElementById("timer").innerHTML = counter;
      }
      if(counter === 0){
        clearInterval(counter);
      }
    }, 1000);
  
  

})

$("#submit").on("click", function(){
  console.log("Im working");
  //When startQuiz button is clicked it will replace the button with the form content.
  document.getElementById("maincontent").innerHTML= "";
  $("#maincontent").hide();
  $("#scorecard").show();
})


});

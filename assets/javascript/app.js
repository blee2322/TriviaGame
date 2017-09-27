$(document).ready(function() {

$("#maincontent").hide();
$("#scorecard").hide();

$("#startQuiz").on("click", function(){
  console.log("Im working");
  //When startQuiz button is clicked it will replace the button with the form content.
  document.getElementById("quizButton").innerHTML= "";
  $("#maincontent").show();
})
$("#submit").on("click", function(){
  console.log("Im working");
  //When startQuiz button is clicked it will replace the button with the form content.
  document.getElementById("maincontent").innerHTML= "";
  $("#maincontent").hide();
  $("#scorecard").show();
})

});

function tabulateAnswers() {
  // initialize variables for each choice's score
  // If you add more choices and outcomes, you must add another variable here.
  var c1score = 0;
  var c2score = 0;
  var c3score = 0;
  var c4score = 0;
  
  // get a list of the radio inputs on the page
  var choices = document.getElementsByTagName('input');
  // loop through all the radio inputs
  for (i=0; i<choices.length; i++) {
    // if the radio is checked..
    if (choices[i].checked) {
      // add 1 to that choice's score
      if (choices[i].value == 'c1') {
        c1score = c1score + 100;
      }
      if (choices[i].value == 'c3') {
        c1score = c1score + 100;
      }
      if (choices[i].value == 'c4') {
        c1score = c1score + 100;
      }
      // If you add more choices and outcomes, you must add another if statement below.
    }
  }
  
  // Find out which choice got the highest score.
  // If you add more choices and outcomes, you must add the variable here.
 
  // Display answer corresponding to that choice
  var answerbox = document.getElementById('answer');
  if (c1score == 300) { // If user chooses the first choice the most, this outcome will be displayed.
    answerbox.innerHTML = "You are a A WINNER";
      answerbox.style.backgroundColor="green";
    
      
  }
     else{
          answerbox.innerHTML = "LOSERRRRRRRRRRR";
      }


var elem = document.getElementById("quest1"); 
      elem.style.backgroundColor="blue";
      elem.style.top="100px";

}
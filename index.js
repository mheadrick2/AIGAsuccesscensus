  var c1score = 0;
  var c2score = 0;
  var c3score = 0;
  var c4score = 0;

function tabulateAnswers() {
  // initialize variables for each choice's score

  
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
  
 
  // Display answer corresponding to that choice
  var answerbox = document.getElementById('answer5');
  var cityscape = document.getElementById('cityscape')
  if (c1score == '300') { 
      answerbox.innerHTML = "The Successful Designer";
      answerbox.style.backgroundColor="green";
      answerbox.style.fontSize='24px';
      cityscape.style.opacity='1';
      cityscape.style.position
     }
     
     else{
          answerbox.innerHTML ="Not Quite Right";
      }
  
}


 function numberRandomizer(){
      var x = Math.floor((Math.random() * 500) + 300); //random number between 300 and 800
      return x;
    }

function scrolltopos(){
      document.getElementById("beyondwork").scrollIntoView();
      document.getElementById("forest").scrollIntoView();

     }
    
// TRING SIDE NAV  
function openNav() {
  document.getElementById("plswork").style.height = "70vh";
  document.getElementsByClassName("questions").style.height = "70vh";
}

function closeNav() {
  document.getElementById("plswork").style.height = "5vh";
}
//
//var coll = document.getElementsByClassName("collapsible");
//var i;
//
//for (i = 0; i < coll.length; i++) {
//  coll[i].addEventListener("click", function() {
//    this.classList.toggle("active");
//    var content = document.getElementById("allqs");
//    if (content.style.display === "flex") {
//      content.style.display = "none";
//    } else {
//      content.style.display = "flex";
//    }
//  });
//}
//    
    


//    var elem = document.getElementById('quest1'); 
//      elem.style.backgroundColor="blue";
//      elem.style.opacity="1";
//    var c1scorepx = "c1score"+"px";
//      elem.style.top= "c1scorepx";



//const init = function(){
//	let items = document.querySelectorAll('section');
//	for (let i = 0; i < items.length; i++){
//		items[i].style.background = randomColor({luminosity: 'light'});
//	}
//	cssScrollSnapPolyfill()
//}
//init();
//

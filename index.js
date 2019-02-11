var type =[];
var typeindex = 0;

//var counter = 0;

///////////////for success page/////////////////
//check choice
function validate(){
    var choices = document.getElementsByTagName('input');
    var optionCount = 0;
    for (var i = 0; i < choices.length; i++) {
                if (choices[i].checked) {
                    optionCount++;
                }
            }
    console.log(optionCount);
    if (optionCount != 2){
        alert("Please select 2.");
        return false;
    }
        determineType();
}

//check type
function determineType(){
    var choices = document.getElementsByTagName('input');
    for (i=0; i<choices.length; i++){
        if (choices[i].checked){
            if (choices[i].value == 'longevity'){
                type.push('longevity');
            }
            if (choices[i].value == 'stability'){
                type.push('stability');

            }
            if (choices[i].value == 'satisfaction'){
                type.push('satisfaction');

            }
            if (choices[i].value == 'salary'){
                type.push('salary');
            }
        }
    }
    console.log(type);
    if (type.includes("salary")&& type.includes("satisfaction")){typeindex = 1}
    if (type.includes("salary")&& type.includes("stability")){typeindex = 2}
    if (type.includes("longevity")&& type.includes("stability")){typeindex = 3}
    if (type.includes("longevity")&& type.includes("satisfaction")){typeindex = 4}
    if (type.includes("salary")&& type.includes("longevity")){typeindex = 5}
    if (type.includes("stability")&& type.includes("satisfaction")){typeindex = 6}
    console.log(typeindex);
    localStorage.setItem("type",type);
    localStorage.setItem("typeindex",typeindex);
    
//  redirects
//    window.location.href = "type"+typeindex+".html"
    window.location.href = "confirmation.html"
    }

///////////////confirmation page////////////////
window.onload = function() {
    var type = localStorage.getItem("type");
    var word1 = type.split(",")[0];
    var word2 = type.split(",")[1]
    var typeindex = localStorage.getItem("typeindex");
    
    console.log(type)
    if (type != []){
       //when the document is finished loading, replace everything
       //between the <a ...> </a> tags with the value of splitText
var declaration = "I define success in design as " + word1+" and "+word2+".";
document.getElementById("myChoice").innerHTML = declaration;}
} 


/////////////////   for main //////////////////////
var allChoices = [];
var allImgs = [];
var allLocations = [];


var choices1 = [];
var imgs1 = [];
var locations1 = [];


function type1q1() {
    choices1 = [];
    imgs1 = [];
    locations1 = [];
  var inputs = document.getElementsByTagName('input');
  // loop through all the radio inputs
  for (i=0; i<inputs.length; i++) {
    // if the radio is checked..
    if (inputs[i].checked) {

      if (inputs[i].value == 'c1') {
        choices1.push("technical");
        imgs1.push(loadImage('img/b2.png')); 
          //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c2'){
        choices1.push("communication");
        imgs1.push(loadImage('img/b4.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c3') {
        choices1.push("leadership");
        imgs1.push(loadImage('img/b1.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
        locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c4') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/b2.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
    }}
    allChoices.push(choices1);
    allImgs.push(imgs1);
    allLocations.push(locations1);
    draw();
    
    openNav()
    
    scrolltopos()
}


//function type1q2() {
//    choices1 = [];
//    imgs1 = [];
//    locations1 = [];
//  var inputs = document.getElementsByTagName('input');
//  // loop through all the radio inputs
//  for (i=0; i<inputs.length; i++) {
//    // if the radio is checked..
//    if (inputs[i].checked) {
//
//      if (inputs[i].value == 'c1') {
//        choices1.push("technical");
//        imgs1.push(loadImage('img/s1.png')); 
//          //locations
//          var x = numberRandomizer(.27,.8);
//          var y = numberRandomizer(.51,.61);
//          locations1.push([windowWidth*x,windowHeight*y]);
//      }
//      if (inputs[i].value == 'c2'){
//        choices1.push("communication");
//        imgs1.push(loadImage('img/b4.png'));
//        //locations
//          var x = numberRandomizer(.27,.8);
//          var y = numberRandomizer(.51,.61);
//          locations1.push([windowWidth*x,windowHeight*y]);
//      }
//      if (inputs[i].value == 'c3') {
//        choices1.push("leadership");
//        imgs1.push(loadImage('img/b1.png'));
//        //locations
//          var x = numberRandomizer(.27,.8);
//          var y = numberRandomizer(.51,.61);
//        locations1.push([windowWidth*x,windowHeight*y]);
//      }
//      if (inputs[i].value == 'c4') {
//        choices1.push("thinking");
//        imgs1.push(loadImage('img/b2.png'));
//        //locations
//          var x = numberRandomizer(.27,.8);
//          var y = numberRandomizer(.51,.61);
//         locations1.push([windowWidth*x,windowHeight*y]);
//      }
//        
//        if (inputs[i].value == 'c5'){
//        choices1.push("communication");
//        imgs1.push(loadImage('img/b4.png'));
//        //locations
//          var x = numberRandomizer(.27,.8);
//          var y = numberRandomizer(.51,.61);
//          locations1.push([windowWidth*x,windowHeight*y]);
//      }
//      if (inputs[i].value == 'c6') {
//        choices1.push("leadership");
//        imgs1.push(loadImage('img/b1.png'));
//        //locations
//          var x = numberRandomizer(.27,.8);
//          var y = numberRandomizer(.51,.61);
//        locations1.push([windowWidth*x,windowHeight*y]);
//      }
//      if (inputs[i].value == 'c7') {
//        choices1.push("thinking");
//        imgs1.push(loadImage('img/b2.png'));
//        //locations
//          var x = numberRandomizer(.27,.8);
//          var y = numberRandomizer(.51,.61);
//         locations1.push([windowWidth*x,windowHeight*y]);
//      }
//        
//        
//        
//    }}
//    allChoices.push(choices1);
//    allImgs.push(imgs1);
//    allLocations.push(locations1);
//    draw();
//    
//    openNav()
//    
//    scrolltopos()
//}

  
var canvas;

function setup(){
    canvas = createCanvas(windowWidth,windowHeight);
    canvas.position(0,0);
    canvas.style("z-index","-1");
}

function draw(){
    background(244,252,245);
    for (i=0; i<choices.length; i++){
        image(imgs1[i],locations1[i][0],locations1[i][1],imgs1[i].width/2.5,imgs1[i].height/2.5);}
}



 function numberRandomizer(min,max){
      var x = (Math.random() * (max-min) + min);
      return x;
    }

function scrolltopos(){
      document.getElementById("beyondwork").scrollIntoView();
      document.getElementById("forest").scrollIntoView();

     }
    
// TRING SIDE NAV  
function openNav() {
  document.getElementById("plswork").setAttribute("style","height:70vh");
    document.getElementById("plswork2").setAttribute("style","height:70vh");
    
    document.getElementById("plswork3").setAttribute("style","height:70vh");
    document.getElementById("plswork4").setAttribute("style","height:70vh");
//  document.getElementsByClassName("questions").setAttribute("style","height:70vh");
}

function closeNav() {
    document.getElementById("plswork").style.removeProperty('style');
    document.getElementById("plswork").setAttribute("style","height:5vh");
    
    document.getElementById("plswork2").setAttribute("style","height:5vh");
    
    document.getElementById("plswork3").setAttribute("style","height:5vh");
    
    document.getElementById("plswork4").setAttribute("style","height:5vh");
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

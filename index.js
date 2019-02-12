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

var choices2 = [];
var imgs2 = [];
var locations2 = [];

var choices3 = [];
var imgs3 = [];
var locations3 = [];

var choices4 = [];
var imgs4 = [];
var locations4 = [];

var canvas;

function setup(){
    canvas = createCanvas(windowWidth,windowHeight);
    canvas.position(0,0);
    canvas.style("z-index","-1");
}

function draw(){
    background(244,252,245);
    for (i=0; i<choices1.length; i++){
        image(imgs1[i],locations1[i][0],locations1[i][1],imgs1[i].width/2.5,imgs1[i].height/2.5);}
    for (i=0; i<choices2.length; i++){
        console.log(imgs2)
        image(imgs2[i],locations2[i][0],locations2[i][1],imgs2[i].width/2.5,imgs2[i].height/2.5);}
    for (i=0; i<choices3.length; i++){
        image(imgs1[i],locations1[i][0],locations1[i][1],imgs1[i].width/2.5,imgs1[i].height/2.5);}
    for (i=0; i<choices4.length; i++){
        image(imgs1[i],locations1[i][0],locations1[i][1],imgs1[i].width/2.5,imgs1[i].height/2.5);}
}

//********************************SALARY AND SATISFACTION*****************************

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
    
    closeNav();
    
    waitscroll();
}

function type1q2() {
    choices2 = [];
    imgs2 = [];
    locations2 = [];
  var inputs = document.getElementsByTagName('input');
  // loop through all the radio inputs
  for (i=0; i<inputs.length; i++) {
    // if the radio is checked..
    if (inputs[i].checked) {

      if (inputs[i].value == 'c1') {
        choices2.push("onmyown");
        imgs2.push(loadImage('img/s3.png')); 
          //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations2.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c2'){
        choices2.push("freelance");
        imgs2.push(loadImage('img/s5.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations2.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c3') {
        choices2.push("designforfriends");
        imgs2.push(loadImage('img/s4.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
        locations2.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c4') {
        choices2.push("volunteer");
        imgs2.push(loadImage('img/s2.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations2.push([windowWidth*x,windowHeight*y]);
      }
        
        if (inputs[i].value == 'c5'){
        choices2.push("teach");
        imgs2.push(loadImage('img/s2.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations2.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c6') {
        choices2.push("maintain");
        imgs2.push(loadImage('img/s3.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
        locations2.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c7') {
        choices2.push("none");
        imgs2.push(loadImage('img/s4.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations2.push([windowWidth*x,windowHeight*y]);
      }
        
        
        
    }}
    console.log(imgs2)
    allChoices.push(choices1);
    allImgs.push(imgs1);
    allLocations.push(locations1);
    
    draw();
    
    openNav()
    
//    waitscroll()
}

function type1q3() {
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
        imgs1.push(loadImage('img/f1.png')); 
          //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c2'){
        choices1.push("communication");
        imgs1.push(loadImage('img/f2.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c3') {
        choices1.push("leadership");
        imgs1.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
        locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c4') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/f3.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
        
        if (inputs[i].value == 'c5'){
        choices1.push("communication");
        imgs1.push(loadImage('img/f6.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c6') {
        choices1.push("leadership");
        imgs1.push(loadImage('img/f2.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
        locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c7') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/f3.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
        if (inputs[i].value == 'c8') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c9') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/f5.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c10') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/f5.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c11') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c12') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/f2.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c13') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/f6.png'));
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
    
    waitscroll()
}

function type1q4() {
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
        imgs1.push(loadImage('img/m1.png')); 
          //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c2'){
        choices1.push("communication");
        imgs1.push(loadImage('img/m3.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c3') {
        choices1.push("leadership");
        imgs1.push(loadImage('img/m2.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
        locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c4') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/m3.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
        
        if (inputs[i].value == 'c5'){
        choices1.push("communication");
        imgs1.push(loadImage('img/m4.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c6') {
        choices1.push("leadership");
        imgs1.push(loadImage('img/m4.png'));
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
    
    waitscroll()
}



//****************************SALARY AND STABILITY*****************************

function type2q1() {
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
    
    closeNav();
    
    waitscroll();
}

function type2q2() {
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
        imgs1.push(loadImage('img/s3.png')); 
          //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c2'){
        choices1.push("communication");
        imgs1.push(loadImage('img/s5.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c3') {
        choices1.push("leadership");
        imgs1.push(loadImage('img/s4.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
        locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c4') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/s2.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
        
        if (inputs[i].value == 'c5'){
        choices1.push("communication");
        imgs1.push(loadImage('img/s2.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c6') {
        choices1.push("leadership");
        imgs1.push(loadImage('img/s3.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
        locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c7') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/s4.png'));
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
    
    waitscroll()
}

function type2q3() {
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
        imgs1.push(loadImage('img/f1.png')); 
          //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c2'){
        choices1.push("communication");
        imgs1.push(loadImage('img/f2.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c3') {
        choices1.push("leadership");
        imgs1.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
        locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c4') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/f3.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
        
        if (inputs[i].value == 'c5'){
        choices1.push("communication");
        imgs1.push(loadImage('img/f6.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c6') {
        choices1.push("leadership");
        imgs1.push(loadImage('img/f2.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
        locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c7') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/f3.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
        if (inputs[i].value == 'c8') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c9') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/f5.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c10') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/f5.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c11') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c12') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/f2.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c13') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/f5.png'));
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
    
    waitscroll()
}

function type2q4() {
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
        imgs1.push(loadImage('img/m1.png')); 
          //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c2'){
        choices1.push("communication");
        imgs1.push(loadImage('img/m3.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c3') {
        choices1.push("leadership");
        imgs1.push(loadImage('img/m3.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
        locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c4') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/m3.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
        
        if (inputs[i].value == 'c5'){
        choices1.push("communication");
        imgs1.push(loadImage('img/m4.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c6') {
        choices1.push("leadership");
        imgs1.push(loadImage('img/m4.png'));
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
    
    waitscroll()
}



//****************************LONGEVITY AND STABILITY*****************************

function type3q1() {
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
        imgs1.push(loadImage('img/b4.png')); 
          //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c2'){
        choices1.push("communication");
        imgs1.push(loadImage('img/b2.png'));
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
    
    closeNav();
    
    waitscroll();
}

function type3q2() {
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
        imgs1.push(loadImage('img/s1.png')); 
          //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c2'){
        choices1.push("communication");
        imgs1.push(loadImage('img/s4.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c3') {
        choices1.push("leadership");
        imgs1.push(loadImage('img/s4.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
        locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c4') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/s1.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
        
        if (inputs[i].value == 'c5'){
        choices1.push("communication");
        imgs1.push(loadImage('img/s1.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c6') {
        choices1.push("leadership");
        imgs1.push(loadImage('img/s5.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
        locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c7') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/s3.png'));
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
    
    waitscroll()
}

function type3q3() {
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
        imgs1.push(loadImage('img/f3.png')); 
          //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c2'){
        choices1.push("communication");
        imgs1.push(loadImage('img/f1.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c3') {
        choices1.push("leadership");
        imgs1.push(loadImage('img/f2.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
        locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c4') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
        
        if (inputs[i].value == 'c5'){
        choices1.push("communication");
        imgs1.push(loadImage('img/f6.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c6') {
        choices1.push("leadership");
        imgs1.push(loadImage('img/f2.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
        locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c7') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
        if (inputs[i].value == 'c8') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c9') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c10') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/f3.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c11') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/f2.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c12') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/f5.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c13') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/f4.png'));
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
    
    waitscroll()
}

function type3q4() {
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
        imgs1.push(loadImage('img/m1.png')); 
          //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c2'){
        choices1.push("communication");
        imgs1.push(loadImage('img/m2.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c3') {
        choices1.push("leadership");
        imgs1.push(loadImage('img/m4.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
        locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c4') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/m4.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
        
        if (inputs[i].value == 'c5'){
        choices1.push("communication");
        imgs1.push(loadImage('img/m4.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c6') {
        choices1.push("leadership");
        imgs1.push(loadImage('img/m5.png'));
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
    
    waitscroll()
}



//****************************LONGEVITY AND SATISFACTION*****************************

function type4q1() {
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
        imgs1.push(loadImage('img/b4.png')); 
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
        imgs1.push(loadImage('img/b2.png'));
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
    
    closeNav();
    
    waitscroll();
}

function type4q2() {
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
        imgs1.push(loadImage('img/s1.png')); 
          //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c2'){
        choices1.push("communication");
        imgs1.push(loadImage('img/s4.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c3') {
        choices1.push("leadership");
        imgs1.push(loadImage('img/s4.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
        locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c4') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/s1.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
        
        if (inputs[i].value == 'c5'){
        choices1.push("communication");
        imgs1.push(loadImage('img/s1.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c6') {
        choices1.push("leadership");
        imgs1.push(loadImage('img/s5.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
        locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c7') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/s3.png'));
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
    
    waitscroll()
}

function type4q3() {
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
        imgs1.push(loadImage('img/f4.png')); 
          //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c2'){
        choices1.push("communication");
        imgs1.push(loadImage('img/f1.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c3') {
        choices1.push("leadership");
        imgs1.push(loadImage('img/f2.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
        locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c4') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
        
        if (inputs[i].value == 'c5'){
        choices1.push("communication");
        imgs1.push(loadImage('img/f6.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c6') {
        choices1.push("leadership");
        imgs1.push(loadImage('img/f2.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
        locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c7') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
        if (inputs[i].value == 'c8') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c9') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c10') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/f3.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c11') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/f2.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c12') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/f5.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c13') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/f4.png'));
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
    
    waitscroll()
}

function type4q4() {
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
        imgs1.push(loadImage('img/m1.png')); 
          //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c2'){
        choices1.push("communication");
        imgs1.push(loadImage('img/m2.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c3') {
        choices1.push("leadership");
        imgs1.push(loadImage('img/m1.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
        locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c4') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/m4.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
        
        if (inputs[i].value == 'c5'){
        choices1.push("communication");
        imgs1.push(loadImage('img/m4.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c6') {
        choices1.push("leadership");
        imgs1.push(loadImage('img/m5.png'));
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
    
    waitscroll()
}



//****************************SALARY AND LONGEVITY*****************************

function type5q1() {
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
        imgs1.push(loadImage('img/b4.png')); 
          //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c2'){
        choices1.push("communication");
        imgs1.push(loadImage('img/b3.png'));
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
    
    closeNav();
    
    waitscroll();
}

function type5q2() {
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
        imgs1.push(loadImage('img/s1.png')); 
          //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c2'){
        choices1.push("communication");
        imgs1.push(loadImage('img/s5.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c3') {
        choices1.push("leadership");
        imgs1.push(loadImage('img/s5.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
        locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c4') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/s1.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
        
        if (inputs[i].value == 'c5'){
        choices1.push("communication");
        imgs1.push(loadImage('img/s1.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c6') {
        choices1.push("leadership");
        imgs1.push(loadImage('img/s5.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
        locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c7') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/s4.png'));
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

function type5q3() {
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
        imgs1.push(loadImage('img/f4.png')); 
          //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c2'){
        choices1.push("communication");
        imgs1.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c3') {
        choices1.push("leadership");
        imgs1.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
        locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c4') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
        
        if (inputs[i].value == 'c5'){
        choices1.push("communication");
        imgs1.push(loadImage('img/f6.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c6') {
        choices1.push("leadership");
        imgs1.push(loadImage('img/f5.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
        locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c7') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
        if (inputs[i].value == 'c8') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c9') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c10') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c11') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c12') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c13') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/f4.png'));
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

function type5q4() {
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
        imgs1.push(loadImage('img/m3.png')); 
          //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c2'){
        choices1.push("communication");
        imgs1.push(loadImage('img/m3.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c3') {
        choices1.push("leadership");
        imgs1.push(loadImage('img/m2.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
        locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c4') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/m4.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
        
        if (inputs[i].value == 'c5'){
        choices1.push("communication");
        imgs1.push(loadImage('img/m3.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c6') {
        choices1.push("leadership");
        imgs1.push(loadImage('img/m5.png'));
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



//****************************STABILITY AND SATISFACTION*****************************

function type6q1() {
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
        imgs1.push(loadImage('img/b3.png')); 
          //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c2'){
        choices1.push("communication");
        imgs1.push(loadImage('img/b2.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c3') {
        choices1.push("leadership");
        imgs1.push(loadImage('img/b3.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
        locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c4') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/b3.png'));
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
    
    closeNav();
    
    waitscroll();
}

function type6q2() {
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
        imgs1.push(loadImage('img/s3.png')); 
          //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c2'){
        choices1.push("communication");
        imgs1.push(loadImage('img/s3.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c3') {
        choices1.push("leadership");
        imgs1.push(loadImage('img/s2.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
        locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c4') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/s3.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
        
        if (inputs[i].value == 'c5'){
        choices1.push("communication");
        imgs1.push(loadImage('img/s3.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c6') {
        choices1.push("leadership");
        imgs1.push(loadImage('img/s3.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
        locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c7') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/s3.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
        
        
        
    }}
    
    for (i=0; i<choices1.length; i++){
    allChoices.push(choices1[i]);
    allImgs.push(imgs1[i]);
    allLocations.push(locations1[i]);}
    draw();
    
    openNav()
    
    scrolltopos()
}

function type6q3() {
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
        imgs1.push(loadImage('img/f3.png')); 
          //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c2'){
        choices1.push("communication");
        imgs1.push(loadImage('img/f1.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c3') {
        choices1.push("leadership");
        imgs1.push(loadImage('img/f3.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
        locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c4') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/f5.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
        
        if (inputs[i].value == 'c5'){
        choices1.push("communication");
        imgs1.push(loadImage('img/f6.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c6') {
        choices1.push("leadership");
        imgs1.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
        locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c7') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
        if (inputs[i].value == 'c8') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c9') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c10') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c11') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c12') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c13') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/f4.png'));
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

function type6q4() {
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
        imgs1.push(loadImage('img/m1.png')); 
          //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c2'){
        choices1.push("communication");
        imgs1.push(loadImage('img/m3.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c3') {
        choices1.push("leadership");
        imgs1.push(loadImage('img/m3.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
        locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c4') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/m3.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
        
        if (inputs[i].value == 'c5'){
        choices1.push("communication");
        imgs1.push(loadImage('img/m3.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c6') {
        choices1.push("leadership");
        imgs1.push(loadImage('img/m3.png'));
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


 function numberRandomizer(min,max){
      var x = (Math.random() * (max-min) + min);
      return x;
    }

function waitscroll() {
  setTimeout(function(){ document.getElementById("beyondwork").scrollIntoView();
      document.getElementById("forest").scrollIntoView();
                       }, 2000);
}
//wait 2 sec before switching screens

//function scrolltopos(){
//      document.getElementById("beyondwork").scrollIntoView();
//      document.getElementById("forest").scrollIntoView();
//
//     }
    
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

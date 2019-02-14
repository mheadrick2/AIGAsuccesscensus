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
    if (typeindex == 1){
        document.getElementById("direct").href="main.html";
    } else{
        document.getElementById("direct").href="main"+typeindex+".html";
        
    }
    
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


 function numberRandomizer(min,max){
      var x = (Math.random() * (max-min) + min);
      return x;
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

function waitscroll() {
  setTimeout(function(){ document.getElementById("beyondwork").scrollIntoView();
                       }, 2000);
    moveq2();
}

function waitscroll2() {
  setTimeout(function(){ 
      document.getElementById("fieldofwork").scrollIntoView();
                       }, 2000);
    moveq3();
    
}

function waitscroll3() {
  setTimeout(function(){ 
      document.getElementById("honeskills").scrollIntoView();
                       }, 2000);
    moveq4();
    
}


//********************************SALARY AND SATISFACTION*****************************

function type1q1() {
    choices1 = [];
    imgs1 = [];
    locations1 = [];
    qIndex = 1;
  var inputs = document.getElementsByTagName('input');
  // loop through all the radio inputs
  for (i=0; i<inputs.length; i++) {
    // if the radio is checked..
    if (inputs[i].checked) {

      if (inputs[i].value == '11') {
        choices1.push("technical");
        imgs1.push(loadImage('img/b2.png')); 
          //locations
          var x = numberRandomizer(.31,.4);
          var y = numberRandomizer(.38,.42);
          locations1.push([windowWidth*x,windowHeight*y]);
          
          choices1.push("technical");
        imgs1.push(loadImage('img/b2.png')); 
          //locations
          var x = numberRandomizer(.41,.52);
          var y = numberRandomizer(.28,.34);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '12'){
        choices1.push("communication");
        imgs1.push(loadImage('img/b4.png'));
        //locations
          var x = numberRandomizer(.82,.98);
          var y = numberRandomizer(.12,.2);
          locations1.push([windowWidth*x,windowHeight*y]);
          
        choices1.push("communication");
        imgs1.push(loadImage('img/b4.png'));
        //locations
          var x = numberRandomizer(.87,.94);
          var y = numberRandomizer(.2,.3);
          locations1.push([windowWidth*x,windowHeight*y]); 
          
          
        choices1.push("communication");
        imgs1.push(loadImage('img/b4.png'));
        //locations
          var x = numberRandomizer(.92,.99);
          var y = numberRandomizer(.7,.8);
          locations1.push([windowWidth*x,windowHeight*y]);    
      }
      if (inputs[i].value == '13') {
        choices1.push("leadership");
        imgs1.push(loadImage('img/b1.png'));
        //locations
          var x = numberRandomizer(.02,.1);
          var y = numberRandomizer(.25,.32);
        locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '14') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/b2.png'));
        //locations
          var x = numberRandomizer(.2,.35);
          var y = numberRandomizer(.12,.19);
         locations1.push([windowWidth*x,windowHeight*y]);
          
       
      }
    }}
    for (i=0; i<choices1.length; i++){
        allChoices.push(choices1[i]);
        allImgs.push(imgs1[i]);
        allLocations.push(locations1[i]);}
    draw();
    
    closeNav();
    
    waitscroll();
}

function type1q2() {
    choices2 = [];
    imgs2 = [];
    locations2 = [];
    qIndex = 2;
  var inputs = document.getElementsByTagName('input');
  // loop through all the radio inputs
  for (i=0; i<inputs.length; i++) {
    // if the radio is checked..
    if (inputs[i].checked) {

      if (inputs[i].value == '21') {
        choices2.push("onmyown");
        imgs2.push(loadImage('img/s3.png')); 
          //locations
          var x = numberRandomizer(.82,.86);
          var y = numberRandomizer(.12,.18);
          locations2.push([windowWidth+windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '22'){
        choices2.push("freelance");
        imgs2.push(loadImage('img/s5.png'));
        //locations
          var x = numberRandomizer(.6,.65);
          var y = numberRandomizer(.67,.73);
          locations2.push([windowWidth+windowWidth*x,windowHeight*y]);
          
          choices2.push("freelance");
        imgs2.push(loadImage('img/s5.png'));
        //locations
          var x = numberRandomizer(.65,.68);
          var y = numberRandomizer(.77,.85);
          locations2.push([windowWidth+windowWidth*x,windowHeight*y]);
          
          choices2.push("freelance");
        imgs2.push(loadImage('img/s5.png'));
        //locations
          var x = numberRandomizer(.68,.73);
          var y = numberRandomizer(.83,.89);
          locations2.push([windowWidth+windowWidth*x,windowHeight*y]);
          
           choices2.push("freelance");
        imgs2.push(loadImage('img/s5.png'));
        //locations
          var x = numberRandomizer(.6,.73);
          var y = numberRandomizer(.73,.8);
          locations2.push([windowWidth+windowWidth*x,windowHeight*y]);
          
      }
      if (inputs[i].value == '23') {
        choices2.push("designforfriends");
        imgs2.push(loadImage('img/s4.png'));
        //locations
          var x = numberRandomizer(.79,.88);
          var y = numberRandomizer(.5,.6);
        locations2.push([windowWidth+windowWidth*x,windowHeight*y]);
          
          choices2.push("designforfriends");
        imgs2.push(loadImage('img/s4.png'));
        //locations
          var x = numberRandomizer(.82,.93);
          var y = numberRandomizer(.55,.63);
        locations2.push([windowWidth+windowWidth*x,windowHeight*y]);
      }
        
      if (inputs[i].value == '24') {
        choices2.push("volunteer");
        imgs2.push(loadImage('img/s2.png'));
        //locations
          var x = numberRandomizer(.25,.38);
          var y = numberRandomizer(.18,.35);
         locations2.push([windowWidth+windowWidth*x,windowHeight*y]);
      }
        
        if (inputs[i].value == '25'){
        choices2.push("teach");
        imgs2.push(loadImage('img/s2.png'));
        //locations
          var x = numberRandomizer(.84,.89);
          var y = numberRandomizer(.75,.85);
          locations2.push([windowWidth+windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '26') {
        choices2.push("maintain");
        imgs2.push(loadImage('img/s3.png'));
        //locations
          var x = numberRandomizer(.32,.4);
          var y = numberRandomizer(.88,.93);
        locations2.push([windowWidth+windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '27') {
        choices2.push("none");
        imgs2.push(loadImage('img/s4.png'));
        //locations
          var x = numberRandomizer(.85,.88);
          var y = numberRandomizer(.3,.37);
         locations2.push([windowWidth+windowWidth*x,windowHeight*y]);
          
        choices2.push("none");
        imgs2.push(loadImage('img/s4.png'));
        //locations
          var x = numberRandomizer(.9,.95);
          var y = numberRandomizer(.4,.47);
         locations2.push([windowWidth+windowWidth*x,windowHeight*y]);
      }
        
        
        
    }}
    console.log(imgs2)
    for (i=0; i<choices2.length; i++){
        allChoices.push(choices2[i]);
        allImgs.push(imgs2[i]);
        allLocations.push(locations2[i]);}
    
    draw();
    
    closeNav();
    
    waitscroll2();
}

function type1q3() {
    choices3 = [];
    imgs3 = [];
    locations3 = [];
    qIndex = 3;
    var inputs = document.getElementsByTagName('input');
  // loop through all the radio inputs
  for (i=0; i<inputs.length; i++) {
    // if the radio is checked..
    if (inputs[i].checked) {

      if (inputs[i].value == '31') {
        choices3.push("UI/UX/Inter/Exp");
        imgs3.push(loadImage('img/f1.png')); 
          //locations
          var x = numberRandomizer(.75,.8);
          var y = numberRandomizer(.85,.9);
          locations3.push([windowWidth+windowWidth*x,windowHeight+windowHeight*y]);
      }
      if (inputs[i].value == '32'){
        choices3.push("Comm/Graphic Des");
        imgs3.push(loadImage('img/f2.png'));
        //locations
          var x = numberRandomizer(.94,.98);
          var y = numberRandomizer(.2,.28);
          locations3.push([windowWidth+windowWidth*x,windowHeight+windowHeight*y]);
      }
      if (inputs[i].value == '33') {
        choices3.push("Motion/Film/Production");
        imgs3.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.45,.48);
          var y = numberRandomizer(.34,.39);
        locations3.push([windowWidth+windowWidth*x,windowHeight+windowHeight*y]);
            
      }
      if (inputs[i].value == '34') {
        choices3.push("Emerging Tech");
        imgs3.push(loadImage('img/f3.png'));
        //locations
          var x = numberRandomizer(.34,.39);
          var y = numberRandomizer(.52,.56);
         locations3.push([windowWidth+windowWidth*x,windowHeight+windowHeight*y]);
      }
        
        if (inputs[i].value == '35'){
        choices3.push("Research/Data Analy");
        imgs3.push(loadImage('img/f6.png'));
        //locations
          var x = numberRandomizer(.9,.97);
          var y = numberRandomizer(.88,.92);
          locations3.push([windowWidth+windowWidth*x,windowHeight+windowHeight*y]);
            
        choices3.push("Research/Data Analy");
        imgs3.push(loadImage('img/f6.png'));
        //locations
          var x = numberRandomizer(.84,.92);
          var y = numberRandomizer(.89,.94);
          locations3.push([windowWidth+windowWidth*x,windowHeight+windowHeight*y]);
            
        choices3.push("Research/Data Analy");
        imgs3.push(loadImage('img/f6.png'));
        //locations
          var x = numberRandomizer(.92,.98);
          var y = numberRandomizer(.89,.95);
          locations3.push([windowWidth+windowWidth*x,windowHeight+windowHeight*y]);
            
 
      }
      if (inputs[i].value == '36') {
        choices3.push("Front End/Web");
        imgs3.push(loadImage('img/f2.png'));
        //locations
          var x = numberRandomizer(.3,.45);
          var y = numberRandomizer(.85,.9);
        locations3.push([windowWidth+windowWidth*x,windowHeight+windowHeight*y]);
      }
      if (inputs[i].value == '37') {
        choices3.push("Civic/Impact/Service/Strat");
        imgs3.push(loadImage('img/f3.png'));
        //locations
          var x = numberRandomizer(.1,.18);
          var y = numberRandomizer(.82,.87);
         locations3.push([windowWidth+windowWidth*x,windowHeight+windowHeight*y]);
      }
        if (inputs[i].value == '38') {
        choices3.push("Interior Des");
        imgs3.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.97,.99);
          var y = numberRandomizer(.52,.76);
         locations3.push([windowWidth+windowWidth*x,windowHeight+windowHeight*y]);
      }
      if (inputs[i].value == '39') {
        choices3.push("Illustration");
        imgs3.push(loadImage('img/f5.png'));
        //locations
          var x = numberRandomizer(.17,.28);
          var y = numberRandomizer(.9,.96);
         locations3.push([windowWidth+windowWidth*x,windowHeight+windowHeight*y]);
          
        choices3.push("Illustration");
        imgs3.push(loadImage('img/f5.png'));
        //locations
          var x = numberRandomizer(.17,.32);
          var y = numberRandomizer(.9,.96);
         locations3.push([windowWidth+windowWidth*x,windowHeight+windowHeight*y]);  
      }
      if (inputs[i].value == '310') {
        choices3.push("Marketing");
        imgs3.push(loadImage('img/f5.png'));
        //locations
          var x = numberRandomizer(.67,.72);
          var y = numberRandomizer(.62,.67);
         locations3.push([windowWidth+windowWidth*x,windowHeight+windowHeight*y]);}
          
        if (inputs[i].value == '310') {
        choices3.push("Marketing");
        imgs3.push(loadImage('img/f5.png'));
        //locations
          var x = numberRandomizer(.65,.76);
          var y = numberRandomizer(.67,.72);
         locations3.push([windowWidth+windowWidth*x,windowHeight+windowHeight*y]);  
      }
      if (inputs[i].value == '311') {
        choices3.push("Edu");
        imgs3.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.1,.18);
          var y = numberRandomizer(.48,.52);
         locations3.push([windowWidth+windowWidth*x,windowHeight+windowHeight*y]);
      }
      if (inputs[i].value == '312') {
        choices3.push("Automotive/Product");
        imgs3.push(loadImage('img/f2.png'));
        //locations
          var x = numberRandomizer(.38,.47);
          var y = numberRandomizer(.42,.45);
         locations3.push([windowWidth+windowWidth*x,windowHeight+windowHeight*y]);
      }
      if (inputs[i].value == '313') {
        choices3.push("Fashion");
        imgs3.push(loadImage('img/f6.png'));
        //locations
          var x = numberRandomizer(.4,.47);
          var y = numberRandomizer(.94,.99);
         locations3.push([windowWidth+windowWidth*x,windowHeight+windowHeight*y]);
          
         choices3.push("Fashion");
        imgs3.push(loadImage('img/f6.png'));
        //locations
          var x = numberRandomizer(.43,.52);
          var y = numberRandomizer(.95,.98);
         locations3.push([windowWidth+windowWidth*x,windowHeight+windowHeight*y]); 
      }
        
        
        
    }}
    for (i=0; i<choices3.length; i++){
        allChoices.push(choices3[i]);
        allImgs.push(imgs3[i]);
        allLocations.push(locations3[i]);}
    draw();
    
    closeNav();
    
    waitscroll3();
}

function type1q4() {
    choices4 = [];
    imgs4 = [];
    locations4 = [];
    qIndex = 4;
  var inputs = document.getElementsByTagName('input');
  // loop through all the radio inputs
  for (i=0; i<inputs.length; i++) {
    // if the radio is checked..
    if (inputs[i].checked) {

      if (inputs[i].value == '41') {
        choices4.push("technical");
        imgs4.push(loadImage('img/m1.png')); 
          //locations
          var x = numberRandomizer(.42,.65);
          var y = numberRandomizer(.51,.66);
          locations4.push([windowWidth*x,windowHeight+windowHeight*y]);
      }
      if (inputs[i].value == '42'){
        choices4.push("communication");
        imgs4.push(loadImage('img/m3.png'));
        //locations
          var x = numberRandomizer(.19,.27);
          var y = numberRandomizer(.73,.79);
          locations4.push([windowWidth*x,windowHeight+windowHeight*y]);
      }
      if (inputs[i].value == '43') {
        choices4.push("leadership");
        imgs4.push(loadImage('img/m2.png'));
        //locations
          var x = numberRandomizer(.05,.17);
          var y = numberRandomizer(.37,.43);
        locations4.push([windowWidth*x,windowHeight+windowHeight*y]);
      }
      if (inputs[i].value == '44') {
        choices4.push("thinking");
        imgs4.push(loadImage('img/m3.png'));
        //locations
          var x = numberRandomizer(.04,.12);
          var y = numberRandomizer(.2,.29);
         locations4.push([windowWidth*x,windowHeight+windowHeight*y]);
      }
        
        if (inputs[i].value == '45'){
        choices4.push("Creative");
        imgs4.push(loadImage('img/m4.png'));
        //locations
          var x = numberRandomizer(.3,.43);
          var y = numberRandomizer(.6,.68);
          locations4.push([windowWidth*x,windowHeight+windowHeight*y]);
            
            
        choices4.push("Creative");
        imgs4.push(loadImage('img/m4.png'));
        //locations
          var x = numberRandomizer(.3,.43);
          var y = numberRandomizer(.4,.48);
          locations4.push([windowWidth*x,windowHeight+windowHeight*y]);
            
        choices4.push("Creative");
        imgs4.push(loadImage('img/m4.png'));
        //locations
          var x = numberRandomizer(.3,.43);
          var y = numberRandomizer(.7,.78);
          locations4.push([windowWidth*x,windowHeight+windowHeight*y]);    
      }
      if (inputs[i].value == '46') {
        choices4.push("Digital Des");
        imgs4.push(loadImage('img/m4.png'));
        //locations
          var x = numberRandomizer(.1,.23);
          var y = numberRandomizer(.93,.98);
        locations4.push([windowWidth*x,windowHeight+windowHeight*y]);
          
        choices4.push("Digital Des");
        imgs4.push(loadImage('img/m4.png'));
        //locations
          var x = numberRandomizer(.2,.33);
          var y = numberRandomizer(.92,.97);
        locations4.push([windowWidth*x,windowHeight+windowHeight*y]);
          
        choices4.push("Digital Des");
        imgs4.push(loadImage('img/m4.png'));
        //locations
          var x = numberRandomizer(.5,.73);
          var y = numberRandomizer(.9,.99);
        locations4.push([windowWidth*x,windowHeight+windowHeight*y]);  
      }
        
        
        
    }}
    for (i=0; i<choices4.length; i++){
        allChoices.push(choices4[i]);
        allImgs.push(imgs4[i]);
        allLocations.push(locations4[i]);}
    draw();
    
    openNav();
    
    zoomOut();

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

      if (inputs[i].value == '11') {
        choices1.push("technical");
        imgs1.push(loadImage('img/b2.png')); 
          //locations
          var x = numberRandomizer(.31,.4);
          var y = numberRandomizer(.38,.42);
          locations1.push([windowWidth*x,windowHeight*y]);
          
          choices1.push("technical");
        imgs1.push(loadImage('img/b2.png')); 
          //locations
          var x = numberRandomizer(.31,.4);
          var y = numberRandomizer(.38,.42);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '12'){
        choices1.push("communication");
        imgs1.push(loadImage('img/b4.png'));
        //locations
          var x = numberRandomizer(.82,.98);
          var y = numberRandomizer(.12,.2);
          locations1.push([windowWidth*x,windowHeight*y]);
          
        choices1.push("communication");
        imgs1.push(loadImage('img/b4.png'));
        //locations
          var x = numberRandomizer(.87,.94);
          var y = numberRandomizer(.2,.3);
          locations1.push([windowWidth*x,windowHeight*y]);
          
          choices1.push("communication");
        imgs1.push(loadImage('img/b4.png'));
        //locations
          var x = numberRandomizer(.92,.99);
          var y = numberRandomizer(.7,.8);
          locations1.push([windowWidth*x,windowHeight*y]); 
      }
      if (inputs[i].value == '13') {
        choices1.push("leadership");
        imgs1.push(loadImage('img/b1.png'));
        //locations
          var x = numberRandomizer(.02,.1);
          var y = numberRandomizer(.25,.32);
        locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '14') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/b2.png'));
        //locations
          var x = numberRandomizer(.2,.35);
          var y = numberRandomizer(.12,.19);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
    }}
    for (i=0; i<choices1.length; i++){
        allChoices.push(choices1[i]);
        allImgs.push(imgs1[i]);
        allLocations.push(locations1[i]);}
    draw();
    
    closeNav();
    
    waitscroll();
}

function type2q2() {
    choices2 = [];
    imgs2 = [];
    locations2 = [];
  var inputs = document.getElementsByTagName('input');
  // loop through all the radio inputs
  for (i=0; i<inputs.length; i++) {
    // if the radio is checked..
    if (inputs[i].checked) {

      if (inputs[i].value == '21') {
        choices2.push("onmyown");
        imgs2.push(loadImage('img/s3.png')); 
          //locations
          var x = numberRandomizer(.82,.86);
          var y = numberRandomizer(.12,.18);
          locations2.push([windowWidth*x,windowHeight*y]);
      }
        
      if (inputs[i].value == '22'){
        choices2.push("freelance");
        imgs2.push(loadImage('img/s5.png'));
        //locations
          var x = numberRandomizer(.6,.65);
          var y = numberRandomizer(.67,.73);
          locations2.push([windowWidth*x,windowHeight*y]);
          
          choices2.push("freelance");
        imgs2.push(loadImage('img/s5.png'));
        //locations
          var x = numberRandomizer(.65,.68);
          var y = numberRandomizer(.77,.85);
          locations2.push([windowWidth*x,windowHeight*y]);
          
        choices2.push("freelance");
        imgs2.push(loadImage('img/s5.png'));
        //locations
          var x = numberRandomizer(.68,.73);
          var y = numberRandomizer(.83,.89);
          locations2.push([windowWidth*x,windowHeight*y]);  
      }
        
      if (inputs[i].value == '23') {
        choices2.push("friends");
        imgs2.push(loadImage('img/s4.png'));
        //locations
          var x = numberRandomizer(.79,.88);
          var y = numberRandomizer(.5,.6);
        locations2.push([windowWidth*x,windowHeight*y]);
          
        choices2.push("friends");
        imgs2.push(loadImage('img/s4.png'));
        //locations
          var x = numberRandomizer(.82,.93);
          var y = numberRandomizer(.55,.63);
        locations2.push([windowWidth*x,windowHeight*y]);  
      }
        
      if (inputs[i].value == '24') {
        choices2.push("volunteer");
        imgs2.push(loadImage('img/s2.png'));
        //locations
          var x = numberRandomizer(.25,.38);
          var y = numberRandomizer(.18,.35);
         locations2.push([windowWidth*x,windowHeight*y]);
      }
        
        if (inputs[i].value == '25'){
        choices2.push("teach");
        imgs2.push(loadImage('img/s2.png'));
        //locations
          var x = numberRandomizer(.84,.89);
          var y = numberRandomizer(.75,.85);
          locations2.push([windowWidth*x,windowHeight*y]);
      }
        
      if (inputs[i].value == '26') {
        choices2.push("maintain");
        imgs2.push(loadImage('img/s3.png'));
        //locations
          var x = numberRandomizer(.32,.4);
          var y = numberRandomizer(.88,.93);
        locations2.push([windowWidth*x,windowHeight*y]);
      }
        
      if (inputs[i].value == '27') {
        choices2.push("none");
        imgs2.push(loadImage('img/s4.png'));
        //locations
          var x = numberRandomizer(.85,.88);
          var y = numberRandomizer(.3,.37);
         locations2.push([windowWidth*x,windowHeight*y]);
          
          
         choices2.push("none");
        imgs2.push(loadImage('img/s4.png'));
        //locations
          var x = numberRandomizer(.9,.95);
          var y = numberRandomizer(.4,.47);
         locations2.push([windowWidth*x,windowHeight*y]); 
      }
        
    }}
    
    console.log(imgs2)
    for (i=0; i<choices2.length; i++){
        allChoices.push(choices2[i]);
        allImgs.push(imgs2[i]);
        allLocations.push(locations2[i]);}
    
    draw();
    
    closeNav();
    
     waitscroll2();
}

function type2q3() {
    choices3 = [];
    imgs3 = [];
    locations3 = [];
    var inputs = document.getElementsByTagName('input');
  // loop through all the radio inputs
  for (i=0; i<inputs.length; i++) {
    // if the radio is checked..
    if (inputs[i].checked) {

      if (inputs[i].value == '31') {
        choices3.push("UI/UX/Inter/Exp");
        imgs3.push(loadImage('img/f1.png')); 
          //locations
          var x = numberRandomizer(.75,.8);
          var y = numberRandomizer(.85,.9);
          locations3.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '32'){
        choices3.push("Comm/Graphic Des");
        imgs3.push(loadImage('img/f2.png'));
        //locations
          var x = numberRandomizer(.94,.98);
          var y = numberRandomizer(.2,.28);
          locations3.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '33') {
        choices3.push("Motion/Film/Production");
        imgs3.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.45,.48);
          var y = numberRandomizer(.34,.39);
        locations3.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '34') {
        choices3.push("Emerging Tech");
        imgs3.push(loadImage('img/f3.png'));
        //locations
          var x = numberRandomizer(.34,.39);
          var y = numberRandomizer(.52,.56);
         locations3.push([windowWidth*x,windowHeight*y]);
      }
        
        if (inputs[i].value == '35'){
        choices3.push("Research/Data Analy");
        imgs3.push(loadImage('img/f6.png'));
        //locations
          var x = numberRandomizer(.9,.97);
          var y = numberRandomizer(.88,.92);
          locations3.push([windowWidth*x,windowHeight*y]);
        
        choices3.push("Research/Data Analy");
        imgs3.push(loadImage('img/f6.png'));
        //locations
          var x = numberRandomizer(.84,.92);
          var y = numberRandomizer(.89,.94);
          locations3.push([windowWidth*x,windowHeight*y]);
            
        choices3.push("Research/Data Analy");
        imgs3.push(loadImage('img/f6.png'));
        //locations
          var x = numberRandomizer(.92,.98);
          var y = numberRandomizer(.89,.95);
          locations3.push([windowWidth*x,windowHeight*y]);
      }
        
      if (inputs[i].value == '36') {
        choices3.push("Front End/Web");
        imgs3.push(loadImage('img/f2.png'));
        //locations
          var x = numberRandomizer(.3,.45);
          var y = numberRandomizer(.85,.9);
        locations3.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '37') {
        choices3.push("Civic/Impact/Service/Strat");
        imgs3.push(loadImage('img/f3.png'));
        //locations
          var x = numberRandomizer(.1,.18);
          var y = numberRandomizer(.82,.87);
         locations3.push([windowWidth*x,windowHeight*y]);
      }
        if (inputs[i].value == '38') {
        choices3.push("Interior Des");
        imgs3.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.97,.99);
          var y = numberRandomizer(.52,.76);
         locations3.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '39') {
        choices3.push("Illustration");
        imgs3.push(loadImage('img/f5.png'));
        //locations
          var x = numberRandomizer(.17,.28);
          var y = numberRandomizer(.9,.96);
         locations3.push([windowWidth*x,windowHeight*y]);
          
        choices3.push("Illustration");
        imgs3.push(loadImage('img/f5.png'));
        //locations
          var x = numberRandomizer(.17,.32);
          var y = numberRandomizer(.9,.96);
         locations3.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '310') {
        choices3.push("Marketing");
        imgs3.push(loadImage('img/f5.png'));
        //locations
          var x = numberRandomizer(.67,.72);
          var y = numberRandomizer(.62,.67);
         locations3.push([windowWidth*x,windowHeight*y]);
          
        choices3.push("Marketing");
        imgs3.push(loadImage('img/f5.png'));
        //locations
          var x = numberRandomizer(.65,.76);
          var y = numberRandomizer(.67,.72);
         locations3.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '311') {
        choices3.push("Edu");
        imgs3.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.1,.18);
          var y = numberRandomizer(.48,.52);
         locations3.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '312') {
        choices3.push("Automotive/Product");
        imgs3.push(loadImage('img/f2.png'));
        //locations
          var x = numberRandomizer(.38,.47);
          var y = numberRandomizer(.42,.45);
         locations3.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '313') {
        choices3.push("Fashion");
        imgs3.push(loadImage('img/f5.png'));
        //locations
          var x = numberRandomizer(.4,.47);
          var y = numberRandomizer(.94,.99);
         locations3.push([windowWidth*x,windowHeight*y]);
          
        choices3.push("Fashion");
        imgs3.push(loadImage('img/f5.png'));
        //locations
          var x = numberRandomizer(.43,.52);
          var y = numberRandomizer(.95,.98);
         locations3.push([windowWidth*x,windowHeight*y]);
      }
        
        
        
    }}
    for (i=0; i<choices3.length; i++){
        allChoices.push(choices3[i]);
        allImgs.push(imgs3[i]);
        allLocations.push(locations3[i]);}
    draw();
    
    closeNav();
    
    waitscroll3();
}

function type2q4() {
    choices4 = [];
    imgs4 = [];
    locations4 = [];
  var inputs = document.getElementsByTagName('input');
  // loop through all the radio inputs
  for (i=0; i<inputs.length; i++) {
    // if the radio is checked..
    if (inputs[i].checked) {

      if (inputs[i].value == 'c1') {
        choices4.push("technical");
        imgs4.push(loadImage('img/m1.png')); 
          //locations
          var x = numberRandomizer(.22,.45);
          var y = numberRandomizer(.71,.79);
          locations4.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c2'){
        choices4.push("communication");
        imgs4.push(loadImage('img/m3.png'));
        //locations
          var x = numberRandomizer(.19,.27);
          var y = numberRandomizer(.83,.84);
          locations4.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c3') {
        choices4.push("leadership");
        imgs4.push(loadImage('img/m3.png'));
        //locations
          var x = numberRandomizer(.05,.17);
          var y = numberRandomizer(.67,.78);
        locations4.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c4') {
        choices4.push("thinking");
        imgs4.push(loadImage('img/m3.png'));
        //locations
          var x = numberRandomizer(.04,.12);
          var y = numberRandomizer(.62,.65);
         locations4.push([windowWidth*x,windowHeight*y]);
      }
        
        if (inputs[i].value == 'c5'){
        choices4.push("communication");
        imgs4.push(loadImage('img/m4.png'));
        //locations
          var x = numberRandomizer(.1,.18);
          var y = numberRandomizer(.76,.82);
          locations4.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == 'c6') {
        choices4.push("leadership");
        imgs4.push(loadImage('img/m4.png'));
        //locations
          var x = numberRandomizer(.5,.43);
          var y = numberRandomizer(.79,.83);
        locations4.push([windowWidth*x,windowHeight*y]);
      }
        
        
        
    }}
    for (i=0; i<choices4.length; i++){
        allChoices.push(choices4[i]);
        allImgs.push(imgs4[i]);
        allLocations.push(locations4[i]);}
    draw();
    
    openNav();
    
    zoomOut();
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

      if (inputs[i].value == '11') {
        choices1.push("technical");
        imgs1.push(loadImage('img/b4.png')); 
          //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
          
          choices1.push("technical");
        imgs1.push(loadImage('img/b4.png')); 
          //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '12'){
        choices1.push("communication");
        imgs1.push(loadImage('img/b2.png'));
        //locations
          var x = numberRandomizer(.82,.98);
          var y = numberRandomizer(.12,.2);
          locations1.push([windowWidth*x,windowHeight*y]);
          
        choices1.push("communication");
        imgs1.push(loadImage('img/b2.png'));
        //locations
          var x = numberRandomizer(.87,.94);
          var y = numberRandomizer(.2,.3);
          locations1.push([windowWidth*x,windowHeight*y]); 
          
          choices1.push("communication");
        imgs1.push(loadImage('img/b2.png'));
        //locations
          var x = numberRandomizer(.92,.99);
          var y = numberRandomizer(.7,.8);
          locations1.push([windowWidth*x,windowHeight*y]); 
      }
      if (inputs[i].value == '13') {
        choices1.push("leadership");
        imgs1.push(loadImage('img/b1.png'));
        //locations
          var x = numberRandomizer(.02,.1);
          var y = numberRandomizer(.25,.32);
        locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '14') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/b2.png'));
        //locations
          var x = numberRandomizer(.2,.35);
          var y = numberRandomizer(.12,.19);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
    }}
    

    for (i=0; i<choices1.length; i++){
        allChoices.push(choices1[i]);
        allImgs.push(imgs1[i]);
        allLocations.push(locations1[i]);}
    draw();
    
    closeNav();
    
    waitscroll();
}

function type3q2() {
    choices2 = [];
    imgs2 = [];
    locations2 = [];
  var inputs = document.getElementsByTagName('input');
  // loop through all the radio inputs
  for (i=0; i<inputs.length; i++) {
    // if the radio is checked..
    if (inputs[i].checked) {

      if (inputs[i].value == '21') {
        choices2.push("own");
        imgs2.push(loadImage('img/s1.png')); 
          //locations
          var x = numberRandomizer(.82,.86);
          var y = numberRandomizer(.12,.18);
          locations2.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '22'){
        choices2.push("freelance");
        imgs2.push(loadImage('img/s4.png'));
        //locations
          var x = numberRandomizer(.6,.65);
          var y = numberRandomizer(.67,.73);
          locations2.push([windowWidth*x,windowHeight*y]);
          
        choices2.push("freelance");
        imgs2.push(loadImage('img/s4.png'));
        //locations
          var x = numberRandomizer(.65,.68);
          var y = numberRandomizer(.77,.85);
          locations2.push([windowWidth*x,windowHeight*y]);
          
        choices2.push("freelance");
        imgs2.push(loadImage('img/s4.png'));
        //locations
          var x = numberRandomizer(.68,.73);
          var y = numberRandomizer(.83,.89);
          locations2.push([windowWidth*x,windowHeight*y]);  
      }
      if (inputs[i].value == '23') {
        choices2.push("friends");
        imgs2.push(loadImage('img/s4.png'));
        //locations
          var x = numberRandomizer(.79,.88);
          var y = numberRandomizer(.5,.6);
        locations2.push([windowWidth*x,windowHeight*y]);
          
        choices2.push("friends");
        imgs2.push(loadImage('img/s4.png'));
        //locations
          var x = numberRandomizer(.82,.93);
          var y = numberRandomizer(.55,.63);
        locations2.push([windowWidth*x,windowHeight*y]);  
      }
      if (inputs[i].value == '24') {
        choices2.push("volunteer");
        imgs2.push(loadImage('img/s1.png'));
        //locations
          var x = numberRandomizer(.25,.38);
          var y = numberRandomizer(.18,.35);
         locations2.push([windowWidth*x,windowHeight*y]);
      }
        
        if (inputs[i].value == '25'){
        choices2.push("teach");
        imgs2.push(loadImage('img/s1.png'));
        //locations
          var x = numberRandomizer(.84,.89);
          var y = numberRandomizer(.75,.85);
          locations2.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '26') {
        choices2.push("maintain");
        imgs2.push(loadImage('img/s5.png'));
        //locations
          var x = numberRandomizer(.32,.4);
          var y = numberRandomizer(.88,.93);
        locations2.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '27') {
        choices2.push("none");
        imgs2.push(loadImage('img/s3.png'));
        //locations
          var x = numberRandomizer(.85,.88);
          var y = numberRandomizer(.3,.37);
         locations2.push([windowWidth*x,windowHeight*y]);
          
          
        choices2.push("none");
        imgs2.push(loadImage('img/s3.png'));
        //locations
          var x = numberRandomizer(.9,.95);
          var y = numberRandomizer(.4,.47);
         locations2.push([windowWidth*x,windowHeight*y]);  
          
      }
        
        
        
    }}
    console.log(imgs2)
    for (i=0; i<choices2.length; i++){
        allChoices.push(choices2[i]);
        allImgs.push(imgs2[i]);
        allLocations.push(locations2[i]);}
    
    draw();
    
    closeNav();
    
     waitscroll2();
}

function type3q3() {
    choices3 = [];
    imgs3 = [];
    locations3 = [];
    var inputs = document.getElementsByTagName('input');
  // loop through all the radio inputs
  for (i=0; i<inputs.length; i++) {
    // if the radio is checked..
    if (inputs[i].checked) {

      if (inputs[i].value == '31') {
        choices3.push("UI/UX/Inter/Exp");
        imgs3.push(loadImage('img/f3.png')); 
          //locations
          var x = numberRandomizer(.75,.8);
          var y = numberRandomizer(.85,.9);
          locations3.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '32'){
        choices3.push("Comm/Graphic Des");
        imgs3.push(loadImage('img/f1.png'));
        //locations
          var x = numberRandomizer(.94,.98);
          var y = numberRandomizer(.2,.28);
          locations3.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '33') {
        choices3.push("Motion/Film/Production");
        imgs3.push(loadImage('img/f2.png'));
        //locations
          var x = numberRandomizer(.45,.48);
          var y = numberRandomizer(.34,.39);
        locations3.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '34') {
        choices3.push("Emerging Tech");
        imgs3.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.34,.39);
          var y = numberRandomizer(.52,.56);
         locations3.push([windowWidth*x,windowHeight*y]);
      }
        
        if (inputs[i].value == '35'){
        choices3.push("Research/Data Analy");
        imgs3.push(loadImage('img/f6.png'));
        //locations
          var x = numberRandomizer(.9,.97);
          var y = numberRandomizer(.88,.92);
          locations3.push([windowWidth*x,windowHeight*y]);
            
        choices3.push("Research/Data Analy");
        imgs3.push(loadImage('img/f6.png'));
        //locations
          var x = numberRandomizer(.84,.92);
          var y = numberRandomizer(.89,.94);
          locations3.push([windowWidth*x,windowHeight*y]);
            
        choices3.push("Research/Data Analy");
        imgs3.push(loadImage('img/f6.png'));
        //locations
          var x = numberRandomizer(.92,.98);
          var y = numberRandomizer(.89,.95);
          locations3.push([windowWidth*x,windowHeight*y]);
      }
        
      if (inputs[i].value == '36') {
        choices3.push("Front End/Web");
        imgs3.push(loadImage('img/f2.png'));
        //locations
          var x = numberRandomizer(.3,.45);
          var y = numberRandomizer(.85,.9);
        locations3.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '37') {
        choices3.push("Civic/Impact/Service/Strat");
        imgs3.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.1,.18);
          var y = numberRandomizer(.82,.87);
         locations3.push([windowWidth*x,windowHeight*y]);
      }
        if (inputs[i].value == '38') {
        choices3.push("Interior Des");
        imgs3.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.97,.99);
          var y = numberRandomizer(.52,.76);
         locations3.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '39') {
        choices3.push("Illustration");
        imgs3.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.17,.28);
          var y = numberRandomizer(.9,.96);
         locations3.push([windowWidth*x,windowHeight*y]);
          
        choices3.push("Illustration");
        imgs3.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.17,.32);
          var y = numberRandomizer(.9,.96);
         locations3.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '310') {
        choices3.push("Marketing");
        imgs3.push(loadImage('img/f3.png'));
        //locations
          var x = numberRandomizer(.67,.72);
          var y = numberRandomizer(.62,.67);
         locations3.push([windowWidth*x,windowHeight*y]);
          
        choices3.push("Marketing");
        imgs3.push(loadImage('img/f3.png'));
        //locations
          var x = numberRandomizer(.65,.76);
          var y = numberRandomizer(.67,.72);
         locations3.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '311') {
        choices3.push("Edu");
        imgs3.push(loadImage('img/f2.png'));
        //locations
          var x = numberRandomizer(.1,.18);
          var y = numberRandomizer(.48,.52);
         locations3.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '312') {
        choices3.push("Automotive/Product");
        imgs3.push(loadImage('img/f5.png'));
        //locations
          var x = numberRandomizer(.38,.47);
          var y = numberRandomizer(.42,.45);
         locations3.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '313') {
        choices3.push("Fashion");
        imgs3.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.4,.47);
          var y = numberRandomizer(.94,.99);
         locations3.push([windowWidth*x,windowHeight*y]);
          
        choices3.push("Fashion");
        imgs3.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.43,.52);
          var y = numberRandomizer(.95,.98);
         locations3.push([windowWidth*x,windowHeight*y]);
      }
        
        
        
    }}
    for (i=0; i<choices3.length; i++){
        allChoices.push(choices3[i]);
        allImgs.push(imgs3[i]);
        allLocations.push(locations3[i]);}
    draw();
    
    closeNav();
    
    waitscroll3();
}
function type3q4() {
    choices4 = [];
    imgs4 = [];
    locations4 = [];
  var inputs = document.getElementsByTagName('input');
  // loop through all the radio inputs
  for (i=0; i<inputs.length; i++) {
    // if the radio is checked..
    if (inputs[i].checked) {

      if (inputs[i].value == '41') {
        choices4.push("technical");
        imgs4.push(loadImage('img/m1.png')); 
          //locations
          var x = numberRandomizer(.42,.65);
          var y = numberRandomizer(.51,.66);
          locations4.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '42'){
        choices4.push("communication");
        imgs4.push(loadImage('img/m2.png'));
        //locations
          var x = numberRandomizer(.19,.27);
          var y = numberRandomizer(.73,.79);
          locations4.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '43') {
        choices4.push("leadership");
        imgs4.push(loadImage('img/m4.png'));
        //locations
          var x = numberRandomizer(.05,.17);
          var y = numberRandomizer(.37,.43);
        locations4.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '44') {
        choices4.push("thinking");
        imgs4.push(loadImage('img/m4.png'));
        //locations
          var x = numberRandomizer(.04,.12);
          var y = numberRandomizer(.2,.29);
         locations4.push([windowWidth*x,windowHeight*y]);
      }
        
        if (inputs[i].value == '45'){
        choices4.push("Creative");
        imgs4.push(loadImage('img/m4.png'));
        //locations
          var x = numberRandomizer(.3,.43);
          var y = numberRandomizer(.6,.68);
          locations4.push([windowWidth*x,windowHeight*y]);
            
        choices4.push("Creative");
        imgs4.push(loadImage('img/m4.png'));
        //locations
          var x = numberRandomizer(.3,.43);
          var y = numberRandomizer(.4,.48);
          locations4.push([windowWidth*x,windowHeight*y]);
            
        choices4.push("Creative");
        imgs4.push(loadImage('img/m4.png'));
        //locations
          var x = numberRandomizer(.3,.43);
          var y = numberRandomizer(.7,.78);
          locations4.push([windowWidth*x,windowHeight*y]);    
      }
      if (inputs[i].value == '46') {
        choices4.push("Digital Des");
        imgs4.push(loadImage('img/m5.png'));
        //locations
          var x = numberRandomizer(.1,.23);
          var y = numberRandomizer(.93,.98);
        locations4.push([windowWidth*x,windowHeight*y]);
          
        choices4.push("Digital Des");
        imgs4.push(loadImage('img/m5.png'));
        //locations
          var x = numberRandomizer(.2,.33);
          var y = numberRandomizer(.92,.97);
        locations4.push([windowWidth*x,windowHeight*y]);
          
        choices4.push("Digital Des");
        imgs4.push(loadImage('img/m5.png'));
        //locations
          var x = numberRandomizer(.5,.73);
          var y = numberRandomizer(.9,.99);
        locations4.push([windowWidth*x,windowHeight*y]);  
      }
        
        
        
    }}
    for (i=0; i<choices4.length; i++){
        allChoices.push(choices4[i]);
        allImgs.push(imgs4[i]);
        allLocations.push(locations4[i]);}
    draw();
    
    openNav();
    
    zoomOut();
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

      if (inputs[i].value == '11') {
        choices1.push("technical");
        imgs1.push(loadImage('img/b4.png')); 
          //locations
          var x = numberRandomizer(.31,.4);
          var y = numberRandomizer(.38,.42);
          locations1.push([windowWidth*x,windowHeight*y]);
          
          choices1.push("technical");
        imgs1.push(loadImage('img/b4.png')); 
          //locations
          var x = numberRandomizer(.31,.4);
          var y = numberRandomizer(.38,.42);
          locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '12'){
        choices1.push("communication");
        imgs1.push(loadImage('img/b4.png'));
        //locations
          var x = numberRandomizer(.82,.98);
          var y = numberRandomizer(.12,.2);
          locations1.push([windowWidth*x,windowHeight*y]);
          
        choices1.push("communication");
        imgs1.push(loadImage('img/b4.png'));
        //locations
          var x = numberRandomizer(.87,.94);
          var y = numberRandomizer(.2,.3);
          locations1.push([windowWidth*x,windowHeight*y]); 
          
        choices1.push("communication");
        imgs1.push(loadImage('img/b4.png'));
        //locations
          var x = numberRandomizer(.92,.99);
          var y = numberRandomizer(.7,.8);
          locations1.push([windowWidth*x,windowHeight*y]);   
      }
      if (inputs[i].value == '13') {
        choices1.push("leadership");
        imgs1.push(loadImage('img/b2.png'));
        //locations
          var x = numberRandomizer(.02,.1);
          var y = numberRandomizer(.25,.32);
        locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '14') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/b2.png'));
        //locations
          var x = numberRandomizer(.2,.35);
          var y = numberRandomizer(.12,.19);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
    }}
    for (i=0; i<choices1.length; i++){
        allChoices.push(choices1[i]);
        allImgs.push(imgs1[i]);
        allLocations.push(locations1[i]);}
    draw();
    
    closeNav();
    
    waitscroll();
}

function type4q2() {
    choices2 = [];
    imgs2 = [];
    locations2 = [];
  var inputs = document.getElementsByTagName('input');
  // loop through all the radio inputs
  for (i=0; i<inputs.length; i++) {
    // if the radio is checked..
    if (inputs[i].checked) {

      if (inputs[i].value == '21') {
        choices2.push("onown");
        imgs2.push(loadImage('img/s1.png')); 
          //locations
          var x = numberRandomizer(.82,.86);
          var y = numberRandomizer(.12,.18);
          locations2.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '22'){
        choices2.push("freelance");
        imgs2.push(loadImage('img/s4.png'));
        //locations
          var x = numberRandomizer(.6,.65);
          var y = numberRandomizer(.67,.73);
          locations2.push([windowWidth*x,windowHeight*y]);
          
        choices2.push("freelance");
        imgs2.push(loadImage('img/s4.png'));
        //locations
          var x = numberRandomizer(.65,.68);
          var y = numberRandomizer(.77,.85);
          locations2.push([windowWidth*x,windowHeight*y]);  
          
        choices2.push("freelance");
        imgs2.push(loadImage('img/s4.png'));
        //locations
          var x = numberRandomizer(.68,.73);
          var y = numberRandomizer(.83,.89);
          locations2.push([windowWidth*x,windowHeight*y]);    
      }
      if (inputs[i].value == '23') {
        choices2.push("friends");
        imgs2.push(loadImage('img/s4.png'));
        //locations
          var x = numberRandomizer(.79,.88);
          var y = numberRandomizer(.5,.6);
        locations2.push([windowWidth*x,windowHeight*y]);
          
        choices2.push("friends");
        imgs2.push(loadImage('img/s4.png'));
        //locations
          var x = numberRandomizer(.82,.93);
          var y = numberRandomizer(.55,.63);
        locations2.push([windowWidth*x,windowHeight*y]);  
      }
      if (inputs[i].value == '24') {
        choices2.push("volunteer");
        imgs2.push(loadImage('img/s1.png'));
        //locations
          var x = numberRandomizer(.25,.38);
          var y = numberRandomizer(.18,.35);
         locations2.push([windowWidth*x,windowHeight*y]);
      }
        
        if (inputs[i].value == '25'){
        choices2.push("teach");
        imgs2.push(loadImage('img/s1.png'));
        //locations
          var x = numberRandomizer(.84,.89);
          var y = numberRandomizer(.75,.85);
          locations2.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '26') {
        choices2.push("maintain");
        imgs2.push(loadImage('img/s5.png'));
        //locations
          var x = numberRandomizer(.32,.4);
          var y = numberRandomizer(.88,.93);
        locations2.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '27') {
        choices2.push("none");
        imgs2.push(loadImage('img/s3.png'));
        //locations
          var x = numberRandomizer(.85,.88);
          var y = numberRandomizer(.3,.37);
         locations2.push([windowWidth*x,windowHeight*y]);
          
        choices2.push("none");
        imgs2.push(loadImage('img/s3.png'));
        //locations
          var x = numberRandomizer(.9,.95);
          var y = numberRandomizer(.4,.47);
         locations2.push([windowWidth*x,windowHeight*y]);  
      }
        
        
        
    }}
    console.log(imgs2)
    for (i=0; i<choices2.length; i++){
        allChoices.push(choices2[i]);
        allImgs.push(imgs2[i]);
        allLocations.push(locations2[i]);}
    
    draw();
    
    closeNav();
    
     waitscroll2();
}

function type4q3() {
    choices3 = [];
    imgs3 = [];
    locations3 = [];
    var inputs = document.getElementsByTagName('input');
  // loop through all the radio inputs
  for (i=0; i<inputs.length; i++) {
    // if the radio is checked..
    if (inputs[i].checked) {

      if (inputs[i].value == '31') {
        choices3.push("UI/UX/Inter/Exp");
        imgs3.push(loadImage('img/f4.png')); 
          //locations
          var x = numberRandomizer(.75,.8);
          var y = numberRandomizer(.85,.9);
          locations3.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '32'){
        choices3.push("Comm/Graphic Des");
        imgs3.push(loadImage('img/f1.png'));
        //locations
          var x = numberRandomizer(.94,.98);
          var y = numberRandomizer(.2,.28);
          locations3.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '33') {
        choices3.push("Motion/Film/Production");
        imgs3.push(loadImage('img/f2.png'));
        //locations
          var x = numberRandomizer(.45,.48);
          var y = numberRandomizer(.34,.39);
        locations3.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '34') {
        choices3.push("Emerging Tech");
        imgs3.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.34,.39);
          var y = numberRandomizer(.52,.56);
         locations3.push([windowWidth*x,windowHeight*y]);
      }
        
        if (inputs[i].value == '35'){
        choices3.push("Research/Data Analy");
        imgs3.push(loadImage('img/f6.png'));
        //locations
          var x = numberRandomizer(.9,.97);
          var y = numberRandomizer(.88,.92);
          locations3.push([windowWidth*x,windowHeight*y]);
            
        choices3.push("Research/Data Analy");
        imgs3.push(loadImage('img/f6.png'));
        //locations
          var x = numberRandomizer(.84,.92);
          var y = numberRandomizer(.89,.94);
          locations3.push([windowWidth*x,windowHeight*y]);
        
        choices3.push("Research/Data Analy");
        imgs3.push(loadImage('img/f6.png'));
        //locations
          var x = numberRandomizer(.92,.98);
          var y = numberRandomizer(.89,.95);
          locations3.push([windowWidth*x,windowHeight*y]);
      }
        
      if (inputs[i].value == '36') {
        choices3.push("Front End/Web");
        imgs3.push(loadImage('img/f2.png'));
        //locations
          var x = numberRandomizer(.3,.45);
          var y = numberRandomizer(.85,.9);
        locations3.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '37') {
        choices3.push("Civic/Impact/Service/Strat");
        imgs3.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.1,.18);
          var y = numberRandomizer(.82,.87);
         locations3.push([windowWidth*x,windowHeight*y]);
      }
        if (inputs[i].value == '38') {
        choices3.push("Interior Des");
        imgs3.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.97,.99);
          var y = numberRandomizer(.52,.76);
         locations3.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '39') {
        choices3.push("Illustration");
        imgs3.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.17,.28);
          var y = numberRandomizer(.9,.96);
         locations3.push([windowWidth*x,windowHeight*y]);
          
        choices3.push("Illustration");
        imgs3.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.17,.32);
          var y = numberRandomizer(.9,.96);
         locations3.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '310') {
        choices3.push("Marketing");
        imgs3.push(loadImage('img/f3.png'));
        //locations
          var x = numberRandomizer(.67,.72);
          var y = numberRandomizer(.62,.67);
         locations3.push([windowWidth*x,windowHeight*y]);
          
        choices3.push("Marketing");
        imgs3.push(loadImage('img/f3.png'));
        //locations
          var x = numberRandomizer(.65,.76);
          var y = numberRandomizer(.67,.72);
         locations3.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '311') {
        choices3.push("Edu");
        imgs3.push(loadImage('img/f2.png'));
        //locations
          var x = numberRandomizer(.1,.18);
          var y = numberRandomizer(.48,.52);
         locations3.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '312') {
        choices3.push("Automotive/Product");
        imgs3.push(loadImage('img/f5.png'));
        //locations
          var x = numberRandomizer(.38,.47);
          var y = numberRandomizer(.42,.45);
         locations3.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '313') {
        choices3.push("Fashion");
        imgs3.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.4,.47);
          var y = numberRandomizer(.94,.99);
         locations3.push([windowWidth*x,windowHeight*y]);
          
        choices3.push("Fashion");
        imgs3.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.43,.52);
          var y = numberRandomizer(.95,.98);
         locations3.push([windowWidth*x,windowHeight*y]);
      }
        
        
        
    }}
    for (i=0; i<choices3.length; i++){
        allChoices.push(choices3[i]);
        allImgs.push(imgs3[i]);
        allLocations.push(locations3[i]);}
    draw();
    
    closeNav();
    
    waitscroll3();
}

function type4q4() {
    choices4 = [];
    imgs4 = [];
    locations4 = [];
  var inputs = document.getElementsByTagName('input');
  // loop through all the radio inputs
  for (i=0; i<inputs.length; i++) {
    // if the radio is checked..
    if (inputs[i].checked) {

      if (inputs[i].value == '41') {
        choices4.push("technical");
        imgs4.push(loadImage('img/m1.png')); 
          //locations
          var x = numberRandomizer(.42,.65);
          var y = numberRandomizer(.51,.66);
          locations4.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '42'){
        choices4.push("communication");
        imgs4.push(loadImage('img/m2.png'));
        //locations
          var x = numberRandomizer(.19,.27);
          var y = numberRandomizer(.73,.79);
          locations4.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '43') {
        choices4.push("leadership");
        imgs4.push(loadImage('img/m1.png'));
        //locations
          var x = numberRandomizer(.05,.17);
          var y = numberRandomizer(.37,.43);
        locations4.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '44') {
        choices4.push("thinking");
        imgs4.push(loadImage('img/m4.png'));
        //locations
          var x = numberRandomizer(.04,.12);
          var y = numberRandomizer(.2,.29);
         locations4.push([windowWidth*x,windowHeight*y]);
      }
        
        if (inputs[i].value == '45'){
        choices4.push("creative");
        imgs4.push(loadImage('img/m4.png'));
        //locations
          var x = numberRandomizer(.3,.43);
          var y = numberRandomizer(.6,.68);
          locations4.push([windowWidth*x,windowHeight*y]);
            
        choices4.push("creative");
        imgs4.push(loadImage('img/m4.png'));
        //locations
          var x = numberRandomizer(.3,.43);
          var y = numberRandomizer(.4,.48);
          locations4.push([windowWidth*x,windowHeight*y]);
            
        choices4.push("creative");
        imgs4.push(loadImage('img/m4.png'));
        //locations
          var x = numberRandomizer(.3,.43);
          var y = numberRandomizer(.7,.78);
          locations4.push([windowWidth*x,windowHeight*y]);    
      }
      if (inputs[i].value == '46') {
        choices4.push("Digital Des");
        imgs4.push(loadImage('img/m5.png'));
        //locations
          var x = numberRandomizer(.1,.23);
          var y = numberRandomizer(.93,.98);
        locations4.push([windowWidth*x,windowHeight*y]);
          
        choices4.push("Digital Des");
        imgs4.push(loadImage('img/m5.png'));
        //locations
          var x = numberRandomizer(.2,.33);
          var y = numberRandomizer(.92,.97);
        locations4.push([windowWidth*x,windowHeight*y]);
          
        choices4.push("Digital Des");
        imgs4.push(loadImage('img/m5.png'));
        //locations
          var x = numberRandomizer(.5,.73);
          var y = numberRandomizer(.9,.99);
        locations4.push([windowWidth*x,windowHeight*y]);  
      }
        
        
        
    }}
    for (i=0; i<choices4.length; i++){
        allChoices.push(choices4[i]);
        allImgs.push(imgs4[i]);
        allLocations.push(locations4[i]);}
    draw();
    
    openNav();
    
    zoomOut();
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

      if (inputs[i].value == '11') {
        choices1.push("technical");
        imgs1.push(loadImage('img/b4.png')); 
          //locations
          var x = numberRandomizer(.31,.4);
          var y = numberRandomizer(.38,.42);
          locations1.push([windowWidth*x,windowHeight*y]);
          
        choices1.push("technical");
        imgs1.push(loadImage('img/b4.png')); 
          //locations
          var x = numberRandomizer(.31,.4);
          var y = numberRandomizer(.38,.42);
          locations1.push([windowWidth*x,windowHeight*y]);  
      }
      if (inputs[i].value == '12'){
        choices1.push("communication");
        imgs1.push(loadImage('img/b3.png'));
        //locations
          var x = numberRandomizer(.82,.98);
          var y = numberRandomizer(.12,.2);
          locations1.push([windowWidth*x,windowHeight*y]);
          
        choices1.push("communication");
        imgs1.push(loadImage('img/b3.png'));
        //locations
          var x = numberRandomizer(.87,.94);
          var y = numberRandomizer(.2,.3);
          locations1.push([windowWidth*x,windowHeight*y]);  
          
        choices1.push("communication");
        imgs1.push(loadImage('img/b3.png'));
        //locations
          var x = numberRandomizer(.92,.99);
          var y = numberRandomizer(.7,.8);
          locations1.push([windowWidth*x,windowHeight*y]);   
      }
      if (inputs[i].value == '13') {
        choices1.push("leadership");
        imgs1.push(loadImage('img/b1.png'));
        //locations
          var x = numberRandomizer(.02,.1);
          var y = numberRandomizer(.25,.32);
        locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '14') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/b2.png'));
        //locations
          var x = numberRandomizer(.2,.35);
          var y = numberRandomizer(.12,.19);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
    }}
    for (i=0; i<choices1.length; i++){
        allChoices.push(choices1[i]);
        allImgs.push(imgs1[i]);
        allLocations.push(locations1[i]);}
    draw();
    
    closeNav();
    
    waitscroll();
}

function type5q2() {
    choices2 = [];
    imgs2 = [];
    locations2 = [];
  var inputs = document.getElementsByTagName('input');
  // loop through all the radio inputs
  for (i=0; i<inputs.length; i++) {
    // if the radio is checked..
    if (inputs[i].checked) {

      if (inputs[i].value == '21') {
        choices2.push("onown");
        imgs2.push(loadImage('img/s1.png')); 
          //locations
          var x = numberRandomizer(.82,.86);
          var y = numberRandomizer(.12,.18);
          locations2.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '22'){
        choices2.push("freelance");
        imgs2.push(loadImage('img/s5.png'));
        //locations
          var x = numberRandomizer(.79,.88);
          var y = numberRandomizer(.5,.6);
          locations2.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '23') {
        choices2.push("friends");
        imgs2.push(loadImage('img/s5.png'));
        //locations
          var x = numberRandomizer(.79,.88);
          var y = numberRandomizer(.5,.6);
        locations2.push([windowWidth*x,windowHeight*y]);
          
        choices2.push("friends");
        imgs2.push(loadImage('img/s5.png'));
        //locations
          var x = numberRandomizer(.82,.93);
          var y = numberRandomizer(.55,.63);
        locations2.push([windowWidth*x,windowHeight*y]);  
      }
      if (inputs[i].value == '24') {
        choices2.push("volunteer");
        imgs2.push(loadImage('img/s1.png'));
        //locations
          var x = numberRandomizer(.25,.38);
          var y = numberRandomizer(.18,.35);
         locations2.push([windowWidth*x,windowHeight*y]);
      }
        
        if (inputs[i].value == '25'){
        choices2.push("teach");
        imgs2.push(loadImage('img/s1.png'));
        //locations
          var x = numberRandomizer(.84,.89);
          var y = numberRandomizer(.75,.85);
          locations2.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '26') {
        choices2.push("maintain");
        imgs2.push(loadImage('img/s5.png'));
        //locations
          var x = numberRandomizer(.32,.4);
          var y = numberRandomizer(.88,.93);
        locations2.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '27') {
        choices2.push("none");
        imgs2.push(loadImage('img/s4.png'));
        //locations
          var x = numberRandomizer(.85,.88);
          var y = numberRandomizer(.3,.37);
         locations2.push([windowWidth*x,windowHeight*y]);
          
        choices2.push("none");
        imgs2.push(loadImage('img/s4.png'));
        //locations
          var x = numberRandomizer(.9,.95);
          var y = numberRandomizer(.4,.47);
         locations2.push([windowWidth*x,windowHeight*y]);  
      }
        
        
        
    }}
    console.log(imgs2)
    for (i=0; i<choices2.length; i++){
        allChoices.push(choices2[i]);
        allImgs.push(imgs2[i]);
        allLocations.push(locations2[i]);}
    
    draw();
    
    closeNav();
    
     waitscroll2();
}

function type5q3() {
    choices3 = [];
    imgs3 = [];
    locations3 = [];
    var inputs = document.getElementsByTagName('input');
  // loop through all the radio inputs
  for (i=0; i<inputs.length; i++) {
    // if the radio is checked..
    if (inputs[i].checked) {

      if (inputs[i].value == '31') {
        choices3.push("UI/UX/Inter/Exp");
        imgs3.push(loadImage('img/f4.png')); 
          //locations
          var x = numberRandomizer(.75,.8);
          var y = numberRandomizer(.85,.9);
          locations3.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '32'){
        choices3.push("Comm/Graphic Des");
        imgs3.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.94,.98);
          var y = numberRandomizer(.2,.28);
          locations3.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '33') {
        choices3.push("Motion/Film/Production");
        imgs3.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.45,.48);
          var y = numberRandomizer(.34,.39);
        locations3.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '34') {
        choices3.push("Emerging Tech");
        imgs3.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.34,.39);
          var y = numberRandomizer(.52,.56);
         locations3.push([windowWidth*x,windowHeight*y]);
      }
        
        if (inputs[i].value == '35'){
        choices3.push("Research/Data Analy");
        imgs3.push(loadImage('img/f6.png'));
        //locations
          var x = numberRandomizer(.9,.97);
          var y = numberRandomizer(.88,.92);
          locations3.push([windowWidth*x,windowHeight*y]);
            
        choices3.push("Research/Data Analy");
        imgs3.push(loadImage('img/f6.png'));
        //locations
          var x = numberRandomizer(.84,.92);
          var y = numberRandomizer(.89,.94);
          locations3.push([windowWidth*x,windowHeight*y]);
            
        choices3.push("Research/Data Analy");
        imgs3.push(loadImage('img/f6.png'));
        //locations
          var x = numberRandomizer(.92,.98);
          var y = numberRandomizer(.89,.95);
          locations3.push([windowWidth*x,windowHeight*y]);
      }
        
      if (inputs[i].value == '36') {
        choices3.push("Front End/Web");
        imgs3.push(loadImage('img/f5.png'));
        //locations
          var x = numberRandomizer(.3,.45);
          var y = numberRandomizer(.85,.9);
        locations3.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '37') {
        choices3.push("Civic/Impact/Service/Strat");
        imgs3.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.1,.18);
          var y = numberRandomizer(.82,.87);
         locations3.push([windowWidth*x,windowHeight*y]);
      }
        if (inputs[i].value == '38') {
        choices3.push("Interior Des");
        imgs3.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.97,.99);
          var y = numberRandomizer(.52,.76);
         locations3.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '39') {
        choices3.push("Illustration");
        imgs3.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.17,.28);
          var y = numberRandomizer(.9,.96);
         locations3.push([windowWidth*x,windowHeight*y]);
          
        choices3.push("Illustration");
        imgs3.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.17,.32);
          var y = numberRandomizer(.9,.96);
         locations3.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '310') {
        choices3.push("Marketing");
        imgs3.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.67,.72);
          var y = numberRandomizer(.62,.67);
         locations3.push([windowWidth*x,windowHeight*y]);
          
        choices3.push("Marketing");
        imgs3.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.65,.76);
          var y = numberRandomizer(.67,.72);
         locations3.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '311') {
        choices3.push("Edu");
        imgs3.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.1,.18);
          var y = numberRandomizer(.48,.52);
         locations3.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '312') {
        choices3.push("Automotive/Product");
        imgs3.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.38,.47);
          var y = numberRandomizer(.42,.45);
         locations3.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '313') {
        choices3.push("Fashion");
        imgs3.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.4,.47);
          var y = numberRandomizer(.94,.99);
         locations3.push([windowWidth*x,windowHeight*y]);
          
        choices3.push("Fashion");
        imgs3.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.43,.52);
          var y = numberRandomizer(.95,.98);
         locations3.push([windowWidth*x,windowHeight*y]);
      }
        
        
        
    }}
    for (i=0; i<choices3.length; i++){
        allChoices.push(choices3[i]);
        allImgs.push(imgs3[i]);
        allLocations.push(locations3[i]);}
    draw();
    
    closeNav();
    
    waitscroll3();
}

function type5q4() {
    choices4 = [];
    imgs4 = [];
    locations4 = [];
  var inputs = document.getElementsByTagName('input');
  // loop through all the radio inputs
  for (i=0; i<inputs.length; i++) {
    // if the radio is checked..
    if (inputs[i].checked) {

      if (inputs[i].value == '41') {
        choices4.push("technical");
        imgs4.push(loadImage('img/m3.png')); 
          //locations
          var x = numberRandomizer(.42,.65);
          var y = numberRandomizer(.51,.66);
          locations4.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '42'){
        choices4.push("communication");
        imgs4.push(loadImage('img/m3.png'));
        //locations
          var x = numberRandomizer(.19,.27);
          var y = numberRandomizer(.73,.79);
          locations4.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '43') {
        choices4.push("leadership");
        imgs4.push(loadImage('img/m2.png'));
        //locations
          var x = numberRandomizer(.05,.17);
          var y = numberRandomizer(.37,.43);
        locations4.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '44') {
        choices4.push("thinking");
        imgs4.push(loadImage('img/m4.png'));
        //locations
          var x = numberRandomizer(.04,.12);
          var y = numberRandomizer(.2,.29);
         locations4.push([windowWidth*x,windowHeight*y]);
      }
        
        if (inputs[i].value == '45'){
        choices4.push("creative");
        imgs4.push(loadImage('img/m3.png'));
        //locations
          var x = numberRandomizer(.3,.43);
          var y = numberRandomizer(.6,.68);
          locations4.push([windowWidth*x,windowHeight*y]);
            
        choices4.push("creative");
        imgs4.push(loadImage('img/m3.png'));
        //locations
          var x = numberRandomizer(.3,.43);
          var y = numberRandomizer(.4,.48);
          locations4.push([windowWidth*x,windowHeight*y]);
            
        choices4.push("creative");
        imgs4.push(loadImage('img/m3.png'));
        //locations
          var x = numberRandomizer(.3,.43);
          var y = numberRandomizer(.7,.78);
          locations4.push([windowWidth*x,windowHeight*y]);    
      }
      if (inputs[i].value == '46') {
        choices4.push("Digital Des");
        imgs4.push(loadImage('img/m5.png'));
        //locations
          var x = numberRandomizer(.1,.23);
          var y = numberRandomizer(.93,.98);
        locations4.push([windowWidth*x,windowHeight*y]);
          
        choices4.push("Digital Des");
        imgs4.push(loadImage('img/m5.png'));
        //locations
          var x = numberRandomizer(.2,.33);
          var y = numberRandomizer(.92,.97);
        locations4.push([windowWidth*x,windowHeight*y]);
          
        choices4.push("Digital Des");
        imgs4.push(loadImage('img/m5.png'));
        //locations
          var x = numberRandomizer(.5,.73);
          var y = numberRandomizer(.9,.99);
        locations4.push([windowWidth*x,windowHeight*y]);  
      }
        
        
        
    }}
    for (i=0; i<choices4.length; i++){
        allChoices.push(choices4[i]);
        allImgs.push(imgs4[i]);
        allLocations.push(locations4[i]);}
    draw();
    
    openNav();
    
    zoomOut();
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

      if (inputs[i].value == '11') {
        choices1.push("technical");
        imgs1.push(loadImage('img/b3.png')); 
          //locations
          var x = numberRandomizer(.31,.4);
          var y = numberRandomizer(.38,.42);
          locations1.push([windowWidth*x,windowHeight*y]);
          
        choices1.push("technical");
        imgs1.push(loadImage('img/b3.png')); 
          //locations
          var x = numberRandomizer(.31,.4);
          var y = numberRandomizer(.38,.42);
          locations1.push([windowWidth*x,windowHeight*y]);  
      }
      if (inputs[i].value == '12'){
        choices1.push("communication");
        imgs1.push(loadImage('img/b2.png'));
        //locations
          var x = numberRandomizer(.82,.98);
          var y = numberRandomizer(.12,.2);
          locations1.push([windowWidth*x,windowHeight*y]);
          
        choices1.push("communication");
        imgs1.push(loadImage('img/b2.png'));
        //locations
          var x = numberRandomizer(.87,.94);
          var y = numberRandomizer(.2,.3);
          locations1.push([windowWidth*x,windowHeight*y]);  
          
        choices1.push("communication");
        imgs1.push(loadImage('img/b2.png'));
        //locations
          var x = numberRandomizer(.92,.99);
          var y = numberRandomizer(.7,.8);
          locations1.push([windowWidth*x,windowHeight*y]);   
      }
      if (inputs[i].value == '13') {
        choices1.push("leadership");
        imgs1.push(loadImage('img/b3.png'));
        //locations
          var x = numberRandomizer(.02,.1);
          var y = numberRandomizer(.25,.32);
        locations1.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '14') {
        choices1.push("thinking");
        imgs1.push(loadImage('img/b3.png'));
        //locations
          var x = numberRandomizer(.2,.35);
          var y = numberRandomizer(.12,.19);
         locations1.push([windowWidth*x,windowHeight*y]);
      }
    }}
    for (i=0; i<choices1.length; i++){
        allChoices.push(choices1[i]);
        allImgs.push(imgs1[i]);
        allLocations.push(locations1[i]);}
    draw();
    
    closeNav();
    
    waitscroll();
}

function type6q2() {
    choices2 = [];
    imgs2 = [];
    locations2 = [];
  var inputs = document.getElementsByTagName('input');
  // loop through all the radio inputs
  for (i=0; i<inputs.length; i++) {
    // if the radio is checked..
    if (inputs[i].checked) {

      if (inputs[i].value == '21') {
        choices2.push("onown");
        imgs2.push(loadImage('img/s3.png')); 
          //locations
         var x = numberRandomizer(.82,.86);
          var y = numberRandomizer(.12,.18);
          locations2.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '22'){
        choices2.push("freelance");
        imgs2.push(loadImage('img/s3.png'));
        //locations
          var x = numberRandomizer(.27,.8);
          var y = numberRandomizer(.51,.61);
          locations2.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '23') {
        choices2.push("friends");
        imgs2.push(loadImage('img/s2.png'));
        //locations
          var x = numberRandomizer(.79,.88);
          var y = numberRandomizer(.5,.6);
        locations2.push([windowWidth*x,windowHeight*y]);
        
          choices2.push("friends");
        imgs2.push(loadImage('img/s2.png'));
        //locations
          var x = numberRandomizer(.82,.93);
          var y = numberRandomizer(.55,.63);
        locations2.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '24') {
        choices2.push("volunteer");
        imgs2.push(loadImage('img/s3.png'));
        //locations
          var x = numberRandomizer(.25,.38);
          var y = numberRandomizer(.18,.35);
         locations2.push([windowWidth*x,windowHeight*y]);
      }
        
        if (inputs[i].value == '25'){
        choices2.push("teach");
        imgs2.push(loadImage('img/s3.png'));
        //locations
          var x = numberRandomizer(.84,.89);
          var y = numberRandomizer(.75,.85);
          locations2.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '26') {
        choices2.push("maintain");
        imgs2.push(loadImage('img/s3.png'));
        //locations
          var x = numberRandomizer(.32,.4);
          var y = numberRandomizer(.88,.93);
        locations2.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '27') {
        choices2.push("none");
        imgs2.push(loadImage('img/s3.png'));
        //locations
          var x = numberRandomizer(.85,.88);
          var y = numberRandomizer(.3,.37);
         locations2.push([windowWidth*x,windowHeight*y]);
          
        choices2.push("none");
        imgs2.push(loadImage('img/s3.png'));
        //locations
          var x = numberRandomizer(.9,.95);
          var y = numberRandomizer(.4,.47);
         locations2.push([windowWidth*x,windowHeight*y]);  
      }
        
        
        
    }}
    
    console.log(imgs2)
    for (i=0; i<choices2.length; i++){
        allChoices.push(choices2[i]);
        allImgs.push(imgs2[i]);
        allLocations.push(locations2[i]);}
    
    draw();
    
    closeNav();
    
     waitscroll2();
}

function type6q3() {
    choices3 = [];
    imgs3 = [];
    locations3 = [];
    var inputs = document.getElementsByTagName('input');
  // loop through all the radio inputs
  for (i=0; i<inputs.length; i++) {
    // if the radio is checked..
    if (inputs[i].checked) {

      if (inputs[i].value == '31') {
        choices3.push("UI/UX/Inter/Exp");
        imgs3.push(loadImage('img/f3.png')); 
          //locations
          var x = numberRandomizer(.75,.8);
          var y = numberRandomizer(.85,.9);
          locations3.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '32'){
        choices3.push("Comm/Graphic Des");
        imgs3.push(loadImage('img/f1.png'));
        //locations
          var x = numberRandomizer(.94,.98);
          var y = numberRandomizer(.2,.28);
          locations3.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '33') {
        choices3.push("Motion/Film/Production");
        imgs3.push(loadImage('img/f3.png'));
        //locations
          var x = numberRandomizer(.45,.48);
          var y = numberRandomizer(.34,.39);
        locations3.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '34') {
        choices3.push("Emerging Tech");
        imgs3.push(loadImage('img/f5.png'));
        //locations
          var x = numberRandomizer(.34,.39);
          var y = numberRandomizer(.52,.56);
         locations3.push([windowWidth*x,windowHeight*y]);
      }
        
        if (inputs[i].value == '35'){
        choices3.push("Research/Data Analy");
        imgs3.push(loadImage('img/f6.png'));
        //locations
          var x = numberRandomizer(.9,.97);
          var y = numberRandomizer(.88,.92);
          locations3.push([windowWidth*x,windowHeight*y]);
            
        choices3.push("Research/Data Analy");
        imgs3.push(loadImage('img/f6.png'));
        //locations
          var x = numberRandomizer(.84,.92);
          var y = numberRandomizer(.89,.94);
          locations3.push([windowWidth*x,windowHeight*y]);
            
        choices3.push("Research/Data Analy");
        imgs3.push(loadImage('img/f6.png'));
        //locations
          var x = numberRandomizer(.92,.98);
          var y = numberRandomizer(.89,.95);
          locations3.push([windowWidth*x,windowHeight*y]);
      }
        
      if (inputs[i].value == '36') {
        choices3.push("Front End/Web");
        imgs3.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.3,.45);
          var y = numberRandomizer(.85,.9);
        locations3.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '37') {
        choices3.push("Civic/Impact/Service/Strat");
        imgs3.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.1,.18);
          var y = numberRandomizer(.82,.87);
         locations3.push([windowWidth*x,windowHeight*y]);
      }
        if (inputs[i].value == '38') {
        choices3.push("Interior Des");
        imgs3.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.97,.99);
          var y = numberRandomizer(.52,.76);
         locations3.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '39') {
        choices3.push("Illustration");
        imgs3.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.17,.28);
          var y = numberRandomizer(.9,.96);
         locations3.push([windowWidth*x,windowHeight*y]);
          
        choices3.push("Illustration");
        imgs3.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.17,.32);
          var y = numberRandomizer(.9,.96);
         locations3.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '310') {
        choices3.push("Marketing");
        imgs3.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.67,.72);
          var y = numberRandomizer(.62,.67);
         locations3.push([windowWidth*x,windowHeight*y]);
          
        choices3.push("Marketing");
        imgs3.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.65,.76);
          var y = numberRandomizer(.67,.72);
         locations3.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '311') {
        choices3.push("Edu");
        imgs3.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.1,.18);
          var y = numberRandomizer(.48,.52);
         locations3.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '312') {
        choices3.push("Automotive/Product");
        imgs3.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.38,.47);
          var y = numberRandomizer(.42,.45);
         locations3.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '313') {
        choices3.push("Fashion");
        imgs3.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.4,.47);
          var y = numberRandomizer(.94,.99);
         locations3.push([windowWidth*x,windowHeight*y]);
          
        choices3.push("Fashion");
        imgs3.push(loadImage('img/f4.png'));
        //locations
          var x = numberRandomizer(.43,.52);
          var y = numberRandomizer(.95,.98);
         locations3.push([windowWidth*x,windowHeight*y]);
      }
        
        
        
    }}
    for (i=0; i<choices3.length; i++){
        allChoices.push(choices3[i]);
        allImgs.push(imgs3[i]);
        allLocations.push(locations3[i]);}
    draw();
    
    closeNav();
    
    waitscroll3();
}

function type6q4() {
    choices4 = [];
    imgs4 = [];
    locations4 = [];
  var inputs = document.getElementsByTagName('input');
  // loop through all the radio inputs
  for (i=0; i<inputs.length; i++) {
    // if the radio is checked..
    if (inputs[i].checked) {

      if (inputs[i].value == '41') {
        choices4.push("technical");
        imgs4.push(loadImage('img/m1.png')); 
          //locations
          var x = numberRandomizer(.42,.65);
          var y = numberRandomizer(.51,.66);
          locations4.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '42'){
        choices4.push("communication");
        imgs4.push(loadImage('img/m3.png'));
        //locations
          var x = numberRandomizer(.19,.27);
          var y = numberRandomizer(.73,.79);
          locations4.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '43') {
        choices4.push("leadership");
        imgs4.push(loadImage('img/m3.png'));
        //locations
         var x = numberRandomizer(.05,.17);
          var y = numberRandomizer(.37,.43);
        locations4.push([windowWidth*x,windowHeight*y]);
      }
      if (inputs[i].value == '44') {
        choices4.push("thinking");
        imgs4.push(loadImage('img/m3.png'));
        //locations
          var x = numberRandomizer(.04,.12);
          var y = numberRandomizer(.2,.29);
         locations4.push([windowWidth*x,windowHeight*y]);
      }
        
        if (inputs[i].value == '45'){
        choices4.push("creative");
        imgs4.push(loadImage('img/m3.png'));
        //locations
          var x = numberRandomizer(.3,.43);
          var y = numberRandomizer(.6,.68);
          locations4.push([windowWidth*x,windowHeight*y]);
            
        choices4.push("creative");
        imgs4.push(loadImage('img/m3.png'));
        //locations
          var x = numberRandomizer(.3,.43);
          var y = numberRandomizer(.4,.48);
          locations4.push([windowWidth*x,windowHeight*y]);
            
        choices4.push("creative");
        imgs4.push(loadImage('img/m3.png'));
        //locations
          var x = numberRandomizer(.3,.43);
          var y = numberRandomizer(.7,.78);
          locations4.push([windowWidth*x,windowHeight*y]);    
      }
      if (inputs[i].value == '46') {
        choices4.push("Digital Des");
        imgs4.push(loadImage('img/m3.png'));
        //locations
          var x = numberRandomizer(.1,.23);
          var y = numberRandomizer(.93,.98);
        locations4.push([windowWidth*x,windowHeight*y]);
          
        choices4.push("Digital Des");
        imgs4.push(loadImage('img/m3.png'));
        //locations
          var x = numberRandomizer(.2,.33);
          var y = numberRandomizer(.92,.97);
        locations4.push([windowWidth*x,windowHeight*y]);
          
        choices4.push("Digital Des");
        imgs4.push(loadImage('img/m3.png'));
        //locations
          var x = numberRandomizer(.5,.73);
          var y = numberRandomizer(.9,.99);
        locations4.push([windowWidth*x,windowHeight*y]);  
      }
        
        
        
    }}
    for (i=0; i<choices4.length; i++){
        allChoices.push(choices4[i]);
        allImgs.push(imgs4[i]);
        allLocations.push(locations4[i]);}
    draw();
    
    openNav();
    
    zoomOut();
}


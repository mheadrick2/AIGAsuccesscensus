var canvas;
var bg;
var s = 1.0;
var ds = 1.0;
var x = 0; 
var y = 0;
var dx = 0; 
var dy = 0;
var m = 0;//
function setup(){
    bg = loadImage("img/type3.png")
    canvas = createCanvas(windowWidth,windowHeight);
    canvas.position(0,0);
    canvas.style("z-index","-1");
}

function draw(){
    //background(bg);
//    console.log("drawing..");
    ease();
    
    push();
    translate(x+bg.width*.5, y+bg.height*.5);
    scale(s);
    image(bg, -bg.width*.5, -bg.height*.5);
    pop();
    for (i=0; i<allChoices.length;i++){
        push();

        translate(allLocations[i][0]+allImgs[i].width*.5+x,allLocations[i][1]+allImgs[i].height*.5+y);
        scale(s/2.5);
        image(allImgs[i],-allImgs[i].width*.5, -allImgs[i].height*.5);
         pop();
    }
   
}
function moveq2(){
    dx = -width; dy = 0;
    console.log("movedq2");
}

function moveq3(){
    dx = 0; dy = -width;
    console.log("movedq3");
}
function moveq4(){
    dx = width; dy = 0;
    console.log("movedq4");
}

function ease(){
    if(abs(dx-x)>.1)x += .2*(dx-x);
    if(abs(dy-y)>.1)y += .2*(dy-y);
    if(abs(ds-s)>.1) s += .2*(ds-s);
}


function zoomIn(){
    ds = 2;
}

function zoomOut(){
    ds = 0.5;
}


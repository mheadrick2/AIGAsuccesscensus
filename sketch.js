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
    imageMode(CENTER);
}

function draw(){
    background(255,255,255);
//    console.log("drawing..");
    ease();
    scale(s);
    push();
    
    translate(x+bg.width*.5, y+bg.height*.5);
    
    image(bg, 0, 0);
    pop();
    for (i=0; i<allChoices.length;i++){
        push();
        
        translate(allLocations[i][0]+allImgs[i].width*.5+x,allLocations[i][1]+allImgs[i].height*.5+y);
        
        image(allImgs[i], 0, 0);
        pop();
    }
   
}


function moveq2(){
    setTimeout(function(){dx = -width; dy = 0;
    console.log("movedq2")},2000);
}

function moveq3(){
    setTimeout(function(){dx = -width; dy = -height;
    console.log("movedq3")},2000);
}
function moveq4(){
    setTimeout(function(){dx = 0; dy = -height;
    console.log("movedq4")},2000);
}

function ease(){
    if(abs(dx-x)>.1) x += .1*(dx-x);
    if(abs(dy-y)>.1) y += .1*(dy-y);
    if(abs(ds-s)>.1) s += .1*(ds-s);
}

//function mousePressed(){
//    if(mouseIsPressed){
//        moveq2();
//        moveq3();
//        moveq4();
//        zoomOut();
//    }
//}

function zoomOut(){
    setTimeout(function(){ds = 0.40;
                          dx = 0; dy= 0;
                         },2000);
}

//
//function zoomIn(){
//    ds = 2;
//}



//

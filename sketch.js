var canvas;
function setup(){
    canvas = createCanvas(windowWidth*2,windowHeight*2);
    canvas.position(0,0);
    canvas.style("z-index","-1");
}

function draw(){
    background(244,252,245);
//    console.log("drawing..");
    for (i=0; i<allChoices.length;i++){
        image(allImgs[i],allLocations[i][0],allLocations[i][1],allImgs[i].width/5,allImgs[i].height/5);
    }
}

function zoomIn(){

}

function zoomOut(){
    
}


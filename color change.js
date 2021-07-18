var rainbow
var color

function setup(){

    //rainbow defination
        rainbow = ["purple","navy","blue","green","yellow","orange","red"];

}

function draw(){

frames = 20;
if(framecount%20 === 0){
for(var i = 0; i<7; i++){
    color = rainbow[i];
    print(color);
}
}

}


noseX= 0;
noseY= 0;

function preload(){
    mustache= loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    img = createCapture(VIDEO);
    img.hide();

    poseNet= ml5.poseNet(img,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet Is Intialized");
}
 function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y; 
    }
 }

function draw(){
    image(img,0,0,300,300);
    image(mustache,noseX-200,noseY-125,80,80);
}
function take_snapshot(){
    save('realfilter.png')
}
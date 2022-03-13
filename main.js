function setup()
{
    var canvas =  createCanvas(600,500);
    canvas.position(270,120);
    video=createCapture(VIDEO);
    video.position(50, 50);
    video.size(180, 200);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
    cannon_one= loadImage('cannon1.png');
}
function gotPoses(result)
{
    if(result.length>0)
    wristY=result[0].pose.leftWrist.y;
    console.log(wristY);
}
function modelLoaded()
{
    console.log("Model Loaded");
}
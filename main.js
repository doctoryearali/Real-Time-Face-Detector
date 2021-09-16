function preload()
{

}

function setup()
{
 canvas=createCanvas(200,200);
 canvas.center();
 video=createCapture(VIDEO);
 video.hide();
}

function draw()
{
 image(video,0,0,200,200);
}
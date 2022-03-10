var red_bg
var green_bg 
var r
var g
var b
function setup() {
    createCanvas(400,400);
    red_bg = createButton('Red')
    red_bg.position(100,50)
    green_bg = createButton('green')
    green_bg.position(300,50)
    red_bg.mousePressed(red)
  green_bg.mousePressed(green)
}

function draw() 
{
  background(30);

}

function red(){
  r = 225;
  g = 0;
  b = 0;
}

function green(){
  r = 0;
  g = 225;
  b = 0;
}

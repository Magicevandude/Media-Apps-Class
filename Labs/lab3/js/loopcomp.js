var speed = 5.5;
var diameter = 50;
var x;
var y;

// function setup for the canvas with x and y variables for width & height
function setup()  {
createCanvas(2400, 1200);
x = width/2;
y = height/2;
background(255);

}
// draw function to create the crazy unstable circle that will move across the screen but stay in bounds
function draw() {
    x += random(-speed, speed);
    y += random(-speed, speed);
    x = constrain(x, 0, width);
    y = constrain(y, 0, height);
    ellipse(x, y, diameter, diameter);
}

// Warning: the image displayed could cause your eyes and brain to become fatigued quickly!

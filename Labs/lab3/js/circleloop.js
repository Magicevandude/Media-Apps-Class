var angle = 0.0;
var offset = 60;
var scalar = 2;
var speed = 0.05;

// canvas setting up function with gray background and black line spiral
function setup() {
    createCanvas(120, 120);
    fill(0);
    background(204);

}
// function to draw the black spiral
function draw() {
var x = offset + cos(angle) * scalar;
var y = offset + sin(angle) * scalar;
ellipse(x, y, 2, 2);
angle += speed;
scalar += speed;

}
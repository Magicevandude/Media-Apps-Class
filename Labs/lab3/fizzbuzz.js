var radius = 50;
var x = -radius;
var speed = 0.5;


function setup() {
    createCanvas(800, 600);
    ellipseMode(RADIUS);
}

function draw() {
    background(0);
    x += speed;  // Increases the value of x over time
    arc(x, 60, radius, radius, 0.52, 5.76);

}

function draw() {
var fr = frameRate();
print(fr);
}


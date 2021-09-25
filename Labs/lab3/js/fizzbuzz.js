// canvas creating function
function setup() {
    createCanvas(1500, 1500);
    
}
// drawing function for black circle
function draw() {
    background(255);
    fill(0)
    
// for loop to draw black circle with radius of 25 and incrementing the position by 50 each loop
    for (let circleX = 25; circleX <=1250; circleX += 50) {
        circle(circleX, 450, 50); // positions the black circles in the middle of the screen.
    }
}




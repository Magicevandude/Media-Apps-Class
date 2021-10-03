// empty starting array
var x = []; 

// function setup to create an canvas that represents being under a hail of bullets. Like on Call of Duty
function setup() {
createCanvas(1000,1000);
noStroke();
fill(129, 88, 17); // bronze bullets for extra realism
for (var i = 0; i < 3000; i++) {
    x[i] = random(-1000, 200);
}
}
// draw function to create the hail of bullets flying across the screen like in Call of Duty
function draw() {
    background(255);
    for (var i = 0; i < x.length; i++){
        x[i] += 0.5;
        var y = i * 0.7;
        circle(x[i], y, 12, 12, 0.52, 5.76);
    }
}
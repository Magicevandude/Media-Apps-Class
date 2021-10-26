// creating the empty array
var numFrames = 10; // framerate set to 5

var x = [];

// setup function for canvas and setting background to white with blue water
function setup() {
    createCanvas(500,500);
    noStroke();
    fill(102, 115, 202);
    for (var i = 0; i < 3000; i++) {
        x[i] = random(-1000, 200);
    }
}

// draw function to simulate dripping water columns like a waterfall that eventually goes dry
function draw() {
    background(255);
    for (var i = 0; i < x.length; i++){
        x[i] += 0.5;
        var y = i * 1;
        circle(25, x[i], 15, 15, 0.52, 5.76);
    }
    for (var i = 0; i < x.length; i++){
        x[i] += 0.5;
        var y = i * 1;
        circle(125, x[i], 15, 15, 0.52, 5.76);
    }
    for (var i = 0; i < x.length; i++){
        x[i] += 0.5;
        var y = i * 1;
        circle(100, x[i], 15, 15, 0.52, 5.76);
    }
    for (var i = 0; i < x.length; i++){
        x[i] += 0.5;
        var y = i * 1;
        circle(75, x[i], 15, 15, 0.52, 5.76);
    }
    for (var i = 0; i < x.length; i++){
        x[i] += 0.5;
        var y = i * 1;
        circle(50, x[i], 15, 15, 0.52, 5.76);
    }
    for (var i = 0; i < x.length; i++){
        x[i] += 0.5;
        var y = i * 1;
        circle(150, x[i], 15, 15, 0.52, 5.76);
    }
    for (var i = 0; i < x.length; i++){
        x[i] += 0.5;
        var y = i * 1;
        circle(175, x[i], 15, 15, 0.52, 5.76);
    }
    for (var i = 0; i < x.length; i++){
        x[i] += 0.5;
        var y = i * 1;
        circle(200, x[i], 15, 15, 0.52, 5.76);
    }
}


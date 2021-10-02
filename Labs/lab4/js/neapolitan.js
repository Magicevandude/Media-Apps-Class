icecream = ['vanilla','strawberry','chocolate']

var rectcolor
// canvas creating function
function setup() {
    createCanvas(1500, 1500);
    
}
// drawing function for black circle
function draw() {
    background(255);
    fill(0)
    
// for loop to draw colored squares that move to the right on each loop up to 3 times to represent neapolitan icecream
    for (let square = 250; square <=1500; square += 500) {
        rect(100, 150, 400, 350); // positions the squares in the middle of the screen.
        fill(238, 226, 226)
    }
    for (let square = 25; square <=150; square += 50) {
        rect(500, 150, 400, 350); // positions the squares in the middle of the screen.
        fill(226, 69, 69)
    }
    for (let square = 25; square <=150; square += 50) {
        rect(900, 150, 400, 350); // positions the squares in the middle of the screen.
        fill(100, 76, 52)
    }
}







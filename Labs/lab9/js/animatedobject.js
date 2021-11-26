//Creating class to display my animated object
class Myobject {
    // random math number function to change x and y over each iteration. 
    x = Math.random() * 700;
    y = Math.random() * 350;

    velocity = { x: 5, y: 5 }; 

    color = [ Math.random() * 225, 225, 225];



    // update function for drawing the object across the screen
    update() {
    noStroke();    
    fill ( this.color );
    circle(this.x, this.y, 10);

    this.x += this.velocity.x;
    this.y += this.velocity.y;
    }






}


//p5 code block
//empty list to represent my object
let object = [];

// canvas setup function
function setup() {
    createCanvas(600, 400);

    for( var i =0; i < 123; i++) {
        object[i] = new Myobject();
    }

}
// draw function with for loop
function draw () {
    for( var i =0; i < 123; i++) {
        object[i].update();


}















}

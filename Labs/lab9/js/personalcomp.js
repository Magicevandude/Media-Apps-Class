//Creating class to display my very personal comp object
class Mypersonalcomp {
    // random math number function to change x and y over each iteration. 
    x = Math.random() * 500;
    y = Math.random() * 250;

    velocity = { x: 5, y: 5 }; 
    // color set to blue and purple mix
    color = [ Math.random() * 255, 25, 255];



    // update function for drawing the object across the screen with a mesmorizing triangle
    update() {
    noStroke();    
    fill ( this.color );
    triangle(this.x, this.y, 250, 170, 330, 300);
    

    this.x += this.velocity.x;
    this.y += this.velocity.y;
    }






}


//p5 code block
//empty list to represent my object
let object = [];

// canvas setup function with for loop to update the coolobject class
function setup() {
    createCanvas(600, 400);

    for( var i =0; i < 123; i++) {
        object[i] = new Mypersonalcomp();
    }

}
// draw function with for loop for my cool object
function draw () {
    for( var i =0; i < 123; i++) {
        object[i].update();


}
// end of code














}
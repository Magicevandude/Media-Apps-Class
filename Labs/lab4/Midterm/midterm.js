//algorithm:
//Step 1. Ask user for input. If the input matches either an A or B then proceed to one of the if statements. 
//If not execute the else statement and end program

let letters = ["a","b"] //array with the letters a & b

var userinput = prompt("Please enter your letter"); // user input window prompt


function setup() {
    createCanvas(1000, 1000);
    
}

function draw() { //draw function
    background(255, 255, 255); //black background
    
// if statement for if a user inputs the letter a that will draw a black square with a width/height of 60 in the upper left
    if(userinput = "a") {
        fill(0,0,0)
        rect(-250, 250, 60, 60)
        
    }
// else if statement for when a user inputs the letter b. It will draw a red circle with a radius of 20 in the upper right
    else if(userinput = "b") {
        fill(255,0,0)
        circle(250,250,20)
    

    
} // else statement for if the input letters are not a or b. will draw a blue circle in the middle of the screen with a radius of 20
    else {
    
    fill(0,0,255)
    circle(0,0,20)
    }
}

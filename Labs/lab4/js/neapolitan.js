

var userinput = prompt("Please enter your letter");


function setup() {
    createCanvas(1000, 1000);
    
}

function draw() {
    background(255, 255, 255); //clear to black
    

    if(userinput = "a") {
        fill(0,0,0)
        rect(-250, 250, 60, 60)
        
    }

    else if(userinput = "b") {
        fill(255,0,0)
        circle(250,250,20)
    

    
}
    else {
    
    fill(0,0,255)
    circle(0,0,20)
    }
}







//variable to collect user input data from html div with num ID
let txt = document.getElementById("num");

// function to calculate the average of the comma spaced numbers the user gives
function calcavg() {
    
    //collecting strings and turning them into a number value
    var stringvalues = txt.value;

    //split function for user input string values
    let numarray = stringvalues.split(",");

    // setting average and default numbers to zero
    let avg = 0;

    let sum = 0;

    // for loop to take the comma seperated numbers and add them up then divide by the count for avg
    for(let i =0; i < numarray.length; i++) {
    avg = sum += Number(numarray[i]) / numarray.length;
       
       
    }
    // javascript alert to tell user what the average is
    alert("The average number is " + avg);
}

//function to calculate the sum based on comma seperated numbers the user gives.
function calsum() {
    
    var stringvalues = txt.value;
    
    let numarray = stringvalues.split(",");
    
    let sum = 0;
    
    //for loop to sum up the numbers the user gives.
    for(let i =0; i < numarray.length; i++) {
        sum += Number(numarray[i]);
           
           
    }    
    // alert to tell the user the output of their numbers
    alert("The sum is " + sum);
}






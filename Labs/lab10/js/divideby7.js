// setting user input number to a variable
var usernum = document.getElementById("number");

// function to take user input and see if its divisible by 7
function divide7 (number) {
let inputnum = usernum.value    
   
    // if statement to see if user input divides by 7 and leaves a remainder of 0
    if(inputnum % 7 === 0) {
    console.log(inputnum + "This number is divisible by 7!!");
    //else statement for if user inputs a number not divisible by 7
    } else {
    console.log(inputnum + "This number is NOT divisible by 7!");
    }


}


// setting user input number to a variable
var usernum = document.getElementById("number");

// function to take user input and see if its divisible by 7
function divide7 (number) {
    
   
    // if statement to see if user input divides by 7 and leaves a remainder of 0
    if(usernum % 7 === 0) {
    console.log(number + "This number is divisible by 7!!");
    //else statement for if user inputs a number not divisible by 7
    } else {
    console.log(number + "This number is NOT divisible by 7!");
    }


}

// calling the function if the user clicks on a button on webpage. 
usernum.onclick = function divide7(number){"Submit"};
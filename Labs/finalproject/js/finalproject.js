//variables to accept user input, display buttons, display word status and display the hangman picture
let useranswer = '';
let wrongguesslimit = 6;
let mistakescounter = 0;
let userguesses = [];
let wordstatus = null;


//Variable array to store the possible hangman answers for Australian Cities
//<3 Australia
var Australiancities = [
    'sydney',
    'canberra',
    'perth',
    'adelaide',
    'darwin',
    'goldCoast',
    'brisbane',
    'mandurah',
    'sunshineCoast',
    'aliceSprings',
    'cottesloe',
    'geraldton',
    'albany',
    'kalbarri',
    'hobart'
    ];


//function to select a random word from the Australia Cities array and start the game of Hangman
function randomword() {
  useranswer = Australiancities[Math.floor(Math.random() * Australiancities.length)];
}

//function to create the 26 letter buttons on the screen for the user to click
function generatewordbuttons() {
  let letterbuttons = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
    `
      <button
        class="btn btn-lg btn-primary m-2"
        id='` + letter + `'
        onClick="handleletterguess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

  document.getElementById('keyboard').innerHTML = letterbuttons;
}

//function to process the letter button clicks from the user
function handleletterguess(chosenLetter) {
  userguesses.indexOf(chosenLetter) === -1 ? userguesses.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute('disabled', true);

  //if statement for if the user selects the right letter for the hangman game
  if (useranswer.indexOf(chosenLetter) >= 0) {
    guessedword();
    checkifgamewon();
//else if statement for if the user selects the wrong letter in the game
  } else if (useranswer.indexOf(chosenLetter) === -1) { 
    mistakescounter++;
    updatemistakes();
    checkIfgamelost();
    hangmanpicture();
  }
}

//function to build and display the hangman picture depending on user letter guesses
function hangmanpicture() {
  document.getElementById('hangmanpicture').src = './hangmanimgs/' + mistakescounter + '.png';
}

//function to see if user won game
function checkifgamewon() {
  if (wordstatus === useranswer) {
      //alert sent to the user to tell them they won the game
    document.getElementById('keyboard').innerHTML = 'You Won the game! Congratulations! Want a cookie?!!!';
  }
}

// function to see if user lost game
function checkIfgamelost() {
  if (mistakescounter === wrongguesslimit) {
    //HTML element grabber for displaying to the user that they lost the game. 
    document.getElementById('wordspotlight').innerHTML = 'You lost! The correct answer was: ' + useranswer;
    document.getElementById('keyboard').innerHTML = 'You Lost the game!!! Try again.';

  }
}

//function to add up the letters the user selects to create the winning word
function guessedword() {
    
  wordstatus = useranswer.split('').map(letter => (userguesses.indexOf(letter) >= 0 ? letter : " _ ")).join('');

  document.getElementById('wordspotlight').innerHTML = wordstatus;
}

//function to change the hangman picture as the user guesses the wrong letters for the word
function updatemistakes() {
  document.getElementById('mistakescounter').innerHTML = mistakescounter;
}

//function to reset the game
function newgame() {
  mistakescounter = 0;
  userguesses = [];
  document.getElementById('hangmanpicture').src = './hangmanimgs/0.png';

//function call to reset the game
  randomword();
  guessedword();
  updatemistakes();
  generatewordbuttons();
}
//element to display the limit of the amount of wrong guesses the user is permitted to have. 
document.getElementById('wrongguesslimit').innerHTML = wrongguesslimit;

//function call to change the display based on what letter button the user clicks
randomword();
generatewordbuttons();
guessedword();


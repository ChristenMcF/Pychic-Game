
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessedLetters = [];
var letterGuessed = "";



  resetGame();
  display();

var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

    console.log(computerChoice);

document.onkeyup = function(event) {
  var guess = event.key;
  console.log("Letter guessed: " + guess);
  //if (guess.length === 1 && /[a-z]/i.test(guess)){}
  if (guess === letterGuessed) {
    won();
  } else if (guessesLeft === 0) {
    lost();
  } else {
    missed(guess);
  }

    display();
}

function display() {
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guesses-left").innerHTML = guessesLeft;
    document.getElementById("guessed-letters").innerHTML = guessedLetters.join(",");
    
}

function won() {
  wins++;
  resetGame();
}

function lost() {
  losses++;
  resetGame();
}

function missed(letter) {
  guessesLeft--;
  guessedLetters.push(letter);
  console.log(guessedLetters);
}

/*function resetGame() {
  guessesLeft = 10;
  guessedLetters = [];
}*/

function resetGame() {
  guessesLeft = 10;
  guessedLetters = [];
  letterGuessed = alphabet[Math.floor(Math.random() * alphabet.length)];
  
}
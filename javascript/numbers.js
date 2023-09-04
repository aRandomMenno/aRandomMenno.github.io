var randomNumber;
var guesses;

function startGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  guesses = 0;
}

function checkGuess() {
  var userGuess = document.getElementById('number-guess').value;
  if(userGuess == randomNumber){
    document.getElementById('result').innerHTML = 'Congratulations! ' + userGuess + ' is correct. <br>It took ' + guesses + ' guesses.';
    startGame();
  } else if(userGuess < randomNumber) {
    document.getElementById('result').innerHTML = userGuess + ' is too low.';
    guesses++
  } else if(userGuess > randomNumber) {
    document.getElementById('result').innerHTML = userGuess + ' is too high.';
    guesses++
  }
}

startGame();

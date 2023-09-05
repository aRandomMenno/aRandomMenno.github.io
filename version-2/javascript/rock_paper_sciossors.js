document.addEventListener("DOMContentLoaded", () => {
    const rockButton = document.getElementById("rock");
    const paperButton = document.getElementById("paper");
    const scissorsButton = document.getElementById("scissors");
    const playerScoreElement = document.getElementById("player-score");
    const computerScoreElement = document.getElementById("the-site-score");
    const resultElement = document.getElementById("result");
  
    rockButton.addEventListener("click", () => {
      handlePlayerSelection("rock");
    });
  
    paperButton.addEventListener("click", () => {
      handlePlayerSelection("paper");
    });
  
    scissorsButton.addEventListener("click", () => {
      handlePlayerSelection("scissors");
    });
  
    function handlePlayerSelection(playerSelection) {
      const options = ["rock", "paper", "scissors"];
      const computerSelection = options[Math.floor(Math.random() * options.length)];
  
      // Compare playerSelection and computerSelection to determine the winner
      let result;
      if (playerSelection === computerSelection) {
        result = "It's a tie!";
        // Give player & computer a point
        let playerScore = parseInt(playerScoreElement.innerText);
        playerScore++;
        playerScoreElement.innerText = playerScore;
  
        let computerScore = parseInt(computerScoreElement.innerText);
        computerScore++;
        computerScoreElement.innerText = computerScore;
      } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
      ) {
        result = "You win!";
        // Update player score
        let playerScore = parseInt(playerScoreElement.innerText);
        playerScore++;
        playerScoreElement.innerText = playerScore;
      } else {
        result = "The site wins!";
        // Update computer score
        let computerScore = parseInt(computerScoreElement.innerText);
        computerScore++;
        computerScoreElement.innerText = computerScore;
      }
  
      // Display the result
      resultElement.innerHTML = `${result}, You chose: <span class="rps-results">${playerSelection}</span> & my site chose: <span class="rps-results">${computerSelection}</span>.`;
    }
  });
  
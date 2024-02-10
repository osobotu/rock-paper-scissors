const options = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  let n = Math.floor(Math.random() * 3);
  return options[n];
}

function toTitleCase(word) {
  let newWord = word
    .split(" ")
    .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
    .join(" ");
  return newWord;
}

function playRound(playerSelection, computerSelection) {
  const standard = [
    [0, -1, 1],
    [1, 0, -1],
    [-1, 1, 0],
  ];
  if (!options.includes(toTitleCase(playerSelection))) {
    console.log("That option is not part of rock-paper-scissors game.");
    return 0;
  }
  let playerSelectionIndex = options.indexOf(toTitleCase(playerSelection));
  let computerSelectionIndex = options.indexOf(computerSelection);

  let gameState = standard[playerSelectionIndex][computerSelectionIndex];

  return gameState;
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  // loop n times
  const n = 5;
  for (let i = 0; i < n; i++) {
    // get player selection
    let playerSelection = prompt(`Choose one [Rock, Paper, Scissors]: `);
    // get computer selection
    const computerSelection = getComputerChoice();
    // play round and store gameState for player1.
    let gameState = playRound(playerSelection, computerSelection);

    // update scores based on gameState and print round winner
    if (gameState == 1) {
      playerScore++;
      console.log(
        `You win this round! ${playerSelection} beats ${computerSelection}`
      );
    } else if (gameState == -1) {
      computerScore++;
      console.log(
        `You lose this round! ${computerSelection} beats ${playerSelection}`
      );
    } else {
      console.log(`Its a draw! No one wins!`);
    }
  }

  printGameWinner(playerScore, computerScore);
}

function printGameWinner(player1Score, player2Score) {
  if (player1Score > player2Score) {
    console.log(`Player1 wins by ${player1Score} to ${player2Score}`);
  } else if (player2Score > player1Score) {
    console.log(`Player2 wins by ${player2Score} to ${player1Score}`);
  } else {
    console.log(
      `Its a draw! Player1: ${player1Score}. Player2: ${player2Score}`
    );
  }
}

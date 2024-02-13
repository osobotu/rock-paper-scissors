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

function updateResultText(text) {
  resultsDiv.textContent = text;
}

function updateChoices(playerSelection, computerSelection) {
  playerChoiceDiv.textContent = playerSelection;
  computerChoiceDiv.textContent = computerSelection;
}

function updateScores(playerScore, computerScore) {
  playerScoreDiv.textContent = playerScore;
  computerScoreDiv.textContent = computerScore;
}

function printGameWinner(player1Score, player2Score) {
  if (player1Score > player2Score) {
    updateResultText(`Player1 wins by ${player1Score} to ${player2Score}`);
  } else if (player2Score > player1Score) {
    updateResultText(`Player2 wins by ${player2Score} to ${player1Score}`);
  } else {
    updateResultText(
      `Its a draw! Player1: ${player1Score}. Player2: ${player2Score}`
    );
  }
}

let playerScore = 0;
let computerScore = 0;
let totalRounds = 0;

const gameBtns = document.querySelector("#game-btns");

const resultsDiv = document.querySelector("#display");

const playerChoiceDiv = document.querySelector("#playerChoice");
const computerChoiceDiv = document.querySelector("#computerChoice");

const playerScoreDiv = document.querySelector("#playerScore");
const computerScoreDiv = document.querySelector("#computerScore");

const totalRoundsDiv = document.querySelector("#totalRounds");

gameBtns.addEventListener("click", function (e) {
  totalRounds++;
  totalRoundsDiv.textContent = totalRounds;
  let playerSelection = toTitleCase(e.target.id);
  const computerSelection = getComputerChoice();

  updateChoices(playerSelection, computerSelection);

  let gameState = playRound(playerSelection, computerSelection);
  if (gameState == 1) {
    playerScore++;
    updateResultText(
      `You win this round! ${playerSelection} beats ${computerSelection}`
    );
  } else if (gameState == -1) {
    computerScore++;
    updateResultText(
      `You lose this round! ${computerSelection} beats ${playerSelection}`
    );
  } else {
    updateResultText(`Its a draw! No one wins!`);
  }

  updateScores(playerScore, computerScore);

  if (playerScore === 5 || computerScore === 5) {
    printGameWinner(playerScore, computerScore);
    resetGame();
  }
});

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  totalRounds = 0;
  updateChoices("choice", "choice");
}

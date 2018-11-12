let resultMsg = "";
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
	randNumber = Math.floor(Math.random() * 3);
	if (randNumber === 0) return "rock";
	else if (randNumber === 1) return "paper";
	else return "scissors";
}

function play(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    resultMsg = "Tie! Try again.";
    return "tie";
  }

  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      resultMsg = "You Lose! Paper beats Rock.";
      return "lose";
    }
    if (computerSelection === "scissors") {
      resultMsg = "You win! Rock beats Scissors.";
      return "win";
    }
  }

  if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      resultMsg = "You Lose! Scissors beats Paper.";
      return "lose";
    }
    if (computerSelection === "rock") {
      resultMsg = "You win! Paper beats Rock.";
      return "win";
    }
  }

  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      resultMsg = "You Lose! Rock beats Scissors.";
      return "lose";
    }
    if (computerSelection === "paper") {
      resultMsg = "You win! Scissors beats Paper.";
      return "win";
    }
  }
}

function showScore() {
	const roundResult = document.getElementById('roundResult');
	const playerTotal = document.getElementById('playerTotal');
	const computerTotal = document.getElementById('computerTotal');
	const finalResult = document.getElementById('finalResult');

	finalResult.textContent = "";

	roundResult.textContent = resultMsg;
	playerTotal.textContent = "Player Score: " + playerScore;
	computerTotal.textContent = "Computer Score: " + computerScore;

	if (playerScore === 5) {
		finalResult.textContent = `You win by beating computer ${playerScore} to ${computerScore}!`;
		playerScore = 0;
		computerScore = 0; 
	} else if (computerScore === 5) {
		finalResult.textContent = `Computer win by beating you ${computerScore} to ${playerScore}!`;
		playerScore = 0;
		computerScore = 0;
	}
}



window.onload = function() {
	const buttons = document.querySelectorAll('button');
	buttons.forEach(function(button) {
		button.addEventListener('click', function(e) {
			let playerChoice = e.target.id;
			console.log('player choice: ' + playerChoice);
			let computerChoice = computerPlay();
			console.log('computer choice: ' + computerChoice);
			let result = play(playerChoice, computerChoice);
			console.log('result: ' + result);

			if (result === "win") {
				playerScore++;
			} else if (result === "lose") {
				computerScore++;
			}
			showScore();
		});
	});
}
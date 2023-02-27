    const pickRock = document.querySelector('.rock');
    const pickPaper = document.querySelector('.paper');
    const pickScissors = document.querySelector('.scissors');
    const roundResult = document.querySelector('.roundResult');
    const yourScore = document.querySelector('.yourScore');
    const compScore = document.querySelector('.computerScore');
    const gameResult = document.querySelector('.gameResult');
    const score = document.querySelector('.score');
    roundResult.style.visibility = 'hidden';
    pickRock.addEventListener('click',() => {
        roundResult.textContent = playRound(playerSelection='rock',getComputerChoice());
        yourScore.textContent = playerScore;
        compScore.textContent = computerScore;
        roundResult.style.visibility = 'visible';
        checkScore();
    });
    pickPaper.addEventListener("click",() => {
        roundResult.textContent = playRound(playerSelection='paper',getComputerChoice());
        yourScore.textContent = playerScore;
        compScore.textContent = computerScore;
        roundResult.style.visibility = 'visible';
        checkScore();
    });
    pickScissors.addEventListener("click",() => {
        roundResult.textContent = playRound(playerSelection='scissors',getComputerChoice());
        yourScore.textContent = playerScore;
        compScore.textContent = computerScore;
        roundResult.style.visibility = 'visible';
        checkScore();
    });

    
    //this function checks whether the computer or the player won 5 times to end the game
    function checkScore(){
        if (playerScore == 5) {
            gameResult.textContent = "Congratulations! You won the game! LEZZGOOOOO!";
            endGame();
        }
        else if (computerScore == 5){
            gameResult.textContent = 'Ooooff! Game over, you lost the game. Don\'t quit! You can try again!';
            endGame();
        }
        else if (playerScore < 5 || computerScore < 5) {
            gameResult.textContent = '';
        }
    }
    //this function ends the game.
    function endGame(){
        playerScore = 0;
        computerScore =0;
        roundResult.style.visibility ='hidden';
        yourScore.textContent = '';
        compScore.textContent = '';
        pickRock.style.display = 'none';
        pickPaper.style.display = 'none';
        pickScissors.style.display = 'none';
        const tryAgainDiv = document.createElement('div');
        gameResult.appendChild(tryAgainDiv);
        const tryAgain = document.createElement('button');
        tryAgain.textContent = 'Play Again';
        tryAgainDiv.appendChild(tryAgain);
        tryAgain.addEventListener('click',resetGame);
        score.style.display = 'none';
    }
    //this function resets the game.
    function resetGame(){
        yourScore.textContent = playerScore = 0;
        compScore.textContent = computerScore = 0;
        pickRock.style.display = 'inline';
        pickPaper.style.display = 'inline';
        pickScissors.style.display = 'inline';
        score.style.display = 'flex';
        roundResult.style.visibility ='hidden';
        gameResult.textContent = '';
        tryAgain.style.display = 'none';
    }

 //   function game() {
    
    //function for player choice
    
    
    // function to randomly return either ‘Rock’, ‘Paper’ or ‘Scissors'
    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors']
        return choices[Math.floor(Math.random() * choices.length)];
    }

    
    // function to play a single round of rock, paper, scissors

        let playerScore = 0;
        let computerScore = 0;

    function playRound(playerSelection, computerSelection) {
        computerSelection = getComputerChoice();

        if (playerSelection === 'rock' && computerSelection === 'rock') {
            return "It's a tie! You both chose rock."
        }
        else if (playerSelection === 'rock' && computerSelection === 'paper') {
            computerScore++;
            return "You lost! Paper beats rock."
        }
        else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            playerScore++;
            return "You won! Rock beats scissors."
        }
        else if (playerSelection === 'paper' && computerSelection === 'rock') {
            playerScore++;
            return "You won! Paper beats rock."
        }
        else if (playerSelection === 'paper' && computerSelection === 'paper') {
            return "It's a tie! You both chose paper."
        }
        else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            computerScore++;
            return "You lost, Scissors beats paper."
        }
        else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            computerScore++;
            return "You lost! Rock beats scissors"
        }
        else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            playerScore++;
            return "You win! Scissors beats paper."
        }
        else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
            return "It's a tie! You both chose scissors."
        }
        else {
            return 'Oops check your spelling, try again';
        }
    }
    
    // play 5 rounds of game
   /* for (i = 0; i<1 i < 5 || (playerScore < 5 && computerScore <5); i++) {
    

        const computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));

        console.log(computerSelection);
    
        console.log(playerScore);
        console.log(computerScore);
    }*/
    
    // declare overall winner 

    function declareWinner() {
        if (playerScore > computerScore) {
        console.log("Game over. You win!")
        }
        else if (playerScore === computerScore) {
            console.log("Game over. It's a tie!")
        }
        else {
            console.log("Game over. You lose.")
        }
    }
    

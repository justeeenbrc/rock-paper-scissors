# rock-paper-scissors

 if ((playerSelect='rock') & (computerSelection='scissors')) {
            console.log("You won! Rock beats Scissors.");
        }
        else if ((playerSelect='rock') & (computerSelection='paper')) {
            console.log("You lost! Paper beats Rock.");
        }
        else if ((playerSelect='paper') & (computerSelection='scissors')) {
            console.log("You lost! Scissors beat Paper.");
        }
        else if ((playerSelect='paper') & (computerSelection='rock')) {
            console.log("You won! Paper beats Rock.");
        }
        else if ((playerSelect='scissors') & (computerSelection='rock')) {
            console.log("You won! Paper beats Rock.");
        }
        else  {
            console.log("It's a Draw!")
        }
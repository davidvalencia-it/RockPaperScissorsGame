const game = () => {
    let pScore = 0;
    let cScore = 0;

    // Start the game (This functino is just to fadeout .introScreen and fade in .match)
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", function() {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    // Play Match
    const playMatch = function() {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(function(hand) {
            hand.addEventListener("animationend", function() {
                this.style.animation = "";
            });
        });

        // Computer Options - Creates array to hold the values of the options and then we will turn into numbers
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(function(option) {
            option.addEventListener("click", function() {
                //Computer Choice
                const computerNumber = Math.floor(Math.random() * 3);
                // Variable = Math.floor is rounding the numbers from Math.random. Math.random number is multiplied by 3
                const computerChoice = computerOptions[computerNumber];

                //Here is where we compare hands
                setTimeout(() => {
                    //Here is where we compare hands
                    compareHands(this.textContent, computerChoice);

                    // Update Images
                    playerHand.src = `./images/${this.textContent}.png`;
                    computerHand.src = `./images/${computerChoice}.png`;

                }, 2000);


                //Animation
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";

            });
        });

    };

    const updateScore = function() {
        playerScore = document.querySelector(".player-score p");
        computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };


    const compareHands = function(playerChoice, computerChoice) {
        //Update text on winner
        const winner = document.querySelector('.winner');
        //Checking for a tie
        if (playerChoice === computerChoice) {
            winner.textContent = 'It is a tie!';
            return;
        }
        //Check for rock
        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Player Wins!';
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Computer Wins!';
                cScore++;
                updateScore();
                return;
            }
        }
        //Check for paper
        if (playerChoice === 'paper') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Computer Wins!';
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Player Wins!';
                pScore++;
                updateScore();
                return;
            }
        }
        //Check for scissors
        if (playerChoice === 'scissors') {
            if (computerChoice === 'rock') {
                winner.textContent = 'Computer Wins!';
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Player Wins!';
                pScore++;
                updateScore();
                return;
            }
        }
    }





    // This calls the inner functionas
    startGame();
    playMatch();

};

// This starts the game function
game();
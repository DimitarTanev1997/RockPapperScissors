let Game = (function() {
    //array with possible plays
    const plays = ['Rock', 'Paper', 'Scissors'];
    let playerResult = 0;
    let computerResult = 0;
    //first function 
    function computerPlay () {
        let play = plays[Math.floor(Math.random() * 3)];
        return play;
    }
    let updateScore = function () {
        document.getElementById("pc").innerText = computerResult;
        document.getElementById("you").innerText = playerResult;
    }
    let resetScore = function () {
        computerResult = 0;
        playerResult = 0;
        document.getElementById("pc").innerText = 0;
        document.getElementById("you").innerText = 0;
    }
    //function that plays one round of the game 
    let playRound = function (input) {
        const computerSelection = computerPlay();
        let playerInput = input;
        const playerSelection = getUserInput(playerInput);
        console.log('COM-Selection: ' + computerSelection);
        console.log('Player-Selection: ' + playerSelection);
        if (playerSelection === undefined) {
            console.log('Invalid input');
        } else {
            msg.innerHTML = winner(computerSelection, playerSelection);
        }
    }
    let game = function () {
        let playerResult = 0,
            computerResult = 0;
        do {
            let round = playRound();
            if (round.search('tie') !== -1) {
                console.log(round);
                console.log('Your score: ' + playerResult);
                console.log('Computer score: ' + computerResult);
            } else if (round.search('won') !== -1) {
                playerResult++;
                console.log(round);
                console.log('Your score: ' + playerResult);
                console.log('Computer score: ' + computerResult);
            } else if (round.search('lost') !== -1) {
                computerResult++;
                console.log(round);
                console.log('Your score: ' + playerResult);
                console.log('Computer score: ' + computerResult);
            }
            if (playerResult >= 3) {
                return 'You won the 3 out of 5 game!!! Congrats!!!';
            } else if (computerResult >= 3) {
                return 'You lost the 3 out of 5 game!!! Sorry!!!';
            }
        } while (playerResult < 3 || computerResult < 3);
    }
    //function that determinets the winner
    function winner(computerSelection, playerSelection) {
        if (computerSelection === playerSelection) {
            return 'The game is a tie';
        } else if (computerSelection === 'Rock') {
            if (playerSelection === 'Paper') {
                playerResult++;
                return 'You won! Paper beats Rock!!!';
            } else {
                computerResult++;
                return 'You lost! Rock beats Scissors!!!';
            }
        } else if (computerSelection === 'Paper') {
            if (playerSelection === 'Rock') {
                computerResult++;
                return 'You lost! Paper beats Rock !!!';
            } else {
                playerResult++;
                return 'You won! Scissors beat Paper!!!';
            }
        } else if (computerSelection === 'Scissors') {
            if (playerSelection === 'Rock') {
                playerResult++;
                return 'You won! Rock beats Scissors !!!';
            } else {
                computerResult++;
                return 'You lost! Scissors beat Paper!!!';
            }
        }
    }
    //here we return the methods game and playRound so we can start the game outside of the module
    return {
        game: game,
        playRound: playRound,
        updateScore: updateScore,
        resetScore: resetScore
    };
    
})();


const btns = Array.from(document.getElementsByClassName("btn"));
let msg = document.getElementById('msg');
btns.forEach(function (el) {
    el.addEventListener("click", function () {
        Game.playRound(el.innerHTML);
        Game.updateScore();
    });
});
let score = document.getElementById("score");
score.addEventListener("click", function() {
    Game.resetScore();
})



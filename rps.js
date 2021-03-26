'use strict';

let playerScore = 0;
let computerScore = 0;
let result = '';
let playerSelection = '';
const logo = document.querySelector('.logo')
const buttons = document.querySelectorAll('button');
const container = document.querySelector('.container');


//computer random result
function computerPlay (){
   const computerChoice = ['rock', 'paper', 'scissors'];
   return computerChoice[Math.floor(Math.random() * computerChoice.length)];
  }

//play game function
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        return "Tie!";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        playerScore++;
        return 'You win! 🪨 beats ✂️'
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        playerScore++;
        return 'You win! 🗞 beats 🪨'
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        playerScore++;
        return 'You win! ✂️ beats 🪨'
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
        computerScore++;
        return 'You lose! 🗞 beats 🪨'
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        computerScore++;
        return 'You lose! 🪨 beats ✂️'
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        computerScore++;
        return 'You lose! ✂️ beats 🗞'
    } 
}

// 5 round and game is over
function game(){
    for(let i = 0; i <= 5; i++){
        const computerSelection = computerPlay();
        alert(playRound(playerSelection, computerSelection))
    }
};

//new game option
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.id;
        const computerSelection = computerPlay();
        result = playRound(playerSelection, computerSelection);
        scoreText.textContent = result;
        scoreNumber.textContent = `${playerScore}:${computerScore}`;
        const endResult = document.querySelector('.container');
        if (playerScore === 5){
            document.querySelector('.rules').style.display = 'none';
            endResult.innerHTML = `<h1>You won</h1>`;
            let newGame = document.createElement('button');
            newGame.classList.add('reset')
            newGame.textContent = 'New Game';
            newGame.addEventListener('click', () => {
                location.reload();
            })
            endResult.appendChild(newGame)

        } else if (computerScore === 5){
            document.querySelector('.rules').style.display = 'none';
            endResult.innerHTML = `<h1>Computer won</h1>`
            let newGame = document.createElement('button');
            newGame.classList.add('reset');
            newGame.textContent = 'Play again';
            newGame.addEventListener('click', () => {
                location.reload();
            })  
            endResult.appendChild(newGame)

        }
    })
})

//scoreboard
const scoreText = document.createElement('div');
scoreText.classList.add('scoreboard');
container.appendChild(scoreText);
const scoreNumber = document.createElement('div',);
scoreNumber.classList.add('score-number');
logo.appendChild(scoreNumber);

//rules card
let modal  = document.querySelector('.active');
modal.addEventListener('click', showButton);
function showButton(){
    document.querySelector('.rules-container').style.display = 'block';
};

let close = document.querySelector('.close');
close.addEventListener('click', closeButton);
function closeButton(){
    document.querySelector('.rules-container').style.display = 'none';
}


//service worker
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/sw.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }
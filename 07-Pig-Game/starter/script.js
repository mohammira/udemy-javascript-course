'use strict';

const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");
const dicePic = document.querySelector(".dice");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const rollButton = document.querySelector(".btn--roll");
const newGameButton = document.querySelector(".btn--new");
const holdButton = document.querySelector(".btn--hold");
let currentPlayer = 0;
let firstPlayer = 0;
let currentScore = 0;
let scoreList = [0, 0];
let playing = true;

score0.textContent = 0;
score1.textContent = 0;
dicePic.classList.add("hidden");

rollButton.addEventListener('click', () => {
    if (playing) {
        const dice = Math.trunc(Math.random() * 6) + 1;
        console.log(dice);
        dicePic.src = `dice-${dice}.png`;
        dicePic.classList.remove("hidden");
    
        if (dice == 1) {
            switchPlayer();
        }
        else {
            currentScore += dice;
            document.getElementById(`current--${currentPlayer}`).textContent = currentScore;
        }
    }
    
})

newGameButton.addEventListener('click', () => {
    playing = true;
    if (scoreList[currentPlayer] >= 10) {
        document.querySelector(`.player--${currentPlayer}`).classList.remove("player--winner");
    }
    scoreList = [0,0];
    currentScore = 0;
    document.getElementById("current--0").textContent = 0;
    document.getElementById("current--1").textContent = 0;
    score0.textContent = 0;
    score1.textContent = 0;
    firstPlayer = firstPlayer == 0 ? 1 : 0;
    currentPlayer = firstPlayer;
    player0.classList.toggle("player--active");
    player1.classList.toggle("player--active");
    dicePic.classList.add("hidden");
})

holdButton.addEventListener('click', () => {
    if (playing){
        scoreList[currentPlayer] += currentScore;
        document.getElementById(`score--${currentPlayer}`).textContent = scoreList[currentPlayer];
    
        if (scoreList[currentPlayer] >= 10) {
            dicePic.classList.add("hidden");
            //document.querySelector(`.player--${currentPlayer}`).classList.remove("player--active");
            document.querySelector(`.player--${currentPlayer}`).classList.add("player--winner");
            playing = false;
        }
        else {
            switchPlayer();
        }
    }

})

function switchPlayer() {
    document.getElementById(`current--${currentPlayer}`).textContent = 0;
    currentPlayer = currentPlayer == 0 ? 1 : 0;
    currentScore = 0;
    player0.classList.toggle("player--active");
    player1.classList.toggle("player--active");
}
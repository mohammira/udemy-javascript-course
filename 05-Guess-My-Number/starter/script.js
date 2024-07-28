'use strict';

// console.log(`original message: ${document.querySelector('.message').textContent}`);
// document.querySelector('.message').textContent = 'Hello world!';

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 100;

let secret = Math.floor((Math.random() * 20) + 1);
let score = 20;
let highscore = Number(document.querySelector('.highscore').textContent);
console.log(secret);

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess && guess === 0) {
        document.querySelector('.message').textContent = "Take a guess!!!!";
    }
    else if (guess == secret-1 || guess == secret+1){
        document.querySelector('.message').textContent = "So close!!!!";
        document.querySelector('body').style.backgroundColor = '#e49b0f';
        score--;
    }
    else if (guess == secret){
        document.querySelector('.message').textContent = "Good job!!!!";   
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = secret;
        if (score > highscore) {
            document.querySelector('.highscore').textContent = score;
        }
    }
    else {
        document.querySelector('.message').textContent = guess > secret ? "Too high!!!!" : "Too low!!!!";
        document.querySelector('body').style.backgroundColor = '#D22B2B';
        score--;
    }

    if (score > 0) {
        document.querySelector('.score').textContent = score;
    }
    else {
        document.querySelector('.score').textContent = score;
        document.querySelector('.message').textContent = "Better luck next time...";  
        document.querySelector('body').style.backgroundColor = '#D22B2B';
    }
    // reset bg color when typing new guess
    document.querySelector('.guess').addEventListener('input', () => {
        document.querySelector('body').style.backgroundColor = '#222';
    })
})

// reset everything
document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    document.querySelector('.score').textContent = score;
    secret = Math.floor((Math.random() * 20) + 1);
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    console.log(secret);
})
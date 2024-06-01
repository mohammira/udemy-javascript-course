'use strict';

// console.log(`original message: ${document.querySelector('.message').textContent}`);
// document.querySelector('.message').textContent = 'Hello world!';

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 100;

let count = 0;
let secret = Math.floor((Math.random() * 20) + 1);
console.log(secret);

document.querySelector('.check').addEventListener('click', () => {
    let score = Number(document.querySelector('.score').textContent);
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        document.querySelector('.message').textContent = "Take a guess!!!!"
    }
    else if (guess == secret-1 || guess == secret+1){
        document.querySelector('.message').textContent = "So close!!!!"
        score--;
    }
    else if (guess > secret){
        document.querySelector('.message').textContent = "Too high!!!!"
        score--;
    }
    else if (guess < secret){
        document.querySelector('.message').textContent = "Too low!!!!"
        score--;
    }
    else {
        alert('🥳🥳🥳');
        document.querySelector('.message').textContent = "Gotcha!!!!"      
    }
    document.querySelector('.score').textContent = score;
})
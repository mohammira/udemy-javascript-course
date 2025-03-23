'use strict';

// CHALLENGE #1
const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    // This generates [0, 0, 0, 0]. More in the next section 😃
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        let answer = prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`);
        // if user clicks OK without any input, it will become '0' when casting answer to number
        // below check added to handle this case
        if (answer !== ''){
            answer = Number(answer);
        }
        if (typeof answer === 'number' && answer > -1 && answer < this.options.length) {
            this.answers[answer]++;
        }

        this.displayResults();
        this.displayResults('string');
    },
    displayResults(type = 'array') {
        if (type == 'array') {
            console.log(this.answers);
        }
        else if (type == 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }

    }
}
document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

// BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

// BONUS TEST DATA 1: [5, 2, 3]
poll.displayResults.call({answers: [5, 2, 3]});
poll.displayResults.call({answers: [5, 2, 3]}, 'string');

// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1]});
poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1]}, 'string');

// CHALLENGE #2
(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click', () => {
        header.style.color = 'blue';
    })
})();
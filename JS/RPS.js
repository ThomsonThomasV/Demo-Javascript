
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();
// if (!score) {
//     score = {
//         wins: 0,
//         losses: 0,
//         ties: 0
//     };
// }

function move(pmove) {
    const computerMove = computerMovep();

    let result = '';

    if (pmove === 'Scissors') {
        if (computerMove === 'Rock') {
            result = 'Lose';
        } else if (computerMove === 'Paper') {
            result = 'Win';
        } else if (computerMove === 'Scissors') {
            result = 'Tie';
        }
    }

    else if (pmove === 'Paper') {
        if (computerMove === 'Rock') {
            result = 'Win';
        } else if (computerMove === 'Paper') {
            result = 'Tie';
        } else if (computerMove === 'Scissors') {
            result = 'Lose';
        }
    }

    else if (pmove === 'Rock') {
        if (computerMove === 'Rock') {
            result = 'Tie';
        } else if (computerMove === 'Paper') {
            result = 'Lose';
        } else if (computerMove === 'Scissors') {
            result = 'Win';
        }
    }
    if (result === 'Win') {
        score.wins += 1;
    } else if (result === 'Lose') {
        score.losses += 1;
    } else if (result === 'Tie') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = `You ${result}. `;
    document.querySelector('.js-moves').innerHTML = `
    
    You <img class="icon" src="Images/${pmove}.webp">
<img class="icon" src="Images/${computerMove}.webp"> Computer
    `;


}


function updateScoreElement() {
    document.querySelector('.js-score').innerHTML =
        `wins: ${score.wins} losses: ${score.losses} ties: ${score.ties}`;

}


function computerMovep() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'Rock';
    }

    else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'Paper';
    }

    else if (randomNumber < 1) {
        computerMove = 'Scissors';
    }

    return computerMove;
}

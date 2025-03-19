// function greeting(){
//     console.log('Hello');
// }
// greeting();

// const num = 2;

// const function1 = function(){
//     console.log('Hello 2');
// }

// console.log(function1);

// console.log(typeof(function1));

// function1();

// const object1 = {
//     num: 2,
//     fun: function (){
//         console.log('Hello 3');
//     }
// };

// object1.fun();


// function display(param){
//     console.log(param);
// }
// display(2);

// function run(param){
//     param();
// }

// run(function(){
//     console.log('Hello 4');
// })


// setTimeout(function(){

//     console.log('Time Out')
//     console.log('Time Out 2')
// },3000);

// console.log('next line');

// setInterval(function(){

//     console.log ('Interval');
// },3000);

// console.log('next line 2')


let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  };

  updateScoreElement();

  /*
  if (!score) {
    score = {
      wins: 0,
      losses: 0,
      ties: 0
    };
  }
  */




let isAutoplaying = false;

let intervalId;     

function autoPlay(){

    if(!isAutoplaying){
        intervalId = setInterval(() => {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        },1000);

        isAutoplaying = true;

        document.querySelector('.js-autoPlay-button').innerHTML = 'Stop Playing';

    }else{
        clearInterval(intervalId);

        isAutoplaying = false;

        document.querySelector('.js-autoPlay-button').innerHTML = 'Auto Play';
    }
    
}

document.querySelector('.js-rock-button').addEventListener('click', () => {
  playGame('rock');
})

document.querySelector('.js-paper-button').addEventListener('click',() => {
  playGame('paper');
})

document.querySelector('.js-scissors-button').addEventListener('click', () => {
  playGame('scissors');
})

document.querySelector('.js-autoPlay-button').addEventListener('click', () => {
    autoPlay();
})


document.body.addEventListener('keydown',(event) =>{
  if(event.key === 'r'){
    playGame('rock');
  }else if(event.key === 'p'){
    playGame('paper');
  }else if(event.key === 's'){
    playGame('Scissors')
  }else if(event.key === 'a'){
    autoPlay();
  }else if(event.key === 'Backspace'){
    showconfirmation();
  }
})

  function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'scissors') {
      if (computerMove === 'rock') {
        result = 'You lose.';
      } else if (computerMove === 'paper') {
        result = 'You win.';
      } else if (computerMove === 'scissors') {
        result = 'Tie.';
      }

    } else if (playerMove === 'paper') {
      if (computerMove === 'rock') {
        result = 'You win.';
      } else if (computerMove === 'paper') {
        result = 'Tie.';
      } else if (computerMove === 'scissors') {
        result = 'You lose.';
      }
      
    } else if (playerMove === 'rock') {
      if (computerMove === 'rock') {
        result = 'Tie.';
      } else if (computerMove === 'paper') {
        result = 'You lose.';
      } else if (computerMove === 'scissors') {
        result = 'You win.';
      }
    }

    if (result === 'You win.') {
      score.wins += 1;
    } else if (result === 'You lose.') {
      score.losses += 1;
    } else if (result === 'Tie.') {
      score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `You <img src="Images/${playerMove}.webp" class="move-icon" > - <img src="Images/${computerMove}.webp" class="move-icon"> Computer`;
  }

  document.querySelector('.js-reset-button').addEventListener('click', () =>{
    showconfirmation();
  })

  function updateScoreElement() {
    document.querySelector('.js-score')
      .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  }

  function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = 'scissors';
    }

    return computerMove;
  }

  function showconfirmation(){
    document.querySelector('.js-reset-confirmation').innerHTML =`Are you sure you want to reset the score?
    
    <button class="js-reset-yes">Yes</button>

    <button class="js-reset-no">No</button>
    
    `
    document.querySelector('.js-reset-yes').addEventListener('click',() => {
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
        localStorage.removeItem('score');
        updateScoreElement();
        hideconfirmation();
    })

    document.querySelector('.js-reset-no').addEventListener('click',() => {
        autoPlay();
        hideconfirmation();
    })


  }

  function hideconfirmation(){
    document.querySelector('.js-reset-confirmation').innerHTML = ''
  }


// [
//     'make dinner',
//     'wash dishes',
//     'watch youtube'
// ].forEach((value, index) => {

//   if(value === 'wash dishes'){
//     return;
//   }

//     console.log(index)

//     console.log(value);
// });


// const arrowFunction = (param) =>{
//   console.log ('Hello')
//   return 5;
// };
// arrowFunction();

// const oneparam = param => {
//   console.log(param+1)
// };

// oneparam(2);


// const oneline = () => 2+3;

// console.log(oneline());

// const object2 = {
//   method: () => {

//   },

//   method(){

//   }
// }

// const buttonElement = document.querySelector('.js-button');

// const eventListener =() => {

//   console.log('click');
// };


// buttonElement.addEventListener('click', eventListener);

// buttonElement.removeEventListener('click', eventListener )


// buttonElement.addEventListener('click', () =>{
//   console.log('click2');
// });


// console.log([1, -3, 5].filter((value, index) => {
//   return value >=0;
// }));

// console.log([1, 1, 3].map(value => value * 2));
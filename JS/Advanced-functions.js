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


// let score = JSON.parse(localStorage.getItem('score')) || {
//     wins: 0,
//     losses: 0,
//     ties: 0
//   };

//   updateScoreElement();

  /*
  if (!score) {
    score = {
      wins: 0,
      losses: 0,
      ties: 0
    };
  }
  */




// let isAutoplaying = false;

// let intervalId;

// function autoPlay(){

//     if(!isAutoplaying){
//         intervalId = setInterval(function(){
//             const playerMove = pickComputerMove();
//             playGame(playerMove);
//         },1000);

//         isAutoplaying = true;

//     }else{
//         clearInterval(intervalId);

//         isAutoplaying = false;
//     }
    
// }



//   function playGame(playerMove) {
//     const computerMove = pickComputerMove();

//     let result = '';

//     if (playerMove === 'scissors') {
//       if (computerMove === 'rock') {
//         result = 'You lose.';
//       } else if (computerMove === 'paper') {
//         result = 'You win.';
//       } else if (computerMove === 'scissors') {
//         result = 'Tie.';
//       }

//     } else if (playerMove === 'paper') {
//       if (computerMove === 'rock') {
//         result = 'You win.';
//       } else if (computerMove === 'paper') {
//         result = 'Tie.';
//       } else if (computerMove === 'scissors') {
//         result = 'You lose.';
//       }
      
//     } else if (playerMove === 'rock') {
//       if (computerMove === 'rock') {
//         result = 'Tie.';
//       } else if (computerMove === 'paper') {
//         result = 'You lose.';
//       } else if (computerMove === 'scissors') {
//         result = 'You win.';
//       }
//     }

//     if (result === 'You win.') {
//       score.wins += 1;
//     } else if (result === 'You lose.') {
//       score.losses += 1;
//     } else if (result === 'Tie.') {
//       score.ties += 1;
//     }

//     localStorage.setItem('score', JSON.stringify(score));

//     updateScoreElement();

//     document.querySelector('.js-result').innerHTML = result;

//     document.querySelector('.js-moves').innerHTML = `You <img src="Images/${playerMove}.webp" class="move-icon" > - <img src="Images/${computerMove}.webp" class="move-icon"> Computer`;
//   }

//   function updateScoreElement() {
//     document.querySelector('.js-score')
//       .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
//   }

//   function pickComputerMove() {
//     const randomNumber = Math.random();

//     let computerMove = '';

//     if (randomNumber >= 0 && randomNumber < 1 / 3) {
//       computerMove = 'rock';
//     } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
//       computerMove = 'paper';
//     } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
//       computerMove = 'scissors';
//     }

//     return computerMove;
//   }


[
    'make dinner',
    'wash dishes',
    'watch youtube'
].forEach(function(value, index){

  if(value === 'wash dishes'){
    return;
  }

    console.log(index)

    console.log(value);
});


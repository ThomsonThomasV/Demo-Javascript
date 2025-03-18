// const add = function(){
//     console.log(2+3);
// };

// console.log(add);
// add();
// add();

// function runTwice(fun){
//     fun();
//     fun();
    
// }

// runTwice(function(){
//     console.log('12b');
// });

// runTwice(function(){
//     add();
// });

// function start() {
//     const button = document.querySelector('.js-button');
//     button.innerHTML = 'Loading...'

//     setTimeout(function() {
//       button.innerHTML = 'Finished!';
//     }, 1000);
//   }

//   let timerId;
  
// function addx(){
//     const adds = document.querySelector('.js-added');
//     adds.innerHTML = 'added';

//     clearTimeout(timerId);

//     timerId = setTimeout(function(){
//         adds.innerHTML = ''; 
//     },2000);

// }

let message = 0;

setInterval(function(){
    if(document.title === 'App' && message > 0){
        document.title = `(${message}) Son of a bitch`;
    }else{
        document.title = 'App';
    }
},1000);






  





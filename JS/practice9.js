// let words = ['hello', 'world', 'search', 'good'];
// let index = -1;

// for (let i = 0; i < words.length; i++) {
//   if (words[i] === 'search') {
//     index = i;
//   }
// }

// console.log(index);

// words = ['not', 'found'];
// index = -1;

// for (let i = 0; i < words.length; i++) {
//   if (words[i] === 'search') {
//     index = i;
//     break;
//   }
// }

// console.log(index); 

// let word = ['search', 'world', 'search', 'good'];


// for (let i = 0; i < word.length; i++) {
//   if (word[i] === 'search') {
//     index = i;
//     break;
//   }
// }

// console.log(index);


// function findIndex(array, word){
//     index = -1;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === word) {
//           index = i;
//           break;
//         }
//       }

//       console.log(index)
// }


// findIndex(['green', 'red', 'blue', 'red'], 'red')
// findIndex(['green', 'red', 'blue', 'red'], 'yellow')

// function removeEgg(foods){
//     const result = [];

//     for (i=0; i<foods.length;i++){
//         if(foods[i] === 'egg'){
//             continue;
//         }else{
//             result.push(foods[i]);
//         }
//     }

//     console.log(result);
// }

// function removeEgg(foods){
//     const result = [];

//     for (i=0; i<foods.length;i++){
//         if(foods[i] === 'egg' && i<=2){
//             continue;
//         }else{
//             result.push(foods[i]);
//         }
//     }

//     console.log(result);
// }

// function removeEgg(foods) {
//     const result = [];
//     let eggsRemoved = 0;

//     for (let i = 0; i < foods.length; i++) {
//       if (foods[i] === 'egg' && eggsRemoved < 2) {
//         eggsRemoved++;
//         continue;
//       }

//       result.push(foods[i]);
//     }

//     return result;
//   }

// function removeEgg(foods) {
//     const food = foods.slice();
//     const result = [];
//     let eggsRemoved = 0;

//     for (let i = 0; i < food.length; i++) {
//       if (food[i] === 'egg' && eggsRemoved < 2) {
//         eggsRemoved++;
//         continue;
//       }

//       result.push(foods[i]);
//     }

//     console.log(food);
//     console.log(result);
//     console.log(foods);
//   }


// removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']);

// for(let i = 1; i<=20; i++){

    
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log('fizzbuzz');
//         continue;
//     }else if (i % 3 === 0){
//         console.log('fizz');
//         continue;
//     }else if(i % 5 === 0){
//         console.log('buzz');
//         continue;
//     } 
//     console.log(i)
// }


function findIndex(array, word) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === word) {
        return i;
      }
    }

    return -1;
  }

  function unique(array) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
      const word = array[i];
      if (findIndex(result, word) === -1) {
        result.push(word);
      }
    }

    return result;
  }

  console.log(unique(['green', 'red', 'blue', 'red']));
  console.log(unique(['red', 'green', 'green', 'red']));
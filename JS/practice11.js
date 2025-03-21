// const multiply = (value, value2) => value*value2;
// console.log(multiply(2,3));
// console.log(multiply(7,10));

// function countPositive(nums){

//     let greater = 0;


//     nums.forEach((num) => {
//         if(num > 0){
//             greater++;
//         }
        
//     });

//     return greater;

// }

// console.log(countPositive([1,-3,5]));
// console.log(countPositive([-2, 3, -5, 7, 10]));



// function addNum(array, num){
//     let arr =[]

//     console.log(array.map((array) =>array +num))
// }

// addNum([1, 2, 3], 2);
// addNum([-2,-1,0,99],2)


// function removeEgg(foods){

//     console.log(foods.filter((foods) => foods != 'egg'));
// }

// removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']);

// function removeEgg(foods){

//     let removed = 0;

//     console.log(foods.filter((foods) => {
//         if( foods == 'egg' && removed <=2){
//             removed++;
//         }else{
//             return foods;
//         }
//     }))
// }

// removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']);

document.querySelector('.js-start-button').addEventListener('click', () => {
    updateButton();
})

let timeoutId;
function updateButton() {
    const button = document.querySelector('.js-button');

    clearTimeout(timeoutId)
    // The function below was changed
    // to an arrow function.
    // https://youtu.be/shWr5DNVeCI
    timeoutId = setTimeout(() => {
        button.innerHTML = 'Finished!';
    }, 3000);
}

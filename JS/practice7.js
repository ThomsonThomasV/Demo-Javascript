// const nums = [10,20,30];
// nums.splice(2,30,99)
// console.log(nums)



// function getLastValue(array) {
//     const lastIndex = array.length - 1;
//     return array[lastIndex];
// }
// console.log(getLastValue([1, 20, 22, 24, 5]));
// console.log(getLastValue(['hi', 'hello', 'hey']));

// function arraySwap(array){
//     const last=array.length-1;
//     const lasv = array[last];
//     const first = array[0];

//     array[0] = lasv;
//     array[last]=first;

//     return array;
// }

// console.log(arraySwap([1, 20, 22, 24, 5]));
// console.log(arraySwap(['hi', 'hello', 'hey']));

// let i = 0;
// for(i = 0; i <= 10; i+=2){
//     console.log(i);
// }

// let i = 5;
// for(i = 5; i >= 0; i--){
//     console.log(i);
// }

// let i=5;

// while(i<=10){
//     console.log(i);
//     i+=2;
// }

// while(i>=0){
//     console.log(i);
//     i--;
// }



// function addOn(array,num){
//     let array2 =[];

//     for(let i = 0; i<array.length;i++){
//         let value=array[i];
//         value = value+num;
//         array2.push(value);
//     }
    
//     console.log(array2);
// }

// addOn([1,2,3],3);
// addOn([-2,0,99],2);

// function addOn(array,num){
//     let array2 =[];

//     for(let i = 0; i<array.length;i++){
//         let value=array[i];
//         value = value+num;
//         array2.push(value);
//     }
    
//     console.log(array2);
// }

// addOn([1,2,3],3);
// addOn([-2,0,99],2);

// function addOn(array1,array2){
//     let array3 =[];

//     for(let i = 0; i<array1.length;i++){
//         let value = array1[i] + array2[i];
//         array3.push(value);
//     }
//     console.log(array3);
// }

// addOn([1,2,3],[4,5,6]);
// addOn([-2,0,99],2);


// const array1 = [1,2,3];
// const array2 = [1,2,3];
// // const array3 = array1+array2;

// console.log(array1[0]+array2[0])

function addOn(nums){
    let count = 0;

    for(let i = 0; i<nums.length;i++){

        if(nums[i]<0){
            count++;
        }
        
    }
    
    console.log(count);
}

addOn([1,2,3]);
addOn([-2,0,99]);
// const a = [1,2,3];
// console.log(a);
// console.log(a[1]);
// a[0] = 0;
// console.log(a); 


// // [1,'hello', true, {name: 'socks'}, [1,2]]

// console.log(Array.isArray(a));
// console.log(a.length);
// console.log(a.push(5));
// console.log(a);
// console.log(a.splice(0,1));
// console.log(a);


const todoList = ['sl','sl'];

rentertodolist();

function rentertodolist(){
    
let todoListHTML='';

for(let i=0;i<todoList.length;i++){
    const todo =todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHTML+=html;
}

console.log(todoListHTML);

document.querySelector('.js-todo-list').innerHTML = todoListHTML;



}

function addTodo(){
    const inputElement = document.querySelector('.js-name-input')
    const name = inputElement.value;


    todoList.push(name);
    console.log(todoList);

    inputElement.value ='';

    rentertodolist();
}
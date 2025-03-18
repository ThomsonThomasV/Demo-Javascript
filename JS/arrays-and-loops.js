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


const todoList = JSON.parse(localStorage.getItem('todoList')) || [
    {
        name:'make dinner',
        dueDate:'2002-12-22'
    },
     {
        name:'clean dishes',
        dueDate:'2002-12-22'
    }];

rendertodolist();

function rendertodolist(){
    
let todoListHTML='';

todoList.forEach(function(todoObject,Index){
    
    for(let i=0;i<todoList.length;i++){
    const todoObject =todoList[i];
    const {name, dueDate} = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
        todoList.splice(${i},1);
        rendertodolist();
        saveToStorage();
    " class="Delete-button"> Delete </button>`;
    todoListHTML+=html;

}});


document.querySelector('.js-todo-list').innerHTML = todoListHTML;


}

function addTodo(){
    const inputElement = document.querySelector('.js-name-input')
    const name = inputElement.value;

    const dateinputElement = document.querySelector('.js-dueDate');

    const dueDate = dateinputElement.value;


    todoList.push({
        name, dueDate
    });

    inputElement.value ='';

    rendertodolist();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('todoList',JSON.stringify(todoList))
}
// const a = document.querySelector('.js-button');
// console.log(a.classList.contains('js-button'));

function toggle(selector){
let button = document.querySelector(selector);

if(!button.classList.contains('is-Toggled') ){
    prevoff();
    button.classList.add('is-Toggled');
}else {
    button.classList.remove('is-Toggled');
}
}

function prevoff(){
    const prev = document.querySelector('.is-Toggled');
    if(prev){
        prev.classList.remove('is-Toggled');
    }
}
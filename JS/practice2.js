
let calculation = localStorage.getItem('calculation') || '';



// calculation = '';

function updateCalculation(value) {
  calculation += value;
  document.querySelector('.livecalc').innerHTML = calculation;
  localStorage.setItem('calculation', calculation);
}



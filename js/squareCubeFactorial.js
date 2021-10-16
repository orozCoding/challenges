const input = document.querySelector('.numberInput');
const para = document.querySelector('p');

// Acá pego lo del tutorial

function squared(num) {
  return num * num;
}

function cubed(num) {
  return num * num * num;
}

function factorial(num) {
  if (num < 0) return undefined;
  if (num == 0) return 1;
  let x = num - 1;
  while (x > 1) {
    num *= x;
    x--;
  }
  return num;
}

// hasta acá pegué

// segundo paste

input.onchange = function () {
  const num = parseFloat(input.value);
  if (isNaN(num)) {
    para.textContent = 'You need to enter a number!';
  } else {
    para.textContent = num + ' squared is ' + squared(num) + '. ' +
      num + ' cubed is ' + cubed(num) + '. ' +
      num + ' factorial is ' + factorial(num) + '.';
  }
}

// fiinal segundo paste
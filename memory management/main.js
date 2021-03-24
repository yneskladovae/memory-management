'use strict'

function stackOverflow(num) {
    console.log(num);
    stackOverflow(++num);
}

function memoryLeak() {
  const array = [];
  return function () {
    array.push(new Array(999999999));
    console.log(array);
  }
}

document.querySelector('.stackOverflow').addEventListener('click', () => {
    stackOverflow(0);
});

document.querySelector('.memoryLeak').addEventListener('click', () => {
  const func = memoryLeak();
  setInterval(func, 1000);
});

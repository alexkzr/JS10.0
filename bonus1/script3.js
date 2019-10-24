'use strict';
let num = [];
let single = '';
let result = 0;

let count = function (arg) {
  let sum = 0;
  for (let i = 0; i < arg.length; i++) {
    sum += parseInt(arg[i]);
  }
  return sum;
};

let runCode = function () {
  single = prompt('Введите цифру', 8);
  if (single == null) {
    return count(num);
  } else if (isNaN(single) || single === '' && single != null) {
    runCode();
  } else {
    num.push(single);
    single = '';
    runCode();
  }
};
runCode();
console.log('Сумма чисел массива: ', runCode());

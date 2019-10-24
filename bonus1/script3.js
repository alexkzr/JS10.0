'use strict';
let single = '';
let sum = 0;


let runCode = function () {
  single = prompt('Введите цифру', 8);
  if (single == null) {
    sum += +single;
    console.log('Сумма чисел массива: : ', sum);
    return sum;
  } else if (isNaN(single) || single === '' && single != null) {
    runCode();
  } else {
    sum += +single;
    console.log('sum= ', sum);
    single = '';
    runCode();
  }
};
runCode();
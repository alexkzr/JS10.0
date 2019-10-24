let number1, number2;
let result = '';



do {
  number1 = prompt('Введите первое число', 10);
  console.log('number1: ', number1);
} while (isNaN(number1) || number1 === '' || number1 === null);
do {
  number2 = prompt('Введите второе число', 100);
  console.log('number2: ', number2);
} while (isNaN(number2) || number2 === '' || number2 === null);

let calc = function (a, b) {
  if (a > b) {
    result = 'Первое число больше второго';
  } else if (a < b) {
    result = 'Второе число больше первого';
  } else if (a === b) {
    result = 'Числа равны';
  }
  return result;
};
console.log('calc(number1, number2): ', calc(+number1, +number2));
/************************************
 *                                  *
 *  КОНЕЦ КОДА ПЕРВОГО ЗАДАНИЯ      *
 *                                  *
 ***********************************/


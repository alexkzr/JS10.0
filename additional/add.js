'use strict';
//Задание №1
let arr = ['25', '38', '49', '77', '284', '356', '4234'];

let findElement = function (array) {
  let result = '';
  for (let i = 0; i < array.length; i++) {
    if (array[i].charAt(0) === '2' || array[i].charAt(0) === '4') {
      result += array[i] + ', ';
    }
  }
  return result;
};
console.log('Элементы начинающиеся с 2 или 4:', findElement(arr));
//Конец задания №1

//Задание №2

function isPrime(num) {
  if (num < 2) return false;
  for (var i = 2; i < num; i++) {
    if (num % i == 0)
      return false;
  }
  return true;
}
for (var i = 0; i < 100; i++) {
  if (isPrime(i)) console.log('Простое число: ' + i + ' Делители этого числа: 1 и ' + i);
}
'use strict';
//Задание №1
let arr = ['25', '38', '49', '77', '284', '356', '4234'];

let findElement = function(array){
  let result = '';
  for (let i = 0; i < array.length; i++) {
    if (array[i].charAt(0) === '2' || array[i].charAt(0) === '4') {
      result += array[i] + ', ';
    }     
  }
  return result;
};
console.log('Элементы начинающиеся с 2 или 4:' , findElement(arr));
//Конец задания №1

//Задание №2
let array2 = [];
for (let i = 1; i < 101; i++) {
  array2.push(i);
}

let result = [];
for (let i = 0; i < array2.length; i++) {
  console.log(isPrime(array2[i]));
  result.push(array2.find(isPrime()));
  array2.splice(array2.find(isPrime()), 0);
}
console.log('array2: ', array2);
console.log('result: ', result);
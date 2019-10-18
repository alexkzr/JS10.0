let num = '266219';
let num2 = 266219;
// console.log(String(num).slice(0, 2));

let sum = 1;
for (let i = 0; i < num.length; i++) {
  sum = sum * Number(num[i]);
}
let power = sum ** 3;
let twoDigits = 'Первые две цифры = ' + String(power).slice(0, 2);
document.querySelector('.result').innerHTML += twoDigits;
console.log('power: ', power);
console.log('sum: ', sum);
console.log('twoDigits: ', twoDigits);

// let sum;
// let result1 = 1;
// for (let i = 0; i < num.length; i++) {
//   let number2 = Number(num[i]);
//   result1 = number2;
// for (let i = 0; i < num.length; i++) {
//   let number = Number(num[i]);
//   console.log('number: ', number);
//   result1 = result1 * number;
//   console.log('result1: ', result1);
  
// }
// }
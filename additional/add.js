let num = '266219';
let result = num[0] * num[1] * num[2] * num[3] * num[4] * num[5];
let power = result ** 3;
let twoDigits = 'Первые две цифры = ' + String(num).slice(0, 2);
console.log(String(num).slice(0, 2));
document.querySelector('.result').innerHTML += twoDigits;
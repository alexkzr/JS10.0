'use strict';
let number = Math.floor(Math.random() * Math.floor(101));
console.log('number: ', number);


let answer = prompt('Я загадал число от 1 до 100, попробуй угадать!');
let findIt = function () {
  if (answer == null) {
    return alert('Пока!');
  } else if (isNaN(answer) || answer === '' && answer != null) {
    answer = prompt('Пожалуйста введи число!');
  } else {
    if (parseInt(answer) < number) {
      answer = prompt('Больше!');
      findIt();
    }
    else if (parseInt(answer) > number) {
      answer = prompt('Меньше!');
      findIt();
    }
    else if (parseInt(answer) === number) {
      return alert('Поздравляю, вы угадали!!!');
    }
  }
};
findIt();
/*
if (isNaN(answer) || answer === '' && answer != null) {
  answer = +prompt('Пожалуйста введи число!');
} else {
  if (answer < number) {
    +prompt('Больше!');
  }
  else if (answer > number) {
    +prompt('Меньше!');
  }
  else if (answer === number) {
    alert('Поздравляю, вы угадали!!!');
  }
}*/
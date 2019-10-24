'use strict';
let number;

let answer;
let launch = function() {
  number  = Math.floor(Math.random() * Math.floor(101));
  console.log('number: ', number);
answer = prompt('Я загадал число от 1 до 100, попробуй угадать!');
};
 
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
      alert('Поздравляю, вы угадали!!!');
      let ask = confirm('Хотите сыграть еще?');
      if (ask === true) {
        launch();
        findIt();
      } else {
        return alert('Пока!');
      }
    }
  }
};
launch();
findIt();

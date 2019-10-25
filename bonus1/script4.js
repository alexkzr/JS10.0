'use strict';
let number;

let answer;
let launch = function() {
  number  = Math.floor(Math.random() * Math.floor(101));
  console.log('number: ', number);
answer = prompt('Я загадал число от 1 до 100, попробуй угадать!');
};
 
let findIt = function () {
  do {answer = prompt('Пожалуйста введи число!');}
  while (isNaN(answer) || answer === '' && answer != null);
  
  if (answer == null) {
    return alert('Пока!');
  }  else {
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

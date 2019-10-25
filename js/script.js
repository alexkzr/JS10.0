'use strict';
let money;

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');

let deposit = confirm('Есть ли у вас депозит в банке?');
let income = 'freelance';
let showTypeOf = function (data) {
  console.log(typeof data);
}
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let start = function() {
  do {
    money = prompt('Ваш месячный доход?');
} while(isNaN(money) || money === '' || money === null);
};
start();
let question1;
let question2;


let getExpensesMonth = function() {
  let result = 0;
  let sum = 0;

  for (let i = 0; i < 2; i++) {

    if (i === 0) {
      question1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'аренда');
    } else if (i === 1) {
      question2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'транспорт');

    }
   do {result = prompt('Во сколько это обойдется?');}
    while (isNaN(result) || result === '' || result == null);
    sum += +result;
  }
  
  return sum;
};
let exppensesAmount = getExpensesMonth();
let getAccumulatedMonth = function (a, b) {
  let result = a - b;
  return result;

};
let accumulatedMonth = getAccumulatedMonth(money, exppensesAmount);


let budgetMonth = money - exppensesAmount;
const mission = 500000;
let missionAccomplished = Math.ceil(mission / budgetMonth);

let getTargetMonth = function (a, b) {
  let result = Math.ceil(a / b);
  if (result <= 0) {
    return 'Цель не будет достигнута';
  } else {
    return 'Цель будет достигнута через ' + result + ' месяцев';

  }
};

console.log('accumulatedMonth: ', accumulatedMonth);
console.log('getTargetMonth: ', getTargetMonth(mission, accumulatedMonth));

let budgetDay = Math.floor(budgetMonth / 30);

let getStatusIncome = function () {
  if (budgetDay > 800) {
    return ('Высокий уровень дохода');
  } else if (budgetDay >= 300 && budgetDay <= 800) {
    return ('Средний уровень дохода');
  } else if (budgetDay >= 0 && budgetDay <= 300) {
    return ('Низкий уровень дохода');
  } else if (budgetDay < 0){
    return ('Что-то пошло не так');
  }
};
console.log(getStatusIncome());
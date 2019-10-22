'use strict';
let money = +prompt('Ваш месячный доход?');

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');

let deposit = confirm('Есть ли у вас депозит в банке?');
let income = 'freelance';
let showTypeOf = function (data) {
  console.log(typeof data);
}
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let question1 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let question3 = +prompt('Во сколько это обойдется?');
let question2 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let question4 = +prompt('Во сколько это обойдется?');


let getExpensesMonth = function (a, b) {
  let result = a + b;
  return result;
};

let getAccumulatedMonth = function (a, b) {
  let result = a - b;
  return result;

};
let accumulatedMonth = getAccumulatedMonth(money, getExpensesMonth(question3, question4));


let budgetMonth = money - question3 - question4;
const mission = 500000;
let missionAccomplished = Math.ceil(mission / budgetMonth);

let getTargetMonth = function (a, b) {
  let result = Math.ceil(a / b);
  return result;
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
  } else {
    return ('Что-то пошло не так');
  }
};
console.log(getStatusIncome());

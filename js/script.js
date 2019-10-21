'use strict';
let money = prompt('Ваш месячный доход?');

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log(addExpenses.split(','));

let deposit = confirm('Есть ли у вас депозит в банке?');
let income = 'freelance';
console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

let question1 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let question3 = prompt('Во сколько это обойдется?');
let question2 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let question4 = prompt('Во сколько это обойдется?');


let budgetMonth = money - question3 - question4;
console.log('budgetMonth: ', budgetMonth);
const mission = 500000;
let missionAccomplished = Math.ceil(mission / budgetMonth);
console.log('missionAccomplished: ', missionAccomplished);

let budgetDay = Math.floor(budgetMonth / 30);
console.log('budgetDay: ', budgetDay);

if (budgetDay > 800) {
  console.log('Высокий уровень дохода');
} else if (budgetDay >= 300 && budgetDay <= 800) {
  console.log('Средний уровень дохода');
} else if (budgetDay >= 0 && budgetDay <= 300) {
  console.log('Низкий уровень дохода');
} else {
  console.log('Что-то пошло не так');
}


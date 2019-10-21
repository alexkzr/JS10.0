let money = prompt('Ваш месячный доход?');

let income = 'freelance';

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log(addExpenses.split(','));

let deposit = confirm('Есть ли у вас депозит в банке?');

let question1 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let question3 = prompt('Во сколько это обойдется?');
let question2 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let question4 = prompt('Во сколько это обойдется?');


const mission = 500000;
let budgetMonth = money - question3 - question4;
console.log('budgetMonth: ', budgetMonth);
let missionAccomplished = Math.ceil(mission / budgetMonth);
console.log('missionAccomplished: ', missionAccomplished);

const period = 2;

let budgetDay = Math.floor(budgetMonth / 30);

if (budgetDay > 800) {
  console.log('Высокий уровень дохода');
} else if (budgetDay >= 300 && budgetDay <= 800) {
  console.log('Средний уровень дохода');
} else if (budgetDay >= 0 && budgetDay <= 300) {
  console.log('Низкий уровень дохода');
} else {
  console.log('Что-то пошло не так');
}

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(income.length);
console.log('Период ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей.');
console.log(addExpenses.toLowerCase());


console.log(addExpenses);
console.log(addExpenses.split(','));
console.log(budgetDay / 30);
console.log(budgetDay % 30);
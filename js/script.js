'use strict';
let money,
  question1,
  question2,
  income = 'freelance',
  start = function () {
    do {
      money = prompt('Ваш месячный доход?', 50000);
    } while (isNaN(money) || money === '' || money === null);
  };
start();


let appData = {
  income: {},
  addIncome: {},
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 500000,
  period: 3,
  budget: money,
  expensesMonth: 0,
  budgetMonth: 0,
  budgetDay: 0,
  getExpensesMonth: function () {
    let key, value, result = 0;
    for (let i = 0; i < 2; i++) {
      key = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'аренда');

      do { value = prompt('Во сколько это обойдется?', 1000); }
      while (isNaN(value) || value === '' || value == null);

    }
    appData.expenses[key] = value;
    for (let key in appData.expenses) {
      result += +appData.expenses[key];
    }
    appData.expensesMonth = result;
    console.log(appData.expensesMonth);
    return result;
  },

  getBudget: function () {
    appData.budgetMonth = appData.budget - appData.getExpensesMonth();
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  },
  getTargetMonth: function (a, b) {
    let result = Math.ceil(a / b);
    if (result <= 0) {
      return 'Цель не будет достигнута';
    } else {
      return 'Цель будет достигнута через ' + result + ' месяцев';

    }
  },
  getStatusIncome: function () {
    if (appData.budgetDay > 800) {
      return ('Высокий уровень дохода');
    } else if (appData.budgetDay >= 300 && appData.budgetDay <= 800) {
      return ('Средний уровень дохода');
    } else if (appData.budgetDay >= 0 && appData.budgetDay <= 300) {
      return ('Низкий уровень дохода');
    } else if (appData.budgetDay < 0) {
      return ('Что-то пошло не так');
    }
  },
  asking: function () {
    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
    appData.addExpenses = addExpenses.toLocaleLowerCase().split(',');
    appData.deposit = confirm('Есть ли у вас депозит в банке?');

  }

};
appData.getBudget();

let missionAccomplished = Math.ceil(appData.mission / appData.budgetMonth);
let accumulatedMonth = appData.budget - appData.expensesMonth;
console.log('accumulatedMonth: ', accumulatedMonth);
console.log('appData.money: ', appData.budget);
console.log('Расходы за месяц: ', appData.expensesMonth);
console.log('getTargetMonth: ', appData.getTargetMonth(appData.mission, accumulatedMonth));



console.log(appData.getStatusIncome());
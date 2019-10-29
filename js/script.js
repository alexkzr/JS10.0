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
  percentageDeposit: 0,
  moneyDeposit: 0,
  mission: 500000,
  period: 3,
  budget: money,
  expensesMonth: 0,
  budgetMonth: 0,
  budgetDay: 0,
  getExpensesMonth: function () {
    let key, value, result = 0;
    for (let i = 0; i < 2; i++) {
      do { key = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'аренда'); }
      while (typeof key !== 'string' || key == null);
      do { value = prompt('Во сколько это обойдется?', 1000); }
      while (isNaN(value) || value === '' || value == null);

      appData.expenses[key] = value;
    }
    console.log('appData.expenses:', appData.expenses);
    for (let key in appData.expenses) {
      result += +appData.expenses[key];
    }
    appData.expensesMonth = result;
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

    let cashIncome = 0;
    if (confirm('Есть ли у вас дополнительный источник дохода?')) {
      let itemIncome = prompt('Какой у вас одполнительный источник дохода?', 'Фриланс');
      do { cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000); }
      while (isNaN(cashIncome) || cashIncome === '' || cashIncome === null);
      appData.income[itemIncome] = cashIncome;
    }

    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
    appData.addExpenses = addExpenses.toLocaleLowerCase().split(',');
    appData.deposit = confirm('Есть ли у вас депозит в банке?');

  },
  getInfoDeposit: function () {
    if (appData.deposit) {
      appData.percentageDeposit = prompt('Какой годовой процент?', '10');
      do { appData.moneyDeposit = prompt('Какая сумма заложена?', 10000); }
      while (isNaN(appData.moneyDeposit) || appData.moneyDeposit === '' || appData.moneyDeposit === null);
    }
  },
  calcSavedMoney: function () {
    return appData.budgetMonth * appData.period;
  }

};
appData.asking();
appData.getBudget();
appData.calcSavedMoney();
appData.getInfoDeposit();
console.log('Наша программа включает в себя следующие данные: \n');
// for (let key in appData) {
//   console.log(key + ' : \t' + appData[key] + '\n');
// }
let missionAccomplished = Math.ceil(appData.mission / appData.budgetMonth);
let accumulatedMonth = appData.budget - appData.expensesMonth;
console.log('getTargetMonth: ', appData.getTargetMonth(appData.mission, accumulatedMonth));


console.log(appData.percentageDeposit, appData.moneyDeposit, appData.calcSavedMoney());
console.log(appData.getStatusIncome());
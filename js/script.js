document.addEventListener('DOMContentLoaded', function () {
  'use strict';
  const submitButton = document.getElementById('start');
  const plus1 = document.getElementsByTagName('button')[0];
  const expensesPlus = document.getElementsByTagName('button')[1];
  const checkbox = document.querySelector('#deposit-check');
  let addIncome = document.querySelectorAll('.additional_income-item'),
    budgetMonthValue = document.querySelector('.budget_month-value'),
    budgetDayValue = document.querySelector('.budget_day-value'),
    expensesMonthValue = document.querySelector('.expenses_month-value'),
    addIncomeValue = document.querySelector('.additional_income-value'),
    addExpensesValue = document.querySelector('.additional_expenses-value'),
    incomePeriodValue = document.querySelector('.income_period-value'),
    targetMonthValue = document.querySelector('.target_month-value'),
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    incomeAmount = document.querySelector('.income-amount'),
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesAmount = document.querySelector('.expenses-amount'),
    additionalExpItem = document.querySelector('.additional_expenses-item'),
    additionalExpValue = document.querySelector('.additional_expenses-value'),
    targetAmount = document.querySelector('.target-amount'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    periodSelect = document.querySelector('.period-select'),
    incomeItems = document.querySelectorAll('.income-items'),
    question1,
    question2;



  let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentageDeposit: 0,
    incomeMonth: 0,
    moneyDeposit: 0,
    budget: 0,
    expensesMonth: 0,
    budgetMonth: 0,
    budgetDay: 0,
    start: function () {
      // do {
      //   money = prompt('Ваш месячный доход?', 50000);
      // } while (isNaN(money) || money === '' || money === null);

      if (salaryAmount.value === '' || typeof salaryAmount === 'string') {
        alert('Oшибка, поле должно быть заполнено!');
      }

      appData.budget = salaryAmount.value;
      console.log('salaryAmount.value: ', salaryAmount.value);
      appData.getExpenses();
      appData.getAddExpenses();
      appData.getAddIncome();
      // appData.asking();
      appData.getIncome();
      appData.getBudget();
      // appData.calcPeriod();
      appData.showResult();
    },
    showResult: function () {
      budgetDayValue.value = appData.budgetDay;
      budgetMonthValue.value = appData.budgetMonth;
      expensesMonthValue.value = appData.expensesMonth;
      additionalExpValue.value = appData.addExpenses.join(', ');
      addIncomeValue.value = appData.addIncome.join(', ');
      targetMonthValue.value = appData.getTargetMonth();
      incomePeriodValue.value = appData.calcPeriod();
    },
    addExpensesBlock: function () {

      let cloneExpensesItem = expensesItems[0].cloneNode(true);
      expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
      expensesItems = document.querySelectorAll('.expenses-items');
      if (expensesItems.length === 3) {
        expensesPlus.style.display = 'none';
      }
    },
    getExpenses: function () {
      expensesItems.forEach(function (item) {
        let itemExpenses = item.querySelector('.expenses-title').value;
        let cashExpenses = item.querySelector('.expenses-amount').value;
        if (itemExpenses !== '' && cashExpenses !== '') {
          appData.expenses[itemExpenses] = cashExpenses;
        }
      });
      console.log(appData.expenses);
    },
    getIncome: function () {
      incomeItems.forEach(function (item) {
        let itemIncome = item.querySelector('.income-title').value;
        let cashIncome = item.querySelector('.income-amount').value;
        if (itemIncome !== '' && cashIncome !== '') {
          appData.income[itemIncome] = cashIncome;
        }
        for (let key in appData.income) {
          appData.incomeMonth += +appData.income[key];
        }
      });
    },
    getExpensesMonth: function () {
      let result = 0;
      for (let key in appData.expenses) {
        result += +appData.expenses[key];
        console.log('appData.expenses[key]: ', appData.expenses[key]);
      }
      appData.expensesMonth = result;
      return result;
    },

    getBudget: function () {
      appData.budgetMonth = appData.budget + appData.incomeMonth - appData.getExpensesMonth();
      console.log('appData.incomeMonth: ', appData.incomeMonth);
      console.log('appData.getExpensesMonth(): ', appData.getExpensesMonth());
      appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },
    getTargetMonth: function () {
      let result = Math.ceil(targetAmount.value / appData.budgetMonth);
      console.log('targetAmount.value: ', targetAmount.value);
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
    getAddExpenses: function () {
      let addExpenses = additionalExpItem.value.split(',');

      addExpenses.forEach(function (item) {
        item = item.trim();
        if (item !== '') {
          appData.addExpenses.push(item);
        }
      });

    },
    getAddIncome: function () {
      additionalIncomeItem.forEach(function (item) {
        let itemValue = item.value.trim();
        if (itemValue !== '') {
          appData.addIncome.push(itemValue);
        }

      });
    },
    getInfoDeposit: function () {
      if (appData.deposit) {
        appData.percentageDeposit = prompt('Какой годовой процент?', '10');
        do { appData.moneyDeposit = prompt('Какая сумма заложена?', 10000); }
        while (isNaN(appData.moneyDeposit) || appData.moneyDeposit === '' || appData.moneyDeposit === null);
      }
    },
    calcPeriod: function () {
      return appData.budgetMonth * periodSelect.value;
    }

  };
  submitButton.addEventListener('click', e => {
    e.preventDefault();
    appData.start();
    console.log(appData);
  });
  expensesPlus.addEventListener('click', appData.addExpensesBlock);

  appData.getInfoDeposit();
  console.log('Наша программа включает в себя следующие данные: \n');
  // for (let key in appData) {
  //   console.log(key + ' : \t' + appData[key] + '\n');
  // }




  console.log(appData.getStatusIncome());
});
document.addEventListener('DOMContentLoaded', function () {
  'use strict';
  const submitButton = document.getElementById('start');
  const incomePlus = document.getElementsByTagName('button')[0];
  const expensesPlus = document.getElementsByTagName('button')[1];
  const depositCheck = document.querySelector('#deposit-check');
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
    periodAmount = document.querySelector('.period-amount'),
    incomeItems = document.querySelectorAll('.income-items'),
    cancel = document.getElementById('cancel'),
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
      this.budget = +salaryAmount.value;
      this.getExpenses();
      this.getIncome();
      this.getBudget();
      this.getExpensesMonth();
      this.getAddExpenses();
      this.getAddIncome();
      this.calcPeriod();
      this.getStatusIncome();

      this.showResult();
    },
    showResult: function () {
      budgetDayValue.value = this.budgetDay;
      budgetMonthValue.value = this.budgetMonth;
      expensesMonthValue.value = this.expensesMonth;
      additionalExpValue.value = this.addExpenses.join(', ');
      addIncomeValue.value = this.addIncome.join(', ');
      targetMonthValue.value = this.getTargetMonth();
    },
    addExpensesBlock: function () {

      let cloneExpensesItem = expensesItems[0].cloneNode(true);
      expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
      for (let i = 0; i < cloneExpensesItem.childNodes.length; i++) {
        cloneExpensesItem.childNodes[i].value = '';
      }
      expensesItems = document.querySelectorAll('.expenses-items');
      if (expensesItems.length === 3) {
        expensesPlus.style.display = 'none';
      }
      placeholders();
    },
    addIncomeBlock: function () {

      let cloneIncomeItem = incomeItems[0].cloneNode(true);
      incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
      incomeItems = document.querySelectorAll('.income-items');
      for (let i = 0; i < cloneIncomeItem.childNodes.length; i++) {
        cloneIncomeItem.childNodes[i].value = '';
      }
      if (incomeItems.length === 3) {
        incomePlus.style.display = 'none';
      }
      placeholders();
    },
    getExpenses: function () {
      expensesItems.forEach(function (item) {
        let itemExpenses = item.querySelector('.expenses-title').value;
        let cashExpenses = item.querySelector('.expenses-amount').value;
        if (itemExpenses !== '' && cashExpenses !== '') {
          appData.expenses[itemExpenses] = cashExpenses;
        }
      });
    },
    getIncome: function () {
      incomeItems.forEach(function (item) {
        let itemIncome = item.querySelector('.income-title').value;
        let cashIncome = item.querySelector('.income-amount').value;
        if (itemIncome !== '' && cashIncome !== '') {
          appData.income[itemIncome] = cashIncome;
        }
        appData.incomeMonth = 0;
        for (let key in appData.income) {
          appData.incomeMonth += +appData.income[key];
        }
      });
    },
    getExpensesMonth: function () {
      let result = 0;
      for (let key in this.expenses) {
        result += +this.expenses[key];
      }
      this.expensesMonth = result;
      return result;
    },

    getBudget: function () {
      this.budgetMonth = this.budget + this.incomeMonth - this.getExpensesMonth();
      console.log('this.getExpensesMonth(): ', this.getExpensesMonth());
      console.log('this.incomeMonth: ', this.incomeMonth);
      console.log('this.budget: ', this.budget);
      console.log(' this.budgetMonth: ', this.budgetMonth);
      this.budgetDay = Math.ceil(Math.floor(this.budgetMonth / 30));
    },
    getTargetMonth: function () {
      let result = Math.ceil(targetAmount.value / this.budgetMonth);
      if (result <= 0) {
        return 'Цель не будет достигнута';
      } else {
        return 'Цель будет достигнута через ' + result + ' месяцев';

      }
    },
    getStatusIncome: function () {
      if (this.budgetDay > 800) {
        return ('Высокий уровень дохода');
      } else if (this.budgetDay >= 300 && this.budgetDay <= 800) {
        return ('Средний уровень дохода');
      } else if (this.budgetDay >= 0 && this.budgetDay <= 300) {
        return ('Низкий уровень дохода');
      } else if (this.budgetDay < 0) {
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
      if (depositCheck.checked) {
        this.percentageDeposit = prompt('Какой годовой процент?', '10');
        do { this.moneyDeposit = prompt('Какая сумма заложена?', 10000); }
        while (isNaN(this.moneyDeposit) || this.moneyDeposit === '' || this.moneyDeposit === null);
      }
    },
    calcPeriod: function () {
      periodAmount.textContent = periodSelect.value;
      incomePeriodValue.value = appData.budgetMonth * periodSelect.value;
      console.log('periodSelect.value: ', periodSelect.value);
      console.log('appData.budgetMonth: ', appData.budgetMonth);
    },
    changePeriod: function () {
      periodAmount.textContent = periodSelect.value;
    },
    reset: function (e) {
      let inputs = document.querySelectorAll('input[type=text');
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].removeAttribute("disabled", "disabled");
        inputs[i].value = '';
      }
      cancel.style.display = 'none';
      submitButton.style.display = 'block';
      addIncomeValue.value = '';
      appData.addIncome = [];
      appData.income = {};
      appData.incomeMonth = 0;
    },
    check: function () {
      if (salaryAmount.value != null || salaryAmount.value !== ' ') {
        submitButton.addEventListener('click', hardbind);
      }
    },
    submit: function () {
      if (+salaryAmount.value > 0 || salaryAmount.value != '') {
        this.start();
        let inputs = document.querySelectorAll('input[type=text');
        for (let i = 0; i < inputs.length; i++) {
          inputs[i].setAttribute("disabled", "disabled");
        }
        cancel.style.display = 'block';
        submitButton.style.display = 'none';
      }
    },


  };
  function placeholders() {
    let inputNames = document.querySelectorAll('input');
    for (let i = 0; i < inputNames.length; i++) {
      if (inputNames[i].placeholder === 'Наименование') {
        inputNames[i].addEventListener('input', () => {
          inputNames[i].value = inputNames[i].value.replace(/[^а-я]/, '');
        });
      } else if (inputNames[i].placeholder === 'Сумма') {
        inputNames[i].addEventListener('input', () => {
          inputNames[i].value = inputNames[i].value.replace(/[^0-9+$]/, '');
        });
      }
    }
  };
  let hardbind = appData.submit.bind(appData);

  placeholders();
  periodSelect.addEventListener('change', appData.calcPeriod);
  salaryAmount.addEventListener('input', appData.check);
  cancel.addEventListener('click', appData.reset);
  expensesPlus.addEventListener('click', appData.addExpensesBlock);
  incomePlus.addEventListener('click', appData.addIncomeBlock);




});
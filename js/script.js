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

  const AppData = function () {
    this.income = {};
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.deposit = false;
    this.percentageDeposit = 0;
    this.incomeMonth = 0;
    this.moneyDeposit = 0;
    this.budget = 0;
    this.expensesMonth = 0;
    this.budgetMonth = 0;
    this.budgetDay = 0;
  };

  AppData.prototype.showResult = function () {
    budgetDayValue.value = this.budgetDay;
    budgetMonthValue.value = this.budgetMonth;
    expensesMonthValue.value = this.expensesMonth;
    additionalExpValue.value = this.addExpenses.join(', ');
    addIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = this.getTargetMonth();
  };
  AppData.prototype.addExpensesBlock = function () {

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
  };
  AppData.prototype.addIncomeBlock = function () {

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
  };
  AppData.prototype.getExpenses = function () {
    const _this = this;
    expensesItems.forEach(function (item) {
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cashExpenses = item.querySelector('.expenses-amount').value;
      if (itemExpenses !== '' && cashExpenses !== '') {
        _this.expenses[itemExpenses] = cashExpenses;
      }
    });
  };
  AppData.prototype.getIncome = function () {
    const _this = this;
    incomeItems.forEach(function (item) {
      let itemIncome = item.querySelector('.income-title').value;
      let cashIncome = item.querySelector('.income-amount').value;
      if (itemIncome !== '' && cashIncome !== '') {
        _this.income[itemIncome] = cashIncome;
      }
      _this.incomeMonth = 0;
      for (let key in _this.income) {
        _this.incomeMonth += +_this.income[key];
      }
    });
  };
  AppData.prototype.getExpensesMonth = function () {
    let result = 0;
    for (let key in this.expenses) {
      result += +this.expenses[key];
    }
    this.expensesMonth = result;
    return result;
  };

  AppData.prototype.getBudget = function () {
    this.budgetMonth = this.budget + this.incomeMonth - this.getExpensesMonth();
    this.budgetDay = Math.ceil(Math.floor(this.budgetMonth / 30));
  };
  AppData.prototype.getTargetMonth = function () {
    let result = Math.ceil(targetAmount.value / this.budgetMonth);
    if (result <= 0) {
      return 'Цель не будет достигнута';
    } else {
      return 'Цель будет достигнута через ' + result + ' месяцев';

    }
  };
  AppData.prototype.getStatusIncome = function () {
    if (this.budgetDay > 800) {
      return ('Высокий уровень дохода');
    } else if (this.budgetDay >= 300 && this.budgetDay <= 800) {
      return ('Средний уровень дохода');
    } else if (this.budgetDay >= 0 && this.budgetDay <= 300) {
      return ('Низкий уровень дохода');
    } else if (this.budgetDay < 0) {
      return ('Что-то пошло не так');
    }
  };
  AppData.prototype.getAddExpenses = function () {
    const _this = this;
    let addExpenses = additionalExpItem.value.split(',');

    addExpenses.forEach(function (item) {
      item = item.trim();
      if (item !== '') {
        _this.addExpenses.push(item);
      }
    });

  };
  AppData.prototype.getAddIncome = function () {
    const _this = this;
    additionalIncomeItem.forEach(function (item) {
      let itemValue = item.value.trim();
      if (itemValue !== '') {
        _this.addIncome.push(itemValue);
      }

    });
  };
  AppData.prototype.getInfoDeposit = function () {
    if (depositCheck.checked) {
      this.percentageDeposit = prompt('Какой годовой процент?', '10');
      do { this.moneyDeposit = prompt('Какая сумма заложена?', 10000); }
      while (isNaN(this.moneyDeposit) || this.moneyDeposit === '' || this.moneyDeposit === null);
    }
  };
  AppData.prototype.calcPeriod = function () {
    const _this = this;
    periodAmount.textContent = periodSelect.value;
    incomePeriodValue.value = _this.budgetMonth * periodSelect.value;
  };
  AppData.prototype.changePeriod = function () {
    periodAmount.textContent = periodSelect.value;
  };
  AppData.prototype.reset = function (e) {
    const _this = this;
    let inputs = document.querySelectorAll('input[type=text');
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].removeAttribute("disabled", "disabled");
      inputs[i].value = '';
    }
    cancel.style.display = 'none';
    submitButton.style.display = 'block';
    addIncomeValue.value = '';
    _this.addIncome = [];
    _this.income = {};
    _this.incomeMonth = 0;
  };
  AppData.prototype.check = function () {
    if (salaryAmount.value != null || salaryAmount.value !== ' ') {
      submitButton.addEventListener('click', hardbind);
    }
  };
  AppData.prototype.submit = function () {
    if (+salaryAmount.value > 0 || salaryAmount.value != '') {
      this.start();
      let inputs = document.querySelectorAll('input[type=text');
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].setAttribute("disabled", "disabled");
      }
      cancel.style.display = 'block';
      submitButton.style.display = 'none';
    }
  };
  AppData.prototype.start = function () {
    this.budget = +salaryAmount.value;
    this.placeholders();
    this.getExpenses();
    this.getIncome();
    this.getBudget();
    this.getExpensesMonth();
    this.getAddExpenses();
    this.getAddIncome();
    this.calcPeriod();
    this.getStatusIncome();

    this.showResult();
  };
  AppData.prototype.eventListeners = function () {
    periodSelect.addEventListener('change', this.calcPeriod);
    salaryAmount.addEventListener('input', this.check);
    cancel.addEventListener('click', this.reset);
    expensesPlus.addEventListener('click', this.addExpensesBlock);
    incomePlus.addEventListener('click', this.addIncomeBlock);
  };
  AppData.prototype.placeholders = function () {
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
  const appData = new AppData();
  appData.placeholders();
  appData.eventListeners();
  let hardbind = appData.submit.bind(appData);


});
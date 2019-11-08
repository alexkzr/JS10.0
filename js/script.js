document.addEventListener('DOMContentLoaded', function () {
  'use strict';
  const submitButton = document.getElementById('start');
  const incomePlus = document.getElementsByTagName('button')[0];
  const expensesPlus = document.getElementsByTagName('button')[1];
  const depositCheck = document.querySelector('#deposit-check'),
    budgetMonthValue = document.querySelector('.budget_month-value'),
    budgetDayValue = document.querySelector('.budget_day-value'),
    expensesMonthValue = document.querySelector('.expenses_month-value'),
    addIncomeValue = document.querySelector('.additional_income-value'),
    addExpensesValue = document.querySelector('.additional_expenses-value'),
    incomePeriodValue = document.querySelector('.income_period-value'),
    targetMonthValue = document.querySelector('.target_month-value'),
    expensesTitle = document.querySelector('.expenses-title'),
    additionalExpValue = document.querySelector('.additional_expenses-value'),
    cancel = document.getElementById('cancel'),
    depositBank = document.querySelector('.deposit-bank'),
    depositAmount = document.querySelector('.deposit-amount'),
    depositPercent = document.querySelector('.deposit-percent'),
    incomeBlock = document.querySelector('.income'),
    expensesBlock = document.querySelector('.expenses');





  let addIncome = document.querySelectorAll('.additional_income-item'),
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    incomeAmount = document.querySelector('.income-amount'),
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    expensesAmount = document.querySelector('.expenses-amount'),
    additionalExpItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    periodSelect = document.querySelector('.period-select'),
    periodAmount = document.querySelector('.period-amount'),
    incomeItems = document.querySelectorAll('.income-items');

  class AppData {
    constructor() {
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
    }
    showResult() {
      budgetDayValue.value = this.budgetDay;
      budgetMonthValue.value = this.budgetMonth;
      expensesMonthValue.value = this.expensesMonth;
      additionalExpValue.value = this.addExpenses.join(', ');
      addIncomeValue.value = this.addIncome.join(', ');
      targetMonthValue.value = this.getTargetMonth();
    }
    addExpIncBlock(selector, button) {
      const _this = this;
      let cloneExpensesItem = selector[0].cloneNode(true);
      cloneExpensesItem.classList.add('extra');
      selector[0].parentNode.insertBefore(cloneExpensesItem, button);
      if (selector === expensesItems) {
        selector = document.querySelectorAll('.expenses-items');
      } else {
        selector = document.querySelectorAll('.income-items');
      }
      for (let i = 0; i < cloneExpensesItem.childNodes.length; i++) {
        cloneExpensesItem.childNodes[i].value = '';
      }
      if (selector.length === 3) {
        button.style.display = 'none';
      }
      _this.placeholders();
    }
    /*
    addExpensesBlock() {
      const _this = this;
      let cloneExpensesItem = expensesItems[0].cloneNode(true);
      expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
      expensesItems = document.querySelectorAll('.expenses-items');
      for (let i = 0; i < cloneExpensesItem.childNodes.length; i++) {
        cloneExpensesItem.childNodes[i].value = '';
      }
      if (expensesItems.length === 3) {
        expensesPlus.style.display = 'none';
      }
      _this.placeholders();
    }
    addIncomeBlock() {
      const _this = this;
      let cloneIncomeItem = incomeItems[0].cloneNode(true);
      incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
      incomeItems = document.querySelectorAll('.income-items');
      for (let i = 0; i < cloneIncomeItem.childNodes.length; i++) {
        cloneIncomeItem.childNodes[i].value = '';
      }
      if (incomeItems.length === 3) {
        incomePlus.style.display = 'none';
      }
      _this.placeholders();
    }
    */
    getExpenses() {
      const _this = this;
      expensesItems.forEach(function (item) {
        let itemExpenses = item.querySelector('.expenses-title').value;
        let cashExpenses = item.querySelector('.expenses-amount').value;
        if (itemExpenses !== '' && cashExpenses !== '') {
          _this.expenses[itemExpenses] = cashExpenses;
        }
      });
    }
    getIncome() {
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
    }
    getExpensesMonth() {
      let result = 0;
      for (let key in this.expenses) {
        result += +this.expenses[key];
      }
      this.expensesMonth = result;
      return result;
    }
    getBudget() {
      this.budgetMonth = this.budget + this.incomeMonth - this.getExpensesMonth() + (this.moneyDeposit * this.percentageDeposit) / 12;
      this.budgetDay = Math.ceil(Math.floor(this.budgetMonth / 30));
    }
    getTargetMonth() {
      let result = Math.ceil(targetAmount.value / this.budgetMonth);
      if (result <= 0) {
        return 'Цель не будет достигнута';
      }
      else {
        return 'Цель будет достигнута через ' + result + ' месяцев';
      }
    }
    getStatusIncome() {
      if (this.budgetDay > 800) {
        return ('Высокий уровень дохода');
      }
      else if (this.budgetDay >= 300 && this.budgetDay <= 800) {
        return ('Средний уровень дохода');
      }
      else if (this.budgetDay >= 0 && this.budgetDay <= 300) {
        return ('Низкий уровень дохода');
      }
      else if (this.budgetDay < 0) {
        return ('Что-то пошло не так');
      }
    }
    /*
    getAddExpenses() {
      const _this = this;
      let addExpenses = additionalExpItem.value.split(',');
      addExpenses.forEach(function (item) {
        item = item.trim();
        if (item !== '') {
          _this.addExpenses.push(item);
        }
      });
    }
    getAddIncome() {
      const _this = this;
      additionalIncomeItem.forEach(function (item) {
        let itemValue = item.value.trim();
        if (itemValue !== '') {
          _this.addIncome.push(itemValue);
        }
      });
    }
    */
    getAddBlock(selector) {
      const _this = this;
      if (selector === additionalExpItem) {
        selector = selector.value.split(',');
        selector.forEach(function (item) {
          item = item.trim();
          if (item !== '') {
            _this.addExpenses.push(item);
          }
        });
      } else if (selector === additionalIncomeItem) {
        selector.forEach(function (item) {
          item = item.value.trim();
          if (item !== '') {
            _this.addIncome.push(item);
          }
        });
      }
    }

    getInfoDeposit() {
      if (depositCheck.checked) {
        this.percentageDeposit = depositPercent.value;
        this.moneyDeposit = depositAmount.value;
      }
    }
    getDeposit() {
      if (depositCheck.checked) {
        depositBank.style.display = 'inline-block';
        depositAmount.style.display = 'inline-block';
        this.deposit = 'true';
        depositBank.addEventListener('change', function () {
          let selectIndex = this.options[this.selectedIndex].value;
          if (selectIndex === 'other') {
            depositPercent.style.display = 'inline-block';
            depositPercent.removeAttribute('disabled');
            depositPercent.value = '';
          }
          else {
            depositPercent.style.display = 'none';
            depositPercent.value = selectIndex;
          }
        });
      }
      else {
        depositBank.style.display = 'none';
        depositAmount.style.display = 'none';
        appData.deposit = 'false';
        depositAmount.value = '';
      }
    }
    calcPeriod() {
      periodAmount.textContent = periodSelect.value;
      incomePeriodValue.value = this.budgetMonth * periodSelect.value;
    }
    changePeriod() {
      periodAmount.textContent = periodSelect.value;
    }
    reset() {
      let inputs = document.querySelectorAll('input[type=text');
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].removeAttribute("disabled", "disabled");
        inputs[i].value = '';
      }
      cancel.style.display = 'none';
      addIncomeValue.value = '';
      this.addIncome = [];
      this.income = {};
      this.incomeMonth = 0;
      appData.budgetMonth = 0;
      incomePeriodValue.value = 0;
      submitButton.style.display = 'block';
      var p = document.querySelectorAll('.extra');
      for (var i = 0; i < p.length; i++) {
        p[i].parentNode.removeChild(p[i]);
      }
      incomePlus.style.display = 'block';
      expensesPlus.style.display = 'block';
    }
    check() {
      if (salaryAmount.value != null || salaryAmount.value !== ' ') {
        submitButton.addEventListener('click', hardbind);
      }
    }
    submit() {
      if (+salaryAmount.value > 0 || salaryAmount.value != '') {
        this.start();
        let inputs = document.querySelectorAll('input[type=text');
        for (let i = 0; i < inputs.length; i++) {
          inputs[i].setAttribute("disabled", "disabled");
        }
        cancel.style.display = 'block';
        submitButton.style.display = 'none';
      }
    }
    placeholders() {
      let inputNames = document.querySelectorAll('input');
      for (let i = 0; i < inputNames.length; i++) {
        if (inputNames[i].placeholder === 'Наименование') {
          inputNames[i].addEventListener('input', () => {
            inputNames[i].value = inputNames[i].value.replace(/[^а-я]/, '');
          });
        }
        else if (inputNames[i].placeholder === 'Сумма') {
          inputNames[i].addEventListener('input', () => {
            inputNames[i].value = inputNames[i].value.replace(/[^0-9+$]/, '');
          });
        }
      }
    }
    start() {
      this.budget = +salaryAmount.value;
      this.placeholders();
      this.getExpenses();
      this.getIncome();
      this.getInfoDeposit();
      this.getBudget();
      this.getExpensesMonth();
      // this.getAddExpenses();
      // this.getAddIncome();
      this.getAddBlock(additionalIncomeItem);
      this.getAddBlock(additionalExpItem);
      this.calcPeriod();
      this.getStatusIncome();
      this.showResult();
    }
    eventListeners() {
      periodSelect.addEventListener('change', bindCalc);
      salaryAmount.addEventListener('input', this.check);
      cancel.addEventListener('click', bindReset);
      expensesPlus.addEventListener('click', function () { appData.addExpIncBlock(expensesItems, expensesPlus); }, false);
      incomePlus.addEventListener('click', function () { appData.addExpIncBlock(incomeItems, incomePlus); }, false);
      // incomePlus.addEventListener('click', this.addIncomeBlock);
      depositCheck.addEventListener('change', this.getDeposit);
    }
  }


  const appData = new AppData();
  let bindCalc = appData.calcPeriod.bind(appData);
  let bindReset = appData.reset.bind(appData);
  let hardbind = appData.submit.bind(appData);

  appData.placeholders();
  appData.eventListeners();


});

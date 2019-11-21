class Validator {
  constructor({ selector, pattern = {}, method }) {
    this.form = document.querySelector(selector);
    this.pattern = pattern;
    this.method = method;
    this.elementsForm = [...this.form.elements].filter(item => {
      return item.tagName.toLowerCase() !== 'button' && item.type !== 'button';
    });
    this.error = new Set();
  }

  init() {
    this.applyStyle();
    this.setPattern();
    this.elementsForm.forEach(elem => elem.addEventListener('change', this.checkIt.bind(this)));

  }

  isValid(elem) {
    const validatorMethod = {
      notEmpty(elem) {
        if (elem.value.trim() === '') {
          return false;
        }
        return true;
      },
      pattern(elem, pattern) {
        return pattern.test(elem.value);
      },
    };
    const method = this.method[elem.id];
    console.log('method: ', method);

    if (method) {
      console.log('method.every: ', method.every(item => validatorMethod[item[0]](elem, this.pattern[item[1]])));
      return method.every(item => validatorMethod[item[0]](elem, this.pattern[item[1]]));
    }

    return true;
  }

  checkIt(e) {
    const target = e.target;

    if (this.isValid(target)) {
      this.showSuccess(target);
      this.error.delete(target);
    } else {
      this.showError(target);
      this.error.add(target);
    }
  }

  showError(elem) {
    elem.classList.remove('success');
    elem.classList.add('error');
    if (elem.nextElementSibling) {
      if (elem.nextElementSibling.classList.contains('validator-error')) { return; }
    }
    const errorDiv = document.createElement('div');
    errorDiv.textContent = 'Ошибка в этом поле';
    errorDiv.classList.add('validator-error');
    elem.insertAdjacentElement('afterend', errorDiv);
  }
  showSuccess(elem) {
    elem.classList.remove('error');
    elem.classList.add('success');

    if (elem.nextElementSibling) {
      if (elem.nextElementSibling.classList.contains('validator-error')) {
        elem.nextElementSibling.remove();
      }
    }
  }

  applyStyle() {
    const style = document.createElement('style');
    style.textContent = `
    input.success{
      border: 2px solid forestgreen !important;
    }
    input.error{
      border: 2px solid tomato !important;
    }
    .validator-error{
      font-size: 14px !important;
      color: #fff !important;
      background-color: salmon !important;
    }
    `;
    document.head.appendChild(style);
  }

  setPattern() {

    if (!this.pattern.phone) {
      this.pattern.phone = /^\+[78]([-()]*\d){10}$/;
    }
    if (!this.pattern.email) {
      this.pattern.email = /^\w+@\w+\.\w{2,}\w+?$/;
    }
    if (!this.pattern.name) {
      this.pattern.email = /^\w$/;
    }
  }

}

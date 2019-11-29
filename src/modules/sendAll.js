
import Validator from './validate';
const sendAll = () => {
  let validatorError = document.querySelectorAll('.validator-error');
  const sendForm = () => {

    const statusMessage = document.createElement('div');
    const preloaderDiv = document.createElement('div');
    preloaderDiv.id = 'hellopreloader_preload';
    let hellopreloader = document.getElementById("hellopreloader_preload");

    const preloader = () => {
      console.log('hellopreloader: ', hellopreloader);
      console.log('preloaderDiv: ', preloaderDiv);
      preloaderDiv.style.display = "block";
      // hellopreloader.style.display = "block";

      let styleDiv = document.createElement('style');
      styleDiv.textContent = `
      #hellopreloader>p{
        display:none;
      }
      form {
        position: relative;
      }
      #hellopreloader_preload{
        display: block;
        position: absolute;
        z-index: 99999;
        top: 58%;
        left: 50%;
        transform: translateX(-50%);
        width: 100px;
        height: 100px;
        background: url(./images/pre.svg) center center no-repeat;
        background-size: 30px;
      }`;
      document.head.appendChild(styleDiv);

    };


    const errorMessage = 'Что-то пошло не так...',
      loadMessage = 'Загрузка...',
      success = 'Спасибо! Мы свяжемся с вами!';
    statusMessage.style.cssText = 'font-size: 2rem;';
    statusMessage.className = 'statusMessage';

    const form = document.getElementById('form1');
    const form2 = document.getElementById('form2');
    const form3 = document.getElementById('form3');

    const getData = (url, selector) => {
      const formData = new FormData(selector);
      selector.appendChild(statusMessage);
      statusMessage.textContent = loadMessage;
      selector.querySelectorAll('input').forEach((item) => {
        item.value = '';
        if (item.nextElementSibling) {
          if (item.nextElementSibling.classList.contains('validator-error')) {
            item.nextElementSibling.remove();
          }
        }
      });
      let body = {};
      formData.forEach((val, key) => {
        body[key] = val;
      });
      return fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
    };

    const send = (selector) => {
      let isFalse = 0;
      validArr.forEach((item) => {
        if (item.form === selector) {
          item.elementsForm.forEach((input) => {
            if (!item.isValid(input)) {
              isFalse++;
            }
          });
        }
      });
      if (isFalse) return;

      // selector.appendChild(preloaderDiv);

      let urLink = "../server.php";

      getData(urLink, selector)
        .then(data => {
          if (data.status !== 200) {
            statusMessage.textContent = errorMessage;
            throw new Error('status not 200');
          }
          statusMessage.textContent = success;
          preloaderDiv.style.display = 'none';
          console.log(data);
        })
        .catch(error => console.error(error));

    };

    form.addEventListener('submit', e => {
      e.preventDefault();
      send(form);

    });
    form2.addEventListener('submit', e => {
      e.preventDefault();
      send(form2);
      preloaderDiv.style.top = '90%';

    });
    form3.addEventListener('submit', e => {
      e.preventDefault();
      statusMessage.style.color = '#fff';
      preloaderDiv.style.top = '90%';
      send(form3);
    });
  };
  sendForm();

  let validArr = [];

  //validator
  const valid1 = new Validator({
    selector: '#form1',
    pattern: {
      email: /^\w+@\w+\.\w{2,3}$/,
      name: /^[А-Яа-я]+$/,
    },
    method: {
      'form1-phone': [
        ['notEmpty'],
        ['pattern', 'phone'],
      ],
      'form1-email': [
        ['notEmpty'],
        ['pattern', 'email']
      ],
      'form1-name': [
        ['notEmpty'],
        ['pattern', 'name']
      ],
      'form1-message': [
        ['notEmpty'],
        ['pattern', 'name']
      ]
    }
  });
  validArr.push(valid1);

  const valid2 = new Validator({
    selector: '#form2',
    pattern: {
      email: /^\w+@\w+\.\w{2,3}$/,
      name: /^[А-Яа-я]+$/,
      // name: /^[A-Za-zА-Яа-яЁё]+$/
    },
    method: {
      'form2-phone': [
        ['notEmpty'],
        ['pattern', 'phone'],
      ],
      'form2-email': [
        ['notEmpty'],
        ['pattern', 'email']
      ],
      'form2-name': [
        ['notEmpty'],
        ['pattern', 'name']
      ],
      'form2-message': [
        ['notEmpty'],
        ['pattern', 'name']
      ]
    }
  });
  validArr.push(valid2);

  const valid3 = new Validator({
    selector: '#form3',
    pattern: {
      email: /^\w+@\w+\.\w{2,3}$/,
      name: /^[А-Яа-я]+$/,
    },
    method: {
      'form3-phone': [
        ['notEmpty'],
        ['pattern', 'phone'],
      ],
      'form3-email': [
        ['notEmpty'],
        ['pattern', 'email']
      ],
      'form3-name': [
        ['notEmpty'],
        ['pattern', 'name']
      ],
      'form3-message': [
        ['notEmpty'],
        ['pattern', 'name']
      ]
    }
  });
  validArr.push(valid3);


  valid1.init();
  valid2.init();
  valid3.init();

}
export default sendAll;
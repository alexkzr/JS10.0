window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  //Timer
  function countTimer(deadline) {
    let timerHours = document.querySelector('#timer-hours'),
      timerMinutes = document.querySelector('#timer-minutes'),
      timerSeconds = document.querySelector('#timer-seconds');

    function getTimeRemaining() {
      let dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000,
        seconds = ('0' + Math.floor(timeRemaining % 60)).slice(-2),
        minutes = ('0' + Math.floor((timeRemaining / 60) % 60)).slice(-2),
        hours = ('0' + Math.floor(timeRemaining / 60 / 60)).slice(-2);

      return { timeRemaining, hours, minutes, seconds };
    }
    function updateClock() {

      let timer = getTimeRemaining();
      timerHours.textContent = timer.hours;
      timerMinutes.textContent = timer.minutes;
      timerSeconds.textContent = timer.seconds;
      if (timer.timeRemaining < 0) {
        timerHours.textContent = '00';
        timerMinutes.textContent = '00';
        timerSeconds.textContent = '00';
      }
    }
    let timer = getTimeRemaining();
    if (timer.timeRemaining > 0) {
      setInterval(updateClock, 1000);
    }
    updateClock();
  }

  const plusDay = function () {
    let months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'Octover',
      'November',
      'December'];
    let date = new Date();
    let day = date.getDate() + 1;
    let year = date.getFullYear();
    let month = date.getMonth();
    let monthName = months[month];
    let hours = date.getHours();
    let hoursTotal = (hours + 24) / 24;
    let hoursRounded = hoursTotal.toFixed(2);
    let moreDays = day * hoursRounded;
    let twentyFour = new Date(new Date().getTime() + 60 * 60 * 24 * 1000);
    return twentyFour;
  };
  countTimer(plusDay());

  //End of Timer

  //Menu 

  const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu'),
      menu = document.querySelector('menu'),
      closeBtn = document.querySelector('.close-btn'),
      body = document.querySelector('body'),
      html = document.querySelector('html');
    let menuItem = document.querySelectorAll('meny > ul > li');
    html.cssText = `scroll-behavior: smooth;`;
    html.style.scrollBehavior = 'smooth';

    body.addEventListener('click', e => {
      let target = e.target,
        parent = target.parentNode;
      if (parent.matches('.menu') ||
        target.matches('.close-btn') ||
        target.tagName === 'MENU') {
        menu.classList.toggle('active-menu');
      } else if (parent.tagName === 'LI' && parent.parentNode.parentNode.tagName === 'MENU') {
        menu.classList.toggle('active-menu');
        let scrollTo;
        menuItem.forEach((item) => menuItem.addEventListener('click', () => {
          let link = item.firstChild.href.match(/\#.+/ig);
          scrollTo = document.querySelector(`${link[0]}`);
          scrollTo.scrollIntoView({ block: "center", behavior: "smooth" });
        }));
      } else if (!parent.matches('menu') && menu.classList.contains('active-menu')) {
        menu.classList.remove('active-menu');
      }
    });

  };

  toggleMenu();

  //popup
  const popup = document.querySelector('.popup'),
    popupBtn = document.querySelectorAll('.popup-btn'),
    popupClose = document.querySelector('.popup-close');
  popup.style.transition = 'all 0.5s';
  popup.style.transform = 'translateY(-100%)';
  popup.style.display = 'block';
  const checkScreen = function () {
    if (window.screen.width < 768) {
      popup.style.transition = 'all 0s ease 0s';
      popup.style.transform = 'translateY(0)';
      popup.style.display = 'block';
    } else {
      popup.style.transition = 'all 0.5s';
      if (!popup.style.transform || popup.style.transform === 'translateY(-100%)') {
        popup.style.display = 'block';
        popup.style.transform = 'translateY(0)';
      } else {
        popup.style.transform = 'translateY(-100%)';

      }
    }
  };
  const togglePopup = function () {
    popupBtn.forEach((elem) => {
      elem.addEventListener('click', () => {
        checkScreen();
      });
    });

    popup.addEventListener('click', e => {
      let target = e.target;

      if (target.classList.contains('popup-close')) {
        popup.style.transform = 'translateY(-100%)';

      } else {
        target = target.closest('.popup-content');
        if (!target) {
          popup.style.transform = 'translateY(-100%)';
        }
      }

    });
  };
  togglePopup();

  /* -------------------------------------------------------------------------
   begin Scroll Down Button
  * ------------------------------------------------------------------------- */
  let btn = document.querySelector('main > a');
  let scrollTo = document.querySelector('#service-block');
  function handleButtonClick(e) {
    e.preventDefault();
    scrollTo.scrollIntoView({ block: "center", behavior: "smooth" });
  }
  btn.addEventListener('click', handleButtonClick);

  /*****************************\ 
   *  Begin Tabs Script        *
  \*************************** */

  const tabs = () => {
    const tabHeader = document.querySelector('.service-header'),
      tab = tabHeader.querySelectorAll('.service-header-tab'),
      tabContent = document.querySelectorAll('.service-tab');
    const toggleTabContent = (index) => {
      for (let i = 0; i < tabContent.length; i++) {
        if (index === i) {
          tab[i].classList.add('active');
          tabContent[i].classList.remove('d-none');
        } else {
          tab[i].classList.remove('active');
          tabContent[i].classList.add('d-none');
        }
      }
    };
    tabHeader.addEventListener('click', event => {
      let target = event.target;
      target = target.closest('.service-header-tab');
      if (target) {
        tab.forEach((item, i) => {
          if (item === target) {
            toggleTabContent(i);
          }
        });
      }
    });
  };
  tabs();

  /*****************************\ 
   *  Begin Slider Script      *
  \*************************** */

  const slider = () => {
    const slide = document.querySelectorAll('.portfolio-item'),
      btn = document.querySelectorAll('.portfolio-btn'),

      slider = document.querySelector('.portfolio-content');
    let currentSlide = 0,
      interval;

    const createDots = () => {
      let dotsWrap = document.createElement('ul');
      dotsWrap.classList.add('portfolio-dots');

      for (let i = 0; i < slide.length; i++) {
        let dots = document.createElement('li');
        dots.classList.add('dot');
        dotsWrap.appendChild(dots);
      }
      slider.appendChild(dotsWrap);
    };

    createDots();

    let dot = document.querySelectorAll('.dot');

    const prevSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);

    };
    const nextSlide = (elem, index, strClass) => {
      elem[index].classList.add(strClass);

    };

    const autoPlaySlide = () => {

      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');
      currentSlide++;
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
    };
    const startSlide = (speed = 3000) => {
      interval = setInterval(autoPlaySlide, speed);
    };
    const stopSlide = () => {
      clearInterval(interval);
    };
    slider.addEventListener('click', e => {
      e.preventDefault();
      let target = e.target;
      if (!target.matches('.portfolio-btn, .dot')) {
        return;
      }
      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');

      if (target.matches('#arrow-right')) {
        currentSlide++;
      } else if (target.matches('#arrow-left')) {
        currentSlide--;
      } else if (target.matches('.dot')) {
        dot.forEach((elem, index) => {
          if (elem === target) {
            currentSlide = index;
          }
        });
      }
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      if (currentSlide < 0) {
        currentSlide = slide.length - 1;
      }
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
    });
    slider.addEventListener('mouseover', e => {
      if (e.target.matches('.portfolio-btn') || e.target.matches('.dot')) {
        stopSlide();
      }
    });
    slider.addEventListener('mouseout', e => {
      if (e.target.matches('.portfolio-btn') || e.target.matches('.dot')) {
        startSlide();
      }
    });
    startSlide(2000);
  };


  slider();

  /*****************************\ 
     *  Change image src         *
    \*************************** */
  let teamImg = document.querySelectorAll('.command__photo'),
    src, data;

  teamImg.forEach((item) => {
    item.addEventListener('mouseover', (e) => {
      src = e.target.src;
      data = e.target.dataset.img;
      e.target.src = e.target.dataset.img;
      e.target.dataset.img = src;
    });
    item.addEventListener('mouseout', (e) => {
      src = e.target.src;
      data = e.target.dataset.img;
      e.target.src = e.target.dataset.img;
      e.target.dataset.img = src;

    });
  });
  /*****************************\ 
   *  Input validation         *
  \*************************** */

  let inputValue = 0;
  let calcInputs = document.querySelectorAll('.calc-block input');
  calcInputs.forEach((item) => {
    item.addEventListener('keydown', function (e) {
      let key = e.keyCode ? e.keyCode : e.which;

      if (!([8, 9, 13, 27, 46, 110, 190].indexOf(key) !== -1 ||
        (key == 65 && (e.ctrlKey || e.metaKey)) ||
        (key >= 35 && key <= 40) ||
        (key >= 48 && key <= 57 && !(e.shiftKey || e.altKey)) ||
        (key >= 96 && key <= 105)
      )) { e.preventDefault(); }
    });
  });

  /*****************************\
   *  Calculator               *
  \*************************** */




  const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block'),
      calcType = document.querySelector('.calc-type'),
      calcSquare = document.querySelector('.calc-square'),
      calcCount = document.querySelector('.calc-count'),
      calcDay = document.querySelector('.calc-day'),
      totalValue = document.getElementById('total');
    let total = 0;



    const countSum = () => {
      let countValue = 1,
        dayValue = 1;
      let typeValue = calcType.options[calcType.selectedIndex].value;
      let squareValue = +calcSquare.value;

      if (calcCount.value > 1) {
        countValue += +(calcCount.value - 1) / 10;
      }

      if (calcDay.value && +calcDay.value < 5) {
        dayValue *= 2;
      } else if (calcDay.value && +calcDay.value < 10) {
        dayValue *= 1.5;
      }

      if (typeValue && squareValue) {
        total = price * typeValue * squareValue * countValue * dayValue;
      }


      // totalValue.textContent = total;
      if (calcSquare.value > 0) {
        return total;
      }
    };

    function animate({ timing, draw, duration }) {

      let start = performance.now();

      requestAnimationFrame(function animate(time) {
        // timeFraction изменяется от 0 до 1
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) { timeFraction = 1; }

        // вычисление текущего состояния анимации
        let progress = timing(timeFraction);

        draw(progress); // отрисовать её

        if (timeFraction < 1) {
          requestAnimationFrame(animate);
        }

      });
    }
    /*****************************\
    *  Animate numbers           *
    \*************************** */
    function animateText(textArea) {
      let text = textArea.value;
      let to = total,
        from = 0;

      animate({
        duration: 1000,
        timing: function (timeFraction) {
          return timeFraction;
        },
        // timing: bounce,
        draw: function (progress) {
          let result = Math.ceil((to - from) * progress + from);
          document.getElementById('total').textContent = result;
        }
      });
    }


    calcBlock.addEventListener('change', (e) => {
      const target = e.target;

      if (target.matches('select') || target.matches('input')) {
        countSum();
        animateText(total);
      }


    });
  };
  calc(100);
  /*****************************\
   *  Send forms               *
  \*****************************/



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

      let urLink = "./server.php";

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

    /* OLD PIECE OF CODE
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
    
          selector.appendChild(preloaderDiv);
          selector.appendChild(statusMessage);
          const request = new XMLHttpRequest();
    
          request.addEventListener('readystatechange', () => {
            statusMessage.textContent = loadMessage();
            if (request.readyState !== 4) {
              return;
            }
            if (request.status === 200) {
              statusMessage.textContent = success;
              preloaderDiv.style.display = 'none';
            } else {
              statusMessage.textContent = errorMessage;
            }
          });
    
          request.open('POST', './server.php');
          request.setRequestHeader('Content-Type', 'application/json');
          const formData = new FormData(selector);
    
          let body = {};
          formData.forEach((val, key) => {
            body[key] = val;
          });
    
          request.send(JSON.stringify(body));
          selector.querySelectorAll('input').forEach((item) => {
            item.value = '';
            removeValidErr();
            if (item.nextElementSibling) {
              if (item.nextElementSibling.classList.contains('validator-error')) {
                item.nextElementSibling.remove();
              }
            }
          });
    
        };
        */
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
  const valid1 = new Validator({
    selector: '#form1',
    pattern: {
      phone: /^\+7\d{10}$/,
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
      phone: /^\+7\d{10}$/,
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
      phone: /^\+7\d{10}$/,
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


  const removeValidErr = (callback) => {
    validatorError = document.querySelectorAll('.validator-error');
    console.log('validatorError: ', validatorError);
    validatorError.forEach((item) => {
      console.log(' item.parentNode: ', item.parentNode);
      console.log('item: ', item);
      item.parentNode.removeChild(item);
    });
  };

});

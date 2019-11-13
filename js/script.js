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
      if (timer.timeRemaining > 0) {
        setInterval(updateClock, 1000);
      } else if (timer.timeRemaining < 0) {
        timerHours.textContent = '00';
        timerMinutes.textContent = '00';
        timerSeconds.textContent = '00';
      }
    }
    updateClock();
  }

  const plusDay = function () {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octover', 'November', 'December'];
    let date = new Date();
    let day = date.getDate() + 1;
    let year = date.getFullYear();
    let month = date.getMonth();
    let monthName = months[month];
    let hours = date.getHours();
    let hoursTotal = (hours + 24) / 24;
    let hoursRounded = hoursTotal.toFixed(2);
    let moreDays = day * hoursRounded;
    let twentyFour = new Date(new Date().getTime() + 60 * 60 * 24 * 1000);;
    return twentyFour;
  };
  countTimer(plusDay());

  //End of Timer

  //Menu 
  const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu'),
      menu = document.querySelector('menu'),
      closeBtn = document.querySelector('.close-btn'),
      menuItem = document.querySelectorAll('ul > li');
    const menuAction = function () {
      menu.classList.toggle('active-menu');
    };
    btnMenu.addEventListener('click', menuAction);
    closeBtn.addEventListener('click', menuAction);
    menuItem.forEach((elem) => elem.addEventListener('click', menuAction));
  };
  toggleMenu();

  //popup
  const popup = document.querySelector('.popup'),
    popupBtn = document.querySelectorAll('.popup-btn'),
    popupClose = document.querySelector('.popup-close');
  const checkScreen = function () {
    if (window.screen.width < 768) {
      popup.style.transition = 'all 0s ease 0s';
      popup.style.display = 'block';
      popup.style.transform = 'translateY(0)';

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
    popupClose.addEventListener('click', () => {
      // popup.style.display = 'none';
      popup.style.transform = 'translateY(-100%)';

    });
  };
  togglePopup();

  //smooth scroll down

  let linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
    V = 1;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
  for (let i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function (e) { //по клику на ссылку
      e.preventDefault(); //отменяем стандартное поведение
      let w = window.pageYOffset,  // производим прокрутка прокрутка
        hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
      let t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
        start = null;
      requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
      function step(time) {
        if (start === null) start = time;
        let progress = time - start,
          r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
        window.scrollTo(0, r);
        if (r != w + t) {
          requestAnimationFrame(step)
        } else {
          location.hash = hash;  // URL с хэшем
        }
      }
    }, false);
  }
  //tabs

});
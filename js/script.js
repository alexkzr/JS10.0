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
  /* -------------------------------------------------------------------------
     end Scroll Down Button
   * ------------------------------------------------------------------------- */
  //tabs
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


});

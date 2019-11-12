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
  countTimer(plusDay());
});

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

const togglePopup = function () {
  const popup = document.querySelector('.popup'),
    popupBtn = document.querySelectorAll('.popup-btn'),
    popupClose = document.querySelector('.popup-close');
  popupBtn.forEach((elem) => {
    elem.addEventListener('click', () => {
      popup.style.display = 'block';
    });
  });
  popupClose.addEventListener('click', () => {
    popup.style.display = 'none';
  });
};
togglePopup();
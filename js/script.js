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
      menuItem = document.querySelectorAll('ul > li'),
      body = document.querySelector('body');
    const menuScroll = (e) => {
      e.preventDefault();
      let listItem = document.querySelectorAll('menu > ul > li');
      let scrollTo;
      listItem.forEach((item) => {
        let link = item.firstChild.href.match(/\#.+/ig);
        scrollTo = document.querySelector(`${link[0]}`);
        scrollTo.scrollIntoView({ block: "center", behavior: "smooth" });
      });
    };
    body.addEventListener('click', e => {
      let target = e.target,
        parent = target.parentNode;
      if (parent.matches('.menu') ||
        target.matches('.close-btn') ||
        target.tagName === 'MENU') {
        menu.classList.toggle('active-menu');
      } else if (parent.tagName === 'LI' && parent.parentNode.parentNode.tagName === 'MENU') {
        menu.classList.toggle('active-menu');
        let listItem = document.querySelectorAll('menu > ul > li');
        let scrollTo;
        listItem.forEach((item) => {
          let link = item.firstChild.href.match(/\#.+/ig);
          scrollTo = document.querySelector(`${link[0]}`);
          scrollTo.scrollIntoView({ block: "center", behavior: "smooth" });
        });
      }
    });

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
      )) e.preventDefault();
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
        return requestAnimationFrame(function () { animate(total); });
      }
    };

    function animate(end) {
      let start = 0;
      let current = start;
      let increment = 1;
      for (let i = start; i < end; i++) {
        current += increment;
        totalValue.innerHTML = current;
      }

      window.requestAnimationFrame(function () {
        animate(end);
      });
      if (current === end) {
        window.cancelAnimationFrame(function () {
          animate(end);
        });
        return;
      }
    }

    // function animate(end) {
    //   let start = 0;
    //   let current = start;
    //   let increment = 1;
    //   let timer = setInterval(function () {
    //     current += increment;
    //     totalValue.innerHTML = current;
    //     console.log('current: ', current);
    //     if (current == end) {
    //       clearInterval(timer);
    //     }
    //   }, 4);
    // }

    calcBlock.addEventListener('change', (e) => {
      const target = e.target;

      if (target.matches('select') || target.matches('input')) {
        countSum();

      }


    });
  };
  calc(100);


});

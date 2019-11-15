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
      menuItem = document.querySelectorAll('ul > li'),
      body = document.querySelector('body');
    body.addEventListener('click', e => {
      let target = e.target,
        parent = target.parentNode;
      if (parent.matches('.menu') ||
        target.matches('.close-btn') ||
        target.tagName === 'MENU') {
        menu.classList.toggle('active-menu');
      } else if (parent.tagName === 'LI' && parent.parentNode.parentNode.tagName === 'MENU') {
        menu.classList.toggle('active-menu');
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
   *  Begin Menu Scroll        *
  \*************************** */



  const easeInCubic = function (t) { return t * t * t }
  const scrollElems = document.querySelectorAll('menu > ul > li > a');


  const scrollToElem = (start, stamp, duration, scrollEndElemTop, startScrollOffset) => {
    //debugger;
    const runtime = stamp - start;
    let progress = runtime / duration;
    const ease = easeInCubic(progress);

    progress = Math.min(progress, 1);

    const newScrollOffset = startScrollOffset + (scrollEndElemTop * ease);
    window.scroll(0, startScrollOffset + (scrollEndElemTop * ease));

    if (runtime < duration) {
      requestAnimationFrame((timestamp) => {
        const stamp = new Date().getTime();
        scrollToElem(start, stamp, duration, scrollEndElemTop, startScrollOffset);
      })
    }
  }

  for (let i = 0; i < scrollElems.length; i++) {
    const elem = scrollElems[i];

    elem.addEventListener('click', function (e) {
      e.preventDefault();
      const scrollElemId = e.target.href.split('#')[1];
      const scrollEndElem = document.getElementById(scrollElemId);

      const anim = requestAnimationFrame(() => {
        const stamp = new Date().getTime();
        const duration = 1200;
        const start = stamp;

        const startScrollOffset = window.pageYOffset;

        const scrollEndElemTop = scrollEndElem.getBoundingClientRect().top;

        scrollToElem(start, stamp, duration, scrollEndElemTop, startScrollOffset);
        // scrollToElem(scrollEndElemTop);
      })
    })
  }

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
    }

    createDots();

    let dot = document.querySelectorAll('.dot');

    const prevSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);

    }
    const nextSlide = (elem, index, strClass) => {
      elem[index].classList.add(strClass);

    }

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
        currentSlide--
      } else if (target.matches('.dot')) {
        dot.forEach((elem, index) => {
          if (elem === target) {
            currentSlide = index;
          }
        })
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
      data = e.target.dataset.img
      e.target.src = e.target.dataset.img;
      e.target.dataset.img = src;
    })
    item.addEventListener('mouseout', (e) => {
      src = e.target.src;
      data = e.target.dataset.img
      e.target.src = e.target.dataset.img;
      e.target.dataset.img = src;

    })
  });
  /*****************************\ 
   *  Input validation         *
  \*************************** */

  let calcBlock = document.querySelectorAll('.calc-block input');
  calcBlock.forEach((item) => {
    item.setAttribute("pattern", "/d/i");
  })

});

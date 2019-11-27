'use strict';

import Validator from "./js/validate/validate";
import img from "./modules/teamImg";
import calc from "./modules/calculator";
import valid from "./modules/simpleValid";
import countTimer from "./modules/countTimer";
import plusDay from "./modules/countTimer";
import toggleMenu from "./modules/toggleMenu";
import togglePopup from "./modules/popup";
import scrollDown from "./modules/scrollDown";
import handleButtonClick from "./modules/scrollDown";
import sendForm from "./modules/sendForm";
import slider from "./modules/simpleSlider";
import tabs from "./modules/tabs";

countTimer(plusDay());
//Menu 
toggleMenu();

togglePopup();

scrollDown();


/* -------------------------------------------------------------------------
 begin Scroll Down Button
* ------------------------------------------------------------------------- */
let btn = document.querySelector('main > a');
btn.addEventListener('click', handleButtonClick);

/*****************************\ 
 *  Begin Tabs Script        *
\*************************** */
tabs();
/*****************************\
*  Change image src         *
\*************************** */
img();
/*****************************\ 
 *  Begin Slider Script      *
\*************************** */
slider();
/*****************************\
*   Input validation         *
\*************************** */
valid();
/*****************************\
 *  Calculator               *
\*************************** */
calc(100);
/*****************************\
 *  Send forms               *
\*****************************/
let validatorError = document.querySelectorAll('.validator-error');

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


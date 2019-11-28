'use strict';
import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
require('formdata-polyfill')
require('es6-promise/auto');
// import Validator from "./js/validate/validate";
import calc from "./modules/calc";
import calcinp from "./modules/calcinp";
import countTimer from "./modules/countTimer";
import toggleMenu from "./modules/toggleMenu";
import togglePopup from "./modules/togglePopup";
import scrollDownFunc from "./modules/scrollDown";
import Validator from "./js/validate/validate";
import sendAll from "./modules/sendAll";
import slider from "./modules/slider";
import tabs from "./modules/tabs";
import imgTeam from "./modules/teamImg";

//Timer
countTimer();

//Menu 
toggleMenu();

//popup
togglePopup();

/* -------------------------------------------------------------------------
 begin Scroll Down Button
* ------------------------------------------------------------------------- */
scrollDownFunc();

/*****************************\ 
 *  Begin Tabs Script        *
\*************************** */


tabs();

/*****************************\ 
 *  Begin Slider Script      *
\*************************** */

slider();

/*****************************\
 *  Change image src         *
\*************************** */
imgTeam();
/*****************************\ 
 *  Input validation         *
\*************************** */

calcinp();

/*****************************\
 *  Calculator               *
\*************************** */


calc(100);
/*****************************\
 *  Send forms               *
\*****************************/

sendAll();




'use strict';

// import Validator from "./js/validate/validate";
import calc from "../src/modules/calc";
import calcinp from "../src/modules/calcinp";
import countTimer from "../src/modules/countTimer";
import toggleMenu from "../src/modules/toggleMenu";
import togglePopup from "../src/modules/togglePopup";
import scrollDownFunc from "../src/modules/scrollDown";
import sendAll from "../src/modules/sendAll";
import slider from "../src/modules/slider";
import tabs from "../src/modules/tabs";
import imgTeam from "../src/modules/teamImg";

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




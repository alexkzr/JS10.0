//Timer
function countTimer() {
  let timerHours = document.querySelector('#timer-hours'),
    timerMinutes = document.querySelector('#timer-minutes'),
    timerSeconds = document.querySelector('#timer-seconds');

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

  function getTimeRemaining() {
    let dateStop = new Date(twentyFour).getTime(),
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

export default countTimer;
const result = document.createElement('div');
const body = document.querySelector('body');
body.appendChild(result);

function addZero(a) {
  if (a < 10) {
    a = '0' + a;
  }
  return a;
}
function showTime() {
  let date = new Date();
  let year = addZero(date.getFullYear());
  let month = addZero((date.getMonth() + 1));
  let day = addZero(date.getDate());
  let hour = addZero(date.getHours());
  let minute = addZero(date.getMinutes());
  let seconds = addZero(date.getSeconds());
  let displayDate = day + '.' + month + '.' + year;
  let time = hour + '.' + minute + '.' + seconds;

  result.innerHTML = displayDate + ' ' + time;
  setTimeout(function () {
    showTime();
  }, 500)
}
showTime();
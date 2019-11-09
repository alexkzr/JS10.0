const result = document.querySelector('.result');
let date = new Date(),
  day = date[date.getDay()],
  month = date[date.getMonth()],
  hours = date.getHours();
let dateObj = {
  days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
  showTimeOfDay: function () {
    if (hours > 22 && hours < 6) {
      return 'Спокойной ночи';
    } else if (hours > 6 && hours < 12) {
      return 'Доброе утро';
    } else if (hours >= 12 && hours < 18) {
      return 'Добрый день';
    }
    else if (hours >= 18 && hours < 22) {
      return 'Добрый вечер';
    }
  },
  showDay: function () {
    return this.days[date.getDay()];
  },
  time: date.toLocaleTimeString('en'),
  toNewYear: function () {
    let dateStop = new Date('31 december 2019').getTime(),
      dateNow = new Date().getTime(),
      timeRemaining = (dateStop - dateNow) / 1000,
      days = Math.floor((timeRemaining / 60 / 60) / 24);

    return days;
  },
  showFullInfo: function () {
    result.innerHTML = `${this.showTimeOfDay()}! <br> 
    Сегодня: ${this.showDay()}<br>
    Текущее время: ${this.time}<br>
    До Нового Года осталось: ${this.toNewYear()} дня`;
  }
};
dateObj.showFullInfo();



let lang = 'en';
let arrIf = [];
let arrSwitch = [];
let array = [
  [
    'Array: ',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье'
  ],
  [
    'Array: ',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday '
  ]
]

if (lang == 'ru') {
  arrIf = [
    'If statement: ',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье'
  ]
} else if (lang == 'en') {
  arrIf = [
    'If statement: ',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday '
  ]
}

switch (lang) {
  case 'en':
    arrSwitch = [
      'Switch: ',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday '
    ]
    break;
  case 'ru':
    arrSwitch = [
      'Switch: ',
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница',
      'Суббота',
      'Воскресенье'
    ]
    break;
}

document.querySelector('.result').innerHTML += arrIf;
document.querySelector('.result').innerHTML += arrSwitch;


let namePerson = 'Артем';

namePerson == 'Артем' ? console.log('директор') : console.log('студент');
namePerson == 'Максим' ? console.log('преподаватель') : console.log('студент');
// namePerson !== 'Максим' && namePerson !== 'Артем' ? console.log('студент') : console.log('студент');
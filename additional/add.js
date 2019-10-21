'use strict';
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
    'Воскресенье \n'
  ],
  [
    'Array: ',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday  \n'
  ]
];

if (lang == 'ru') {
  arrIf = [
    'If statement: ',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье \n'
  ];
} else if (lang == 'en') {
  arrIf = [
    'If statement: ',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday  \n'
  ];
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
      'Sunday  \n'
    ];
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
      'Воскресенье \n'
    ];
    break;
}

document.querySelector('.result').innerHTML += arrIf;
document.querySelector('.result').innerHTML += arrSwitch;
let arrResult = lang == 'en' ? array[1] : array[0];
document.querySelector('.result').innerHTML += arrResult;


let namePerson = 'Артем';

namePerson == 'Артем' ? console.log('директор') : namePerson == 'Максим' ? console.log('преподаватель') : console.log('студент');
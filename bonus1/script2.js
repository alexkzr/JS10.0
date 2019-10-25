let year1, year2, changeable;
let final = [];

do {
  year1 = +prompt('Введите год начала отсчета', 1972);
} while (isNaN(year1) || year1 === '' || year1 === null);
do {
  year2 = +prompt('Введите год конца отсчета', 1995);
} while (isNaN(year2) || year2 === '' || year2 === null);

if (year1 > year2) {
  changeable = year1;
  console.log('changeable: ', changeable);
  year1 = year2;
  console.log('year1: ', year1);
  year2 = changeable;
  console.log('year2: ', year2);
}

for (let i = year1; i < year2; i++) {
  if ((i % 4 == 0 && i % 100 != 0) || (i % 400 == 0)) {
    final.push(i);
  }
}

console.log('Високосные годы: ', final);

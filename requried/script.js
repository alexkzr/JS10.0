'use strict';
let books = document.querySelector('.books');
let book = document.querySelectorAll('.book');
let bookLink = document.querySelectorAll('.book h2 a');
let bookList = document.querySelectorAll('.book ul');
let bookListItem0 = bookList[0].querySelectorAll('.book ul li');
let bookListItem2 = bookList[2].querySelectorAll('.book ul li');
let bookListItem5 = bookList[5].querySelectorAll('.book ul li');

const body = document.querySelector('body');
const adv = document.querySelector('.adv');
//Расположить книги в правильном порядке
books.insertBefore(book[1], book[0]);
books.insertBefore(book[4], book[2]);
books.insertBefore(book[2], null);
console.log('book', book);
//Заменить картинку заднего фона на другую из папки image
body.style = 'background-image: url(image/you-dont-know-js.jpg);'
//исправить название третьей книги
bookLink[4].textContent = 'Книга 3. this и Прототипы Объектов';
//удалить рекламу
body.removeChild(adv);
//восстановить порядок глав во второй книге
bookList[0].insertBefore(bookListItem0[6], bookListItem0[4]);
bookList[0].insertBefore(bookListItem0[8], bookListItem0[4]);
bookList[0].insertBefore(bookListItem0[2], bookListItem0[10]);
//восстановить порядок глав в пятой книге
bookList[5].insertBefore(bookListItem5[9], bookListItem5[2]);
bookList[5].insertBefore(bookListItem5[3], bookListItem5[2]);
bookList[5].insertBefore(bookListItem5[4], bookListItem5[2]);
bookList[5].insertBefore(bookListItem5[5], bookListItem5[8]);

//в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
const chapter8 = document.createElement('li');
chapter8.textContent = 'Глава 8: За пределами ES6';
bookList[2].appendChild(chapter8);
bookList[2].insertBefore(bookListItem2[9], null);
console.log(bookListItem2);
const ul = document.querySelector('.todo-list'),
  add = document.querySelector('.add'),
  textInput = document.getElementById('itemText'),
  todoWrap = document.querySelector('.todoWrap');
let listItem = document.querySelectorAll('.todo-list_item');

const addNew = () => {
  if (textInput.value !== '') {
    let newLi = document.createElement('li'),
      remove = document.createElement('button');
    remove.textContent = 'Удалить';
    remove.className = 'remove';
    newLi.className = 'todo-list_item';
    newLi.textContent = textInput.value;
    newLi.appendChild(remove);
    ul.appendChild(newLi);
    textInput.value = '';
  } else {
    alert('Пожалуйста введите текст нового пункта!');
  }
}
if (!ul.hasChildNodes) {
  ul.textContent = 'Добавьте задачу!';
}
todoWrap.addEventListener('click', e => {
  e.preventDefault();
  let target = e.target;
  if (target.matches('.add')) {
    addNew();
  } else if (target.matches('.todo-list_item')) {
    listItem = document.querySelectorAll('.todo-list_item');
    listItem.forEach((item) => {
      if (target === item) {
        item.classList.toggle('done');
      }
    });
  } else if (target.matches('.remove')) {
    listItem = document.querySelectorAll('.todo-list_item');
    listItem.forEach((item) => {
      if (target.parentNode === item) {
        item.parentNode.removeChild(item);
      }
    });
  }
})

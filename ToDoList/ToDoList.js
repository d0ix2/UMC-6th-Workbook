const form = document.querySelector('#form');
const input = document.querySelector('#input');
const todo = document.querySelector('#todo');
const done = document.querySelector('#done');
const todoList = [];
const doneList = [];

const createTodoItem = (value) => {
  const p = document.createElement('p');
  const div = document.createElement('div');
  const button = document.createElement('button');

  p.innerText = value;

  button.addEventListener('click', () => {
    const doneItem = createDoneItem(value);
    done.append(doneItem);
    li.remove(); 
  });

  button.classList.add('button');
  button.innerText = '완료';
  div.append(button);
  li.classList.add('list_item');
  li.append(p, div);
  return li;
};

const createDoneItem = (value) => {
  const li = document.createElement('li');
  const p = document.createElement('p');
  const div = document.createElement('div');
  const button = document.createElement('button');

  p.innerText = value;

  button.addEventListener('click', () => li.remove());

  button.classList.add('button');
  button.innerText = '삭제';
  div.append(button);
  li.classList.add('list_item');
  li.append(p, div);
  return li;
};

form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const todoPlus = createTodoItem(event.target[0].value);
  todo.append(todoPlus);
  event.target[0].value = '';
});
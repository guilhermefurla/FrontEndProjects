let todoList = [{todo: '', tododate: ''}];

function addTodo(){
  let item = document.querySelector('.js-todo').value;
  let date = document.querySelector('.js-date').value;
  todoList.push({todo: item, tododate: date});
  document.querySelector('.js-todo').value = '';
  document.querySelector('.js-date').value = '';
  list();
}
function list(){
  let list = document.querySelector('.js-list');
  let listHTML = '';
  for(let i = 1; i < todoList.length;i++){
    let object = todoList[i];
    let todoHTML = object.todo;
    let dateHTML = object.tododate;
    let html = `<p class="todo">${todoHTML}</p><p class="date"> ${dateHTML}</p><button class="remove" onclick="todoList.splice(${i}, 1); list();">delete</button>`;
    listHTML += html;
  }
  list.innerHTML = '';
  list.innerHTML = listHTML;
}
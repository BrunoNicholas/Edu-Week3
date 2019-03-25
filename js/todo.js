const todoList = document.querySelector('ul');

const newTodo = document.createElement('li');
newTodo.textContent = 'Do homework';

// Add new todo to the end of the list
todoList.appendChild(newTodo);

// new 
const anotherTodo = document.createElement('li');
const anotherTodo = document.createElement('li');

// parentNode.insertBefore(newNode, nextSibling); --> as the request

const anotherTodo = document.createElement('li');
anotherTodo.textContent = 'Pay bills';

parentNode.insertBefore(newNode, nextSibling);

// Add new to-do to the beginning of the list
todoList.insertBefore(anotherTodo, todoList.firstElementChild);

const modifiedTodo = document.createElement('li');
modifiedTodo.textContent = 'Feed the dog';

parentNode.replaceChild(newNode, oldNode);

// Replace existing to-do with modified to-do
todoList.replaceChild(modifiedTodo, todoList.children[2]);

// removing nodes
todoList.removeChild(todoList.lastElementChild);

// Remove second element child from todoList
todoList.children[1].remove();

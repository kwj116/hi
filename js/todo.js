const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('ul#todo-list');
let toDos =[];

const btn = 'btn'
const TODOS_KEY = "todos"

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function paintToDo(newTodo){
    const li = document.createElement('li');
    li.id = newTodo.id
    const span = document.createElement('span');
    const button = document.createElement('button');
    button.className = btn;
    button.innerText='❌';
    button.addEventListener('click',buttonClick);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo.text;
    toDoList.appendChild(li);
}

function buttonClick(event){
     const li = event.target.parentElement;
     toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id))
     li.remove();
     saveToDos();
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value ='';
    const newTodoObj = {
        text:newTodo,
        id :Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
     
 }
toDoForm.addEventListener('submit',handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}


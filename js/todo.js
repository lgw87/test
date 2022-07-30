const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODO_KETS = "todos"; 
const savedToDos = localStorage.getItem(TODO_KETS);
let toDos = [];

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.appendChild(span);
    li.appendChild(button);
    li.id = newTodo.id;

    span.innerText = newTodo.text;
    button.innerText = "❌";
    button.addEventListener("click" , deleteTodo);
    
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    paintToDo(newTodoObj);
    toDos.push(newTodoObj);
    saveToDos();
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((todo) => todo.id != li.id);
    saveToDos();
}



function saveToDos(){
    localStorage.setItem(TODO_KETS , JSON.stringify(toDos));
}

toDoForm.addEventListener("submit" , handleToDoSubmit);

if(savedToDos != null ){
    const parseToDos = JSON.parse(savedToDos);
    toDos = parseToDos;
    parseToDos.forEach(paintToDo);
 }
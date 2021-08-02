// selector
const form = document.querySelector("form");
let input = document.querySelector("input");
let ul = document.querySelector("ul");
let clearAll = document.querySelector("a");

// event handler
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  if (input.value !== "") {
    addTodo(input.value);
  }
  input.value = "";
}
ul.addEventListener("click", handleClickEvent);
function handleClickEvent(event) {
  if (event.target.id === "checkBtn") {
    checkTodo(event);
  }
  if (event.target.name === "deleteBtn") {
    deleteTodo(event);
  }
}
clearAll.addEventListener("click", clearAllEvent);
function clearAllEvent() {
  ul.innerHTML = "";
}

// helpers
function addTodo(todo) {
  let li = document.createElement("li");
  li.innerHTML = `
  <span class="todo-item">${todo}</span>
  <input type="checkbox" id="checkBtn"></input>
  <button type="button" name="deleteBtn">Delete</button>
  `;
  li.classList.add("todo-list-item");
  ul.appendChild(li);
}

function checkTodo(e) {
  let item = e.target.previousElementSibling;
  if (item.style.textDecoration === "line-through") {
    item.style.textDecoration = "none";
  } else {
    item.style.textDecoration = "line-through";
  }
}

function deleteTodo(e) {
  let item = e.target.parentNode;
  item.addEventListener("transitionend", function () {
    item.remove();
  });
  item.classList.add("todo-item-fall");
}

console.log ("script loaded");

const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

// Source of truth (load from localStorage or fallback to empty array) Prevents crashes on first load
let todos = JSON.parse(localStorage.getItem("todos")) || [];


// Render function: UI is rebuilt from state / Prevents duplication / Keeps logic clean
function renderTodos() {
    // Clear the list first
    list.innerHTML = "";

    // Loop through all todos
    todos.forEach(function (todo) {
        const li = document.createElement("li");
        li.textContent = todo;
        list.appendChild(li);
    });
}

// Handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const todoText = input.value.trim();
    if (todoText === "") return;

    // Update state
    todos.push(todoText);

    // Persist state
    localStorage.setItem("todos", JSON.stringify(todos));
    
    // Re-render UI
    renderTodos();

    input.value = "";
});

// Initial render on page load
renderTodos();
console.log ("script loaded");

// Grab references to HTML elements
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

// Applications state (source of truth) 
// Load from localStorage or start empty (fallback to empty array)
let todos = JSON.parse(localStorage.getItem("todos")) || [];


/*
Renders the UI based on current state.
Clears existing DOM and rebuilds from 'todos'.
*/
function renderTodos() {
    list.innerHTML = "";

    todos.forEach(function (todo, index) {
        const li = document.createElement("li");

        // Displays the todo text
        const span = document.createElement("span");
        span.textContent = todo;

        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";

        // Remove todo when clicked
        deleteBtn.addEventListener("click", function () {
            deleteTodo(index);
        });

        li.appendChild(span);
        li.appendChild(deleteBtn);
        list.appendChild(li);
    });
}


/*
Removes a todo from state by index,
updates storage, then re-renders UI
 */
function deleteTodo(index) {
    todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodos();
}

// Handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const todoText = input.value.trim();
    if (todoText === "") return;

    // Add new todo to state
    todos.push(todoText);

    // Persist updated state
    localStorage.setItem("todos", JSON.stringify(todos));
    
    // Re-render / Refresh UI
    renderTodos();

    // Clear input field
    input.value = "";
});

// Initial render when page loads
renderTodos();
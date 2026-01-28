console.log ("Stage 5 loaded");

// STATE (source of truth) / Load from localStorage or start empty (fallback to empty array)
let todos = JSON.parse(localStorage.getItem("todos")) || [];
let currentFilter = "all";

// DOM Elements
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const filters = document.getElementById("filters");

// Renders the UI based on current state / Clears existing DOM and rebuilds from 'todos'.
function renderTodos() {
    list.innerHTML = "";

    let filteredTodos = todos.filter(todo => {
        if (currentFilter === "completed") return todo.completed;
        if (currentFilter === "active") return !todo.completed;
        return true;
    });

    filteredTodos.forEach((todo, index) => {
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = todo.text;

        if (todo.completed) {
            span.classList.add("completed");
        }

        // Toggle completed on click
        span.addEventListener("click", () => {
            todo.completed = !todo.completed;
            saveAndRender();
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X"; // Label for button
        deleteBtn.addEventListener("click", () => {
            todos.splice(index, 1); // Remove the todo from state
            saveAndRender();
        });

        li.appendChild(span);
        li.appendChild(deleteBtn);

        list.appendChild(li);
    });
}

// Helpers
function saveAndRender() {
    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodos();
}

// Events
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const text = input.value.trim();
    if (text === "") return;

    todos.push({
        text: text,
        completed: false
    });

    input.value = "";
    saveAndRender();
});

filters.addEventListener("click", (e) => {
    if (e.target.tagName !== "BUTTON") return;

    // Update application state
    currentFilter = e.target.dataset.filter;

    // Remove active class from all buttons
    filters.querySelectorAll("button").forEach(btn => {
        btn.classList.remove("active");
    });

    // Add active class to clicked button
    e.target.classList.add("active");

    // Re-render UI
    renderTodos();
});

renderTodos();
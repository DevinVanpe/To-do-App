console.log ("script loaded")
let todos = [];

// document.getElementById - Grabs elements from HTML so JS can control them
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

// addEventListener("submit") - Runs code when: User presses Enter & User clicks Add
form.addEventListener("submit", function (event) {
    // event.preventDefault() - Stops browsers Default behaviour, submitting usually refreshes the page
    event.preventDefault();

    // input.value - Reads what the user typed
    const todoText = input.value;

    // Ignores empty input
    if (todoText === "") {
        return;
    }

    // createElement("li") - Creates a new list item in memory
    const li = document.createElement("li");
    li.textContent = todoText;

    // appendChild - Adds the new item to the page
    list.appendChild(li);

    // input.value = "" - Clears the text box after adding
    input.value = "";

});
console.log("Stage 6.1 loaded");


// APPLICATION STATE

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";


// DOM REFERENCES

const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addTaskBtn");
const list = document.getElementById("taskList");
const filters = document.getElementById("filters");


// RENDER LOGIC

function renderTasks() {
    list.innerHTML = "";

    tasks
        .filter(task => {
            if (currentFilter === "active") return !task.completed;
            if (currentFilter === "completed") return task.completed;
            return true;
        })
        .forEach((task, index) => {
            const li = document.createElement("li");
            li.className = task.completed ? "completed" : "";
            
            if (task.editing) {
                const input = document.createElement("input");
                input.className = "edit-input";
                input.value = task.text;
                li.appendChild(input);
                input.focus();

                input.addEventListener("keydown", e => {
                    if (e.key === "Enter") {
                        const trimmed = input.value.trim();
                        if (trimmed) task.text = trimmed;
                        task.editing = false;
                        saveAndRender();
                    }
                    if (e.key === "Escape") {
                        task.editing = false;
                        renderTasks();
                    }
                });

            } else {
                const span = document.createElement("span");
                span.textContent = task.text;
                li.appendChild(span);

                // Toggle completion on click
                span.addEventListener("click", () => {
                    task.completed = !task.completed;
                    saveAndRender();
                });

                // Double click to edit
                span.addEventListener("dblclick", () => {
                    task.editing = true;
                    renderTasks();
                });
            }

            // Delete button
            const delBtn = document.createElement("button");
            delBtn.textContent = "X";
            delBtn.addEventListener("click", () => {
                tasks.splice(index, 1);
                saveAndRender();
            });
            li.appendChild(delBtn);

            list.appendChild(li);
        });
}



// EDIT MODE

function startEdit(li, task) {
    li.classList.add("editing");
    li.innerHTML = "";

    const editInput = document.createElement("input");
    editInput.className = "edit-input";
    editInput.value = task.text;

    li.appendChild(editInput);
    editInput.focus();

    editInput.addEventListener("keydown", e => {
        if (e.key === "Enter") {
            const trimmed = editInput.value.trim();
            if (trimmed) {
                task.text = trimmed;
                saveAndRender();
            }
        }

        if (e.key === "Escape") {
            renderTasks();
        }
    });
}

// HELPERS

function saveAndRender() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}


// EVENTS

addBtn.addEventListener("click", () => {
    const text = input.value.trim();
    if (!text) return;

    tasks.push({
        text,
        completed: false
    });

    input.value = "";
    saveAndRender();
});

input.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        addBtn.click();
    }
});

filters.addEventListener("click", e => {
    if (e.target.tagName !== "BUTTON") return;
    currentFilter = e.target.dataset.filter;

    filters
        .querySelectorAll("button").forEach(btn => btn.classList.remove("active"));

    e.target.classList.add("active");

    renderTasks();
});


// INITIAL RENDER

renderTasks();
# Project Notes – Todo App

## Stage 1
- Built static UI with HTML & CSS
- Learned basic layout and form structure

## Stage 2
- Connected JavaScript to HTML
- Used `addEventListener` for form submission
- Prevented default browser refresh
- Dynamically created list items
- Learned importance of IDs and DOM selection

## Stage 3
- Introduced application state using an array
- Learned localStorage persistence
- UI is now rendered entirely from state
- Fixed bugs caused by redeclaring variables
- Learned importance of render-driven UI

## Stage 4 – 
- Learned to delete items by updating state, not the DOM
- Used array indexes to link UI actions to data
- Reinforced render-driven UI pattern
- Understood why direct DOM manipulation causes bugs


## Full Breakdown

### HTML
- `<form>` captures user input and triggers submit events
- `<input>` holds the todo text
- `<ul>` is an empty container populated by JavaScript
- HTML contains no logic — only structure

### CSS
- Flexbox is used to align input, buttons, and list items
- Styling is minimal and does not affect application logic
- CSS is only concerned with layout and appearance

### JavaScript (script.js)

#### Element Selection
- `getElementById` connects JavaScript to the DOM
- JavaScript can only control elements that already exist

#### State
- `todos` array is the single source of truth
- UI never stores data — it reflects state

#### localStorage
- Used to persist todos between page reloads
- Requires JSON serialization

#### renderTodos()
- Clears the existing UI
- Rebuilds the list from the current state
- Prevents duplication and UI inconsistencies

#### deleteTodo(index)
- Removes a todo from state
- Keeps storage and UI in sync
- Uses index to link UI actions to data

#### Form Submission
- Prevents default browser refresh
- Validates input
- Updates state, storage, and UI in order

## Key Takeaways So Far
- JavaScript controls behaviour and data flow, not just visual changes
- The DOM is a *rendered output* of application state, not the source of truth
- Application state should live in JavaScript data structures (arrays / objects)
- UI should always be rebuilt from state to avoid bugs and duplication
- `localStorage` allows simple persistence but only stores strings
- `JSON.stringify` and `JSON.parse` are required to store structured data
- Code order matters: elements must exist before JavaScript can interact with them
- Redeclaring variables or mutating the DOM directly leads to hard-to-find bugs
- Debugging with `console.log` is essential for understanding execution flow
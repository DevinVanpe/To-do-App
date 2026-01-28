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
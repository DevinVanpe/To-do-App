# Project Notes – Todo App

## Stage 1 – Static Structure
- Built static UI with HTML & CSS
- Learned basic layout, form structure, and element hierarchy

## Stage 2 – JavaScript Interactivity
- Connected JavaScript to HTML
- Used `addEventListener` for form submission
- Prevented default browser refresh
- Dynamically created list items
- Learned importance of IDs and DOM selection

## Stage 3 – State & Persistence
- Introduced application state using an array
- Implemented localStorage persistence
- UI is rendered entirely from state
- Fixed bugs caused by redeclaring variables
- Learned why state should be the single source of truth

## Stage 4 – Deletion & Render Discipline
- Implemented delete functionality via state updates
- Learned to avoid direct DOM mutation
- Used array indexes to link UI actions to data
- Reinforced render-driven UI pattern
- Understood how improper DOM manipulation causes bugs

## Stage 5 – Completion, Filtering & UI State

### Data Model
- Todos upgraded from simple strings to objects:
  - `text`
  - `completed`
- Application state models real world data more accurately

### Completion Logic
- Clicking a todo toggles its completed state
- Completion affects both rendering and persistence
- Completed state is purely data-driven

### Filtering
- Filters do not change stored data
- Filters control **what is rendered**, not what exists
- `currentFilter` is ephemeral UI state
- UI is rebuilt from filtered state every render

### UI State vs Application State
- Application state lives in JavaScript objects and arrays
- Visual state is represented with CSS classes
- Events synchronize the two without mixing responsibilities

### Styling & UX Improvements
- Introduced dark theme for reduced eye strain
- Neon accents used sparingly to highlight interaction
- Filter buttons styled as tabs with active indication
- Input field styled to match application theme
- Hover and focus states added for clarity
- UI polish applied without impacting logic

---

## Full Breakdown

### HTML
- `<form>` captures user input
- `<input>` holds todo text
- `<ul>` is an empty container populated by JavaScript
- HTML contains structure only, no logic

### CSS
- Flexbox used for layout and alignment
- Styling does not influence application logic
- Visual feedback handled via classes
- Neon effects reserved for focus and active states

### JavaScript (script.js)

#### Element Selection
- `getElementById` connects JavaScript to the DOM
- JavaScript can only interact with existing elements

#### State
- `todos` array is the single source of truth
- `currentFilter` controls view logic only

#### localStorage
- Persists todos across reloads
- Requires JSON serialization and parsing

#### renderTodos()
- Clears the existing UI
- Applies filtering logic
- Rebuilds UI from state every time
- Prevents duplication and desynchronisation

#### Deletion
- Removes todos from state, not the DOM
- Keeps storage and UI consistent

#### Form Submission
- Prevents default browser refresh
- Validates input
- Updates state → storage → UI in order

---

## Key Takeaways

- JavaScript controls behaviour, data flow, and application state
- The DOM is a rendered output, not the source of truth
- Application state should live in JavaScript data structures
- UI should always be rebuilt from state to avoid bugs
- Visual state should not be used as logic
- `localStorage` only stores strings
- `JSON.stringify` and `JSON.parse` enable structured persistence
- Code order matters — elements must exist before interaction
- Direct DOM mutation leads to subtle bugs
- Debugging with `console.log` clarifies execution flow
- Application state should model real-world data
- UI is a filtered projection of state
- User interactions update state first, then re-render
- Some state is persistent (data), some is ephemeral (UI)
- Early architectural decisions affect scalability
- Clean render cycles make new features easier to add

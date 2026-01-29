# Project Notes – Prysm Task App

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
- Upgraded todos from strings to objects
- Introduced completed state per task
- Clicking a task toggles completion
- Filters control rendered output, not stored data
- UI rebuilt from filtered state every render
- localStorage persists full task objects
- Visual filter state added for UX clarity

## Stage 6 – Editing & UI Polish (Prysm)

### Task Editing
- Tasks can be edited via double-click
- Editing replaces text with an input field
- Enter commits changes
- Escape cancels edits
- Editing updates application state, not DOM directly

### Keyboard Interaction
- Keyboard controls treated as first-class UI input
- Improves accessibility and usability
- Reinforced importance of event types (keydown vs click)

### UI Architecture
- Task list is a rendered projection of state
- No persistent UI state stored in DOM
- CSS strictly handles presentation
- JavaScript strictly handles behavior and data

### Styling & UX
- Dark theme refined for long sessions
- Reduced neon glare in favor of clean, sharp accents
- Title animation slowed for subtle “breathing” effect
- Filter buttons clearly indicate active state
- Task hover glow restored for visual feedback


---


## Full Breakdown

### HTML
- Structure only no logic
- .app wraps the entire application
- <h1> used for branding (Prysm)
- <input> and <button> grouped for task creation
- <ul> acts as render target for tasks
- Filter buttons define UI intent via data-filter

### CSS
- Controls layout, spacing, color, and animation
- No business logic
- Visual feedback reinforces state changes
- Designed to support scalability without rewrites

## JavaScript (script.js)

### State
- tasks array is the single source of truth
- Each task is an object (text, completed)
- UI never stores permanent data

### Rendering
- UI cleared and rebuilt every render
- Prevents duplication and desync bugs
- Filters apply only at render time

### Editing
- Edit mode is temporary UI state
- Final result always flows back into state
- State changes trigger full re-render

---


## Key Takeaways (Updated)

- JavaScript controls behavior and data flow, not visuals
- The DOM is a rendered output, not the source of truth
- Application state should live in JavaScript objects
- UI should always be rebuilt from state
- Editing is a state transition, not a DOM mutation
- Keyboard interactions are part of core UX
- Visual polish should never compromise architecture
- Clean separation of concerns prevents feature regression
- Small structural decisions scale into big wins later
- Now have a frontend architecture ready for a backend
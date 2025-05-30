# Kanban Task Manager

A responsive and interactive Kanban board web application for task management. Supports creating, editing, deleting tasks, persistent storage, sidebar control, and dark/light theme toggling.

## Overview

This Kanban Task Manager enables users to organize tasks visually into three columns: To Do, Doing, and Done. It initially fetches task data from a live API, stores all tasks in the browser's localStorage, and keeps the data persistent between sessions. The app is fully responsive and features a toggleable sidebar and dark/light mode switch for enhanced user experience.

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Styling and responsive design
- **JavaScript(ES6+)** -  Core logic, DOM manipulation, event handling
- **LocalStorage API** - Persisting user tasks locally
- **Fetch API** - Retrieving initial tasks from a remote API
- **Custom SVG icons** -  For theme toggle and sidebar buttons (Provided for me in the assets folder).

## Features

- **Initial Data Fetching:** Loads tasks from an external API on first visit.
- **Local Storage Persistence:** Saves all changes locally to keep data after page reloads.
- **Task Management:** Create, edit, delete tasks with modals.
- **Theme Toggle:** Switch between dark and light themes with custom icons.

## Setup Instructions

1. **Clone or Download Repository**/ Download the ZIP and extract it.
2. **Open the App:** Open the index.html file in any modern browser (Chrome, Firefox, Edge, Safari).
3. **Icons and Assets:** Ensure the /assets/icons folder remains in place as it contains the downloaded SVG icons used in the theme toggle and sidebar buttons.

## Usage Guide

### Adding Tasks

- Click the **Add New Task** button located in the sidebar or header.
- A modal window will open.
- Enter the **Task Title, Description,** and select a **Status** (To Do, Doing, Done).
- Click **Create Task** to add it to the board.
- The task will appear in the selected column and be saved automatically.
  
### Editing and Deleting Tasks

- Click on any task card on the board.
- The task modal will open with pre-filled task details.
- Modify the title, description, or status as needed.
- Click **Save Changes** to update the task.
- To remove the task, click the **Delete Task** button.
- Changes are saved immediately in localStorage.

### Sidebar Interaction

- Use the **Hide Sidebar Button** to hide the sidebar.
- Use the **Show Sidebar Button Icon** at the bottom-left side of the task-board.

### Theme Toggling

- Click the Theme Toggle Button to switch between dark and light modes.
- The toggle uses downloaded custom icons stored in the **/assets/icons** directory.
- The selected theme preference is saved and applied on page reload.

## Challenges Faced

- **Responsive Sidebar Behavior:** Designing a sidebar that works intuitively across screen sizes, especially mobile devices where screen space is limited. **(unresolved)**
- **Modal Management:** Handling multiple modals (add task and edit task) with seamless open/close transitions without conflicts.
- **Task State Persistence:** Guaranteeing every add, edit, and delete operation updates the UI and localStorage correctly in real time.
- **Theme and Icon Integration:** Integrating custom icons for theme toggling and sidebar buttons while maintaining performance and accessibility.
- **Loading message not visible:** The loading message is not visible because of the loading speed of the local storage,however when the tasks are loaded from the API, it definitely appears.
- The **Hide Sidebar** button becomes misaligned when the "Show Sidebar" button is clicked. When the sidebar reappears, the button loses its proper alignment and only returns to its correct position after a page refresh.

I have deployed this project on netlify, and you can access it using the following link: https://kanban-task-manager-10915b.netlify.app/

You can also check out the full explanation video on the following link: https://www.veed.io/view/18e53990-7e13-4d57-84dc-d95c794f22ae?panel=share
  
P.S. This project is open for collaboration. My contacts are just below.

## Contact

[Runyararo Marongwe/mrunya87@gmail.com] [https://github.com/Rue87]





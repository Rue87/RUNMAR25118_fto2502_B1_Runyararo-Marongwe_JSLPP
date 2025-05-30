/*new main.js code

import { clearExistingTasks, renderTasks } from "./ui/render.js";
import {
  setupModalCloseHandler,
  setupNewTaskModalHandler,
} from "./ui/modalHandlers.js";

let loadingMessageElement;
let errorMessageElement;

/**
 * Displays the loading message if the element is available.
 
function showLoading() {
  if (loadingMessageElement) {
    loadingMessageElement.style.display = "block";
  }
}

/**
 * Hides the loading message.
 
function hideLoading() {
  if (loadingMessageElement) {
    loadingMessageElement.style.display = "none";
  }
}

/**
 * Displays an error message.
 * @param {string} [message="Failed to load tasks. Please try again later."] - The error message to display.
 
function showError(message = "Failed to load tasks. Please try again later.") {
  if (errorMessageElement) {
    errorMessageElement.textContent = message;
    // Ensure the error message is visible
    errorMessageElement.style.display = "block";
    setTimeout(() => {
      errorMessageElement.style.display = "none";
    }, 5000); // Hide after 5 seconds
  }
}

/**
 * Hides the error message.
 
function hideError() {
  if (errorMessageElement) {
    errorMessageElement.style.display = "none";
  }
}

/**
 * Fetches tasks from the API.
 * @returns {Promise<Array>} A promise that resolves to an array of tasks
 * @throws {Error} If the API request fails.
 
async function fetchTasksFromAPI() {
  try {
    const response = await fetch("https://jsl-kanban-api.vercel.app");
    if (!response.ok) throw new Error("API request failed");
    const tasks = await response.json();
    return tasks;
  } catch (err) {
    console.error("Failed to fetch tasks from API:", err);
    throw err;
  }
}

/**
 * Initializes the Kanban task board: load from localStorage or API, and render tasks.
 
async function initTaskBoard() {
  showLoading();
  hideError();

  // Load from localStorage if available
  const savedTasks = localStorage.getItem("kanbanTasks");
  if (savedTasks !== null) {
    const tasksArray = JSON.parse(savedTasks);
    renderTasks(tasksArray);
    console.log("Tasks loaded from local storage:", tasksArray);
    hideLoading(); // Hide loading if loaded from local storage
    return; // Exit if tasks are loaded from local storage
  }

  // Try fetching from API
  try {
    const tasks = await fetchTasksFromAPI();
    console.log("Fetched tasks:", tasks);

    localStorage.setItem("kanbanTasks", JSON.stringify(tasks));
    clearExistingTasks();
    renderTasks(tasks);
  } catch (error) {
    console.log("Error during task board initialization:", error);
    showError();
  } finally {
    hideLoading(); // Always hide loading after API attempt
  }
}

//=== Sidebar Toggle ===
/**
 * Sets up all sidebar-related toggle buttons for both desktop and mobile.
 
const sidebar = document.getElementById("side-bar-div");
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const hideSidebarBtn = document.getElementById("hide-sidebar-btn");
const showSidebarBtn = document.getElementById("show-sidebar-btn");
const closeSidebarBtn = document.getElementById("close-sidebar-btn");
const body = document.body;

// ---Mobile: Open sidebar via logo
mobileMenuToggle.addEventListener("click", () => {
  sidebar.classList.add("show-sidebar");
  body.classList.add("mobile-menu-active");
});

// ---Mobile:Close sidebar ---
closeSidebarBtn.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
  body.classList.remove("mobile-menu-active");
});

// ---Desktop: Hide sidebar---
hideSidebarBtn.addEventListener("click", () => {
  sidebar.classList.add("hidden");
  hideSidebarBtn.style.display = "none";
  showSidebarBtn.style.display = "block";
});

// ---Desktop: Show sidebar ---
showSidebarBtn.addEventListener("click", () => {
  sidebar.classList.remove("hidden");
  hideSidebarBtn.style.display = "block";
  showSidebarBtn.style.display = "none";
});

// Initialize everything when the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  loadingMessageElement = document.getElementById("loading-message");
  errorMessageElement = document.getElementById("error-message");
  initTaskBoard();
  setupModalCloseHandler();
  setupNewTaskModalHandler();
  // setupThemeToggle() // REMOVED: This is now handled by theme-toggle.js

  console.log("Sidebar:", sidebar);
  console.log("Mobile menu toggle:", mobileMenuToggle);
  console.log("Close sidebar button:", closeSidebarBtn);
  console.log("Hide button:", hideSidebarBtn);
  console.log("Show button:", showSidebarBtn);
});


  // HIGHLIGHT START
  // NEW: Listen for the custom 'themeChanged' event and re-render tasks
  document.addEventListener('themeChanged', () => {
    // Reload tasks from local storage to ensure we have the latest state
    // before re-rendering with potentially new theme-dependent styles.
    const currentTasks = JSON.parse(localStorage.getItem("kanbanTasks")) || [];
    clearExistingTasks(); // Clear old tasks before re-rendering
    renderTasks(currentTasks); // Re-render tasks with the current theme
  });
HIGHLIGHT END
*/

//old main.js code

import { clearExistingTasks, renderTasks } from "./ui/render.js";
import {
  setupModalCloseHandler,
  setupNewTaskModalHandler,
} from "./ui/modalHandlers.js";

let loadingMessageElement;
let errorMessageElement;

//Displays the loading message if the element is avaible.

function showLoading() {
  if (loadingMessageElement) {
    loadingMessageElement.style.display = "block";
  }
}
/**
 * Hides the loading message.
 */
function hideLoading() {
  if (loadingMessageElement) {
    loadingMessageElement.style.display = "none";
  }
}

/**
 * Displays an error message.
  @param {string} [message="Failed to load tasks. Please try again later."] - The error message to display.
 */

function showError(message = "Failed to load tasks. Please try again later.") {
  if (errorMessageElement) {
    errorMessageElement.textContent = message;
    // Ensure the error message is visible
    errorMessageElement.style.display = "block";
    setTimeout(() => {
      errorMessageElement.style.display = "none";
    }, 5000); // Hide after 5 seconds
  }
}
/**
 * Hides the error message.
 */
function hideError() {
  if (errorMessageElement) {
    errorMessageElement.style.display = "none";
  }
}

/**
 * Fetches tasks from the API.
 //@returns {Promise<Array>} A promise that resolves to an array of tasks
 //  @throws {Error} If the API request fails.
 */
async function fetchTasksFromAPI() {
  try {
    const response = await fetch("https://jsl-kanban-api.vercel.app");
    if (!response.ok) throw new Error("API request failed");
    const tasks = await response.json();
    return tasks;
  } catch (err) {
    console.error("Failed to fetch tasks from API:", err);
    throw err;
  }
}

/**
 * Initializes the Kanban task board: load from localStorage or API, and render tasks.
 */
async function initTaskBoard() {
  showLoading();
  hideError();

  // Load from localStorage if available
  const savedTasks = localStorage.getItem("kanbanTasks");
  if (savedTasks !== null) {
    const tasksArray = JSON.parse(savedTasks);
    renderTasks(tasksArray);
    console.log("Tasks loaded from local storage:", tasksArray);
    hideLoading();
    return;
  }

  //Try fetching from API
  try {
    const tasks = await fetchTasksFromAPI();
    console.log("Fetched tasks:", tasks);

    localStorage.setItem("kanbanTasks", JSON.stringify(tasks));
    clearExistingTasks();
    renderTasks(tasks);
    hideLoading();
  } catch (error) {
    console.log("Error during task board initialization:", error);
    showError();
  } finally {
    hideLoading();
  }
}

/* === Theme Toggle ===

  Sets up theme toggle (light/dark mode).
 */
function setupThemeToggle() {
  const themeSwitch = document.getElementById("theme-switch");
  const root = document.documentElement;
  const savedTheme = localStorage.getItem("theme") || "light";

  themeSwitch.checked = savedTheme === "dark";
  root.setAttribute("data-theme", savedTheme);

  //Listen to theme toggle
  themeSwitch.addEventListener("change", () => {
    const newTheme = themeSwitch.checked ? "dark" : "light";
    root.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });
}

//=== Sidebar Toggle ===

/* Sets up all sidebar-related toggle buttons for both desktop and mobile.
 */

const sidebar = document.getElementById("side-bar-div");
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const hideSidebarBtn = document.getElementById("hide-sidebar-btn");
const showSidebarBtn = document.getElementById("show-sidebar-btn");
const closeSidebarBtn = document.getElementById("close-sidebar-btn");
const body = document.body;

// ---Mobile: Open sidebar via logo
mobileMenuToggle.addEventListener("click", () => {
  sidebar.classList.add("show-sidebar");
  body.classList.add("mobile-menu-active");
});

// ---Mobile:Close sidebar ---
closeSidebarBtn.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
  body.classList.remove("mobile-menu-active");
});

// ---Desktop: Hide sidebar---
hideSidebarBtn.addEventListener("click", () => {
  sidebar.classList.add("hidden");
  hideSidebarBtn.style.display = "none";
  showSidebarBtn.style.display = "block";
});

// ---Desktop: Show sidebar ---
showSidebarBtn.addEventListener("click", () => {
  sidebar.classList.remove("hidden");
  hideSidebarBtn.style.display = "block";
  showSidebarBtn.style.display = "none";
});

// Initialize everything when the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  loadingMessageElement = document.getElementById("loading-message");
  errorMessageElement = document.getElementById("error-message");
  initTaskBoard();
  setupModalCloseHandler();
  setupNewTaskModalHandler();
  setupThemeToggle();
  setupSidebarToggle();

  console.log("Sidebar:", sidebar);
  console.log("Mobile menu toggle:", mobileMenuToggle);
  console.log("Close sidebar button:", closeSidebarBtn);
  console.log("Hide button:", hideSidebarBtn);
  console.log("Show button:", showSidebarBtn);
});

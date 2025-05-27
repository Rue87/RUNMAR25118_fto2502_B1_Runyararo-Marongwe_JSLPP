import { clearExistingTasks, renderTasks } from "./ui/render.js";
import {
  setupModalCloseHandler,
  setupNewTaskModalHandler,
} from "./ui/modalHandlers.js";

let loadingMessageElement;
let errorMessageElement;

 function showLoading() {
  if(loadingMessageElement) {
  loadingMessageElement.style.display = "block";
  }
}
  function hideLoading() {
    if (loadingMessageElement) {
      loadingMessageElement.style.display = "none";
    }
  }
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

    function hideError() {
      if (errorMessageElement) {
        errorMessageElement.style.display = "none";
      }
    }

/**
 * Fetches tasks from the API.
 * @returns {Promise<Array>} A promise that resolves to an array of tasks, or an empty array on error.
 */
async function fetchTasksFromAPI() {
  try {
    const response = await fetch("https://jsl-kanban-api.vercel.app");
    if (!response.ok) throw new Error("API request failed");
    const tasks = await response.json();
    return tasks;
  } catch (err) {
    console.error("Failed to fetch tasks from API:", err);
    throw err; // fallback: empty list
  }
}

async function initTaskBoard() {

  showLoading();
  hideError();

  try {
  // Wait for tasks to be fetched before hiding loading message
  const tasks = await fetchTasksFromAPI();
  console.log("Fetched tasks:", tasks);
  clearExistingTasks();
  renderTasks(tasks);

 
  }catch (error) {
    console.log("Error during task board initialization:", error);
     showError();
  } finally { 
    hideLoading();
  } 
   
  }


  setupModalCloseHandler();
  setupNewTaskModalHandler();

document.addEventListener("DOMContentLoaded", () => {
  loadingMessageElement = document.getElementById("loading-message");
  errorMessageElement = document.getElementById("error-message");
  initTaskBoard();
});



import { clearExistingTasks, renderTasks } from "./ui/render.js";
import {
  setupModalCloseHandler,
  setupNewTaskModalHandler,
} from "./ui/modalHandlers.js";

let loadingMessageElement;

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
    return []; // fallback: empty list
  }
}

async function initTaskBoard() {

  showLoading();

  try {
  // Wait for tasks to be fetched before hiding loading message
  const tasks = await fetchTasksFromAPI();

  clearExistingTasks();
  renderTasks(tasks);

  //Add a delay before hiding
  setTimeout(() => {
    hideLoading();
  }, 5000); 
  }catch (error) {
    console.log("Error during task board initialization:", error);
  } finally {  hideLoading();
  }


  setupModalCloseHandler();
  setupNewTaskModalHandler();
}
document.addEventListener("DOMContentLoaded", () => {
  loadingMessageElement = document.getElementById("loading-message");
  initTaskBoard();
});



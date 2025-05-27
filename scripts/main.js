import { clearExistingTasks, renderTasks } from "./ui/render.js";
import {
  setupModalCloseHandler,
  setupNewTaskModalHandler,
} from "./ui/modalHandlers.js";

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
  const tasks = await fetchTasksFromAPI();
  clearExistingTasks();
  renderTasks(tasks);
  setupModalCloseHandler();
  setupNewTaskModalHandler();
}

document.addEventListener("DOMContentLoaded", initTaskBoard);

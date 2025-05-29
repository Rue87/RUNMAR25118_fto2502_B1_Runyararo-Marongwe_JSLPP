import {
  loadTasksFromStorage,
  saveTasksToStorage,
} from "../utils/localStorage.js";
import { clearExistingTasks, renderTasks } from "../ui/render.js";
import { resetForm } from "./formUtils.js";

/**
 * Gathers form input and submits a new task to the API.
 * On success, re-fetches all tasks and re-renders the board.
 */

export async function addNewTask() {
  const title = document.getElementById("title-input").value.trim();
  const description = document.getElementById("desc-input").value.trim();
  const status = document.getElementById("select-status").value;
  const overlay = document.querySelector(".modal-overlay");

  if (!title) return;

  const newTasks = {
    title,
    description,
    status,
  };

  try {
    // Send new task to API
    const response = await fetch("https://jsl-kanban-api.vercel.app", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTasks),
    });
    if (!response.ok) throw new Error("Failed to add new task");

     // Re-fetch all tasks after successful addition
    const tasksResponse = await fetch("https://jsl-kanban-api.vercel.app");
    const tasks = await tasksResponse.json();

    clearExistingTasks();
    renderTasks(tasks);
    resetForm();
    overlay.close();
  } catch (error) {
    console.error("Error adding new task:", error);
    alert("Failed to add new task. Please try again later.");
  }
}

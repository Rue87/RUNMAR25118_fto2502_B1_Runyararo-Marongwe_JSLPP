import { createTaskElement } from "./taskElement.js";

/**
 * Get the task container element for a given status.
 * @param {string} status - Task status (e.g. "todo", "doing", "done").
 * @returns {HTMLElement|null} Task container element or null if not found.
 */
function getTaskContainerByStatus(status) {
  const column = document.querySelector(`.column-div[data-status="${status}"]`);
  return column ? column.querySelector(".tasks-container") : null;
}

/**
 * Clears all existing task-divs from all task containers.
 */
export function clearExistingTasks() {
  document.querySelectorAll(".tasks-container").forEach((container) => {
    container.innerHTML = "";
  });
}

/**
 * Renders tasks to their appropriate columns.
 * @param {Array<Object>} tasks - List of task objects to render.
 */
export function renderTasks(tasks) {
  console.log("Rendering tasks:", tasks);
  tasks.forEach((task) => {
    const container = getTaskContainerByStatus(task.status);
    if (container) {
      console.log(`Appending task "${task.title}" to`, container);
      const taskElement = createTaskElement(task);
      console.log("Created task element:", taskElement);
      container.appendChild(taskElement);
    }
  });
}

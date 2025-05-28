import { addNewTask } from "../tasks/taskManager.js";
import { renderTasks, clearExistingTasks } from  "./render.js";

let currentEditingTaskId = null;
let isEditing = false;

export function setupModalCloseHandler() {
  const modal = document.getElementById("task-modal");
  const closeBtn = document.getElementById("close-modal-btn");
  closeBtn.addEventListener("click", () => modal.close());
}

export function setupNewTaskModalHandler() {
  const newTaskModal = document.querySelector(".modal-overlay")
  const form = document.getElementById("new-task-modal-window");
  //const modal = document.getElementById("task-modal");
  //const overlay = document.querySelector(".modal-overlay");
  const newTaskBtn = document.getElementById("add-new-task-btn");
  const cancelBtn = document.getElementById("cancel-add-btn");

  newTaskBtn.addEventListener("click", () => {
    form.reset(); // Clear the form fields
    newTaskModal.showModal(); // Show the modal for adding a new task
  
  });
  cancelBtn.addEventListener("click", () =>{
    newTaskModal.close(); 
  });

    
// Unified submit handler for both adding and editing tasks
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("title-input").value.trim();
    const description = document.getElementById("desc-input").value.trim();
    const status = document.getElementById("select-status").value;

     if (!title || !status) {
      alert("Title and status are required.");
      return;
    }

    let tasks = JSON.parse(localStorage.getItem("kanbanTasks")) || [];
    const newTask = {
      id: Date.now(), 
      title,
      description,
      status,
    };
    tasks.push(newTask);
     //Save and re-render tasks after editing
    localStorage.setItem("kanbanTasks", JSON.stringify(tasks));
    clearExistingTasks();
    renderTasks(tasks);
    
    // Reset form and close modal
    form.reset();
    newTaskModal.close();
  });
}
   
/**
 * Opens the modal and fills in the task's details for editing.
 * Also stores the task ID for use when saving edits.
 * @param {Object} task  - The task object to edit
 */
export function openTaskModal(task) {
  const modal = document.getElementById("task-modal");
  document.getElementById("task-title").value = task.title;
  document.getElementById("task-desc").value = task.description;
  document.getElementById("task-status").value = task.status;

 
  isEditing = true; // set editing mode
  currentEditingTaskId = task.id;// store the task id for editing
  modal.showModal();
}

//Save changes button(inside Task Modal form)
document.getElementById("task-form").addEventListener("submit", (e) => {  
  e.preventDefault();
  const title = document.getElementById("task-title").value.trim();
  const description = document.getElementById("task-desc").value.trim();
  const status = document.getElementById("task-status").value;
  if (!title || !status) {
    alert("Title and status are required.");
    return;
  }
  let tasks = JSON.parse(localStorage.getItem("kanbanTasks")) || [];
  const taskIndex = tasks.findIndex(task => task.id === currentEditingTaskId);

  if (taskIndex !== -1) {
    // Update the existing task
    tasks[taskIndex] = {
      ...tasks[taskIndex],
      title,
      description,
      status,
    };
    localStorage.setItem("kanbanTasks", JSON.stringify(tasks));
    clearExistingTasks();
    renderTasks(tasks);
    document.getElementById("task-modal").close(); 
    isEditing = false;
    currentEditingTaskId = null; // Reset the editing task ID
  }
  });

  //Delete Task button(inside Task Modal)
document.getElementById("delete-task-btn").addEventListener("click", () => {
  if(!confirm("Are you sure you want to delete this task?")) return;

  let tasks = JSON.parse(localStorage.getItem("kanbanTasks")) || [];
  const updatedTasks = tasks.filter(task => task.id !== currentEditingTaskId);

  localStorage.setItem("kanbanTasks", JSON.stringify(updatedTasks));
  clearExistingTasks();
  renderTasks(updatedTasks);
  document.getElementById("task-modal").close();
  isEditing = false;
  currentEditingTaskId = null; // Reset the editing task ID
}
);


    

    

  



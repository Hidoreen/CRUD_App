
const addTaskBtn = document.querySelector('.addNewTask');
const modal = document.getElementById('dialogPop');
const closeDialogeBtn = document.getElementById('cancelBtn');
const closeDialogeIcon = document.querySelector('.closeBtn')
const errorMsg = document.querySelector('.errorMsg')
const taskTitle = document.getElementById('taskTitle');
const taskDetailForm = document.getElementById('taskDetailForm');
const taskDate = document.getElementById('taskDate');
const taskDetails = document.getElementById('taskDetails');
const tasks = document.querySelector('.tasks');
// const submitBtn = document.getElementById('submitBtn');


export default function createTodoApp() {

  //eventListeners
  addTaskBtn.addEventListener('click', () => {
    modal.showModal();
  });

  closeDialogeBtn.addEventListener('click', closeModal)

  closeDialogeIcon.addEventListener('click', closeModal)

  taskDetailForm.addEventListener('submit', dataValidation)

 //functions 
  function closeModal() {
    modal.close();
}

function dataValidation(e) {

  e.preventDefault();

  if(taskTitle.value === '') {
    errorMsg.style.display = 'block';
    errorMsg.textContent = 'Task can not be empty'
  } else {
    errorMsg.style.display = 'none';
    errorMsg.textContent = '';
    acceptData();
  }
}

let data = {};
function acceptData() {

 data['title'] = taskTitle.value;
 data['date'] = taskDate.value;
 data['details'] = taskDetails.value;

 createTask();

 //IIFE to take close the modal after submitting
 (() => {
  closeModal()
 })()
}

function createTask() {
  tasks.innerHTML += ` <div class="task">
    <h4>${data.title}</h4>
    <p class="date">${data.date}</p>
    <p class="details">${data.details}</p>
    <span class="taskEditors">
      <i onClick="deleteTask(this)" class="fa fa-trash" aria-hidden="true"></i>
      <i onClick="editTask(this)" class="fa fa-pencil" aria-hidden="true"></i>
    </span>
  </div> `;
  resetTask();
}

//globally defined the delete and edit function, not the best practice
window.deleteTask = function(e) {
  e.parentElement.parentElement.remove();
};

window.editTask = function(e) {
  taskTitle.value = e.parentElement.previousSibling.innerHTML;
  
};


} 

const resetTask = () => {
  taskTitle.value = '';
  taskDate.value = '';
  taskDetails.value = '';


}

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
}

function createTask() {
  tasks.innerHTML += ` <div class="task">
    <h4>${data.title}</h4>
    <p class="date">${data.date}</p>
    <p class="details">${data.details}</p>
    <span class="taskEditors">
      <i class="fa fa-trash" aria-hidden="true"></i>
      <i class="fa fa-pencil" aria-hidden="true"></i>
    </span>
  </div> `
}

} 
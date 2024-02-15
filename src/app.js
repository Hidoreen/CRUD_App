
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

  closeDialogeBtn.addEventListener('click', () => {
    resetTask();
    closeModal();
  })

  closeDialogeIcon.addEventListener('click', closeModal)

  taskDetailForm.addEventListener('submit', dataValidation)

 //functions 
    function closeModal() {
      modal.close();
  }

  function dataValidation(e) {

    e.preventDefault();

    if(taskTitle.value === '') {
      errorMsg.textContent = 'Task can not be empty';
      errorMsg.style.display = 'block';
    } else {
      errorMsg.style.display = 'none';
      errorMsg.textContent = '';
      acceptData();
    }
  }

  //accept data and store it in local storage
  let data = [];
  function acceptData() {

    const newTask = {
      title: taskTitle.value,
      date: taskDate.value,
      details: taskDetails.value,
    }

    data.unshift(newTask);

    localStorage.setItem('data', JSON.stringify(data));

    createTask();

    //IIFE to take close the modal after submitting
    (() => {
      closeModal()
    })()
  }

  function createTask() {
    tasks.innerHTML = "";
    data.map((selectedElement, index) => {
      tasks.innerHTML += `<div class="task" 
      id = ${index}>
      <h4 class="h4">${selectedElement.title}</h4>
      <p class="date">${selectedElement.date}</p>
      <p class="details">${selectedElement.details}</p>
      <span class="taskEditors">
        <i onClick="deleteTask(this)" class="fa fa-trash" aria-hidden="true"></i>
        <i onClick="editTask(this)" class="fa fa-pencil" aria-hidden="true"></i>
      </span>
    </div> `;
    })

    resetTask();
  }

  //globally defined the delete and edit function
  window.deleteTask = function(e) {
    e.parentElement.parentElement.remove();
    data.splice(e.parentElement.parentElement.index, 1);
    
    localStorage.setItem('data', JSON.stringify(data));
  };

  function editTaskDialog(taskTitle, taskDate, taskDetails) {

    document.getElementById('taskTitle').value = taskTitle;
    document.getElementById('taskDate').value = taskDate;
    document.getElementById('taskDetails').value = taskDetails;

    // Open the dialog
    modal.showModal();
  }


  window.editTask = function(e) {
    const taskElement = e.parentElement.parentElement;

    const taskIndex = taskElement.getAttribute('id');
    const taskTitle = taskElement.querySelector('.h4').textContent;
    const taskDate = taskElement.querySelector('.date').textContent;
    const taskDetails = taskElement.querySelector('.details').textContent;

    editTaskDialog(taskTitle, taskDate, taskDetails);

    // Remove the task from the list
    taskElement.remove();

    data[taskIndex] = {
      title: taskTitle.value,
      date: taskDate.value,
      details: taskDetails.value,
  };

    data.splice(e.parentElement.parentElement.index, 1);
    localStorage.setItem('data', JSON.stringify(data));


  };
  
  window.onload = function() {
      // Retrieve data from local storage
      const taskArr = JSON.parse(localStorage.getItem('data')) || [];
  
      // Render tasks on the UI
      taskArr.forEach(task => {
          tasks.innerHTML += ` 
              <div class="task">
                  <h4 class="h4">${task.title}</h4>
                  <p class="date">${task.date}</p>
                  <p class="details">${task.details}</p>
                  <span class="taskEditors">
                      <i onclick="deleteTask(this)" class="fa fa-trash" aria-hidden="true"></i>
                      <i onclick="editTask(this)" class="fa fa-pencil" aria-hidden="true"></i>
                  </span>
              </div> `;
      });
  };

} 

const resetTask = () => {
  taskTitle.value = '';
  taskDate.value = '';
  taskDetails.value = '';
}
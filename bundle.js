/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createTodoApp)\n/* harmony export */ });\n\nconst addTaskBtn = document.querySelector('.addNewTask');\nconst modal = document.getElementById('dialogPop');\nconst closeDialogeBtn = document.getElementById('cancelBtn');\nconst closeDialogeIcon = document.querySelector('.closeBtn')\nconst errorMsg = document.querySelector('.errorMsg')\nconst taskTitle = document.getElementById('taskTitle');\nconst taskDetailForm = document.getElementById('taskDetailForm');\nconst taskDate = document.getElementById('taskDate');\nconst taskDetails = document.getElementById('taskDetails');\nconst tasks = document.querySelector('.tasks');\n// const submitBtn = document.getElementById('submitBtn');\n\n\nfunction createTodoApp() {\n\n  //eventListeners\n  addTaskBtn.addEventListener('click', () => {\n    modal.showModal();\n  });\n\n  closeDialogeBtn.addEventListener('click', () => {\n    resetTask();\n    closeModal();\n  })\n\n  closeDialogeIcon.addEventListener('click', closeModal)\n\n  taskDetailForm.addEventListener('submit', dataValidation)\n\n //functions \n    function closeModal() {\n      modal.close();\n  }\n\n  function dataValidation(e) {\n\n    e.preventDefault();\n\n    if(taskTitle.value === '') {\n      errorMsg.textContent = 'Task can not be empty';\n      errorMsg.style.display = 'block';\n    } else {\n      errorMsg.style.display = 'none';\n      errorMsg.textContent = '';\n      acceptData();\n    }\n  }\n\n  //accept data and store it in local storage\n  let data = [];\n  function acceptData() {\n\n    const newTask = {\n      title: taskTitle.value,\n      date: taskDate.value,\n      details: taskDetails.value,\n    }\n\n    data.unshift(newTask);\n\n    localStorage.setItem('data', JSON.stringify(data));\n\n    createTask();\n\n    //IIFE to take close the modal after submitting\n    (() => {\n      closeModal()\n    })()\n  }\n\n  function createTask() {\n    tasks.innerHTML = \"\";\n    data.map((selectedElement, index) => {\n      tasks.innerHTML += `<div class=\"task\" \n      id = ${index}>\n      <h4 class=\"h4\">${selectedElement.title}</h4>\n      <p class=\"date\">${selectedElement.date}</p>\n      <p class=\"details\">${selectedElement.details}</p>\n      <span class=\"taskEditors\">\n        <i onClick=\"deleteTask(this)\" class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n        <i onClick=\"editTask(this)\" class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n      </span>\n    </div> `;\n    })\n\n    resetTask();\n  }\n\n  //globally defined the delete and edit function\n  window.deleteTask = function(e) {\n    e.parentElement.parentElement.remove();\n    data.splice(e.parentElement.parentElement.index, 1);\n    \n    localStorage.setItem('data', JSON.stringify(data));\n  };\n\n  function editTaskDialog(taskTitle, taskDate, taskDetails) {\n\n    document.getElementById('taskTitle').value = taskTitle;\n    document.getElementById('taskDate').value = taskDate;\n    document.getElementById('taskDetails').value = taskDetails;\n\n    // Open the dialog\n    modal.showModal();\n  }\n\n\n  window.editTask = function(e) {\n    const taskElement = e.parentElement.parentElement;\n\n    const taskIndex = taskElement.getAttribute('id');\n    const taskTitle = taskElement.querySelector('.h4').textContent;\n    const taskDate = taskElement.querySelector('.date').textContent;\n    const taskDetails = taskElement.querySelector('.details').textContent;\n\n    editTaskDialog(taskTitle, taskDate, taskDetails);\n\n    // Remove the task from the list\n    taskElement.remove();\n\n    data[taskIndex] = {\n      title: taskTitle.value,\n      date: taskDate.value,\n      details: taskDetails.value,\n  };\n\n    data.splice(e.parentElement.parentElement.index, 1);\n    localStorage.setItem('data', JSON.stringify(data));\n\n\n  };\n  \n  window.onload = function() {\n      // Retrieve data from local storage\n      const taskArr = JSON.parse(localStorage.getItem('data')) || [];\n  \n      // Render tasks on the UI\n      taskArr.forEach(task => {\n          tasks.innerHTML += ` \n              <div class=\"task\">\n                  <h4 class=\"h4\">${task.title}</h4>\n                  <p class=\"date\">${task.date}</p>\n                  <p class=\"details\">${task.details}</p>\n                  <span class=\"taskEditors\">\n                      <i onclick=\"deleteTask(this)\" class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n                      <i onclick=\"editTask(this)\" class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n                  </span>\n              </div> `;\n      });\n  };\n\n} \n\nconst resetTask = () => {\n  taskTitle.value = '';\n  taskDate.value = '';\n  taskDetails.value = '';\n}\n\n//# sourceURL=webpack://crud_app/./src/app.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', _app__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://crud_app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
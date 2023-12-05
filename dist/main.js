"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["main"],{

/***/ "./src/inbox.js":
/*!**********************!*\
  !*** ./src/inbox.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function inboxDisplayController() {
  const mainDiv = document.querySelector('main');

  mainDiv.innerHTML = 'INBOX test page';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inboxDisplayController);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inbox */ "./src/inbox.js");
/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./today */ "./src/today.js");
/* harmony import */ var _next7days__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./next7days */ "./src/next7days.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _tempData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tempData */ "./src/tempData.js");










function clearMain() {
  const mainDiv = document.querySelector('main');

  while (mainDiv.firstChild) {
    mainDiv.removeChild(mainDiv.firstChild);
  }
}

function initialPopulateMainDiv() {
  const body = document.querySelector('body');
  const mainDiv = document.createElement('main');

  body.appendChild(mainDiv);
  (0,_projects__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

function navBarDisplayController() {
  const body = document.querySelector('body');
  const navBarDiv = document.createElement('nav');
  const navList = document.createElement('ul');
  const navListItems = {
    Projects: _projects__WEBPACK_IMPORTED_MODULE_3__["default"],
    Today: _today__WEBPACK_IMPORTED_MODULE_1__["default"],
    'Next 7 Days': _next7days__WEBPACK_IMPORTED_MODULE_2__["default"],
    Inbox: _inbox__WEBPACK_IMPORTED_MODULE_0__["default"]
  }

  body.appendChild(navBarDiv);
  navBarDiv.appendChild(navList);

  // iterate list to create each element including click event handlers
  for (const key in navListItems) {
    const element = document.createElement('li');
    element.innerHTML = key;

    // replace whitespace in key with '-'
    const modifiedItem = key.replace(/\s+/g, '-');

    element.classList.add(modifiedItem);
    element.addEventListener('click', () => {
      clearMain();
      navListItems[key](); // lookup value and call it
    });
    navList.appendChild(element);
  }
}

navBarDisplayController();
initialPopulateMainDiv();

// testing pubsub module
const currentEvent = new _pubsub__WEBPACK_IMPORTED_MODULE_4__["default"]();

currentEvent.on('activate', console.log);
currentEvent.trigger('activate', 3);


/***/ }),

/***/ "./src/next7days.js":
/*!**************************!*\
  !*** ./src/next7days.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function next7DaysDisplayController() {
  const mainDiv = document.querySelector('main');

  mainDiv.innerHTML = 'Next 7 Days test page';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next7DaysDisplayController);


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Project {
  constructor(title) {
    this.title = title;
    this._allTodos = [];
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  getAllTodos() {
    return this._allTodos;
  }

  add(item) {
    this._allTodos.push(item);
  }

  remove(item) {
    let index = this._allTodos.indexOf(item);
    if (index !== -1) {
      this._allTodos.splice(index, 1);
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);


/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tempData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tempData */ "./src/tempData.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");



function projectsDisplayController() {
  const mainDiv = document.querySelector('main');

  if (_tempData__WEBPACK_IMPORTED_MODULE_0__["default"].getList().length === 0) {
    const firstProject = new _project__WEBPACK_IMPORTED_MODULE_1__["default"]('Default');
    _tempData__WEBPACK_IMPORTED_MODULE_0__["default"].add(firstProject);
  }

  _tempData__WEBPACK_IMPORTED_MODULE_0__["default"].getList().forEach((project, index) => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');
    projectDiv.setAttribute('id', index);
    projectDiv.innerHTML = project.title;
    mainDiv.appendChild(projectDiv);
  })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectsDisplayController);


/***/ }),

/***/ "./src/pubsub.js":
/*!***********************!*\
  !*** ./src/pubsub.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class PubSub {
  constructor() {
    this.events = {};
  }

  on(eventName, fn) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(fn);
  }

  off(eventName, fn) {
    if (this.events[eventName]) {
      for (let i = 0; i < this.events[eventName].length; i++) {
        if (this.events[eventName][i] === fn) {
          this.events[eventName].splice(i, 1);
        }
      }
    }
  }

  trigger(eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(function(fn) {
        fn(data);
      })
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PubSub);


/***/ }),

/***/ "./src/tempData.js":
/*!*************************!*\
  !*** ./src/tempData.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class TempData {
  constructor() {
    this.allProjects = [];
  }

  getList() {
    return this.allProjects;
  }

  add(item) {
    this.allProjects.push(item);
  }

  remove(item) {
    let index = this.items.indexOf(item);
    if (index !== -1) {
      this._items.splice(index, 1);
    }
  }

  clear() {
    this.allProjects = [];
  }
}

const currentSession = new TempData();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (currentSession);


/***/ }),

/***/ "./src/today.js":
/*!**********************!*\
  !*** ./src/today.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function todayDisplayController() {
  const mainDiv = document.querySelector('main');

  mainDiv.innerHTML = 'TODAY test page';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todayDisplayController);


/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Todo {
  constructor(title, description, dueDate, priority, notes = null, checklist = null, complete = false) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
    this.complete = complete;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  get description() {
    return this._description;
  }

  set description(value) {
    this._description = value;
  }

  get dueDate() {
    return this._dueDate;
  }

  set dueDate(value) {
    this._dueDate = value;
  }

  get priority() {
    return this._priority;
  }

  set priority(value) {
    this._priority = value;
  }

  get notes() {
    return this._notes;
  }

  set notes(value) {
    this._notes = value;
  }

  get checklist() {
    return this._checklist;
  }

  set checklist(value) {
    this._checklist = value;
  }

  get complete() {
    return this._complete;
  }

  set complete(value) {
    this._complete = value;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLHNCQUFzQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05PO0FBQ0E7QUFDUTtBQUNGO0FBQ3JCOztBQUVFO0FBQ047QUFDYzs7QUFFeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLHFEQUF5QjtBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxpREFBeUI7QUFDdkMsV0FBVyw4Q0FBc0I7QUFDakMsbUJBQW1CLGtEQUEwQjtBQUM3QyxXQUFXLDhDQUFzQjtBQUNqQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QiwrQ0FBTTs7QUFFL0I7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSwwQkFBMEIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDTjFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE9BQU8sRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QmlCO0FBQ1I7O0FBRWhDO0FBQ0E7O0FBRUEsTUFBTSxpREFBYztBQUNwQiw2QkFBNkIsZ0RBQU87QUFDcEMsSUFBSSxpREFBYztBQUNsQjs7QUFFQSxFQUFFLGlEQUFjO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUVBQWUseUJBQXlCLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3BCekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixtQ0FBbUM7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzdCdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsaUVBQWUsY0FBYyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUMzQjlCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxzQkFBc0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDTnRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5ib3guanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9uZXh0N2RheXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RlbXBEYXRhLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RheS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBpbmJveERpc3BsYXlDb250cm9sbGVyKCkge1xuICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuXG4gIG1haW5EaXYuaW5uZXJIVE1MID0gJ0lOQk9YIHRlc3QgcGFnZSc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluYm94RGlzcGxheUNvbnRyb2xsZXI7XG4iLCJpbXBvcnQgaW5ib3hEaXNwbGF5Q29udHJvbGxlciBmcm9tIFwiLi9pbmJveFwiO1xuaW1wb3J0IHRvZGF5RGlzcGxheUNvbnRyb2xsZXIgZnJvbSBcIi4vdG9kYXlcIjtcbmltcG9ydCBuZXh0N0RheXNEaXNwbGF5Q29udHJvbGxlciBmcm9tIFwiLi9uZXh0N2RheXNcIjtcbmltcG9ydCBwcm9qZWN0c0Rpc3BsYXlDb250cm9sbGVyIGZyb20gXCIuL3Byb2plY3RzXCI7XG5pbXBvcnQgUHViU3ViIGZyb20gXCIuL3B1YnN1YlwiO1xuXG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgVG9kbyBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgY3VycmVudFNlc3Npb24gZnJvbSBcIi4vdGVtcERhdGFcIjtcblxuZnVuY3Rpb24gY2xlYXJNYWluKCkge1xuICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuXG4gIHdoaWxlIChtYWluRGl2LmZpcnN0Q2hpbGQpIHtcbiAgICBtYWluRGl2LnJlbW92ZUNoaWxkKG1haW5EaXYuZmlyc3RDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdGlhbFBvcHVsYXRlTWFpbkRpdigpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcblxuICBib2R5LmFwcGVuZENoaWxkKG1haW5EaXYpO1xuICBwcm9qZWN0c0Rpc3BsYXlDb250cm9sbGVyKCk7XG59XG5cbmZ1bmN0aW9uIG5hdkJhckRpc3BsYXlDb250cm9sbGVyKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBjb25zdCBuYXZCYXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgY29uc3QgbmF2TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGNvbnN0IG5hdkxpc3RJdGVtcyA9IHtcbiAgICBQcm9qZWN0czogcHJvamVjdHNEaXNwbGF5Q29udHJvbGxlcixcbiAgICBUb2RheTogdG9kYXlEaXNwbGF5Q29udHJvbGxlcixcbiAgICAnTmV4dCA3IERheXMnOiBuZXh0N0RheXNEaXNwbGF5Q29udHJvbGxlcixcbiAgICBJbmJveDogaW5ib3hEaXNwbGF5Q29udHJvbGxlclxuICB9XG5cbiAgYm9keS5hcHBlbmRDaGlsZChuYXZCYXJEaXYpO1xuICBuYXZCYXJEaXYuYXBwZW5kQ2hpbGQobmF2TGlzdCk7XG5cbiAgLy8gaXRlcmF0ZSBsaXN0IHRvIGNyZWF0ZSBlYWNoIGVsZW1lbnQgaW5jbHVkaW5nIGNsaWNrIGV2ZW50IGhhbmRsZXJzXG4gIGZvciAoY29uc3Qga2V5IGluIG5hdkxpc3RJdGVtcykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0ga2V5O1xuXG4gICAgLy8gcmVwbGFjZSB3aGl0ZXNwYWNlIGluIGtleSB3aXRoICctJ1xuICAgIGNvbnN0IG1vZGlmaWVkSXRlbSA9IGtleS5yZXBsYWNlKC9cXHMrL2csICctJyk7XG5cbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQobW9kaWZpZWRJdGVtKTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY2xlYXJNYWluKCk7XG4gICAgICBuYXZMaXN0SXRlbXNba2V5XSgpOyAvLyBsb29rdXAgdmFsdWUgYW5kIGNhbGwgaXRcbiAgICB9KTtcbiAgICBuYXZMaXN0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICB9XG59XG5cbm5hdkJhckRpc3BsYXlDb250cm9sbGVyKCk7XG5pbml0aWFsUG9wdWxhdGVNYWluRGl2KCk7XG5cbi8vIHRlc3RpbmcgcHVic3ViIG1vZHVsZVxuY29uc3QgY3VycmVudEV2ZW50ID0gbmV3IFB1YlN1YigpO1xuXG5jdXJyZW50RXZlbnQub24oJ2FjdGl2YXRlJywgY29uc29sZS5sb2cpO1xuY3VycmVudEV2ZW50LnRyaWdnZXIoJ2FjdGl2YXRlJywgMyk7XG4iLCJmdW5jdGlvbiBuZXh0N0RheXNEaXNwbGF5Q29udHJvbGxlcigpIHtcbiAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcblxuICBtYWluRGl2LmlubmVySFRNTCA9ICdOZXh0IDcgRGF5cyB0ZXN0IHBhZ2UnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBuZXh0N0RheXNEaXNwbGF5Q29udHJvbGxlcjtcbiIsImNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLl9hbGxUb2RvcyA9IFtdO1xuICB9XG5cbiAgZ2V0IHRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgfVxuXG4gIHNldCB0aXRsZSh2YWx1ZSkge1xuICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gIH1cblxuICBnZXRBbGxUb2RvcygpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxsVG9kb3M7XG4gIH1cblxuICBhZGQoaXRlbSkge1xuICAgIHRoaXMuX2FsbFRvZG9zLnB1c2goaXRlbSk7XG4gIH1cblxuICByZW1vdmUoaXRlbSkge1xuICAgIGxldCBpbmRleCA9IHRoaXMuX2FsbFRvZG9zLmluZGV4T2YoaXRlbSk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5fYWxsVG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcbiIsImltcG9ydCBjdXJyZW50U2Vzc2lvbiBmcm9tIFwiLi90ZW1wRGF0YVwiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuXG5mdW5jdGlvbiBwcm9qZWN0c0Rpc3BsYXlDb250cm9sbGVyKCkge1xuICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuXG4gIGlmIChjdXJyZW50U2Vzc2lvbi5nZXRMaXN0KCkubGVuZ3RoID09PSAwKSB7XG4gICAgY29uc3QgZmlyc3RQcm9qZWN0ID0gbmV3IFByb2plY3QoJ0RlZmF1bHQnKTtcbiAgICBjdXJyZW50U2Vzc2lvbi5hZGQoZmlyc3RQcm9qZWN0KTtcbiAgfVxuXG4gIGN1cnJlbnRTZXNzaW9uLmdldExpc3QoKS5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICBwcm9qZWN0RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCBpbmRleCk7XG4gICAgcHJvamVjdERpdi5pbm5lckhUTUwgPSBwcm9qZWN0LnRpdGxlO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RzRGlzcGxheUNvbnRyb2xsZXI7XG4iLCJjbGFzcyBQdWJTdWIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmV2ZW50cyA9IHt9O1xuICB9XG5cbiAgb24oZXZlbnROYW1lLCBmbikge1xuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSB0aGlzLmV2ZW50c1tldmVudE5hbWVdIHx8IFtdO1xuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChmbik7XG4gIH1cblxuICBvZmYoZXZlbnROYW1lLCBmbikge1xuICAgIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV1baV0gPT09IGZuKSB7XG4gICAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0cmlnZ2VyKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmZvckVhY2goZnVuY3Rpb24oZm4pIHtcbiAgICAgICAgZm4oZGF0YSk7XG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQdWJTdWI7XG4iLCJjbGFzcyBUZW1wRGF0YSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYWxsUHJvamVjdHMgPSBbXTtcbiAgfVxuXG4gIGdldExpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWxsUHJvamVjdHM7XG4gIH1cblxuICBhZGQoaXRlbSkge1xuICAgIHRoaXMuYWxsUHJvamVjdHMucHVzaChpdGVtKTtcbiAgfVxuXG4gIHJlbW92ZShpdGVtKSB7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMuX2l0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5hbGxQcm9qZWN0cyA9IFtdO1xuICB9XG59XG5cbmNvbnN0IGN1cnJlbnRTZXNzaW9uID0gbmV3IFRlbXBEYXRhKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJlbnRTZXNzaW9uO1xuIiwiZnVuY3Rpb24gdG9kYXlEaXNwbGF5Q29udHJvbGxlcigpIHtcbiAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcblxuICBtYWluRGl2LmlubmVySFRNTCA9ICdUT0RBWSB0ZXN0IHBhZ2UnO1xufVxuXG5leHBvcnQgZGVmYXVsdCB0b2RheURpc3BsYXlDb250cm9sbGVyO1xuIiwiY2xhc3MgVG9kbyB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzID0gbnVsbCwgY2hlY2tsaXN0ID0gbnVsbCwgY29tcGxldGUgPSBmYWxzZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgIHRoaXMuY2hlY2tsaXN0ID0gY2hlY2tsaXN0O1xuICAgIHRoaXMuY29tcGxldGUgPSBjb21wbGV0ZTtcbiAgfVxuXG4gIGdldCB0aXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gIH1cblxuICBzZXQgdGl0bGUodmFsdWUpIHtcbiAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIHNldCBkZXNjcmlwdGlvbih2YWx1ZSkge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdmFsdWU7XG4gIH1cblxuICBnZXQgZHVlRGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZHVlRGF0ZTtcbiAgfVxuXG4gIHNldCBkdWVEYXRlKHZhbHVlKSB7XG4gICAgdGhpcy5fZHVlRGF0ZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHByaW9yaXR5KCkge1xuICAgIHJldHVybiB0aGlzLl9wcmlvcml0eTtcbiAgfVxuXG4gIHNldCBwcmlvcml0eSh2YWx1ZSkge1xuICAgIHRoaXMuX3ByaW9yaXR5ID0gdmFsdWU7XG4gIH1cblxuICBnZXQgbm90ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25vdGVzO1xuICB9XG5cbiAgc2V0IG5vdGVzKHZhbHVlKSB7XG4gICAgdGhpcy5fbm90ZXMgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBjaGVja2xpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NoZWNrbGlzdDtcbiAgfVxuXG4gIHNldCBjaGVja2xpc3QodmFsdWUpIHtcbiAgICB0aGlzLl9jaGVja2xpc3QgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBjb21wbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29tcGxldGU7XG4gIH1cblxuICBzZXQgY29tcGxldGUodmFsdWUpIHtcbiAgICB0aGlzLl9jb21wbGV0ZSA9IHZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG87XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
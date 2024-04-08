"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");



function createHelloWorld() {
  const element = document.createElement('div');

  element.innerText = 'Hello world';

  return element;
}

document.body.appendChild(createHelloWorld());

// test code
_project__WEBPACK_IMPORTED_MODULE_0__["default"].addProject('Test Project Title');

_todo__WEBPACK_IMPORTED_MODULE_1__["default"].addTodo('Test Todo Title', 'Sample Description', 'high', 'tomorrow', 0)

console.log(_project__WEBPACK_IMPORTED_MODULE_0__["default"].projectList[0].todos[0].title);


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
const project = (() => {
  const projectList = [];

  class Project {
    constructor(title) {
      this.title = title;
      this.todos = [];
    }
  }

  function addProject(title) {
    const project = new Project(title);
    projectList.push(project);
  }

  function editProject(title, index) {
    projectList[index].title = title;
  }

  function deleteProject(index) {
    if (index > -1) {
      projectList.splice(index, 1);
    }
  }

  return {
    projectList,
    addProject,
    editProject,
    deleteProject,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (project);


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
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");


const todo = (() => {
  class Todo {
    constructor(title, description, priority, dueDate) {
      const priorities = ['low', 'medium', 'high'];

      this.title = title;
      this.description = description;

      if (!priorities.includes(priority)) {
        throw new Error('Invalid priority value provided')
      }

      this.priority = priority;
      this.dueDate = dueDate;
      this.isComplete = false;
    }
  }

  function addTodo(title, description, priority, dueDate, projectListIndex) {
    const todo = new Todo(title, description, priority, dueDate, projectListIndex);

    _project__WEBPACK_IMPORTED_MODULE_0__["default"].projectList[projectListIndex].todos.push(todo);
  }

  function deleteTodo(projectListIndex, todoIndex) {
    if (projectListIndex > -1 || todoIndex > -1) {
      _project__WEBPACK_IMPORTED_MODULE_0__["default"].projectList[projectListIndex].todos.splice(todoIndex, 1);
    }
  }

  function editTodo(projectListIndex, todoIndex, newTitle, newDescription, newPriority, newDueDate) {
    if (projectListIndex > -1 || todoIndex > -1) {
      const todo = _project__WEBPACK_IMPORTED_MODULE_0__["default"].projectList[projectListIndex].todos[todoIndex];

      todo.title = newTitle;
      todo.description = newDescription;
      todo.priority = newPriority;
      todo.dueDate = newDueDate;
    }
  }

  function toggleComplete(projectListIndex, todoIndex) {
    if (projectListIndex > -1 || todoIndex > -1) {
      const todo = _project__WEBPACK_IMPORTED_MODULE_0__["default"].projectList[projectListIndex].todos[todoIndex];

      todo.isComplete = !todo.isComplete;
    }
  }

  return {
    Todo,
    addTodo,
    deleteTodo,
    editTodo,
    toggleComplete
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todo);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFnQztBQUNOOztBQUUxQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxnREFBTzs7QUFFUCw2Q0FBSTs7QUFFSixZQUFZLGdEQUFPOzs7Ozs7Ozs7Ozs7Ozs7QUNsQm5CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsT0FBTyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDakNTOztBQUVoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsSUFBSSxnREFBTztBQUNYOztBQUVBO0FBQ0E7QUFDQSxNQUFNLGdEQUFPO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLGdEQUFPOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixnREFBTzs7QUFFMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHRvZG8gZnJvbSBcIi4vdG9kb1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWxsb1dvcmxkKCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgZWxlbWVudC5pbm5lclRleHQgPSAnSGVsbG8gd29ybGQnO1xuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUhlbGxvV29ybGQoKSk7XG5cbi8vIHRlc3QgY29kZVxucHJvamVjdC5hZGRQcm9qZWN0KCdUZXN0IFByb2plY3QgVGl0bGUnKTtcblxudG9kby5hZGRUb2RvKCdUZXN0IFRvZG8gVGl0bGUnLCAnU2FtcGxlIERlc2NyaXB0aW9uJywgJ2hpZ2gnLCAndG9tb3Jyb3cnLCAwKVxuXG5jb25zb2xlLmxvZyhwcm9qZWN0LnByb2plY3RMaXN0WzBdLnRvZG9zWzBdLnRpdGxlKTtcbiIsImNvbnN0IHByb2plY3QgPSAoKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IFtdO1xuXG4gIGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICB0aGlzLnRvZG9zID0gW107XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYWRkUHJvamVjdCh0aXRsZSkge1xuICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdCh0aXRsZSk7XG4gICAgcHJvamVjdExpc3QucHVzaChwcm9qZWN0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVkaXRQcm9qZWN0KHRpdGxlLCBpbmRleCkge1xuICAgIHByb2plY3RMaXN0W2luZGV4XS50aXRsZSA9IHRpdGxlO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChpbmRleCkge1xuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBwcm9qZWN0TGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcHJvamVjdExpc3QsXG4gICAgYWRkUHJvamVjdCxcbiAgICBlZGl0UHJvamVjdCxcbiAgICBkZWxldGVQcm9qZWN0LFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdDtcbiIsImltcG9ydCBwcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcblxuY29uc3QgdG9kbyA9ICgoKSA9PiB7XG4gIGNsYXNzIFRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUpIHtcbiAgICAgIGNvbnN0IHByaW9yaXRpZXMgPSBbJ2xvdycsICdtZWRpdW0nLCAnaGlnaCddO1xuXG4gICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG5cbiAgICAgIGlmICghcHJpb3JpdGllcy5pbmNsdWRlcyhwcmlvcml0eSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHByaW9yaXR5IHZhbHVlIHByb3ZpZGVkJylcbiAgICAgIH1cblxuICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSwgcHJvamVjdExpc3RJbmRleCkge1xuICAgIGNvbnN0IHRvZG8gPSBuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlLCBwcm9qZWN0TGlzdEluZGV4KTtcblxuICAgIHByb2plY3QucHJvamVjdExpc3RbcHJvamVjdExpc3RJbmRleF0udG9kb3MucHVzaCh0b2RvKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGV0ZVRvZG8ocHJvamVjdExpc3RJbmRleCwgdG9kb0luZGV4KSB7XG4gICAgaWYgKHByb2plY3RMaXN0SW5kZXggPiAtMSB8fCB0b2RvSW5kZXggPiAtMSkge1xuICAgICAgcHJvamVjdC5wcm9qZWN0TGlzdFtwcm9qZWN0TGlzdEluZGV4XS50b2Rvcy5zcGxpY2UodG9kb0luZGV4LCAxKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBlZGl0VG9kbyhwcm9qZWN0TGlzdEluZGV4LCB0b2RvSW5kZXgsIG5ld1RpdGxlLCBuZXdEZXNjcmlwdGlvbiwgbmV3UHJpb3JpdHksIG5ld0R1ZURhdGUpIHtcbiAgICBpZiAocHJvamVjdExpc3RJbmRleCA+IC0xIHx8IHRvZG9JbmRleCA+IC0xKSB7XG4gICAgICBjb25zdCB0b2RvID0gcHJvamVjdC5wcm9qZWN0TGlzdFtwcm9qZWN0TGlzdEluZGV4XS50b2Rvc1t0b2RvSW5kZXhdO1xuXG4gICAgICB0b2RvLnRpdGxlID0gbmV3VGl0bGU7XG4gICAgICB0b2RvLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgICB0b2RvLnByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gICAgICB0b2RvLmR1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZUNvbXBsZXRlKHByb2plY3RMaXN0SW5kZXgsIHRvZG9JbmRleCkge1xuICAgIGlmIChwcm9qZWN0TGlzdEluZGV4ID4gLTEgfHwgdG9kb0luZGV4ID4gLTEpIHtcbiAgICAgIGNvbnN0IHRvZG8gPSBwcm9qZWN0LnByb2plY3RMaXN0W3Byb2plY3RMaXN0SW5kZXhdLnRvZG9zW3RvZG9JbmRleF07XG5cbiAgICAgIHRvZG8uaXNDb21wbGV0ZSA9ICF0b2RvLmlzQ29tcGxldGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBUb2RvLFxuICAgIGFkZFRvZG8sXG4gICAgZGVsZXRlVG9kbyxcbiAgICBlZGl0VG9kbyxcbiAgICB0b2dnbGVDb21wbGV0ZVxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgdG9kbztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
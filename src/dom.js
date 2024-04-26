import project from "./project";
import { format } from "date-fns";

const dom = (() => {
  const dialog = document.querySelector('dialog');
  const dialogTitle = document.querySelector('.modal-title');
  const dialogContainer = document.querySelector('.modal-container');
  const dialogCancel = document.querySelector('.modal-cancel');
  const dialogAction = document.querySelector('.modal-action');
  const projectUL = document.querySelector('.projects ul')
  const addAProjectLI = document.querySelector('#navbar-add-project');
  const form = document.querySelector('.modal-container form');
  const formTitle = document.querySelector('.title');
  const formTitleInput = document.querySelector('#title');
  const formDescriptionInput = document.querySelector('#todoFormDescription');
  const formPriorityInput = document.querySelector('#todoFormPriority');
  const formDueDateInput = document.querySelector('#todoFormDueDate');
  const container = document.querySelector('.container');

  function showProjects() {
    // remove list elements except for last
    while (projectUL.children.length > 1) {
      projectUL.removeChild(projectUL.firstChild)
    }

    // add list elements for each project title
    project.projectList.forEach((element, index) => {
      const projectLI = document.createElement('li');
      const titleText = document.createTextNode(element.title);
      const edit = document.createElement('button');

      projectLI.classList.add('navbar-project')

      edit.classList.add('navbar-edit-project');
      edit.textContent = 'Edit';

      projectLI.appendChild(titleText);
      projectLI.appendChild(edit);
      projectLI.setAttribute('data-project-index', index);
      projectUL.insertBefore(projectLI, addAProjectLI);
    })
  }

  function manipulateModal(modalState, modalAction, projectIndex, taskIndex) {
    const modalActionsMap = {
      'addProject': () => {
        dialogTitle.innerText = 'Add a Project';
        dialogAction.innerText = 'Add Project';
        dialogCancel.innerText = 'Cancel';

        formTitle.classList.remove('hide')
      },

      'editProject': () => {
        dialogTitle.innerText = 'Edit a Project';
        dialogAction.innerText = 'Edit Project';
        dialogCancel.innerText = 'Cancel';
        dialogAction.setAttribute('data-project-index', projectIndex);

        formTitleInput.value = project.projectList[projectIndex].title;
        formTitle.classList.remove('hide')
      },

      'removeProject': () => {
        dialogTitle.innerText = modalAction;
        dialogContainer.innerText = modalAction;
        dialogAction.innerText = 'Delete Project';
        dialogCancel.innerText = 'Cancel';
      },

      'addTodo': () => {
        dialogTitle.innerText = 'Add Todo';
        dialogAction.innerText = 'Add Todo';
        dialogAction.setAttribute('data-project-index', projectIndex);
        dialogCancel.innerText = 'Cancel';

        for (const child of form.children) {
          child.classList.remove('hide');
        }
      },

      'editTodo': () => {
        dialogTitle.innerText = 'Edit Todo';
        dialogAction.innerText = 'Edit Todo';
        dialogCancel.innerText = 'Cancel';
        dialogAction.dataset.projectIndex = projectIndex;
        dialogAction.dataset.todoIndex = taskIndex;

        for (const child of form.children) {
          child.classList.remove('hide');
        }

        const currentTodo = project.projectList[projectIndex].todos[taskIndex];

        formTitleInput.value = currentTodo.title;
        formDescriptionInput.value = currentTodo.description;
        formPriorityInput.value = currentTodo.priority;
        formDueDateInput.value = currentTodo.dueDate;
      },

      'deleteTodo': () => {
        const message = document.querySelector('.modal-container .message');
        const currentTodo = project.projectList[projectIndex].todos[taskIndex];

        dialogTitle.innerText = 'Delete Todo';
        dialogAction.innerText = 'Delete Todo';
        dialogCancel.innerText = 'Cancel';
        dialogAction.dataset.projectIndex = projectIndex;
        dialogAction.dataset.todoIndex = taskIndex;

        message.textContent = `Delete this task? (${currentTodo.title})`;

        message.classList.remove('hide');
      },
    }

    if (modalState === 'show') {
      for (const child of form.children) {
        child.classList.add('hide');
      }

      dialog.showModal();
      modalActionsMap[modalAction]();
    }
  }

  function resetAndHideDialog() {
    dialogTitle.textContent = '';
    dialogCancel.textContent = '';
    dialogAction.textContent = '';

    formTitleInput.value = '';
    formDescriptionInput.value = '';
    formPriorityInput.value = 'low';
    formTitle.classList.add('hide');

    dialog.close();
  }

  function showProjectMain(projectIndex) {
    const projectTitle = document.createElement('div');
    const projectContainer = document.createElement('div');
    const createTodoButton = document.createElement('button');

    const currentProject = project.projectList[projectIndex];

    while (container.children.length > 0) {
      container.removeChild(container.firstChild)
    }

    createTodoButton.innerText = 'Add Todo';
    createTodoButton.setAttribute('id', 'addTodo');
    createTodoButton.dataset.projectIndex = projectIndex;

    projectTitle.textContent = currentProject.title;
    projectContainer.appendChild(projectTitle);
    projectContainer.appendChild(createTodoButton);

    currentProject.todos.forEach((todo, todoIndex) => {
      const todoContainer = document.createElement('div');
      const todoTitle = document.createElement('div');
      const todoDescription = document.createElement('div');
      const todoPriority = document.createElement('div');
      const todoDueDate = document.createElement('div');
      const todoIsComplete = document.createElement('div');
      const todoEdit = document.createElement('button');
      const todoDelete = document.createElement('button');

      const formatedDueDate = format(todo.dueDate, "MM/dd/yyyy");

      todoTitle.textContent = todo.title;
      todoDescription.textContent = todo.description;
      todoPriority.textContent = todo.priority;
      todoDueDate.textContent = formatedDueDate;
      todoIsComplete.textContent = todo.isComplete;

      todoEdit.textContent = 'Edit Todo';
      todoEdit.setAttribute('id', 'editTodo');
      todoEdit.dataset.projectIndex = projectIndex;
      todoEdit.dataset.todoIndex = todoIndex;

      todoDelete.textContent = 'Delete Todo';
      todoDelete.setAttribute('id', 'deleteTodo');
      todoDelete.dataset.projectIndex = projectIndex;
      todoDelete.dataset.todoIndex = todoIndex;

      todoContainer.appendChild(todoTitle);
      todoContainer.appendChild(todoDescription);
      todoContainer.appendChild(todoPriority);
      todoContainer.appendChild(todoDueDate);
      todoContainer.appendChild(todoIsComplete);
      todoContainer.appendChild(todoEdit);
      todoContainer.appendChild(todoDelete);

      projectContainer.appendChild(todoContainer);
    })

    container.appendChild(projectContainer);
  }

  return {
    manipulateModal,
    showProjects,
    showProjectMain,
    resetAndHideDialog,
  }
})();

export default dom;

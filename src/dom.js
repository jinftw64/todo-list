import project from "./project";
import controller from "./controller";
import Pubsub from "./pubsub";
import todoFormHTML from "./todoForm.html"

const dom = (() => {
  const dialog = document.querySelector('dialog');
  const dialogTitle = document.querySelector('.modal-title');
  const dialogContainer = document.querySelector('.modal-container');
  const dialogCancel = document.querySelector('.modal-cancel');
  const dialogAction = document.querySelector('.modal-action');
  const projectUL = document.querySelector('.projects ul')
  const addAProjectLI = document.querySelector('#navbar-add-project');
  const formTitle = document.querySelector('.title');
  const formTitleInput = document.querySelector('#title');
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
      },

      'addTodo': () => {
        dialogTitle.innerText = 'Add Todo';
        dialogContainer.innerHTML = todoFormHTML;
        dialogAction.innerText = 'Add Todo';
        dialogAction.setAttribute('data-project-index', projectIndex);
      },
    }

    const modalContainer = document.querySelector('.modal-container');

    if (modalState === 'show') {
      for (const child of modalContainer.children) {
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

    currentProject.todos.forEach((todo) => {
      const todoContainer = document.createElement('div');
      const todoTitle = document.createElement('div');
      const todoDescription = document.createElement('div');
      const todoPriority = document.createElement('div');
      const todoDueDate = document.createElement('div');
      const todoIsComplete = document.createElement('div');

      todoTitle.textContent = todo.title;
      todoDescription.textContent = todo.description;
      todoPriority.textContent = todo.priority;
      todoDueDate.textContent = todo.dueDate;
      todoIsComplete.textContent = todo.isComplete;

      todoContainer.appendChild(todoTitle);
      todoContainer.appendChild(todoDescription);
      todoContainer.appendChild(todoPriority);
      todoContainer.appendChild(todoDueDate);
      todoContainer.appendChild(todoIsComplete);

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

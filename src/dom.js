import project from "./project";
import controller from "./controller";

const dom = (() => {
  const dialog = document.querySelector('dialog');
  const dialogTitle = document.querySelector('.modal-title');
  const dialogContainer = document.querySelector('.modal-container');
  const dialogCancel = document.querySelector('.modal-cancel');
  const dialogAction = document.querySelector('.modal-action');
  const projectUL = document.querySelector('.projects ul')
  const addAProjectLI = document.querySelector('#add-a-project');
  const formTitle = document.querySelector('.title');

  function showProjects() {
    while (projectUL.children.length > 1) {
      projectUL.removeChild(projectUL.firstChild)
    }
    project.projectList.forEach((element, index) => {
      const projectLI = document.createElement('li')
      projectLI.textContent = element.title;
      projectLI.setAttribute('data-project-index', index);
      projectUL.insertBefore(projectLI, addAProjectLI);
    })
  }

  function manipulateModal(modalState, modalAction, projectIndex, taskIndex) {
    const modalActionsMap = {
      'addProject': () => {
        dialogTitle.innerText = 'Add a Project';
        dialogAction.innerText = 'Add';
        dialogCancel.innerText = 'Cancel';

        formTitle.classList.remove('hide')
      },

      'editProject': () => {
        dialogTitle.innerText = modalAction;
        dialogContainer.innerText = modalAction;
        dialogAction.innerText = 'Edit';
      },

      'removeProject': () => {
        dialogTitle.innerText = modalAction;
        dialogContainer.innerText = modalAction;
        dialogAction.innerText = 'Delete';
      },
    }
    if (modalState === 'show') {
      dialog.showModal();
      modalActionsMap[modalAction]();
    }
  }

  return {
    manipulateModal,
    showProjects,
  }
})();

export default dom;

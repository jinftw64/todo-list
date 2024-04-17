import project from "./project";
import controller from "./controller";
import Pubsub from "./pubsub";

const dom = (() => {
  const dialog = document.querySelector('dialog');
  const dialogTitle = document.querySelector('.modal-title');
  const dialogContainer = document.querySelector('.modal-container');
  const dialogCancel = document.querySelector('.modal-cancel');
  const dialogAction = document.querySelector('.modal-action');
  const projectUL = document.querySelector('.projects ul')
  const addAProjectLI = document.querySelector('#add-a-project');
  const formTitle = document.querySelector('.title');
  const formTitleInput = document.querySelector('#title');

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

      edit.classList.add('edit-project');
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
        dialogAction.innerText = 'Add';
        dialogCancel.innerText = 'Cancel';

        formTitle.classList.remove('hide')
      },

      'editProject': () => {
        dialogTitle.innerText = 'Edit a Project';
        dialogAction.innerText = 'Edit';
        dialogCancel.innerText = 'Cancel';
        dialogAction.setAttribute('data-project-index', projectIndex);

        formTitleInput.value = project.projectList[projectIndex].title;
        formTitle.classList.remove('hide')
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

  function resetAndHideDialog() {
    dialogTitle.textContent = '';
    dialogCancel.textContent = '';
    dialogAction.textContent = '';

    formTitleInput.value = '';
    formTitle.classList.add('hide');

    dialog.close();
  }

  return {
    manipulateModal,
    showProjects,
    resetAndHideDialog,
  }
})();

export default dom;

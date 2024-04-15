import project from "./project";
import controller from "./controller";

const dom = (() => {
  const dialog = document.querySelector('dialog');
  const dialogTitle = document.querySelector('.modal-title');
  const dialogContainer = document.querySelector('.modal-container');
  const dialogCancel = document.querySelector('.modal-cancel');
  const dialogAction = document.querySelector('.modal-action');

  function manipulateModal(modalState, modalAction, modalTask, projectIndex, taskIndex) {
    const modalActionsMap = {
      'addProject': function() {
        dialogTitle.innerText = modalAction;
        dialogContainer.innerText = modalAction;
        dialogAction.innerText = 'Add';
      },

      'editProject': function() {
        dialogTitle.innerText = modalAction;
        dialogContainer.innerText = modalAction;
        dialogAction.innerText = 'Edit';
      },

      'removeProject': function() {
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
  }
})();

export default dom;

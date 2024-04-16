import dom from "./dom";
import project from "./project";
import Pubsub from "./pubsub";

const handlers = (() => {
  const allTodosLink = document.querySelector('#all');
  const dialogAction = document.querySelector('.modal-action');
  const addAProjectLI = document.querySelector('#add-a-project');
  const formTitleInput = document.querySelector('#title');

  function listenForClicks() {
    addAProjectLI.addEventListener('click', () => {
      dom.manipulateModal('show', 'addProject');
    })

    dialogAction.addEventListener('click', () => {
      project.add(formTitleInput.value);
      Pubsub.trigger('updateProjects');
    })
  }

  return {
    listenForClicks,
  }
})();

export default handlers;

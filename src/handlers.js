import dom from "./dom";
import project from "./project";
import Pubsub from "./pubsub";

const handlers = (() => {

  function listenForClicks() {
    document.body.addEventListener('click', function(event) {
      const formTitleInput = document.querySelector('#title');
      const dialog = document.querySelector('dialog');

      if (event.target.id === 'add-a-project') {
        dom.manipulateModal('show', 'addProject');
      }

      if (event.target.classList.contains('edit-project')) {
        const projectIndex = event.target.parentElement.dataset.projectIndex;
        console.log(projectIndex);
        dom.manipulateModal('show', 'editProject', projectIndex)
      }

      if (event.target.classList.contains('modal-action')) {

        if (event.target.innerText === 'Add') {
          project.add(formTitleInput.value);
          Pubsub.trigger('updateProjects');
          dom.resetAndHideDialog();
        }

        if (event.target.innerText === 'Edit') {
          const projectIndex = event.target.dataset.projectIndex;
          project.edit(formTitleInput.value, projectIndex);
          Pubsub.trigger('updateProjects');
          dom.resetAndHideDialog();
        }
      }

      if (event.target.classList.contains('modal-cancel')) {
        dom.resetAndHideDialog();
      }

    })
  }

  return {
    listenForClicks,
  }
})();

export default handlers;

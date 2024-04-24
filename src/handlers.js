import dom from "./dom";
import project from "./project";
import todo from "./todo";
import Pubsub from "./pubsub";

const handlers = (() => {

  function listenForClicks() {
    document.body.addEventListener('click', function(event) {
      const formTitleInput = document.querySelector('#title');
      const dialog = document.querySelector('dialog');

      if (event.target.id === 'navbar-add-project') {
        dom.manipulateModal('show', 'addProject');
      }

      if (event.target.id === 'addTodo') {
        const projectIndex = event.target.dataset.projectIndex;
        dom.manipulateModal('show', 'addTodo', projectIndex);
      }

      if (event.target.classList.contains('navbar-project')) {
        const projectIndex = event.target.dataset.projectIndex;
        dom.showProjectMain(projectIndex);
      }

      if (event.target.classList.contains('navbar-edit-project')) {
        const projectIndex = event.target.parentElement.dataset.projectIndex;
        dom.manipulateModal('show', 'editProject', projectIndex)
      }

      if (event.target.classList.contains('modal-action')) {
        const projectIndex = event.target.dataset.projectIndex;

        if (event.target.innerText === 'Add Project') {
          project.add(formTitleInput.value);
          Pubsub.trigger('addProject', project.projectList.length - 1);
        }

        if (event.target.innerText === 'Edit Project') {
          project.edit(formTitleInput.value, projectIndex);
          Pubsub.trigger('editProject');
        }

        if (event.target.innerText === 'Add Todo') {
          const projectIndex = event.target.dataset.projectIndex;
          const title = document.querySelector('#todoFormTitle');
          const description = document.querySelector('#todoFormDescription');
          const priority = document.querySelector('#todoFormPriority');
          const dueDate = document.querySelector('#todoFormDueDate');

          todo.addTodo(title.value, description.value, priority.value, dueDate.value, projectIndex);

          Pubsub.trigger('addTodo', projectIndex);
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

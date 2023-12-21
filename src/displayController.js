import currentSession from "./tempData";

class displayController {
  clearMain() {
    const mainDiv = document.querySelector('main');

    while (mainDiv.firstChild) {
      mainDiv.removeChild(mainDiv.firstChild);
    }
  }

  initialPopulateMainDiv() {
    const body = document.querySelector('body');
    const main = document.createElement('main');

    main.innerText = 'test';

    body.appendChild(main);
  }

  refreshToDo() {
    const main = document.querySelector('main');
    const todoUL = document.createElement('ul');
    main.appendChild(todoUL);

    const currentProject = currentSession.selectedProject;
    currentProject.todos.forEach((todo, index) => {
      const todoDiv = document.createElement('li');
      todoDiv.classList.add('todo');
      todoDiv.id = index;
      todoDiv.innerHTML = todo.name;

      todoUL.appendChild(todoDiv);
    })

  }

  navBarUpdate() {
    const body = document.querySelector('body');
    const navBar = document.createElement('nav');
    const navList = document.createElement('ul');

    // display all projects
    currentSession.getProjects().forEach((project) => {
      const projectDiv = document.createElement('li');
      projectDiv.classList.add('project');
      projectDiv.id = project.name;
      projectDiv.innerHTML = project.name;
      navList.appendChild(projectDiv);
    })

    navBar.appendChild(navList);
    body.appendChild(navBar);
  }
}

const currentDisplayController = new displayController();
export default currentDisplayController;

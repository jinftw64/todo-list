import currentSession from "./tempData";
import Project from "./project";

function projectsDisplayController() {
  const mainDiv = document.querySelector('main');

  if (currentSession.getList().length === 0) {
    const firstProject = new Project('Default');
    currentSession.add(firstProject);
  }

  currentSession.getList().forEach((project, index) => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');
    projectDiv.setAttribute('id', index);
    projectDiv.innerHTML = project.title;
    mainDiv.appendChild(projectDiv);
  })
}

export default projectsDisplayController;

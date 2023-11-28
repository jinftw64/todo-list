class AllProjects {
  constructor() {
    if (instance) {
      throw new Error('New instance cannot be created.');
    }

    instance = this;
  }

  // more code here
}

function projectsDisplayController() {
  const mainDiv = document.querySelector('main');

  mainDiv.innerHTML = 'PROJECTS test page';
}

export default projectsDisplayController;

function clearMain() {
  const mainDiv = document.querySelector('main');

  while (mainDiv.firstChild) {
    mainDiv.removeChild(mainDiv.firstChild);
  }
}

function initialPopulateMainDiv() {
  const body = document.querySelector('body');
  const mainDiv = document.createElement('main');

  body.appendChild(mainDiv);
  projectsDisplayController();
}

function navBarDisplayController() {
  const body = document.querySelector('body');
  const navBarDiv = document.createElement('nav');
  const navList = document.createElement('ul');
}

navBarDisplayController();
initialPopulateMainDiv();

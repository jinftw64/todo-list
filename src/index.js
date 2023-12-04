import inboxDisplayController from "./inbox";
import todayDisplayController from "./today";
import next7DaysDisplayController from "./next7days";
import projectsDisplayController from "./projects";
import PubSub from "./pubsub";

import Project from "./project";
import Todo from "./todo";
import currentSession from "./tempData";

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
  const navListItems = {
    Projects: projectsDisplayController,
    Today: todayDisplayController,
    'Next 7 Days': next7DaysDisplayController,
    Inbox: inboxDisplayController
  }

  body.appendChild(navBarDiv);
  navBarDiv.appendChild(navList);

  // iterate list to create each element including click event handlers
  for (const key in navListItems) {
    const element = document.createElement('li');
    element.innerHTML = key;

    // replace whitespace in key with '-'
    const modifiedItem = key.replace(/\s+/g, '-');

    element.classList.add(modifiedItem);
    element.addEventListener('click', () => {
      clearMain();
      navListItems[key](); // lookup value and call it
    });
    navList.appendChild(element);
  }
}

navBarDisplayController();
initialPopulateMainDiv();

// testing pubsub module
const currentEvent = new PubSub();

currentEvent.on('activate', console.log);
currentEvent.trigger('activate', 3);

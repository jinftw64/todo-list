import './style.css'
import project from "./project";
import todo from "./todo";
import dom from "./dom";
import handlers from './handlers';
import Pubsub from './pubsub';

function createHelloWorld() {
  const element = document.createElement('div');

  element.innerText = 'Hello world';

  return element;
}

document.body.appendChild(createHelloWorld());

// test code
handlers.listenForClicks();
Pubsub.on('updateProjects', dom.showProjects);

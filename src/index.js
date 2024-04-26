import './style.css'
import dom from "./dom";
import project from './project';
import handlers from './handlers';
import Pubsub from './pubsub';

dom.showProjects();

document.body.appendChild(createHelloWorld());

// test code
handlers.listenForClicks();

Pubsub.on('addProject', dom.showProjects);
Pubsub.on('addProject', dom.resetAndHideDialog);
Pubsub.on('addProject', dom.showProjectMain);
Pubsub.on('addProject', project.updateLocalStorage);

Pubsub.on('editProject', dom.showProjects);
Pubsub.on('editProject', dom.resetAndHideDialog);
Pubsub.on('editProject', project.updateLocalStorage);

Pubsub.on('deleteProject', dom.showProjects);
Pubsub.on('deleteProject', dom.resetAndHideDialog);
Pubsub.on('deleteProject', project.updateLocalStorage);

Pubsub.on('addTodo', dom.resetAndHideDialog);
Pubsub.on('addTodo', dom.showProjectMain);
Pubsub.on('addTodo', project.updateLocalStorage);

Pubsub.on('editTodo', dom.resetAndHideDialog);
Pubsub.on('editTodo', dom.showProjectMain);
Pubsub.on('editTodo', project.updateLocalStorage);

Pubsub.on('deleteTodo', dom.resetAndHideDialog);
Pubsub.on('deleteTodo', dom.showProjectMain);
Pubsub.on('deleteTodo', project.updateLocalStorage);

import currentSession from "./data";
import Project from "./project";
import Todo from "./todo";

function clearMain() {
  const mainDiv = document.querySelector('main');

  while (mainDiv.firstChild) {
    mainDiv.removeChild(mainDiv.firstChild);
  }
}

function initialPopulateMainDiv() {
  const body = document.querySelector('body');
  const main = document.createElement('main');

  main.innerText = 'test';

  body.appendChild(main);
}

function navBarDisplayController() {
  const body = document.querySelector('body');
  const navBar = document.createElement('nav');
  const navList = document.createElement('ul');

  // display all projects
  currentSession.getProjects().forEach((project) => {
    const projectDiv = document.createElement('li');
    projectDiv.classList.add('project');
    projectDiv.id = project.name;
    navList.appendChild(projectDiv);
  })

  navBar.appendChild(navList);
  body.appendChild(navBar);
}

// test objects in console
const testProject = new Project('my first project');
const testTodo = new Todo('clean the room', '12/25/23', 'high');

testProject.addTodo(testTodo);
console.log(`this is the todo: ${testProject.todos[0].name}`)

navBarDisplayController();
initialPopulateMainDiv();

import project from "./project";
import todo from "./todo";

function createHelloWorld() {
  const element = document.createElement('div');

  element.innerText = 'Hello world';

  return element;
}

document.body.appendChild(createHelloWorld());

// test code
project.addProject('Test Project Title');

todo.addTodo('Test Todo Title', 'Sample Description', 'high', 'tomorrow', 0)

console.log(project.projectList[0].todos[0].title);

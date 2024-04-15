import project from "./project";
import todo from "./todo";
import dom from "./dom";

function createHelloWorld() {
  const element = document.createElement('div');

  element.innerText = 'Hello world';

  return element;
}

document.body.appendChild(createHelloWorld());

// test code
project.add('Test Project Title');

todo.addTodo('Test Todo Title', 'Sample Description', 'high', 'tomorrow', 0)

console.log(project.projectList[0].todos[0].title);

dom.manipulateModal('show', 'addProject', 'edit', 0, 0);

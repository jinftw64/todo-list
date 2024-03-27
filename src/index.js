import Todo from "./services/todo";
import Project from "./services/project";

function createHelloWorld() {
  const element = document.createElement('div');

  element.innerText = 'Hello world';

  return element;
}

document.body.appendChild(createHelloWorld());

// test code
const test = new Todo('some title', 'short description', 'high', 'tomorrow', false)
console.log(test);
test.toggleIsComplete();
console.log(test);

const testProject = new Project('some title');

testProject.addTodo(test);

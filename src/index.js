import currentSession from "./tempData";
import currentDisplayController from "./displayController";
import Project from "./project";
import Todo from "./todo";

// test objects in console
const testProject = new Project('my first project');
const testProject2 = new Project('second project');
const testTodo = new Todo('clean the room', '12/25/23', 'high');
const testTodo2 = new Todo('mess the room', '12/26/23', 'low');
const testTodo3 = new Todo('play in the room', '12/27/23', 'medium');

testProject.addTodo(testTodo);
testProject.addTodo(testTodo2);
testProject2.addTodo(testTodo3);
currentSession.addProject(testProject);
currentSession.addProject(testProject2);
console.log(currentSession.getProjects());

currentSession.selectedProject = testProject;

currentDisplayController.navBarUpdate();
currentDisplayController.initialPopulateMainDiv();
currentDisplayController.refreshToDo();

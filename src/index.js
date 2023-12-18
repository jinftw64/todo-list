import currentSession from "./tempData";
import currentDisplayController from "./displayController";
import Project from "./project";
import Todo from "./todo";

// test objects in console
const testProject = new Project('my first project');
const testTodo = new Todo('clean the room', '12/25/23', 'high');

testProject.addTodo(testTodo);
currentSession.addProject(testProject);
console.log(currentSession.getProjects());

currentSession.selectedProject = testProject;

currentDisplayController.navBarUpdate();
currentDisplayController.initialPopulateMainDiv();
currentDisplayController.refreshToDo();

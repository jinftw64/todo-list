import inboxDisplayController from "./inbox";
import todayDisplayController from "./today";
import next7DaysDisplayController from "./next7days";
import projectsDisplayController from "./projects";

class Todo {
  constructor(title, description, dueDate, priority, notes = null, checklist = null, complete = false) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
    this.complete = complete;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  get description() {
    return this._description;
  }

  set description(value) {
    this._description = value;
  }

  get dueDate() {
    return this._dueDate;
  }

  set dueDate(value) {
    this._dueDate = value;
  }

  get priority() {
    return this._priority;
  }

  set priority(value) {
    this._priority = value;
  }

  get notes() {
    return this._notes;
  }

  set notes(value) {
    this._notes = value;
  }

  get checklist() {
    return this._checklist;
  }

  set checklist(value) {
    this._checklist = value;
  }

  get complete() {
    return this._complete;
  }

  set complete(value) {
    this._complete = value;
  }
}

// testing
let testTodo = new Todo('walk everyday', 'this is a good exercise', 'tomorrow', 'high');

console.log(testTodo);

class Project {
  constructor(title) {
    this.title = title;
    this.items = [];
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  get items() {
    return this._items;
  }

  set items([]) {
    this._items = [];
  }

  add(item) {
    this._items.push(item);
  }

  remove(item) {
    let index = this.items.indexOf(item);
    if (index !== -1) {
      this._items.splice(index, 1);
    }
  }
}

// testing
let testProject = new Project('first project');
console.log(testProject);
console.log('add a new item')
testProject.add(testTodo);
console.log(testProject);

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
}

function navBarDisplayController() {
  const body = document.querySelector('body');
  const navBarDiv = document.createElement('nav');
  const navList = document.createElement('ul');
  const navListItems = {
    Projects: projectsDisplayController,
    Today: todayDisplayController,
    'Next 7 Days': next7DaysDisplayController, // this key has spaces so use the brackets to access the value
    Inbox: inboxDisplayController
  }

  body.appendChild(navBarDiv);
  navBarDiv.appendChild(navList);

  // iterate list to create each element including click event handlers
  for (const key in navListItems) {
    const element = document.createElement('li');
    element.innerHTML = key;

    // code below replaces whitespace in key with '-'
    const modifiedItem = key.replace(/\s+/g, '-');

    element.classList.add(modifiedItem);
    element.addEventListener('click', () => {
      clearMain();
      navListItems[key](); // lookup value of key and calls it as a function
    });
    navList.appendChild(element);
  }
}

navBarDisplayController();
initialPopulateMainDiv();

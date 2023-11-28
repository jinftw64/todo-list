console.log('Test message');

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

function clearMainDiv() {
  const mainDiv = document.querySelector('main');

  while (mainDiv.firstChild) {
    mainDiv.removeChild(mainDiv.firstChild);
  }
}

function navBarDisplayController() {
  const navBarDiv = document.querySelector('nav');
  const navList = document.createElement('ul');
  const navListItems = {
    Inbox: 'filepath.js',
    Today: 'filepath.js',
    'Next 7 Days': 'filepath.js', // this key has spaces so use the brackets to access the value
    Projects: 'filepath.js'
  }

  navBarDiv.appendChild(navList);

  // iterate list to create each element including click event handlers
  navListItems.forEach((item) => {
    const element = document.createElement('li');
    element.innerHTML = item;

    // code below replaces whitespace in key with '-'
    const modifiedItem = item.replace(/\s+/g, '-');

    element.classList.add(modifiedItem);
    element.addEventListener('click', () => {
      clearMainDiv();
      navListItems(item)(); // lookup value of key and calls it as a function
    })
    navList.appendChild(element);
  });
}

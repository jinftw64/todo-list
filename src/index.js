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

let testProject = new Project('first project');
console.log(testProject);
console.log('add a new item')
testProject.add(testTodo);
console.log(testProject);

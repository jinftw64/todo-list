class Todo {
  constructor(name, dueDate, priority) {
    this.name = name;
    this.dueDate = dueDate;
    this.priority = priority;
    this.complete = false;
  }

  _priorityLevels = {
    0: 'low',
    1: 'medium',
    2: 'high'
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
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
    this._priority = this._priorityLevels[value];
  }

  isComplete() {
    return this.complete;
  }

  toggleComplete() {
    this.complete = !this.isComplete;
  }
}

export default Todo;

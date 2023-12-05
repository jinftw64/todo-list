import mediator from "./pubsub";

class Todo {
  constructor(title, description, dueDate, priority, notes = null, complete = false) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checklist = [];
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

  getAllChecklists() {
    return this._checklist;
  }

  addChecklist(value) {
    this._checklist = this.checklist.push(value);
    mediator.on()
  }

  removeChecklist(value) {
    const index = this.checklist.indexOf(value);
    this.checklist.splice(index, 1);
  }

  get complete() {
    return this._complete;
  }

  set complete(value) {
    this._complete = value;
  }
}

export default Todo;

class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  addTodo(item) {
    this.todos.push(item);
  }

  removeTodo(item) {
    const index = this.todos.indexOf(item);
    this.todos.splice(index, 1);
  }

  add(item) {
    this.todos.push(item);
  }

  remove(item) {
    const index = this.todos.indexOf(item);
    this.todos.splice(index, 1);
  }
}

export default Project;

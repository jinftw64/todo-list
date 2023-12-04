class Project {
  constructor(title) {
    this.title = title;
    this._allTodos = [];
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  getAllTodos() {
    return this._allTodos;
  }

  add(item) {
    this._allTodos.push(item);
  }

  remove(item) {
    let index = this._allTodos.indexOf(item);
    if (index !== -1) {
      this._allTodos.splice(index, 1);
    }
  }
}

export default Project;

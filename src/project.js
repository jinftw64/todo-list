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

export default Project;

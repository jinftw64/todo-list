class TempData {
  constructor() {
    this.allProjects = [];
  }

  getList() {
    return this.allProjects;
  }

  add(item) {
    this.allProjects.push(item);
  }

  remove(item) {
    let index = this.items.indexOf(item);
    if (index !== -1) {
      this._items.splice(index, 1);
    }
  }

  clear() {
    this.allProjects = [];
  }
}

const currentSession = new TempData();

export default currentSession;

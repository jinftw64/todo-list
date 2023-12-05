class Checklist {
  constructor(title) {
    this.title = title;
    this.complete = false;
  }

  getTitle() {
    return this.title;
  }

  toggleComplete() {
    this.complete = !this.complete;
    return this.complete;
  }
}

export default Checklist;

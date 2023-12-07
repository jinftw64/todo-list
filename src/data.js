class tempData {
  constructor() {
    this.allProjects = [];
  }

  getProjects() {
    return this.allProjects;
  }

  add(item) {
    this.allProjects.push(item);
  }

  remove(item) {
    const index = this.allProjects.indexOf(item);
    this.allProjects.splice(index, 1);
  }
}

const currentSession = new tempData();
export default currentSession;

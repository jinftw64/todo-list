class TempData {
  constructor() {
    this.projects = [];
    this.selectedProject = null;
  }

  set selectedProject(item) {
    this._selectedProject = item;
  }

  get selectedProject() {
    return this._selectedProject;
  }

  getProjects() {
    return this.projects;
  }

  addProject(item) {
    this.projects.push(item);
  }

  removeProject(item) {
    let index = this.projects.indexOf(item);
    this.projects.splice(index, 1);
  }
}

const currentSession = new TempData();

export default currentSession;

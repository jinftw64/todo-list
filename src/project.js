const project = (() => {
  const projectList = [];

  class Project {
    constructor(title) {
      this.title = title;
      this.todos = [];
    }
  }

  function addProject(title) {
    const project = new Project(title);
    projectList.push(project);
  }

  function editProject(title, index) {
    projectList[index].title = title;
  }

  function deleteProject(index) {
    if (index > -1) {
      projectList.splice(index, 1);
    }
  }

  return {
    projectList,
    addProject,
    editProject,
    deleteProject,
  };
})();

export default project;

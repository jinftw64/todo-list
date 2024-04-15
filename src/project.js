const project = (() => {
  const projectList = [];

  class Project {
    constructor(title) {
      this.title = title;
      this.todos = [];
    }
  }

  function add(title) {
    const project = new Project(title);
    projectList.push(project);
  }

  function edit(title, index) {
    projectList[index].title = title;
  }

  function remove(index) {
    if (index > -1) {
      projectList.splice(index, 1);
    }
  }

  return {
    projectList,
    add,
    edit,
    remove,
  };
})();

export default project;

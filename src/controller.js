import project from "./project";

const controller = (() => {
  function getAllTodos() {
    const allTodos = [];

    project.projectList.forEach((element) => {
      element.todos.forEach((todo) => {
        allTodos.push(todo);
      })
    })

    return allTodos;
  }

  function getAllProjects() {
    return project.projectList;
  }

  return {
    getAllTodos,
    getAllProjects,
  }
})();

export default controller;

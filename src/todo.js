import project from "./project";

const todo = (() => {
  class Todo {
    constructor(title, description, priority, dueDate) {
      const priorities = ['low', 'medium', 'high'];

      this.title = title;
      this.description = description;

      if (!priorities.includes(priority)) {
        throw new Error('Invalid priority value provided')
      }

      this.priority = priority;
      this.dueDate = dueDate;
      this.isComplete = false;
    }
  }

  function addTodo(title, description, priority, dueDate, projectListIndex) {
    const todo = new Todo(title, description, priority, dueDate, projectListIndex);

    project.projectList[projectListIndex].todos.push(todo);
  }

  function deleteTodo(projectListIndex, todoIndex) {
    if (projectListIndex > -1 || todoIndex > -1) {
      project.projectList[projectListIndex].todos.splice(todoIndex, 1);
    }
  }

  function editTodo(projectListIndex, todoIndex, newTitle, newDescription, newPriority, newDueDate) {
    if (projectListIndex > -1 || todoIndex > -1) {
      const todo = project.projectList[projectListIndex].todos[todoIndex];

      todo.title = newTitle;
      todo.description = newDescription;
      todo.priority = newPriority;
      todo.dueDate = newDueDate;
    }
  }

  function toggleComplete(projectListIndex, todoIndex) {
    if (projectListIndex > -1 || todoIndex > -1) {
      const todo = project.projectList[projectListIndex].todos[todoIndex];

      todo.isComplete = !todo.isComplete;
    }
  }

  return {
    Todo,
    addTodo,
    deleteTodo,
    editTodo,
    toggleComplete
  };
})();

export default todo;

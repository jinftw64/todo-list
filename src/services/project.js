import Todo from "./todo";

export default class Project {
  constructor(title, list_of_todos = []) {
    this.title = title;
    this.list_of_todos = list_of_todos;
  }

  addTodo(todoObject) {
    this.list_of_todos.push(todoObject);
  }

  removeTodo(index) {
    if (!(index >= 0 && index < this.list_of_todos.length)) {
      throw new Error('Index out of range');
    }

    this.list_of_todos.splice(index, 1);
  }
}

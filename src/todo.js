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

    toggleIsComplete() {
      this.isComplete = !this.isComplete;
    }
  }

  return { Todo };
})();

export default todo;

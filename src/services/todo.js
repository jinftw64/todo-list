export default class Todo {
  constructor(title, description, priority, dueDate, isComplete = false) {
    const priorities = ['low', 'medium', 'high'];

    this.title = title;
    this.description = description;

    if (!priorities.includes(priority)) {
      throw new Error('Invalid priority value provided')
    }

    this.priority = priority;
    this.dueDate = dueDate;
    this.isComplete = isComplete;
  }

  toggleIsComplete() {
    this.isComplete = !this.isComplete;
  }
}

function createTodoForm() {
  const form = document.createElement('form');
  const ul = document.createElement('ul');
  form.appendChild(ul);

  const titleLabel = document.createElement('label');
  const descriptionLabel = document.createElement('label');
  const dueDateLabel = document.createElement('label');
  const priorityLabel = document.createElement('label');
  const notesLabel = document.createElement('label');
  const checklistLabel = document.createElement('label');
  const completeLabel = document.createElement('label');

  let li = document.createElement('li')
  let title = document.createElement('input');
  title.type = 'text';
  title.id = 'title';
  title.name = 'todo_title';
  titleLabel.for = 'title';
  titleLabel.innerHTML = 'Title';
  li.appendChild(titleLabel);
  li.appendChild(title);
  ul.appendChild(li);

  li = document.createElement('li')
  let description = document.createElement('input');
  description.type = 'text';
  description.id = 'description';
  description.name = 'todo_description';
  descriptionLabel.for = 'description';
  descriptionLabel.innerHTML = 'Description';
  li.appendChild(descriptionLabel);
  li.appendChild(description);
  ul.appendChild(li);

  li = document.createElement('li')
  let dueDate = document.createElement('input');
  dueDate.type = 'date';
  dueDate.id = 'dueDate';
  dueDate.name = 'todo_dueDate';
  dueDateLabel.for = 'dueDate';
  dueDateLabel.innerHTML = 'Due Date';
  li.appendChild(dueDateLabel);
  li.appendChild(dueDate);
  ul.appendChild(li);

  li = document.createElement('li')
  let priority = document.createElement('select');
  priority.innerHTML = 'Priority';
  let priorityChoices = [
    'High',
    'Medium',
    'Low',
  ];
  priorityChoices.forEach((choice) => {
    let option = document.createElement('option');
    option.innerHTML = choice;
    priority.appendChild(option);
  })
  ul.appendChild(priority);
}

function todoDisplayController(projectObject) {
  const todos = projectObject.getAllTodos();
  const container = document.createElement('div');

  todos.foreach((todo, index) => {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    todoDiv.setAttribute('id', index);
    todoDiv.innerHTML = todo.title;
    container.appendChild(todoDiv);
  })

  const addTodoButton = document.createElement('button');
  addTodoButton.innerHTML = 'Add ToDo';
  addTodoButton.addEventListener('click',)

  return container;
}

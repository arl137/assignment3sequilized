let todos = [];

const validateTaskInput = (task) => {
  if (!task) {
    return { error: 'Task is required' };
  }
  return null;
};

const createTodo = (req, res) => {
  const { task } = req.body;

  const validationError = validateTaskInput(task);
  if (validationError) {
    return res.status(400).json(validationError);
  }

  const newTodo = {
    id: todos.length + 1,
    task
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
};

module.exports = { createTodo };

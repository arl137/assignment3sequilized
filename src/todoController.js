const client = require('./models');

const createTodo = async (req, res) => {
  const { task, userId } = req.body;

  if (!task || !userId) {
    return res.status(400).json({ error: 'Task and userId are required' });
  }

  try {
    const query = 'INSERT INTO todos(task, user_id) VALUES($1, $2) RETURNING *';
    const values = [task, userId];
    const result = await client.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error creating todo' });
  }
};

module.exports = { createTodo };

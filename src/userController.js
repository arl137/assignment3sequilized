let users = [];

const validateUserInput = (username, password) => {
  if (!username || !password) {
    return { error: 'Username and password are required' };
  }
  return null;
};

const registerUser = (req, res) => {
  const { username, password } = req.body;

  const validationError = validateUserInput(username, password);
  if (validationError) {
    return res.status(400).json(validationError);
  }

  const newUser = {
    id: users.length + 1,
    username,
    password
  };

  users.push(newUser);
  res.status(201).json(newUser);
};

module.exports = { registerUser };

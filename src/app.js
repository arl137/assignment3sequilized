const express = require('express');
const bodyParser = require('body-parser');
const { registerUser } = require('./userController');
const { createTodo } = require('./todoController');

const app = express();

app.use(bodyParser.json());

app.post('/register', registerUser);

app.post('/todo', createTodo);

module.exports = app;

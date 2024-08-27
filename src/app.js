// src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const { registerUser } = require('./userController');
const { createTodo } = require('./todoController');

const app = express();

// Middleware untuk memparsing JSON
app.use(bodyParser.json());

// Route untuk mendaftarkan pengguna baru
app.post('/register', registerUser);

// Route untuk membuat tugas baru
app.post('/todo', createTodo);

module.exports = app;

const express = require('express');
const router = express.Router();
const { getUsers, getUserById, createUser, deleteUser } = require('./users');

router.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

router.get('/users', (req, res) => {
  const users = getUsers();
  res.json(users);
});

router.get('/users/:id', (req, res) => {
  const user = getUserById(req.params.id);
  if (!user) {
    res.status(404).json({ error: 'not found' });
    return;
  }
  res.json(user);
});

router.post('/users', (req, res) => {
  // No input validation
  const user = createUser(req.body);
  res.status(201).json(user);
});

router.delete('/users/:id', (req, res) => {
  deleteUser(req.params.id);
  res.status(204).send();
});

module.exports = { router };

// In-memory user store (no persistence)
let users = [
  { id: '1', name: 'Alice', email: 'alice@example.com', role: 'admin' },
  { id: '2', name: 'Bob', email: 'bob@example.com', role: 'user' },
];

let nextId = 3;

function getUsers() {
  return users;
}

function getUserById(id) {
  return users.find(u => u.id == id); // == instead of ===
}

function createUser(data) {
  const user = {
    id: String(nextId++),
    name: data.name,
    email: data.email,
    role: data.role || 'user',
  };
  users.push(user);
  return user;
}

function deleteUser(id) {
  users = users.filter(u => u.id !== id);
}

function updateUser(id, data) {
  const idx = users.findIndex(u => u.id === id);
  if (idx === -1) return null;
  users[idx] = { ...users[idx], ...data };
  return users[idx];
}

module.exports = { getUsers, getUserById, createUser, deleteUser, updateUser };

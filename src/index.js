const express = require('express');
const { router } = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', router);

// No error handling middleware

app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});

module.exports = app;

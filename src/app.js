const express = require('express');
const { sequelize } = require('./models');

const app = express();

app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('Backend is running');
});

// DB sync
sequelize.sync({ alter: true })
  .then(() => console.log(' Tables created'))
  .catch(err => console.log(' DB Error:', err));

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
/*require('dotenv').config(); 

const express = require('express');
const { sequelize } = require('./models');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend Running');
});

// AUTH (temporary for now)
app.post('/auth/register', (req, res) => {
  res.json({ message: "Register OK" });
});

app.post('/auth/login', (req, res) => {
  res.json({ message: "Login OK" });
});

// CONTENT
app.post('/content/upload', (req, res) => {
  res.json({ message: "Upload OK" });
});

app.get('/content', (req, res) => {
  res.json({ message: "Get Content OK" });
});

// ADMIN
app.post('/content/approve/:id', (req, res) => {
  res.json({ message: "Approved" });
});

// DB SYNC
sequelize.sync({ alter: true })
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  //console.log('Server running on ${PORT}');
   console.log(`Server running on ${PORT}`);
});*/

require('dotenv').config();

const express = require('express');
const { sequelize } = require('./models');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend Running');
});

// DB AUTH CHECK
sequelize.authenticate()
  .then(() => console.log(" DB Authentication Success"))
  .catch(err => console.error(" Auth Error:", err));

// DB SYNC
sequelize.sync({ alter: true })
  .then(() => console.log(" DB Connected Successfully"))
  .catch(err => console.error(" DB Error:", err));

app.listen(3000, () => {
  console.log("Server running on 3000");
});
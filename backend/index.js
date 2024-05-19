const express = require('express');
const dbconnect = require('./db/dbconfig');
const app = express();
const port = 3000;
const User = require('./db/models/User');
User();
// Middleware to parse JSON bodies
app.use(express.json());
dbconnect();
// Define a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

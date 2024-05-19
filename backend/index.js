const express = require('express');
const dbconnect = require('./db/dbconfig');
const app = express();
const port = 3000;
const path = require('path');
require('dotenv').config();
const User = require('./db/models/User');
const Property = require('./db/models/Property');
const appointment = require('./db/models/Appointment');
const message = require('./db/models/Message');
appointment();
message();
Property();
User();
// Middleware to parse JSON bodies

app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
dbconnect();
// Define a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

const userRoutes = require('./routes/CreateUser');
app.use('/createuser', userRoutes);

const PropertyRoutes = require('./routes/Property');
app.use('/property',PropertyRoutes);

const loginRoutes = require('./routes/Login');
app.use('/login', loginRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

const express = require('express');
const dbconnect = require('./db/dbconfig');
const cors = require('cors');
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
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
dbconnect();
app.get('/', (req, res) => {
  res.send('Hello World!');
});

const userRoutes = require('./routes/CreateUser');
app.use('/createuser', userRoutes);

const PropertyRoutes = require('./routes/Property');
app.use('/property',PropertyRoutes);

const loginRoutes = require('./routes/Login');
app.use('/login', loginRoutes);

const appointmentRoutes = require('./routes/Appoint');
app.use('/appointments', appointmentRoutes);
const MessageRoutes = require('./routes/Message');
app.use('/chat',MessageRoutes);

const Chat = require('./routes/Chat');
app.use('/getchat',Chat);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

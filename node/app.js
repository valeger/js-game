const express = require('express');
const mongoose = require('mongoose');
const createUser = require('./routes/createUser');
const getData = require('./routes/getData');
const updateData = require('./routes/updateData');
const app = express();

const MONGODB_USER = process.env.MONGODB_USER || 'admin';
const MONGODB_PASS = process.env.MONGODB_PASS || 'admin';
const DB_CONNECTION = `mongodb://${MONGODB_USER}:${MONGODB_PASS}@mongodb:27017/User?authSource=admin`;

mongoose.connect(DB_CONNECTION, { useNewUrlParser: true }, { useUnifiedTopology: true });

mongoose.connection.on('error', err => {
  console.error(err);
  process.exit(1);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, OPTIONS');
  next();
});


app.use('/users', getData);
app.use('/users', createUser);
app.use('/users', updateData);

app.use((err, req, res, next) => {
  console.error('Catch-All error handler:', err);
  if (req) {
    res.status(err.status || 500).send('Internal Server Error');
  } 
});

module.exports = app;

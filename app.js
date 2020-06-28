const express = require('express');
const dotenv = require('dotenv');
const db = require('./models');

dotenv.config();
db.sequelize.sync();

// avoiding CORS(Cross Origin Resource Sharing), this adds to the headed
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization',
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS',
  );
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// URLS GO HERE

module.exports = app;

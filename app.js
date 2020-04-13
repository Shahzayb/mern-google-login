const express = require('express');
const logger = require('morgan');
const path = require('path');

require('dotenv').config({
  path: path.join(__dirname, './config/dev.env'),
});

const authRouter = require('./routes/auth');

const app = express();

app.use(logger('combined'));
app.use(express.json());

app.use('/api/auth/', authRouter);

// catch 404
app.use(function (req, res, next) {
  res.status(404).send();
});

// global error handler
app.use(function (err, req, res, next) {
  res.status(500).send();
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started of port ${PORT}`));

module.exports = app;

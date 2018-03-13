const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

// connect db
mongoose.connect('mongodb://root:pW20081790@ds261138.mlab.com:61138/amazonclone', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected to db');
  }
  return 0;
});

const app = express();

app.set('view engine', 'ejs');

// Middleeare

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/test', (req, res) => {
  res.render('test');
});

app.get('/test-result', (req, res) => {
  res.send(req.query);
});

app.listen(3000, (err) => {
  if (err) throw err;

  console.log('server is listening on port 3000');
});

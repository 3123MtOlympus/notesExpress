const express = require('express');
const path = require('path');
const api = require('./route/index.js');

// const api = require('../Assets/js');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));


// GET Route for index.html
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

//GET Route for notes.html
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);


  app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
const express = require('express');
const path = require('path');

const api = require('../Assets/js');

const PORT = process.env.PORT || 3001;

const app = express();


// GET Route for index.html
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

//GET Route for notes.html
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// POST Route to
app.post('/api/notes', (req, res) =>
  res.sendFile(path.join(__dirname,'' ))
  )

  app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
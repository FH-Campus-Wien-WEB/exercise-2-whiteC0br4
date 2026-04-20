const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const movieModel = require('./movie-model.js');

const app = express();

// Parse JSON bodies
app.use(bodyParser.json());

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Endpoint: Alle Filme abrufen
app.get('/movies', function (req, res) {
  res.json(movieModel.getAll());
});

// Endpoint: Einzelnen Film abrufen
app.get('/movies/:imdbID', function (req, res) {
  const movie = movieModel.getById(req.params.imdbID);
  if (!movie) {
    return res.sendStatus(404);
  }
  res.json(movie);
});

// Endpoint: Film aktualisieren
app.put('/movies/:imdbID', function (req, res) {
  const updatedMovie = movieModel.update(req.params.imdbID, req.body);
  if (!updatedMovie) {
    return res.sendStatus(404);
  }
  res.json(updatedMovie);
});

// Server starten
app.listen(3000, () => {
  console.log("Server now listening on http://localhost:3000/");
});
// edit.js
document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const imdbID = urlParams.get('imdbID');
  const form = document.getElementById('edit-form');

  fetch(`/movies/${imdbID}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(movie => {
      document.getElementById('imdbID').value = movie.imdbID;
      document.getElementById('title').value = movie.Title;
      document.getElementById('released').value = movie.Released;
      document.getElementById('runtime').value = movie.Runtime;
      document.getElementById('genres').value = movie.Genres.join(', ');
      document.getElementById('directors').value = movie.Directors.join(', ');
      document.getElementById('writers').value = movie.Writers.join(', ');
      document.getElementById('actors').value = movie.Actors.join(', ');
      document.getElementById('plot').value = movie.Plot;
      document.getElementById('poster').value = movie.Poster;
      document.getElementById('metascore').value = movie.Metascore;
      document.getElementById('imdbRating').value = movie.imdbRating;
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error loading movie data');
    });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const updatedMovie = {
      imdbID: document.getElementById('imdbID').value,
      Title: document.getElementById('title').value,
      Released: document.getElementById('released').value,
      Runtime: parseInt(document.getElementById('runtime').value),
      Genres: document.getElementById('genres').value.split(',').map(genre => genre.trim()),
      Directors: document.getElementById('directors').value.split(',').map(director => director.trim()),
      Writers: document.getElementById('writers').value.split(',').map(writer => writer.trim()),
      Actors: document.getElementById('actors').value.split(',').map(actor => actor.trim()),
      Plot: document.getElementById('plot').value,
      Poster: document.getElementById('poster').value,
      Metascore: parseInt(document.getElementById('metascore').value),
      imdbRating: parseFloat(document.getElementById('imdbRating').value)
    };

    fetch(`/movies/${imdbID}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedMovie)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(() => {
      window.location.href = 'index.html';
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error saving movie data');
    });
  });
});
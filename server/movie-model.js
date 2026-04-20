const movies = {
  "tt0111161": {
    imdbID: "tt0111161",
    Title: "The Shawshank Redemption",
    Released: "1994-10-14",
    Runtime: 142,
    Genres: ["Drama"],
    Directors: ["Frank Darabont"],
    Writers: ["Stephen King", "Frank Darabont"],
    Actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    Plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg",
    Metascore: 80,
    imdbRating: 9.3
  },
  "tt0068646": {
    imdbID: "tt0068646",
    Title: "The Godfather",
    Released: "1972-03-24",
    Runtime: 175,
    Genres: ["Crime", "Drama"],
    Directors: ["Francis Ford Coppola"],
    Writers: ["Mario Puzo", "Francis Ford Coppola"],
    Actors: ["Marlon Brando", "Al Pacino", "James Caan"],
    Plot: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    Poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    Metascore: 100,
    imdbRating: 9.2
  },
  "tt0468569": {
    imdbID: "tt0468569",
    Title: "The Dark Knight",
    Released: "2008-07-18",
    Runtime: 152,
    Genres: ["Action", "Crime", "Drama"],
    Directors: ["Christopher Nolan"],
    Writers: ["Jonathan Nolan", "Christopher Nolan", "David S. Goyer"],
    Actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    Metascore: 84,
    imdbRating: 9.0
  }
};

module.exports = {
  getAll: () => Object.values(movies),
  getById: (imdbID) => movies[imdbID],
  update: (imdbID, updatedMovie) => {
    if (!movies[imdbID]) {
      return null;
    }
    movies[imdbID] = { ...movies[imdbID], ...updatedMovie };
    return movies[imdbID];
  }
};
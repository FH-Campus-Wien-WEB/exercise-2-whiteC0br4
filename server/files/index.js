window.onload = function () {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const moviesContainer = document.getElementById("movies-container");
    if (xhr.status == 200) {
      const movies = JSON.parse(xhr.responseText);

      for (const movie of movies) {
        const movieElement = document.createElement("article");
        movieElement.classList.add("movie");

        const titleElement = document.createElement("h2");
        titleElement.textContent = movie.Title;
        movieElement.appendChild(titleElement);

        const metaElement = document.createElement("div");
        metaElement.classList.add("meta");

        const genresHTML = movie.Genres.map(genre =>
          `<span class="genre">${genre}</span>`
        ).join(" ");

        metaElement.innerHTML = `
          <span>${movie.Released}</span>
          <span>${movie.Runtime} min</span>
          ${genresHTML}
          <span class="rating">IMDb: ${movie.imdbRating}</span>
        `;
        movieElement.appendChild(metaElement);

        const posterElement = document.createElement("img");
        posterElement.src = movie.Poster;
        posterElement.alt = `Poster für ${movie.Title}`;
        posterElement.classList.add("poster");
        movieElement.appendChild(posterElement);

        const plotElement = document.createElement("p");
        plotElement.textContent = movie.Plot;
        movieElement.appendChild(plotElement);

        const infoElement = document.createElement("ul");
        infoElement.classList.add("info");
        infoElement.innerHTML = `
          <li><strong>Regie:</strong> <span>${movie.Directors.join(", ")}</span></li>
          <li><strong>Schauspieler:</strong> <span>${movie.Actors.join(", ")}</span></li>
          <li><strong>Autoren:</strong> <span>${movie.Writers.join(", ")}</span></li>
          <li><strong>Metascore:</strong> <span>${movie.Metascore}</span></li>
        `;
        movieElement.appendChild(infoElement);

        const editLink = document.createElement("a");
        editLink.href = `edit.html?imdbID=${movie.imdbID}`;
        editLink.textContent = "Edit";
        editLink.classList.add("edit-button");
        movieElement.appendChild(editLink);

        moviesContainer.appendChild(movieElement);
      }
    } else {
      moviesContainer.textContent =
        "Daten konnten nicht geladen werden, Status " +
        xhr.status +
        " - " +
        xhr.statusText;
    }
  };
  xhr.open("GET", "/movies");
  xhr.send();
};
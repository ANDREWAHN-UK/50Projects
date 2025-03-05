// Set our constants below:

const API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9da72db1a7e06968cd42d58b82605ee4&page=1';

const IMG_PATH = 'https://image.tmbd.org/t/p/w500';

const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?&api_key=9da72db1a7e06968cd42d58b82605ee4&query="';

const form = document.getElementById("form");

const search = document.getElementById("search");

const main = document.getElementById("main");

// Get the initial movies, which is limited to 20 I think
getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  console.log(data.results); 
  showMovies(data.results);
}

// show the movies and display selected data. The selected data are variables pulled from the API
function showMovies(movies) {
  main.innerHTML = "";

  movies.forEach((movie) => {
    const { title, backdrop_path, poster_path, vote_average, overview } = movie;

    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
    
      <img src="${IMG_PATH + poster_path}" alt="${title}">
      <div class="movie-info">
        <h3 class="movie-title">
          ${title}
        </h3><span class="${getClassByRate(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
        <p>${overview}</p>
      </div>
    
    `
    
    main.appendChild(movieEl);
  });
}

// This function changes the class of the span class depending on the average rating of the movie
function getClassByRate(vote) {
  if (vote >= 8) {
    return 'green';
  } else if (vote >= 5) {
    return 'orange';
  } else {
    return 'red';
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // create constant searchTerm
  const searchTerm = search.value;

  // run some checks on searchTerm
  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_API + searchTerm);
    search.value = "";
  } else {
    // If an empty form is submitted, just reload the page
    window.location.reload();
  }
});

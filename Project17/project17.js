// Set our constants below:

const API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9da72db1a7e06968cd42d58b82605ee4&page=1';

const IMG_PATH = 'https://image.tmbd.org/t/p/w1280';

const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?&api_key=9da72db1a7e06968cd42d58b82605ee4&query="';

const form = document.getElementById('form');

const search = document.getElementById('search');

// Get the initial movies, which is limited to 20 I think
getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  console.log(data.results);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // create constant searchTerm
  const searchTerm = search.value;

  // run some checks on searchTerm
  if (searchTerm && searchTerm !== '') {
      getMovies(SEARCH_API + searchTerm)
      search.value = ''
  } else {
    // If an empty form is submitted, just reload the page
    window.location.reload()
  }
});

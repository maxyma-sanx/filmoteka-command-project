import refs from './js/refs';

import MovieDB from './js/fetchMovieAPI';

import renderMovies from './js/renderMovies';
import renderTargetMovie from './js/renderTargetMovie';

const movieDB = new MovieDB();

async function renderPopularMovies() {
  const { results } = await movieDB.fetchPopularMovie();
  renderMovies(results);
}

renderPopularMovies();

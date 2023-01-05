import MovieDB from '../API/fetchMovieAPI';
import { Notify } from 'notiflix';

import renderMovies from '../render/renderSearchMovies';

const movieDB = new MovieDB();

export default (async function renderPopularMovies() {
  try {
    const { results } = await movieDB.fetchPopularMovie();
    renderMovies(results);
  } catch (error) {
    Notify.failure(`${error.message}`);
  }
})();

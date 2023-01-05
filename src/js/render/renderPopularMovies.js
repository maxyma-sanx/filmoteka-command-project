import MovieDB from '../API/fetchMovieAPI';
import { Notify } from 'notiflix';

import renderMovies from '../render/renderSearchMovies';
import createPagesElements from '../render/renderPagination';

const movieDB = new MovieDB();

export default (async function renderPopularMovies() {
  try {
    const { results, total_pages } = await movieDB.fetchPopularMovie();
    createPagesElements(total_pages);
    renderMovies(results);
  } catch (error) {
    Notify.failure(`${error.message}`);
  }
})();

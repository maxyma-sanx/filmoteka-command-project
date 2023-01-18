import refs from '../refs';

import { Loading, Notify } from 'notiflix';

import MovieDB from '../API/fetchMovieAPI';

import renderMovies from '../render/renderSearchMovies';
import createPagination from '../API/tuiPaginationAPI';

import { clearHTML } from '../utils/clear';
import lang from '../utils/checkStorageLang';

const movieDB = new MovieDB();

// Функція рендеру популярних фільмів на сторінку та її виклик
export default (async function renderPopularMovies() {
  try {
    Loading.standard();

    const { results, total_results } = await movieDB.fetchPopularMovie(lang);
    const renderMarkup = await renderMovies(results);

    refs.movies.insertAdjacentHTML('beforeend', renderMarkup);

    Loading.remove();

    // Створення пагінації фільмів по популярності
    createPagination(total_results, async event => {
      movieDB.page = event.page;
      clearHTML(refs.movies);

      Loading.standard();

      const { results } = await movieDB.fetchPopularMovie(lang);
      const renderMarkup = await renderMovies(results);

      refs.movies.insertAdjacentHTML('beforeend', renderMarkup);

      Loading.remove();
    });
  } catch (error) {
    Notify.failure(`${error.message}`);
  }
})();

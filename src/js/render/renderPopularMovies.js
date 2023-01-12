import refs from '../refs';

import Notiflix, { Loading, Notify } from 'notiflix';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import tuiPaginationAPI from '../API/tuiPaginationAPI';

import MovieDB from '../API/fetchMovieAPI';

import renderMovies from '../render/renderSearchMovies';
import { clearHTML } from '../utils/clear';

const movieDB = new MovieDB();

// Функція рендеру популярних фільмів на сторінку та її виклик
export default (async function renderPopularMovies() {
  try {
    Loading.standard();
    const { results, total_results } = await movieDB.fetchPopularMovie();
    const renderMarkup = await renderMovies(results);
    refs.movies.insertAdjacentHTML('beforeend', renderMarkup);
    Loading.remove();

    // Створення пагінації фільмів по популярності
    const pagination = new Pagination(
      refs.pagination,
      tuiPaginationAPI(total_results)
    );

    pagination.on('afterMove', async event => {
      movieDB.page = event.page;
      clearHTML(refs.movies);

      const { results } = await movieDB.fetchPopularMovie();
      const renderMarkup = await renderMovies(results);
      refs.movies.insertAdjacentHTML('beforeend', renderMarkup);
    });
  } catch (error) {
    Notify.failure(`${error.message}`);
  }
})();

import refs from '../refs';

import { Notify } from 'notiflix';
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
    const { results, total_results } = await movieDB.fetchPopularMovie();

    renderMovies(results);

    // Створення пагінації фільмів по популярності
    const pagination = new Pagination(
      refs.pagination,
      tuiPaginationAPI(total_results)
    );

    pagination.on('afterMove', async event => {
      movieDB.page = event.page;
      const { results } = await movieDB.fetchPopularMovie();
      clearHTML(refs.movies);
      renderMovies(results);
    });
  } catch (error) {
    Notify.failure(`${error.message}`);
  }
})();
